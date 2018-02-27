## Introduction

Current PC contains `config.json` file with settings. These settings affected all script.

Path: `<ping-compensation-folder>/config/config.json`

## Settings

### Main settings
* `enabled` - enable/disable PC from start (see `commands.md`)
* `spCompatible` - disable some default features for skill-prediction compatibility
* * Disable skills emulated by SP for most compatibility (see `preset.md`)
* `spDirectory` - the name of the folder that contains skill-prediction
* * Usually `skill-prediction` or `skill-prediction-master`
* `debug` - enable/disable debug output in console from start (see `commands.md`)

### Additional settings
*	`"pingHistoryMax"` - see `ping.md`
*	`"pingSpikesLimit"` - see `ping.md`
*	`"pingSpikesMin"` - see `ping.md`
*	`"pingSpikesMax"`- see `ping.md`
