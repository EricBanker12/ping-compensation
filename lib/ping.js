const PING_INTERVAL = 6000,
	PING_TIMEOUT = 30000,
	PING_HISTORY_MAX = 20,
	EXTERNAL_PING_TIMEOUT = 2000,
	USE_EXTERNAL_PING_CHECKER = false,
	EXTERNAL_PROGRAM_NAME = '\\ConnectionStats.exe',
	DEBUG = false;

class Ping {
	constructor(dispatch) {
		this.min = this.max = this.avg = 0
		this.history = []

		let timeout = null,
			waiting = false,
			lastSent = 0

		let ping = () => {
			clearTimeout(timeout)
			dispatch.toServer('C_REQUEST_GAMESTAT_PING', 1)
			waiting = true
			lastSent = Date.now()
			timeout = setTimeout(ping, PING_TIMEOUT)
		}

		dispatch.hook('S_SPAWN_ME', 'raw', () => {
			clearTimeout(timeout)
			timeout = setTimeout(ping, PING_INTERVAL)
		})

		dispatch.hook('S_LOAD_TOPO', 'raw', () => { clearTimeout(timeout) })
		dispatch.hook('S_RETURN_TO_LOBBY', 'raw', () => { clearTimeout(timeout) })

		// Disable inaccurate ingame ping so we have exclusive use of ping packets
		dispatch.hook('C_REQUEST_GAMESTAT_PING', 'raw', () => {
			dispatch.toClient('S_RESPONSE_GAMESTAT_PONG', 1)
			return false
		})

		dispatch.hook('S_RESPONSE_GAMESTAT_PONG', 'raw', () => {
			let result = Date.now() - lastSent

			clearTimeout(timeout)

			if (!waiting) this.history.pop() // Oops! We need to recalculate the last value

			this.history.push(result)

			if (this.history.length > PING_HISTORY_MAX) this.history.shift()

			// Recalculate statistics variables
			this.min = this.max = this.history[0]
			this.avg = 0

			for (let p of this.history) {
				if (p < this.min) this.min = p
				else if (p > this.max) this.max = p

				this.avg += p
			}

			this.avg /= this.history.length

			waiting = false
			timeout = setTimeout(ping, PING_INTERVAL - result)
			return false
		})
	}
}

class ExternalPingBridge {
	constructor(dispatch) {
		this.spawnProcess = require('child_process').spawn;
		this.externalPingChecker = this.spawnProcess(__dirname + EXTERNAL_PROGRAM_NAME, [process.pid.toString(), EXTERNAL_PING_TIMEOUT.toString()]);
		this.min = this.max = 0;

		this.externalPingChecker.stdout.on('data', (data) => {
			if (data != null) {
				data = data.toString();
				var parsedData = data.split(',');
				this.max = Number(parsedData[0]);
				this.min = Number(parsedData[1]);
				if (DEBUG) console.log(parsedData[0], parsedData[1])
			}
		});
		this.externalPingChecker.on('close', (code, signal) => {
			console.log(`[Skill-Prediction] Child process terminated due to receipt of signal ${signal}`);
		});
		this.externalPingChecker.on('exit', (code, signal) => {
			console.log(`[Skill-Prediction] Child process closed due to receipt of signal ${signal}`);
		});
	}
	destructor() {
		this.externalPingChecker.kill();
	}
}

let map = new WeakMap();

module.exports = function Require(dispatch) {
	if (map.has(dispatch.base)) return map.get(dispatch.base);
	let ping = null;
	if (USE_EXTERNAL_PING_CHECKER) {
		ping = new ExternalPingBridge(dispatch)
	}
	else
		ping = new Ping(dispatch);
	map.set(dispatch.base, ping);
	return ping
};