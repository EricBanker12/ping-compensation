'use strict'

const mod = require('./require'),
	settings = require('../settings')

class SPPing {
	constructor(dispatch) {
		this.min = this.max = this.avg = 0
		this.history = []

		const command = mod(dispatch, 'command')

		let timeout = null,
			waiting = false,
			lastSent = 0,
			debounce = false

		const ping = () => {
			clearTimeout(timeout)
			dispatch.toServer('C_REQUEST_GAMESTAT_PING', 1)
			waiting = true
			lastSent = Date.now()
			timeout = setTimeout(ping, settings.PING_TIMEOUT)
		}

		dispatch.hook('S_SPAWN_ME', 'raw', () => {
			clearTimeout(timeout)
			timeout = setTimeout(ping, settings.PING_INTERVAL)
		})

		dispatch.hook('S_LOAD_TOPO', 'raw', () => { clearTimeout(timeout) })
		dispatch.hook('S_RETURN_TO_LOBBY', 'raw', () => { clearTimeout(timeout) })

		// Disable inaccurate ingame ping so we have exclusive use of ping packets
		dispatch.hook('C_REQUEST_GAMESTAT_PING', 'raw', () => {
			dispatch.toClient('S_RESPONSE_GAMESTAT_PONG', 1)

			if(!debounce && (debounce = true)) command.exec('sp ping') // Display accurate ping statistics in chat

			return false
		})

		dispatch.hook('S_RESPONSE_GAMESTAT_PONG', 'raw', () => {
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