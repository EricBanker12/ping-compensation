'use strict'

const subMod = require('./require')

module.exports = function SPCommands(mod) {
	const {command} = mod.require,
		ping = subMod(mod, './ping'),
		debug = subMod(mod, './debug')

	command.add('sp', {
		$default() { message(`Unknown command "${this}".`) },
		$none: printHelp,
		help: printHelp,
		ping: printPing,
		debug(type = '') {
			switch(type.toLowerCase()) {
				case 'loc': case 'location':
					message(`Location debug ${(mod.settings.debug.loc = !mod.settings.debug.loc) ? 'enabled' : 'disabled'}.`)
					debug.reload()
					break
				case 'abnormal': case 'abnormals': case 'abnormality': case 'abnormalities':
					message(`Abnormality debug ${(mod.settings.debug.abnormals = !mod.settings.debug.abnormals) ? 'enabled' : 'disabled'}.`)
					debug.reload()
					break
				default:
					message(`Skill debug ${(mod.settings.debug.skills = !mod.settings.debug.skills) ? 'enabled' : 'disabled'}.`)
					debug.reload()
					break
			}
		}
	})

	command.add('ping', printPing)

	function printHelp() {
		message(`Commands:
<FONT COLOR="#FFFFFF">ping</FONT> = Display ping statistics.
<FONT COLOR="#FFFFFF">debug [skill|loc|abnormal]</FONT> = Toggle debug modes.`)
	}

	function printPing() {
		command.message(`Ping: ${ping.history.length ? `Avg=${Math.round(ping.avg)} Min=${ping.min} Max=${ping.max} Jitter=${ping.max - ping.min} Samples=${ping.history.length}` : '???'}`)
	}

	function message(msg) { command.message(`[Skill Prediction] ${msg}`) }
}