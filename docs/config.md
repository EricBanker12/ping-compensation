## Introduction

Current PC contains `config.json` file with settings. These settings affected all script.

Path: `<ping-compensation-folder>/config/config.json`

## Settings
* `enabled` - enable/disable PC from start (see [commands](https://github.com/Mister-Kay/ping-compensation/blob/master/docs/commands.md))
* `debug` - enable/disable debug output in console from start (see [commands](https://github.com/Mister-Kay/ping-compensation/blob/master/docs/commands.md))
* `spCompatible` - disable some default features for skill-prediction compatibility
* * Disable skills emulated by SP for best compatibility (see [preset](https://github.com/Mister-Kay/ping-compensation/blob/master/docs/preset.md))
* `useRetries` - enable/disable start skill retrying
* `skillRetryCount` - number of times to retry starting a skill
* * WARNING: Setting this too high WILL get you banned. I recommend never setting it above 3.
* `skillRetryMs` - the delay before retrying a skill start 
* * Set this about equal to your ping jitter. `(skillRetryMs x skillRetryCount)` should never be greater than 200.
* * If less than your minimum ping, set `"pingSpikesLimit": true`
* `"pingHistoryMax"` - set how often to adapt to ping changes (default: 30 skill uses)
* `"pingSpikesLimit"` - if your ping is unstable OR your minimum ping is greater than `"skillRetryMs"`, set to `true`
* `"pingSpikesMin"` - if you set `"pingSpikesLimit": true`, set to `your minimum ping - 10`
* `"pingSpikesMax"`- if you set `"pingSpikesLimit": true`, set to `your average ping x 2`
* `minCombatFPS` - set this to your normal, minimum frames-per-second in dungeons/PvP