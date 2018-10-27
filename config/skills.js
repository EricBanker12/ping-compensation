/*	Notes:
	* '*' can be used in place of the skill or sub-skill to set default values

	Races:
	0 = Male Human
	1 = Female Human
	2 = Male High Elf
	3 = Female High Elf
	4 = Male Aman
	5 = Female Aman
	6 = Male Castanic
	7 = Female Castanic
	8 = Popori
	9 = Elin
	10 = Baraka
*/

module.exports = {
	0: { // Warrior
		1: { // Combo Attack
			0: true,
			1: true,
			2: true,
			3: true
		},
		2: { // Evasive Roll
			0: {
				forceClip: true,
				stamina: 500,
				instantStamina: true,
				glyphs: {
					21015: { stamina: -100 },
					21067: { stamina: -100 },
					21101: { stamina: -120 }
				}
			}
		},
		3: { // Torrent of Blows
			0: true
		},
		4: { // Rain of Blows
			0: {
				noInterrupt: [1, 2, 3, 4, 8, 9, 10, 11, 12, 13, 16, 17, 19, 22, 28, 29, 34, 36, 37, 39],
				chains: {
					18: 30,
					21: 30,
					27: 30,
					40: 30
				}
			},
			30: true
		},
		5: { // Battle Cry
			0: {
				glyphs: {
					21040: { speed: 1.5 }
				}
			}
		},
		8: { // Assault Stance
			0: { stamina: 1000 },
			50: true
		},
		9: { // Defensive Stance
			0: { stamina: 1000 },
			50: true
		},
		10: { // Death From Above
			0: true
		},
		11: { // Poison Blade
			0: true
		},
		12: { // Leaping Strike
			0: {
				glyphs: {
					21048: { speed: 1.2 },
					21082: { speed: 1.2 }
				}
			}
		},
		16: { // Charging Slash
			0: {
				type: 'dash',
				fixedSpeed: true,
				length: 1100,
				distance: 467.88,
				noRetry: true
			},
			1: true
		},
		17: { // Vortex Slash
			0: true,
			1: true,
			2: true
		},
		18: { // Combative Strike
			'*': { noInterrupt: [32] },
			0: true,
			1: true,
			2: true
		},
		19: { // Rising Fury
			0: true,
			1: true
		},
		20: { // Deadly Gamble
			0: { fixedSpeed: true }
		},
		21: { // Cascade of Stuns
			0: true
		},
		24: { // Smoke Aggressor
			0: {
				fixedSpeed: true,
				length: 481
			}
		},
		25: { // Command: Attack
			0: { fixedSpeed: true }
		},
		26: { // Command: Follow
			0: { fixedSpeed: true }
		},
		28: { // Traverse Cut
			0: {
				noInterrupt: [1, 2, 3, 4, 8, 9, 10, 12, 13, 16, 17, 19, 21, 22, 28, 29, 34, 36, 37, 39],
				chains: {
					11: 30,
					18: 30,
					27: 30,
					40: 30
				}
			},
			30: true
		},
		29: { // Blade Draw
			0: {
				noInterrupt: [1, 2, 3, 4, 8, 9, 10, 11, 12, 13, '16-0', 18, '19-0', 21, 22, 27, 29, 34, 36, 37],
				interruptibleWithAbnormal: { 102010: 3 },
				chains: {
					3: 30,
					16: 30,
					17: 30,
					19: 30,
					28: 30,
					32: 30,
					39: 30,
					40: 30
				}
			},
			30: true
		},
		30: { // Scythe
			0: {
				noInterrupt: [1, 3, 8, 9, 10, 13, 16, 17, 18, 19, 21, 22, 27, 28, 34, 39],
				chains: {
					2: 30,
					4: 30,
					11: 30,
					12: 30,
					29: 30,
					36: 30,
					37: 30,
					40: 30
				}
			},
			30: true
		},
		31: { // Reaping Slash
			0: {
				noInterrupt: [1, 2, 3, 8, 9, 10, 11, 12, 13, 16, 17, 19, 21, 22, 27, 28, 29, 34, 37, 39],
				chains: {
					4: 30,
					18: 30,
					36: 30,
					40: 30
				}
			},
			30: true
		},
		32: { // Cross Parry
			0: {
				type: 'holdInfinite',
				fixedSpeed: true,
				requiredBuff: [100200, 100201],
				stamina: 50
			}
		},
		34: { // Binding Sword
			0: true
		},
		35: { // Infuriate
			0: {  requiredBuff: [100200, 100201] }
		},
		36: { // Rain of Blows (Deadly Gamble)
			'*': { hasChains: true },
			0: {
				chains: {
					18: 30,
					21: 30,
					27: 30,
					40: 30
				}
			},
			30: true
		},
		37: { // Blade Draw (Deadly Gamble)
			'*': { hasChains: true },
			0: {
				chains: {
					3: 30,
					16: 30,
					17: 30,
					19: 30,
					28: 30,
					32: 30,
					39: 30,
					40: 30
				}
			},
			30: true
		},
		38: { // Scythe (Deadly Gamble)
			'*': { hasChains: true },
			0: {
				chains: {
					2: 30,
					4: 30,
					11: 30,
					12: 30,
					29: 30,
					36: 30,
					37: 30,
					40: 30
				}
			},
			30: true
		},
		39: { // Traverse Cut (Defensive Stance)
			'*': { hasChains: true },
			0: {
				chains: {
					11: 30,
					18: 30,
					27: 30,
					40: 30
				}
			},
			30: true
		}
	},
	1: { // Lancer
		1: { // Combo Attack
			'*': { noInterrupt: [1, 2] },
			0: true,
			1: true,
			2: true
		},
		2: { // Stand Fast
			0: {
				type: 'holdInfinite',
				fixedSpeed: true,
				stamina: 50,
				level: {
					1: {
						length: 333,
						stamina: 40,
						endType51: true
					}
				},
				noRetry: true
			}
		},
		3: { // Onslaught
			'*': {
				noInterrupt: ['1-0', '1-1', 2, 3, 8, 10, 13, 15, 21, 25, 26],
				abnormals: {
					22060: { speed: 1.25 }
				}
			},
			0: {
				chains: {
					1: 30,
					5: 30,
					18: 30
				}
			},
			30: true
		},
		4: { // Challenging Shout
			'*': {
				noInterrupt: [9, 12, 23, 24, 26],
				glyphs: {
					22056: { speed: 1.25 },
					22085: { speed: 1.25 }
				}
			},
			0: {
				chains: {
					1: 30,
					3: 30,
					5: 30,
					8: 30,
					10: 30,
					13: 30,
					15: 30,
					18: 30,
					21: 30,
					25: 30,
					28: 30
				}
			},
			30: true
		},
		5: { // Shield Bash
			1: true,
			2: {
				chains: { 10: 30 }
			},
			30: true
		},
		7: { // Guardian Shout
			0: true
		},
		8: { // Shield Counter
			0: { onlyDefenceSuccess: true }
		},
		9: { // Leash
			0: { length: [725, 850] }
		},
		10: { // Debilitate
			'*': { noInterrupt: [2, 3, 5, 10, 13, 21, 25, 26] },
			0: {
				chains: {
					1: 30,
					18: 30
				}
			},
			30: true
		},
		11: { // Retaliate
			0: {
				type: 'retaliate',
				noRetry: true
			}
		},
		12: { // Infuriate
			0: true
		},
		13: { // Spring Attack
			0: {
				noInterrupt: ['1-0', '1-1', 2, 3, 13, 15, 25, 26],
				chains: {
					1: 30,
					5: 30,
					8: 30,
					10: 30,
					18: 30,
					21: 30
				}
			},
			30: true
		},
		15: { // Charging Lunge
			0: {
				type: 'dash',
				fixedSpeed: true,
				length: 1125,
				distance: 474.5,
				noInterrupt: [15]
			},
			1: true
		},
		16: { // Second Wind
			0: {
				noWeapon: true,
				fixedAnimSpeed: true
			}
		},
		17: { // Adrenaline Rush
			0: { fixedAnimSpeed: true }
		},
		18: { // Shield Barrage
			0: {
				abnormals: {
					201550: { speed: 1.2 }
				}
			},
			1: true
		},
		19: { // Pledge of Protection
			0: { fixedAnimSpeed: true }
		},
		21: { // Lockdown Blow
			1: true,
			2: {
				chains: {
					10: 30,
					18: 30
				}
			},
			30: true
		},
		22: { // Iron Will
			0: { fixedAnimSpeed: true }
		},
		23: { // Master's Leash
			0: {
				length: [725, 850],
				requiredBuff: 201000
			}
		},
		24: { // Chained Leash
			0: { length: [725, 850] }
		},
		25: { // Wallop
			0: {
				noInterrupt: [1, 2, 3, 5, 25, 26],
				chains: {
					8: 30,
					10: 30,
					13: 30,
					15: 30,
					18: 30,
					21: 30
				}
			},
			30: true
		},
		26: { // Backstep
			0: {
				distance: -150,
				forceClip: true,
				stamina: 800,
				instantStamina: true,
				noInterrupt: [26],
				glyphs: {
					22067: { stamina: -100 },
					22089: { stamina: -100 }
				}
			}
		},
		27: { // Rallying Cry
			0: true
		},
		28: { // Super Leap
			0: {
				noInterrupt: [1, 3, 4, 5, 9, 10, 12, 13, 18, 21, 23, 24, 26, 28],
				chains: {
					15: 1,
					25: 1
				}
			},
			1: true
		},
		29: { // Guardian's Barrier
			0: {
				type: 'holdInfinite',
				fixedSpeed: true,
				length: 700,
				endType51: true
			}
		},
		30: { // Divine Protection
			0: true
		}
	},
	2: { // Slayer
		1: { // Combo Attack
			'*': { noRetry: true },
			0: true,
			1: true,
			2: true,
			3: true
		},
		2: { // Knockdown Strike
			'*': {
				length: 2385,
				distance: 220.47,
				noInterrupt: [1, 2, 3, 4, 6, 8, 10, 12, 13, 15, 16, 17, 24, 25],
				abnormals: {
					23070: {speed: 1.25}
				},
				chains: { 14: 30 }
			},
			0: true,
			1: true,
			2: true,
			30: {
				length: 2400,
				distance: 300
			}
		},
		3: { // Whirlwind
			0: {
				length: 3125,
				abnormals: {
					23080: { speed: 1.25 }
				}
			}
		},
		4: { // Evasive Roll
			'*': { hasChains: true },
			0: {
				length: 900,
				distance: 150,
				forceclip: true,
				abnormalChains: { 40300: 30 },
				race: {
					8: { length: 1185 } // Popori
				}
			},
			30: {
				length: 900,
				distance: 150,
				forceclip: true
			}
		},
		5: { // Dash
			0: {
				noWeapon: true,
				fixedSpeed: true,
				length: 700
			}
		},
		8: { // Overhand Strike
			0: {
				length: 3365,
				distance: 170,
				noInterrupt: ['1-0', '1-1', '1-2', 4, 6, 8, 10, '14-0', '14-1', 17, 25],
				abnormals: {
					300801: { skill: 250100 }
				},
				chains: {
					1: 30,
					2: 30,
					3: 30,
					9: 30,
					12: 30,
					13: 30,
					14: 30,
					15: 30,
					16: 30,
					24: 30
				}
			},
			30: {
				length: 1325,
				distance: 169.65,
				abnormals: {
					300801: { skill: 250130 }
				}
			}
		},
		9: { // Leaping Strike
			0: {
				length: 2175,
				distance: 250
			}
		},
		12: { // Heart Thrust
			0: {
				length: 2315,
				distance: 230,
				abnormals: {
					23060: { speed: 1.25 },
					23061: { speed: 1.35 }
				}
			}
		},
		13: { // Stunning Backhand
			0: {
				length: 2125,
				distance: 76.71
			}
		},
		14: { // Distant Blade
			'*': {
				triggerAbnormal: { 23220: 3000 },
				consumeAbnormalEnd: 23220
			},
			0: {
				length: 600,
				distance: 75
			},
			1: {
				length: 600,
				distance: 100.02,
			},
			2: {
				length: 1500,
				distance: 104.82
			}
		},
		15: { // Startling Kick
			0: {
				length: 1475,
				distance: -175,
				forceClip: true,
				glyphs: {
					23060: { speed: 1.25 }
				}
			}
		},
		16: { // Fury Strike
			0: {
				length: 1000,
				distance: 142.53
			}
		},
		17: { // Headlong Rush
			0: {
				type: 'dash',
				fixedSpeed: true,
				length: 1000,
				distance: 413
			}
		},
		18: { // Overpower
			0: {
				fixedSpeed: true,
				length: 200
			}
		},
		19: { // Tenacity
			'*': {
				fixedSpeed: true,
				length: 700
			}
		},
		20: { // In Cold Blood
			0: {
				fixedSpeed: true,
				length: 1185
			}
		},
		23: { // Measured Slice
			'*': {
				distance: 190
			},
			0: {
				length: 3685,
				noInterrupt: [1, 2, 3, 4, 6, 9, 12, 13, 15, 17, 22],
				chains: {
					8: 30,
					24: 30,
					25: 30
				}
			},
			30: { length: 1670 }
 		},
		24: { // Eviscerate
			'*': {
				distance: 50
			},
			0: {
				length: 1900,
				noInterrupt: ['1-0', '1-1', '1-2', 4, 6, 14, 16, 17, 22, 24],
				chains: {
					1: 30,
					2: 30,
					3: 30,
					8: 30,
					9: 30,
					12: 30,
					13: 30,
					15: 30,
					25: 30
				}
			},
			30: { length: 1500 }
		},
		25: { // Ultimate Overhand Strike
			'*': {
				distance: 170
			},
			0: { length: 3365 },
			30: { length: 1300 }
		}
	},
	3: { // Berserker
		1: { // Combo Attack
			'*': { noRetry: true },
			0: true,
			1: true,
			2: true,
			3: true
		},
		2: { // Axe Block
			'*': {
				type: 'holdInfinite',
				consumeAbnormal: 401701
			},
			0: { fixedSpeed: true },
			30: true,
			31: { fixedSpeed: true }
		},
		3: { // Thunder Strike
			'*': {
				abnormals: {
					24170: { speed: 1.25 }
				},
				noRetry: true
			},
			0: {
				type: 'charging',
				length: [650, 650, 650],
				noInterrupt: [2],
				overcharge: 450,
				glyphs: {
					24067: { chargeSpeed: 0.25 }
				},
				abnormals: {
					24130: { chargeSpeed: 0.3 },
					24170: { speed: 1.25 },
					400500: { chargeSpeed: 0.2 },
					400501: { chargeSpeed: 0.4 },
					400508: { chargeSpeed: 0.4 },
					401150: { chargeSpeed: 0.2 }
				},
				level: [
					{ length: 800 },
					{ length: [800, 800] },
					{ length: [800, 800] }
				]
			},
			10: { rearCancelStartTime: 455 },
			11: { rearCancelStartTime: 455 },
			12: { rearCancelStartTime: 455 },
			13: { rearCancelStartTime: 455 }
		},
		4: { // Flatten
			'*': {
				glyphs: {
					24008: { speed: 1.25 },
					24050: { speed: 1.25 }
				}
			},
			0: {
				noInterrupt: ['3-10', '3-11', '3-12', '3-13', 4, '10-10', '10-11', '10-12', 11, '10-13', '15-10', '15-11', '15-12', '15-13', '15-14', '18-10', '18-11', '18-12', '18-13', 24, 26, 28, 29, '32-0'],
				chains: {
					6: 30,
					25: 30,
					31: 30,
					32: 30
				}
			},
			1: {
				chains: {
					6: 31,
					25: 31,
					31: 31,
					32: 31
				}
			},
			30: true,
			31: true
		},
		5: { // Dash
			0: {
				noWeapon: true,
				fixedAnimSpeed: true
			}
		},
		6: { // Sweeping Strike
			'*': { noRetry: true },
			0: true,
			30: true
		},
		8: { // Fiery Rage
			0: true,
			1: true,
			30: true
		},
		10: { // Cyclone
			0: {
				type: 'charging',
				length: [650, 650, 650],
				overcharge: 365,
				canInstantCharge: true,
				glyphs: {
					24009: { chargeSpeed: 0.25 },
					24052: { chargeSpeed: 0.25 },
					24096: { chargeSpeed: 0.3 }
				},
				abnormals: {
					24190: { chargeSpeed: 0.3 },
					400500: { chargeSpeed: 0.2 },
					400501: { chargeSpeed: 0.4 },
					400508: { chargeSpeed: 0.4 },					
					401150: { chargeSpeed: 0.2 }
				},
				level: [
					{ length: 800 },
					{ length: [800, 800] },
					{ length: [800, 800] }
				],
				noRetry: true
			},
			10: {
				rearCancelStartTime: 300,
				noRetry: true
			},
			11: {
				rearCancelStartTime: 300,
				noRetry: true
			},
			12: {
				rearCancelStartTime: 300,
				noRetry: true
			},
			13: { rearCancelStartTime: 300 }
		},
		11: { // Leaping Strike
			0: true
		},
		13: { // Retaliate
			0: {
				type: 'retaliate',
				length: 1633,
				noRetry: true
			}
		},
		15: { // Vampiric Blow
			'*': { noRetry: true },
			0: {
				type: 'charging',
				length: [800, 800, 800],
				noInterrupt: [2],
				overchargeReleaseChain: 14,
				abnormals: {
					400500: { chargeSpeed: 0.2 },
					400501: { chargeSpeed: 0.4 }
				}
			},
			10: true,
			11: true,
			12: true,
			13: true,
			14: true
		},
		16: { // Fearsome Shout
			0: { fixedAnimSpeed: true }
		},
		18: { // Lethal Strike
			0: {
				noInterrupt: [1, 4, 6, 13, 18, 24, 25, 26, 27, 28, 29, 31, 34, 35, 36, 37],
				chains: {
					// Correct
					/*3: 30,
					10: 30,
					11: 30,
					15: 30*/

					// Workaround: C_CANCEL_SKILL is not emulated properly for charging skills (TODO)
					'3-10': 30,
					'3-11': 30,
					'3-12': 30,
					'3-13': 30,
					'10-10': 30,
					'10-11': 30,
					'10-12': 30,
					'10-13': 30,
					11: 30,
					'15-10': 30,
					'15-11': 30,
					'15-12': 30,
					'15-13': 30,
					'15-14': 30
				}
			},
			30: true
		},
		19: { // Triumphant Shout
			0: { fixedAnimSpeed: true }
		},
		20: { // Inescapable Doom
			0: { fixedAnimSpeed: true }
		},
		21: { // Bloodlust
			0: { fixedAnimSpeed: true }
		},
		24: { // Evasive Smash
			0: {
				type: 'storeCharge',
				length: 1000
			},
			5: { type: 'grantCharge' },
			10: true,
			11: true,
			12: true,
			13: true
		},
		25: { // Raze
			'*': {
				glyphs: {
					24078: { speed: 1.25 }
				}
			},
			0: {
				noInterrupt: [4, 6, '6-30', 11, '18-10', '18-11', '18-12', '18-13', 24, 26, 28, 29, '32-0'],
				chains: {
					1: 30,
					3: 30,
					10: 30,
					'15-10': 30,
					'15-11': 30,
					'15-12': 30,
					'15-13': 30,
					'15-14': 30,
					30: 30,
					32: 30
				}
			},
			1: {
				chains: {
					1: 31,
					3: 31,
					10: 31,
					'15-10': 31,
					'15-11': 31,
					'15-12': 31,
					'15-13': 31,
					'15-14': 31,
					30: 31,
					32: 31
				}
			},
			30: true,
			31: true
		},
		26: { // Tackle
			0: true
		},
		27: { // Unbreakable
			0: {
				noInterrupt: [1, '3-10', '3-11', '3-12', '3-13', 4, 6, '8-30', '10-10', '10-11', '10-12', '10-13', 11, 13, '15-10', '15-11', '15-12', '15-13', '15-14', 18, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33],
				interruptibleWithAbnormal: { 401705: 33 }
			},
			30: true
		},
		28: { // Intimiation
			0: true,
			50: true
		},
		29: { // Evasive Roll
			0: {
				noInterrupt: [29],
				forceClip: true
			}
		},
		30: { // Axe Counter
			'*': {
				noInterrupt: [1, '3-10', '3-11', '3-12', '3-13', 4, 6, '8-30', '10-10', '10-11', '10-12', '10-13', 11, 12, 13, '15-10', '15-11', '15-12', '15-13', '15-14', '18-10', '18-11', '18-12', '18-13', 24, 25, 26, 27, 28, 29, 30, 31, 32],
				requiredBuff: 401402
			},
			0: true,
			30: true
		},
		31: { // Overwhelm
			0: {
				type: 'dash',
				fixedSpeed: true,
				length: 1115,
				distance: 467.88
			},
			1: true
		},
		32: { // Punishing Strike
			0: true,
			1: true
		},
		33: { // Unleash
			0: true
		},
		34: { // Unleash: Dexter
			'*': {
				requiredBuff: 401705,
				noRetry: true
			},
			0: {
				noInterrupt: [34, 36],
				chains: {
					33: 30,
					35: 30,
					37: 30
				}
			},
			30: true,
			31: true
		},
		35: { // Unleash: Sinister
			'*': {
				requiredBuff: 401705,
				noRetry: true
			},
			0: {
				noInterrupt: [35, 36, 37],
				chains: {
					33: 1,
					34: 30
				}
			},
			1: true,
			30: true,
			31: true
		},
		36: { // Unleash: Rampage
			'*': {
				requiredBuff: 401705,
				abnormals: {
					401708: { speed: 1.2 }
				},
				noRetry: true
			},
			0: {
				noInterrupt: [37],
				chains: {
					34: 30,
					35: 30,
					36: 30
				}
			},
			30: true,
			31: true
		},
		37: { // Unleash: Beast Fury
			'*': {
				noInterrupt: [37],
				requiredBuff: 401705
			},
			0: {
				chains: {
					33: 30,
					34: 30,
					35: 30,
					36: 30
				}
			},
			30: true
		},
		910: { // Apex Urgency
			0: { fixedAnimSpeed: true }
		}
	},
	4: { // Sorcerer
		1: { // Fireball
			0: true
		},
		2: { // Frost Sphere
			0: true
		},
		3: { // Lightning Trap
			0: {
				abnormals: {
					25090: { speed: 1.4 }
				}
			}
		},
		4: { // Arcane Pulse
			'*': { noRetry: true },
			0: {
				type: 'charging',
				length: [800, 800],
				abnormals: {
					25140: { chargeSpeed: 0.3 }
				}
			},
			10: true,
			11: true,
			12: true
		},
		5: { // Mana Infusion
			0: true
		},
		6: { // Meteor Strike
			0: {
				glyphs: {
					25003: { speed: 1.17 },
					25069: { speed: 1.25 }
				},
				abnormals: {
					25100: { speed: 1.25 }
				}
			}
		},
		7: { // Backstep
			0: {
				distance: -200,
				forceClip: true
			}
		},
		8: { // Flame Pillar
			0: {
				abnormals: {
					25070: { speed: 1.25 }
				}
			}
		},
		10: { // Mana Barrier
			0: true
		},
		11: { // Lightning Strike
			0: {
				length: 840,
				checkReset: true,
				race: {
					9: { length: 800 } // Elin
				}
			}
		},
		12: { // Void Pulse
			0: true
		},
		13: { // Mindblast
			0: {
				glyphs: {
					25048: { speed: 1.3 }
				},
				abnormals: {
					25110: { speed: 1.4 }
				}
			}
		},
		16: { // Painblast
			0: true
		},
		17: { // Painful Trap
			0: true
		},
		18: { // Glacial Retreat
			0: {
				length: 1100,
				distance: -187.5,
				forceClip: true
			}
		},
		19: { // Mana Siphon
			'*': {
				length: 900,
				noRetry: true
			},
			0: {
				type: 'charging',
				length: [1005, 1005],
				autoRelease: 0
			},
			10: true,
			11: true,
			12: true
		},
		20: { // Flaming Barrage
			'*': { noRetry: true },
			0: {
				type: 'lockon',
				fixedAnimSpeed: true
			},
			10: {
				type: 'lockonCast',
				glyphs: {
					25001: { speed: 1.3 },
					25096: { speed: 1.4 }
				},
				abnormals: {
					25060: { speed: 1.25 }
				}
			}
		},
		21: { // Nerve Exhaustion
			'*': { noRetry: true },
			0: {
				type: 'lockon',
				fixedAnimSpeed: true
			},
			10: {
				type: 'lockonCast',
				fixedAnimSpeed: true
			}
		},
		22: { // Burning Breath
			'*': { noRetry: true },
			0: {
				type: 'lockon',
				fixedAnimSpeed: true
			},
			10: {
				type: 'lockonCast',
				fixedAnimSpeed: true
			}
		},
		23: { // Mana Volley
			'*': { noRetry: true },
			0: {
				type: 'lockon',
				fixedAnimSpeed: true
			},
			10: {
				type: 'lockonCast',
				fixedAnimSpeed: true
			}
		},
		25: { // Time Gyre
			'*': { noRetry: true },
			0: {
				type: 'lockon',
				fixedAnimSpeed: true
			},
			10: {
				type: 'lockonCast',
				fixedAnimSpeed: true
			}
		},
		26: { // Teleport Jaunt
			0: {
				type: 'teleport',
				distance: [0, 333],
				noInterrupt: [26],
				teleportStage: 1,
				noRetry: true
			}
		},
		27: { // Hailstorm
			0: true
		},
		30: { // Nova
			0: {
				glyphs: {
					25092: { speed: 1.3 }
				}
			}
		},
		31: { // Warp Barrier
			10: true,
			20: true
		},
		32: { // Meteor Strike (Mana Boost)
			'*': {
				glyphs: {
					25003: { speed: 1.17 },
					25069: { speed: 1.25 }
				},
				noRetry: true
			},
			0: true,
			50: true
		},
		33: { // Arcane Pulse (Mana Boost)
			'*': { noRetry: true },
			10: true,
			11: true,
			12: true,
			50: true
		},
		34: { // Mana Boost
			0: true
		},
		36: { // Fusion
			0: true,
			//20: true, // TODO: Needs S_SKILL_CATEGORY implementation (always disabled - non-critical)
			30: true
		},
		39: { // Implosion
			0: {
				requiredBuff: 502052,
				distance: [0, 0, -219.55]
			}
		},
		910: { // Apex Urgency
			0: { fixedAnimSpeed: true }
		}
	},
	5: { // Archer
		1: { // Arrow
			0: { length: 400 }
		},
		2: { // Arrow Volley
			'*': { noRetry: true },
			0: {
				type: 'lockon',
				fixedAnimSpeed: true
			},
			10: { type: 'lockonCast' }
		},
		3: { // Radiant Arrow
			'*': { noRetry: true },
			0: {
				type: 'charging',
				length: [600, 600, 600],
				abnormals: {
					26180: { chargeSpeed: 0.3 },
					601450: { chargeSpeed: 0.5 }
				}
			},
			10: { distance: -100 },
			11: { distance: -100 },
			12: { distance: -100 },
			13: { distance: -100 }
		},
		4: { // Penetrating Arrow
			'*': { noRetry: true },
			0: {
				type: 'charging',
				length: [800, 800, 800],
				abnormals: {
					26160: { chargeSpeed: 0.3 },
					26170: { chargeSpeed: 0.3 },
					26171: { chargeSpeed: 0.4 },
					26190: { chargeSpeed: 0.3 },
					601450: { chargeSpeed: 0.5 }
				}
			},
			10: { distance: -50 },
			11: { distance: -50 },
			12: { distance: -50 },
			13: { distance: -50 }
		},
		5: { // Rain of Arrows
			0: {
				glyphs: {
					26077: { speed: 1.4 }
				},
				abnormals: {
					902: { speed: 1.15 },
					911: { speed: 1.15 },
					912: { speed: 1.15 },
					913: { speed: 1.15 },
					916: { speed: 1.15 },
					917: { speed: 1.15 },
					920: { speed: 1.225 },
					921: { speed: 1.225 },
					922: { speed: 1.225 },
					999010000: { speed: 1.15 }
				}
			}
		},
		6: { // Backstep
			0: {
				distance: -200,
				forceClip: true
			}
		},
		7: { // Feign Death
			0: { distance: [-114.05, 0, 0] }
		},
		8: { // Rapid Fire
			'*': { noRetry: true },
			0: { noInterrupt: [6] },
			1: {
				level: {
					5: { noInterrupt: [6] }
				}
			},
			2: true,
			3: true,
			4: true,
			5: true,
			6: true,
			7: true,
			11: true,
			12: true,
			13: true,
			14: true
		},
		9: { // Slow Trap
			0: true
		},
		10: { // Stunning Trap
			0: true
		},
		12: { // Velik's Mark
			0: true
		},
		15: { // Incendiary Trap
			0: true
		},
		16: { // Breakaway Bolt
			0: {
				distance: -250,
				forceClip: true
			}
		},
		17: { // Web Arrow
			0: { length: 533 }
		},
		18: { // Close Quarters
			0: true,
			1: true
		},
		19: { // Poison Arrow
			0: true
		},
		20: { // Restraining Arrow
			0: true
		},
		22: { // Sequential Fire
			0: {
				requiredBuff: 600200,
				noRetry: true
			}
		},
		25: { // Incendiary Trap Arrow
			0: true
		},
		29: { // Thunderbolt
			0: {
				distance: -100,
				glyphs: {
					26089: { speed: 1.3 },
					26102: { speed: 1.3 }
				}
			}
		},
		31: { // Tenacity
			0: { fixedAnimSpeed: true }
		},
		32: { // Find Weakness
			0: true
		},
		33: { // Chase
			0: {
				type: 'dash',
				fixedSpeed: true,
				length: 1000,
				distance: 413
			}
		}
	},
	6: { // Priest
		1: { // Divine Radiance
			0: true,
			1: true,
			2: true,
			3: true
		},
		2: { // Regeneration Circle
			0: {
				abnormals: {
					902: { speed: 1.15 },
					911: { speed: 1.15 },
					912: { speed: 1.15 },
					913: { speed: 1.15 },
					916: { speed: 1.15 },
					917: { speed: 1.15 },
					920: { speed: 1.225 },
					921: { speed: 1.225 },
					922: { speed: 1.225 },
					999010000: { speed: 1.15 }
				}
			}
		},
		3: { // Healing Circle
			0: {
				chains: {
					19: 30,
					26: 30,
					38: 30
				}
			},
			30: true
		},
		5: { // Blessing of Shakan
			0: true
		},
		6: { // Arise
			0: true
		},
		8: { // Mana Infusion
			0: {
				length: 4595,
				glyphs: {
					28044: { speed: 1.25 }
				},
				race: {
					0: { length: 4625 }
				}
			}
		},
		10: { // Purifying Circle
			0: true
		},
		11: { // Metamorphic Blast
			0: true,
			1: true,
			2: true
		},
		12: { // Resurrect
			0: {
				glyphs: {
					28045: { speed: 1.3 }
				},
				abnormals: {
					902: { speed: 1.15 },
					911: { speed: 1.15 },
					912: { speed: 1.15 },
					913: { speed: 1.15 },
					916: { speed: 1.15 },
					917: { speed: 1.15 },
					920: { speed: 1.225 },
					921: { speed: 1.225 },
					922: { speed: 1.225 },
					999010000: { speed: 1.15 }
				}
			}
		},
		14: { // Summon: Group
			0: true
		},
		16: { // Shocking Implosion
			0: {
				chains: {
					11: 30,
					27: 30
				}
			},
			10: {
				chains: {
					11: 11,
					27: 11
				}
			},
			11: true,
			20: {
				chains: {
					11: 21,
					27: 21
				}
			},
			21: true,
			30: true
		},
		18: { // Heal Thyself
			0: { noWeapon: true }
		},
		19: { // Focus Heal
			'*': { noRetry: true },
			0: {
				type: 'lockon',
				fixedAnimSpeed: true
			},
			10: { type: 'lockonCast' }
		},
		22: { // Kaia's Shield
			0: true
		},
		26: { // Fiery Escape
			0: {
				distance: -250.5,
				forceClip: true
			}
		},
		27: { // Final Reprisal
			'*': { noInterrupt: [27] },
			0: {
				chains: {
					11: 30,
					16: 30,
					29: 30,
					40: 30
				}
			},
			10: {
				chains: {
					11: 11,
					16: 11,
					29: 11,
					40: 11
				}
			},
			11: true,
			20: {
				chains: {
					11: 21,
					16: 21,
					29: 21,
					40: 21
				}
			},
			21: true,
			30: true
		},
		28: { // Mana Charge / Divine Charge
			'*': { noRetry: true },
			0: {
				type: 'charging',
				length: [800, 1600],
				autoRelease: 0,
				glyphs: {
					28031: { chargeSpeed: 0.25 }
				},
				level: {
					1: {
						length: [900, 900, 900],
						autoRelease: 3200
					}
				}
			},
			10: true,
			11: true,
			12: true,
			13: true
		},
		29: { // Triple Nemesis
			0: { length: 800 },
			1: { length: 800 },
			2: { length: 1250 }
		},
		30: { // Plague of Exhaustion
			'*': {
				fixedAnimSpeed: true,
				noRetry: true
			},
			0: { type: 'lockon' },
			10: {
				type: 'lockonCast',
				length: 1430
			}
		},
		31: { // Guardian Sanctuary
			0: { fixedAnimSpeed: true }
		},
		32: { // Divine Prayer
			0: {
				noWeapon: true,
				fixedAnimSpeed: true
			}
		},
		33: { // Ishara's Lulliby
			'*': {
				fixedAnimSpeed: true,
				noRetry: true
			},
			0: { type: 'lockon' },
			10: {
				type: 'lockonCast',
				length: [300, 1430]
			}
		},
		34: { // Restorative Burst
			0: true
		},
		35: { // Energy Stars
			'*': {
				fixedAnimSpeed: true,
				noRetry: true
			},
			0: { type: 'lockon' },
			10: {
				type: 'lockonCast',
				length: 1430
			}
		},
		37: { // Healing Immersion
			'*': {
				fixedAnimSpeed: true,
				noRetry: true
			},
			0: {
				type: 'lockon',
				noInterrupt: [37],
				partyOnly: true
			},
			10: {
				type: 'lockonCast',
				length: 1430,
				noInterrupt: ['37-10']
			}
		},
		38: { // Backstep
			0: {
				distance: -200,
				forceClip: true
			}
		},
		39: { // Grace of Resurrection
			0: true
		},
		40: { // Zenobia's Vortex
			0: true,
			10: true,
			20: true
		},
		41: { // Divine Intervention / Mass Divine Intervention
			'*': { noRetry: true },
			0: {
				type: 'lockon',
				fixedAnimSpeed: true,
				partyOnly: true
			},
			10: {
				type: 'lockonCast',
				length: 925
			}
		},
		42: { // Holy Burst
			20: true,
			30: true
		},
		43: { // Edict of Judgement
			0: true,
			50: true
		}
	},
	7: { // Mystic
		1: { // Sharan Bolt
			0: true,
			1: true,
			2: true,
			3: true
		},
		2: { // Corruption Ring
			0: {
				type: 'hold',
				chainOnRelease: 11
			},
			11: true,
			12: true
		},
		5: { // Titanic Favor
			'*': { noRetry: true },
			0: {
				type: 'lockon',
				fixedSpeed: true
			},
			10: { type: 'lockonCast' }
		},
		6: { // Shara's Lash
			0: true
		},
		8: { // Metamorphic Blast
			0: {
				noInterrupt: [1, 2, 6, 17],
				checkReset: true,
				chains: {
					8: 30,
					23: 30
				}
			},
			30: true
		},
		9: { // Arun's Cleansing
			'*': { noRetry: true },
			0: {
				type: 'lockon',
				fixedSpeed: true
			},
			10: { type: 'lockonCast' }
		},
		10: { // Resurrect
			0: {
				glyphs: {
					27049: { speed: 1.2 },
					27079: { speed: 1.2 }
				},
				abnormals: {
					902: { speed: 1.25 },
					911: { speed: 1.25 },
					912: { speed: 1.25 },
					913: { speed: 1.25 },
					916: { speed: 1.25 },
					917: { speed: 1.25 },
					920: { speed: 1.375 },
					921: { speed: 1.375 },
					922: { speed: 1.375 },
					999010000: { speed: 1.25 }
				}
			}
		},
		11: { // Summon: Group
			0: { length: 4445 }
		},
		12: { // Vow of Rebirth
			'*': { noRetry: true },
			0: {
				type: 'lockon',
				fixedSpeed: true,
				partyOnly: true
			},
			10: {
				type: 'lockonCast',
				length: 1950,
				race: {
					4: { length: 939 }
				}
			}
		},
		13: { // Aura of the Merciless
			0: true,
			50: true
		},
		14: { // Aura of the Swift
			0: true,
			50: true
		},
		15: { // Aura of the Unyielding
			0: true,
			50: true
		},
		16: { // Aura of the Tenacious
			0: true,
			50: true
		},
		17: { // Teleport Jaunt
			0: {
				type: 'teleport',
				distance: [0, 333],
				noInterrupt: [17],
				teleportStage: 1,
				cooldownEnd: 200,
				noRetry: true
			}
		},
		18: { // Arun's Vitae
			'*': { noRetry: true },
			0: {
				type: 'charging',
				length: 1240,
				chargeLevels: [10, 10],
				autoRelease: 10,
				abnormals: {
					27070: { chargeSpeed: 0.25 },
					27080: { chargeSpeed: 0.25 }
				}
			},
			10: {
				race: {
					9: { length: 833 }
				}
			}
		},
		21: { // Retaliate
			0: {
				type: 'retaliate',
				noRetry: true
			}
		},
		22: { // Arun's Tears
			'*': { noRetry: true },
			0: {
				type: 'charging',
				length: 1240,
				chargeLevels: [10, 10],
				autoRelease: 10,
				abnormals: {
					27100: { chargeSpeed: 0.25 }
				}
			},
			10: {
				race: {
					9: { length: 833 }
				}
			}
		},
		23: { // Metmorphic Smite
			0: {
				noInterrupt: [1, 2, 6, 17, 23],
				chains: { 8: 30 }
			},
			30: true
		},
		24: { // Volley of Curses
			'*': {
				fixedSpeed: true,
				noRetry: true
			},
			0: { type: 'lockon' },
			10: {
				type: 'lockonCast',
				fixedAnimSpeed: true
			}
		},
		25: { // Thrall of Protection
			'*': {
				fixedAnimSpeed: true,
				length: [1000, 1700],
				cooldownEnd: 300
			},
			0: true,
			10: true,
			30: { length: [500, 700] }
		},
		27: { // Thrall of Life
			'*': {
				fixedAnimSpeed: true,
				length: [229, 438],
				cooldownEnd: 300
			},
			0: true,
			10: true,
			30: { length: [500, 700] }
		},
		28: { // Sonorous Dreams
			'*': { noRetry: true },
			0: {
				type: 'lockon',
				fixedSpeed: true
			},
			10: {
				type: 'lockonCast',
				fixedAnimSpeed: true,
				length: 1400
			}
		},
		29: { // Regression
			0: { fixedAnimSpeed: true }
		},
		30: { // Curse of Exhaustion
			'*': { noRetry: true },
			0: {
				type: 'lockon',
				fixedSpeed: true
			},
			10: {
				type: 'lockonCast',
				fixedAnimSpeed: true,
				length: 1400
			}
		},
		31: { // Curse of Confusion
			'*': { noRetry: true },
			0: {
				type: 'lockon',
				fixedSpeed: true
			},
			10: {
				type: 'lockonCast',
				fixedAnimSpeed: true,
				length: 1400
			}
		},
		32: { // Mire
			'*': { noRetry: true },
			0: {
				type: 'lockon',
				fixedSpeed: true
			},
			10: {
				type: 'lockonCast',
				fixedAnimSpeed: true,
				length: 1400
			}
		},
		33: { // Thrall of Vengeance
			'*': {
				fixedAnimSpeed: true,
				length: [267, 511],
				cooldownEnd: 300
			},
			0: true,
			10: true,
			30: { length: [500, 700] }
		},
		34: { // Thrall of Wrath
			'*': {
				fixedAnimSpeed: true,
				length: [1000, 1700],
				cooldownEnd: 300
			},
			0: true,
			10: true,
			30: { length: [500, 1200] }
		},
		35: { // Command: Attack
			0: { fixedAnimSpeed: true }
		},
		36: { // Command: Follow
			0: { fixedAnimSpeed: true }
		},
		37: { // Warding Totem
			0: true
		},
		41: { // Contagion
			'*': { noRetry: true },
			0: {
				type: 'lockon',
				fixedSpeed: true
			},
			10: { type: 'lockonCast' }
		},
		42: { // Boomerang Pulse
			0: {
				noInterrupt: [42],
				cooldownEnd: 300
			}
		},
		43: { // Unsummon Thrall
			0: true
		},
		44: { // Mass Teleport
			0: {
				type: 'teleport',
				distance: [0, 333],
				noInterrupt: [17],
				teleportStage: 1,
				cooldownEnd: 200,
				noRetry: true
			}
		},
		45: { // Thrall Augmentation
			0: true,
			50: true
		},
		47: { // Arunic Release
			0: { length: 1060 }
		},
		48: { // Thrall Lord
			0: { fixedSpeed: true }
		},
		910: { // Apex Urgency
			0: { fixedAnimSpeed: true }
		}
	},
	8: { // Reaper
		'*': { consumeAbnormal: [10151020, 10151021, 10151022, 10151023, 10151040, 10151041, 10151042] },
		1: { // Spiral Barrage
			'*': {
				inPlace: {
					movement: [{
						duration: 766,
						speed: 1,
						unk: 1,
						distance: 0
					},
					{
						duration: 346,
						speed: 1,
						unk: 1,
						distance: 0
					}],
					distance: 0
				},
				noInterrupt: [3, 4, 12, 20],
				triggerAbnormal: { 10151020: 2000 },
				chains: { 1: 1 },
				noRetry: true
			},
			0: true,
			1: true,
			2: {
				inPlace: {
					movement: [{
						duration: 950,
						speed: 1,
						unk: 1,
						distance: 0
					},
					{
						duration: 346,
						speed: 1,
						unk: 1,
						distance: 0
					}],
					distance: 0
				},
				triggerAbnormal: { 10151021: 2000 }
			},
			3: {
				inPlace: {
					movement: [{
						duration: 616,
						speed: 1,
						unk: 1,
						distance: 0
					},
					{
						duration: 346,
						speed: 1,
						unk: 1,
						distance: 0
					}],
					distance: 0
				},
				triggerAbnormal: { 10151022: 1800 }
			},
			4: {
				inPlace: {
					movement: [{
						duration: 1150,
						speed: 1,
						unk: 1,
						distance: 0
					},
					{
						duration: 346,
						speed: 1,
						unk: 1,
						distance: 0
					}],
					distance: 0
				},
				triggerAbnormal: { 10151023: 2000 }
			},
			5: {
				inPlace: {
					movement: [{
						duration: 2016,
						speed: 1,
						unk: 1,
						distance: 0
					}],
					distance: 0
				}
			}
		},
		3: { // Double Shear
			'*': {
				noInterrupt: ['1-0', '1-2', 3, 4, 12, 20],
				abnormals: {
					29030: { speed: 1.25 }
				}
			},
			0: {
				chains: {
					1: 30,
					5: 30,
					6: 30,
					8: 30,
					9: 30,
					10: 30,
					11: 30
				}
			},
			30: true,
			40: {
				chains: {
					1: 41,
					5: 41,
					6: 41,
					8: 41,
					9: 41,
					10: 41,
					11: 41
				}
			},
			41: true
		},
		4: { // Sundering Strike
			'*': {
				noInterrupt: [1, 4, 8, 9, 10, 11, 12, 20],
				noRetry: true
			},
			0: {
				chains: {
					1: null,
					3: null,
					4: null,
					5: null,
					6: null,
					8: null,
					9: null,
					10: null,
					11: null,
					12: null
				},
				inPlace: {
					movement: [
						[],
						[{
							duration: 1757,
							speed: 1,
							unk: 1,
							distance: 0
						}],
						[]
					],
					distance: [0, 0, 0]
				}
			},
			30: {
				inPlace: {
					movement: [
						[{
							duration: 1757,
							speed: 1,
							unk: 1,
							distance: 0
						}],
						[]
					],
					distance: [0, 0]
				}
			},
			31: {
				inPlace: {
					movement: [
						[{
							duration: 1757,
							speed: 1,
							unk: 1,
							distance: 0
						}],
						[]
					],
					distance: [0, 0]
				}
			},
			40: {
				chains: {
					1: null,
					3: null,
					4: null,
					5: null,
					6: null,
					8: null,
					9: null,
					10: null,
					11: null,
					12: null
				},
				inPlace: {
					movement: [
						[],
						[{
							duration: 1757,
							speed: 1,
							unk: 1,
							distance: 0
						}],
						[]
					],
					distance: [0, 0, 0]
				}
			},
			60: {
				inPlace: {
					movement: [
						[{
							duration: 1757,
							speed: 1,
							unk: 1,
							distance: 0
						}],
						[]
					],
					distance: [0, 0]
				}
			},
			61: {
				inPlace: {
					movement: [
						[{
							duration: 1757,
							speed: 1,
							unk: 1,
							distance: 0
						}],
						[]
					],
					distance: [0, 0]
				}
			}
		},
		5: { // Grim Strike
			'*': {
				inPlace: {
					movement: [
						[{
							duration: 2416,
							speed: 1,
							unk: 1,
							distance: 0
						}],
						[{
							duration: 1065,
							speed: 1,
							unk: 1,
							distance: 0
						}]
					],
					distance: [0, 0]
				}
			},
			0: {
				noInterrupt: ['1-0', '1-2', 4, 12, 20],
				chains: {
					1: 30,
					3: 30,
					5: 30,
					6: 30,
					8: 30,
					9: 30,
					10: 30,
					11: 30
				}
			},
			30: true,
			31: {
				chains: {
					1: 32,
					3: 32,
					5: 32,
					6: 32,
					8: 32,
					9: 32,
					10: 32,
					11: 32
				}
			},
			32: true
		},
		6: { // Death Spiral
			'*': { noRetry: true },
			0: {
				chains: {
					1: 30,
					3: 30,
					4: 30,
					5: 30,
					6: 30,
					8: 30,
					9: 30,
					10: 30,
					11: 30,
					12: 30
				}
			},
			30: true,
			31: true,
			40: {
				chains: {
					1: 41,
					3: 41,
					4: 41,
					5: 41,
					6: 41,
					8: 41,
					9: 41,
					10: 41,
					11: 41,
					12: 41
				}
			},
			41: true,
			42: true
		},
		8: { // Whipsaw
			'*': { noInterrupt: [4, 5, 6, 8, 9, 11, 12, 20] },
			0: {
				chains: {
					1: 30,
					3: 30,
					10: 30
				}
			},
			30: true,
			40: {
				chains: {
					1: 41,
					3: 41,
					10: 41
				}
			},
			41: true
		},
		9: { // Smite
			0: {
				distance: 168,
				inPlace: {
					movement: [{
						duration: 1832,
						speed: 1,
						unk: 1,
						distance: 0
					}],
					distance: 0
				},
				noInterrupt: [1, 3, 4, 5, 6, 8, 9, 10, 11, 12, 20]
			}
		},
		10: { // Pendulum Strike
			'*': { distance: -200 },
			0: {
				chains: {
					1: 30,
					3: 30,
					4: 30,
					5: 30,
					6: 30,
					8: 30,
					9: 30,
					10: 30,
					11: 30,
					12: 30
				}
			},
			30: true,
			40: {
				chains: {
					1: 41,
					3: 41,
					4: 41,
					5: 41,
					6: 41,
					8: 41,
					9: 41,
					10: 41,
					11: 41,
					12: 41
				}
			},
			41: true
		},
		11: { // Shadow Lash
			'*': { noRetry: true },
			0: { triggerAbnormal: { 10151040: 2000 } },
			1: { triggerAbnormal: { 10151041: 2000 } },
			2: { triggerAbnormal: { 10151042: 2000 } },
			3: true
		},
		12: { // Shadow Burst
			'*': {
				glyphs: {
					29026: { speed: 1.25 }
				}
			},
			0: {
				noInterrupt: [1, 3, 4, 5, 6, 8, 9, 10, 11, 20],
				chains: { 12: 1 }
			},
			1: true,
			31: true
		},
		15: { // Retribution
			30: { fixedSpeed: true },
			81: true
		},
		16: { // Shadow Reaping
			0: { fixedAnimSpeed: true }
		},
		19: { // Dark Harvest
			'*': {
				inPlace: {
					movement: [{
						duration: 2122,
						speed: 1,
						unk: 1,
						distance: 0
					}],
					distance: 0
				}
			},
			0: {
				requiredBuff: 10151220,
				chains: {
					1: 30,
					3: 30,
					4: 30,
					5: 30,
					6: 30,
					8: 30,
					9: 30,
					10: 30,
					11: 30,
					12: 30
				}
			},
			30: true
		},
		/*20: { // Cable Step
			0: {
				type: 'dynamicDistance',
				length: 1250
			}
		},*/
		21: { // Recall Scythes
			0: {
				requiredBuff: 10151221,
				chains: {
					1: 30,
					3: 30,
					4: 30,
					5: 30,
					6: 30,
					8: 30,
					9: 30,
					10: 30,
					11: 30,
					12: 30
				}
			},
			30: true
		},
		23: { // Binding Scythes
			31: { fixedSpeed: true },
			33: { onlyTarget: true }
		},
		40: { // Shadow Step
			'*': {
				forceClip: true,
				abnormalChains: { 10151000: 30 }
			},
			0: true,
			30: true
		},
		910: { // Apex Urgency
			0: { fixedAnimSpeed: true }
		}
	},
	9: { // Gunner
		'*': { consumeAbnormal: [10152010, 10152011] },
		1: { // Blast
			'*': {
				fixedSpeed: true,
				length: 1195,
				noInterrupt: [1],
				projectiles: [20],
				triggerAbnormal: { 10152011: 3100 }
			},
			1: true,
			2: { noRetry: true },
			20: {
				type: 'userProjectile',
				flyingSpeed: 800,
				flyingDistance: 500,
				explodeOnHit: true
			}
		},
		2: { // Bombardment
			'*': { noRetry: true },
			0: {
				type: 'lockon',
				fixedSpeed: true,
				length: 59900
			},
			1: {
				type: 'lockonCast',
				length: 3000,
				glyphs: {
					30004: { speed: 1.25 }
				}
			}
		},
		3: { // Scattershot
			'*': {
				distance: -108,
				noInterrupt: [3],
				glyphs: {
					30007: {
						movement: [
							{
								duration: 394,
								speed: 1,
								unk: 1,
								distance: 0
							},
							{
								duration: 111,
								speed: 1,
								unk: 1,
								distance: 0
							},
							{
								duration: 1333,
								speed: 1.8,
								unk: 1,
								distance: 64.8
							}
						],
						distance: 0.6
					}
				},
				chains: {
					'2-1': 30,
					4: 30,
					'7-3': 30,
					'9-11': 30,
					10: 30,
					11: 30,
					13: 30,
					15: 30,
					19: 30,
					40: 30
				}
			},
			1: true,
			2: true,
			30: true
		},
		4: { // Point Blank
			'*': {
				noInterrupt: ['4-3', '4-4'],
				chains: {
					'2-1': 30,
					3: 30,
					4: 4,
					'7-3': 30,
					'9-10': 30,
					'9-11': 30,
					10: 30,
					11: 30,
					13: 30,
					15: 30,
					19: 30,
					40: 30
				}
			},
			1: {
				noInterrupt: [4],
				noRetry: true
			},
			2: { noRetry: true },
			3: {
				length: 1195,
				distance: -198.53
			},
			4: {
				length: 1195,
				distance: -198.53
			},
			30: { noRetry: true }
		},
		5: { // Burst Fire
			'*':{ noInterrupt: ['9-0'] },
			0: { noRetry: true },
			1: {
				fixedSpeed: true,
				stamina: 75,
				instantStamina: true,
				glyphs: {
					30046: { stamina: -10 }
				},
				level: [
					{ stamina: 50 },
					{ stamina: 55 },
					{ stamina: 60 },
					{ stamina: 65 }
				]
			},
			10: { noRetry: true },
			11: {
				fixedSpeed: true,
				stamina: 75,
				instantStamina: true,
				glyphs: {
					30046: { stamina: -10 }
				}
			}
		},
		6: { // Time Bomb
			'*': {
				fixedSpeed: true,
				length: 1000,
				projectiles: [20],
				triggerAbnormal: {
					10152010: 3100,
					10152084: 4100
				}
			},
			1: true,
			2: true,
			20: {
				type: 'userProjectile',
				flyingSpeed: 800
			}
		},
		7: { // Arcane Barrage
			'*': { length: 1525 },
			1: {
				fixedSpeed: true,
				noInterrupt: [7],
				triggerAbnormal: { 10152010: 3100 },
				noRetry: true
			},
			2: {
				fixedSpeed: true,
				noInterrupt: [7],
				triggerAbnormal: { 10152010: 3100 },
				noRetry: true
			},
			3: { length: 1200 }
		},
		9: { // Mana Missiles
			0: {
				type: 'charging',
				length: 1200,
				autoRelease: 0
			},
			10: {
				distance: -50,
				projectiles: [21, 22],
				noRetry: true
			},
			11: {
				distance: -100,
				projectiles: [21, 22, 23, 24, 25],
				noRetry: true
			},
			21: {
				type: 'userProjectile',
				flyingSpeed: 600,
				flyingDistance: 750
			},
			22: {
				type: 'userProjectile',
				flyingSpeed: 500,
				flyingDistance: 750
			},
			23: {
				type: 'userProjectile',
				flyingSpeed: 400,
				flyingDistance: 750
			},
			24: {
				type: 'userProjectile',
				flyingSpeed: 350,
				flyingDistance: 750
			},
			25: {
				type: 'userProjectile',
				flyingSpeed: 300,
				flyingDistance: 750
			}
		},
		10: { // Arc Bomb
			'*': { noRetry: true },
			1: {
				projectiles: [20],
				chains: {
					'2-1': null,
					3: null,
					4: null,
					'7-3': null,
					'9-10': null,
					'9-11': null,
					10: null,
					11: null,
					13: null,
					15: null,
					19: null,
					40: null
				}
			},
			2: {
				projectiles: [20],
				chains: {
					'2-1': null,
					3: null,
					4: null,
					'7-3': null,
					'9-10': null,
					'9-11': null,
					10: null,
					11: null,
					13: null,
					15: null,
					19: null,
					40: null
				}
			},
			20: {
				type: 'userProjectile',
				delay: 450,
				flyingSpeed: 700,
				flyingDistance: 350,
				level: [
					{ flyingSpeed: 800 },
					{ flyingSpeed: 800 },
					{ flyingSpeed: 800 },
					{ flyingSpeed: 800 },
					{ flyingSpeed: 800 },
					{ flyingSpeed: 800 },
					{ flyingSpeed: 800 },
					{ flyingSpeed: 800 }
				]
			},
			// TODO: Chain projectiles
			/*21: {
				type: 'userProjectile',
				flyingSpeed: 300,
				flyingDistance: 100
			},
			22: {
				type: 'userProjectile',
				flyingSpeed: 300,
				flyingDistance: 75
			},
			23: {
				type: 'userProjectile',
				flyingSpeed: 300,
				flyingDistance: 50
			},
			24: {
				type: 'projectile',
				length: 1000
			},*/
			30: { projectiles: [20] }
		},
		11: { // Rocket Jump
			'*': { noInterrupt: [15] },
			1: {
				chains: {
					'2-1': 30,
					3: 30,
					4: 30,
					'7-3': 30,
					'9-10': 30,
					'9-11': 30,
					10: 30,
					11: 30,
					13: 30,
					15: 30,
					19: 30,
					40: 31
				}
			},
			2: {
				chains: {
					'2-1': 30,
					3: 30,
					4: 30,
					'7-3': 30,
					'9-10': 30,
					'9-11': 30,
					10: 30,
					11: 30,
					13: 30,
					15: 30,
					19: 30,
					40: 31
				}
			},
			30: true,
			31: true
		},
		13: { // Balder's Vengeance
			'*': {
				length: 5813,
				distance: -269.09,
				noInterrupt: [13],
				noRetry: true
			},
			1: {
				chains: {
					'2-1': null,
					3: null,
					4: null,
					'7-3': null,
					'9-10': null,
					'9-11': null,
					10: null,
					11: null,
					13: null,
					15: null,
					19: null,
					40: null
				}
			},
			2: {
				chains: {
					'2-1': null,
					3: null,
					4: null,
					'7-3': null,
					'9-10': null,
					'9-11': null,
					10: null,
					11: null,
					13: null,
					15: null,
					19: null,
					40: null
				}
			},
			30: true
		},
		15: { // Replenishment
			'*': {
				fixedSpeed: true,
				noInterrupt: [15]
			},
			1: {
				chains: {
					'2-1': 30,
					3: 30,
					4: 30,
					'7-3': 30,
					'9-10': 30,
					'9-11': 30,
					10: 30,
					11: 30,
					13: 30,
					15: 30,
					19: 30,
					40: 30
				}
			},
			2: {
				chains: {
					'2-1': 30,
					3: 30,
					4: 30,
					'7-3': 30,
					'9-10': 30,
					'9-11': 30,
					10: 30,
					11: 30,
					13: 30,
					15: 30,
					19: 30,
					40: 30
				}
			},
			30: true
		},
		18: { // HB
			'*': {
				fixedSpeed: true,
				length: 1430
			},
			1: true,
			2: true
		},
		19: { // ST
			'*': { noRetry: true },
			1: {
				projectiles: [20],
				chains: {
					'2-1': null,
					3: null,
					4: null,
					'7-3': null,
					'9-10': null,
					'9-11': null,
					10: null,
					11: null,
					13: null,
					15: null,
					19: null,
					40: null
				}
			},
			2: {
				projectiles: [20],
				chains: {
					'2-1': null,
					3: null,
					4: null,
					'7-3': null,
					'9-10': null,
					'9-11': null,
					10: null,
					11: null,
					13: null,
					15: null,
					19: null,
					40: null
				}
			},
			20: {
				type: 'userProjectile',
				delay: 350,
				flyingSpeed: 700,
				flyingDistance: 450
			},
			// TODO: Chain projectiles
			/*21: {
				type: 'projectile',
				length: 5000
			},*/
			30: { projectiles: [20] }
		},
		20: { // Retaliate
			0: {
				type: 'retaliate',
				noRetry: true
			}
		},
		40: { // Rolling Reload
			0: {
				fixedSpeed: true,
				length: 935,
				distance: 172.5,
				triggerAbnormal: {
					10152010: 3100,
					10152012: 3100
				},
				forceClip: true
			}
		}
	},
	10: { // Brawler
		1: { // Punch
			'*': {
				noInterrupt: ['1-3'],
				triggerAbnormal: { 10153060: 3000 },
				consumeAbnormalEnd: 10153060,
				hasChains: true,
				noRetry: true
			},
			0: {
				categoryChains: {
					'92001,10000': 1,
					'92001,10001': 2,
					'92001,10002': 3,
					'92001,10010': 32,
					92002: 30,
					92003: 30,
					92004: 30,
					92005: 30,
					92006: 30,
					92007: 30,
					92008: 30,
					92009: 30,
					92010: 30,
					92013: 30,
					92014: 30,
					92015: 30,
					92016: 30,
					92017: 30,
					92018: 30,
					92019: 30,
					92020: 30,
					92021: 30,
					92022: 30,
					92024: 30,
					92026: 30,
					92040: 30
				}
			},
			1: true,
			2: true,
			3: true,
			30: true,
			31: true,
			32: true
		},
		2: { // Counter
			'*': {
				hasChains: true,
				noRetry: true
			},
			1: {
				triggerAbnormal: { 10153001: 0x7fffffff },
				consumeAbnormalEnd: 10153001
			},
			2: {
				triggerAbnormal: { 10153002: 0x7fffffff },
				consumeAbnormalEnd: 10153002
			},
			3: {
				triggerAbnormal: { 10153003: 0x7fffffff },
				consumeAbnormalEnd: 10153003
			},
			4: {
				triggerAbnormal: { 10153004: 0x7fffffff },
				consumeAbnormalEnd: 10153004
			},
			10: {
				type: 'holdInfinite',
				fixedSpeed: true,
				distance: 33.38,
				triggerAbnormal: { 10153006: 0x7fffffff },
				consumeAbnormalEnd: 10153006,
				endType51: true
			},
			11: {
				type: 'holdInfinite',
				fixedSpeed: true,
				distance: 33.38,
				triggerAbnormal: { 10153005: 0x7fffffff },
				consumeAbnormalEnd: 10153005,
				endType51: true
			},
			12: {
				categoryChains: {
					'92001,10000': 1,
					'92001,10001': 2,
					'92001,10002': 3,
					'92001,10003': 4,
					'92001,10010': 1
				}
			}
		},
		3: { // Divine Wrath
			'*': {
				fixedSpeed: true,
				noRetry: true
			},
			0: { length: 29900 },
			1: {
				type: 'lockonCast',
				length: [1800, 1433, 1366],
				setEndpointStage: 1
			}
		},
		4: { // Ground Pound
			'*': { hasChains: true },
			0: { categoryChains: { 800: 30 } },
			30: true
		},
		5: { // Bullrush
			0: {
				fixedSpeed: true,
				length: [2950, 650],
				distance: [0, 135]
			}
		},
		6: { // Haymaker
			'*': { hasChains: true },
			1: { categoryChains: { 800: 30 } },
			2: { categoryChains: { 800: 30 } },
			30: true,
			31: true
		},
		7: { // Roundhouse Kick
			'*': {
				noInterrupt: [7],
				hasChains: true
			},
			0: { categoryChains: { 800: 30 } },
			30: true
		},
		8: { // Piledriver
			'*': { hasChains: true },
			1: { categoryChains: { 800: 30 } },
			2: { categoryChains: { 800: 30 } },
			30: true,
			31: true
		},
		9: { // Jackhammer
			'*': {
				noInterrupt: [9],
				fixedSpeed: true,
				hasChains: true
			},
			1: { categoryChains: { 800: 30 } },
			2: { categoryChains: { 800: 30 } },
			30: true,
			31: true
		},
		10: { // Counterpunch
			'*': {
				requiredBuff: 10153000,
				hasChains: true
			},
			0: { categoryChains: { 800: 30 } },
			30: true
		},
		12: { // Retaliate
			0: true
		},
		13: { // Provoke
			'*': { fixedAnimSpeed: true },
			1: true,
			2: true
		},
		14: { // Infuriate
			'*': { hasChains: true },
			1: { categoryChains: { 800: 30 } },
			2: { categoryChains: { 800: 30 } },
			30: true
		},
		16: { // Flip Kick
			'*': { hasChains: true },
			1: { categoryChains: { 800: 30 } },
			2: { categoryChains: { 800: 30 } },
			30: true
		},
		21: { // Mounting Rage
			'*': { fixedAnimSpeed: true },
			1: true,
			2: true
		},
		22: { // Flying Kick
			'*': {
				noInterrupt: [22],
				hasChains: true
			},
			0: { categoryChains: { 800: 30 } },
			30: true
		},
		24: { // One-Inch Punch
			'*': { hasChains: true },
			1: { categoryChains: { 800: 30 } },
			2: { categoryChains: { 800: 30 } },
			30: true,
			31: true
		},
		26: { // Rythmic Blows
			'*': {
				length: [179, 413],
				distance: [0, 30],
				hasChains: true,
				noRetry: true
			},
			0: { categoryChains: { 800: 2 } },
			1: true,
			2: true,
			3: true,
			4: true,
			5: true,
			6: true,
			7: true
		},
		40: { // Quick Dash
			'*': {
				fixedSpeed: true,
				forceClip: true,
				abnormalChains: { 10153150: 30 },
				noRetry: true
			},
			0: true,
			30: true
		},
		910: { // Apex Urgency
			0: { fixedAnimSpeed: true }
		}
	},
	11: { // Ninja
		'*': { consumeAbnormal: [10154000, 10154001, 10154002, 10154003, 10154004, 10154005, 10154006] },
		1: { // Combo Attack
			'*': {
				fixedSpeed: true,
				triggerAbnormal: { 10154000: 1650 },
				hasChains: true,
				noRetry: true
			},
			0: {
				chains: {
					1: 30,
					3: 30,
					4: 30,
					6: 30,
					7: 30,
					9: 30,
					12: 30,
					13: 30,
					14: 30,
					15: 30,
					16: 30,
					18: 30,
					19: 30,
					20: 30
				}
			},
			1: { triggerAbnormal: { 10154001: 1500 } },
			2: { triggerAbnormal: { 10154002: 1400 } },
			3: { triggerAbnormal: { 10154003: 1400 } },
			4: { triggerAbnormal: { 10154004: 1400 } },
			5: { triggerAbnormal: { 10154005: 1600 } },
			6: { triggerAbnormal: { 10154006: 100 } },
			30: true,
			40: {
				chains: {
					1: 70,
					3: 70,
					4: 70,
					6: 70,
					7: 70,
					9: 70,
					12: 70,
					13: 70,
					14: 70,
					15: 70,
					16: 70,
					18: 70,
					19: 70,
					20: 70
				}
			},
			41: { triggerAbnormal: { 10154001: 1500 } },
			42: { triggerAbnormal: { 10154002: 1400 } },
			43: { triggerAbnormal: { 10154003: 1400 } },
			44: { triggerAbnormal: { 10154004: 1400 } },
			45: { triggerAbnormal: { 10154005: 1600 } },
			46: { triggerAbnormal: { 10154006: 100 } },
			70: true
		},
		2: { // Shadow Jump
			'*': {
				fixedSpeed: true,
				length: 650,
				forceClip: true,
				abnormalChains: { 10154010: 30 }
			},
			0: true,
			30: true
		},
		3: { // Leaves on the Wind
			0: true,
			40: true
		},
		4: { // Jagged Path
			1: {
				type: 'dash',
				fixedSpeed: true,
				length: 665,
				distance: 469
			},
			10: true,
			11: true
		},
		5: { // Impact Bomb
			'*': {
				distance: -291.6,
				noInterrupt: [5],
				forceClip: true,
				noRetry: true
			},
			0: {
				chains: {
					1: null,
					2: null,
					3: null,
					4: null,
					5: null,
					6: null,
					7: null,
					8: null,
					9: null,
					10: null,
					11: null,
					12: null,
					13: null,
					14: null,
					15: null,
					16: null,
					17: null,
					18: null,
					19: null,
					20: null
				}
			},
			30: true
		},
		6: { // One Thousand Cuts
			0: {
				chains: {
					1: 30,
					3: 30,
					4: 30,
					7: 30,
					12: 30,
					13: 30,
					14: 30,
					15: 30,
					16: 30,
					17: 30,
					19: 30,
					20: 30
				}
			},
			1: {
				type: 'dash',
				fixedSpeed: true,
				length: 300,
				distance: 246
			},
			10: true,
			30: true
		},
		7: { // Decoy Jutsu
			0: {
				length: 1550,
				onlyTarget: true
			}
		},
		8: { // Fire Avalanche
			'*': {
				noInterrupt: [9, 18],
				hasChains: true,
				noRetry: true
			},
			0: {
				chains: {
					1: 30,
					3: 30,
					4: 30,
					6: 30,
					7: 30,
					12: 30,
					13: 30,
					14: 30,
					15: 30,
					16: 30,
					17: 30,
					19: 30,
					20: 30
				}
			},
			1: true,
			2: true,
			30: true,
			31: {
				chains: {
					1: 30,
					3: 30,
					4: 30,
					6: 30,
					7: 30,
					12: 30,
					13: 30,
					14: 30,
					15: 30,
					16: 30,
					17: 30,
					19: 30,
					20: 30
				}
			}
		},
		9: { // Smoke Bomb
			0: {
				chains: {
					1: null,
					2: null,
					3: null,
					4: null,
					5: null,
					6: null,
					7: null,
					8: null,
					9: null,
					10: null,
					11: null,
					12: null,
					13: null,
					14: null,
					15: null,
					16: null,
					17: null,
					18: null,
					19: null,
					20: null
				}
			},
			30: true
		},
		10: { // Retaliate
			0: {
				type: 'retaliate',
				noRetry: true
			}
		},
		11: { // Focus
			0: true,
			50: true
		},
		12: { // Skyfall
			'*': { noInterrupt: [9, 18] },
			1: {
				chains: {
					1: 30,
					3: 30,
					4: 30,
					6: 30,
					7: 30,
					8: 30,
					13: 30,
					14: 30,
					15: 30,
					16: 30,
					17: 30,
					19: 30,
					20: 30
				}
			},
			2: {
				chains: {
					1: 30,
					3: 30,
					4: 30,
					6: 30,
					7: 30,
					8: 30,
					13: 30,
					14: 30,
					15: 30,
					16: 30,
					17: 30,
					19: 30,
					20: 30
				}
			},
			30: true
		},
		13: { // Circle of Steel
			'*': { noInterrupt: [9, 18] },
			1: {
				chains: {
					1: 30,
					3: 30,
					4: 30,
					6: 30,
					7: 30,
					8: 30,
					12: 30,
					14: 30,
					15: 30,
					16: 30,
					17: 30,
					19: 30,
					20: 30
				}
			},
			2: {
				chains: {
					1: 30,
					3: 30,
					4: 30,
					6: 30,
					7: 30,
					8: 30,
					12: 30,
					14: 30,
					15: 30,
					16: 30,
					17: 30,
					19: 30,
					20: 30
				}
			},
			30: true
		},
		14: { // Double Cut
			'*': { noInterrupt: [9, 18] },
			1: {
				chains: {
					1: 30,
					3: 30,
					4: 30,
					6: 30,
					7: 30,
					8: 30,
					12: 30,
					13: 30,
					15: 30,
					16: 30,
					17: 30,
					19: 30,
					20: 30
				}
			},
			2: {
				chains: {
					1: 30,
					3: 30,
					4: 30,
					6: 30,
					7: 30,
					8: 30,
					12: 30,
					13: 30,
					15: 30,
					16: 30,
					17: 30,
					19: 30,
					20: 30
				}
			},
			30: true
		},
		15: { // Burning Heart
			'*': {
				stamina: 100,
				instantStamina: true,
				abnormals: {
					32033: { speed: 1.2 },
					32058: { speed: 1.3 }
				}
			},
			1: true,
			2: true,
			3: true,
			4: true,
			5: true,
			6: true,
			7: true,
			8: true,
			9: true,
			10: true,
			31: true,
			32: true
		},
		16: { // Death Blossom
			'*': { fixedSpeed: true },
			0: {
				chains: {
					1: 30,
					3: 30,
					4: 30,
					6: 30,
					7: 30,
					8: 30,
					9: 30,
					12: 30,
					13: 30,
					15: 30,
					16: 30,
					17: 30,
					18: 30,
					19: 30,
					20: 30
				}
			},
			30: true
		},
		17: { // Attunement
			0: {
				chains: {
					1: 30,
					3: 30,
					4: 30,
					6: 30,
					7: 30,
					8: 30,
					9: 30,
					12: 30,
					13: 30,
					15: 30,
					16: 30,
					17: 30,
					18: 30,
					19: 30,
					20: 30
				}
			},
			30: true
		},
		18: { // Bladestorm
			0: {
				chains: {
					1: 30,
					3: 30,
					4: 30,
					6: 30,
					7: 30,
					8: 30,
					9: 30,
					12: 30,
					13: 30,
					15: 30,
					16: 30,
					17: 30,
					18: 30,
					19: 30,
					20: 30
				}
			},
			30: true
		},
		19: { // Chakra Thrust
			0: {
				chains: {
					1: 30,
					3: 30,
					4: 30,
					6: 30,
					7: 30,
					8: 30,
					9: 30,
					12: 30,
					13: 30,
					15: 30,
					16: 30,
					17: 30,
					18: 30,
					19: 30,
					20: 30
				}
			},
			30: true
		},
		20: { // Clone Jutsu
			0: {
				onlyTarget: true,
				fixedSpeed: true
			}
		},
		910: { // Apex Urgency
			0: { fixedAnimSpeed: true }
		}
	},
	12: { // Valkyrie
		1: { // Slash
			'*': {
				length: 1100,
				distance: 47.13,
				noInterrupt: ['1-3'],
				chains: {
					'1-0': 1,
					'1-1': 2,
					'1-2': 3,
					'1-30': 1,
					2: 30,
					3: 30,
					4: 30,
					5: 30,
					6: 30,
					7: 30,
					8: 30,
					9: 30,
					10: 30,
					11: 30,
					12: 30,
					13: 30,
					14: 30,
					15: 30,
					16: 30,
					19: 30,
					20: 30
				},
				noRetry: true
			},
			0: true,
			1: {
				length: 1200,
				distance: 43.37
			},
			2: {
				length: 1450,
				distance: 58.54
			},
			3: {
				length: 1925,
				distance: 90.1
			},
			30: true
		},
		2: { // Overhead Slash
			'*': {
				length: 1900,
				distance: 102.47,
				chains: {
					1: 30,
					2: 30,
					3: 30,
					4: 30,
					5: 30,
					6: 30,
					7: 30,
					8: 30,
					9: 30,
					10: 30,
					11: 30,
					12: 30,
					13: 30,
					14: 30,
					15: 30,
					16: 30,
					19: 30,
					20: 30
				}
			},
			0: true,
			30: true
		},
		3: { // Glaive Strike
			'*': {
				length: 2450,
				distance: 105.62,
				requiredBuff: 10155112,
				chains: {
					1: 30,
					2: 30,
					3: 30,
					4: 30,
					5: 30,
					6: 30,
					7: 30,
					8: 30,
					9: 30,
					10: 30,
					11: 30,
					12: 30,
					13: 30,
					14: 30,
					15: 30,
					16: 30,
					19: 30,
					20: 30
				}
			},
			0: true,
			30: true
		},
		4: { // Charge
			0: {
				type: 'dash',
				fixedSpeed: true,
				length: 550,
				distance: 436,
				noInterrupt: ['4-0']
			},
			10: { length: 900 },
			11: {
				length: 400,
				distance: 50,
				noInterrupt: ['4-11']
			}
		},
		5: { // Maelstrom
			'*': {
				length: 3150,
				distance: 125.11,
				chains: {
					1: 30,
					2: 30,
					3: 30,
					4: 30,
					5: 30,
					6: 30,
					7: 30,
					8: 30,
					9: 30,
					10: 30,
					11: 30,
					12: 30,
					13: 30,
					14: 30,
					15: 30,
					16: 30,
					19: 30,
					20: 30
				}
			},
			0: true,
			30: true
		},
		6: { // Leaping Strike
			'*': {
				length: 1775,
				distance: 105,
				chains: {
					1: 30,
					2: 30,
					3: 30,
					4: 30,
					5: 30,
					6: 30,
					7: 30,
					8: 30,
					9: 30,
					10: 30,
					11: 30,
					12: 30,
					13: 30,
					14: 30,
					15: 30,
					16: 30,
					19: 30,
					20: 30
				}
			},
			0: true,
			30: true
		},
		7: { // Spinning Death
			'*': {
				length: 1775,
				distance: 139.72,
				hasChains: true,
				noRetry: true
			},
			0: {
				noInterrupt: ['7-2'],
				abnormalChains: {
					10155070: 1,
					10155071: 2
				},
				chains: {
					1: 30,
					2: 30,
					3: 30,
					4: 30,
					5: 30,
					6: 30,
					7: 30,
					8: 30,
					9: 30,
					10: 30,
					11: 30,
					12: 30,
					13: 30,
					14: 30,
					15: 30,
					16: 30,
					19: 30,
					20: 30
				}
			},
			1: true,
			2: {
				length: 2300,
				distance: 197.82
			},
			30: true
		},
		8: { // Titansbane
			'*': {
				fixedSpeed: true,
				length: 7700,
				chains: {
					1: 30,
					2: 30,
					3: 30,
					4: 30,
					5: 30,
					6: 30,
					7: 30,
					8: 1,
					9: 30,
					10: 30,
					11: 30,
					12: 30,
					13: 30,
					14: 30,
					15: 30,
					16: 30,
					19: 30,
					20: 30
				}
			},
			0: true,
			1: { length: 2000 },
			30: true
		},
		9: { // Ground Bash
			'*': {
				length: 1450,
				distance: 136,
				requiredBuff: 10155112,
				chains: {
					1: 30,
					2: 30,
					3: 30,
					4: 30,
					5: 30,
					6: 30,
					7: 30,
					8: 30,
					9: 30,
					10: 30,
					11: 30,
					12: 30,
					13: 30,
					14: 30,
					15: 30,
					16: 30,
					19: 30,
					20: 30
				}
			},
			0: true,
			30: true
		},
		10: { // Dream Slash
			'*': {
				length: 1775,
				distance: 11.18,
				noInterrupt: [10],
				glyphs: {
					33020: { speed: 1.2 }
				},
				chains: {
					1: null,
					2: null,
					3: null,
					4: null,
					5: null,
					6: null,
					7: null,
					8: null,
					9: null,
					10: null,
					11: null,
					12: null,
					13: null,
					14: null,
					15: null,
					16: null,
					19: null,
					20: null
				},
				noRetry: true
			},
			0: true,
			30: true
		},
		11: { // Shining Crescent
			'*': {
				length: 2725,
				chains: {
					1: 30,
					2: 30,
					3: 30,
					4: 30,
					5: 30,
					6: 30,
					7: 30,
					8: 30,
					9: 30,
					10: 30,
					11: 30,
					12: 30,
					13: 30,
					14: 30,
					15: 30,
					16: 30,
					19: 30,
					20: 30
				}
			},
			0: {
				distance: 227.49,
				noInterrupt: [11]
			},
			1: {
				length: 2500,
				chains: {
					1: 31,
					2: 31,
					3: 31,
					4: 31,
					5: 31,
					6: 31,
					7: 31,
					8: 31,
					9: 31,
					10: 31,
					11: 31,
					12: 31,
					13: 31,
					14: 31,
					15: 31,
					16: 31,
					19: 31,
					20: 31
				}
			},
			30: { distance: 227.49 },
			31: { length: 2500 }
		},
		12: { // Ragnarok
			'*': {
				length: 2800,
				chains: {
					1: 30,
					2: 30,
					3: 30,
					4: 30,
					5: 30,
					6: 30,
					7: 30,
					8: 30,
					9: 30,
					10: 30,
					11: 30,
					12: 30,
					13: 30,
					14: 30,
					15: 30,
					16: 30,
					19: 30,
					20: 30
				}
			},
			0: true,
			30: true
		},
		13: { // Bloodflower
			'*': {
				length: 1700,
				distance: 20.57,
				chains: {
					1: 30,
					2: 30,
					3: 30,
					4: 30,
					5: 30,
					6: 30,
					7: 30,
					8: 30,
					9: 30,
					10: 30,
					11: 30,
					12: 30,
					13: 30,
					14: 30,
					15: 30,
					16: 30,
					19: 30,
					20: 30
				}
			},
			0: true,
			30: true
		},
		14: { // Evasion
			'*': {
				fixedSpeed: true,
				length: 825,
				distance: 188.18,
				forceClip: true,
				abnormalChains: { 10155020: 1 }
			},
			0: true,
			1: true
		},
		15: { // Windslash
			'*': {
				length: 1100,
				distance: 152.82,
				chains: {
					1: 30,
					2: 30,
					3: 30,
					4: 30,
					5: 30,
					6: 30,
					7: 30,
					8: 30,
					9: 30,
					10: 30,
					11: 30,
					12: 30,
					13: 30,
					14: 30,
					15: 30,
					16: 30,
					19: 30,
					20: 30
				}
			},
			0: true,
			30: true
		},
		16: { // Runeburst
			'*': {
				fixedSpeed: true,
				length: 1325,
				distance: 25,
				chains: {
					1: 30,
					2: 30,
					3: 30,
					4: 30,
					5: 30,
					6: 30,
					7: 30,
					8: 30,
					9: 30,
					10: 30,
					11: 30,
					12: 30,
					13: 30,
					14: 30,
					15: 30,
					16: 30,
					19: 30,
					20: 30
				}
			},
			0: true,
			30: true
		},
		17: { // Balder's Tears
			0: {
				fixedSpeed: true,
				length: 1075
			}
		},
		19: { // Reclamation
			'*': {
				length: 1525,
				chains: {
					1: 30,
					2: 30,
					3: 30,
					4: 30,
					5: 30,
					6: 30,
					7: 30,
					8: 30,
					9: 30,
					10: 30,
					11: 30,
					12: 30,
					13: 30,
					14: 30,
					15: 30,
					16: 30,
					19: 30,
					20: 30
				}
			},
			0: true,
			30: true
		},
		20: { // Backstab
			0: {
				length: 1500,
				onlyTarget: true
			}
		},
		21: { // Dark Herald
			0: {
				fixedSpeed: true,
				length: 925,
				requiredBuff: 10155201
			}
		}
	}
}
