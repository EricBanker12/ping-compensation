//------------------------------------
//by SaltyMonkey 
//Reworked loader for skill prediction
//In theory a bit slower with bunch of modules than old loader
//but can detect copypasted SP instances
//------------------------------------
const { lstatSync, readdirSync, existsSync} = require('fs');
const path = require('path');
const sysmsg = require('tera-data-parser').sysmsg,
	migration = require('./lib/migration'),
	childModules = [
		require('./lib/core'),
		require('./lib/cooldowns')
	];

//filter isDirectory => true
const isDirectory = source => lstatSync(source).isDirectory();

//filter "module without _" => true
const isActiveModule = source => !source.includes('_');

//function return "c" from "a/b/c" 
const getShortDirName = source => source.slice(source.lastIndexOf(path.sep) + 1, source.length);

//function return short names for all active modules from folder with modules
const getModules = source =>
	(readdirSync(source).map(name => path.join(source, name))
		.filter(isDirectory))
		.map(elem => getShortDirName(elem))
		.filter(isActiveModule);

//------------------------------------------------------------------------
let currentDir = getShortDirName(__dirname);
let blockedModules = ['cooldowns', 'lockons', 'lockons-master', 'fastfire', 'fast-fire', 'fast-fire-master', 'fast-block',
	'skill-prediction', 'skill-prediction-master', 'skill-prediction-exp', 'skill-prediction-experimental',
	'sp', 'cooldowns-master', 'fast-block-master', 'skillprediction', 'pinkie-sp', 'sp-pinkie'];
let errorState = false;
let installedModules = null;

let migrationConfigPath = path.resolve(__dirname, './migration/partial-config.json');
let originalConfigPath = path.resolve(__dirname, './config/config.json');
//------------------------------------------------------------------------

//all installed modules except current dir
installedModules = (getModules(path.resolve(__dirname, '../'))).filter(element => element !== currentDir);

//check for blocked modules
if (installedModules.some(element => blockedModules.indexOf(element) >= 0)) {
	console.log('[Skill Prediction] ERROR! Blocked modules installed. Close tera-proxy and delete them.');
	errorState = true
}
//check for "command"
if (!installedModules.includes('command') && !installedModules.includes('command-master')) {
	console.log('[Skill Prediction] ERROR! Missing module \'Command\'. Close tera-proxy and install it.');
	errorState = true
}

//config migration
if (existsSync(migrationConfigPath)) {
	let migrationHelper = new migration.ConfigMigrationHelper(migrationConfigPath, originalConfigPath)
	if (!migrationHelper.CompareJsons()) {
		migrationHelper.ApplyMigration();
	}
}

module.exports = function SkillPredictionCore(dispatch) {
	if (errorState) return

	dispatch.hookOnce('C_CHECK_VERSION', 1, () => {
		if (!sysmsg.maps.get(dispatch.base.protocolVersion) || sysmsg.maps.get(dispatch.base.protocolVersion).name.size === 0) {
			console.error('ERROR: Your version of tera-proxy is too old to run Skill Prediction');
			return
		}
	});

	for (let mod of childModules) mod(dispatch)
};