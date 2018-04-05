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
const sysmsg = require('tera-data-parser').sysmsg,
	migration = require('./lib/migration'),
	childModules = [
		require('./lib/core'),
		require('./lib/cooldowns')
	];

//filter isDirectory => true
const isDirectory = source => lstatSync(source).isDirectory();

//filter "module without _" or "." => true
const isActiveModule = source => !source[0].includes('_');

//function return "c" from "a/b/c" 
const getShortDirName = source => (source.slice(source.lastIndexOf(path.sep) + 1, source.length)).toLowerCase();

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
	'sp', 'cooldowns-master', 'fast-block-master', 'skillprediction', 'pinkie-sp', 'sp-pinkie'
];

let errorState = false;
let installedModules = null;

let migrationConfigPath = path.resolve(__dirname, './migration/partial-config.json');
let originalConfigPath = path.resolve(__dirname, './config/config.json');
//------------------------------------------------------------------------

//all installed modules except current dir
installedModules = (getModules(path.resolve(__dirname, '../'))).filter(element => element !== currentDir);

//check for blocked modules
for (item of installedModules) {
	for (blk of blockedModules) {
		if (item === blk) {
			console.log(`[${currentDir}] ERROR! Blocked module ${item} installed.`);
			errorState = true
		}
	}
}

//check for "command"
if (!installedModules.includes('command') && !installedModules.includes('command-master')) {
	console.log(`[${currentDir}] ERROR! Missing module \'Command\'. Close tera-proxy and install it.`);
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
	if (errorState) {
		console.log(`[${currentDir}] Start cancelled!`);
		process.exit()
	}

	dispatch.hookOnce('C_CHECK_VERSION', 1, () => {
		if (sysmsg.maps.get(dispatch.base.protocolVersion))
			for (let mod of childModules) mod(dispatch)
		else {
			console.log("[Skill Prediction] Your tera borked. Bye");
			return;
		}
	});


};