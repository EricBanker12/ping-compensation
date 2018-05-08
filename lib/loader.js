//------------------------------------
//by SaltyMonkey 
//Reworked loader for skill prediction
//In theory a bit slower with bunch of modules than old loader
//but can detect copypasted SP instances
//------------------------------------

const {
	lstatSync,
	readdirSync,
	existsSync
} = require('fs');
const path = require('path');
const utils = require("./utils");
const sysmsg = require('tera-data-parser').sysmsg,
	childModules = [
		require('./core')
	];

/**
 * @description Check path for directory
 * @param {string} source  full path
 * @returns {boolean} true - directory, false - nope
 */
let isDirectory = source => lstatSync(source).isDirectory();

/**
 * @description Check "string" (with short name	for directory) for active proxy module
 * @param {string} source short name
 * @returns {boolean}
 */
let isActiveModule = source => !["_", "."].includes(source[0]);

/**
 * @description Grab short name from full path and translate it to lower case
 * @param {string} source full path
 * @returns {boolean} short name
 */
let getShortDirName = source => (source.slice(source.lastIndexOf(path.sep) + 1, source.length)).toLowerCase();

/**
 * @description Return short names for all active modules from folder with modules
 * @param {string} source 
 * @returns {boolean} short names
 */
const getModules = source =>
	(readdirSync(source).map(name => path.join(source, name))
		.filter(isDirectory))
	.map(elem => getShortDirName(elem))
	.filter(isActiveModule);

//------------------------------------------------------------------------
let blockedModules = ['cooldowns', 'lockons', 'lockons-master', 'fastfire', 'fast-fire', 'fast-fire-master', 'fast-block',
	'skill-prediction', 'skill-prediction-master', 'skill-prediction-exp', 'skill-prediction-experimental',
	'sp', 'cooldowns-master', 'fast-block-master', 'skillprediction', 'pinkie-sp', 'sp-pinkie', 'best', 'bestsp'
];

let errorState = false;
let installedModules = null;

let currentDir = getShortDirName(utils.getFullPath("../"));
let updatePath = utils.getFullPath("../migration/steps.json");
let originalConfigPath = utils.getFullPath("../config/config.json");
let defaultConfigFilePath = utils.getFullPath("../config/data/default-config.json");
let autoUpdateMarkerPath = utils.getFullPath("../module.json");
//------------------------------------------------------------------------

//all installed modules except current dir
installedModules = (getModules(path.resolve(__dirname, '../../'))).filter(element => element !== currentDir);

//check for blocked modules
for (item of installedModules) {
	for (blk of blockedModules) {
		if (item === blk) {
			utils.writeErrorMessage(`Blocked module ${item} installed.`);
			errorState = true
		}
	}
}

//check for "command"
if (!installedModules.includes('command') && !installedModules.includes('command-master')) {
	utils.writeErrorMessage(`[${currentDir}] ERROR! Missing module \'Command\'. Close tera-proxy and install it.`);
	errorState = true
}

if (!existsSync(originalConfigPath)) {
	utils.writeWarningMessage("Your config file broken. Fixing...");
	utils.saveJson(updateFile, utils.loadJson(defaultConfigFilePath));
	utils.writeWarningMessage("Config file restored with default values.");
}

let updateFile = utils.loadJson(updatePath);
let originalConfig = utils.loadJson(originalConfigPath);

//run update/cleanup
if (updateFile && originalConfig && originalConfig.version != updateFile["version"]) {
	let diff = utils.compareFieldsInObjects(originalConfig, updateFile["config"]);
	if (diff != null) {
		utils.writeLogMessage("Updating config...");
		let obj = Object.assign(originalConfig, diff);
		obj["version"] = updateFile.version;
		utils.saveJson(obj, originalConfigPath);
		utils.writeLogMessage("Done!");
	}
	if (updateFile["remove"]) {
		utils.writeLogMessage("Cleanup task...");
		let cleanupObj = updateFile["remove"];
		console.log("Removing these outdated files...");
		console.log(cleanupObj);
		if (Array.isArray(cleanupObj)) {
			cleanupObj.forEach((item) => utils.removeByPath(utils.getFullPath(item)))
		} else
			utils.removeByPath(utils.getFullPath(cleanupObj));
		utils.writeLogMessage("Done!");
	}
}

//Main entry point
module.exports = function SkillPredictionCore(dispatch) {
	if (errorState) {
		utils.writeErrorMessage(`[${currentDir}] Start cancelled!`);
		return
	}

	if (dispatch.base.proxyAuthor == "caali") {
		if (!existsSync(autoUpdateMarkerPath))
		{
			utils.writeWarningMessage("Caali's proxy detected and autoupdate for module disabled!");
			utils.writeLogMessage("Some your friend or you disabled it or your sp can be not original/installation broken.");
			utils.writeLogMessage("I do not give any guarantees and do not accept claims if you have any problems with not updated module! (c) SaltyMonkey");
		}
	}
	else {
		utils.writeWarningMessage("You trying to use SP fork with PinkiePie or diff tera-proxy.");
		utils.writeLogMessage("You MUST check updates for proxy/script and update them manually.");
		utils.writeLogMessage("I do not give any guarantees and do not accept claims if you have any problems with not updated module/proxy! (c) SaltyMonkey");
	}	

	for (let mod of childModules) mod(dispatch)

};