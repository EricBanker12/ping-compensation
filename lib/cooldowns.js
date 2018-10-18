'use strict'

const mod = require('./require')

class SPCooldowns {
	constructor(dispatch) {
		this.loaded = false
		this.dispatch = dispatch
		this.timeouts = new Map()
		this.hooks = []

		this.load()
	}

	load() {
		if(this.loaded) return

		const ping = mod(this.dispatch, './ping'),
			hook = (...args) => { this.hooks.push(this.dispatch.hook(...args)) },
			handle = event => {
				if(event.cooldown > 0) {
					event.cooldown = Math.max(0, event.cooldown - ping.min)
					this.set(event.skill, event.cooldown)
					return true
				}

				this.end(event.skill)
			}

		hook('S_START_COOLTIME_SKILL', this.dispatch.base.majorPatchVersion < 74 ? 2 : 3, handle)
		hook('S_DECREASE_COOLTIME_SKILL', this.dispatch.base.majorPatchVersion < 74 ? 2 : 3, handle)
		hook('S_LOAD_TOPO', 'raw', () => { this.reset() })

		this.loaded = true
	}

	check({id}) { return this.timeouts.has(id) }

	set({id}, time) {
		this.end(id)

		if(time > 0) this.timeouts.set(id, setTimeout(() => { this.end({id}) }, time))
	}

	end({id}) {
		clearTimeout(this.timeouts.get(id))
		this.timeouts.delete(id)
	}

	reset() {
		for(let id of this.timeouts.keys()) this.end(id)
	}

	unload() {
		if(!this.loaded) return

		reset()

		for(let hook of this.hooks) this.dispatch.unhook(hook)

		this.hooks = []
		this.loaded = false
	}
}

module.exports = SPCooldowns