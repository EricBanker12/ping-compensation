const config = require('../config/config.json');

/**
 * @description Ping method from Pinkie -https://github.com/pinkipi/skill-prediction 
 * @class ActivePing
 */
class ActivePing {
	constructor(dispatch) {
		this.min = this.max = this.avg = 0;
		this.history = [];
		this.pingInterval = 6000;
		this.pingTimeout = 30000;
		this.pingLimitMin = config.pingSpikesMin;
		this.pingLimitMax = config.pingSpikesMax;
		this.pingLimit = config.pingSpikesLimit;
		this.pingHistoryMax = config.pingHistoryMax;

		let timeout = null,
			waiting = false,
			lastSent = 0;

		let ping = () => {
			clearTimeout(timeout)
			dispatch.toServer('C_REQUEST_GAMESTAT_PING', 1);
			waiting = true;
			lastSent = Date.now();
			timeout = setTimeout(ping, this.pingTimeout);
		}

		dispatch.hook('S_SPAWN_ME', 'raw', () => {
			clearTimeout(timeout);
			timeout = setTimeout(ping, this.pingInterval);
		})

		dispatch.hook('S_LOAD_TOPO', 'raw', () => { clearTimeout(timeout); })
		dispatch.hook('S_RETURN_TO_LOBBY', 'raw', () => { clearTimeout(timeout); })

		//min ping from sp + your fps tax 
		dispatch.hook('C_REQUEST_GAMESTAT_PING', 'raw', () => {
			setTimeout(() => {
				dispatch.toClient('S_RESPONSE_GAMESTAT_PONG', 1)
			}, this.min);
			return false;
		});

		dispatch.hook('S_RESPONSE_GAMESTAT_PONG', 'raw', () => {
			let result = Date.now() - lastSent;

			clearTimeout(timeout);

			if (!waiting) this.history.pop(); // Oops! We need to recalculate the last value

			//If spike protection enabled - wrong value will be skipped
			//WARNING! With wrong values for min/max ping your SP will be borked
			if (this.pingLimit && ((result <= this.pingLimitMin) || (result >= this.pingLimitMax))) {
				//Yes, its bad... ctrl+c-> ctrl+v (c) SaltyMonkey
				waiting = false;
				timeout = setTimeout(ping, this.pingInterval);
				return false;
			}
			else {
				this.history.push(result);

				if (this.history.length > this.pingHistoryMax) this.history.shift();

				// Recalculate statistics variables
				this.min = this.max = this.history[0];
				this.avg = 0;

				for (let p of this.history) {
					if (p < this.min) this.min = p;
					else if (p > this.max) this.max = p;

					this.avg += p;
				}

				this.avg /= this.history.length;

				waiting = false;
				timeout = setTimeout(ping, this.pingInterval - result);
				return false;
			}
		})
	}

	/**
	 * @description update current settings
	 * @param {Object} newConfig updated config
	 * @memberof ActivePing
	 */
	UpdateConfig(newConfig) {
		this.pingLimitMin = newConfig.pingSpikesMin;
		this.pingLimitMax = newConfig.pingSpikesMax;
		this.PingHistoryMax = newConfig.pingHistoryMax;
		this.pingLimit = newConfig.pingSpikesLimit;
	}
}

/**
 *	PoC by SaltyMonkey (not public)
 */
class ExternalPingBridge {
	constructor(dispatch) {
		this.EXTERNAL_PING_TIMEOUT = 2000;
		this.EXTERNAL_PROGRAM_NAME = '\\ConnectionStats.exe';
		this.spawnProcess = require('child_process').spawn;
		this.externalPingChecker = this.spawnProcess(__dirname + this.EXTERNAL_PROGRAM_NAME, [process.pid.toString(), this.EXTERNAL_PING_TIMEOUT.toString()]);
		this.min = this.max = 0;

		this.externalPingChecker.stdout.on('data', (data) => {
			if (data != null) {
				data = data.toString();
				var parsedData = data.split(',');
				this.max = Number(parsedData[0]);
				this.min = Number(parsedData[1]);
				if (config.debug) console.log(parsedData[0], parsedData[1]);
			}
		});
		this.externalPingChecker.on('close', (code, signal) => {
			console.log(`[Skill-Prediction] Child process terminated due to receipt of signal ${signal}`);
		});
		this.externalPingChecker.on('exit', (code, signal) => {
			console.log(`[Skill-Prediction] Child process closed due to receipt of signal ${signal}`);
		});
		this.destructor = () => {
			this.externalPingChecker.kill();
		};
	}
}

let map = new WeakMap();

module.exports = function Require(dispatch) {
	if (map.has(dispatch.base)) return map.get(dispatch.base);
	let ping = null;
	switch (String(config.pingMethod).trim().toLowerCase()) {
		case "active":
			ping = new ActivePing(dispatch);
			break;
		case "external":
			ping = new ExternalPingBridge(dispatch);
			break;
		default:
			ping = new ActivePing(dispatch);
			break;
	}

	map.set(dispatch.base, ping);
	return ping
};