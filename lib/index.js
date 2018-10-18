'use strict'

const CHECK_COMPATABILITY = true

if(!require('tera-data-parser').types) {
	console.error('ERROR: Your version of tera-proxy is too old to run Skill Prediction')
	return module.exports = function () {}
}

if(CHECK_COMPATABILITY)
	for(let mod of ['cooldowns', 'lockons', 'lockons-master', 'lockons-light', 'lockons-light-master', 'fastfire', 'fast-fire', 'fast-fire-master', 'fast-block'])
		try {
			require(mod)
			console.error('ERROR: Skill Prediction is not compatible with the obsolete mod "' + mod + '", please remove it and try again.')
			return module.exports = function () {}
		}
		catch(e) {}

const mod = require('./require'),
	MODS = ['./core', './commands']

module.exports = function SkillPrediction(dispatch) { for(let name of MODS) mod(dispatch, name) }