//------------------------------------
//by SaltyMonkey 
//Autoconfig
//Can try to configure SP with player's ping
//------------------------------------

class AutoConfigHelper {
	constructor() {

		this.pingDelta = 30;
		this.minPingSubstract = 10;
		this.maxPingAdd = 25;

		this.pingCorrectionMethods = {
			0: { serverTimeout: 80, jitterCompensation: false, skillRetryCount: 1, skillRetryMs: 20, skillDelayOnFail: false },
			1: { serverTimeout: 110, jitterCompensation: true, skillRetryCount: 1, skillRetryMs: 25, skillDelayOnFail: true },
			2: { serverTimeout: 160, jitterCompensation: true, skillRetryCount: 1, skillRetryMs: 25, skillDelayOnFail: true },
			3: { serverTimeout: 215, jitterCompensation: true, skillRetryCount: 1, skillRetryMs: 30, skillDelayOnFail: true },
			4: { serverTimeout: 325, jitterCompensation: true, skillRetryCount: 2, skillRetryMs: 30, skillDelayOnFail: true },
		}
	}

	Analyze(config, minimal, average, maximal) {
		let max = maximal;
		let avg = average;
		let min = minimal;
		let correctionMethod = 4;
		let spikeDetected = false;
		let configForEdit = config;
		let dynamicPart = {
			skillRetryJittercomp: 0,
			pingSpikesLimit: false,
			pingSpikesMin: 100,
			pingSpikesMax: 300
		};

		//values should be real
		if (!min || !avg || !max)
			return false

		//Hmm... Playing from server's room?
		if (min < 2 || avg < 2 || max < 2)
			return false

		//spike detection
		if (Math.floor(max) - Math.floor(avg) >= this.pingDelta) {
			spikeDetected = true;
		}

		//with spikes we will use average ping
		let maxPingValue = spikeDetected ? avg : max

		//set method
		if (maxPingValue <= 40)
			correctionMethod = 0;
		else if (maxPingValue <= 90)
			correctionMethod = 1;
		else if (maxPingValue <= 145)
			correctionMethod = 2;
		else if (maxPingValue <= 200)
			correctionMethod = 3;
		else if (maxPingValue >= 201)
			correctionMethod = 4;
		else
			return false;

		//enable spike control
		if (spikeDetected) {
			dynamicPart.pingSpikesMin = (min - this.minPingSubstract > 0) ? min - this.minPingSubstract : min;
			dynamicPart.pingSpikesMax = maxPingValue + this.maxPingAdd;
		}

		//calculate jitter (tbh its not correct )
		dynamicPart.skillRetryJittercomp = maxPingValue - min;

		//combine objects
		Object.assign(dynamicPart, this.pingCorrectionMethods[correctionMethod]);
		Object.assign(configForEdit, dynamicPart);
		return configForEdit;
	}

}

let map = new WeakMap();

module.exports = function Require(dispatch) {
	if (map.has(dispatch.base)) return map.get(dispatch.base);

	let autoconfig = new AutoConfigHelper();
	map.set(dispatch.base, autoconfig);
	return autoconfig
};
