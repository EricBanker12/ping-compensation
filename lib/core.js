'use strict'

const {protocol} = require('tera-data-parser'),
	{SkillID, Vec3} = require('tera-data-parser').types,
	subMod = require('./require'),
	skillsClient = require('../config/skills_client'),
	skills = require('../config/skills'),
	passivity = require('../config/passivity'),
	epPerks = require('../config/ep'),
	silence = require('../config/silence').reduce((map, value) => { // Convert array to object for fast lookup
		map[value] = true
		return map
	}, {})

const TYPE_ACTION = 1,
	TYPE_REACTION = 2,
	INSTANT_CHARGE_ABNORMAL = 401701 // Hardcoded until parsed abnormalities are added

const END_REASONS = {
	stand: 5,
	lockonCast: 36
}

module.exports = function SPCore(mod) {
	const SETTINGS_VERSION = 4
	if(mod.settings._version !== SETTINGS_VERSION)
		mod.settings = {
			_version: SETTINGS_VERSION,
			skills: {
				jitterCompensation:		true,
				retryCount:				2,		//	Number of times to retry each skill (0 = disabled). Recommended 1-3.
				retryMs:				30,		/*	Time to wait between each retry.
													SKILL_RETRY_MS * SKILL_RETRY_COUNT should be under 100, otherwise skills may go off twice.
												*/
				longRetryCount:			3,		//	Only used for Warrior: Blade Waltz
				longRetryMs:			80,
				retryJittercomp:		15,		//	Skills that support retry will be sent this much earlier than estimated by jitter compensation.
				delayOnFail:			true,	//	Basic initial desync compensation. Useless at low ping (<50ms).
				chargeJitterMax:		50,		/*	Maximum jitter delay to add to charging skills.
													Detected network jitter will be capped by this number. Skill-specific jitter is not capped.
												*/
				serverTimeout:			200,	/*	This number is added to your maximum ping + skill retry period to set the failure threshold for skills.
													If animations are being cancelled while damage is still applied, increase this number.
												*/
				forceClipStrict:		true,	/*	Set this to false for smoother, less accurate iframing near walls.
													Warning: Will cause occasional clipping through gates when disabled. Do NOT abuse this.
												*/
				defendSuccessStrict:	true	//	[Brawler] Set this to false to see the Perfect Block icon at very high ping (warning: may crash client).
			},
			ping: {
				interval:	6000,	//	Interval between pings. Recommended 2000-3000ms for WiFi or unstable connections, 6000ms for wired.
				timeout:	30000,	//	Milliseconds to wait before giving up and retrying ping.
				maxHistory: 20		//	Maximum number of ping samples used to calculate min/max/avg values.
			},
			debug: {
				skills:			false,
				loc:			false,
				glyphs:			false,
				projectiles:	false,
				abnormals:		false
			}
		}

	const player = subMod(mod, './player'),
		ping = subMod(mod, './ping'),
		abnormality = subMod(mod, './abnormalities'),
		cooldowns = subMod(mod, './cooldowns')

	// Global
	let sending = false,
		skillsCache = new Map(),
		nocTanWarning = false,
	// Player
		vehicleEx = null,
		alive = false,
		partyMembers = null,
	// Current skill
		delayNext = 0,
		delayedSkillTimeout = null,
		retryTimer = {},
		actionNumber = 0x80000000,
		myPosition = null,
		lastStartTime = 0,
		lastStartPos = null,
		lastEndPosition = null,
		oopsPosition = null,
		clientAction = null,
		serverAction = null,
		serverConfirmedAction = false,
		pendingNotifyLocation = null,
		storedCharge = 0,
		lastEndSkill = 0,
		lastEndType = 0,
		lastEndedId = 0,
		serverTimeout = null,
		effectsTimeouts = [],
		stageEnd = null,
		stageEndTime = 0,
		stageEndTimeout = null,
		debugActionTime = 0,
	// Projectiles
		clientProjectileId = 0,
		clientProjectiles = {},
		clientProjectileHits = [],
		serverProjectiles = {}

	mod.hook('S_LOGIN', 'raw', {order: 100, filter: {fake: null}}, event => { skillsCache.clear() })

	mod.hook('S_LOAD_TOPO', 'raw', () => {
		vehicleEx = null
		clientAction = null
		serverAction = null
		lastEndSkill = 0
		lastEndType = 0
		lastEndedId = 0
		sendActionEnd(37)
	})

	mod.hook('S_SPAWN_ME', 3, {order: 100, filter: {fake: null}}, event => {
		updatePosition(event)
		alive = event.alive
	})

	mod.hook('S_CREATURE_LIFE', 2, event => {
		if(isMe(event.gameId)) {
			alive = event.alive

			if(!alive) {
				clearStage()
				oopsPosition = clientAction = serverAction = null
			}
		}
	})

	mod.hook('S_PARTY_MEMBER_LIST', 7, event => { partyMembers = event.members.map(m => m.gameId) })
	mod.hook('S_LEAVE_PARTY', 'raw', () => { partyMembers = null })

	mod.hook('S_MOUNT_VEHICLE_EX', 1, event => { if(event.target === player.gameId) vehicleEx = event.vehicle })
	mod.hook('S_UNMOUNT_VEHICLE_EX', 1, event => { if(event.target === player.gameId) vehicleEx = null })

	mod.hook('C_PLAYER_LOCATION', 3, {order: 10, filter: {fake: null}}, event => {
		if(mod.settings.debug.skills.loc) console.log('Location %d %d (%d %d %d %s) > (%d %d %d)', event.type, event.speed, Math.round(event.loc.x), Math.round(event.loc.y), Math.round(event.loc.z), degrees(event.w), Math.round(event.dest.x), Math.round(event.dest.y), Math.round(event.dest.z))

		if(clientAction) {
			const info = skillInfo(clientAction.skill)

			if(info && (info.distance || info.type === 'dynamicDistance')) return false
		}

		// This is not correct, but the midpoint location seems to be "close enough" for the client to not teleport the player
		updatePosition({loc: event.loc.addN(event.dest).scale(0.5), w: event.w})
	})

	for(let packet of [
		['C_NOTIFY_LOCATION_IN_ACTION', 4],
		['C_NOTIFY_LOCATION_IN_DASH', 4]
	])
		mod.hook(...packet, {order: -10, filter: {fake: null}}, notifyLocation.bind(null, ...packet))

	function notifyLocation(type, version, event) {
		if(sending) return

		// Sometimes the client sends invalid packets for the previous stage after it has already ended
		if(!clientAction || !clientAction.skill.equals(event.skill) || clientAction.stage !== event.stage) return false

		updatePosition(event, true)

		const info = skillInfo(event.skill)
		if(info) {
			if(info.hasChains) // The server ignores packets with an incorrect skill, so correct and resend later if necessary
				if(serverConfirmedAction) {
					if(!serverAction) return false
					if(!event.skill.equals(serverAction.skill)) {
						event.skill = serverAction.skill
						return true
					}
				}
				else pendingNotifyLocation = [...arguments]

			retry('notify', info, () => toServerLocked(...arguments))
		}
	}

	function resendNotifyLocation(skill) {
		if(pendingNotifyLocation) {
			const [,,event] = pendingNotifyLocation

			if(!event.skill.equals(skill)) {
				event.skill = skill
				mod.send(...pendingNotifyLocation)
			}

			pendingNotifyLocation = null
		}
	}

	for(let packet of [
			['C_START_SKILL', 7],
			['C_START_TARGETED_SKILL', 6],
			['C_START_COMBO_INSTANT_SKILL', 4],
			['C_START_INSTANCE_SKILL', 5],
			['C_START_INSTANCE_SKILL_EX', 5],
			['C_PRESS_SKILL', 4],
			['C_NOTIMELINE_SKILL', 3]
		])
		mod.hook(packet[0], 'raw', {order: -10, filter: {fake: null}}, startSkill.bind(null, ...packet))

	function startSkill(type, version, code, data) {
		if(sending) return

		const event = protocol.parse(mod.base.protocolVersion, type, version, data = Buffer.from(data)),
			info = skillInfo(event.skill)

		let delay = 0

		if(delayNext && Date.now() <= stageEndTime) {
			delay = delayNext

			if(info && !info.noRetry && mod.settings.skills.retryCount) {
				delay -= mod.settings.skills.retryJittercomp

				if(delay < 0) delay = 0
			}
		}

		clearTimeout(delayedSkillTimeout)

		if(delay) {
			delayedSkillTimeout = setTimeout(() => {
				if(handleStartSkill(type, event, info, data) !== false) toServerLocked(data)
			}, delay)

			return false
		}

		return handleStartSkill(type, event, info, data)
	}

	function handleStartSkill(type, event, info, data) {
		serverConfirmedAction = false
		pendingNotifyLocation = null
		delayNext = 0

		const specialLoc = !!event.dest

		if(!info) {
			if(type !== 'C_PRESS_SKILL' || event.press)
				// Sometimes invalid (if this skill can't be used, but we have no way of knowing that)
				if(type !== 'C_NOTIMELINE_SKILL') updatePosition(event, false, specialLoc)

			return
		}

		if(player.hasNocTan && !nocTanWarning) {
			console.log('[SkillPrediction] Noctenium Infusion detected in inventory. Please bank or discard it before using skills.')
			nocTanWarning = true
		}

		let skill = event.skill.clone(),
			skillBase = Math.floor(skill.id / 10000),
			endReason = 0

		if(type === 'C_PRESS_SKILL' && !event.press) {
			if(clientAction && clientAction.skill.equals(skill)) {
				if(['defence', 'movingdefence', 'drain', 'presshit'].includes(info.dcType)) {
					updatePosition(event)

					if(info.chainOnRelease) {
						sendActionEnd(11)

						info = skillInfo(skill = modifyChain(skill, info.chainOnRelease))
						if(!info) return

						startAction({
							skill,
							info,
							stage: 0,
							speed: player.attackSpeed,
							effectScale: 1
						})
					}
					else sendActionEnd(['movingdefence', 'presshit'].includes(info.dcType) ? 51 : 10)
				}
				else if(info.dcType === 'movingcharge') {
					grantCharge(skill, info, clientAction.stage)
					return
				}
			}
			else if(info.keptMovingCharge) {
				grantCharge(skill, info, storedCharge)
				return
			}

			let releaseChain = info.releaseChain,
				doReleaseChain = false

			// Skill override (release chain)
			if(releaseChain && clientAction &&
				(!releaseChain.overcharge || clientAction.overcharge) &&
				(!releaseChain.connectSkills || clientAction.skill.type === TYPE_ACTION && releaseChain.connectSkills.includes(clientAction.skill.id))
			) {
				const prevInfo = skillInfo(clientAction.skill)

				if(prevInfo && Date.now() - lastStartTime >= prevInfo.rearCancelStartTime / clientAction.speed) {
					info = skillInfo(skill = modifyChain(skill, releaseChain.chain))

					if(!info) {
						updatePosition(event, false, specialLoc)
						return
					}

					if(!cooldowns.check(skill)) {
						endReason = END_REASONS[info.dcType] || END_REASONS[info.type] || 4

						if(releaseChain.grant) {
							updatePosition(event, false, specialLoc)
							sendActionEnd(endReason)
							mod.send('S_GRANT_SKILL', 3, { skill })
							return
						}
						else doReleaseChain = true
					}
				}
			}

			if(!doReleaseChain) return
		}

		if(!alive || abnormality.inMap(silence)) {
			sendCannotStartSkill(event.skill)
			return false
		}

		if(!player.hasWeapon && !info.noWeapon) {
			sendCannotStartSkill(event.skill)
			sendSystemMessage('SMT_BATTLE_SKILL_NEED_WEAPON')
			return false
		}

		if(clientAction) {
			var currentSkill = clientAction.skill.id,
				currentSkillBase = Math.floor(currentSkill / 10000),
				currentSkillSub = currentSkill % 100

			if(clientAction.skill.type === TYPE_ACTION) {
				// If checkReset flag is true, prevent re-casting the same skill unless the server says cooldown reset
				if(currentSkill === skill.id && info.checkReset && !clientAction.reset) {
					sendCannotStartSkill(event.skill)
					return false
				}

				// Some skills are bugged clientside and can interrupt the wrong skills, so they need to be flagged manually
				if(info.noInterrupt && (info.noInterrupt.includes(currentSkillBase) || info.noInterrupt.includes(currentSkillBase + '-' + currentSkillSub))) {
					let canInterrupt = false

					if(info.interruptibleWithAbnormal)
						for(let abnormal in info.interruptibleWithAbnormal)
							if(abnormality.exists(abnormal) && currentSkillBase == info.interruptibleWithAbnormal[abnormal])
								canInterrupt = true

					if(!canInterrupt) {
						sendCannotStartSkill(event.skill)
						return false
					}
				}

				if(info.keepMovingCharge) storedCharge = clientAction.stage
			}
			else if(clientAction.skill.type === TYPE_REACTION) {
				reaction: {
					if(clientAction.air) {
						if(info.useSkillWhileAirReaction) break reaction
					}
					else if(clientAction.skill.id === player.templateId*100 + 8) {
						if(info.useSkillWhileBulldozer) break reaction
					}
					else {
						if(clientAction.skill.id === player.templateId*100 + 2 && info.dcType === 'stand') break reaction
						if(info.useSkillWhileReaction) break reaction
					}

					sendCannotStartSkill(event.skill)
					return false
				}
			}
		}

		// 'connect' type skills (chains)
		for(let i = 0, chain = info.userChain; i < 10; i++, chain = undefined) { // Limit recursion to prevent infinite loop
			// 1. Abnormality chains (prioritise in order of ID)
			if(chain === undefined)
				for(let id in info.abnormalChains)
					if(abnormality.exists(Number(id))) {
						chain = info.abnormalChains[id]
						break
					}

			// 2. Skill chains
			if(chain === undefined && clientAction) {
				const {categoryChains, chains} = info

				if(categoryChains) {
					const category = get(skillsClient, clientAction.templateId, clientAction.skill.id, 'category')

					if(category && category.length)
						for(let ids of Object.keys(categoryChains).sort()) // MUST be prioritised in order
							if(ids.split(',').every(id => category.includes(Number(id)))) {
								chain = categoryChains[ids]
								break
							}
				}
				else if(chains) { // Deprecated legacy chains (does not match server behavior)
					chain = chains[currentSkillBase + '-' + currentSkillSub]
					if(chain === undefined) chain = chains[currentSkillBase]
				}
			}

			if(chain !== undefined) {
				if(chain === null) { // Special null chain
					updatePosition(event, false, specialLoc)
					sendActionEnd(4)
					return
				}

				skill = chain > 99 ? new SkillID(chain) : modifyChain(skill, chain)
				if(!skill.equals(event.skill)) {
					info = skillInfo(skill)
					if(!info) {
						if(type !== 'C_NOTIMELINE_SKILL') updatePosition(event, false, specialLoc)
						return
					}
				}

				endReason = END_REASONS[info.dcType] || END_REASONS[info.type] || 4
			}
			else {
				if(!endReason) endReason = END_REASONS[info.dcType] || END_REASONS[info.type] || 6
				break
			}
		}

		if(info.onlyDefenceSuccess)
			if(clientAction && clientAction.defendSuccess) endReason = 3
			else {
				sendCannotStartSkill(event.skill)
				sendSystemMessage('SMT_SKILL_ONLY_DEFENCE_SUCCESS')
				return false
			}

		if(info.onlyTarget && event.targets[0].id === 0n) {
			sendCannotStartSkill(event.skill)
			return false
		}

		if(info.cooldownEnd && cooldowns.check(skill)) {
			sendCannotStartSkill(event.skill)
			return false
		}

		// TODO: System Message, S_SKILL_CATEGORY emulation, DC abnormal integration
		if(info.requiredBuff) {
			if(Array.isArray(info.requiredBuff)) {
				let found = false

				for(let buff of info.requiredBuff)
					if(abnormality.exists(buff)) {
						found = true
						break
					}

				if(!found) {
					sendCannotStartSkill(event.skill)
					return false
				}
			}
			else if(!abnormality.exists(info.requiredBuff)) {
				sendCannotStartSkill(event.skill)
				return false
			}
		}

		// Calculate animation variables
		let bStamina = info.stamina || 0,
			aStamina = 0,
			mStamina = 1,
			speed = player.attackSpeed,
			passiveSpeed = 1,
			chargeSpeed = 0,
			effectScale = 1,
			distanceMult = 1,
			movement = null

		// Calculate abnormalities
		if(info.abnormals)
			for(let id in info.abnormals)
				if(abnormality.exists(id)) {
					const abnormal = info.abnormals[id]

					if(abnormal.disableSkill) {
						sendSystemMessage('SMT_SKILL_FAIL_CATEGORY')
						sendCannotStartSkill(event.skill)
						return false
					}
					if(abnormal.speed) speed *= abnormal.speed
					if(abnormal.chargeSpeed) chargeSpeed += abnormal.chargeSpeed
				}

		// Calculate passivities
		const currentSkillCategory = get(skillsClient, player.templateId, skill.id, 'category')

		function runPassive(passive) {
			if(!passive || !currentSkillCategory.includes(passive.conditionCategory)) return

			switch(passive.type) {
				case 77: if(passive.method === 3) effectScale += Math.max(0, passive.value - 1); break
				case 82:
					switch(passive.method) {
						case 1: bStamina = passive.value; break
						case 2: aStamina += passive.value; break
						case 3: mStamina += passive.value - 1; break
					}
					break
				case 218: passiveSpeed += passive.value - 1; break
				case 220: chargeSpeed += passive.value - 1; break
			}
		}

		if(currentSkillCategory) {
			for(let id of player.crests) runPassive(passivity[id])

			for(let id of player.epPerks) {
				const passives = epPerks[id]
				if(passives) for(let p of passives) runPassive(p)
			}

			for(let id of player.itemPassives) runPassive(passivity[id])
		}
		else console.log(`[SkillPrediction] Skill has no data: ${player.templateId} ${skillId(skill)}`)

		// Calculate legacy glyphs (TODO: Remove)
		if(info.glyphs)
			for(let id in info.glyphs)
				if(player.crests.has(Number(id))) {
					const glyph = info.glyphs[id]

					if(glyph.movement) movement = glyph.movement
					if(glyph.distance) distanceMult *= glyph.distance
				}

		// End calculations

		// Check skill start conditions

		// Check stamina
		const stamina = (bStamina + aStamina) * mStamina
		if(stamina) {
			if(player.stamina < stamina) {
				sendCannotStartSkill(event.skill)
				//sendSystemMessage('SMT_BATTLE_SKILL_FAIL_LOW_STAMINA')
				return false
			}

			if(info.instantStamina) player.stamina -= stamina
		}

		// Update our position and end previous skill
		if(type !== 'C_NOTIMELINE_SKILL') updatePosition(event, false, specialLoc)
		lastStartPos = myPosition

		if(event.continue) clearStage()
		else if(endReason && clientAction && !tryCancelSkill(endReason, info)) {
			sendCannotStartSkill(event.skill)
			return false
		}

		const instantStage = info.canInstantCharge && abnormality.exists(INSTANT_CHARGE_ABNORMAL) && info.length ? info.length.length || 1 : 0

		startAction({
			skill,
			info,
			stage: instantStage,
			speed: speed * passiveSpeed,
			chargeSpeed,
			effectScale,
			movement,
			moving: type === 'C_START_SKILL' && event.moving,
			distanceMult,
			dest: event.dest,
			endpoints: event.endpoints,
			overcharge: instantStage > 0
		})

		// Normally the user can press the skill button again if it doesn't go off
		// However, once the animation starts this is no longer possible, so instead we simulate retrying each skill
		retry('skill', info, () => toServerLocked(data))
	}

	function tryCancelSkill(endReason, nextSkill) {
		if(!canCancelSkill(endReason, nextSkill))
			return false

		sendActionEnd(endReason)
		return true
	}

	function canCancelSkill(endReason, nextSkill) {
		return true
	}

	function toServerLocked(...args) {
		sending = true
		const success = mod.toServer(...args)
		sending = false

		return success
	}

	mod.hook('C_CANCEL_SKILL', 3, event => {
		if(clientAction) {
			const info = skillInfo(clientAction.skill) // event.skill can be wrong, so use the known current skill instead
			if(info && info.type === 'lockon') sendActionEnd(event.type)
		}
	})

	// This packet is sent *before* S_ACTION_STAGE, so we should have plenty of time to check if the skill reset or not before the user uses it again
	mod.hook('S_CREST_MESSAGE', 2, event => {
		if(event.type === 6 && clientAction && clientAction.skill.type === TYPE_ACTION && clientAction.skill.id === event.skill)
			clientAction.reset = true
	})

	mod.hook('S_ACTION_STAGE', mod.majorPatchVersion < 75 ? 7 : 8, event => {
		if(isMe(event.gameId)) {
			if(mod.settings.debug.skills) {
				const duration = Date.now() - debugActionTime,
					strs = [skillInfo(event.skill) ? '<X' : '<-', 'S_ACTION_STAGE', skillId(event.skill), event.stage, decimal(event.speed, 3) + 'x', decimal(event.projectileSpeed, 3) + 'x']

				if(mod.settings.debug.skills.loc) strs.push(...[degrees(event.w), '(' + Math.round(event.loc.x), Math.round(event.loc.y), Math.round(event.loc.z) + ')'])

				strs.push(...[event.unk1, event.unk2, event.dest.toString(), event.target ? 1 : 0])

				if(serverAction)
					strs.push(...[
						decimal(serverAction.loc.dist2D(event.loc), 3) + 'u',
						duration + 'ms',
						`(${Math.round(duration * Math.max(serverAction.spDebugAspd, serverAction.speed))}ms)`
					])

				if(event.movement.length) {
					const movement = []

					for(let e of event.movement)
						movement.push(e.duration + ' ' + e.speed + ' ' + e.unk + ' ' + e.distance)

					strs.push('(' + movement.join(', ') + ')')
				}

				debug(strs.join(' '))
				debugActionTime = Date.now()
			}

			const info = skillInfo(event.skill)
			if(info) {
				if(clientAction && event.skill.type === clientAction.skill.type && Math.floor(event.skill.id / 100) === Math.floor(clientAction.skill.id / 100) && event.stage === clientAction.stage) {
					clearTimeout(serverTimeout)
					serverConfirmedAction = true
					resendNotifyLocation(event.skill)

					if(mod.settings.skills.jitterCompensation && event.stage === 0) {
						let delay = Date.now() - lastStartTime - ping.min

						if(delay > 0 && delay < 1000) {
							if(info.dcType === 'movingcharge') delay = Math.max(delay, Math.min(ping.max - ping.min, mod.settings.skills.chargeJitterMax))

							delayNext = delay

							if(stageEnd) {
								stageEndTime += delay
								refreshStageEnd()
							}
						}
					}
				}

				if(info.forceClip && event.movement.length) {
					oopsPosition = applyDistance(lastStartPos, event.movement.map(m => m.distance).reduce((a, b) => a + b), (info.moveDir || 0) * Math.PI)

					if(!clientAction || !clientAction.skill.equals(event.skill)) sendInstantMove(oopsPosition)
				}

				// If the server sends 2 S_ACTION_STAGE in a row without a S_ACTION_END between them and the last one is an emulated skill,
				// this stops your character from being stuck in the first animation (although slight desync will occur)
				// TODO: verify (serverAction == clientAction) is correct - looks like a typo
				if(serverAction && serverAction == clientAction && !skillInfo(clientAction.skill)) sendActionEnd(6)

				if(player.attackSpeed > 1 && event.speed === 1 !== !!info.fixedSpeed && !info.fixedSpeedWarning) {
					console.log(`[SkillPrediction] data mismatch: ${player.templateId} ${skillId(event.skill)} (ignoreAttackSpeed=${event.speed === 1})`)
					info.fixedSpeedWarning = true
				}

				serverAction = event
				serverAction.spDebugAspd = player.attackSpeed
				return false
			}

			serverAction = event
			serverAction.spDebugAspd = player.attackSpeed

			if(event.id == lastEndedId) return false

			if(clientAction && skillInfo(clientAction.skill)) sendActionEnd(lastEndSkill == clientAction.skill ? lastEndType || 6 : 6)

			clientAction = event
			updatePosition()
		}
	})

	mod.hook('S_GRANT_SKILL', 3, event => skillInfo(modifyChain(event.skill, 0)) ? false : undefined)

	mod.hook('S_INSTANT_DASH', 3, event => {
		if(isMe(event.gameId)) {
			if(mod.settings.debug.skills) {
				const duration = Date.now() - debugActionTime,
					strs = [(serverAction && skillInfo(serverAction.skill)) ? '<X' : '<-', 'S_INSTANT_DASH', event.unk1, event.unk2, event.unk3]

				if(mod.settings.debug.skills.loc) strs.push(...[degrees(event.w), '(' + Math.round(event.loc.x), Math.round(event.loc.y), Math.round(event.loc.z) + ')'])

				strs.push(...[
					decimal(serverAction.loc.dist2D(event.loc), 3) + 'u',
					duration + 'ms',
					`(${Math.round(duration * Math.max(serverAction.spDebugAspd, serverAction.speed))}ms)`
				])

				debug(strs.join(' '))
			}

			if(serverAction && skillInfo(serverAction.skill)) return false
		}
	})

	mod.hook('S_INSTANT_MOVE', 3, event => {
		if(isMe(event.gameId)) {
			if(mod.settings.debug.skills) {
				const duration = Date.now() - debugActionTime,
					strs = ['<- S_INSTANT_MOVE']

				if(mod.settings.debug.skills.loc) strs.push(...[degrees(event.w), '(' + Math.round(event.loc.x), Math.round(event.loc.y), Math.round(event.loc.z) + ')'])

				if(serverAction)
					strs.push(...[
						decimal(serverAction.loc.dist2D(event.loc), 3) + 'u',
						duration + 'ms',
						`(${Math.round(duration * Math.max(serverAction.spDebugAspd, serverAction.speed))}ms)`
					])

				debug(strs.join(' '))
			}

			updatePosition(event, true)

			const info = serverAction && skillInfo(serverAction.skill)

			if(info && info.dcType === 'shorttel' && clientAction && clientAction.skill.equals(serverAction.skill))
				oopsPosition = myPosition
		}
	})

	mod.hook('S_ACTION_END', 5, event => {
		if(isMe(event.gameId)) {
			if(mod.settings.debug.skills) {
				const duration = Date.now() - debugActionTime,
					strs = [(event.id == lastEndedId || skillInfo(event.skill)) ? '<X' : '<-', 'S_ACTION_END', skillId(event.skill), event.type]

				if(mod.settings.debug.skills.loc) strs.push(...[degrees(event.w), '(' + Math.round(event.loc.x), Math.round(event.loc.y), Math.round(event.loc.z) + ')'])

				if(serverAction)
					strs.push(...[
						decimal(serverAction.loc.dist2D(event.loc), 3) + 'u',
						duration + 'ms',
						`(${Math.round(duration * Math.max(serverAction.spDebugAspd, serverAction.speed))}ms)`
					])
				else strs.push('???')

				debug(strs.join(' '))
			}

			serverAction = null
			lastEndSkill = event.skill
			lastEndType = event.type

			if(event.id == lastEndedId) {
				lastEndedId = 0
				return false
			}

			const info = skillInfo(event.skill)
			if(info) {
				if(info.dcType === 'dash')
					// If the skill ends early then there should be no significant error
					if(clientAction && event.skill.equals(clientAction.skill)) {
						updatePosition(event)
						sendActionEnd(event.type)
					}
					// Worst case scenario, teleport the player back if the error was large enough for the client to act on it
					else if(!lastEndPosition || lastEndPosition.loc.dist3D(event.loc) >= 100)
						sendInstantMove(event)

				// These end types are hard to emulate, so we use server response instead
				// This may cause bugs with very high ping and casting the same skill multiple times
				if(clientAction && event.skill.equals(clientAction.skill) && [2, 13, 25, 29, 43].includes(event.type)) {
					updatePosition(event)
					sendActionEnd(event.type)
				}

				return false
			}

			if(!clientAction)
				console.log(`[SkillPrediction] (S_ACTION_END) clientAction is null: ${skillId(event.skill)}`)
			else if(!event.skill.equals(clientAction.skill))
				console.log(`[SkillPrediction] (S_ACTION_END) skill mismatch: ${skillId(event.skill)} (expected ${skillId(clientAction.skill)})`)

			clientAction = null
		}
	})

	mod.hook('S_EACH_SKILL_RESULT', 11, event => {
		const {reaction} = event

		if(isMe(event.target) && reaction.enable) {
			if(mod.settings.debug.skills) {
				const duration = Date.now() - debugActionTime,
					strs = ['<- S_EACH_SKILL_RESULT.reaction', skillId(reaction.skill), reaction.stage, '[' + Number(reaction.instantPush), Number(reaction.air), Number(reaction.airChain) + ']']

				if(mod.settings.debug.skills.loc) strs.push(...[degrees(reaction.w), '(' + Math.round(reaction.loc.x), Math.round(reaction.loc.y), Math.round(reaction.loc.z) + ')'])

				debug(strs.join(' '))
			}

			if(clientAction && skillInfo(clientAction.skill)) sendActionEnd(9)

			clientAction = serverAction = reaction
			serverAction.spDebugAspd = player.attackSpeed
			updatePosition()
		}
	})

	mod.hook('S_DEFEND_SUCCESS', 3, event => {
		if(isMe(event.gameId))
			if(!serverAction) return false // Due to a bug, server sometimes sends this packet outside of an action
			else if(clientAction && clientAction.skill.equals(serverAction.skill)) clientAction.defendSuccess = true
			else if(mod.settings.skills.defendSuccessStrict || player.job !== 10) return false
	})

	mod.hook('S_CANNOT_START_SKILL', 4, event => {
		if(skillInfo(event.skill.id)) {
			if(mod.settings.skills.delayOnFail && mod.settings.skills.retryCount && clientAction && (!serverAction || !clientAction.skill.equals(serverAction.skill)) && event.skill.id === clientAction.skill.id)
				delayNext += mod.settings.skills.retryMs

			return false
		}
	})

	mod.hook('C_CAN_LOCKON_TARGET', 3, event => {
		const info = skillInfo(event.skill)
		if(info) {
			let success = true

			if(info.partyOnly) {
				success = false

				if(partyMembers) 
					for(let member of partyMembers)
						if(member === event.target) {
							success = true
							break
						}
			}

			mod.toClient('S_CAN_LOCKON_TARGET', 3, Object.assign({success}, event))
		}
	})

	mod.hook('S_CAN_LOCKON_TARGET', 3, event => skillInfo(event.skill) ? false : undefined)

	if(mod.settings.debug.skills.projectiles) {
		mod.hook('S_SPAWN_PROJECTILE', 5, event => {
			if(!isMe(event.gameId)) return

			debug(`<- S_SPAWN_PROJECTILE ${skillId(event.skill)} ${event.unk1} ${event.loc.x} ${event.loc.y} ${event.loc.z} ${event.dest.x} ${event.dest.y} ${event.dest.z} ${event.moving} ${event.speed} ${event.unk2} ${event.unk3} ${event.w}`)

			if(skillInfo(event.skill)) {
				serverProjectiles[event.id.toString()] = event.skill
				return false
			}
		})

		mod.hook('S_DESPAWN_PROJECTILE', 2, event => {
			debug(`<- S_DESPAWN_PROJECTILE ${event.unk1} ${event.unk2}`)

			const idStr = event.id.toString()
			if(serverProjectiles[idStr]) {
				delete serverProjectiles[idStr]
				return false
			}
		})

		mod.hook('S_START_USER_PROJECTILE', 5, event => {
			if(!isMe(event.gameId)) return

			debug(`<- S_START_USER_PROJECTILE ${skillId(event.skill)} ${event.loc.x} ${event.loc.y} ${event.loc.z} ${event.dest.x} ${event.dest.y} ${event.dest.z} ${event.speed} ${event.distance} ${event.curve}`)

			if(skillInfo(event.skill)) {
				const skill = new SkillID(event.skill)
				serverProjectiles[event.id.toString()] = skill
				applyProjectileHits(event.id, skill)
				return false
			}
		})

		mod.hook('S_END_USER_PROJECTILE', 3, event => {
			debug(`<- S_END_USER_PROJECTILE ${event.unk1} ${event.unk2} ${event.target ? 1 : 0}`)

			const idStr = event.id.toString()
			if(serverProjectiles[idStr]) {
				delete serverProjectiles[idStr]
				return false
			}
		})

		mod.hook('C_HIT_USER_PROJECTILE', 4, event => {
			debug(`-> C_HIT_USER_PROJECTILE ${event.targets.length} ${event.end}`)

			const idStr = event.id.toString(),
				skill = clientProjectiles[idStr]

			if(skill) {
				// Your own projectiles can hit you while moving, in which case we ignore this packet
				if(event.targets.length === 1 && event.targets[0].gameId === player.gameId) return false

				if(event.end || skillInfo(skill).explodeOnHit)
					removeProjectile(event.id, true, event.targets.length ? event.targets[0].gameId : true)

				for(let id in serverProjectiles)
					if(serverProjectiles[id] === skill) {
						event.id = BigInt(id)
						return true
					}

				clientProjectileHits.push(Object.assign(event, {
					skill,
					time: Date.now()
				}))
				return false
			}
		})

		function applyProjectileHits(id, skill) {
			// Garbage collect expired hits
			for(let i = 0, expiry = Date.now() - getServerTimeout(); i < clientProjectileHits.length; i++)
				if(clientProjectileHits[i].time <= expiry)
					clientProjectileHits.splice(i--, 1)

			for(let i = 0; i < clientProjectileHits.length; i++) {
				const event = clientProjectileHits[i]

				if(event.skill === skill) {
					clientProjectileHits.splice(i--, 1)

					event.id = id
					mod.toServer('C_HIT_USER_PROJECTILE', 4, event)

					if(event.end) {
						delete serverProjectiles[id.toString()]
						return
					}
				}
			}
		}
	}

	function startAction(opts) {
		const info = opts.info,
			// Must clone opts before sendActionStage() modifes it
			fxOpts = opts.stage || info.dcType === 'dash' || info.projectiles ? Object.assign({}, opts) : null

		if(info.consumeAbnormal)
			if(Array.isArray(info.consumeAbnormal))
				for(let id of info.consumeAbnormal)
					abnormality.remove(id)
			else
				abnormality.remove(info.consumeAbnormal)

		sendActionStage(opts)

		if(fxOpts) {
			fxOpts.pos = Object.assign({}, myPosition)
			effectsTimeouts.push(setTimeout(sendActionEffects, 25, fxOpts)) // Emulate server tick delay
		}

		if(info.triggerAbnormal)
			for(let id in info.triggerAbnormal) {
				const abnormal = info.triggerAbnormal[id]

				if(Array.isArray(abnormal))
					abnormality.add(id, abnormal[0], abnormal[1])
				else
					abnormality.add(id, abnormal, 1)
			}

		lastStartTime = Date.now()
	}

	function sendActionStage(opts) {
		clearTimeout(serverTimeout)

		const info = opts.info,
			multiStage = Array.isArray(info.length),
			moveDir = (info.moveDir || 0) * Math.PI

		let animSpeed = opts.speed,
			realSpeed = opts.speed

		if(info.dcType === 'movingcharge') realSpeed = (realSpeed + opts.chargeSpeed) * info.timeRate
		if(info.fixedSpeed) {
			animSpeed = 1
			if(!['movingdefence', 'movingskill', 'shootingmovingskill'].includes(info.dcType)) realSpeed = 1
		}

		if(mod.settings.debug.skills) debug(`<* S_ACTION_STAGE ${skillId(opts.skill)} ${opts.stage} ${decimal(animSpeed, 3)}x ${decimal(realSpeed, 3)}x`)

		opts.stage = opts.stage || 0
		opts.distanceMult = opts.distanceMult || 1

		movePlayer(opts.distance * opts.distanceMult, moveDir) // Apply movement from previous stage
		myPosition.action = false

		let movement = opts.movement

		if(multiStage)
			movement = movement && movement[opts.stage] || !opts.moving && get(info, 'inPlace', 'movement', opts.stage) || get(info, 'movement', opts.stage) || []
		else
			movement = movement || !opts.moving && get(info, 'inPlace', 'movement') || info.movement || []

		mod.send('S_ACTION_STAGE', mod.majorPatchVersion < 75 ? 7 : 8, clientAction = {
			gameId: myChar(),
			loc: myPosition.loc,
			w: myPosition.w,
			templateId: player.templateId,
			skill: opts.skill,
			stage: opts.stage,
			speed: animSpeed,
			projectileSpeed: info.fixedSpeed ? 1 : realSpeed,
			id: actionNumber,
			effectScale: opts.effectScale,
			moving: false,
			dest: info.setEndpointStage === opts.stage ? opts.endpoints[0].loc : undefined,
			target: 0,
			movement,

			// Meta
			defendSuccess: opts.stage > 0 && !!clientAction && clientAction.skill === opts.skill ? clientAction.defendSuccess : false,
			overcharge: opts.overcharge || !!clientAction && clientAction.overcharge
		})

		opts.distance = get(info, 'distance', opts.stage) || info.distance || 0
		stageEnd = null

		let noTimeout = false

		if(serverAction && Math.floor(serverAction.skill.id / 100) === Math.floor(opts.skill.id / 100) && serverAction.stage >= opts.stage)
			noTimeout = true

		if(info.type === 'dynamicDistance') {
			opts.distance = myPosition.loc.dist2D(opts.dest)
		}
		else if(info.dcType === 'shorttel') {
			if(!info.length || !(info.length.length > opts.stage + 1)) { // Trigger teleport on last stage
				opts.distance = Math.max(0, myPosition.loc.dist2D(opts.dest) - 15) // Client is approx. 15 units off
				applyDistance(myPosition, opts.distance)
				myPosition.loc.z = opts.dest.z
				sendInstantMove()
				opts.distance = 0
			}
		}

		if(['defence', 'movingdefence', 'movingcharge', 'presshit'].includes(info.dcType) && opts.stage === ((info.length && (info.length.length || 1)) || 0)) {
			if(info.dcType === 'movingcharge' && info.autoRelease !== undefined) {
				stageEnd = () => {
					toServerLocked('C_PRESS_SKILL', 4, {
						skill: opts.skill,
						press: false,
						loc: myPosition.loc,
						w: myPosition.w
					})
					grantCharge(opts.skill, info, opts.stage)
				}

				if(info.autoRelease === 0) {
					stageEnd()
					stageEnd = null
				}
				else stageEndTimeout = setTimeout(stageEnd, Math.round(info.autoRelease / realSpeed))
			}

			effectsTimeouts.push(setTimeout(() => { clientAction.overcharge = true }, Math.round(info.overcharge / realSpeed)))

			if(!noTimeout) serverTimeout = setTimeout(sendActionEnd, getServerTimeout(), 6)
			return
		}

		let length = Math.round((multiStage ? info.length[opts.stage] : info.length) / realSpeed)

		if(!noTimeout) {
			let serverTimeoutTime = getServerTimeout()
			if(length > serverTimeoutTime) serverTimeout = setTimeout(sendActionEnd, serverTimeoutTime, 6)
		}

		if(multiStage) {
			if(!opts.moving) {
				let inPlaceDistance = get(info, 'inPlace', 'distance', opts.stage)

				if(inPlaceDistance !== undefined) opts.distance = inPlaceDistance
			}

			if(opts.stage + 1 < info.length.length) {
				opts.stage += 1
				stageEnd = sendActionStage.bind(null, opts)
				stageEndTime = Date.now() + length
				stageEndTimeout = setTimeout(stageEnd, length)
				return
			}
		}
		else
			if(!opts.moving) {
				const inPlaceDistance = get(info, 'inPlace', 'distance')

				if(inPlaceDistance !== undefined) opts.distance = inPlaceDistance
			}

		if(info.dcType === 'dash' && opts.distance) {
			const distance = lastStartPos.loc.dist2D(opts.dest)

			if(distance < opts.distance) {
				length *= distance / opts.distance
				opts.distance = distance
			}
		}

		if(['defence', 'movingdefence', 'movingcharge', 'presshit'].includes(info.dcType)) {
			opts.stage += 1
			stageEnd = sendActionStage.bind(null, opts)
			stageEndTime = Date.now() + length
			stageEndTimeout = setTimeout(stageEnd, length)
			return
		}

		stageEnd = sendActionEnd.bind(null, info.dcType === 'dash' ? 39 : 0, opts.distance * opts.distanceMult, moveDir)
		stageEndTime = Date.now() + length
		stageEndTimeout = setTimeout(stageEnd, length)
	}

	function sendActionEffects(opts) {
		const info = opts.info

		if(opts.stage) grantCharge(opts.skill, opts.info, opts.stage)

		if(info.dcType === 'dash') sendInstantDash(opts.dest)

		if(mod.settings.debug.skills.projectiles && info.projectiles)
			for(let chain of info.projectiles) {
				castProjectile({
					skill: modifyChain(opts.skill, chain),
					pos: opts.pos,
					dest: opts.dest
				})
			}
	}

	function clearEffects() {
		if(!effectsTimeouts.length) return
		for(let t of effectsTimeouts) clearTimeout(t)
		effectsTimeouts = []
	}

	function clearStage() {
		clearTimeout(serverTimeout)
		clearEffects()
		clearTimeout(stageEndTimeout)
	}

	function refreshStageEnd() {
		clearTimeout(stageEndTimeout)
		stageEndTimeout = setTimeout(stageEnd, stageEndTime - Date.now())
	}

	function grantCharge(skill, info, stage) {
		const levels = info.chargeLevels,
			chain = levels ? levels[stage] : 10 + stage

		if(chain == null) {
			sendActionEnd(2)
			return
		}

		mod.send('S_GRANT_SKILL', 3, {
			skill: chain > 99 ? new SkillID(chain) : modifyChain(skill.clone(), chain)
		})
	}

	function castProjectile(opts) {
		const info = skillInfo(opts.skill)

		if(info.delay) effectsTimeouts.push(setTimeout(addProjectile, info.delay, opts))
		else addProjectile(opts)
	}

	function addProjectile(opts) {
		const skill = opts.skill,
			info = skillInfo(skill)

		if(!info) return

		const id = 0xffffffff00000000n + BigInt(clientProjectileId = clientProjectileId + 1 >>> 0)

		clientProjectiles[id.toString()] = skill

		setTimeout(removeProjectile, 5000, id, info.type === 'userProjectile', true)

		if(info.type === 'userProjectile') {
			const {loc} = applyDistance({
				loc: opts.pos.loc.addN({z: 30}),
				w: opts.pos.w,
			}, 15)

			mod.toClient('S_START_USER_PROJECTILE', 5, {
				gameId: player.gameId,
				templateId: player.templateId,
				id,
				skill,
				loc,
				dest: opts.dest,
				speed: info.flyingSpeed,
				distance: info.flyingDistance,
				curve: !!info.flyingDistance
			})
		}
	}

	function removeProjectile(id, user, explode) {
		delete clientProjectiles[id.toString()]

		if(user) {
			const target = typeof explode === 'object' ? explode : 0

			explode = !!explode

			mod.toClient('S_END_USER_PROJECTILE', 3, {
				id: id,
				unk1: explode && !target,
				unk2: explode,
				target
			})
		}
	}

	function sendInstantDash(dest) {
		mod.toClient('S_INSTANT_DASH', 3, {
			gameId: myChar(),
			target: 0,
			unk: 0,
			loc: dest,
			w: myPosition.w
		})
	}

	function sendInstantMove(event) {
		if(event) updatePosition(event)

		mod.toClient('S_INSTANT_MOVE', 3, {
			gameId: myChar(),
			loc: myPosition.loc,
			w: myPosition.w
		})
	}

	function sendActionEnd(type, distance, dir) {
		clearStage()

		if(!clientAction) return

		if(mod.settings.debug.skills) debug(['<* S_ACTION_END', skillId(clientAction.skill), type || 0, degrees(myPosition.w), (distance || 0) + 'u'].join(' '))

		if(oopsPosition && (mod.settings.skills.forceClipStrict || !myPosition.action)) sendInstantMove(oopsPosition)
		else movePlayer(distance, dir)

		mod.toClient('S_ACTION_END', 5, {
			gameId: myChar(),
			loc: myPosition.loc,
			w: myPosition.w,
			templateId: player.templateId,
			skill: clientAction.skill,
			type: type || 0,
			id: clientAction.id
		})

		if(clientAction.id === actionNumber) { // Emulated skill
			const info = skillInfo(clientAction.skill)
			if(info) {
				if(info.consumeAbnormalEnd)
					if(Array.isArray(info.consumeAbnormalEnd))
						for(let id of info.consumeAbnormalEnd)
							abnormality.remove(id)
					else
						abnormality.remove(info.consumeAbnormalEnd)

				if(info.cooldownEnd && !cooldowns.check(clientAction.skill))
					cooldowns.set(clientAction.skill, info.cooldownEnd)

				if(info.dcType === 'dash') lastEndPosition = myPosition
			}
		}
		else lastEndedId = clientAction.id

		actionNumber++
		if(actionNumber > 0xffffffff) actionNumber = 0x80000000

		oopsPosition = clientAction = null
	}

	function sendCannotStartSkill(skill) { mod.toClient('S_CANNOT_START_SKILL', 4, { skill: new SkillID({id: skill.id}) }) }
	function sendSystemMessage(type, vars) { mod.toClient('S_SYSTEM_MESSAGE', 1, { message: mod.buildSystemMessage(type, vars) })  }

	function updatePosition(event, action, special) {
		event = event || clientAction

		myPosition = {
			loc: event.loc,
			w: special ? event.w || myPosition.w : event.w, // Should be a skill flag maybe?
			action
		}
	}

	function retry(type, skill, cb) {
		clearTimeout(retryTimer[type])

		if(skill.noRetry) return

		const thisSkill = clientAction.skill,
			count = mod.settings.skills[skill.longRetry ? 'longRetryCount' : 'retryCount'],
			ms = mod.settings.skills[skill.longRetry ? 'longRetryMs' : 'retryMs']

		let iter = 0
		function retryIter() {
			if(++iter > count) {
				retryTimer[type] = null
				return
			}
			retryTimer[type] = setTimeout(() => { if(clientAction && clientAction.skill.equals(thisSkill) && cb()) retryIter() }, ms)
		}

		retryIter()
	}

	function movePlayer(distance, dir) {
		if(distance && !myPosition.action) applyDistance(myPosition, distance, dir)
	}

	function applyDistance(pos, dist, dir = 0) {
		pos.loc.add(new Vec3(dist, 0, 0).rotate(pos.w + dir))
		return pos
	}

	// Modifies the chain part (last 2 digits) of a skill ID
	function modifyChain(skill, chain) {
		(skill = skill.clone()).id += chain - (skill.id % 100)
		return skill
	}

	function skillInfo(skill) {
		if(!(skill instanceof SkillID)) skill = new SkillID(skill)

		if(skill.type !== TYPE_ACTION) return null

		const id = skill.id

		let cached = skillsCache.get(id)
		if(cached !== undefined) return cached

		const race = player.race,
			job = player.job,
			group = Math.floor(id / 10000),
			level = (Math.floor(id / 100) % 100) - 1,
			sub = id % 100,
			info = [ // Ordered by least specific < most specific
				get(skillsClient, player.templateId, skill.id),
				get(skills, '*', skill.id),
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
			]

		// Note: Exact skill (or group + sub) must be specified for prediction to be enabled. This helps to avoid breakage for edge cases
		if(info[1] || info[10]) {
			skillsCache.set(id, cached = Object.assign({}, ...info))
			// Sanitize to reduce memory usage
			delete cached.race
			delete cached.level

			return cached
		}

		if(info[0]) console.log(`[SkillPrediction] Unemulated skill: ${player.templateId} ${skillId(skill)} (${info[0].dcType})`)

		skillsCache.set(id, null)
		return null
	}

	function isMe(id) { return player.gameId === id || vehicleEx && vehicleEx === id }
	function myChar() { return vehicleEx ? vehicleEx : player.gameId }

	function getServerTimeout() {
		return ping.max + (mod.settings.skills.retryCount * mod.settings.skills.retryMs) + mod.settings.skills.serverTimeout
	}
}

// Utilities

function get(obj, ...keys) {
	if(obj === undefined) return

	for(let key of keys)
		if((obj = obj[key]) === undefined)
			return

	return obj
}

// Debug Utilities

function debug(msg) {
	console.log(`[${(Date.now() % 10000).toString().padStart(4, '0')}] ${msg}`)
}

function degrees(w) { return Math.round(w / Math.PI * 180) + '\xb0' }

function decimal(n, p) {
	p = 10 ** p
	return Math.round(n * p)  / p
}

function skillId(skill) {
	if(!(skill instanceof SkillID)) skill = new SkillID(skill)

	let str = skill.reserved ? `[X${skill.reserved.toString(16)}]` : ''

	switch(skill.type) {
		case 1: str += 'A'; break
		case 2: str += 'R'; break
		default: str += `[T${skill.type}]`; break
	}

	if(skill.npc) {
		if(skill.type === 1) return `${str}${skill.huntingZoneId}:${skill.id}`
		return str + skill.id
	}

	const id = skill.id.toString()

	switch(skill.type) {
		case 1: return str + [id.slice(0, -4), id.slice(-4, -2), id.slice(-2)].join('-')
		case 2: return str + [id.slice(0, -2), id.slice(-2)].join('-')
		default: return str + id
	}
}