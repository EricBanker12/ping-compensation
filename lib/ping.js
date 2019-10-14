const config = require('../config/config.json')
const pingLimit = config.pingSpikesLimit;
const PING_LIMIT_MIN = config.pingSpikesMin;
const PING_LIMIT_MAX = config.pingSpikesMax;
const PING_HISTORY_MAX = config.pingHistoryMax;

module.exports = function Require(dispatch) {

    let gameId,
        action = {},
        timeouts = {},
        ping = {
            min: 0,
            median: 0,
            iqr: 0,
            avg: 0,
            max: 0,
            history: []
        }

    dispatch.hook('S_LOGIN', dispatch.majorPatchVersion < 86 ? 13 : 14, event => {gameId = event.gameId});

    dispatch.hook('C_REQUEST_GAMESTAT_PING', 'raw', {filter: {fake: null}, order: 1000}, () => {
        action['ping'] = Date.now()
        if (ping.max) {
            clearTimeout(timeouts['ping'])
            timeouts['ping'] = setTimeout(clear, ping.max + 500, 'ping')
        }
    })

    dispatch.hook("S_RESPONSE_GAMESTAT_PONG", "raw", {filter: {silenced: null}, order: -1000}, () => {
        if (action['ping']) {
            pong(Date.now() - action['ping'])
            clear('ping')
        }
    })

    for(let packet of [
        ['C_START_SKILL', 7],
        ['C_START_TARGETED_SKILL', 7],
        ['C_START_COMBO_INSTANT_SKILL', 6],
        ['C_START_INSTANCE_SKILL', 7],
        ['C_START_INSTANCE_SKILL_EX', 5],
        //['C_PRESS_SKILL', 1],
        ['C_NOTIMELINE_SKILL', 3],
        ['C_CAN_LOCKON_TARGET', 3],
      ]) dispatch.hook(packet[0], packet[1], { order: 1000 }, start)

      function start(event) {
          if (event.skill) {
              let skill = skillBase(event.skill.id)
              action[skill] = Date.now()
              if (ping.max) {
                  clearTimeout(timeouts[skill])
                  timeouts[skill] = setTimeout(clear, ping.max + 500, skill)
              }
          }
      }

      function clear(skill) {
        delete action[skill]
        delete timeouts[skill]
      }

      function skillBase(skill) {
          return Math.floor(skill/10000)
      }

      for(let packet of [
        ['S_ACTION_STAGE', 9],
        ['S_CANNOT_START_SKILL', 4],
        ['S_CAN_LOCKON_TARGET', 3],
        //['S_INSTANT_DASH', 3], //not sure about this, often delayed extra 25ms
        //['S_INSTANT_MOVE', 3], //not sure about this, often delayed extra 25ms
    ]) dispatch.hook(packet[0], packet[1], { filter: { silenced: null }, order: -1000 }, stop)

    function stop(event) {
        if (event.skill && (event.gameId == gameId || event.gameId === undefined)) {
            let skill = skillBase(event.skill.id)
            if (action[skill]) {
                pong(Date.now() - action[skill])
                clear(skill)
            }
        }
    }

    function pong(pong) {
        if (pingLimit) {
            pong = Math.max(pong, PING_LIMIT_MIN)
            pong = Math.min(pong, PING_LIMIT_MAX)
        }
        ping.history.unshift(pong)
        if (ping.history.length > PING_HISTORY_MAX) ping.history.pop()
        let sorted = ping.history.slice(0).sort((a, b)=>{return a - b})
        ping.min = sorted[0]
        ping.median = sorted[Math.floor((sorted.length-1)/2)]
        ping.iqr = sorted[Math.floor((sorted.length-1)*3/4)] - sorted[Math.floor((sorted.length-1)/4)]
        ping.avg = 0
        ping.history.forEach((val)=>{ping.avg += val})
        ping.avg = Math.round(ping.avg / ping.history.length)
        ping.max = sorted[sorted.length-1]
    }

    dispatch.hook('C_CANCEL_SKILL', 3, event => {
        if (event.skill) clear(skillBase(event.skill.id))
    })

    return ping
}
