/**
 * Useful methods for Tera development
 * and Skill Prediction
 * by SaltyMonkey 
 */

const fs = require("fs");
const path = require("path");

class Utilities {

	static getClearString(raw) {
		return /<FONT>(.*?)<\/FONT>/g.exec(raw);
	}

	static getFlatArray(list) {
		return list.reduce(
			(a, b) => a.concat(Array.isArray(b) ? this.getFlatArray(b) : b), []
		);
	};
	static getDataFromObjectByField(obj, key) {

		//thx JustPassingBy 
		function _search(parents, children, path, child, results, keysToSearch) {
			for (let i = 0, arr = Object.keys(child), len = arr.length; i < len; ++i) {
				const k = arr[i];
				const v = child[k];
				path[path.length] = String(k);
				if (typeof v === "object") {
					if (v != null && !~parents.indexOf(v)) {
						parents[parents.length] = v;
						try {
							_search(parents, children, path, v, results, keysToSearch);
						} catch (err) { //suppressed }
						}
					}
					if (~keysToSearch.indexOf(k))
						results[results.length] = Object.keys(v);
					--path.length;
				}
			}
		}

		function deepSearch(root, keysToSearch = []) {
			const parents = [root];
			const path = [];
			const children = [];
			const results = [];
			if (typeof root === "object" && root != null)
				_search(parents, children, path, root, results, keysToSearch);
			return results;
		}

		return deepSearch(obj, key);
	}

	static splitString(string) {
		return string.trim().toLowerCase().split(" ").toArray();
	}

	/**
	 * Load Json from full path, return onject.
	 * @param {String} path 
	 * @returns {Object||false}
	 */
	static loadJson(path) {
		try {
			return JSON.parse(fs.readFileSync(path, "utf8"));
		} catch (err) {
			return null;
		}
	}

	/**
	 * Resolve file path by __dirname
	 * @param string path parts
	 * @returns {string} resolved absolute path 
	 */
	static getFullPath(str) {
		return path.resolve(__dirname, str);
	}

	/**
	 * 
	 * @param {Object} obj 
	 * @param {String} path 
	 * @returns {Void|false}
	 */
	static saveJson(obj, path) {
		try {
			fs.writeFileSync(path, JSON.stringify(obj, null, "\t"));
		} catch (err) {
			return false;
		}
	}

	/**
	 * Save raw object in file 
	 * @param {Object} obj object to save
	 * @param {string} path absolute path for file
	 */
	static SaveDataInFile(obj, path) {
		fs.writeFileSync(path, obj);
	}

	/**
	 * 
	 * @param {Number} templateId Tera's templateId
	 * @returns {Number} game class id
	 */
	static getRaceFromTemplate(templateId) {
		return Math.floor((templateId - 10101) / 100);
	}

	/**
	 * Convert templateId into class
	 * @param {Number} templateId Tera's templateId
	 * @returns {Number} game class id
	 */
	static getClassFromTemplate(templateId) {
		(templateId - 10101) % 100;
	}


	/**
	 * Compare field in objects
	 * @param {Object} obj1 - obj1 to compare
	 * @param {Object} obj2 - obj2 to compare
	 * @param {string} field - compare key
	 * @returns {boolean} result - true/false
	 */
	static compareFieldInObjects(obj1, obj2, field) {
		obj1[field] === obj2[field];
	}

	/**
	 * Compare 2 objects 
	 * @param {Object} obj1 - obj1 to compare
	 * @param {Object} obj2 - obj2 to compare
	 * @returns {Array} diff - difference between objects
	 */
	static compareFieldsInObjects(obj1, obj2) {
		let diff = {};
		for (let [key, value] of Object.entries(obj2)) {
			if (!obj1[key] || obj1[key] !== value) {

				diff[key] = value;
			}
		}
		return diff;
	}

	/**
	 * Simple file remove by absolute path
	 * @param {string} path 
	 */
	static removeFileSync(path) {
		fs.unlinkSync(path);

	}

	/**
	 * Simple file/folder delete by absolute path
	 * @param {string} path full path to dir or file
	 */
	static removeByPath(path) {
		try {
			if (fs.lstatSync(path).isDirectory()) {
				for (let file in fs.readdirSync(path)) {
					fs.unlinkSync(file);
				}
				fs.rmdirSync(path);
			} else {
				fs.unlinkSync(path);
			}
		} catch (err) {}
	}

	static degrees(w) {
		return Math.round(w / Math.PI * 180) + '\xb0'
	}

	static decimal(n, p) {
		p = 10 ** p
		return Math.round(n * p) / p
	}
	/* eslint-disable no-console */

	/**
	 * Write formatted log message in console
	 * @param {string} message - text
	 */
	static writeLogMessage(...message) {
		console.log(`[SkillPrediction]`, ...message);
	}

	/**
	 * Write formatted warning message in console
	 * @param {string} message - text
	 */
	static writeWarningMessage(...message) {
		console.log(`[SkillPrediction] WARNING!`, ...message);
	}

	/**
	 * Write formatted error message in console
	 * @param {string} message - text
	 */
	static writeErrorMessage(...message) {
		console.error(`[SkillPrediction] ERROR!`, ...message);
	}

	/**
	 * Write formatted debug message in console
	 * @param {string} message - text
	 */
	static writeDebugMessage(...message) {
		console.log(`[${(`0000${Date.now() % 10000}`).substr(-4, 4)}]`, ...message);
	}

}

module.exports = Utilities;