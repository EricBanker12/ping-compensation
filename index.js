module.exports = function PingCompensation(dispatch) {

    const config = require('./config/config.json')
    const childModules = [require('./lib/core.js')]
    
    //if (!config.spCompatible) childModules.push(require('./lib/cooldowns.js'))

    for (let mod of childModules) mod(dispatch)
};