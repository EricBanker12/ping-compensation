## Introduction

`preset.awoke2.js` gives the option of disabling or enabling specific skills or classes from being emulated by SP. 

Path: `<skill-prediction-folder>/config/preset.awoke2.js`.

## How To Edit Preset.js

This is best explained along an example of what you're gonna see inside the file. Everything after <- is my own comment from here. So without furhter do, you'll notice it's quite simple as expected.

```JS
0: { // Warrior <- Class category.
		"enabled": true, // <- Set this to false for disabling ALL skills for this class.
		1: true, // Combo Attack <- This skill is enabled.
		2: true, // Evasive Roll <- This skill is enabled.
		3: false, // Torrent of Blows <- This skill is disabled.
		4: true, // Rain of Blows <- This skill is enabled.
		5: true, // Battle Cry <- This skill is enabled.
		8: false, // Assault Stance <- This skill is disabled.
		9: false // Defensive Stance <- This skill is disabled.
```