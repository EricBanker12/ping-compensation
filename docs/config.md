## Introduction

Current PC contains `config.json` file with settings. These settings affected all script.

Path: `<ping-compensation-folder>/config/config.json`

## Settings

### Main settings
* `enabled` - enable/disable PC from start (see `commands.md`)
* `debug` - enable/disable debug output in console from start (see `commands.md`)
* `spCompatible` - disable some default features for skill-prediction compatibility
* * Disable skills emulated by SP for most compatibility (see `preset.md`)
* `spDirectory` - the name of the folder that contains skill-prediction
* * Usually `skill-prediction` or `skill-prediction-master`
* `useRetries` - enable/disable start skill retrying
* * WARNING: DO NOT ENABLE WITH `"spCompatible": true` WITHOUT FIRST DISABLING SKILL-PREDICTION EMULATED SKILLS (see `preset.md`)
* `skillRetryMs` - the delay before retrying a skill start 
* * Set this about equal to your ping jitter.
* * If less than your minimum ping, set `"pingSpikesLimit": true` (see `ping.md`).

### Additional settings
*	`"pingHistoryMax"` - see `ping.md`
*	`"pingSpikesLimit"` - see `ping.md`
*	`"pingSpikesMin"` - see `ping.md`
*	`"pingSpikesMax"`- see `ping.md`
