'use strict'

const settings = require('../settings')

class SPPing {
	constructor(mod) {
		this.min = this.max = this.avg = 0
		this.history = []

		const {command} = mod.require

		let timeout = null,
			waiting = false,
			lastSent = 0,
			debounce = false

		const ping = () => {
			clearTimeout(timeout)
			mod.send('C_REQUEST_GAMESTAT_PING', 1)
			waiting = true
			lastSent = Date.now()
			timeout = setTimeout(ping, settings.PING_TIMEOUT)
		}

		mod.hook('S_SPAWN_ME', 'raw', () => {
			clearTimeout(timeout)
			timeout = setTimeout(ping, settings.PING_INTERVAL)
		})

		mod.hook('S_LOAD_TOPO', 'raw', () => { clearTimeout(timeout) })
		mod.hook('S_RETURN_TO_LOBBY', 'raw', () => { clearTimeout(timeout) })

		// Disable inaccurate ingame ping so we have exclusive use of ping packets
		mod.hook('C_REQUEST_GAMESTAT_PING', 'raw', () => {
			mod.send('S_RESPONSE_GAMESTAT_PONG', 1)

			if(!debounce && (debounce = true)) command.exec('sp ping') // Display accurate ping statistics in chat

			return false
		})

		mod.hook('S_RESPONSE_GAMESTAT_PONG', 'raw', () => {
			const result = Date.now() - lastSent

			clearTimeout(timeout)
			debounce = false

			if(!waiting) this.history.pop() // Oops! We need to recalculate the last value

			this.history.push(result)

			if(this.history.length > settings.PING_HISTORY_MAX) this.history.shift()

			// Recalculate statistics variables
			this.min = this.max = this.history[0]
			this.avg = 0

			for(let p of this.history) {
				if(p < this.min) this.min = p
				else if(p > this.max) this.max = p

				this.avg += p
			}

			this.avg /= this.history.length

			waiting = false
			timeout = setTimeout(ping, settings.PING_INTERVAL - result)
			return false
		})
	}
}

module.exports = SPPing