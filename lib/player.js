'use strict'

const NOCTAN = new Set([1206, 1210, 1230, 1300, 1301, 1302, 1303, 81212, 201225]),
	HOOK_LAST = {order: 100, filter: {fake: null}}

class SPPlayer {
	constructor(mod) {
		Object.assign(this, {
			gameId: -1n,
			templateId: -1,
			race: -1,
			job: -1,

			// Stats
			attackSpeed: 1,
			stamina: 0,

			// Crests
			crests: new Set(),

			// EP
			epPerks: new Set(),

			// Equipment / Inventory
			hasWeapon: false,
			itemPassives: [],
			hasNocTan: false
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

		// Equipment / Inventory
		{
			let items = null
			mod.hook('S_INVEN', 16, event => {
				items = event.first ? event.items : items.concat(event.items)

				if(!event.more) {
					inventoryUpdate.call(this, items)
					items = null
				}
			})
		}

		function inventoryUpdate(items) {
			this.hasWeapon = items.some(i => i.slot === 1)

			this.itemPassives = []
			this.hasNocTan = false
			for(let item of items)
				if(item.slot < 40) // Equipment
					for(let {id: passive} of item.passivitySets.find(s => s.index === item.passivitySet).passivities)
						if(passive) this.itemPassives.push(passive)
				else if(NOCTAN.has(item.id)) this.hasNocTan = true

		}
	}
}

module.exports = SPPlayer