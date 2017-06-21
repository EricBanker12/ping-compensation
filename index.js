const CHECK_COMPATABILITY = true

if(CHECK_COMPATABILITY)
	for(let mod of ['cooldowns', 'fastfire', 'fast-fire', 'fast-fire-master', 'fast-block'])
		try {
			require(mod)
			console.error('Error: Skill Prediction is not compatible with the mod "' + mod + '"')
			console.error('To disable compatability checking, edit index.js and set CHECK_COMPATABILITY to false')
			module.exports = () => {}
			return
		}
		catch(e) {}

const MODS = [
	require('./skills'),
	require('./cooldowns')
]

module.exports = function SkillPredictionCore(dispatch) {
	for(let mod of MODS) mod(dispatch)
}