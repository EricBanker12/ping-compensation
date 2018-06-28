"use strict";

//------------------------------------
//by SaltyMonkey 
//Reworked loader for skill prediction
//Can detect duplicated modules,
//update configuration and 
//remove deprecated files
//------------------------------------

const {
	lstatSync,
	readdirSync,
	existsSync
} = require("fs");
const path = require("path");
const utils = require("./utils");
const childModules = [
	require("./core"),
	require("./commands")
];

/**
 * @description Check path for directory
 * @param {string} source  full path
 * @returns {boolean} true - directory, false - nope
 */
const isDirectory = source => lstatSync(source).isDirectory();

/**
 * @description Check "string" (with short name	for directory) for active proxy module
 * @param {string} source short name
 * @returns {boolean}
 */
const isActiveModule = source => !["_", "."].includes(source[0]);

/**
 * @description Grab short name from full path and translate it to lower case
 * @param {string} source full path
 * @returns {boolean} short name
 */
const getShortDirName = source => (source.slice(source.lastIndexOf(path.sep) + 1, source.length)).toLowerCase();

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
let blockedModules = ["cooldowns", "shakers", "shakers-master", "lockons-light", "lockon-light", "lockons-light-master", 
	"lockons", "lockons-master", "fastfire", "fast-fire", "fast-fire-master", "fast-block",
	"skill-prediction", "skill-prediction-master", "skill-prediction-exp", "skill-prediction-experimental",
	"sp", "cooldowns-master", "fast-block-master", "skillprediction", "pinkie-sp", "sp-pinkie", "best", "bestsp"
];

let errorState = 0;
let installedModules = null;
let installedBlockedModules = [];
let currentDir = getShortDirName(utils.getFullPath("../"));
let updatePath = utils.getFullPath("../migration/steps.json");
let originalConfigPath = utils.getFullPath("../config/config.json");
let defaultConfigFilePath = utils.getFullPath("../config/data/default-config.json");
let autoUpdateMarkerPath = utils.getFullPath("../module.json");
//------------------------------------------------------------------------

//all installed modules except current dir
installedModules = (getModules(path.resolve(__dirname, "../../"))).filter(element => element !== currentDir);

//check for blocked modules
for ( let item of installedModules)
	for ( let blk of blockedModules)
		if (item === blk) {
			errorState = 1;
			installedBlockedModules.push(blk);
		}

//check for "command"
if (!installedModules.includes("command") && !installedModules.includes("command-master")) 
	errorState = 2;

if (!existsSync(originalConfigPath)) {
	utils.writeWarningMessage("Your config file broken. Fixing...");
	utils.saveJson(updateFile, utils.loadJson(defaultConfigFilePath));
	utils.writeWarningMessage("Config file restored with default values.");
}

let updateFile = utils.loadJson(updatePath);
let originalConfig = utils.loadJson(originalConfigPath);

//run update/cleanup
if (updateFile && originalConfig && originalConfig.version != updateFile["version"]) {
	let diff = utils.compareFieldsInObjects(originalConfig, updateFile["configAdd"]);
	let obj = originalConfig;
	if (diff != null) {
		utils.writeLogMessage("Some values must be updated in config! Updating...");
		obj = Object.assign(originalConfig, diff);
		obj["version"] = updateFile.version;
	}
	if (updateFile["configRemove"]) {
		utils.writeLogMessage("Some values deprecated in config! Removing...");
		for (let field of updateFile["configRemove"])
			if (obj[field]) obj[field] = undefined;
	}
	utils.writeLogMessage("Configuration up to date");
	utils.saveJson(obj, originalConfigPath);
	if (updateFile["removeFile"]) {
		utils.writeLogMessage("Cleanup task...");
		let cleanupObj = updateFile["removeFile"];
		utils.writeLogMessage("Removing deprecated files...");
		utils.writeLogMessage(cleanupObj);
		if (Array.isArray(cleanupObj))
			cleanupObj.forEach((item) => utils.removeByPath(utils.getFullPath(item)));
		else
			utils.removeByPath(utils.getFullPath(cleanupObj));
		utils.writeLogMessage("Done!");
	}
}

//Main entry point
module.exports = function SkillPredictionCore(dispatch) {
	if (errorState !=0) {
		utils.writeErrorMessage(`[${currentDir}] Start cancelled!`);
		switch (errorState){
		case 1: 
			utils.writeErrorMessage(`One or more incompatible modules installed! Remove them and restart proxy! ${installedBlockedModules}`);
			break;
		case 2:
			utils.writeErrorMessage("Module \"command\" not installed. Install it and restart proxy!");
			break;
		}
		return;
	}

	if(!require("tera-data-parser").types) {
		utils.writeErrorMessage("Your version of tera-proxy so old. Bye!");
		return;
	}

	if (dispatch.base.proxyAuthor == "caali") {
		if (!existsSync(autoUpdateMarkerPath))
		{
			utils.writeWarningMessage("Caali's proxy detected and autoupdate for module disabled!");
			utils.writeLogMessage("Your friend or you disabled it or your sp can be not original/installation broken.");
			utils.writeLogMessage("I do not give any guarantees and do not accept claims if you have any problems with not updated module! (c) SaltyMonkey");
		}
	}
	else {
		utils.writeWarningMessage("You trying to use SP fork with PinkiePie or diff tera-proxy.");
		utils.writeLogMessage("You MUST check updates for proxy/script and update them manually.");
		utils.writeLogMessage("I do not give any guarantees and do not accept claims if you have any problems with not updated module/proxy! (c) SaltyMonkey");
		utils.writeLogMessage("If you can't understand smth in this text then ignore it!");
	}	

	const state = require("./state");
	for (let mod of childModules) mod(dispatch);


};