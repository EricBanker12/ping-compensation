const DEBUG = false

const handled = require('./config/abnormalities')

class AbnormalityPrediction {
	constructor(dispatch) {
		this.dispatch = dispatch

		this.cid =
		this.myAbnormals =
		null

		dispatch.hook('S_LOGIN', 1, event => {
			this.cid = event.cid
			this.myAbnormals = {}
		})

		let abnormalityUpdate = (type, event) => {
			if(event.target.equals(this.cid)) {
				if(DEBUG) console.log('<-', type, event.id, event.duration, event.stacks, handled[event.id] ? 'X' : '')

				if(handled[event.id]) return false

				this.myAbnormals[event.id] = event.duration == 0x7fffffff ? Infinity : Date.now() + event.duration
			}
		}

		dispatch.hook('S_ABNORMALITY_BEGIN', 1, abnormalityUpdate.bind(null, 'S_ABNORMALITY_BEGIN'))
		dispatch.hook('S_ABNORMALITY_REFRESH', 1, abnormalityUpdate.bind(null, 'S_ABNORMALITY_REFRESH'))

		dispatch.hook('S_ABNORMALITY_END', 1, event => {
			if(event.target.equals(this.cid)) {
				if(DEBUG) console.log('<- S_ABNORMALITY_END', event.id, handled[event.id] ? 'X' : '')

				if(handled[event.id]) return false

				delete this.myAbnormals[event.id]
			}
		})
	}

	exists(id) {
		return this.myAbnormals[id] > Date.now()
	}

	add(id, duration, stacks) {
		let type = this.myAbnormals[id] ? 'S_ABNORMALITY_REFRESH' : 'S_ABNORMALITY_BEGIN'

		if(DEBUG) console.log('<*', type, id, duration, stacks)

		this.dispatch.toClient(type, 1, {
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
		if(DEBUG) console.log('<* S_ABNORMALITY_END', id)

		this.dispatch.toClient('S_ABNORMALITY_END', 1, {
			target: this.cid,
			id
		})

		delete this.myAbnormals[id]
	}
}

module.exports = AbnormalityPrediction