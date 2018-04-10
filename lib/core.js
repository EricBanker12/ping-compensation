/*----------
TO DO:
Fix combo attack
Add more in-game commands
Add blocking support
----------*/
module.exports = function PingCompensationCore(dispatch) {
    //----------
    // Constants
    //----------
    const { protocol } = require('tera-data-parser')
    const config = require('../config/default-config.json')
    const custom = require('../config/config.json')
    const preset = require('../config/preset.js')
    const skills = dispatch.base.majorPatchVersion >= 67 ? require('../config/data/awakening.js') : require('../config/data/skills.js')
    const Command = require('command')
    const path = require('path')
    const Ping = require('./ping.js')
    const command = Command(dispatch)
    const ping = Ping(dispatch)
    
    Object.assign(config, custom)
    
    //----------
    // Variables
    //----------
    let gameId = null,
        templateId = null,
        skillsCache = null,
        job = -1,
        race = -1,
        timeouts = {},
        retryTimer = false,
        startTime = false,
        sending = false,
        alive = false,
        //inBlock = false,
        //mounted = false,
        queuedPacket = false,
        currentAction = false,
        enabled = config.enabled
    
    //----------
    // Commands
    //----------
    command.add(['PC', 'pingComp', 'PingCompensation'], (option) => {
        if (option) {
            // ping
            if (option.toLowerCase() == 'ping') {
                command.message(`Ping: Min=${ping.min} Avg=${Math.floor(ping.avg)} Max=${ping.max} Jitter=${ping.max - ping.min} Samples=${ping.history.length}`)
                return
            }
            // on
            if (option.toLowerCase() == 'on') {
                command.message('Ping Compensation enabled.')
                enabled = true
                return
            }
            // off
            if (option.toLowerCase() == 'off') {
                command.message('Ping Compensation disabled.')
                enabled = false
                return
            }
            // debug
            if (option.toLowerCase() == 'debug') {
                config.debug = !config.debug
                command.message(`Ping Compensation debug ${config.debug ? 'enabled.' : 'disabled.'}`)
                return
            }
        }
        command.message('Ping Compensation command input missing. Input options are "ping", "on", "off", or "debug".')
    })

    //----------
    // Functions
    //----------
    //Load info about skill - credit: Pinkie Pie + Salty Monkey
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

    // read skill data - credit: Pinkie Pie
    function get(obj, ...keys) {
        if (obj === undefined) return;

        for (let key of keys)
            if ((obj = obj[key]) === undefined)
                return;

        return obj
    }
    
    // endSkill
    function endSkill(event) {
        if (alive && enabled && event) {
            if (config.debug) {
                console.log(`[${Date.now().toString().slice(-4)}] <* sActionEnd ${event.skill > 0x4000000 ? event.skill-0x4000000 : event.skill}` 
                    + ` (x${Math.floor(event.loc.x)} y${Math.floor(event.loc.y)} z${Math.floor(event.loc.z)}) id${event.id}`)
            }
            timeouts[event.id] = false
            dispatch.toClient('S_ACTION_END', 3, event)
        }
    }
    
    // updateCoord
    function updateCoord(event) {
        for (let coord of ["loc", "w"]) {
            // if in fake skill
            if (currentAction && timeouts[currentAction.id]) {
                // update end location
                currentAction[coord] = event[coord]
            }
        }
    }
    
    // skillHook
    function skillHook(event) {
        if (config.debug) {
            console.log(`[${Date.now().toString().slice(-4)}] -> cStart--Skill ${event.skill > 0x4000000 ? event.skill-0x4000000 : event.skill}` 
                + ` (x${Math.floor(event.loc.x)} y${Math.floor(event.loc.y)} z${Math.floor(event.loc.z)})`)
        }
        let info = skillInfo(event.skill)
        // if not in config or multistage
        if (!info || Array.isArray(info.length)) {
            // do not use current ping
            startTime = false
            return null
        }
        startTime = Date.now()
    }

    // retryHook
    function retryHook(packet, code, data) {
        let event = protocol.parse(dispatch.base.protocolVersion, packet[0], packet[1], data = Buffer.from(data)),
            info = skillInfo(event.skill)
        if (info && !info.noRetry) {
            clearTimeout(retryTimer)
            retryTimer = setTimeout(sendSkill, config.skillRetryMs, data, config.skillRetryCount)
        }
    }

    // send skill
    function sendSkill(data, count) {
        if (alive && enabled) {
            sending = true
            dispatch.toServer(data)
            sending = false
            if (count > 1) retryTimer = setTimeout(sendSkill, config.skillRetryMs, data, count - 1)
        }
    }
    
    // stopCurrentAction
    function stopCurrentAction() {
        clearTimeout(timeouts[currentAction.id])
            timeouts[currentAction.id] = false
            queuedPacket = false
            currentAction = false
            startTime = false
    }

    //----------
    // Hooks
    //----------
    // S_LOGIN
    dispatch.hook('S_LOGIN', dispatch.base.majorPatchVersion >= 67 ? 10 : 9, event => {
        gameId = event.gameId
        templateId = event.templateId
        race = Math.floor((templateId - 10101) / 100)
        job = (templateId - 10101) % 100
        skillsCache = {}
    })
    
    //----------
    // Location
    //----------
    // C_PRESS_SKILL
    dispatch.hook('C_PRESS_SKILL', 2, {order: 10, filter: {fake: null}}, event => {
        updateCoord(event)
        /*
        // if blocking, end immediately
        if (inBlock && event.start == 0) {
            inBlock = false
            endSkill(currentAction)
        }
        */
    })
    
    // C_PLAYER_LOCATION
    dispatch.hook('C_PLAYER_LOCATION', 3, {order: 20, filter: {fake: null}}, event => {
        updateCoord(event)
    })

    // C_PLAYER_LOCATION
    dispatch.hook('C_PLAYER_LOCATION', 'raw', {order: 10, filter: {fake: false}}, (code, data, fromServer, fake) => {
        if (!fake) {
            // if between fake and real S_ACTION_END
            if (currentAction && !timeouts[currentAction.id]) {
                if (config.debug) {
                    console.log(`[${Date.now().toString().slice(-4)}] x> cPlayerLocation`)
                }
                queuedPacket = data
                // block location packets
                return false
            }
        }
    })
    
    // C_NOTIFY_LOCATION_IN_ACTION
    dispatch.hook('C_NOTIFY_LOCATION_IN_ACTION', 2, {order: 10, filter: {fake: null}}, event => {
        updateCoord(event)
    })
    
    // C_NOTIFY_LOCATION_IN_DASH
    dispatch.hook('C_NOTIFY_LOCATION_IN_DASH', 2, {order: 10, filter: {fake: null}}, event => {
        updateCoord(event)
    })
    
    // S_INSTANT_DASH
    dispatch.hook('S_INSTANT_DASH', 3, {order: 10, filter: {fake: null}}, event => {
        if (event.gameId.equals(gameId)){
            updateCoord(event)
        }
    })
    
    // S_INSTANT_MOVE
    dispatch.hook('S_INSTANT_MOVE', 3, {order: 10, filter: {fake: null}}, event => {
        if (event.gameId.equals(gameId)){
            updateCoord(event)
        }
    })
    
    /*
    // S_INSTANT_PULL
    dispatch.hook('S_INSTANT_PULL', 1, {order: 10, filter: {fake: null}}, event => {
        if (event.target.equals(gameId)){
            updateCoord(event)
        }
    })
    */

    //----------
    // Get Ping
    //----------
    // skill packets, get current ping
    for(let packet of [
        ['C_START_SKILL', dispatch.base.majorPatchVersion >= 67 ? 5 : 4],
        ['C_START_TARGETED_SKILL', 4],
        ['C_START_COMBO_INSTANT_SKILL', 2],
        ['C_START_INSTANCE_SKILL', 3],
        ['C_START_INSTANCE_SKILL_EX', 3],
        //['C_PRESS_SKILL', 1],
        ['C_NOTIMELINE_SKILL', 1], //not sure about this one
        //['C_CAN_LOCKON_TARGET', 1],
        ]) dispatch.hook(packet[0], packet[1], {filter: {fake: null, modified: null}, order: 1000}, skillHook);

    // S_CANNOT_START_SKILL
    dispatch.hook('S_CANNOT_START_SKILL', 1, {order: 10, filter: {fake: null}}, event => {
        if (config.debug) {
            console.log(`[${Date.now().toString().slice(-4)}] <- sCannotStartSkill ${event.skill > 0x4000000 ? event.skill-0x4000000 : event.skill}`)
        }
        startTime = false
        clearTimeout(retryTimer)
    })

    // C_CANCEL_SKILL
    dispatch.hook('C_CANCEL_SKILL', 1, {order: 10, filter: {fake: null}}, event => {
        if (config.debug) {
            console.log(`[${Date.now().toString().slice(-4)}] -> cCancelSkill ${event.skill > 0x4000000 ? event.skill-0x4000000 : event.skill}`)
        }
        startTime = false
    });
    
    //----------
    // Skill Casts
    //----------
    // S_ACTION_STAGE
    dispatch.hook('S_ACTION_STAGE', 4, {order: 10, filter: {fake: false}}, event => {
        // if character is your character
        if (event.gameId.equals(gameId)) {
            // get skill id
            let info = skillInfo(event.skill)
            // if skill is in config
            if (alive && enabled && info && !['charging','holdInfinite'].includes(info.type)) {
                /*
                // if block, enable fast release
                if (info.type == 'holdInfinite') {
                    inBlock = true
                    currentAction = {
                        gameId: event.gameId,
                        x: event.x,
                        y: event.y,
                        z: event.z,
                        w: event.w,
                        templateId: event.templateId,
                        skill: event.skill,
                        type: 10,
                        id: event.id
                    }
                    return
                }
                */
                // get length and distance
                let multistage = Array.isArray(info.length),
                    length = multistage ? info.length[event.stage] : info.length,
                    distance = info.distance ? multistage ? info.distance[event.stage] : info.distance : 0,
                    currentPing = Math.min(Math.max(ping.min, multistage ? 0 : startTime ? Date.now() - startTime : 0,
                        config.pingSpikesLimit ? config.pingSpikesMin : 0), config.pingSpikesLimit ? config.pingSpikesMax : 10000)
                if (length && length > 0) {
                    if (config.debug) {
                        console.log(`[${Date.now().toString().slice(-4)}] <* sActionStage ${event.skill > 0x4000000 ? event.skill-0x4000000 : event.skill}` 
                            + ` s${event.stage} (x${Math.floor(event.loc.x)} y${Math.floor(event.loc.y)} z${Math.floor(event.loc.z)}) id${event.id}`
                            + ` pc${Math.min(currentPing,Math.floor(length/event.speed-1000/config.minCombatFPS))}`)
                    }
                    // change animation speed
                    event.speed = event.speed * length / Math.max(length - currentPing * event.speed, 1000/config.minCombatFPS)
                    // if server sends distance
                    if (event.movement[0]) {
                        distance = 0
                        // get total distance
                        for (let stage of event.movement) {
                            distance += stage.distance
                        }
                    }
                    if (!distance) distance = 0
                    // if skill type lockon
                    if (['lockon'].includes(info.type)) {
                        return true
                    }
                    // if multi-stage and not last stage
                    if (multistage && event.stage < info.length.length - 1) {
                        return true
                    }
                    // get end type ???
                        // TO DO
                    // send sActionEnd early
                    currentAction = {
                        gameId: event.gameId,
                        loc: event.loc.addN({x:Math.cos(event.w)*distance, y:Math.sin(event.w)*distance, z:0}),
                        w: event.w,
                        templateId: event.templateId,
                        skill: event.skill,
                        type: 0,
                        id: event.id
                    }
                    timeouts[event.id] = setTimeout(endSkill, length / event.speed, currentAction)
                    return true
                }
                else {
                    if (config.debug) {
                        console.log(`[${Date.now().toString().slice(-4)}] <- sActionStage ${event.skill > 0x4000000 ? event.skill-0x4000000 : event.skill}` 
                            + ` s${event.stage} (x${Math.floor(event.loc.x)} y${Math.floor(event.loc.y)} z${Math.floor(event.loc.z)}) id${event.id}`)
                    }
                    if (currentAction && timeouts[currentAction.id]) {
                        // disable fake endSkill
                        clearTimeout(timeouts[currentAction.id])
                        timeouts[currentAction.id] = false
                    }
                    currentAction = false
                    queuedPacket = false
                }
            }
            else {
                if (config.debug) {
                    console.log(`[${Date.now().toString().slice(-4)}] <- sActionStage ${event.skill > 0x4000000 ? event.skill-0x4000000 : event.skill}` 
                        + ` s${event.stage} (x${Math.floor(event.loc.x)} y${Math.floor(event.loc.y)} z${Math.floor(event.loc.z)}) id${event.id}`)
                }
                if (currentAction && timeouts[currentAction.id]) {
                    // disable fake endSkill
                    clearTimeout(timeouts[currentAction.id])
                    timeouts[currentAction.id] = false
                }
                currentAction = false
                queuedPacket = false
            }
            startTime = false
        }
    })
    
    // S_ACTION_END
    dispatch.hook('S_ACTION_END', 3, {order: 10, filter: {fake: false}}, event => {
        // if character is your character
        if (event.gameId.equals(gameId)) {
            // if modded skill
            if (alive && enabled && currentAction && currentAction.id == event.id) {
                // if not fake ended
                if (timeouts[event.id] /*|| inBlock*/) {
                    // disable fake endSkill
                    clearTimeout(timeouts[event.id])
                    timeouts[event.id] = false
                }
                // if fake ended
                else {
                    if (config.debug) {
                        console.log(`[${Date.now().toString().slice(-4)}] <x sActionEnd ${event.skill > 0x4000000 ? event.skill-0x4000000 : event.skill}` 
                            + ` (x${Math.floor(event.loc.x)} y${Math.floor(event.loc.y)} z${Math.floor(event.loc.z)}) id${event.id}`)
                    }
                    // if location emulated wrong
                    if ((event.loc.sqrDist2D(currentAction.loc)) > 10000 || (currentAction.loc.z - event.loc.z)*(currentAction.loc.z - event.loc.z) > 2500) {
                        // teleport to correct location
                        if (config.debug) {
                            console.log(`Location correction (x${Math.floor(event.loc.x)} y${Math.floor(event.loc.y)} z${Math.floor(event.loc.z)})`)
                        }
                        dispatch.toClient('S_INSTANT_MOVE', 3, {
                            gameId: gameId,
                            loc: event.loc //,
                            //w: event.w
                        })
                    }
                    else if (queuedPacket) {
                        if (config.debug) {
                            console.log(`[${Date.now().toString().slice(-4)}] *> cPlayerLocation`)
                        }
                        dispatch.toServer(queuedPacket)
                    }
                    queuedPacket = false
                    currentAction = false
                    // hide this sActionEnd
                    return false
                }
            }
            if (config.debug) {
                console.log(`[${Date.now().toString().slice(-4)}] <- sActionEnd ${event.skill > 0x4000000 ? event.skill-0x4000000 : event.skill}` 
                    + ` (x${Math.floor(event.loc.x)} y${Math.floor(event.loc.y)} z${Math.floor(event.loc.z)}) id${event.id}`)
            }
            queuedPacket = false
            currentAction = false
        }
    })

    //----------
    // SP compatibility
    //----------
    // S_ACTION_STAGE SP Compatibility
    dispatch.hook('S_ACTION_STAGE', 4, {order: 10, filter: {fake: true}}, event => {
        // if character is your character
        if (event.gameId.equals(gameId)) {
            // if modded skill
            if (alive && enabled && currentAction /*&& !timeouts[currentAction.id]*/) {
                // disable cPlayerLocation block
                queuedPacket = false
                currentAction = false
            }
        }
    })

    // S_ACTION_END SP Compatibility
    dispatch.hook('S_ACTION_END', 3, {order: 10, filter: {fake: true}}, event => {
        // if character is your character
        if (event.gameId.equals(gameId)) {
            // if modded skill
            if (alive && enabled && currentAction && currentAction.id == event.id) {
                // if not fake ended
                if (timeouts[event.id] /*|| inBlock*/) {
                    // disable fake endSkill
                    clearTimeout(timeouts[event.id])
                    timeouts[event.id] = false
                    queuedPacket = false
                    currentAction = false
                }
            }
        }
    })

    //----------
    // Retries
    //----------
    // skill packets, retry cast
    for (let packet of [
        ['C_START_SKILL', dispatch.base.majorPatchVersion >= 67 ? 5 : 4],
        ['C_START_TARGETED_SKILL', 4],
        ['C_START_COMBO_INSTANT_SKILL', 2],
        ['C_START_INSTANCE_SKILL', 3],
        ['C_START_INSTANCE_SKILL_EX', 3],
        //['C_PRESS_SKILL', 1],
        ['C_NOTIMELINE_SKILL', 1], //not sure about this one
        //['C_CAN_LOCKON_TARGET', 1],
        ]) {
        dispatch.hook(packet[0], 'raw', {filter: {fake: null, modified: null}, order: 100}, (code, data, fromServer, fake) => {
            if (!sending && enabled && config.useRetries && config.skillRetryMs > 0 && config.skillRetryCount > 0 ) retryHook(packet, code, data)
        })
    }

    // sActionStage
    dispatch.hook('S_ACTION_STAGE', 4, {filter: {fake: null, modified: null}, order: -100}, event => {
        // if character is your character, cancel retry
        if (event.gameId.equals(gameId)) clearTimeout(retryTimer)
    })

    //----------
    // TPs, CCs, Deaths
    //----------
    // S_EACH_SKILL_RESULT
    dispatch.hook('S_EACH_SKILL_RESULT', 5, event => {
        if (gameId.equals(event.target)) {
            if (event.targetAction.enable == true) {
                stopCurrentAction()
            }
        }
    })
    
    // S_SPAWN_ME
    dispatch.hook('S_SPAWN_ME', 2, event => {
        alive = event.alive
        if (!alive) {
            stopCurrentAction()
        }
    })

    // S_CREATURE_LIFE
    dispatch.hook('S_CREATURE_LIFE', 2, event => {
        if (gameId.equals(event.gameId)) {
            alive = event.alive
            if (!alive) {
                stopCurrentAction()
            }
        }
    })
    
    // S_LOAD_TOPO
    dispatch.hook('S_LOAD_TOPO', 'raw', () => {
        if (currentAction) {
            stopCurrentAction()
        }
    })
}
