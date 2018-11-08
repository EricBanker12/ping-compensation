const AutoConfig = require("./autoconfig");
const Ping = require("./ping");
const state = require("./state");

class Cmds {
	constructor(dispatch) {
		const autoconf = AutoConfig(dispatch);
		const ping = Ping(dispatch);

		//Commands
		dispatch.command.add("sp", {
			info() {
				dispatch.command.message("Unofficial Public SP. Date:29/10/18");
				//dispatch.command.message(`Class=${me.job}, race=${me.race}`);
				dispatch.command.message(`Config: timeout: ${state.config.serverTimeout}, retries: ${state.config.skillRetryCount}, jitter comp: ${state.config.jitterCompensation}, RetryMs: ${state.config.skillRetryMs}`);
			},
			config: {
				generate() {
					if (ping.history.length === state.config.pingHistoryMax) {
						dispatch.command.message("Gathering information ... Please wait ...");
						let returnedConfig = autoconf.Analyze(Object.assign({}, state.config), ping.min, ping.avg, ping.max);
						if (!returnedConfig) {
							dispatch.command.message("Try to repeat this command after 2-3min.");
							return;
						}
						dispatch.command.message("The configuration in memory has been overwritten.");
						state.config = returnedConfig;
						dispatch.command.message("You can test changes and use command /8 sp config save for saving the configuration just created.");
					} else {
						dispatch.command.message("Not enough measurements for ping. Try to repeat command a bit later.");
					}
				},
				help() {
					dispatch.command.message("All info in /docs folder :)");
				},
				print() {
					dispatch.command.message("Current config:");
					for (let [key, value] of Object.entries(state.config))
						dispatch.command.message(`${key}:${value}`);
				},
				reset() {
					state.ResetConfig();
					dispatch.command.message("Default configuration file loaded.");
					dispatch.command.message("You can test changes and use command /8 sp config save for saving the changes.");
				},
				save() {
					state.SaveConfig();
					dispatch.command.message("Configuration file saved.");
				},
				reload() {
					state.ReloadConfig();
					dispatch.command.message("Configuration file reloaded.");
				},
			},
			debug() {
				if (state.config.debug)
					dispatch.command.message("Main Debug mode deactivated.");
				else
					dispatch.command.message("Main Debug mode activated.");

				state.config.debug = !state.config.debug;
			},
			debugloc() {
				if (state.config.debugLoc)
					dispatch.command.message("Location debug mode deactivated.");
				else
					dispatch.command.message("Location debug mode activated.");

				state.config.debugLoc = !state.config.debugLoc;
			},
			debugabnorm() {
				if (state.config.debugAbnormals)
					dispatch.command.message("Abnormals debug mode deactivated.");
				else
					dispatch.command.message("Abnormals debug mode activated.");

				state.config.debugAbnormals = !state.config.debugAbnormals;
			},
			strictdef() {
				if (state.config.defendSuccessStrict)
					dispatch.command.message("DEFEND_SUCCESS_STRICT deactivated.");
				else
					dispatch.command.message("DEFEND_SUCCESS_STRICT activated.");

				state.config.defendSuccessStrict = !state.config.defendSuccessStrict;
			},
			off() {
				if (state.config.enabled) {
					dispatch.command.message("Skill emulation Disabled.");
					state.SwitchEnableStateWithEvent();
				} else {
					dispatch.command.message("Skill emulation already Disabled.");
				}
			},
			on() {
				if (!state.config.enabled) {
					state.SwitchEnableStateWithEvent();
					dispatch.command.message("Skill emulation Enabled.");
				} else {
					dispatch.command.message("Skill emulation already Enabled");
				}
			},
			jittercomp() {
				if (state.config.jitterCompensation) {
					dispatch.command.message("jitterCompensation Disabled.");
				} else {
					dispatch.command.message("jitterCompensation Enabled");
				}
				state.config.jitterCompensation = !state.config.jitterCompensation;
			},
			ping: {
				log() {
					dispatch.command.message("Ping history:");
					for (let entry of ping.history)
						dispatch.command.message(`${entry}`);
				},
				$default() {
					dispatch.command.message(`Ping: Min=${ping.min} Avg=${Math.floor(ping.avg)} Max=${ping.max} Variance=${ping.max - ping.min} Samples=${ping.history.length}`);
				},
			},
			$default() {
				dispatch.command.message("Invalid command.");
			},
		}, this);
	}
}
let map = new WeakMap();

module.exports = function Require(dispatch) {
	if (map.has(dispatch.base)) return map.get(dispatch.base);

	let cmd = new Cmds(dispatch);
	map.set(dispatch.base, cmd);
	return cmd;
};
