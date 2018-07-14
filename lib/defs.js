
const defsVersions = require("../config/data/definitions");

class DefVersioner {
	
	//Placeholder... Fix soon tm
	static checkConsistency() {
		/*if(defsVersions.keys().length == 0) return 5;
		for(let key of defsVersions.)
			if(!defsVersions[key]) return 5;
		*/
		return 0;
	}

	//TODO: add not strict patch number check
	static getVersion(defName, dispatch) {
		return (defsVersions[defName][dispatch.base.majorPatchVersion]) ? defsVersions[defName][dispatch.base.majorPatchVersion] : defsVersions[defName]["default"];
	}
}

module.exports = DefVersioner;