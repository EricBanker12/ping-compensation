'use strict'

const HOOK_LAST = {order: 100, filter: {fake: null}}

class SPPlayer {
	constructor(mod) {
		Object.assign(this, {
			gameId: null,
			templateId: -1,
			race: -1,
			job: -1,

			// Stats
			attackSpeed: 1,
			stamina: 0,

			// Crests
			crests: new Set(),

			// EP
			epPerks: new Set()
		})

		mod.hook('S_LOGIN', 10, HOOK_LAST, event => {
			Object.assign(this, {
				gameId: event.gameId,
				templateId: event.templateId,
				race: Math.floor(event.templateId / 100) % 100 - 1,
				job: event.templateId % 100 - 1
			})
		})

		// Stats
		mod.hook('S_PLAYER_STAT_UPDATE', 9, HOOK_LAST, event => {
			Object.assign(this, {
				// Newer classes use a different speed algorithm
				attackSpeed: (event.attackSpeed + event.attackSpeedBonus) / (this.job >= 8 ? 100 : event.attackSpeed),
				stamina: event.stamina
			})
		})

		mod.hook('S_PLAYER_CHANGE_STAMINA', 1, HOOK_LAST, event => { this.stamina = event.current })

		// Crests
		mod.hook('S_CREST_INFO', 2, event => {
			this.crests.clear()
			for(let c of event.crests) if(c.enable) this.crests.add(c.id)
		})

		mod.hook('S_CREST_APPLY', 2, event => { this.crests[event.enable ? 'add' : 'delete'](event.id) })

		// EP
		for(let packet of ['S_LOAD_EP_INFO', 'S_LEARN_EP_PERK'])
			mod.hook(packet, 1, HOOK_LAST, event => {
				this.epPerks.clear()
				for(let p of event.perks) this.epPerks.add(`${p.id},${p.level}`)
			})
	}
}

module.exports = SPPlayer