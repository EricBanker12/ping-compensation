const Ping = require('./ping');
const utils = require('./utils');
const preset = require('../config/preset');
const skills = require('../config/data/skills.js');
class AbnormalityPrediction {
	constructor(dispatch) {
		this.dispatch = dispatch;
		this.DEBUG = false;
		this.ping = Ping(dispatch);
		this.enabled = false;
		this.gameId = null;
		this.myAbnormals = {};
		let abnormals = require('../config/data/abnormalities');

		//------start of nightmare-------
		//blocked abnormies parser... don't ask me wdf is going on here 
		let found = [];
		for (let id of Object.keys(skills)) {
			let classObject = skills[id];

			let supportedSkills = Object.keys(classObject);
			for (let skillId of supportedSkills) {
				if (!preset[id]["enabled"]) continue;
				if (preset[id][skillId]) {
					found.push(utils.getDataFromObjectByField(classObject[skillId], "triggerAbnormal"));
				}
			}
		}
		Object.assign(abnormals, utils.getFlatArray(found).reduce((map, value) => {
			map[value] = true;
			return map
		}, {}));

		//GC our hero! Maybe...
		found = null;
		//------the end of nightmare-------

		dispatch.hook('S_LOGIN', 10, event => {
			this.gameId = event.gameId;
		});

		dispatch.hook('S_RETURN_TO_LOBBY', 1, () => {
			this.removeAll();
		});

		dispatch.hook('S_CREATURE_LIFE', 2, event => {
			if (event.gameId.equals(this.gameId) && !event.alive) this.removeAll();
		});

		let abnormalityUpdate = (type, event) => {
			if (event.target.equals(this.gameId)) {
				if (this.DEBUG) utils.writeDebugMessage('<-', type, event.id, event.duration, event.stacks, abnormals[event.id] == true ? 'X' : '');

				let info = abnormals[event.id];
				if (info && this.enabled) {
					if (info == true) return false;

					if (info.overrides && this.exists(info.overrides)) this.remove(info.overrides)
				}

				if (event.duration != 0x7fffffff) event.duration = Math.max(event.duration - this.ping.min, 0);

				if (type === 'S_ABNORMALITY_BEGIN' === this.exists(event.id)) { // Transform packet type so it will always be valid
					this.add(event.id, event.duration, event.stacks);
					return false
				}

				this._add(event.id, event.duration);
				return true
			}
		};

		dispatch.hook('S_ABNORMALITY_BEGIN', 2, abnormalityUpdate.bind(null, 'S_ABNORMALITY_BEGIN'));
		dispatch.hook('S_ABNORMALITY_REFRESH', 1, abnormalityUpdate.bind(null, 'S_ABNORMALITY_REFRESH'));

		dispatch.hook('S_ABNORMALITY_END', 1, event => {
			if (event.target.equals(this.gameId)) {
				if (this.DEBUG) utils.writeDebugMessage('<- S_ABNORMALITY_END', event.id, abnormals[event.id] == true ? 'X' : '');

				if (abnormals[event.id] == true && this.enabled) return false;

				if (!this.myAbnormals[event.id]) return false;

				this._remove(event.id)
			}
		})
	}

	exists(id) {
		return !!this.myAbnormals[id]
	}

	inMap(map) {
		for (let id in this.myAbnormals)
			if (map[id]) return true;
		return false
	}

	add(id, duration, stacks, delay = 0) {
		// bandaid fix for race condition (fk you, timers)
		if (this.myAbnormals[id] && this.myAbnormals[id].status === "removePending") {
			clearTimeout(this.myAbnormals[id].removeTimer);
			this._remove(id);
		}

		let type = this.myAbnormals[id] ? 'S_ABNORMALITY_REFRESH' : 'S_ABNORMALITY_BEGIN',
			version = this.myAbnormals[id] ? 1 : 2;

		setTimeout(() => {
			if (this.DEBUG) utils.writeDebugMessage('<*', type, id, duration, stacks);

			this.dispatch.toClient(type, version, {
				target: this.gameId,
				source: this.gameId,
				id,
				duration,
				unk: 0,
				stacks,
				unk2: 0
			});

			this._add(id, duration)
		}, delay);
	}

	remove(id, delay = 0) {
		if (!this.exists(id)) return;
		this.myAbnormals[id].status = "removePending"; //status pendingRemote
		this.myAbnormals[id].removeTimer = setTimeout(() => {
			if (this.DEBUG) utils.writeDebugMessage('<* S_ABNORMALITY_END', id);
			this.dispatch.toClient('S_ABNORMALITY_END', 1, {
				target: this.gameId,
				id
			});
			this._remove(id);

		}, delay);
	}

	removeAll() {
		for (let id in this.myAbnormals) {
			clearTimeout(this.myAbnormals[id].removeTimer);
			this.remove(id)
		}
	}

	_add(id, duration) {
		if (!this.myAbnormals[id]) this.myAbnormals[id] = {};
		clearTimeout(this.myAbnormals[id].endTimer);

		this.myAbnormals[id].removeTimer = false;
		this.myAbnormals[id].status = "normal";

		this.myAbnormals[id].endTimer = duration >= 0x7fffffff ? true : setTimeout(() => {
			this.remove(id)
		}, duration)
	}

	_remove(id) {
		if (this.myAbnormals[id]) {
			clearTimeout(this.myAbnormals[id].endTimer);
			delete this.myAbnormals[id];
		}
	}
}

let map = new WeakMap();

module.exports = function Require(dispatch) {
	if (map.has(dispatch.base)) return map.get(dispatch.base);

	let abn = new AbnormalityPrediction(dispatch);
	map.set(dispatch.base, abn);
	return abn
};