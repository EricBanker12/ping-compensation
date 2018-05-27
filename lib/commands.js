const Command = require("command");
const AutoConfig = require("./autoconfig");
const Ping = require("./ping");
const state = require("./state");

class Cmds {
	constructor(dispatch) {
		const command = Command(dispatch);
		const autoconf = AutoConfig(dispatch);
		const ping = Ping(dispatch);

		//Commands
		command.add("sp", (option, value) => {
			switch (option) {
			case "info":
				command.message("Unofficial SP. Date:27/05/18");
				//command.message(`Class=${me.job}, race=${me.race}`);
				command.message(`Config: timeout: ${state.config.serverTimeout}, retries: ${state.config.skillRetryCount},jitter comp: ${state.config.jitterCompensation}, RetryMs: ${state.config.skillRetryMs}`);
				break;
			case "config":
				switch (value) {
				case "generate":
					if (ping.history.length === state.config.pingHistoryMax) {
						command.message("[Skill Prediction] Gathering information ... Please wait ...");
						let returnedConfig = autoconf.Analyze(Object.assign({}, state.config), ping.min, ping.avg, ping.max);
						if (!returnedConfig) {
							command.message("[Skill Prediction] Try to repeat this command after 2-3min.");
							break;
						}
						command.message("[Skill Prediction] The configuration in memory has been overwritten.");
						state.config = returnedConfig;
						command.message("[Skill Prediction] You can test changes and use command /8 sp config save for saving the configuration just created.");
					} else {
						command.message("[Skill Prediction] Not enough measurements for ping. Try to repeat command a bit later.");
					}
					break;
				case "help":
					command.message("[Skill Prediction] All info in /docs folder :)");
					break;
				case "print":
					command.message("[Skill Prediction] Current config:");
					for (let [key, value] of Object.entries(state.config))
						command.message(`${key}:${value}`);
					break;
				case "reset":
					state.ResetConfig();
					command.message("[Skill Prediction] Default configuration file loaded.");
					command.message("[Skill Prediction] You can test changes and use command /8 sp config save for saving the changes.");
					break;
				case "save":
					state.SaveConfig();
					command.message("[Skill Prediction] Configuration file saved.");
					break;
				case "reload":
					state.ReloadConfig();
					command.message("[Skill Prediction] Configuration file reloaded.");
					break;
				}
				break;
			case "debug":
				if (state.config.debug)
					command.message("[Skill Prediction] Main Debug mode deactivated.");
				else
					command.message("[Skill Prediction] Main Debug mode activated.");

				state.config.debug = !state.config.debug;
				break;
			case "debugloc":
				if (state.config.debugLoc)
					command.message("[Skill Prediction] Location debug mode deactivated.");
				else
					command.message("[Skill Prediction] Location debug mode activated.");

				state.config.debugLoc = !state.config.debugLoc;
				break;
			case "debugabnorm":
				if (state.config.debugAbnormals)
					command.message("[Skill Prediction] Abnormals debug mode deactivated.");
				else
					command.message("[Skill Prediction] Abnormals debug mode activated.");

				state.config.debugAbnormals = !state.config.debugAbnormals;
				break;
			case "strictdef":
				if (state.config.defendSuccessStrict)
					command.message("[Skill Prediction] DEFEND_SUCCESS_STRICT deactivated.");
				else
					command.message("[Skill Prediction] DEFEND_SUCCESS_STRICT activated.");

				state.config.defendSuccessStrict = !state.config.defendSuccessStrict;
				break;
			case "off":
				if (state.config.enabled) {
					command.message("[Skill Prediction] Skill emulation Disabled.");
					state.SwitchEnableStateWithEvent();
				} else {
					command.message("[Skill Prediction] Skill emulation already Disabled.");
				}
				break;
			case "on":
				if (!state.config.enabled) {
					state.SwitchEnableStateWithEvent();
					command.message("[Skill Prediction] Skill emulation Enabled.");
				} else {
					command.message("[Skill Prediction] Skill emulation already Enabled");
				}
				break;
			case "ping":
				switch (value) {
				case "log":
					command.message("[Skill Prediction] Ping history:");
					for (let entry of ping.history)
						command.message(`${entry}`);
					break;
				default:
					command.message(`Ping: Min=${ping.min} Avg=${Math.floor(ping.avg)} Max=${ping.max} Variance=${ping.max - ping.min} Samples=${ping.history.length}`);
					break;
				}
				break;
			default:
				command.message("[Skill Prediction] Invalid command.");
				break;
			}
		});
	}
}
let map = new WeakMap();

module.exports = function Require(dispatch) {
	if (map.has(dispatch.base)) return map.get(dispatch.base);

	let cmd = new Cmds(dispatch);
	map.set(dispatch.base, cmd);
	return cmd;
};