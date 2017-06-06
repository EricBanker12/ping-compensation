const Ping = require('./ping')

module.exports = function Cooldowns(dispatch) {
	const ping = Ping(dispatch)

	dispatch.hook('S_START_COOLTIME_SKILL', 1, cooldown)
	dispatch.hook('S_START_COOLTIME_ITEM', 1, cooldown)

	function cooldown(event) {
		if(event.cooldown > 0) {
			event.cooldown -= ping.min
			return event.cooldown > 0
		}
	}
}
