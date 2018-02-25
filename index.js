/*----------
TO DO:
Fix SP Compatability
Fix combo attack
Add in-game commands
----------*/
module.exports = function PingCompensation(dispatch) {
    //----------
    // Constants
    //----------
	const config = require('./config/config.json')
	const preset = require('./config/preset.js')
    const skills = require('./config/data/skills.js')
	const Ping = (!config.spCompatible) ? require('./lib/ping.js') : false
	const CDR = (!config.spCompatible) ? require('./lib/cooldowns.js') : false
    
    //----------
    // Variables
    //----------
    let gameId = null,
		templateId = null,
		skillsCache = null,
        job = -1,
		race = -1,
        timeouts = {},
		ping = {},
		startTime = false,
        alive = false,
        //mounted = false,
        queuedPacket = false,
        //queuedTimeout = false,
        currentAction = false
        
    // Skill Prediction compatability
    if (config.spCompatible) {
        ping.list = []
    }
    else {
		ping = Ping(dispatch)
    }
    
    //----------
    // Functions
    //----------
	//Load info about skill - credit: Pinkie Pie
    function skillInfo(id, local) {
        if (!local) id -= 0x4000000;

        let cached = skillsCache[id];

        if (cached !== undefined) return cached;

        let group = Math.floor(id / 10000),
            level = (Math.floor(id / 100) % 100) - 1,
            sub = id % 100

        // preset.js support
        if (!get(preset, job, "enabled") || !get(preset, job, group))
            return skillsCache[id] = null

        let info = [ // Ordered by least specific < most specific
            get(skills, job, '*'),
            get(skills, job, '*', 'level', level),
            get(skills, job, '*', 'race', race),
            get(skills, job, '*', 'race', race, 'level', level),
            get(skills, job, group, '*'),
            get(skills, job, group, '*', 'level', level),
            get(skills, job, group, '*', 'race', race),
            get(skills, job, group, '*', 'race', race, 'level', level),
            get(skills, job, group, sub),
            get(skills, job, group, sub, 'level', level),
            get(skills, job, group, sub, 'race', race),
            get(skills, job, group, sub, 'race', race, 'level', level)
        ];

        // Note: Exact skill (group, sub) must be specified for prediction to be enabled. This helps to avoid breakage in future patches
        if (info[8]) {
            cached = skillsCache[id] = Object.assign({}, ...info);
            // Sanitize to reduce memory usage
            delete cached.race;
            delete cached.level;
            return cached
        }

        return skillsCache[id] = null
    }

	// read skill data - credit: Pinkie Pie
    function get(obj, ...keys) {
        if (obj === undefined) return;

        for (let key of keys)
            if ((obj = obj[key]) === undefined)
                return;

        return obj
    }
    
    // endSkill
    function endSkill(event) {
        //if (debug) {console.log(`S_ACTION_END FAKE ${Date.now() - startTime} ${JSON.stringify(Object.values(event))}`)}
        if (event) {
            dispatch.toClient('S_ACTION_END', 2, event)
            timeouts[event.id] = false
        }
	}
	
	// updateCoord
	function updateCoord(event) {
		for (let coord of ["x", "y", "z", "w"]) {
            if (currentAction && timeouts[currentAction.id]) {
                currentAction[coord] = event[coord]
            }
        }
	}
    
    //----------
    // Hooks
    //----------
	
	/*
    // C_REQUEST_GAMESTAT_PING FAKE
    dispatch.hook('C_REQUEST_GAMESTAT_PING', 1, {order: 10, filter: {fake: true}},() => {
        if (config.spCompatible && !ping.request) {ping.request = Date.now()}
     })
    
    // S_RESPONSE_GAMESTAT_PONG
     dispatch.hook('S_RESPONSE_GAMESTAT_PONG', 1, {order: 10, filter: {fake: false, silenced: null}},() => {
         if (config.spCompatible && ping.request) {
             ping.list.push(Date.now() - ping.request)
             ping.request = false
             if (ping.list.length > 20) {
                 ping.list.splice(0,1)
             }
             ping.min = Math.min(...ping.list)
            return false
         }
     })
	*/

    // S_LOGIN
    dispatch.hook('S_LOGIN', 9, event => {
        gameId = event.gameId
        templateId = event.templateId
        race = Math.floor((templateId - 10101) / 100)
		job = (templateId - 10101) % 100
		skillsCache = {}
    })
	
    // C_PRESS_SKILL
    dispatch.hook('C_PRESS_SKILL', 1, {order: 10, filter: {fake: null}}, event => {
        updateCoord(event)
    })
    
    // C_PLAYER_LOCATION
    dispatch.hook('C_PLAYER_LOCATION', 2, {order: 10, filter: {fake: false}}, event => {
		updateCoord(event)
    })

    // C_PLAYER_LOCATION
    dispatch.hook('C_PLAYER_LOCATION', 'raw', {order: 10}, (code, data, fromServer, fake) => {
        if (!fake) {
            // if between fake and real S_ACTION_END
            if (currentAction && !timeouts[currentAction.id]) {
				queuedPacket = data
                // block location packets
                return false
            }
        }
    })
	
    // C_NOTIFY_LOCATION_IN_ACTION
    dispatch.hook('C_NOTIFY_LOCATION_IN_ACTION', 1, {order: 10, filter: {fake: null}}, event => {
        updateCoord(event)
    })
    
    // C_NOTIFY_LOCATION_IN_DASH
    dispatch.hook('C_NOTIFY_LOCATION_IN_DASH', 1, {order: 10, filter: {fake: null}}, event => {
		updateCoord(event)
    })
    
    // S_INSTANT_DASH
    dispatch.hook('S_INSTANT_DASH', 2, {order: 10, filter: {fake: null}}, event => {
        if (event.source.equals(gameId)){
			updateCoord(event)
        }
    })
    
    // S_INSTANT_MOVE
    dispatch.hook('S_INSTANT_MOVE', 1, {order: 10, filter: {fake: null}}, event => {
        if (event.id.equals(gameId)){
			updateCoord(event)
        }
	})
    
    // S_ACTION_STAGE
    dispatch.hook('S_ACTION_STAGE', 2, {order: 10, filter: {fake: false}}, event => {
        // if character is your character
        if (event.gameId.equals(gameId)) {
            //if (debug) {console.log(`S_ACTION_STAGE ${Date.now() - startTime} ${JSON.stringify(Object.values(event))}`)}
            // get skill id
			let info = skillInfo(event.skill)
			// if skill is in config
            //if (alive && !mounted && skills[job] && config[job] && skills[job][skillBase] && config[job][skillBase] && skills[job][skillBase][skillSub]) {
			if (info) {
                // get length and distance
				let multistage = Array.isArray(info.length),
					length = multistage ? info.length[event.stage]:info.length,
					distance = multistage ? info.distance[event.stage]:info.distance,
					currentPing = Math.max(ping.min, startTime ? Date.now() - startTime : 0)
                //if (debug) console.log('length', length)
                if (length && length > 0) {
                    // change animation speed
                    if (currentPing < length) {
                        event.speed = event.speed * length / (length - currentPing)
					}
					else {
						length = 0
					}
                    // if server sends distance
                    if (event.movement[0]) {
						distance = 0
                        // get total distance
                        for (let stage of event.movement) {
                            distance += stage.distance
                        }
                    }
                    // get coordinates
                    let x,y
                    if (distance && distance * distance > 0) {
                        let r = (event.w / 0x8000) * Math.PI
                        x = event.x + Math.cos(r) * distance
                        y = event.y + Math.sin(r) * distance
                    }
                    // if skill type charging or lockon
                    if (['charging','lockon'].includes(info.type)) {
                        return true
                    }
                    // if multi-stage and not last stage
                    if (multistage && event.stage < info.length.length - 1) {
                        return true
                    }
                    // get end type ???
                        // TO DO
                    // send sActionEnd early
                    currentAction = {
                        gameId: event.gameId,
                        x: (x ? x : event.x),
                        y: (y ? y : event.y),
                        z: event.z,
                        w: event.w,
                        templateId: event.templateId,
                        skill: event.skill,
                        type: 0,
                        id: event.id
                    }
                    timeouts[event.id] = setTimeout(endSkill, length / event.speed, currentAction)
                    return true
                }
			}
			else {
				if (currentAction && timeouts[currentAction.id]) {
                    // disable fake endSkill
                    clearTimeout(timeouts[currentAction.id])
                    timeouts[currentAction.id] = false
				}
				currentAction = false
				queuedPacket = false
			}
			startTime = false
        }
    })
    
    // S_ACTION_END
    dispatch.hook('S_ACTION_END', 2, {order: 10, filter: {fake: false}}, event => {
        // if character is your character
        if (event.gameId.equals(gameId)) {
            //if (debug) {console.log(`S_ACTION_END ${Date.now() - startTime} ${JSON.stringify(Object.values(event))}`)}
            // if modded skill
            if (alive && currentAction && currentAction.id == event.id) {
                //clearTimeout(queuedTimeout)
                //queuedTimeout = false
                // if not fake ended
                if (timeouts[event.id]) {
                    // disable fake endSkill
                    clearTimeout(timeouts[event.id])
                    timeouts[event.id] = false
                }
                // if fake ended
                else {
                    // if location emulated wrong
					if (Math.sqrt((currentAction.x - event.x)*(currentAction.x - event.x) 
						+ (currentAction.y - event.y)*(currentAction.y - event.y)) > 100 
						|| (currentAction.z - event.z)*(currentAction.z - event.z) > 2500) {
                        // teleport to correct location
                        //if (debug) {console.log('S_INSTANT_MOVE correction')}
                        dispatch.toClient('S_INSTANT_MOVE', 1, {
                            id: gameId,
                            x: event.x,
                            y: event.y,
                            z: event.z,
                            w: event.w
                        })
                    }
                    else if (queuedPacket) {
                        dispatch.toServer(queuedPacket)
                    }
                    queuedPacket = false
                    currentAction = false
                    // hide this sActionEnd
                    return false
                }
            }
            queuedPacket = false
            currentAction = false
        }
    })
    
    // S_SPAWN_ME
    dispatch.hook('S_SPAWN_ME', 1, event => {
		alive = event.alive
		if (!alive) {
			clearTimeout(timeouts[currentAction.id])
			timeouts[currentAction.id] = false
			queuedPacket = false
			currentAction = false
		}
    })

    // S_CREATURE_LIFE
    dispatch.hook('S_CREATURE_LIFE', 1, event => {
        if (gameId.equals(event.target)) {
            alive = event.alive
            if (!alive) {
                clearTimeout(timeouts[currentAction.id])
                timeouts[currentAction.id] = false
                queuedPacket = false
                currentAction = false
            }
        }
    })
    
    // S_LOAD_TOPO
    dispatch.hook('S_LOAD_TOPO', 1, event => {
        if (currentAction) {
            clearTimeout(timeouts[currentAction.id])
            timeouts[currentAction.id] = false
            queuedPacket = false
            currentAction = false
        }
    })
	
	/*
    // S_MOUNT_VEHICLE
    dispatch.hook('S_MOUNT_VEHICLE', 1, event => {
        if (gameId.equals(event.target)) {
            mounted = true
        }
    })

    // S_UNMOUNT_VEHICLE
    dispatch.hook('S_UNMOUNT_VEHICLE', 1, event => {
        if (gameId.equals(event.target)) {
            mounted = false
        }
    })
    
    // S_MOUNT_VEHICLE_EX
    dispatch.hook('S_MOUNT_VEHICLE_EX', 1, event => {
        if (gameId.equals(event.target)) {
            mounted = true
        }
    })

    // S_UNMOUNT_VEHICLE_EX
    dispatch.hook('S_UNMOUNT_VEHICLE_EX', 1, event => {
        if (gameId.equals(event.target)) {
            mounted = false
        }
	})
	*/
}