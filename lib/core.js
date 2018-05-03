const { protocol, sysmsg } = require('tera-data-parser'),
    Command = require('command'),
    Ping = require('./ping'),
    AbnormalityPrediction = require('./abnormalities'),
    AutoConfig = require('./autoconfig'),
    Vec3 = require('tera-vec3'),
    utils = require('./utils'),
    preset = require('../config/preset'),
    skills = require('../config/data/skills'),
    //TODO: rework this shit
    silence = require('../config/data/basicCC').reduce((map, value) => {
        map[value] = true;
        return map
    }, {}),
    evasivecc = require('../config/data/evasiveCC').reduce((map, value) => {
        map[value] = true;
        return map
    }, {}),
    extcc = require('../config/data/extendedCC').reduce((map, value) => {
        map[value] = true;
        return map
    }, {});

const INTERRUPT_TYPES = {
    'retaliate': 5,
    'lockonCast': 36
};

const Flags = {
    Player: 0x04000000,
    CC: 0x08000000
};

module.exports = function SkillPrediction(dispatch) {
    const ping = Ping(dispatch),
        abnormality = AbnormalityPrediction(dispatch),
        command = Command(dispatch),
        autoconf = AutoConfig(dispatch),
        CHARGE_DELAY_CONST = 40,
        Z_CORRECTION_DIFF = 75,
        XY_CORRECTION_DIFF = 100,
        KYS_BHS = 401719;

    //TODO: refactor this shit
    let config = null,
        sending = false,
        skillsCache = null,
        gameId = null,
        templateId = 0,
        race = -1,
        job = -1,
        vehicleEx = null,
        mounted = false,
        aspd = 1,
        currentGlyphs = null,
        currentStamina = 0,
        bodyRolls = [],
        blockedSkills = {},
        lowStaminaSystemMessage = null,
        alive = false,
        inCombat = false,
        inventoryHook = null,
        inventory = null,
        equippedWeapon = false,
        partyMembers = null,
        delayNext = 0,
        delayNextTimeout = null,
        actionNumber = 0x80000000,
        currentLocation = null,
        lastStartTime = 0,
        lastStartLocation = null,
        lastEndLocation = null,
        oopsLocation = null,
        currentAction = null,
        serverAction = null,
        serverConfirmedAction = false,
        queuedNotifyLocation = [],
        storedCharge = 0,
        lastEndSkill = 0,
        lastEndType = 0,
        lastEndedId = 0,
        lastEndedTime = 0,
        serverTimeout = null,
        stageEnd = null,
        stageEndTime = 0,
        stageEndTimeout = null,
        debugActionTime = 0,
        packetsHooks = [],
        configFile = "../config/config.json",
        defaultConfigFile = "../config/data/default-config.json",
        canChainVB = false,
        switchVB = false,
        attackSpeed = 0,
        attackSpeedBonus = 0,
        emulatedAttackSpeedBonus = 0,
        emulatedAttackSpeedBonusHandler = 0,
        fixedPending = true

    //Config init
    LoadConfiguration();

    //SP state from start enabled/disabled(init)
    if (config.enabled)
        enable();

    //Config file read 
    function LoadConfiguration(path = configFile) {
        config = utils.loadJson(utils.getFullPath(path));
        if (config.skillRetryCount > 3) {
            utils.writeWarningMessage(`skillRetryCount=${config.skillRetryCount} not allowed! skillRetryCount=1.`);
            config.skillRetryCount = 1;
        }
        if (config.skillRetryMs < 20) {
            utils.writeWarningMessage(`skillRetryMs=${config.skillRetryMs} not allowed! skillRetryMs=25.`);
            config.skillRetryMs = 25;
        }
    }

    //Config file write
    function SaveConfiguration() {
        utils.saveJson(config, utils.getFullPath(configFile));
    }

    //Enable function (for all main packets)
    function enable() {

        try {
            addHook('S_DEFEND_SUCCESS', 1, sDefendSuccessHandler);
            addHook('S_CANNOT_START_SKILL', 1, sCannotStartSkillHandler);
            addHook('C_CAN_LOCKON_TARGET', 1, cCanLockonTargetHandler);
            addHook('S_CAN_LOCKON_TARGET', 1, sCanLockonTarget);
            addHook('C_PLAYER_LOCATION', 3, cPlayerLocationHandler);
            addHook('C_NOTIFY_LOCATION_IN_ACTION', 2, notifyLocation.bind(null, 'C_NOTIFY_LOCATION_IN_ACTION', 2));
            addHook('C_NOTIFY_LOCATION_IN_DASH', 2, notifyLocation.bind(null, 'C_NOTIFY_LOCATION_IN_DASH', 2));
            for (let packet of [
                ['C_START_SKILL', 5],
                ['C_START_TARGETED_SKILL', 4],
                ['C_START_COMBO_INSTANT_SKILL', 2],
                ['C_START_INSTANCE_SKILL', 3],
                ['C_START_INSTANCE_SKILL_EX', 3],
                ['C_PRESS_SKILL', 2],
                ['C_NOTIMELINE_SKILL', 1]
            ])
                packetsHooks.push(dispatch.hook(packet[0], 'raw', {
                    order: -10,
                    filter: {
                        fake: null
                    }
                }, startSkill.bind(null, ...packet)));
            addHook('S_GRANT_SKILL', 1, sGrantSkillHandler);
            addHook('S_INSTANT_DASH', 3, sInstantDashHandler);
            addHook('S_INSTANT_MOVE', 3, sInstantMoveHandler);
            addHook('S_ACTION_END', 3, sActionEndHandler);
            addHook('C_CANCEL_SKILL', 1, cCancelSkillHandler);
            addHook('S_ACTION_STAGE', 4, sActionStageHandler);
            addHook('S_CREST_MESSAGE', 2, sCrestMessageHandler);
            addHook('S_START_COOLTIME_SKILL', 1, sStartCooltimeSkill);
        } catch (err) {
            utils.writeErrorMessage(`Critical error! Proxy client will be interrupted... ${err}`);
            process.exit()
        }
        abnormality.enabled = true;
        abnormality.DEBUG = config.debugAbnormals
    }

    //Disable function (for hooks in packetsHooks)
    function disable() {
        for (let pointer of packetsHooks) {
            dispatch.unhook(pointer);
            if (config.debug) utils.writeDebugMessage(pointer)
        }
        packetsHooks = [];
        abnormality.enabled = false;
        abnormality.DEBUG = false
    }

    function addHook(packetName, packetVersion, func) {
        packetsHooks.push(dispatch.hook(packetName, packetVersion, func))
    }

    //Commands
    command.add('sp', (option, value) => {
        switch (option) {
            case 'info':
                command.message('Unofficial SP. Date:03/05/18');
                command.message(`Class=${job}, race=${race}`);
                command.message(`Config: timeout: ${config.serverTimeout}, retries: ${config.skillRetryCount},jitter comp: ${config.jitterCompensation}, RetryMs: ${config.skillRetryMs}`);
                break;
            case 'config':
                switch (value) {
                    case 'generate':
                        if (!currentAction && !serverAction && !mounted && alive && !inCombat && !sending && config.enabled) {
                            if (ping.history.length === config.pingHistoryMax) {
                                command.message('[Skill Prediction] Gathering information ... Please wait ...');
                                let returnedConfig = autoconf.Analyze(Object.assign({}, config), ping.min, ping.avg, ping.max);
                                if (!returnedConfig) {
                                    command.message('[Skill Prediction] Nope, unreal to do smth atm.');
                                    break;
                                }
                                command.message('[Skill Prediction] The configuration in memory has been overwritten.');
                                config = returnedConfig;
                                command.message('[Skill Prediction] You can test changes and use command /8 sp config save for saving the configuration just created.');
                            } else {
                                command.message('[Skill Prediction] Not enough measurements for ping. Try to repeat command a bit later.');
                            }
                        } else {
                            command.message('[Skill Prediction] Your character is busy, wait a bit please.');
                        }
                        break;
                    case 'print':
                        command.message('[Skill Prediction] Current config:');
                        for (let [key, value] of Object.entries(config))
                            command.message(`${key}:${value}`);
                        break;
                    case 'reset':
                        LoadConfiguration(defaultConfigFile);
                        ping.UpdateConfig(config);
                        command.message('[Skill Prediction] Default configuration file loaded.');
                        command.message('[Skill Prediction] You can test changes and use command /8 sp config save for saving the changes.');
                        break;
                    case 'save':
                        SaveConfiguration();
                        command.message('[Skill Prediction] Configuration file saved.');
                        break;
                    case 'reload':
                        LoadConfiguration();
                        ping.UpdateConfig(config);
                        command.message('[Skill Prediction] Configuration file reloaded.');
                        break;
                }
                break;
            case 'debug':
                if (config.debug)
                    command.message('[Skill Prediction] Main Debug mode deactivated.');
                else
                    command.message('[Skill Prediction] Main Debug mode activated.');

                config.debug = !config.debug;
                break;
            case 'debugloc':
                if (config.debugLoc)
                    command.message('[Skill Prediction] Location debug mode deactivated.');
                else
                    command.message('[Skill Prediction] Location debug mode activated.');

                config.debugLoc = !config.debugLoc;
                break;
            case 'debugabnorm':
                if (config.debugAbnormals)
                    command.message('[Skill Prediction] Abnormals debug mode deactivated.');
                else
                    command.message('[Skill Prediction] Abnormals debug mode activated.');

                config.debugAbnormals = !config.debugAbnormals;
                abnormality.DEBUG = config.debugAbnormals;
                break;
            case 'strictdef':
                if (inCombat) {
                    command.message('[Skill Prediction] DEFEND_SUCCESS_STRICT can be changed only when out of combat.');
                } else {
                    if (config.defendSuccessStrict)
                        command.message('[Skill Prediction] DEFEND_SUCCESS_STRICT deactivated.');
                    else
                        command.message('[Skill Prediction] DEFEND_SUCCESS_STRICT activated.');

                    config.defendSuccessStrict = !config.defendSuccessStrict
                }
                break;
            case 'mount':
                if (config.mountCheck)
                    command.message('[Skill Prediction] Mount detection deactivated.');
                else
                    command.message('[Skill Prediction] Mount detection activated.');

                config.mountCheck = !config.mountCheck;
                break;
            case 'off':
                if (!currentAction && !serverAction && !mounted && alive && !inCombat && !sending && config.enabled) {
                    disable();
                    command.message('[Skill Prediction] Skill emulation Disabled.');
                    config.enabled = !config.enabled
                } else {
                    command.message('[Skill Prediction] Your character is busy or SP is already disabled.');
                }
                break;
            case 'on':
                if (!currentAction && !serverAction && !mounted && alive && !inCombat && !sending && !config.enabled) {
                    enable();
                    command.message('[Skill Prediction] Skill emulation Enabled.');
                    config.enabled = !config.enabled
                } else {
                    command.message('[Skill Prediction] Your character is busy or SP is already enabled.');
                }
                break;
            case 'ping':
                switch (value) {
                    case 'log':
                        command.message('[Skill Prediction] Ping history:');
                        for (let entry of ping.history)
                            command.message(`${entry}`);
                        break;
                    default:
                        command.message(`Ping: Min=${ping.min} Avg=${Math.floor(ping.avg)} Max=${ping.max} Variance=${ping.max - ping.min} Samples=${ping.history.length}`);
                        break;
                }
                break;
            default:
                command.message('[Skill Prediction] Invalid command.');
                break;
        }
    });

    dispatch.hook('S_LOGIN', 10, event => {
        skillsCache = {};
        ({ gameId, templateId } = event);
        race = Math.floor((templateId - 10101) / 100);
        job = (templateId - 10101) % 100;
        if (config.debug) utils.writeDebugMessage(`Class: ${job}, race: ${race}`);
        LowStaminaSmtMessage()
        hookInventory()
    });

    dispatch.hook('S_LOAD_TOPO', 'raw', () => {
        blockedSkills = {};
        vehicleEx = null;
        mounted = false;
        currentAction = null;
        serverAction = null;
        lastEndSkill = 0;
        lastEndType = 0;
        lastEndedId = 0;
        lastEndedTime = 0;
        sendActionEnd(37)
    });

    dispatch.hook('S_PLAYER_STAT_UPDATE', 9, event => {
        attackSpeed = event.attackSpeed;
        attackSpeedBonus = event.attackSpeedBonus;
        currentStamina = event.stamina;
        updateAspd();
    });

    function updateAspd() {
        // Newer classes use a different speed algorithm
        aspd = (attackSpeed + attackSpeedBonus + emulatedAttackSpeedBonus) / (job >= 8 ? 100 : attackSpeed);
    }

    dispatch.hook('S_CREST_INFO', 2, event => {
        currentGlyphs = {};
        for (let crest of event.crests)
            currentGlyphs[crest.id] = crest.enable;
    });

    dispatch.hook('S_CREST_APPLY', 2, event => {
        if (config.debugGlyphs) utils.writeDebugMessage('Glyph', event.id, event.enable);
        currentGlyphs[event.id] = event.enable;
    });

    dispatch.hook('S_PLAYER_CHANGE_STAMINA', 1, event => {
        currentStamina = event.current
    });

    dispatch.hook('S_SPAWN_ME', 2, event => {
        updateLocation(event);
        alive = event.alive;
    });

    dispatch.hook('S_CREATURE_LIFE', 2, event => {
        if (isMe(event.gameId)) {
            alive = event.alive;
            if (!alive) {
                clearStage();
                oopsLocation = currentAction = serverAction = null;
                blockedSkills = {};
            }
        }
    });

    dispatch.hook('S_USER_STATUS', 1, event => {
        if (event.target.equals(gameId)) {
            inCombat = event.status == 1;

            if (!inCombat) hookInventory();
            else if (!inventory && inventoryHook) {
                dispatch.unhook(inventoryHook);
                inventoryHook = null
            }
        }
    });

    function hookInventory() {
        if (!inventoryHook) inventoryHook = dispatch.hook('S_INVEN', 12, event => {
            inventory = event.first ? event.items : inventory.concat(event.items);

            if (!event.more) {
                equippedWeapon = false;
                for (let item of inventory)
                    if (item.slot == 1) {
                        equippedWeapon = true;
                        break
                    }
                for (let item of inventory) {
                    if (item.slot == 3) {
                        bodyRolls = item.passivitySets[item.passivitySet].passivities.map(itm => itm.dbid);
                        break
                    }
                }
                inventory = null;
                if (inCombat) {
                    dispatch.unhook(inventoryHook);
                    inventoryHook = null
                }
            }
        })
    }

    dispatch.hook('S_PARTY_MEMBER_LIST', 6, (event) => {
        partyMembers = [];
        for (let member of event.members)
            if (!(member.gameId.equals(gameId)))
                partyMembers.push(member.gameId);
    });

    dispatch.hook('S_LEAVE_PARTY', 'raw', () => {
        partyMembers = null;
    });

    dispatch.hook('S_MOUNT_VEHICLE_EX', 1, event => {
        if (event.target.equals(gameId)) vehicleEx = event.vehicle;
    });

    dispatch.hook('S_UNMOUNT_VEHICLE_EX', 1, event => {
        if (event.target.equals(gameId)) vehicleEx = null;
    });

    dispatch.hook('S_MOUNT_VEHICLE', 2, event => {
        if (event.gameId.equals(gameId)) {
            mounted = true;
            if (config.debug) utils.writeDebugMessage('Your character mounted');
        }
    });

    dispatch.hook('S_UNMOUNT_VEHICLE', 2, event => {
        if (event.gameId.equals(gameId)) {
            mounted = false;
            if (config.debug) utils.writeDebugMessage('Your character unmounted');
        }
    });

    function cPlayerLocationHandler(event) {
        if (config.debugLoc) utils.writeDebugMessage(`Location type: ${event.type} speed: ${utils.decimal(event.speed)} (${event.loc}) > (${event.dest})`);
        if (currentAction) {
            let info = skillInfo(currentAction.skill);
            if (info && info.distance) return false;
        }

        updateLocation({
            loc: event.loc.addN(event.dest).scale(0.5),
            w: event.w
        });
    }

    function notifyLocation(type, version, event) {
        if (config.debugLoc) utils.writeDebugMessage(`-> ${type} ${skillId(event.skill)} ${event.stage} (${event.loc})`);

        updateLocation(event, true);

        let info = skillInfo(event.skill);
        // The server rejects and logs packets with an incorrect skill, so if a skill has multiple possible IDs then we wait for a response
        if (info && (info.chains || info.hasChains))
            if (serverConfirmedAction) {
                if (!serverAction) return false;
                else if (event.skill !== serverAction.skill) {
                    event.skill = serverAction.skill;
                    return true
                }
            }
            else {
                queuedNotifyLocation.push([type, version, event]);
                return false
            }
    }

    function dequeueNotifyLocation(skill) {
        if (queuedNotifyLocation.length) {
            if (skill)
                for (let [type, version, event] of queuedNotifyLocation) {
                    event.skill = skill;
                    dispatch.toServer(type, version, event);
                }
            queuedNotifyLocation = [];
        }
    }

    function startSkill(type, version, code, data) {
        if (sending) return;

        let event = protocol.parse(dispatch.base.protocolVersion, type, version, data = Buffer.from(data)),
            info = skillInfo(event.skill),
            delay = 0;

        if (delayNext && Date.now() <= stageEndTime) {
            delay = delayNext;
            if (info && !info.noRetry && config.skillRetryCount) {
                delay -= config.skillRetryJittercomp;
                if (delay < 0) delay = 0;
            }
        }

        if (config.debug) {
            let strs = ['->', type, skillId(event.skill)];

            if (type == 'C_START_SKILL') strs.push(...[event.unk ? 1 : 0, event.moving ? 1 : 0, event.continue ? 1 : 0, event.unk2 ? 1 : 0]);
            if (type == 'C_PRESS_SKILL') strs.push(event.press);
            else if (type == 'C_START_TARGETED_SKILL') {
                let tmp = [];

                for (let e of event.targets) tmp.push([e.id.toString(), e.unk].join(' '))

                strs.push('[' + tmp.join(', ') + ']')
            }

            if (config.debugLoc) {
                strs.push(...[event.w + '\xb0', '(' + Math.round(event.loc.x), Math.round(event.loc.y), Math.round(event.loc.z) + ')']);

                if (type == 'C_START_SKILL' || type == 'C_START_TARGETED_SKILL' || type == 'C_START_INSTANCE_SKILL_EX')
                    strs.push(...['>', '(' + Math.round(event.dest.x), Math.round(event.dest.y), Math.round(event.dest.z) + ')'])
            }

            if (delay) strs.push('DELAY=' + delay);

            utils.writeDebugMessage(strs.join(' '))
        }

        clearTimeout(delayNextTimeout);

        if (info && info.type === "charging" && Date.now() - lastEndedTime <= (config.skillRetryCount * config.skillRetryMs)) delay += CHARGE_DELAY_CONST;

        if (delay) {
            delayNextTimeout = setTimeout(handleStartSkill, delay, type, event, info, data, true);
            return false
        }

        return handleStartSkill(type, event, info, data)
    }

    function handleStartSkill(type, event, info, data, send) {
        serverConfirmedAction = false;
        dequeueNotifyLocation();
        delayNext = 0;

        let specialLoc = event.dest;

        if (!info) {
            if (type != 'C_PRESS_SKILL' || event.start)
                // Sometimes invalid (if this skill can't be used, but we have no way of knowing that)
                if (type != 'C_NOTIMELINE_SKILL') updateLocation(event, false, specialLoc);

            if (send) toServerLocked(data);
            return
        }

        let skill = event.skill,
            skillBase = Math.floor((skill - 0x4000000) / 10000),
            interruptType = 0;

        if (mounted && config.mountCheck) {
            sendCannotStartSkill(event.skill);
            sendSystemMessage('SMT_PROHIBITED_ACTION_ON_RIDE')
            return false
        }

        if (!alive || abnormality.inMap(silence)) {
            sendCannotStartSkill(event.skill);
            return false
        }

        if (info.CC) {
            if (Array.isArray(info.CC)) {
                for (let cc of info.CC) {
                    if (checkAdditionalAbnormals(cc)) {
                        sendCannotStartSkill(event.skill)
                        return false
                    }
                }
            } else if (checkAdditionalAbnormals(info.CC)) {
                sendCannotStartSkill(event.skill)
                return false
            }
        }

        if (!equippedWeapon && !info.withoutWeapon) {
            sendCannotStartSkill(event.skill);
            sendSystemMessage('SMT_BATTLE_SKILL_NEED_WEAPON');
            return false
        }

        if (config.emulateAttackSpeedFromSelfBuffs) { // Todo: rewrite it on a universal way xd & line 1104
            if (info && info.emulateAttackSpeedBonus) {
                // 0 = inactive, 1 = casted skill sActionEnd, 2 = Following up Skill sActionEnd(Consumption)
                (job == 4 && skillBase == 17) ? emulatedAttackSpeedBonusHandler = 1 : emulatedAttackSpeedBonusHandler = 0; // much edge case, much wow 
                emulatedAttackSpeedBonus = info.emulateAttackSpeedBonus;
                updateAspd();
                setTimeout(() => {
                    emulatedAttackSpeedBonus = 0;
                    emulatedAttackSpeedBonusHandler = 0;
                    updateAspd();
                }, 30 + delayNext + ping.min);
            }
        }

        if (info.timeout && blockedSkills[skillBase]) {
            if (config.debug) utils.writeDebugMessage(`Timeout active, can't cast ${skillBase}`);
            sendCannotStartSkill(event.skill);
            return false;
        }

        if (job == 2 && skillBase == 8) {
            if (!fixedPending) return false
            fixedPending = false
            setTimeout(() => { fixedPending = true }, 490);
        }
        else fixedPending = true

        if (type == 'C_PRESS_SKILL' && event.press && !canChainVB && job == 3 && skillBase == 15 && switchVB) return false; // todo: rewrite this ugly shit

        if (type == 'C_PRESS_SKILL' && !event.press && !(canChainVB && (job == 3 && skillBase == 15))) {
            if (currentAction && currentAction.skill == skill) {
                if (info.type == 'hold' || info.type == 'holdInfinite') {
                    updateLocation(event);

                    if (info.chainOnRelease) {
                        sendActionEnd(11);

                        info = skillInfo(skill = modifyChain(skill, info.chainOnRelease));
                        if (!info) {
                            if (send) toServerLocked(data);
                            return
                        }

                        startAction({
                            skill,
                            info,
                            stage: 0,
                            speed: info.fixedSpeed || aspd * (info.speed || 1)
                        })
                    }
                    else sendActionEnd(info.endType51 ? 51 : 10)
                } else if (info.type == 'charging') {
                    if (job == 3 && abnormality.exists(KYS_BHS)) {//shit optimization for normal classes (TODO: remove it/rewrite or smth)
                        toServerLocked('C_PRESS_SKILL', 2, {
                            skill: skill,
                            press: false,
                            loc: currentLocation.loc,
                            w: currentLocation.w
                        });
                        grantCharge(skill, info, info.length.length || 1);
                    }
                    else
                        grantCharge(skill, info, currentAction.stage);
                }
            } else if (info.type == 'grantCharge') grantCharge(skill, info, storedCharge);

            if (send) toServerLocked(data);
            return
        }

        if (currentAction) {
            if (currentAction.skill & Flags.CC && (currentAction.skill & 0xffffff !== templateId * 100 + 2 || info.type !== 'retaliate')) {
                sendCannotStartSkill(event.skill);
                return false
            }

            let currentSkill = currentAction.skill - 0x4000000,
                currentSkillBase = Math.floor(currentSkill / 10000),
                currentSkillSub = currentSkill % 100;


            if (currentSkillBase == 6190) {
                sendCannotStartSkill(event.skill);
                return false
            }

            if (canChainVB && currentSkillBase == 15 && currentSkillSub == 14) {
                setTimeout(() => {
                    switchVB = false
                }, ping.max); // this should be handled differently but reading code :thinking:
                canChainVB = false;
                if (config.debug) utils.writeDebugMessage('Chained VB disabled');
            }

            // Some skills are bugged clientside and can interrupt the wrong skills, so they need to be flagged manually
            if (info.noInterrupt && (info.noInterrupt.includes(currentSkillBase) || info.noInterrupt.includes(currentSkillBase + '-' + currentSkillSub))) {
                let canInterrupt = false;

                if (info.interruptibleWithAbnormal)
                    for (let abnormal in info.interruptibleWithAbnormal)
                        if (abnormality.exists(abnormal) && currentSkillBase == info.interruptibleWithAbnormal[abnormal])
                            canInterrupt = true;

                if (info.interruptAllWithAbnormal)
                    for (let abnormal in info.interruptAllWithAbnormal)
                        if (abnormality.exists(abnormal) && currentSkillBase !== info.interruptAllWithAbnormal[abnormal])
                            canInterrupt = true;

                if (!canInterrupt) {
                    sendCannotStartSkill(event.skill);
                    return false
                }
            }

            let chain = get(info, 'chains', currentSkillBase + '-' + currentSkillSub);
            if (chain === undefined) chain = get(info, 'chains', currentSkillBase);

            if (chain !== undefined) {
                if (chain === null) {
                    updateLocation(event, false, specialLoc);
                    sendActionEnd(4);
                    if (send) toServerLocked(data);
                    return
                }

                skill = modifyChain(skill, chain);
                interruptType = INTERRUPT_TYPES[info.type] || 4
            } else interruptType = INTERRUPT_TYPES[info.type] || 6;

            if (info.type == 'storeCharge') storedCharge = currentAction.stage
        }

        if (info.onlyDefenceSuccess)
            if (currentAction && currentAction.defendSuccess) interruptType = 3;
            else {
                sendCannotStartSkill(event.skill);
                sendSystemMessage('SMT_SKILL_ONLY_DEFENCE_SUCCESS');
                return false
            }

        if (info.onlyTarget && event.targets[0].id.equals(0)) {
            sendCannotStartSkill(event.skill);
            return false
        }

        // Skill override (chain)
        if (skill != event.skill) {
            info = skillInfo(skill);
            if (!info) {
                if (type != 'C_NOTIMELINE_SKILL') updateLocation(event, false, specialLoc);

                if (send) toServerLocked(data);
                return
            }
        }

        // TODO: System Message
        if (info.requiredBuff) {
            if (Array.isArray(info.requiredBuff)) {
                let found = false;

                for (let buff of info.requiredBuff)
                    if (abnormality.exists(buff)) {
                        found = true;
                        break
                    }

                if (!found) {
                    sendCannotStartSkill(event.skill);
                    return false
                }
            } else if (!abnormality.exists(info.requiredBuff)) {
                sendCannotStartSkill(event.skill);
                return false
            }
        }

        if (info.toggleOnAbnormality) {
            if (Array.isArray(info.toggleOnAbnormality)) {
                let found = false;

                for (let buff of info.toggleOnAbnormality)
                    if (abnormality.exists(buff)) {
                        found = true;
                        break
                    }

                if (found) {
                    sendCannotStartSkill(event.skill);
                    return false
                }
            } else if (abnormality.exists(info.toggleOnAbnormality)) {
                sendCannotStartSkill(event.skill);
                return false
            }
        }

        if (type != 'C_NOTIMELINE_SKILL') updateLocation(event, false, specialLoc);
        lastStartLocation = currentLocation;

        let additionalSpeedBonuses = 1,
            chargeSpeed = 0,
            distanceMult = 1,
            nocTanMod = 1;

        if (info.abnormals)
            for (let id in info.abnormals)
                if (abnormality.exists(id)) {
                    let abnormal = info.abnormals[id];

                    if (abnormal.speed) additionalSpeedBonuses += abnormal.speed;
                    if (abnormal.chargeSpeed) chargeSpeed += abnormal.chargeSpeed;
                    if (abnormal.nocTanSpeed) nocTanMod += abnormal.nocTanSpeed;
                    if (abnormal.chain) skill = modifyChain(skill, abnormal.chain);
                    if (abnormal.skill) skill = 0x4000000 + abnormal.skill
                }

        // Skill override (abnormal)
        if (skill != event.skill) {
            info = skillInfo(skill);
            if (!info) {
                if (send) toServerLocked(data);
                return
            }
        }

        if (interruptType) event.continue ? clearStage() : sendActionEnd(interruptType);

        // Finish calculations and send the final skill
        let speed = info.fixedSpeed || aspd * (info.speed || 1),
            movement = null,
            stamina = info.stamina;

        if (info.glyphs)
            for (let id in info.glyphs)
                if (currentGlyphs[id]) {
                    let glyph = info.glyphs[id];

                    if (glyph.speed) additionalSpeedBonuses += glyph.speed;
                    if (glyph.chargeSpeed) chargeSpeed += glyph.chargeSpeed;
                    if (glyph.movement) movement = glyph.movement;
                    if (glyph.distance) distanceMult *= glyph.distance;
                    if (glyph.stamina) stamina += glyph.stamina
                }

        if (info.bodyRolls) {
            for (let id in info.bodyRolls) {
                if (bodyRolls.includes(id)) {
                    let roll = info.bodyRolls[id];

                    if (roll.chargeSpeed) chargeSpeed += roll.chargeSpeed;
                    if (roll.stamina) stamina += roll.stamina;
                }
            }
        }

        //ALL MAGIC: (aspd * (1+ sum from (abnormals speed + glyphs))*(1+modifier from nocts) + (sum from (abn+glyphs for chargeSpeed))
        //THEORYCRAFT MAGIC (THX, NEP!)
        speed = (speed * additionalSpeedBonuses) * nocTanMod;

        if (stamina) {
            if (currentStamina < stamina) {
                sendCannotStartSkill(event.skill);
                sendSystemMessage(lowStaminaSystemMessage);
                return false
            }
            if (info.instantStamina) currentStamina -= stamina
        }

        if (info.timeout && !blockedSkills[skillBase]) {
            blockedSkills[skillBase] = true;
            if (config.debug) utils.writeDebugMessage(`Timeout ${info.timeout}, skill ${skillBase} blocked`);
        }

        startAction({
            skill,
            info,
            stage: 0,
            speed,
            chargeSpeed,
            movement,
            moving: type == 'C_START_SKILL' && event.moving == 1,
            distanceMult,
            targetLoc: event.dest
        });

        if (send) toServerLocked(data);

        // Normally the user can press the skill button again if it doesn't go off
        // However, once the animation starts this is no longer possible, so instead we simulate retrying each skill
        if (!info.noRetry)
            retry(() => {
                if ((config.skillRetryAlways && type != 'C_PRESS_SKILL') || info.retryAlways || currentAction && currentAction.skill == skill && !serverConfirmedAction) return toServerLocked(data);
                return false
            })
    }

    function toServerLocked(...args) {
        sending = true;
        let success = dispatch.toServer(...args);
        sending = false;

        return success
    }

    // CC check; true - found, false - nope
    function checkAdditionalAbnormals(type) {
        switch (type) {
            case "evasive":
                return abnormality.inMap(evasivecc);
                break
            case "extended":
                return abnormality.inMap(extcc);
                break
            default:
                return false
                break
        }
        return false
    }

    function cCancelSkillHandler(event) {
        if (config.debug) utils.writeDebugMessage(['-> C_CANCEL_SKILL', skillId(event.skill), event.type].join(' '));

        if (currentAction) {
            let info = skillInfo(currentAction.skill); // event.skill can be wrong, so use the known current skill instead
            if (info && info.type == 'lockon') sendActionEnd(event.type);
            if (info && info.blockCancelPacket) {
                if (config.debug) utils.writeDebugMessage('C_CANCEL_SKILL was dropped');
                return false
            }
        }
    }

    function sActionStageHandler(event) {
        if (isMe(event.gameId)) {
            if (config.debug) {
                let duration = Date.now() - debugActionTime,
                    strs = [skillInfo(event.skill) ? '<X' : '<-', 'S_ACTION_STAGE', skillId(event.skill), event.stage, utils.decimal(event.speed, 3) + ' x'];

                if (config.debugLoc) strs.push(...[utils.degrees(event.w), '(' + Math.round(event.loc.x), Math.round(event.loc.y), Math.round(event.loc.z) + ')']);

                if (serverAction)
                    strs.push(...[
                        utils.decimal(serverAction.loc.dist2D(event.loc), 3) + 'u',
                        duration + 'ms',
                        '(' + Math.round(duration * serverAction.speed) + 'ms)'
                    ]);

                if (event.movement.length) {
                    let movement = [];

                    for (let e of event.movement)
                        movement.push(e.duration + ' ' + e.speed + ' ' + e.unk + ' ' + e.distance)

                    strs.push('(' + movement.join(', ') + ')')
                }

                utils.writeDebugMessage(strs.join(' '));
                debugActionTime = Date.now()
            }

            let info = skillInfo(event.skill);
            if (info) {
                if (currentAction && (event.skill == currentAction.skill || Math.floor((event.skill - 0x4000000) / 10000) == Math.floor((currentAction.skill - 0x4000000) / 10000)) && event.stage == currentAction.stage) {
                    clearTimeout(serverTimeout);
                    serverConfirmedAction = true;
                    dequeueNotifyLocation(event.skill);

                    if (config.jitterCompensation && event.stage == 0) {
                        let delay = Date.now() - lastStartTime - ping.min;

                        if (delay > 0 && delay < 1000) {
                            delayNext = delay;

                            if (stageEnd) {
                                stageEndTime += delay;
                                refreshStageEnd()
                            }
                        }
                    }
                }

                if (info.forceClip && event.movement.length) {
                    let distance = 0;
                    for (let m of event.movement) distance += m.distance

                    if (info.distance < 0) distance = -distance;

                    oopsLocation = applyDistance(lastStartLocation, distance);

                    if (!currentAction || currentAction.skill != event.skill) sendInstantMove(oopsLocation)
                }

                // If the server sends 2 S_ACTION_STAGE in a row without a S_ACTION_END between them and the last one is an emulated skill,
                // this stops your character from being stuck in the first animation (although slight desync will occur)
                if (serverAction && serverAction == currentAction && !skillInfo(currentAction.skill)) sendActionEnd(6);

                serverAction = event;
                return false
            }

            serverAction = event;

            if (event.id == lastEndedId) return false;

            if (currentAction && skillInfo(currentAction.skill)) sendActionEnd(lastEndSkill == currentAction.skill ? lastEndType || 6 : 6);

            currentAction = event;
            updateLocation()
        }
    }

    function sGrantSkillHandler(event) {
        if (config.debug) utils.writeDebugMessage(['<- S_GRANT_SKILL', skillId(event.skill)].join(' '));

        if (skillInfo(modifyChain(event.skill, 0))) return false
    }

    function sInstantDashHandler(event) {
        if (isMe(event.gameId)) {
            if (config.debug) {
                let duration = Date.now() - debugActionTime,
                    strs = [(serverAction && skillInfo(serverAction.skill)) ? '<X' : '<-', 'S_INSTANT_DASH', event.unk1, event.unk2, event.unk3];

                if (config.debugLoc) strs.push(...[utils.degrees(event.w), '(' + Math.round(event.loc.x), Math.round(event.loc.y), Math.round(event.loc.z) + ')']);

                strs.push(...[
                    utils.decimal(serverAction.loc.dist2D(event.loc), 3) + 'u',
                    duration + 'ms',
                    '(' + Math.round(duration * serverAction.speed) + 'ms)'
                ]);

                utils.writeDebugMessage(strs.join(' '))
            }

            if (serverAction && skillInfo(serverAction.skill)) return false
        }
    }

    function sInstantMoveHandler(event) {
        if (isMe(event.gameId)) {
            if (config.debug) {
                let info = serverAction && skillInfo(serverAction.skill),
                    duration = Date.now() - debugActionTime,
                    strs = ['<- S_INSTANT_MOVE'];

                if (config.debugLoc) strs.push(...[utils.degrees(event.w), '(' + Math.round(event.loc.x), Math.round(event.loc.y), Math.round(event.loc.z) + ')']);

                strs.push(...[
                    utils.decimal(serverAction.loc.dist2D(event.loc), 3) + 'u',
                    duration + 'ms',
                    '(' + Math.round(duration * serverAction.speed) + 'ms)'
                ]);

                utils.writeDebugMessage(strs.join(' '))
            }

            updateLocation(event, true);

            let info = serverAction && skillInfo(serverAction.skill);

            if (info && info.type == 'teleport' && currentAction && currentAction.skill != serverAction.skill)
                oopsLocation = currentLocation
        }
    }

    function sActionEndHandler(event) {
        if (isMe(event.gameId)) {
            if (config.debug) {
                let duration = Date.now() - debugActionTime,
                    strs = [(event.id == lastEndedId || skillInfo(event.skill)) ? '<X' : '<-', 'S_ACTION_END', skillId(event.skill), event.type];

                if (config.debugLoc) strs.push(...[utils.degrees(event.w), '(' + Math.round(event.loc.x), Math.round(event.loc.y), Math.round(event.loc.z) + ')']);

                if (serverAction)
                    strs.push(...[
                        utils.decimal(serverAction.loc.dist2D(event.loc), 3) + 'u',
                        duration + 'ms',
                        '(' + Math.round(duration * serverAction.speed) + 'ms)'
                    ]);
                else strs.push('???');

                utils.writeDebugMessage(strs.join(' '))
            }

            serverAction = null;
            lastEndSkill = event.skill;
            lastEndType = event.type;

            if (event.id == lastEndedId) {
                lastEndedId = 0;
                return false
            }

            if (config.emulateAttackSpeedFromSelfBuffs && job == 4) { // Todo: rewrite, remove etc
                if (emulatedAttackSpeedBonusHandler == 1) {
                    emulatedAttackSpeedBonusHandler = 2;
                }
                if (emulatedAttackSpeedBonusHandler == 2) {
                    emulatedAttackSpeedBonus = 0;
                    updateAspd();
                }
            }

            let info = skillInfo(event.skill);
            if (info) {
                if (info.type == 'dash')
                    // If the skill ends early then there should be no significant error
                    if (currentAction && event.skill == currentAction.skill) {
                        updateLocation(event);
                        sendActionEnd(event.type);
                    }
                    // Worst case scenario, teleport the player back if the error was large enough for the client to act on it
                    else if (!lastEndLocation || lastEndLocation.loc.dist2D(event.loc) >= 100)
                        sendInstantMove(event);

                if (Math.abs(event.loc.z - currentLocation.loc.z) >= Z_CORRECTION_DIFF) {
                    if (currentAction) {
                        if (config.debug) utils.writeDebugMessage("Loc correction queued to", event.loc);
                        oopsLocation = event;
                    } else {
                        if (config.debug) utils.writeDebugMessage("Loc corrected to", event.loc);
                        currentLocation.loc = event.loc;
                        sendInstantMove(event);
                    }
                }

                // Skills that may only be cancelled during part of the animation are hard to emulate, so we use server response instead
                // This may cause bugs with very high ping and casting the same skill multiple times
                if (currentAction && event.skill == currentAction.skill && [2, 13, 33, 25, 29, 43].includes(event.type)) {
                    updateLocation(event);
                    sendActionEnd(event.type);
                }
                return false
            }

            if (!currentAction)
                utils.writeErrorMessage('S_ACTION_END: currentAction is null', skillId(event.skill), event.id);
            else if (event.skill != currentAction.skill)
                utils.writeErrorMessage('S_ACTION_END: skill mismatch', skillId(currentAction.skill), skillId(event.skill), currentAction.id, event.id);

            currentAction = null
        }
    }

    dispatch.hook('S_EACH_SKILL_RESULT', 6, event => {
        let ta = event.targetAction;
        if (isMe(event.target) && ta.enable) {
            if (config.debug) {
                let duration = Date.now() - debugActionTime,
                    strs = ['<- S_EACH_SKILL_RESULT.targetAction', skillId(ta.skill), ta.stage];

                if (config.debugLoc) strs.push(...[utils.degrees(ta.w), '(' + Math.round(ta.loc.x), Math.round(ta.loc.y), Math.round(ta.loc.z) + ')']);

                utils.writeDebugMessage(strs.join(' '))
            }

            if (currentAction && skillInfo(currentAction.skill)) sendActionEnd(9);

            blockedSkills = {};
            if (config.debug) utils.writeDebugMessage("Blocked list cleared");

            currentAction = serverAction = ta;
            updateLocation()
        }
    });

    function unblockSkill(skillBase, timeout) {
        if (blockedSkills[skillBase]) {
            setTimeout(() => {
                if (config.debug) utils.writeDebugMessage(`Skill unblocked by timeout ${skillBase}`);
                delete blockedSkills[skillBase];
            }, timeout);
        }
    }

    function sStartCooltimeSkill(event) {
        if (event.cooldown > 0) {
            event.cooldown -= ping.min;
            if (event.cooldown <= 0) event.cooldown = 0;
            return true;
        }
    }

    function sCrestMessageHandler(event) {
        if (config.debug) utils.writeDebugMessage(`<- S_CREST_MESSAGE ${event.unk} ${event.type} ${skillId(event.skill, Flags.Skill)}`);
        if (event.type == 6) {
            let info = skillInfo(event.skill, true);
            if (info && info.timeout) {
                let skillBase = Math.floor(event.skill / 10000);
                unblockSkill(skillBase, 5);
            }
        }
    }

    function sDefendSuccessHandler(event) {
        if (isMe(event.cid)) {
            if (currentAction && serverAction && currentAction.skill == serverAction.skill) currentAction.defendSuccess = true;
            else if (config.defendSuccessStrict || job != 10) return false;
        }
    }

    function sCannotStartSkillHandler(event) {
        if (config.debug) utils.writeDebugMessage('<- S_CANNOT_START_SKILL ' + skillId(event.skill, Flags.Player));

        if (skillInfo(event.skill, true)) {
            if (config.skillDelayOnFail && config.skillRetryCount && currentAction && (!serverAction || currentAction.skill != serverAction.skill) && event.skill == currentAction.skill - 0x4000000)
                delayNext += config.skillRetryMs;

            return false
        }
    }

    function cCanLockonTargetHandler(event) {
        let info = skillInfo(event.skill);
        if (info) {
            let ok = true;

            if (info.partyOnly) {
                ok = false;

                if (partyMembers)
                    for (let member of partyMembers)
                        if (member.equals(event.target)) {
                            ok = true;
                            break
                        }
            }

            dispatch.toClient('S_CAN_LOCKON_TARGET', Object.assign({
                ok
            }, event))
        }
    }

    function sCanLockonTarget(event) {
        return skillInfo(event.skill) ? false : undefined;
    }

    function startAction(opts) {
        let info = opts.info;

        if (info.consumeAbnormal)
            if (Array.isArray(info.consumeAbnormal))
                for (let id of info.consumeAbnormal)
                    abnormality.remove(id)
            else
                abnormality.remove(info.consumeAbnormal);

        sendActionStage(opts);

        if (info.type == 'dash') sendInstantDash(opts.targetLoc);

        if (info.triggerAbnormal)
            for (let id in info.triggerAbnormal) {
                let abnormal = info.triggerAbnormal[id];

                if (Array.isArray(abnormal))
                    abnormality.add(id, abnormal[0], 1, abnormal[1]);
                else
                    abnormality.add(id, abnormal, 1, 10)
            }

        if (info.triggerAbnormalIfMissing)
            for (let id in info.triggerAbnormalIfMissing) {
                if (!abnormality.exists(id)) {
                    let abProperties = info.triggerAbnormalIfMissing[id];
                    abnormality.add(id, abProperties[0], 1, abProperties[1]);
                }
            }
        lastStartTime = Date.now()
    }

    function sendActionStage(opts) {
        clearTimeout(serverTimeout);
        opts.stage = opts.stage || 0;
        opts.distanceMult = opts.distanceMult || 1;

        let info = opts.info,
            multiStage = Array.isArray(info.length),
            movement = opts.movement;

        movePlayer(opts.distance * opts.distanceMult);

        if (multiStage)
            movement = movement && movement[opts.stage] || !opts.moving && get(info, 'inPlace', 'movement', opts.stage) || get(info, 'movement', opts.stage) || [];
        else
            movement = movement || !opts.moving && get(info, 'inPlace', 'movement') || info.movement || [];

        //another hardcoded shit for zerk (TODO: rewrite/remove it)
        let defendSucc;
        if (job == 3) {
            let abn = abnormality.exists(KYS_BHS);
            if (abn && info.type === 'charging') {
                opts.stage = info.length.length || 1;
            }
            defendSucc = (opts.stage > 0 && !abn) ? currentAction.defendSuccess : false;
        } else
            defendSucc = opts.stage > 0 ? currentAction.defendSuccess : false;

        dispatch.toClient('S_ACTION_STAGE', 4, currentAction = {
            gameId: myChar(),
            loc: currentLocation.loc,
            w: currentLocation.w,
            templateId,
            skill: opts.skill,
            stage: opts.stage,
            speed: info.type == 'charging' ? 1 : opts.speed,
            id: actionNumber,
            unk1: 1,
            unk2: false,
            dest: undefined,
            target: 0,
            movement,

            // Meta
            defendSuccess: defendSucc
        });

        opts.distance = (multiStage ? get(info, 'distance', opts.stage) : info.distance) || 0;
        stageEnd = null;

        let speed = 1.0;
        if (info.type == 'charging')
            speed = opts.speed + opts.chargeSpeed
        else
            speed = opts.speed

        let noTimeout = false;

        if (info.enableVB && info.pendingStartTime) {
            switchVB = true // disable charging vb, could probably express the whole better but i'm lost in the code uwu
            setTimeout(enableVB, (info.pendingStartTime / speed)); // We need to emulate the chain activation
        }

        if (serverAction && (serverAction.skill == currentAction.skill || Math.floor((serverAction.skill - 0x4000000) / 10000) == Math.floor((currentAction.skill - 0x4000000) / 10000)) && serverAction.stage == currentAction.stage)
            noTimeout = true;

        if (info.type == 'teleport' && opts.stage == info.teleportStage) {
            opts.distance = Math.min(opts.distance, Math.max(0, currentLocation.loc.dist2D(opts.targetLoc) - 15)); // Client is approx. 15 units off
            applyDistance(currentLocation, opts.distance);
            currentLocation.loc.z = opts.targetLoc.z;
            sendInstantMove();
            opts.distance = 0;
        }
        if ((info.type == 'charging' || info.type == 'holdInfinite') && opts.stage == ((info.length && (info.length.length || 1)) || 0)) {
            if (!noTimeout) serverTimeout = setTimeout(sendActionEnd, getServerTimeout(), 33); //another fkign timeout
            return
        }

        let length = Math.round((multiStage ? info.length[opts.stage] : info.length) / speed);

        if (!noTimeout) {
            const serverTimeoutTime = getServerTimeout();
            if (length > serverTimeoutTime) serverTimeout = setTimeout(sendActionEnd, serverTimeoutTime, 33)
        }

        if (multiStage) {
            if (!opts.moving) {
                let inPlaceDistance = get(info, 'inPlace', 'distance', opts.stage);

                if (inPlaceDistance !== undefined) opts.distance = inPlaceDistance
            }

            if (opts.stage + 1 < info.length.length) {
                opts.stage += 1;
                stageEnd = sendActionStage.bind(null, opts);
                stageEndTime = Date.now() + length;
                stageEndTimeout = setTimeout(stageEnd, length);
                return
            }
        } else if (!opts.moving) {
            let inPlaceDistance = get(info, 'inPlace', 'distance');

            if (inPlaceDistance !== undefined) opts.distance = inPlaceDistance
        }

        if (info.type == 'dash' && opts.distance) {
            let distance = lastStartLocation.loc.dist2D(opts.targetLoc);

            if (distance < opts.distance) {
                length *= distance / opts.distance;
                opts.distance = distance
            }
        }

        if (info.type == 'charging' || info.type == 'holdInfinite') {
            opts.stage += 1;
            stageEnd = sendActionStage.bind(null, opts);
            stageEndTime = Date.now() + length;
            stageEndTimeout = setTimeout(stageEnd, length);
            return
        }

        stageEnd = sendActionEnd.bind(null, info.type == 'dash' ? 39 : 0, opts.distance * opts.distanceMult);
        stageEndTime = Date.now() + length;
        stageEndTimeout = setTimeout(stageEnd, length)
    }

    function getServerTimeout() {
        return (ping.min * 2) + (ping.max > 300 ? 200 : ping.max / 2) + (config.skillRetryCount * config.skillRetryMs) + config.serverTimeout
    }

    function clearStage() {
        clearTimeout(serverTimeout);
        clearTimeout(stageEndTimeout)
    }

    function refreshStageEnd() {
        clearTimeout(stageEndTimeout);
        stageEndTimeout = setTimeout(stageEnd, stageEndTime - Date.now())
    }

    function grantCharge(skill, info, stage) {
        let levels = info.chargeLevels;
        dispatch.toClient('S_GRANT_SKILL', 1, {
            skill: modifyChain(skill, levels ? levels[stage] : 10 + stage)
        })
    }

    function sendInstantDash(dest) {
        dispatch.toClient('S_INSTANT_DASH', 3, {
            gameId: myChar(),
            target: 0,
            unk: 0,
            loc: dest,
            w: currentLocation.w
        });
    }

    function sendInstantMove(event) {
        if (event) updateLocation(event)
        dispatch.toClient('S_INSTANT_MOVE', 3, {
            gameId: myChar(),
            loc: currentLocation.loc,
            w: currentLocation.w
        })
    }

    function sendActionEnd(type, distance) {
        clearStage();

        if (!currentAction) return;

        if (config.debug) utils.writeDebugMessage(['<* S_ACTION_END', skillId(currentAction.skill), type || 0, utils.degrees(currentLocation.w), (distance || 0) + 'u'].join(' '));

        if (oopsLocation && !currentLocation.action) sendInstantMove(oopsLocation);
        else movePlayer(distance);

        if (canChainVB) { // In case VB didn't get used on line 670
            switchVB = false;
            canChainVB = false;
            if (config.debug) utils.writeDebugMessage('<* I_DISABLE_CHAINED_VB');
        }

        dispatch.toClient('S_ACTION_END', 3, {
            gameId: myChar(),
            loc: currentLocation.loc,
            w: currentLocation.w,
            templateId,
            skill: currentAction.skill,
            type: type || 0,
            id: currentAction.id
        });

        if (currentAction.id == actionNumber) {
            let info = skillInfo(currentAction.skill);
            if (info) {
                if (info.timeout) {
                    let skillBase = Math.floor((currentAction.skill - 0x4000000) / 10000);
                    unblockSkill(skillBase, ping.min + info.timeout);
                }

                if (info.consumeAbnormalEnd)
                    if (Array.isArray(info.consumeAbnormalEnd))
                        for (let id of info.consumeAbnormalEnd)
                            abnormality.remove(id)
                    else
                        abnormality.remove(info.consumeAbnormalEnd);


                if (info.consumeAbnormalEndPending)
                    for (let id in info.consumeAbnormalEndPending) {
                        let delay = info.consumeAbnormalEndPending[id];
                        abnormality.remove(id, delay)
                    }

                /*    
                if (info.triggerAbnormalEnd)
                    for (let id in info.triggerAbnormalEnd) {
                        let abnormal = info.triggerAbnormalEnd[id];

                        if (Array.isArray(abnormal))
                            abnormality.add(id, abnormal[0], abnormal[1]);
                        else
                            abnormality.add(id, abnormal, 1)
                    }
                */

                if (info.type == 'dash') lastEndLocation = currentLocation
            }
        } else lastEndedId = currentAction.id;

        actionNumber++;
        if (actionNumber > 0xffffffff) actionNumber = 0x80000000;

        oopsLocation = currentAction = null;

        lastEndedTime = Date.now()
    }

    function sendCannotStartSkill(skill) {
        dispatch.toClient('S_CANNOT_START_SKILL', 1, {
            skill
        })
    }

    function sendSystemMessage(smt, data) {
        dispatch.toClient('S_SYSTEM_MESSAGE', 1, {
            message: dispatch.buildSystemMessage(smt, data)
        });
    }

    function updateLocation(event, action, special) {
        event = event || currentAction;
        currentLocation = {
            loc: event.loc,
            w: special ? event.w || currentLocation.w : event.w, // Should be a skill flag maybe?
            action
        }
    }

    function retry(cb, count = 1) {
        if (count > config.skillRetryCount) return;

        setTimeout(() => {
            if (cb()) retry(cb, count + 1)
        }, config.skillRetryMs)
    }

    function movePlayer(distance) {
        if (distance && !currentLocation.action) applyDistance(currentLocation, distance)
    }

    function applyDistance(pos, dist) {
        pos.loc.add(new Vec3(dist, 0, 0).rotate(pos.w));
        return pos;
    }

    // Modifies the chain part (last 2 digits) of a skill ID, preserving flags
    function modifyChain(id, chain) {
        return id - ((id & 0x3ffffff) % 100) + chain
    }

    function skillId(id, flagAs) {
        id |= flagAs;

        let skillFlags = ['P', 'C', '[?3]', '[?4]', '[?5]', '[?6]'],
            flags = '';

        for (let i = 0, x = id >>> 26; x; i++ , x >>>= 1)
            if (x & 1) flags += skillFlags[i];

        id = (id & 0x3ffffff).toString();

        switch (flags) {
            case 'P':
                id = [id.slice(0, -4), id.slice(-4, -2), id.slice(-2)].join('-');
                break;
            case 'C':
                id = [id.slice(0, -2), id.slice(-2)].join('-');
                break
        }

        return flags + id
    }

    //Load info about skill
    function skillInfo(id, local) {
        if (!local) id -= 0x4000000;

        let cached = skillsCache[id];

        if (cached !== undefined) return cached;

        let group = Math.floor(id / 10000),
            level = (Math.floor(id / 100) % 100) - 1,
            sub = id % 100

        // preset.js support
        if (!get(preset, job, "enabled") || !get(preset, job, group))
            return skillsCache[id] = null

        let info = [ // Ordered by least specific < most specific
            get(skills, job, '*'),
            get(skills, job, '*', 'level', level),
            get(skills, job, '*', 'race', race),
            get(skills, job, '*', 'race', race, 'level', level),
            get(skills, job, group, '*'),
            get(skills, job, group, '*', 'level', level),
            get(skills, job, group, '*', 'race', race),
            get(skills, job, group, '*', 'race', race, 'level', level),
            get(skills, job, group, sub),
            get(skills, job, group, sub, 'level', level),
            get(skills, job, group, sub, 'race', race),
            get(skills, job, group, sub, 'race', race, 'level', level)
        ];

        // Note: Exact skill (group, sub) must be specified for prediction to be enabled. This helps to avoid breakage in future patches
        if (info[8]) {
            cached = skillsCache[id] = Object.assign({}, ...info);
            // Sanitize to reduce memory usage
            delete cached.race;
            delete cached.level;
            return cached
        }

        return skillsCache[id] = null
    }

    //Check gameId(cid)
    function isMe(id) {
        return gameId.equals(id) || vehicleEx && vehicleEx.equals(id)
    }

    //Get current gameId for character
    function myChar() {
        return vehicleEx ? vehicleEx : gameId
    }

    function get(obj, ...keys) {
        if (obj === undefined) return;

        for (let key of keys)
            if ((obj = obj[key]) === undefined)
                return;

        return obj
    }

    function enableVB() {
        canChainVB = true;
        if (config.debug) utils.writeDebugMessage('<* I_ENABLE_CHAINED_VB');
    }

    //Gunner/Ninja/Valk triggering different smt (default - RE stamina)
    function LowStaminaSmtMessage() {
        switch (job) {
            case 9:
                lowStaminaSystemMessage = 'SMT_BATTLE_SKILL_FAIL_LOW_ARCANE';
                break
            case 10:
                lowStaminaSystemMessage = 'SMT_BATTLE_SKILL_FAIL_LOW_CHAKRA';
                break
            case 12:
                lowStaminaSystemMessage = 'SMT_BATTLE_SKILL_FAIL_LOW_MOON_LIGHT';
                break
            default:
                lowStaminaSystemMessage = 'SMT_BATTLE_SKILL_FAIL_LOW_STAMINA';
                break
        }
    }
};