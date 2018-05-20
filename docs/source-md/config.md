## Introduction

SP contains `config.json` file with settings. These settings affected all script.

Path: `<skill-prediction-folder>/config/config.json`

## Settings

### Main settings
* `enabled`              - enable/disable SP from start (see `commands.md`).
* `jitterCompensation`	 - enable/disable jitter compensation.
* `skillRetryCount`		 - Number of times to retry each skill (0 = disabled). Recommended 1-3.
* `skillRetryMs`		 - Time to wait between each retry. SkillRetryMs * SkillRetryCount should be under 100, otherwise skills may go off twice.
* `skillRetryJittercomp` - Skills that support retry will be sent this much earlier than estimated by jitter compensation.
* `skillsRetryAlways`	 - Setting this to true will reduce ghosting for extremely short skills, but may cause other skills to fail.
* `skillDelayOnFail`	 - Basic initial desync compensation. Useless at low ping (<50ms).
* `serverTimeout`	     - This number is added to your (min. ping * 2) + (max. ping / 2) + skill retry period to set the failure threshold for skills. If animations are being cancelled while damage is still applied, increase this number.
* `defendSuccessStrict`  - Set this to false to see Brawler's Perfect Block icon at very high ping (warning: may crash client).

### Debug settings

*   `debugGlyphs`
*	`debug`
*	`debugAbnormals`
*	`debugLoc`
*	`version`
