const SKILL_RETRY_MS		= 50,	/* Desync reduction (0 = disabled) - Setting this too high may cause skills to go off twice,
										and may cause desync compensation to fail.
									*/
	SKILL_DELAY_NEXT		= true,	// Desync compensation
	DEBUG					= false,
	DEBUG_LOC				= false,
	DEBUG_GLYPH				= false

const sysmsg = require('tera-data').sysmsg,
	AbnormalityPrediction = require('./abnormalities'),
	skills = require('./config/skills')

module.exports = function SkillPrediction(dispatch) {
	const abnormality = new AbnormalityPrediction(dispatch)

	let skillsCache = null,
		cid = null,
		model = 0,
		job = -1,
		aspd = 1,
		currentGlyphs = null,
		currentStamina = 0,
		delayNext = false,
		delayNextEnd = 0,
		delayNextTimeout = null,
		actionNumber = 0x80000000,
		currentLocation = null,
		currentAction = null,
		serverAction = null,
		lastEndType = 0,
		lastEmulatedEnd = 0,
		stageTimeout = null,
		debugActionTime = 0

	dispatch.hook('sLogin', event => {
		skillsCache = {}
		;({cid, model} = event)
		job = (model - 10101) % 100

		if(DEBUG) console.log('Class', job)
	})

	dispatch.hook('sLoadTopo', () => {
		actionNumber = 0x8000000
		currentAction = null
		serverAction = null
		lastEndType = 0
		lastEmulatedEnd = 0
		clearTimeout(stageTimeout)
	})

	dispatch.hook('sPlayerStatUpdate', event => { aspd = 1 + (event.bonusAttackSpeed / event.baseAttackSpeed) })

	dispatch.hook('sCrestInfo', event => {
		currentGlyphs = {}

		for(let glyph of event.glyphs)
			currentGlyphs[glyph.id] = glyph.enabled
	})

	dispatch.hook('sCrestApply', event => {
		if(DEBUG_GLYPH) console.log('Glyph', event.id, event.enabled)

		currentGlyphs[event.id] = event.enabled
	})

	dispatch.hook('sPlayerChangeStamina', event => { currentStamina = event.currentRe })

	dispatch.hook('cPlayerLocation', event => {
		if(DEBUG_LOC) console.log('Location %d %d (%d %d %d %d) > (%d %d %d)', event.type, event.speed, Math.round(event.x1), Math.round(event.y1), Math.round(event.z1), event.w, Math.round(event.x2), Math.round(event.y2), Math.round(event.z2))

		if(currentAction) {
			let info = skillInfo(currentAction.skill)

			if(info && info.movement) return false
		}

		currentLocation = {
			// This is not correct, but the midpoint location seems to be "close enough" for the client to not teleport the player
			x: (event.x1 / 2) + (event.x2 / 2),
			y: (event.y1 / 2) + (event.y2 / 2),
			z: (event.z1 / 2) + (event.z2 / 2),
			w: event.w
		}
	})

	dispatch.hook('cNotifyLocationInAction', event => {
		if(DEBUG_LOC) console.log('NotifyLocation %s %d (%d %d %d %d)', skillId(event.skill), event.stage, Math.round(event.x), Math.round(event.y), Math.round(event.z), event.w)

		currentLocation = {
			x: event.x,
			y: event.y,
			z: event.z,
			w: event.w,
			inAction: true
		}

		let info = skillInfo(event.skill)

		if(info && SKILL_RETRY_MS && !info.noRetry)
			setTimeout(() => {
				if(currentAction && currentAction.skill == event.skill && (!serverAction || serverAction.skill != event.skill))
					dispatch.toServer('cNotifyLocationInAction', event)
			}, SKILL_RETRY_MS)
	})

	dispatch.hook('cStartSkill', startSkill.bind(null, 'cStartSkill'))
	dispatch.hook('cStartTargetedSkill', startSkill.bind(null, 'cStartTargetedSkill'))
	dispatch.hook('cStartComboInstantSkill', startSkill.bind(null, 'cStartComboInstantSkill'))
	dispatch.hook('cStartInstanceSkill', startSkill.bind(null, 'cStartInstanceSkill'))
	dispatch.hook('cPressSkill', startSkill.bind(null, 'cPressSkill'))

	function startSkill(type, event) {
		let delayed = delayNext && delayNextEnd >= Date.now()

		if(DEBUG)
			if(DEBUG_LOC) {
				if(type == 'cStartSkill' || type == 'cStartTargetedSkill') console.log('-> %s %s %d\xb0 (%d %d %d) > (%d %d %d)', type, skillId(event.skill), event.w, Math.round(event.x1), Math.round(event.y1), Math.round(event.z1), Math.round(event.x2), Math.round(event.y2), Math.round(event.z2), delayed ? 'Delayed' : '')
				else if(type == 'cPressSkill') console.log('-> %s %s %d\xb0 (%d %d %d)', type, skillId(event.skill), event.start, event.w, Math.round(event.x), Math.round(event.y), Math.round(event.z), delayed ? 'Delayed' : '')
				else console.log('-> %s %s %d %d\xb0 (%d %d %d)', type, skillId(event.skill), event.w, Math.round(event.x), Math.round(event.y), Math.round(event.z), delayed ? 'Delayed' : '')
			}
			else if(type == 'cPressSkill') console.log('->', type, skillId(event.skill), event.start, delayed ? 'Delayed' : '')
			else console.log('->', type, skillId(event.skill), delayed ? 'Delayed' : '')

		if(delayed) {
			clearTimeout(delayNextTimeout)
			delayNextTimeout = setTimeout(sendStartSkill, SKILL_RETRY_MS, type, event, true)
			return false
		}

		return sendStartSkill(type, event)
	}

	function sendStartSkill(type, event, send) {
		delayNext = false

		let info = skillInfo(event.skill)
		if(!info) {
			if(type != 'cPressSkill' || event.start)
				// Sometimes invalid (if this skill can't be used, but we have no way of knowing that)
				updateLocation(event, false, type == 'cStartSkill' || type == 'cStartTargetedSkill')

			if(send) dispatch.toServer(type, event)
			return
		}

		let skill = event.skill,
			skillBase = Math.floor((skill - 0x4000000) / 10000),
			interruptType = 0

		if(type == 'cPressSkill' && !event.start) {
			if(info.instantPressAndHold && currentAction && currentAction.skill == skill) {
				updateLocation(event)
				sendActionEnd(10)
			}

			if(send) dispatch.toServer(type, event)
			return
		}

		if(currentAction) {
			interruptType = info.chainType || 6

			let currentSkill = currentAction.skill - 0x4000000,
				currentSkillBase = Math.floor(currentSkill / 10000),
				currentSkillSub = currentSkill % 100

			// Some skills are bugged clientside and can interrupt the wrong skills, so they need to be flagged manually
			if(info.noInterrupt && (info.noInterrupt.includes(currentSkillBase) || info.noInterrupt.includes(currentSkillBase + '-' + currentSkillSub)))
				return false

			if(currentSkill == 68209065 || currentSkill == 68209066) return false // Stagger, Knockdown

			let chain = get(info, 'chains', currentSkillBase + '-' + currentSkillSub) || get(info, 'chains', currentSkillBase)

			if(chain) {
				skill += chain - ((skill - 0x4000000) % 100)
				interruptType = info.chainType || 4
			}
		}

		// Skill override (chain)
		if(skill != event.skill) {
			info = skillInfo(skill)
			if(!info) {
				updateLocation(event, false, type == 'cStartSkill' || type == 'cStartTargetedSkill')

				if(send) dispatch.toServer(type, event)
				return
			}
		}

		// TODO: System Message
		if(info.requiredBuff && !abnormality.exists(info.requiredBuff)) return false

		updateLocation(event, false, type == 'cStartSkill' || type == 'cStartTargetedSkill')

		let abnormalSpeed = 1,
			movementMult = 1

		if(info.abnormals)
			for(let id in info.abnormals)
				if(abnormality.exists(id)) {
					let abnormal = info.abnormals[id]

					if(abnormal.speed) abnormalSpeed *= abnormal.speed
					if(abnormal.chain) skill += abnormal.chain - ((skill - 0x4000000) % 100)
					if(abnormal.skill) skill = 0x4000000 + abnormal.skill
				}

		// Skill override (abnormal)
		if(skill != event.skill) {
			info = skillInfo(skill)
			if(!info) {
				if(send) dispatch.toServer(type, event)
				return
			}
		}

		if(interruptType) sendActionEnd(interruptType)

		// Finish calculations and send the final skill
		let speed = info.fixedSpeed || aspd * (info.speed || 1) * abnormalSpeed,
			stamina = info.stamina

		if(info.glyphs)
			for(let id in info.glyphs)
				if(currentGlyphs[id]) {
					let glyph = info.glyphs[id]

					if(glyph.speed) speed *= glyph.speed
					if(glyph.movement) movementMult *= glyph.movement
					if(glyph.stamina) stamina += glyph.stamina
				}

		if(stamina) {
			if(currentStamina < stamina) {
				//dispatch.toClient('sSystemMessage', { message: '@' + sysmsg.map.name['smtBattleSkillFailLowStamina'] })
				return false
			}

			if(info.instantStamina) currentStamina -= stamina
		}

		sendActionStage(skill, info, 0, speed, 0, movementMult)

		if(send) dispatch.toServer(type, event)

		// Normally the user can press the skill button again if it doesn't go off
		// However, once the animation starts this is no longer possible, so instead we simulate retrying each skill
		if(SKILL_RETRY_MS && !info.noRetry)
			setTimeout(() => {
				// Note: May fail with high ping and casting the same skill multiple times in very quick succession (ie. Lancer Combo Attack)
				if(currentAction && currentAction.skill == skill && (!serverAction || serverAction.skill != skill))
					dispatch.toServer(type, event)
			}, SKILL_RETRY_MS)
	}

	dispatch.hook('cCancelSkill', event => {
		if(DEBUG) console.log('-> cCancelSkill', skillId(event.skill), event.type)

		if(currentAction) {
			let info = skillInfo(currentAction.skill) // event.skill can be wrong, so use the known current skill instead
			if(info && info.canCancel) sendActionEnd(event.type)
		}
	})

	dispatch.hook('sActionStage', event => {
		if(event.source.equals(cid)) {
			if(DEBUG) {
				if(DEBUG_LOC) {
					if(serverAction) console.log('<- sActionStage %s %d %dx %d\xb0 %du %dms (%dms)', skillId(event.skill), event.stage, Math.round(event.speed * 1000) / 1000, event.w, Math.round(Math.sqrt(Math.pow(event.x - serverAction.x, 2) + Math.pow(event.y - serverAction.y, 2)) * 1000) / 1000, Date.now() - debugActionTime, Math.round((Date.now() - debugActionTime) * serverAction.speed), event.unk, event.unk1, event.toX, event.toY, event.toZ, event.unk2, event.unk3, skillInfo(event.skill) ? 'X' : '')
					else console.log('<- sActionStage %s %d %dx %d\xb0', skillId(event.skill), event.stage, Math.round(event.speed * 1000) / 1000, event.w, event.unk, event.unk1, event.toX, event.toY, event.toZ, event.unk2, event.unk3, skillInfo(event.skill) ? 'X' : '')
				}
				else if(serverAction) console.log('<- sActionStage %s %d %dx %du %dms (%dms)', skillId(event.skill), event.stage, Math.round(event.speed * 1000) / 1000, Math.round(Math.sqrt(Math.pow(event.x - serverAction.x, 2) + Math.pow(event.y - serverAction.y, 2)) * 1000) / 1000, Date.now() - debugActionTime, Math.round((Date.now() - debugActionTime) * serverAction.speed), event.unk, event.unk1, event.toX, event.toY, event.toZ, event.unk2, event.unk3, skillInfo(event.skill) ? 'X' : '')
				else console.log('<- sActionStage %s %d %dx', skillId(event.skill), event.stage, Math.round(event.speed * 1000) / 1000, event.unk, event.unk1, event.toX, event.toY, event.toZ, event.unk2, event.unk3, skillInfo(event.skill) ? 'X' : '')

				debugActionTime = Date.now()
			}

			if(skillInfo(event.skill)) {
				// If the server sends 2 sActionStage in a row without a sActionEnd between them and the last one is an emulated skill,
				// this stops your character from being stuck in the first animation (although slight desync will occur)
				if(serverAction && serverAction == currentAction && !skillInfo(currentAction.skill)) sendActionEnd(6)

				serverAction = event
				return false
			}

			if(currentAction && skillInfo(currentAction.skill)) sendActionEnd(lastEndType)

			serverAction = currentAction = event
			lastEndType = 6

			updateLocation()
		}
	})

	dispatch.hook('sActionEnd', event => {
		if(event.source.equals(cid)) {
			if(DEBUG) {
				if(DEBUG_LOC) console.log('<- sActionEnd %s %d %d\xb0 %du %dms (%dms)', skillId(event.skill), event.type, event.w, Math.round(Math.sqrt(Math.pow(event.x - serverAction.x, 2) + Math.pow(event.y - serverAction.y, 2)) * 1000) / 1000, Date.now() - debugActionTime, Math.round((Date.now() - debugActionTime) * serverAction.speed), (event.id == lastEmulatedEnd || skillInfo(event.skill)) ? 'X' : '')
				else console.log('<- sActionEnd %s %d %du %dms (%dms)', skillId(event.skill), event.type, Math.round(Math.sqrt(Math.pow(event.x - serverAction.x, 2) + Math.pow(event.y - serverAction.y, 2)) * 1000) / 1000, Date.now() - debugActionTime, Math.round((Date.now() - debugActionTime) * serverAction.speed), (event.id == lastEmulatedEnd || skillInfo(event.skill)) ? 'X' : '')
			}

			serverAction = null
			lastEndType = event.type

			if(event.id == lastEmulatedEnd) {
				lastEmulatedEnd = 0
				return false
			}

			if(skillInfo(event.skill)) {
				// Skills that may only be cancelled during part of the animation are hard to emulate, so we use server response instead
				// This may cause bugs with very high ping and casting the same skill multiple times
				if(currentAction && event.skill == currentAction.skill && event.type == 2) sendActionEnd(2)

				return false
			}

			if(!currentAction)
				console.log('[SkillPrediction] sActionEnd: currentAction is null', skillId(event.skill), event.id)
			else if(event.skill != currentAction.skill)
				console.log('[SkillPrediction] sActionEnd: skill mismatch', skillId(currentAction.skill), skillId(event.skill), currentAction.id, event.id)

			currentAction = null
		}
	})

	dispatch.hook('sEachSkillResult', event => {
		if(event.target.equals(cid) && event.setTargetAction) {
			if(currentAction && skillInfo(currentAction.skill)) sendActionEnd(lastEndType)

			currentAction = serverAction = {
				x: event.targetX,
				y: event.targetY,
				z: event.targetZ,
				w: event.targetW,
				skill: event.targetAction,
				stage: event.targetStage,
				id: event.targetId
			}

			updateLocation()
		}
	})

	dispatch.hook('sCannotStartSkill', event => {
		if(DEBUG) console.log('<- sCannotStartSkill', skillId(event.skill, true))

		if(skillInfo(event.skill, true)) {
			if(SKILL_DELAY_NEXT && SKILL_RETRY_MS && currentAction && (!serverAction || currentAction.skill != serverAction.skill) && event.skill == currentAction.skill - 0x4000000)
				delayNext = true

			return false
		}
	})

	function sendActionStage(skill, info, stage, speed, distance, distanceMult) {
		movePlayer(distance * distanceMult)

		dispatch.toClient('sActionStage', currentAction = {
			source: cid,
			x: currentLocation.x,
			y: currentLocation.y,
			z: currentLocation.z,
			w: currentLocation.w,
			model,
			skill,
			stage,
			speed,
			id: actionNumber,
			unk: 1,
			unk1: 0,
			toX: 0,
			toY: 0,
			toZ: 0,
			unk2: 0,
			unk3: 0
		})

		if(info.instantPressAndHold) return

		let length = 0,
			movement = 0

		if(Array.isArray(info.length)) {
			length = info.length[stage] / speed
			movement = get(info, 'movement', stage)

			if(stage + 1 < info.length.length) {
				delayNextEnd = Date.now() + length + SKILL_RETRY_MS
				stageTimeout = setTimeout(sendActionStage, length, skill, info, stage + 1, speed, movement, distanceMult)
				return
			}
		}
		else {
			length = info.length / speed
			movement = info.movement
		}

		delayNextEnd = Date.now() + length + SKILL_RETRY_MS
		stageTimeout = setTimeout(sendActionEnd, length, 0, movement, distanceMult)
	}

	function sendActionEnd(type, distance, distanceMult) {
		clearTimeout(stageTimeout)

		if(!currentAction) return

		if(DEBUG) console.log('<* sActionEnd %s %d %d\xb0 %du', skillId(currentAction.skill), type || 0, currentLocation.w, distance || 0)

		movePlayer(distance * distanceMult)

		dispatch.toClient('sActionEnd', {
			source: cid,
			x: currentLocation.x,
			y: currentLocation.y,
			z: currentLocation.z,
			w: currentLocation.w,
			model,
			skill: currentAction.skill,
			type: type || 0,
			id: currentAction.id
		})

		if(currentAction.id != actionNumber) lastEmulatedEnd = currentAction.id

		actionNumber++
		currentAction = null
	}

	function updateLocation(event, inAction, special) {
		event = event || currentAction

		currentLocation = special ? {
			x: event.x1,
			y: event.y1,
			z: event.z1,
			w: event.w || currentLocation.w, // Should be a skill flag maybe?
			inAction
		} : {
			x: event.x,
			y: event.y,
			z: event.z,
			w: event.w,
			inAction
		}
	}

	// The real server uses loaded maps and a physics engine for skill movement, which would be costly to simulate
	// However the client avoids teleporting the player if the sent position is close enough, so we can simply approximate it instead
	function movePlayer(distance) {
		if(distance && !currentLocation.inAction) {
			let r = (currentLocation.w / 0x8000) * Math.PI

			currentLocation.x += Math.cos(r) * distance
			currentLocation.y += Math.sin(r) * distance
		}
	}

	function skillId(id, local) {
		if(!local) id -= 0x4000000

		return [Math.floor(id / 10000), Math.floor(id / 100) % 100, id % 100].join('-')
	}

	function skillInfo(id, local) {
		if(!local) id -= 0x4000000

		if(skillsCache[id] !== undefined) return skillsCache[id]

		let group = Math.floor(id / 10000),
			sub = id % 100,
			info = [get(skills, job, '*'), get(skills, job, group, '*'), get(skills, job, group, sub)]

		if(info[info.length - 1]) return skillsCache[id] = Object.assign({}, ...info)

		return skillsCache[id] = null
	}

	function get(obj, ...keys) {
		if(obj === undefined) return

		for(let key of keys)
			if((obj = obj[key]) === undefined)
				return

		return obj
	}
}