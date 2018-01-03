//------------------------------------
//by SaltyMonkey 
//Migration helper
//Can compare download partial json with current config
//and update config with new data from server 
//same with abnormalitiest.js (soon)
//------------------------------------

const fs = require('fs');

exports.ConfigMigrationHelper = class ConfigMigrationHelper {
    constructor(updatedConfigFullPath, originalConfigFullPath) {

        this.updatedConfigFullPath = updatedConfigFullPath;
        this.originalConfigFullPath = originalConfigFullPath;
        this.originalData = this.LoadJson(this.originalConfigFullPath);
        this.updateData = this.LoadJson(this.updatedConfigFullPath);
        this.diff = {};
    }

    LoadJson(path) {
        try {
            return JSON.parse(fs.readFileSync(path, 'utf8'))
        }
        catch (err) {
            console.error(`[Skill Prediction] Migration error! ${err}`);
        }
    }

    SaveJson(obj, path) {
        try {
            fs.writeFileSync(path, JSON.stringify(obj, null, "\t"))
            console.info(`[Skill Prediction] Done.`);
        }
        catch (err) {
            console.error(`[Skill Prediction] Migration error! ${err}`);
        }
    }

    CompareJsons() {
        if (this.originalData.version === this.updateData.version) return;
        let flag = true;

        for (let [key, value] of Object.entries(this.updateData)) {
            if (!this.originalData[key] || this.originalData[key] !== value) {
                flag = false;
                this.diff[key] = value;
            }
        }
        if (!flag) console.log(`[Skill Prediction] Config file outdated. Migration will start soon...`)
        return flag;
    }

    ApplyMigration() {
        for (let [key, value] of Object.entries(this.diff))
            this.originalData[key] = value;
        this.SaveJson(this.originalData, this.originalConfigFullPath);
    }
}