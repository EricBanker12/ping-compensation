const CHECK_COMPATABILITY = true

let error = false

if(CHECK_COMPATABILITY)
	for(let mod of ['cooldowns', 'lockons', 'lockons-master', 'fastfire', 'fast-fire', 'fast-fire-master', 'fast-block'])
		try {
			require(mod)
			console.error('ERROR: Skill Prediction is not compatible with the mod "' + mod + '", please remove it and try again.')
			console.error('To disable compatability checking, edit index.js and set CHECK_COMPATABILITY to false')
			error = true
			break
		}
		catch(e) {}

const MODS = [
	require('./skills'),
	require('./cooldowns')
]

module.exports = function SkillPredictionCore(dispatch) {
	if(!error) for(let mod of MODS) mod(dispatch)
}