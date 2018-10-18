'use strict'

const {SkillID} = require('tera-data-parser').types,
	subMod = require('./require'),
	settings = require('../settings')

function SPDebug(mod) {
	const player = subMod(mod, './player')

	let enabled = false,
		hooks = []

	function load() {
		for(let options of [
			['S_CREST_APPLY', 2, _ => [_.id, _.enable ? 'on' : 'off']],
			['S_CREST_MESSAGE', 2, _ => [_.unk, _.type, skillId(_.skill)]],

			['S_CANNOT_START_SKILL', 4, _ => skillId(_.skill.id)]
		])
			hookFirst(...options)

		for(let options of [
			['C_START_SKILL', 7, _ => [Number(_.unk), Number(_.moving), Number(_.continue), gameId(_.target)]],
			['C_PRESS_SKILL', 4, _ => _.press],
			['C_START_TARGETED_SKILL', 6, _ => `[${_.targets.map(t => `${gameId(t.id)} ${t.unk}`).join(',')}]`],
			['C_START_COMBO_INSTANT_SKILL', 4, _ => `[${_.targets.map(t => `${t.unk1} ${gameId(t.id)} ${t.unk2}`).join(',')}]`],
			['C_START_INSTANCE_SKILL', 5, _ => [_.unk, `[${_.targets.map(t => `${t.unk1} ${gameId(t.id)} ${t.unk2}`).join(',')}]`]],
			['C_START_INSTANCE_SKILL_EX', 5, _ => [_.unk, gameId(_.projectile)]],
			['C_NOTIMELINE_SKILL', 3],

			['S_GRANT_SKILL', 1],
			['C_CANCEL_SKILL', 1, _ => _.type]
		])
			hookFirst(options[0], options[1], (_, name) => [skillId(_.skill), ...(() => {
				const strs = (options[2] || (() => []))(_, name)
				return Array.isArray(strs) ? strs : [strs]
			})(), ...(() => {
				const strs = []

				if(settings.DEBUG_LOC) {
					switch(name) {
						case 'C_START_SKILL':
						case 'C_PRESS_SKILL':
						case 'C_START_TARGETED_SKILL':
						case 'C_START_COMBO_INSTANT_SKILL':
						case 'C_START_INSTANCE_SKILL':
						case 'C_START_INSTANCE_SKILL_EX':
							strs.push(`(${_.loc.roundN().toString()})`)
							break
					}

					switch(name) {
						case 'C_START_SKILL':
						case 'C_START_TARGETED_SKILL':
						case 'C_START_INSTANCE_SKILL_EX':
							strs.push(`> (${_.dest.roundN().toString()})`)
							break
					}

					switch(name) {
						case 'C_START_COMBO_INSTANT_SKILL':
						case 'C_START_INSTANCE_SKILL':
							strs.push(`> [${_.endpoints.map(p => `(${p.loc.roundN().toString()})`).join(', ')}]`)
							break
					}
				}

				return strs
			})()])
	}

	function unload() {
		if(hooks.length) {
			for(let h of hooks) mod.unhook(h)

			hooks = []
		}
	}

	function hookFirst(name, ver, cb) {
		hooks.push(mod.hook(name, ver, {order: -999}, event => {
			const out = cb(event, name)

			debug(`${event.$incoming ? '<-' : '->'} ${name} ${Array.isArray(out) ? out.join(' ') : out}`)
		}))
	}

	function hookMod(name, ver, cb) {
		hooks.push(mod.hook(name, ver, {order: 999, filter: {fake: null, silenced: null}}, event => {
			if(event.$fake && event.$silenced) return

			const out = cb(event, name),
				typeChar = event.$silenced ? 'X' : (event.$fake ? '*' : '-')

			debug(`${event.$incoming ? '<' + typeChar : typeChar + '>'} ${name} ${Array.isArray(out) ? out.join(' ') : out}`)
		}))
	}

	return {
		toggle() {
			(enabled = !enabled) ? load() : unload()

			if(enabled) debug(`SP debug enabled. Race=${player.race} Class=${player.job}`)

			return enabled
		}
	}
}

// Utilities

function debug() {
	console.log(`[${(Date.now() % 10000).toString().padStart(4, '0')}]`, ...arguments)
}

function degrees(w) { return Math.round(w / Math.PI * 180) + '\xb0' }

function decimal(n, p) {
	p = 10 ** p
	return Math.round(n * p)  / p
}

function gameId(id) {
	if(id === 0n) return '@'

	return '@' + id.toString(16).toUpperCase().padStart(16, '0')
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

module.exports = SPDebug