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
			stamina: 0
		})

		mod.hook('S_LOGIN', 10, HOOK_LAST, event => {
			Object.assign(this, {
				gameId: event.gameId,
				templateId: event.templateId,
				race: Math.floor(event.templateId / 100) % 100 - 1,
				job: event.templateId % 100 - 1
			})
		})

		mod.hook('S_PLAYER_STAT_UPDATE', 9, HOOK_LAST, event => {
			Object.assign(this, {
				// Newer classes use a different speed algorithm
				attackSpeed: (event.attackSpeed + event.attackSpeedBonus) / (this.job >= 8 ? 100 : event.attackSpeed),
				stamina: event.stamina
			})
		})

		mod.hook('S_PLAYER_CHANGE_STAMINA', 1, HOOK_LAST, event => { this.stamina = event.current })
	}
}

module.exports = SPPlayer