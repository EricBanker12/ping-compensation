const fs = require("fs");
const path = require("path");

/**
 * @description Useful methods for Tera development
 * @class Utilities
 */
class Utilities {

	/**
	 * @description cleanup string from server
	 * @static
	 * @param {string} raw raw string for parse
	 * @returns {string} clean string without tags
	 * @memberof Utilities
	 */
	static getClearString(raw) {
		return /<FONT>(.*?)<\/FONT>/g.exec(raw);
	}

	/**
	 * @description typical Flatten function for array
	 * @static
	 * @param {any[]} list array with arrays as members 
	 * @returns {any[]} simple array 
	 * @memberof Utilities
	 */
	static getFlatArray(list) {
		return list.reduce(
			(a, b) => a.concat(Array.isArray(b) ? this.getFlatArray(b) : b), []
		);
	};

	/**
	 * @description deep search implementation
	 * @static
	 * @param {Object} obj big object to search
	 * @param {string} key key to search
	 * @returns {?any[]} values
	 * @memberof Utilities
	 */
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

	/**
	 * @description simple string split with converting into lower case
	 * @static
	 * @param {string} string string for split
	 * @returns {?string[]} parts
	 * @memberof Utilities
	 */
	static splitString(string) {
		return string.trim().toLowerCase().split(" ");
	}

	/**
	 * @description load json in UTF-8 from absolute path
	 * @static
	 * @param {string} path path to json file
	 * @returns {Object|null} parsed json or null if error
	 * @memberof Utilities
	 */
	static loadJson(path) {
		try {
			return JSON.parse(fs.readFileSync(path, "utf8"));
		} catch (err) {
			return null;
		}
	}

	/**
	 * @description Resolve file path by __dirname
	 * @static
	 * @param {any} path relative path
	 * @returns {string} absolute path
	 * @memberof Utilities
	 */
	static getFullPath(path) {
		return path.resolve(__dirname, path);
	}

	/**
	 * @description save object as json file
	 * @static
	 * @param {any} obj object to save
	 * @param {any} path absolute path
	 * @returns  {void|boolean} nothing or false if error
	 * @memberof Utilities
	 */
	static saveJson(obj, path) {
		try {
			fs.writeFileSync(path, JSON.stringify(obj, null, "\t"));
		} catch (err) {
			return false;
		}
	}

	/**
	 * @description Compare field in objects
	 * @static
	 * @param {any} obj1 obj1 to compare
	 * @param {any} obj2 obj2 to compare
	 * @param {any} field compare key
	 * @returns {boolean} result - true/false
	 * @memberof Utilities
	 */
	static compareFieldInObjects(obj1, obj2, field) {
		return obj1[field] === obj2[field];
	}

	/**
	 * @description Compare 2 objects 
	 * @static
	 * @param {any} obj1 obj1 to compare
	 * @param {any} obj2 obj2 to compare
	 * @returns {?Object[]} difference between objects
	 * @memberof Utilities
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

	//TODO: end it
	static degrees(w) {
		return Math.round(w / Math.PI * 180) + '\xb0'
	}

	//TODO: end it
	static decimal(n, p) {
		p = 10 ** p
		return Math.round(n * p) / p
	}

	/* eslint-disable no-console */

	/**
	 * Write formatted log message in console
	 * @param {...string} message text
	 * @static
	 * @memberof Utilities
	 */
	static writeLogMessage(...message) {
		console.log(`[SkillPrediction]`, ...message);
	}

	/**
	 * Write formatted warning message in console
	 * @param {string} message text
	 * @static
	 * @memberof Utilities
	 */
	static writeWarningMessage(...message) {
		console.log(`[SkillPrediction] WARNING!`, ...message);
	}

	/**
	 * Write formatted error message in console
	 * @param {...string} message text
	 * @static
	 * @memberof Utilities
	 */
	static writeErrorMessage(...message) {
		console.error(`[SkillPrediction] ERROR!`, ...message);
	}

	/**
	 * Write formatted debug message in console
	 * @param {...string} message text
	 * @static
	 * @memberof Utilities
	 */
	static writeDebugMessage(...message) {
		console.log(`[${(Date.now() % 10000).toString().padStart(4, '0')}]`, ...message);
	}

}

module.exports = Utilities;