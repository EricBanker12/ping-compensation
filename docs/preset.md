## Introduction

You can disable/enable class/skill for class with `preset.js

Path: `<skill-prediction-folder>/config/preset.js`

WARNING! WARNING! WARNING!

Some classes using emulated abnormals for skills.

You can't disable these skills only with this preset.js

You MUST change values in abnormalities.js too

Path: `Path: <skill-prediction-folder>/config/abnormalities.js`

WARNING! WARNING! WARNING! 

## How To
Preset.js contains all clases in specific format + skills (specific format) but you can detect classes/skills by comments

```// Warrior```
or 
```// Gunner```
or 
```2: true, // Evasive Roll```

## Preset change

### Basic info

`"enabled"` - class activated
`<Id>: true` - skill activated

### Activation

Example:

```JS
0: { // Warrior
		"enabled": true,
		1: true, // Combo Attack
		2: true, // Evasive Roll
		3: true, // Torrent of Blows
		4: true, // Rain of Blows
		5: true, // Battle Cry
		8: true, // Assault Stance
		9: true, // Defensive Stance
```

`0: { // Warrior` - class Warrior

`"enabled":true,` - class activated

`1: true, // Combo Attack` - combo attack emulation activated

### Deactivation

Example:

```JS
0: { // Warrior
		"enabled": false,
		1: false, // Combo Attack
		2: false, // Evasive Roll
		3: true, // Torrent of Blows
		4: false, // Rain of Blows
		5: false, // Battle Cry
		8: true, // Assault Stance
		9: true, // Defensive Stance
```

`0: { // Warrior` - class Warrior

`"enabled":false,` - class deactivated (if class deactivated then all settings for skills will be ignored and emulation for class will be disable)

`1: false, // Combo Attack` - combo attack emulation deactivated
