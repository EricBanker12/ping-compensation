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
		debug: { 
			$default() { message(`Debug ${debug.toggle() ? 'enabled' : 'disabled'}.`) },
			$loc() { message(`Location debug ${(mod.settings.debug.loc = !mod.settings.debug.loc) ? 'enabled' : 'disabled'}.`) },
			$glyphs() { message(`Glyph debug ${(mod.settings.debug.glyphs = !mod.settings.debug.glyphs) ? 'enabled' : 'disabled'}.`) },
			$abnormals() { message(`Abnormal debug ${(mod.settings.debug.abnormals = !mod.settings.debug.abnormals) ? 'enabled' : 'disabled'}.`) }
		}
	})

	command.add('ping', printPing)

	function printHelp() {
		message(`Commands:
<FONT COLOR="#FFFFFF">ping</FONT> = Display ping statistics.
<FONT COLOR="#FFFFFF">debug</FONT> = Toggle debug mode.`)
	}

	function printPing() {
		command.message(`Ping: ${ping.history.length ? `Avg=${Math.round(ping.avg)} Min=${ping.min} Max=${ping.max} Jitter=${ping.max - ping.min} Samples=${ping.history.length}` : '???'}`)
	}

	function message(msg) {
		command.message(`[Skill Prediction] ${msg}`)
	}
}