/*
WARNING! WARNING! WARNING!
Some classes using emulated abnormals for skills.
You can't disable these skills only with this preset.js
You MUST change values in abnormalities.js too for disabled skills
WARNING! WARNING! WARNING!

Awakening skills naming is being done based on the following document: https://docs.google.com/document/d/1q0qxSf-Ll1nfViF9SGf1kcA2I0CjO_N8dokgpx__o2c/edit#
(for now)
*/
module.exports = {
	0: { // Warrior
		"enabled": true,
		1: false, // Combo Attack
		2: true, // Evasive Roll
		3: false, // Torrent of Blows
		4: false, // Rain of Blows
		5: false, // Battle Cry
		8: true, // Assault Stance
		9: true, // Defensive Stance
		10: false, // Death From Above
		11: false, // Poison Blade
		12: true, // Leaping Strike
		16: false, // Charging Slash
		17: false, // Vortex Slash
		18: false, // Combative Strike
		19: false, // Rising Fury
		20: true, // Deadly Gamble
		21: false, // Cascade of Stuns
		23: false, // Spinning Counter
		24: false, // Smoke Aggressor
		25: false, // Command: Attack
		26: false, // Command: Follow
		27: false, // Pounce / x
		28: false, // Traverse Cut
		29: false, // Blade Draw
		30: false, // Scythe
		31: false, // Reaping Slash
		32: false, // Cross Parry
		34: false, // Binding Sword
		35: false, // Infuriate
		36: false, // Rain of Blows (Deadly Gamble)
		37: false, // Blade Draw (Deadly Gamble)
		38: false, // Scythe (Deadly Gamble)
		39: false, // Traverse Cut (Defensive Stance)
		// Awakening
		40: false, // Spiral Slash
		41: false, // Storm Crash
		42: false, // Tempest Rush
		91: false, // Awakening Eyes Aura
 	},
	1: { // Lancer
		"enabled": false,
		1: false, // Combo Attack
		2: false, // Stand Fast
		3: false, // Onslaught
		4: false, // Challenging Shout
		5: false, // Shield Bash
		7: false, // Guardian Shout
		8: false, // Shield Counter
		9: false, // Leash
		10: false, // Debilitate
		11: false, // Retaliate
		12: false, // Infuriate
		13: false, // Spring Attack
		15: false, // Charging Lunge
		16: false, // Second Wind
		17: false, // Adrenaline Rush
		18: false, // Shield Barrage
		19: false, // Pledge of Protection
		20: false, // Menacing Wave / x
		21: false, // Lockdown Blow
		22: false, // Iron Will
		23: false, // Master's Leash
		24: false, // Chained Leash
		25: false, // Wallop
		26: false, // Backstep
		27: false, // Rallying Cry
		// Awakening
		28: false, // Righteous Leap / Justice Leap
		29: false, // Bulwark
		30: false, // Divine Aegis
		91: false, // Awakening Eyes Aura 
	},
	2: { // Slayer
		"enabled": false,
		1: false, // Combo Attack
		2: false, // Knockdown Strike
		3: false, // Whirlwind
		4: false, // Evasive Roll
		5: false, // Dash
		8: false, // Overhand Strike
		9: false, // Leaping Strike
		10: false, // Retaliate
		12: false, // Heart Thrust
		13: false, // Stunning Backhand
		14: false, // Distant Blade
		15: false, // Startling Kick
		16: false, // Fury Strike
		17: false, // Headlong Rush / Not properly emulated, use at the expense of possible issues.
		18: false, // Overpower
		19: false, // Tenacity
		20: false, // In Cold Blood
		21: false, // Exhausting Blow
		23: false, // Measured Slice
		24: false, // Eviscerate
		25: false, // Ultimate Overhand Strike
		// Awakening
		26: false, // Rending Crash
		27: false, // Piercing Lunge
		28: false, // Colossus Blade
		91: false, // Awakening Eyes Aura
	},
	3: { // Berserker
		"enabled": false,
		1: false, // Combo Attack
		2: false, // Axe Block
		3: false, // Thunderstrike
		4: false, // Flatten
		5: false, // Dash
		6: false, // Sweeping Strike
		7: false, // Mocking Shout / x
		8: false, // Fiery Rage
		10: false, // Cyclone
		11: false, // Leaping Strike
		12: false, // Unchained Anger / x
		13: false, // Retaliate
		15: false, // Vampiric Blow (unstable emulation, enable it only if your ping >180)
		16: false, // Fearsome Shout
		18: false, // Lethal Strike
		19: false, // Tenacity / Fortitude
		20: false, // Inescapable Doom
		21: false, // Bloodlust
		24: false, // Evasive Smash
		25: false, // Raze
		26: false, // Tackle
		27: false, // Unbreakable
		28: false, // Intimidation
		29: false, // Evasive Roll
		30: false, // Axe Counter
		31: false, // Overwhelm
		32: false, // Punishing Strike
		// Awakening
		33: false, // Berserk?
		34: false, // Crush
		35: false, // Smash
		36: false, // Decimate
		37: false, // Crimson Assault
		38: false, // Berserk?
		91: false, // Awakening Eyes Aura
	},
	4: { // Sorcerer
		"enabled": false,
		1: false, // Fireball
		2: false, // Frost Sphere
		3: false, // Lightning Trap
		4: false, // Arcane Pulse
		5: false, // Mana Infusion
		6: false, // Meteor Strike
		7: false, // Backstep
		8: false, // Flame Pillar
		10: false, // Mana Barrier
		11: false, // Lightning Strike
		12: false, // Void Pulse
		13: false, // Mindblast
		16: false, // Painblast
		17: false, // Painful Trap
		18: false, // Glacial Retreat
		19: false, // Mana Siphon
		20: false, // Flaming Barrage
		21: false, // Nerve Exhaustion
		22: false, // Burning Breath
		23: false, // Mana Volley
		25: false, // Time Gyre
		26: false, // Teleport Jaunt
		27: false, // Hailstorm
		30: false, // Nova
		31: false, // Warp Barrier
		32: false, // Meteor Shower
		33: false, // Arcane Pulse (Mana Boost)
		34: false, // Mana Boost
		// Awakening

		91: false, // Awakening Eyes Aura
	},
	5: { // Archer
		"enabled": false,
		1: false, // Arrow
		2: false, // Arrow Volley
		3: false, // Radiant Arrow
		4: false, // Penetrating Arrow
		5: false, // Rain of Arrows
		6: false, // Backstep
		7: false, // Feign Death
		8: false, // Rapid Fire
		9: false, // Slow Trap
		10: false, // Stunning Trap
		12: false, // Velik's Mark
		14: false, // Retaliate
		15: false, // Incendiary Trap
		16: false, // Breakaway Bolt
		17: false, // Web Arrow
		18: false, // Close Quarters
		19: false, // Poison Arrow
		20: false, // Restraining Arrow
		21: false, // Sniper's Eye
		22: false, // Sequential Fire
		23: false, // Stunning Trap Arrow
		25: false, // Incendiary Trap Arrow
		29: false, // Thunderbolt
		31: false, // Tenacity
		32: false, // Find Weakness
		33: false, // Chase
		// Awakening

		91: false, // Awakening Eyes Aura
	},
	6: { // Priest
		"enabled": false,
		1: false, // Divine Radiance
		2: false, // Regeneration Circle
		3: false, // Healing Circle
		5: false, // Blessing of Shakan
		6: false, // Arise
		8: false, // Mana Infusion
		10: false, // Purifying Circle
		11: false, // Metamorphic Blast
		12: false, // Resurrect
		14: false, // Summon: Party
		16: false, // Shocking Implosion
		17: false, // Prayer of Peace
		18: false, // Heal Thyself
		19: false, // Focus Heal
		22: false, // Kaia's Shield
		23: false, // Blessing of Balder
		26: false, // Fiery Escape
		27: false, // Final Reprisal
		28: false, // Mana Charge
		29: false, // Triple Nemesis
		30: false, // Plague of Exhaustion
		31: false, // Guardian Sanctuary
		32: false, // Divine Respite
		33: false, // Ishara's Lullaby
		34: false, // Restorative Burst
		35: false, // Energy Stars
		37: false, // Healing Immersion
		38: false, // Backstep
		39: false, // Grace of Resurrection
		40: false, // Zenobia's Vortex
		41: false, // Divine Intervention / Salvation(Awakening-form)
		// Awakening
		42: false, // Holy Brilliance
		43: false, // Invocation of Judgement
		91: false, // Awakening Eyes Aura
	},
	7: { // Mystic
		"enabled": false,
		1: false, // Sharan Bolt
		2: false, // Corruption Ring
		4: false, // Ancient Binding
		5: false, // Titanic Favor
		6: false, // Shara's Lash
		8: false, // Metamorphic Blast
		9: false, // Arun's Cleansing
		10: false, // Resurrect
		11: false, // Summon: Party
		12: false, // Vow of Rebirth
		13: false, // Aura of the Merciless
		14: false, // Aura of the Swift
		15: false, // Aura of the Unyielding
		16: false, // Aura of the Tenacious
		17: false, // Teleport Jaunt
		18: false, // Arun's Vitae
		21: false, // Retaliate
		22: false, // Arun's Tears
		23: false, // Metamorphic Smite
		24: false, // Volley of Curses
		25: false, // Thrall of Protection
		27: false, // Thrall of Life
		28: false, // Sonorous Dreams
		29: false, // Regression
		30: false, // Curse of Exhaustion
		31: false, // Curse of Confusion
		32: false, // Mire
		33: false, // Thrall of Vengeance
		34: false, // Thrall of Wrath
		35: false, // Command: Attack
		36: false, // Command: Follow
		37: false, // Warding Totem
		41: false, // Contagion
		42: false, // Boomerang Pulse
		43: false, // Release
		// Awakening
		44: false, // Transmission
		45: false, // Soul augmentation
		46: false, // Thrall of Sovereignty?
		47: false, // Mote Blast
		48: false, // Thrall of Sovereignty?
		91: false, // Awakening Eyes Aura
	},
	8: { // Reaper
		"enabled": false,
		1: false, // Spiral Barrage
		3: false, // Double Shear
		4: false, // Sundering Strike
		5: false, // Grim Strike
		6: false, // Death Spiral
		8: false, // Whipsaw
		9: false, // Smite
		10: false, // Pendulum Strike
		11: false, // Shadow Lash
		12: false, // Shadow Burst
		14: false, // Retaliate
		15: false, // Retribution
		16: false, // Shadow Reaping
		18: false, // Shrouded Escape
		40: false, // Shadow Step
		// Awakening

		91: false, // Awakening Eyes Aura
	},
	9: { // Gunner
		"enabled": false,
		1: false, // Blast
		2: false, // Bombardment
		3: false, // Scattershot
		4: false, // Point Blank
		5: false, // Burst Fire
		6: false, // Time Bomb
		7: false, // Arcane Barrage
		9: false, // Mana Missiles
		10: false, // Arc Bomb
		11: false, // Rocket Jump
		13: false, // Balder's Vengeance
		15: false, // Replenishment
		18: false, // HB
		19: false, // ST
		20: false, // Retaliate
		40: false, // Rolling Reload
		// Awakening

		91: false, // Awakening Eyes Aura
	},
	10: { // Brawler
		"enabled": false,
		1: false, // Punch
		2: false, // Counter
		4: false, // Ground Pound
		5: false, // Bullrush
		6: false, // Haymaker
		7: false, // Roundhouse Kick
		8: false, // Piledriver
		9: false, // Jackhammer
		10: false, // Counterpunch
		13: false, // Provoke
		14: false, // Infuriate
		16: false, // Flip Kick
		21: false, // Mounting Rage
		40: false, // Quick Dash
		// Awakening

		91: false, // Awakening Eyes Aura
	},
	11: { // Ninja
		"enabled": false,
		1: false, // Combo Attack
		2: false, // Shadow Jump
		3: false, // Leaves on the Wind
		4: false, // Jagged Path
		5: false, // Impact Bomb
		6: false, // One Thousand Cuts
		7: false, // Decoy Jutsu
		8: false, // Fire Avalanche
		9: false, // Smoke Bomb
		10: false, //Retaliate
		11: false, // Focus
		12: false, // Skyfall
		13: false, // Circle of Steel
		14: false, // Double Cut
		15: false, // Burning Heart
		16: false, // Death Blossom
		17: false, // Attunement
		18: false, // Bladestorm
		19: false, // Chakra Thrust
		20: false, // Clone Jutsu
		// Awakening

		91: false, // Awakening Eyes Aura
	},
	12: { // Valkyrie
		"enabled": false,
		1: false, // Slash
		2: false, // Overhead Slash
		3: false, // Glaive Strike
		4: false, // Charge
		5: false, // Maelstrom
		6: false, // Leaping Strike
		7: false, // Spinning Death
		8: false, // Titansbane
		9: false, // Ground Bash
		10: false, // Dream Slash
		11: false, // Shining Crescent
		12: false, // Ragnarok
		13: false, // Bloodflower
		14: false, // Evasion
		15: false, // Windslash
		16: false, // Runeburst
		17: false, // Balder's Tears
		19: false, // Reclamation
		20: false, // Backstab
		21: false, // Dark Herald
		// Awakening

		91: false, // Awakening Eyes Aura
	}
}
