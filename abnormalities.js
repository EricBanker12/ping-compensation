const DEBUG = false

const handled = require('./config/abnormalities')

class AbnormalityPrediction {
	constructor(dispatch) {
		this.dispatch = dispatch

		this.cid =
		this.myAbnormals =
		null

		dispatch.hook('sLogin', event => {
			this.cid = event.cid
			this.myAbnormals = {}
		})

		let abnormalityUpdate = event => {
			if(event.target.equals(this.cid)) {
				if(DEBUG) console.log('<- Abnormality', event.id, event.duration, event.stacks)

				if(handled[event.id]) return false

				this.myAbnormals[event.id] = event.duration == 0x7fffffff ? Infinity : Date.now() + event.duration
			}
		}

		dispatch.hook('sAbnormalityBegin', abnormalityUpdate)
		dispatch.hook('sAbnormalityRefresh', abnormalityUpdate)

		dispatch.hook('sAbnormalityEnd', event => {

			if(event.target.equals(this.cid)) {
				if(DEBUG) console.log('<- AbnormalityEnd', event.id)

				if(handled[event.id]) return false

				delete this.myAbnormals[event.id]
			}
		})
	}

	exists(id) {
		return this.myAbnormals[id] > Date.now()
	}

	add(id, duration, stacks) {
		if(DEBUG) console.log('<* Abnormality', id, duration, stacks)

		this.dispatch.toClient(this.myAbnormals[id] ? 'sAbnormalityRefresh' : 'sAbnormalityBegin', {
			target: this.cid,
			source: this.cid,
			id,
			duration,
			unk: 0,
			stacks
		})

		this.myAbnormals[id] = Date.now() + duration
	}

	remove(id) {
		if(DEBUG) console.log('<* AbnormalityEnd', id)

		this.dispatch.toClient('sAbnormalityEnd', {
			target: this.cid,
			id
		})

		delete this.myAbnormals[id]
	}
}

module.exports = AbnormalityPrediction