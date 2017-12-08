let settings = {
	
	// 1000/FPS (default: 20 ms or 1000/(50 FPS))
	frameTime: 20,
	
	// set to true if using Skill Prediction too
	skillPredictionCompatible: false,
	
	// Classes: set to false to disable Ping Compensation per class
	classes: {
		0: true, // Warrior
		1: true, // Lancer
		2: true, // Slayer
		3: true, // Berserker
		4: true, // Sorcerer
		5: true, // Archer
		6: true, // Priest
		7: true, // Mystic
		8: true, // Reaper
		9: true, // Gunner
		10: true, // Brawler
		11: true, // Ninja
		12: true // Valkyrie
	}
}
	
	// Skills: set to false to disable Ping Compensation per skill
	settings["0"] = (!settings.classes["0"]) ? false : {
		// Warrior
		1: false, // Combo Attack
		2: true, // Evasive Roll
		3: true, // Torrent of Blows
		4: true, // Rain of Blows
		5: true, // Battle Cry
		8: true, // Assault Stance
		9: true, // Defensive Stance
		10: true, // Death From Above
		11: true, // Poison Blade
		12: true, // Leaping Strike
		13: true, // Retaliate
		16: true, // Charging Slash
		17: true, // Vortex Slash
		18: true, // Combative Strike
		19: true, // Rising Fury
		20: true, // Deadly Gamble
		21: true, // Cascade of Stuns
		23: true, // Spinning Counter
		24: true, // Smoke Aggressor
		25: true, // Command: Attack
		26: true, // Command: Follow
		27: true, // Pounce
		28: true, // Traverse Cut
		29: true, // Blade Draw
		30: true, // Scythe
		31: true, // Reaping Slash
		32: true, // Cross Parry
		34: true, // Binding Sword
		35: true, // Infuriate
		36: true, // Rain of Blows (Deadly Gamble)
		37: true, // Blade Draw (Deadly Gamble)
		38: true, // Scythe (Deadly Gamble)
		39: true // Traverse Cut (Defensive Stance)
	}
	settings["1"] = (!settings.classes["1"]) ? false : {
		// Lancer
		1: false, // Combo Attack
		2: true, // Stand Fast
		3: true, // Onslaught
		4: true, // Challenging Shout
		5: true, // Shield Bash
		7: true, // Guardian Shout
		8: true, // Shield Counter
		9: true, // Leash
		10: true, // Debilitate
		11: true, // Retaliate
		12: true, // Infuriate
		13: true, // Spring Attack
		15: true, // Charging Lunge
		16: true, // Second Wind
		17: true, // Adrenaline Rush
		18: true, // Shield Barrage
		19: true, // Pledge of Protection
		20: true, // Menacing Wave
		21: true, // Lockdown Blow
		22: true, // Iron Will
		23: true, // Master's Leash
		24: true, // Chained Leash
		25: true, // Wallop
		26: true, // Backstep
		27: true // Rallying Cry
	}
	settings["2"] = (!settings.classes["2"]) ? false : {
		// Slayer
		1: false, // Combo Attack
		2: true, // Knockdown Strike
		3: true, // Whirlwind
		4: true, // Evasive Roll
		5: true, // Dash
		8: true, // Overhand Strike
		9: true, // Leaping Strike
		10: true, // Retaliate
		12: true, // Heart Thrust
		13: true, // Stunning Backhand
		14: true, // Distant Blade
		15: true, // Startling Kick
		16: true, // Fury Strike
		17: true, // Headlong Rush
		18: true, // Overpower
		19: true, // Tenacity
		20: true, // In Cold Blood
		21: true, // Exhausting Blow
		23: true, // Measured Slice
		24: true, // Eviscerate
		25: true // Ultimate Overhand Strike
	}
	settings["3"] = (!settings.classes["3"]) ? false : {
		// Berserker
		1: false, // Combo Attack
		2: true, // Axe Block
		3: true, // Thunderstrike
		4: true, // Flatten
		5: true, // Dash
		6: true, // Sweeping Strike
		7: true, // Mocking Shout
		8: true, // Fiery Rage
		10: true, // Cyclone
		11: true, // Leaping Strike
		12: true, // Unchained Anger
		13: true, // Retaliate
		15: true, // Vampiric Blow 
		16: true, // Fearsome Shout
		18: true, // Lethal Strike
		19: true, // Tenacity
		20: true, // Inescapable Doom
		21: true, // Bloodlust
		24: true, // Evasive Smash
		25: true, // Raze
		26: true, // Tackle
		27: true, // Unbreakable
		28: true, // Intimidation
		29: true, // Evasive Roll
		30: true, // Axe Counter
		31: true, // Overwhelm
		32: true // Punishing Strike
	}
	settings["4"] = (!settings.classes["4"]) ? false : {
		// Sorcerer
		1: false, // Fireball
		2: true, // Frost Sphere
		3: true, // Lightning Trap
		4: true, // Arcane Pulse
		5: true, // Mana Infusion
		6: true, // Meteor Strike
		7: true, // Backstep
		8: true, // Flame Pillar
		10: true, // Mana Barrier
		11: true, // Lightning Strike
		12: true, // Void Pulse
		13: true, // Mindblast
		16: true, // Painblast
		17: true, // Painful Trap
		18: true, // Glacial Retreat
		19: true, // Mana Siphon
		20: true, // Flaming Barrage
		21: true, // Nerve Exhaustion
		22: true, // Burning Breath
		23: true, // Mana Volley
		25: true, // Time Gyre
		26: true, // Teleport Jaunt
		27: true, // Hailstorm
		30: true, // Nova
		31: true, // Warp Barrier
		32: true, // Meteor Shower
		33: true, // Arcane Pulse (Mana Boost)
		34: true // Mana Boost
	}
	settings["5"] = (!settings.classes["5"]) ? false : {
		// Archer
		1: false, // Arrow
		2: true, // Arrow Volley
		3: true, // Radiant Arrow
		4: true, // Penetrating Arrow
		5: true, // Rain of Arrows
		6: true, // Backstep
		7: true, // Feign Death
		8: true, // Rapid Fire
		9: true, // Slow Trap
		10: true, // Stunning Trap
		12: true, // Velik's Mark
		14: true, // Retaliate
		15: true, // Incendiary Trap
		16: true, // Breakaway Bolt
		17: true, // Web Arrow
		18: true, // Close Quarters
		19: true, // Poison Arrow
		20: true, // Restraining Arrow
		21: true, // Sniper's Eye
		22: true, // Sequential Fire
		23: true, // Stunning Trap Arrow
		25: true, // Incendiary Trap Arrow
		29: true, // Thunderbolt
		31: true, // Tenacity
		32: true, // Find Weakness
		33: true // Chase
	}
	settings["6"] = (!settings.classes["6"]) ? false : { 
		// Priest
		1: false, // Divine Radiance
		2: true, // Regeneration Circle
		3: true, // Healing Circle
		5: true, // Blessing of Shakan
		6: true, // Arise
		8: true, // Mana Infusion
		10: true, // Purifying Circle
		11: true, // Metamorphic Blast
		12: true, // Resurrect
		14: true, // Summon: Party
		16: true, // Shocking Implosion
		17: true, // Prayer of Peace
		18: true, // Heal Thyself
		19: true, // Focus Heal
		22: true, // Kaia's Shield
		23: true, // Blessing of Balder
		26: true, // Fiery Escape
		27: true, // Final Reprisal
		28: true, // Mana Charge
		29: true, // Triple Nemesis
		30: true, // Plague of Exhaustion
		31: true, // Guardian Sanctuary
		32: true, // Divine Respite
		33: true, // Ishara's Lullaby
		34: true, // Restorative Burst
		35: true, // Energy Stars
		37: true, // Healing Immersion
		38: true, // Backstep
		39: true, // Grace of Resurrection
		40: true, // Zenobia's Vortex
		41: true // Divine Intervention
	}
	settings["7"] = (!settings.classes["7"]) ? false : {
		// Mystic
		1: false, // Sharan Bolt
		2: true, // Corruption Ring
		4: true, // Ancient Binding
		5: true, // Titanic Favor
		6: true, // Shara's Lash
		8: true, // Metamorphic Blast
		9: true, // Arun's Cleansing
		10: true, // Resurrect
		11: true, // Summon: Party
		12: true, // Vow of Rebirth
		13: true, // Aura of the Merciless
		14: true, // Aura of the Swift
		15: true, // Aura of the Unyielding
		16: true, // Aura of the Tenacious
		17: true, // Teleport Jaunt
		18: true, // Arun's Vitae
		21: true, // Retaliate
		22: true, // Arun's Tears
		23: true, // Metamorphic Smite
		24: true, // Volley of Curses
		25: true, // Thrall of Protection
		27: true, // Thrall of Life
		28: true, // Sonorous Dreams
		29: true, // Regression
		30: true, // Curse of Exhaustion
		31: true, // Curse of Confusion
		32: true, // Mire
		33: true, // Thrall of Vengeance
		34: true, // Thrall of Wrath
		35: true, // Command: Attack
		36: true, // Command: Follow
		37: true, // Warding Totem
		41: true, // Contagion
		42: true, // Boomerang Pulse
		43: true // Release
	}
	settings["8"] = (!settings.classes["8"]) ? false : {
		// Reaper
		1: false, // Spiral Barrage
		3: true, // Double Shear
		4: true, // Sundering Strike
		5: true, // Grim Strike
		6: true, // Death Spiral
		8: true, // Whipsaw
		9: true, // Smite
		10: true, // Pendulum Strike
		11: true, // Shadow Lash
		12: true, // Shadow Burst
		14: true, // Retaliate
		15: true, // Retribution
		16: true, // Shadow Reaping
		18: true, // Shrouded Escape
		20: true, // Cable Step
		40: true // Shadow Step
	}
	settings["9"] = (!settings.classes["9"]) ? false : {
		// Gunner
		1: false, // Blast
		2: true, // Bombardment
		3: true, // Scattershot
		4: true, // Point Blank
		5: true, // Burst Fire
		6: true, // Time Bomb
		7: true, // Arcane Barrage
		9: true, // Mana Missiles
		10: true, // Arc Bomb
		11: true, // Rocket Jump
		13: true, // Balder's Vengeance
		15: true, // Replenishment
		18: true, // HB
		19: true, // ST
		20: true, // Retaliate
		40: true // Rolling Reload
	}
	settings["10"] = (!settings.classes["10"]) ? false : {
		// Brawler
		1: false, // Punch
		2: true, // Counter
		3: true, // Divine Wrath
		4: true, // Ground Pound
		5: true, // Bullrush
		6: true, // Haymaker
		7: true, // Roundhouse Kick
		8: true, // Piledriver
		9: true, // Jackhammer
		10: true, // Counterpunch
		13: true, // Provoke
		14: true, // Infuriate
		16: true, // Flip Kick
		21: true, // Mounting Rage
		40: true // Quick Dash
	}
	settings["11"] = (!settings.classes["11"]) ? false : {
		// Ninja
		1: false, // Combo Attack
		2: true, // Shadow Jump
		3: true, // Leaves on the Wind
		4: true, // Jagged Path
		5: true, // Impact Bomb
		6: true, // One Thousand Cuts
		7: true, // Decoy Jutsu
		8: true, // Fire Avalanche
		9: true, // Smoke Bomb
		11: true, // Focus
		12: true, // Skyfall
		13: true, // Circle of Steel
		14: true, // Double Cut
		15: true, // Burning Heart
		16: true, // Death Blossom
		17: true, // Attunement
		18: true, // Bladestorm
		19: true, // Chakra Thrust
		20: true // Clone Jutsu
	}
	settings["12"] = (!settings.classes["12"]) ? false : {
		// Valkyrie
		1: false, // Slash
		2: true, // Overhead Slash
		3: true, // Glaive Strike
		4: true, // Charge
		5: true, // Maelstrom
		6: true, // Leaping Strike
		7: true, // Spinning Death
		8: true, // Titansbane
		9: true, // Ground Bash
		10: true, // Dream Slash
		11: true, // Shining Crescent
		12: true, // Ragnarok
		13: true, // Bloodflower
		14: true, // Evasion
		15: true, // Windslash
		16: true, // Runeburst
		17: true, // Balder's Tears
		18: true, // Retaliate
		19: true, // Reclamation
		20: true, // Backstab
		21: true // Dark Herald
	}
module.exports = settings