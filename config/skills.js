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
			0: {
				length: 566,
				distance: 47.53,
				race: {
					4: { distance: 35.49 },
					5: { distance: 45 },
					7: { distance: 60 },
					8: { distance: 54.32 },
					9: { distance: 64.29 },
					10: { distance: 32.81 }
				}
			},
			1: {
				length: 657,
				distance: 42.12,
				race: {
					4: { distance: 42.96 },
					5: { distance: 39 },
					7: { distance: 27 },
					8: { distance: 21.17 },
					9: { distance: 51.69 },
					10: { distance: 49.22 }
				}
			},
			2: {
				length: 657,
				distance: 28.08,
				race: {
					4: { distance: 31.02 },
					5: { distance: 26 },
					7: { distance: 49 },
					8: { distance: 56.2 },
					10: { distance: 25.69 }
				}
			},
			3: {
				length: 909,
				distance: 75.07,
				race: {
					1: { distance: 82.07 },
					2: { distance: 79.9 },
					3: { distance: 66.41 },
					4: { distance: 64.66 },
					5: { distance: 85 },
					7: { distance: 58 },
					8: { distance: 63.53 },
					9: { distance: 73.34 },
					10: { distance: 68.69 }
				}
			}
		},
		2: { // Evasive Roll
			0: {
				length: 839,
				distance: 150,
				forceClip: true,
				stamina: 500,
				instantStamina: true,
				glyphs: {
					21015: { stamina: -100 },
					21067: { stamina: -100 },
					21101: { stamina: -120 }
				},
				race: {
					0: { distance: 149.94 },
					7: { length: 837 },
					8: { length: 1082 },
					10: { length: 778 }
				}
			}
		},
		3: { // Torrent of Blows
			0: {
				length: 1600,
				distance: 75,
				race: {
					9: { distance: 68.26 }
				}
			}
		},
		4: { // Rain of Blows
			'*': {
				distance: 150.25,
				race: {
					1: { distance: 151.61 },
					2: { distance: 152.73 },
					3: { distance: 143.35 },
					4: { distance: 142.61 },
					5: { distance: 150.71 },
					6: { distance: 143.47 },
					7: { distance: 159 },
					8: { distance: 148.9 },
					9: { distance: 151.87 },
					10: { distance: 96.09 }
				}
			},
			0: {
				length: 2545,
				noInterrupt: [1, 2, 3, 4, 8, 9, 10, 11, 12, 13, 16, 17, 19, 22, 28, 29, 34, 36, 37, 39],
				abnormals: {
					100801: { skill: 360100 }
				},
				chains: {
					18: 30,
					21: 30,
					27: 30,
					40: 30
				}
			},
			30: {
				length: 2000,
				abnormals: {
					100801: { skill: 360130 }
				}
			}
		},
		5: { // Battle Cry
			0: {
				length: 1666,
				glyphs: {
					21040: { speed: 1.5 }
				}
			}
		},
		8: { // Assault Stance
			'*': {
				length: 566,
				race: {
					3: { length: 657 }
				}
			},
			0: { stamina: 1000 },
			50: true
		},
		9: { // Defensive Stance
			'*': {
				length: 566,
				race: {
					3: { length: 657 }
				}
			},
			0: { stamina: 1000 },
			50: true
		},
		10: { // Death From Above
			0: {
				length: 2066,
				race: {
					1: { length: 2100 },
					3: { length: 2033 },
					6: { length: 2033 },
					9: { length: 2033 }
				}
			}
		},
		11: { // Poison Blade
			0: {
				length: 933,
				distance: 54.85
			}
		},
		12: { // Leaping Strike
			0: {
				length: 1533,
				distance: 250,
				glyphs: {
					21048: { speed: 1.2 },
					21082: { speed: 1.2 }
				}
			}
		},
		16: { // Charging Slash
			0: {
				type: 'dash',
				fixedSpeed: 1,
				length: 1100,
				distance: 467.88,
				noRetry: true
			},
			1: {
				length: 800,
				distance: 100,
				race: {
					5: { distance: 93.53 }
				}
			}
		},
		17: { // Vortex Slash
			0: { length: 1600 },
			1: { length: 1600 },
			2: { length: 1600 }
		},
		18: { // Combative Strike
			'*': {
				length: 1100,
				distance: 120.28,
				noInterrupt: [32],
				race: {
					1: { distance: 122.63 },
					3: { distance: 127.11 },
					4: { distance: 110.46 },
					7: { distance: 130 },
					8: { distance: 128.89 },
					9: { distance: 138.28 },
					10: { distance: 94.49 }
				}
			},
			0: true,
			1: true,
			2: true
		},
		19: { // Rising Fury
			0: {
				length: 733,
				distance: 148.2,
				race: {
					1: { distance: 157.28 },
					2: { distance: 144.85 },
					3: { distance: 155.3 },
					4: { distance: 144.85 },
					5: { distance: 143.27 },
					6: { distance: 170.43 },
					7: { distance: 162 },
					8: { distance: 161.74 },
					9: { distance: 170.67 },
					10: { distance: 132.61 }
				}
			},
			1: {
				length: 1400,
				distance: 92.66,
				race: {
					1: { distance: 88.17 },
					2: { distance: 100.11 },
					3: { distance: 92.1 },
					4: { distance: 100.11 },
					5: { distance: 101.69 },
					6: { distance: 117.31 },
					7: { distance: 85 },
					8: { distance: 116.63 },
					9: { distance: 122.34 },
					10: { distance: 83.01 }
				}
			}
		},
		20: { // Deadly Gamble
			0: {
				fixedSpeed: 1,
				length: 320
			}
		},
		21: { // Cascade of Stuns
			0: {
				length: 1400,
				distance: 92.66,
				race: {
					1: { distance: 88.17 },
					2: { distance: 100.11 },
					3: { distance: 92.1 },
					4: { distance: 100.11 },
					5: { distance: 101.69 },
					6: { distance: 117.31 },
					7: { distance: 85 },
					8: { distance: 116.63 },
					9: { distance: 122.34 },
					10: { distance: 83.01 }
				}
			}
		},
		24: { // Smoke Aggressor
			0: {
				fixedSpeed: 1,
				length: 481
			}
		},
		25: { // Command: Attack
			0: {
				fixedSpeed: 1,
				length: 700
			}
		},
		26: { // Command: Follow
			0: {
				fixedSpeed: 1,
				length: 700
			}
		},
		27: { // Pounce (removed)
			0: {
				length: 2000,
				distance: 180,
				glyphs: {
					21048: { speed: 1.3 },
					21082: { speed: 1.3 }
				}
			}
		},
		28: { // Traverse Cut
			0: {
				length: 2000,
				distance: 160,
				noInterrupt: [1, 2, 3, 4, 8, 9, 10, 12, 13, 16, 17, 19, 21, 22, 28, 29, 34, 36, 37, 39],
				chains: {
					11: 30,
					18: 30,
					27: 30,
					40: 30
				},
				level: {
					9: {
						abnormals: {
							100201: { skill: 390100 }
						}
					}
				}
			},
			30: {
				length: 2667,
				distance: 210,
				level: {
					9: {
						abnormals: {
							100201: { skill: 390130 }
						}
					}
				}
			}
		},
		29: { // Blade Draw
			0: {
				length: 3000,
				distance: 94.5,
				noInterrupt: [1, 2, 3, 4, 8, 9, 10, 11, 12, 13, '16-0', 18, '19-0', 21, 22, 27, 29, 34, 36, 37],
				interruptibleWithAbnormal: { 102010: 3 },
				abnormals: {
					102010: { chain: 30 },
					100801: { skill: 370100 }
				},
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
			30: {
				length: 1333,
				distance: 135,
				abnormals: {
					100801: { skill: 370130 }
				}
			}
		},
		30: { // Scythe
			0: {
				length: 1833,
				distance: 150,
				noInterrupt: [1, 3, 8, 9, 10, 13, 16, 17, 18, 19, 21, 22, 27, 28, 34, 39],
				abnormals: {
					100801: { skill: 380100 }
				},
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
			30: {
				length: 1387,
				distance: 150,
				abnormals: {
					100801: { skill: 380130 }
				}
			}
		},
		31: { // Reaping Slash
			'*': { distance: 110 },
			0: {
				length: 2292,
				noInterrupt: [1, 2, 3, 8, 9, 10, 11, 12, 13, 16, 17, 19, 21, 22, 27, 28, 29, 34, 37, 39],
				chains: {
					4: 30,
					18: 30,
					36: 30,
					40: 30
				}
			},
			30: { length: 1668 }
		},
		32: { // Cross Parry
			0: {
				type: 'holdInfinite',
				fixedSpeed: 1,
				requiredBuff: [100200, 100201],
				stamina: 50
			}
		},
		34: { // Binding Sword
			0: { length: 1855 }
		},
		35: { // Infuriate
			0: {
				length: 2423,
				requiredBuff: [100200, 100201]
			}
		},
		36: { // Rain of Blows (Deadly Gamble)
			'*': {
				distance: 150.25,
				race: {
					1: { distance: 151.61 },
					2: { distance: 152.73 },
					3: { distance: 152.73 },
					4: { distance: 142.61 },
					5: { distance: 150.71 },
					6: { distance: 143.47 },
					7: { distance: 159 },
					8: { distance: 148.9 },
					9: { distance: 151.87 },
					10: { distance: 96.09 }
				}
			},
			0: { length: 2800 },
			30: { length: 2000 }
		},
		37: { // Blade Draw (Deadly Gamble)
			'*': { hasChains: true },
			0: {
				length: 3000,
				distance: 94.5,
				abnormalChains: { 102010: 30 }
			},
			30: {
				length: 1333,
				distance: 135
			}
		},
		38: { // Scythe (Deadly Gamble)
			'*': { distance: 150 },
			0: { length: 1833 },
			30: { length: 1387 }
		},
		39: { // Traverse Cut (Defensive Stance)
			0: {
				length: 2000,
				distance: 160
			},
			30: {
				length: 2667,
				distance: 210
			}
		}
	},
	1: { // Lancer
		1: { // Combo Attack
			'*': { noInterrupt: [1, 2] },
			0: {
				length: 624,
				distance: 78.55,
				race: {
					1: { distance: 74.89 },
					2: { distance: 74.41 },
					3: { distance: 74.36 },
					4: { distance: 70 },
					5: { distance: 69.8 },
					6: { distance: 76.42 },
					7: { distance: 74.89 },
					8: { distance: 72.89 },
					9: { distance: 74.45 },
					10: { distance: 74.88 }
				}
			},
			1: {
				length: 1021,
				distance: 25,
				race: {
					1: { distance: 28.39 },
					2: { distance: 30.8 },
					3: { distance: 30.68 },
					5: { distance: 30.52 },
					6: { distance: 30.8 },
					7: { distance: 28.39 },
					8: { distance: 39.05 },
					9: { distance: 19.2 },
					10: { distance: 30.8 }
				}
			},
			2: {
				length: 1818,
				distance: 70,
				race: {
					1: { distance: 59.53 },
					3: { distance: 64.36 },
					4: { distance: 60 },
					5: { distance: 54.48 },
					7: { distance: 59.53 },
					8: { distance: 41.06 },
					9: { distance: 66.07 },
					10: { distance: 69.98 }
				}
			}
		},
		2: { // Stand Fast
			0: {
				type: 'holdInfinite',
				fixedSpeed: 1,
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
				distance: 440,
				noInterrupt: ['1-0', '1-1', 2, 3, 8, 10, 13, 15, 21, 25, 26],
				abnormals: {
					22060: { speed: 1.25 }
				},
				chains: {
					1: 30,
					5: 30,
					18: 30
				},
				race: {
					0: { distance: 427.1 },
					9: { distance: 462.7 }
				}
			},
			0: { length: 3636 },
			30: { length: 2203 }
		},
		4: { // Challenging Shout
			'*': {
				length: 2203,
				glyphs: {
					22056: { speed: 1.25 },
					22085: { speed: 1.25 }
				}
			},
			0: true,
			30: true
		},
		5: { // Shield Bash
			'*': {
				length: 820,
				distance: 43.69,
				chains: { 10: 30 }
			},
			1: true,
			2: true,
			30: { length: 683 }
		},
		7: { // Guardian Shout
			0: {
				length: 550,
				race: {
					8: { length: 800 } // Popori
				}
			}
		},
		8: { // Shield Counter
			0: {
				length: 1450,
				distance: 108.06,
				onlyDefenceSuccess: true
			}
		},
		9: { // Leash
			0: { length: [725, 850] }
		},
		10: { // Debilitate
			'*': {
				distance: 43.69,
				noInterrupt: [2, 3, 5, 10, 13, 21, 25, 26],
				chains: {
					1: 30,
					18: 30
				}
			},
			0: { length: 925 },
			30: { length: 832 }
		},
		11: { // Retaliate
			0: {
				type: 'retaliate',
				length: 1625,
				noRetry: true
			}
		},
		12: { // Infuriate
			0: { length: 2425 }
		},
		13: { // Spring Attack
			0: {
				length: 2799,
				distance: 85,
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
			30: {
				length: 1850,
				distance: 85
			}
		},
		15: { // Charging Lunge
			0: {
				type: 'dash',
				fixedSpeed: 1,
				length: 1125,
				distance: 474.5,
				noInterrupt: [15]
			},
			1: { length: 925 }
		},
		16: { // Second Wind
			0: {
				noWeapon: true,
				fixedSpeed: 1,
				length: 700
			}
		},
		17: { // Adrenaline Rush
			0: {
				fixedSpeed: 1,
				length: 700
			}
		},
		18: { // Shield Barrage
			0: {
				length: 598,
				distance: 100.13,
				abnormals: {
					201550: { speed: 1.2 }
				},
				race: {
					2: {
						length: 503,
						distance: 102.7
					},
					3: { distance: 103.43 },
					4: { distance: 95 },
					6: { distance: 110.39 },
					7: { distance: 116.18 },
					8: { distance: 92.39 },
					9: { distance: 122.66 },
					10: { distance: 92.13 }
				}
			},
			1: {
				length: 800,
				distance: 74.84,
				race: {
					2: { distance: 80.43 },
					3: { distance: 70.32 },
					4: { distance: 87 },
					8: { distance: 89.46 },
					9: { distance: 66.04 }
				}
			}
		},
		19: { // Pledge of Protection
			0: {
				fixedSpeed: 1,
				length: 1000
			}
		},
		20: { // Menacing Wave (removed)
			0: {
				fixedSpeed: 1,
				length: [700, 800]
			}
		},
		21: { // Lockdown Blow
			'*': {
				length: 1400,
				distance: 122.66,
				chains: {
					10: 30,
					18: 30
				}
			},
			1: true,
			2: true,
			30: { length: 1260 }
		},
		22: { // Iron Will
			0: {
				fixedSpeed: 1,
				length: 800
			}
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
				length: 2375,
				distance: 100,
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
			30: {
				length: 1900,
				distance: 100
			}
		},
		26: { // Backstep
			0: {
				length: 725,
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
			0: { length: 620 }
		},
		28: { // Righteous Leap
			'*': {
				distance: [29.48, 445.52, 0],
				race: {
					1: {
						distance: [20.32, 398.47, 0]
					},
					5: {
						distance: [20.32, 398.47, 0]
					},
					6: {
						distance: [20.32, 398.47, 0]
					}
				}
			},
			0: {
				length: [333, 1055, 3122],
				noInterrupt: [1, 3, 4, 5, 9, 10, 12, 13, 18, 21, 23, 24, 26, 28],
				chains: {
					15: 1,
					25: 1
				}
			},
			1: { length: [250, 791, 834] }
		},
		29: { // Guardian's Barrier
			0: {
				type: 'holdInfinite',
				fixedSpeed: 1,
				length: 700,
				endType51: true
			}
		},
		30: { // Divine Protection
			0: { length: 1250 }
		}
	},
	2: { // Slayer
		1: { // Combo Attack
			'*': { noRetry: true },
			0: {
				length: 761,
				distance: 36.68,
				race: {
					2: { distance: 50.68 },
					3: { distance: 38.8 },
					4: { distance: 40 },
					7: { distance: 60 },
					8: { distance: 31.53 },
					10: { distance: 25.08 }
				}
			},
			1: {
				length: 1021,
				distance: 35.67,
				race: {
					2: {
						length: 1051,
						distance: 30.67
					},
					3: { distance: 38.84 },
					4: { distance: 35 },
					5: { distance: 35.68 },
					7: { distance: 17 },
					8: { distance: 49.4 },
					10: { distance: 32.95 }
				}
			},
			2: {
				length: 748,
				distance: 28.05,
				race: {
					2: { distance: 33.05 },
					3: { distance: 24.22 },
					4: { distance: 20 },
					6: { distance: 22.3 },
					7: { distance: 23 },
					8: { distance: 19.33 },
					10: { distance: 22.5 }
				}
			},
			3: {
				length: 1636,
				distance: 46.76,
				race: {
					3: {
						length: 1545,
						distance: 45.32
					},
					4: { distance: 40 },
					5: { distance: 64.36 },
					6: { distance: 118.2 },
					7: { distance: 45 },
					8: { distance: 19.85 },
					10: { distance: 37.5 }
				}
			}
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
				distance: 128.69,
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
				fixedSpeed: 1,
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
				fixedSpeed: 1,
				length: 1000,
				distance: 413
			}
		},
		18: { // Overpower
			0: {
				fixedSpeed: 1,
				length: 200
			}
		},
		19: { // Tenacity
			'*': {
				fixedSpeed: 1,
				length: 700
			}
		},
		20: { // In Cold Blood
			0: {
				fixedSpeed: 1,
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
			0: {
				length: 1112,
				distance: 58.1,
				race: {
					1: { distance: 61.96 },
					2: { distance: 54.87 },
					3: { distance: 63.24 },
					4: { distance: 27.72 },
					5: {
						length: 1082,
						distance: 62.34
					},
					6: { distance: 55.69 },
					7: { distance: 64.06 },
					8: { distance: 48.89 },
					9: { distance: 78.01 },
					10: { distance: 44.22 }
				}
			},
			1: {
				length: 930,
				distance: 23.28,
				race: {
					2: { distance: 26.02 },
					3: { distance: 27.33 },
					4: { distance: 25 },
					5: {
						length: 960,
						distance: 24.52
					},
					6: { distance: 23.27 },
					7: { distance: 16.05 },
					8: { distance: 7.06 },
					9: { distance: 21.05 },
					10: { distance: 21.08 }
				}
			},
			2: {
				length: 1112,
				distance: 22.83,
				race: {
					2: { distance: 23.3 },
					3: { distance: 32.47 },
					4: { distance: 25 },
					5: { distance: 17.1 },
					7: { distance: 42.59 },
					8: { distance: 40.93 },
					9: { distance: 31.84 },
					10: { distance: 20.68 }
				}
			},
			3: {
				length: 1818,
				distance: 69.27,
				race: {
					1: { distance: 70.41 },
					2: {
						length: 1636,
						distance: 47.29
					},
					3: { distance: 55.25 },
					4: {
						length: 2000,
						distance: 45
					},
					5: {
						length: 2000,
						distance: 61.6
					},
					6: { distance: 59.47 },
					7: { distance: 51.11 },
					8: { distance: 43.68 },
					9: { distance: 54.28 },
					10: { distance: 63.26 }
				}
			}
		},
		2: { // Axe Block
			'*': {
				type: 'holdInfinite',
				consumeAbnormal: 401701
			},
			0: { fixedSpeed: 1 },
			30: true,
			31: { fixedSpeed: 1 }
		},
		3: { // Thunder Strike
			'*': {
				length: 1748,
				abnormals: {
					24170: { speed: 1.25 }
				}
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
				],
				noRetry: true
			},
			10: {
				distance: 69.7,
				rearCancelStartTime: 455,
				race: {
					1: { distance: 79.03 },
					3: { distance: 72.79 },
					4: { distance: 35 },
					7: { distance: 85.74 },
					8: { distance: 69.51 },
					9: { distance: 87.27 },
					10: { distance: 64.88 }
				},
				noRetry: true
			},
			11: {
				distance: 69.7,
				rearCancelStartTime: 455,
				race: {
					1: { distance: 79.03 },
					3: { distance: 72.79 },
					4: { distance: 35 },
					7: { distance: 85.74 },
					8: { distance: 69.51 },
					9: { distance: 87.27 },
					10: { distance: 64.88 }
				},
				noRetry: true
			},
			12: {
				distance: 69.7,
				rearCancelStartTime: 455,
				race: {
					1: { distance: 79.03 },
					3: { distance: 72.79 },
					4: { distance: 35 },
					7: { distance: 85.74 },
					8: { distance: 69.51 },
					9: { distance: 87.27 },
					10: { distance: 64.88 }
				},
				noRetry: true
			},
			13: {
				distance: 69.7,
				rearCancelStartTime: 455,
				race: {
					1: { distance: 79.03 },
					3: { distance: 72.79 },
					4: { distance: 35 },
					7: { distance: 85.74 },
					8: { distance: 69.51 },
					9: { distance: 87.27 },
					10: { distance: 64.88 }
				}
			}
		},
		4: { // Flatten
			'*': {
				length: 3112,
				distance: 75,
				glyphs: {
					24008: { speed: 1.25 },
					24050: { speed: 1.25 }
				},
				race: {
					1: { distance: 78 },
					2: { distance: 70.79 },
					3: { distance: 90.6 },
					4: { distance: 80 },
					5: { distance: 69.01 },
					7: { distance: 86.6 },
					8: { distance: 73.34 },
					9: { distance: 105.68 },
					10: { distance: 70.23 }
				}
			},
			0: {
				noInterrupt: ['3-10', '3-11', '3-12', '3-13', 4, '10-10', '10-11', '10-12', 11, '10-13', '15-10', '15-11', '15-12', '15-13', '15-14', '18-10', '18-11', '18-12', '18-13', 24, 26, 28, 29, '32-0'],
				abnormals: {
					401400: { chain: 1 }
				},
				chains: {
					6: 30,
					25: 30,
					31: 30,
					32: 30
				}
			},
			1: true,
			30: {
				length: 2337,
				distance: 75,
				abnormals: {
					401400: { chain: 31 }
				},
				race: {
					1: { distance: 78 },
					2: { distance: 70.79 },
					3: { distance: 90.6 },
					4: { distance: 80 },
					5: { distance: 69.01 },
					7: { distance: 86.6 },
					8: { distance: 73.34 },
					9: { distance: 105.68 },
					10: { distance: 70.23 }
				}
			},
			31: {
				length: 2337,
				distance: 75,
				race: {
					1: { distance: 78 },
					2: { distance: 70.79 },
					3: { distance: 90.6 },
					4: { distance: 80 },
					5: { distance: 69.01 },
					7: { distance: 86.6 },
					8: { distance: 73.34 },
					9: { distance: 105.68 },
					10: { distance: 70.23 }
				}
			}
		},
		5: { // Dash
			0: {
				noWeapon: true,
				fixedSpeed: 1,
				length: 700
			}
		},
		6: { // Staggering Strike
			'*': {
				length: 1294,
				distance: 66.21,
				race: {
					1: { distance: 79.19 },
					2: {
						length: 1385,
						distance: 82.34
					},
					3: { distance: 71.34 },
					4: { distance: 50.07 },
					7: { distance: 82.34 },
					8: { distance: 53.41 },
					9: {
						length: 1264,
						distance: 80.47
					},
					10: { distance: 70 }
				},
				hasChains: true,
				noRetry: true
			},
			0: {
				abnormalChains: { 401400: 30 }
			},
			30: true
		},
		7: { // Mocking Shout (removed)
			'*': {
				length: [308, 1079],
				fixedSpeed: 1
			},
			0: true
		},
		8: { // Fiery Rage
			'*': { fixedSpeed: 1 },
			0: {
				length: 1415,
				abnormalChains: { 401400: 30 },
				race: {
					7: { length: 1445 }
				}
			},
			1: { length: [455, 597] },
			30: {
				length: 1742,
				race: {
					7: { length: 1767 }
				}
			}
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
				length: 1333,
				distance: 50,
				rearCancelStartTime: 300,
				race: {
					2: { length: 1400 },
					3: { length: 1800 },
					6: { length: 1366 }
				},
				noRetry: true
			},
			11: {
				length: [366, 366, 1333],
				distance: [33.33, 33.33, 50],
				rearCancelStartTime: 300,
				noRetry: true
			},
			12: {
				length: [366, 366, 366, 366, 1333],
				distance: [33.33, 33.33, 33.33, 33.33, 50],
				rearCancelStartTime: 300,
				noRetry: true
			},
			13: {
				length: [366, 366, 366, 366, 1333],
				distance: [33.33, 33.33, 33.33, 33.33, 50],
				rearCancelStartTime: 300
			}
		},
		11: { // Leaping Strike
			0: {
				length: 2191,
				distance: 250,
				race: {
					8: { length: 2232 }
				}
			}
		},
		13: { // Retaliate
			0: {
				type: 'retaliate',
				length: 1633,
				noRetry: true
			}
		},
		15: { // Vampiric Blow
			'*': { length: 1933 },
			0: {
				type: 'charging',
				length: [800, 800, 800],
				noInterrupt: [2],
				overchargeReleaseChain: 14,
				abnormals: {
					400500: { chargeSpeed: 0.2 },
					400501: { chargeSpeed: 0.4 }
				},
				noRetry: true
			},
			10: {
				distance: 69.7,
				race: {
					1: { distance: 79.03 },
					3: { distance: 72.79 },
					4: { distance: 35 },
					7: { distance: 85.74 },
					8: { distance: 69.51 },
					9: { distance: 87.27 },
					10: { distance: 64.88 }
				},
				noRetry: true
			},
			11: {
				distance: 69.7,
				race: {
					1: { distance: 79.03 },
					3: { distance: 72.79 },
					4: { distance: 35 },
					7: { distance: 85.74 },
					8: { distance: 69.51 },
					9: { distance: 87.27 },
					10: { distance: 64.88 }
				},
				noRetry: true
			},
			12: {
				distance: 69.7,
				race: {
					1: { distance: 79.03 },
					3: { distance: 72.79 },
					4: { distance: 35 },
					7: { distance: 85.74 },
					8: { distance: 69.51 },
					9: { distance: 87.27 },
					10: { distance: 64.88 }
				},
				noRetry: true
			},
			13: {
				distance: 69.7,
				race: {
					1: { distance: 79.03 },
					3: { distance: 72.79 },
					4: { distance: 35 },
					7: { distance: 85.74 },
					8: { distance: 69.51 },
					9: { distance: 87.27 },
					10: { distance: 64.88 }
				}
			},
			14: {
				distance: 69.7,
				race: {
					1: { distance: 79.03 },
					3: { distance: 72.79 },
					4: { distance: 35 },
					7: { distance: 85.74 },
					8: { distance: 69.51 },
					9: { distance: 87.27 },
					10: { distance: 64.88 }
				},
				noRetry: true
			}
		},
		16: { // Fearsome Shout
			0: {
				fixedSpeed: 1,
				length: [700, 1433]
			}
		},
		18: { // Lethal Strike
			'*': {
				distance: 168.11,
				race: {
					1: { distance: 188.37 },
					3: { distance: 173.19 },
					4: { distance: 145 },
					7: { distance: 191.79 },
					8: { distance: 240.4 },
					9: { distance: 167.62 },
					10: { distance: 158.11 }
				}
			},
			0: {
				length: 687,
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
			30: { length: 550 }
		},
		19: { // Triumphant Shout
			'*': {
				fixedSpeed: 1,
				length: [500, 700]
			},
			0: true
		},
		20: { // Inescapable Doom
			0: {
				fixedSpeed: 1,
				length: [600, 900]
			}
		},
		21: { // Bloodlust
			0: {
				fixedSpeed: 1,
				length: 700
			}
		},
		24: { // Evasive Smash
			'*': {
				length: 1833,
				distance: 168.11,
				race: {
					1: { distance: 188.37 },
					3: { distance: 173.19 },
					4: { distance: 145 },
					7: { distance: 191.79 },
					8: { distance: 240.4 },
					9: {
						length: 1633,
						distance: 167.62
					},
					10: { distance: 158.11 }
				}
			},
			0: {
				type: 'storeCharge',
				length: 1000,
				distance: 150
			},
			5: { type: 'grantCharge' },
			10: true,
			11: true,
			12: true,
			13: true
		},
		25: { // Raze
			'*': {
				length: 1200,
				distance: 96,
				glyphs: {
					24078: { speed: 1.25 }
				}
			},
			0: {
				noInterrupt: [4, 6, '6-30', 11, '18-10', '18-11', '18-12', '18-13', 24, 26, 28, 29, '32-0'],
				abnormals: {
					401400: { chain: 1 }
				},
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
			1: true,
			30: {
				length: 960,
				abnormals: {
					401400: { chain: 31 }
				}
			},
			31: { length: 960 }
		},
		26: { // Tackle
			0: {
				length: 1010,
				distance: 80
			}
		},
		27: { // Unbreakable
			0: {
				length: 2066,
				noInterrupt: [1, '3-10', '3-11', '3-12', '3-13', 4, 6, '8-30', '10-10', '10-11', '10-12', '10-13', 11, 13, '15-10', '15-11', '15-12', '15-13', '15-14', 18, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33],
				interruptibleWithAbnormal: { 401705: 33 },
				abnormalChains: { 401705: 30 },
				race: {
					7: { length: 2099 }
				}
			},
			30: { length: 1455 }
		},
		28: { // Intimiation
			'*': {
				length: 1566,
				race: {
					7: { length: 1599 }
				}
			},
			0: true,
			50: true
		},
		29: { // Evasive Roll
			0: {
				length: 909,
				distance: 150,
				forceClip: true,
				noInterrupt: [29]
			}
		},
		30: { // Axe Counter
			'*': {
				length: 655,
				distance: 23.28,
				noInterrupt: [1, '3-10', '3-11', '3-12', '3-13', 4, 6, '8-30', '10-10', '10-11', '10-12', '10-13', 11, 12, 13, '15-10', '15-11', '15-12', '15-13', '15-14', '18-10', '18-11', '18-12', '18-13', 24, 25, 26, 27, 28, 29, 30, 31, 32],
				requiredBuff: 401402,
				chains: { 2: 30 },
				race: {
					2: { distance: 26.02 },
					3: { distance: 27.33 },
					4: { distance: 25 },
					5: {
						length: 677,
						distance: 24.52
					},
					6: { distance: 23.27 },
					7: { distance: 16.05 },
					8: {
						length: 1189,
						distance: 240.4
					},
					9: { distance: 21.05 },
					10: { distance: 21.08 }
				}
			},
			0: true,
			30: true
		},
		31: { // Overwhelm
			0: {
				type: 'dash',
				fixedSpeed: 1,
				length: 1115,
				distance: 467.88
			},
			1: {
				length: 1511,
				distance: 168.11,
				race: {
					1: { distance: 188.37 },
					3: { distance: 173.19 },
					4: { distance: 145 },
					7: { distance: 191.79 },
					8: { distance: 240.4 },
					9: {
						length: 1344,
						distance: 167.62
					},
					10: { distance: 158.11 }
				}
			}
		},
		32: { // Punishing Strike
			0: {
				length: 772,
				distance: 34.93,
				race: {
					2: { distance: 39.03 },
					3: { distance: 40.99 },
					4: { distance: 37.5 },
					5: {
						length: 797,
						distance: 36.78
					},
					6: { distance: 34.91 },
					7: { distance: 24.08 },
					8: {
						length: 925,
						distance: 61.39
					},
					9: { distance: 31.57 },
					10: { distance: 31.63 }
				}
			},
			1: {
				length: 800,
				distance: 134.49,
				race: {
					1: { distance: 150.7 },
					3: { distance: 138.55 },
					4: { distance: 116 },
					7: { distance: 153.43 },
					8: { distance: 192.32 },
					9: { distance: 134.1 },
					10: { distance: 126.49 }
				}
			}
		},
		33: { // Unleash
			0: { length: [700, 1500, 1766] }
		},
		34: { // Unleash: Dexter
			'*': {
				length: 2266,
				distance: 25,
				requiredBuff: 401705,
				abnormals: {
					401716: { chain: 31 }
				},
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
			30: { length: 1666 },
			31: { length: 1666 }
		},
		35: { // Unleash: Sinister
			'*': {
				length: 1966,
				distance: 180,
				requiredBuff: 401705,
				abnormals: {
					401717: { chain: 31 }
				},
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
			30: {
				length: 1474,
				distance: 25
			},
			31: {
				length: 1474,
				distance: 25
			}
		},
		36: { // Unleash: Rampage
			'*': {
				length: 1589,
				distance: 35,
				requiredBuff: 401705,
				abnormals: {
					401708: { speed: 1.2 },
					401718: { chain: 31 }
				},
				noRetry: true
			},
			0: {
				length: 2714,
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
				length: [611, 694, 722, 396, 1094],
				distance: [114.55, 131.66, 137.36, 8.55, 114.74],
				noInterrupt: [37],
				requiredBuff: 401705,
				race: {
					2: { distance: [120, 137.14, 142.86, 8.55, 114.74] },
					3: { distance: [120, 137.14, 142.86, 8.55, 114.74] },
					9: { distance: [120, 137.14, 142.86, 8.55, 114.74] }
				}
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
		}
	},
	4: { // Sorcerer
		1: { // Fireball
			0: { length: 725 }
		},
		2: { // Frost Sphere
			0: {
				length: 800,
				race: {
					4: { length: 1250 }, // Male Aman
					9: { length: 1000 }, // Elin
					10: { length: 900 } // Baraka
				}
			}
		},
		3: { // Lightning Trap
			0: {
				length: 1300,
				abnormals: {
					25090: { speed: 1.4 }
				}
			}
		},
		4: { // Arcane Pulse
			'*': {
				length: 1293,
				race: {
					9: { length: 991 }
				},
				noRetry: true
			},
			0: {
				type: 'charging',
				length: [800, 800],
				abnormals: {
					25140: { chargeSpeed: 0.3 }
				}
			},
			10: {
				abnormals: {
					500150: { skill: 330110 },
					501650: { skill: 330150 }
				}
			},
			11: {
				abnormals: {
					500150: { skill: 330111 },
					501650: { skill: 330150 }
				}
			},
			12: {
				abnormals: {
					500150: { skill: 330112 },
					501650: { skill: 330150 }
				}
			}
		},
		5: { // Mana Infusion
			0: { length: 4600 }
		},
		6: { // Meteor Strike
			0: {
				length: 3925,
				glyphs: {
					25003: { speed: 1.17 },
					25069: { speed: 1.25 }
				},
				abnormals: {
					25100: { speed: 1.25 },
					500150: { skill: 320100 },
					501650: { skill: 320150 }
				},
				race: {
					9: { length: 3700 } // Elin
				}
			}
		},
		7: { // Backstep
			0: {
				length: 650,
				distance: -200,
				forceClip: true
			}
		},
		8: { // Flame Pillar
			0: {
				length: 1200,
				abnormals: {
					25070: { speed: 1.25 }
				}
			}
		},
		10: { // Mana Barrier
			0: { length: 625 }
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
			0: { length: 925 }
		},
		13: { // Mindblast
			0: {
				length: 2325,
				glyphs: {
					25048: { speed: 1.3 }
				},
				abnormals: {
					25110: { speed: 1.4 }
				}
			}
		},
		16: { // Painblast
			0: {
				length: 1580,
				race: {
					9: { length: 1330 } // Elin
				}
			}
		},
		17: { // Painful Trap
			0: { length: 1100 }
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
				fixedSpeed: 1,
				length: 4900
			},
			10: {
				type: 'lockonCast',
				length: 1500,
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
				fixedSpeed: 1,
				length: 4900
			},
			10: {
				type: 'lockonCast',
				fixedSpeed: 1,
				length: [300, 1200]
			}
		},
		22: { // Burning Breath
			'*': { noRetry: true },
			0: {
				type: 'lockon',
				fixedSpeed: 1,
				length: 4900
			},
			10: {
				type: 'lockonCast',
				fixedSpeed: 1,
				length: [300, 1200]
			}
		},
		23: { // Mana Volley
			'*': { noRetry: true },
			0: {
				type: 'lockon',
				fixedSpeed: 1,
				length: 4900
			},
			10: {
				type: 'lockonCast',
				fixedSpeed: 1,
				length: [325, 875]
			}
		},
		25: { // Time Gyre
			'*': { noRetry: true },
			0: {
				type: 'lockon',
				fixedSpeed: 1,
				length: 4900
			},
			10: {
				type: 'lockonCast',
				fixedSpeed: 1,
				length: 700
			}
		},
		26: { // Teleport Jaunt
			0: {
				type: 'teleport',
				length: [200, 260],
				distance: [0, 333],
				noInterrupt: [26],
				teleportStage: 1,
				noRetry: true
			}
		},
		27: { // Hailstorm
			0: { length: 950 }
		},
		30: { // Nova
			0: {
				length: 2850,
				glyphs: {
					25092: { speed: 1.3 }
				}
			}
		},
		31: { // Warp Barrier
			'*': { length: 475 },
			0: true,
			10: true,
			20: true
		},
		32: { // Meteor Shower
			'*': {
				length: 6775,
				glyphs: {
					25003: { speed: 1.17 },
					25069: { speed: 1.25 }
				},
				noRetry: true,
				race: {
					9: { length: 6475 } // Elin
				}
			},
			0: true,
			50: { length: 3700 }
		},
		33: { // Arcane Pulse (Mana Boost)
			'*': {
				length: 1275,
				noRetry: true,
				race: {
					9: { length: 1015 } // Elin
				}
			},
			10: true,
			11: true,
			12: true,
			50: true
		},
		34: { // Mana Boost
			0: { length: 750 }
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
				fixedSpeed: 1,
				length: 4900
			},
			10: {
				type: 'lockonCast',
				length: 1225
			}
		},
		3: { // Radiant Arrow
			'*': {
				length: 1750,
				noRetry: true
			},
			0: {
				type: 'charging',
				length: [600, 600, 600],
				abnormals: {
					26180: { chargeSpeed: 0.3 },
					601450: { chargeSpeed: 0.5 }
				}
			},
			10: { distance: -100 }, // Cast F. - TODO
			11: { distance: -100 },
			12: { distance: -100 },
			13: { distance: -100 }
		},
		4: { // Penetrating Arrow
			'*': {
				length: 1300,
				noRetry: true
			},
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
			10: { distance: -50 }, // Cast F. - TODO
			11: { distance: -50 },
			12: { distance: -50 },
			13: { distance: -50 }
		},
		5: { // Rain of Arrows
			0: {
				length: 3150,
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
				length: 650,
				distance: -200,
				forceClip: true
			}
		},
		7: { // Feign Death
			0: {
				length: [2950, 54525, 1675],
				distance: [-114.05, 0, 0]
			}
		},
		8: { // Rapid Fire
			'*': { noRetry: true },
			0: {
				length: 425,
				noInterrupt: [6]
			},
			1: { length: 600 },
			2: { length: 700 },
			3: { length: 700 },
			4: { length: 700 },
			5: { length: 700 },
			6: { length: 1235 }
		},
		9: { // Slow Trap
			0: { length: 1150 }
		},
		10: { // Stunning Trap
			0: { length: 1150 }
		},
		12: { // Velik's Mark
			0: { length: 200 }
		},
		15: { // Incendiary Trap
			0: { length: 1150 }
		},
		16: { // Breakaway Bolt
			0: {
				length: 1325,
				distance: -250,
				forceClip: true
			}
		},
		17: { // Web Arrow
			0: { length: 525 }
		},
		18: { // Close Quarters
			0: {
				length: 300,
				distance: 64.46,
				race: {
					1: {
						length: 333,
						distance: 48.1
					},
					2: { distance: 57.88 },
					3: { distance: 63.42 },
					4: { length: 333 },
					6: { distance: 60.95 },
					7: {
						length: 333,
						distance: 48
					},
					8: {
						length: 333,
						distance: 89.8
					},
					9: { distance: 54.68 },
					10: {
						length: 333,
						distance: 54.46
					}
				}
			},
			1: {
				length: 1200,
				distance: 73.69,
				race: {
					1: { distance: 87.29 },
					2: { distance: 79.11 },
					3: { distance: 54.45 },
					4: { distance: 66.18 },
					5: { distance: 26.65 },
					6: { distance: 77.2 },
					7: { distance: 66 },
					8: { distance: 48.35 },
					9: { distance: 56.9 },
					10: { distance: 83.69 }
				}
			}
		},
		19: { // Poison Arrow
			0: { length: 1125 }
		},
		20: { // Restraining Arrow
			0: { length: 525 }
		},
		22: { // Sequential Fire
			0: {
				length: 425,
				requiredBuff: 600200,
				noRetry: true
			}
		},
		25: { // Incendiary Trap Arrow
			0: { length: 1200 }
		},
		29: { // Thunderbolt
			0: {
				length: 3750,
				glyphs: {
					26089: { speed: 1.3 },
					26102: { speed: 1.3 }
				}
			}
		},
		31: { // Tenacity
			0: {
				fixedSpeed: 1,
				length: [500, 700]
			}
		},
		32: { // Find Weakness
			0: {
				fixedSpeed: 1,
				length: 200
			}
		},
		33: { // Chase
			0: {
				type: 'dash',
				fixedSpeed: 1,
				length: 1000,
				distance: 413
			}
		}
	},
	6: { // Priest
		1: { // Divine Radiance
			0: { length: 619 },
			1: { length: 650 },
			2: { length: 684 },
			3: { length: 722 }
		},
		2: { // Regeneration Circle
			0: {
				length: 2149,
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
				},
				race: {
					10: { length: 2774 }
				}
			}
		},
		3: { // Healing Circle
			0: {
				length: 1763,
				chains: {
					19: 30,
					26: 30,
					38: 30
				}
			},
			30: { length: 1477 }
		},
		5: { // Blessing of Shakan
			0: { length: 1294 }
		},
		6: { // Arise
			0: { length: 839 }
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
			0: { length: 1294 }
		},
		11: { // Metamorphic Blast
			'*': { length: 839 },
			0: true,
			1: true,
			2: true
		},
		12: { // Resurrect
			0: {
				length: 5900,
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
		14: { // Summon: Party
			0: {
				length: 4505,
				race: {
					0: { length: 4535 }
				}
			}
		},
		16: { // Shocking Implosion
			'*': { length: 1718 },
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
			11: { length: 1438 },
			20: {
				chains: {
					11: 21,
					27: 21
				}
			},
			21: { length: 1438 },
			30: { length: 1438 }
		},
		17: { // Prayer of Peace
			0: {
				length: [925, 925, 850],
				glyphs: {
					28021: { speed: 2 }
				}
			}
		},
		18: { // Heal Thyself
			0: {
				noWeapon: true,
				length: 1266
			}
		},
		19: { // Focus Heal
			'*': { noRetry: true },
			0: {
				type: 'lockon',
				fixedSpeed: 1,
				length: 54440
			},
			10: {
				type: 'lockonCast',
				length: 1950
			}
		},
		22: { // Kaia's Shield
			0: { length: 667 }
		},
		23: { // Blessing of Balder
			0: { length: 1300 }
		},
		26: { // Fiery Escape
			0: {
				length: 1125,
				distance: -250.5,
				forceClip: true
			}
		},
		27: { // Final Reprisal
			'*': {
				length: 2933,
				noInterrupt: [27],
				race: {
					9: { length: 3333 }
				}
			},
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
			11: {
				length: 1113,
				race: {
					9: { length: 1273 }
				}
			},
			20: {
				chains: {
					11: 21,
					16: 21,
					29: 21,
					40: 21
				}
			},
			21: {
				length: 1113,
				race: {
					9: { length: 1273 }
				}
			},
			30: {
				length: 1113,
				race: {
					9: { length: 1273 }
				}
			}
		},
		28: { // Mana Charge / Words of Vitality
			'*': {
				length: 827,
				noRetry: true,
				level: {
					1: { length: 700 }
				}
			},
			0: {
				type: 'charging',
				length: [800, 1600],
				autoRelease: 0,
				glyphs: {
					28031: { chargeSpeed: 0.25 }
				},
				level: {
					1: {
						length: [833, 833, 833], // TODO: DC says 900, 900, 900
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
			'*': { noRetry: true },
			0: {
				type: 'lockon',
				fixedSpeed: 1,
				length: 4900
			},
			10: {
				type: 'lockonCast',
				fixedSpeed: 1,
				length: 1430
			}
		},
		31: { // Guardian Sanctuary
			0: {
				fixedSpeed: 1,
				length: 700
			}
		},
		32: { // Divine Respite
			0: {
				noWeapon: true,
				fixedSpeed: 1,
				length: [1300, 900]
			}
		},
		33: { // Ishara's Lulliby
			'*': { noRetry: true },
			0: {
				type: 'lockon',
				fixedSpeed: 1,
				length: 4900
			},
			10: {
				type: 'lockonCast',
				fixedSpeed: 1,
				length: [300, 1430]
			}
		},
		34: { // Restorative Burst
			0: { length: 1433 }
		},
		35: { // Energy Stars
			'*': { noRetry: true },
			0: {
				type: 'lockon',
				fixedSpeed: 1,
				length: 4900
			},
			10: {
				type: 'lockonCast',
				fixedSpeed: 1,
				length: 1430
			}
		},
		37: { // Healing Immersion
			'*': { noRetry: true },
			0: {
				type: 'lockon',
				fixedSpeed: 1,
				length: 4900,
				noInterrupt: [37],
				partyOnly: true
			},
			10: {
				type: 'lockonCast',
				fixedSpeed: 1,
				length: 1430,
				noInterrupt: ['37-10']
			}
		},
		38: { // Backstep
			0: {
				length: 650,
				distance: -200,
				forceClip: true
			}
		},
		39: { // Grace of Resurrection
			0: { length: 5904 }
		},
		40: { // Zenobia's Vortex
			'*': { length: 1071 },
			0: true,
			10: true,
			20: true
		},
		41: { // Divine Intervention / Divine Vitality
			'*': { noRetry: true },
			0: {
				type: 'lockon',
				fixedSpeed: 1,
				length: 54445,
				partyOnly: true
			},
			10: {
				type: 'lockonCast',
				length: 925
			}
		},
		42: { // Holy Burst
			'*': { length: 800 },
			20: true,
			30: true
		},
		43: { // Words of Judgement
			0: { length: 1417 },
			50: { length: 200 }
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
				fixedSpeed: 1
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
				fixedSpeed: 1
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
				fixedSpeed: 1,
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
				fixedSpeed: 1,
				noRetry: true
			},
			0: { type: 'lockon' },
			10: { type: 'lockonCast' }
		},
		25: { // Thrall of Protection
			'*': {
				fixedSpeed: 1,
				length: [1000, 1700],
				cooldownEnd: 300
			},
			0: true,
			10: true,
			30: true
		},
		27: { // Thrall of Life
			'*': {
				fixedSpeed: 1,
				length: [229, 438],
				cooldownEnd: 300
			},
			0: true,
			10: true,
			30: true
		},
		28: { // Sonorous Dreams
			'*': {
				fixedSpeed: 1,
				noRetry: true
			},
			0: { type: 'lockon' },
			10: {
				type: 'lockonCast',
				length: 1400
			}
		},
		29: { // Regression
			0: { fixedSpeed: 1 }
		},
		30: { // Curse of Exhaustion
			'*': {
				fixedSpeed: 1,
				noRetry: true
			},
			0: { type: 'lockon' },
			10: {
				type: 'lockonCast',
				length: 1400
			}
		},
		31: { // Curse of Confusion
			'*': {
				fixedSpeed: 1,
				noRetry: true
			},
			0: { type: 'lockon' },
			10: {
				type: 'lockonCast',
				length: 1400
			}
		},
		32: { // Mire
			'*': {
				fixedSpeed: 1,
				noRetry: true
			},
			0: { type: 'lockon' },
			10: {
				type: 'lockonCast',
				length: 1400
			}
		},
		33: { // Thrall of Vengeance
			'*': {
				fixedSpeed: 1,
				length: [267, 511],
				cooldownEnd: 300
			},
			0: true,
			10: true,
			30: true
		},
		34: { // Thrall of Wrath
			'*': {
				fixedSpeed: 1,
				length: [1000, 1700],
				cooldownEnd: 300
			},
			0: true,
			10: true,
			30: true
		},
		35: { // Command: Attack
			0: { fixedSpeed: 1 }
		},
		36: { // Command: Follow
			0: { fixedSpeed: 1 }
		},
		37: { // Warding Totem
			0: true
		},
		41: { // Contagion
			'*': { noRetry: true },
			0: {
				type: 'lockon',
				fixedSpeed: 1
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
			0: { fixedSpeed: 1 }
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
				abnormals: {
					10151020: { chain: 2 },
					10151021: { chain: 3 },
					10151022: { chain: 4 },
					10151023: { chain: 5 }
				},
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
				noRetry: true
			},
			0: {
				abnormalChains: { 10151010: 40 },
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
			31: true,
			40: true,
			60: true,
			61: true
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
			1: true
		},
		15: { // Retribution
			30: { fixedSpeed: 1 }
		},
		16: { // Shadow Reaping
			0: { fixedSpeed: 1 }
		},
		/*20: { // Cable Step
			0: {
				type: 'dynamicDistance',
				length: 1250
			}
		},*/
		40: { // Shadow Step
			'*': {
				forceClip: true,
				abnormalChains: { 10151000: 30 }
			},
			0: true,
			30: true
		}
	},
	9: { // Gunner
		'*': { consumeAbnormal: [10152010, 10152011] },
		1: { // Blast
			'*': {
				fixedSpeed: 1,
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
				fixedSpeed: 1,
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
				length: 1725,
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
				length: 1525,
				distance: 137.88,
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
			0: {
				length: 850,
				noRetry: true
			},
			1: {
				fixedSpeed: 1,
				length: 122,
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
			}
		},
		6: { // Time Bomb
			'*': {
				fixedSpeed: 1,
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
				fixedSpeed: 1,
				noInterrupt: [7],
				triggerAbnormal: { 10152010: 3100 },
				noRetry: true
			},
			2: {
				fixedSpeed: 1,
				noInterrupt: [7],
				triggerAbnormal: { 10152010: 3100 },
				noRetry: true
			},
			3: { length: 1200 }
		},
		9: { // Mana Missiles
			'*': { length: 1250 },
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
			'*': {
				length: 1325,
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
				},
				noRetry: true
			},
			1: true,
			2: true,
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
			30: true
		},
		11: { // Rocket Jump
			'*': {
				length: 1400,
				distance: 415.45,
				noInterrupt: [15],
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
			1: true,
			2: true,
			30: true,
			31: {
				length: 1675,
				distance: 506.27,
				race: {
					7: { // Female Castanic
						length: 1700,
						distance: 503.64
					}
				}
			}
		},
		13: { // Balder's Vengeance
			'*': {
				length: 5800,
				distance: -269.09,
				noInterrupt: [13],
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
				},
				noRetry: true
			},
			1: true,
			2: true,
			30: true
		},
		15: { // Replenishment
			'*': {
				fixedSpeed: 1,
				length: 1325,
				noInterrupt: [15],
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
			1: true,
			2: true,
			30: true
		},
		18: { // HB
			'*': {
				fixedSpeed: 1,
				length: 1430
			},
			1: true,
			2: true
		},
		19: { // ST
			'*': {
				length: 1325,
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
				},
				noRetry: true
			},
			1: true,
			2: true,
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
			30: true
		},
		20: { // Retaliate
			0: {
				type: 'retaliate',
				length: 1485,
				noRetry: true
			}
		},
		40: { // Rolling Reload
			0: {
				fixedSpeed: 1,
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
				length: 1579,
				distance: 70.2,
				triggerAbnormal: { 10153060: 3000 },
				consumeAbnormalEnd: 10153060,
				noInterrupt: ['1-3'],
				chains: {
					'1-0': 1,
					'1-1': 2,
					'1-2': 3,
					'1-30': 1,
					'1-31': 32,
					'1-32': 2,
					'2-2': 31,
					'2-3': 31,
					2: 30,
					'3-1': 30,
					4: 30,
					5: 30,
					6: 30,
					7: 30,
					8: 30,
					9: 30,
					10: 30,
					13: 30,
					14: 30,
					15: 30,
					16: 30,
					17: 30,
					18: 30,
					19: 30,
					20: 30,
					21: 30,
					40: 30
				},
				noRetry: true,
				race: {
					1: { distance: 71.28 }
				}
			},
			0: true,
			1: {
				length: 1277,
				distance: 67.57,
				race: {
					1: { distance: 68.63 }
				}
			},
			2: {
				length: 933,
				distance: 50.7
			},
			3: {
				length: 1733,
				distance: 121
			},
			30: true,
			31: true,
			32: {
				length: 1277,
				distance: 67.57,
				race: {
					1: { distance: 68.63 }
				}
			}
		},
		2: { // Counter
			'*': {
				hasChains: true,
				noRetry: true
			},
			1: {
				length: 1200,
				distance: 138.39,
				triggerAbnormal: { 10153001: 0x7fffffff },
				consumeAbnormalEnd: 10153001,
				race: {
					1: { distance: 139.97 }
				}
			},
			2: {
				length: 1818,
				distance: 84,
				triggerAbnormal: { 10153002: 0x7fffffff },
				consumeAbnormalEnd: 10153002
			},
			3: {
				length: 1932,
				distance: 130.65,
				triggerAbnormal: { 10153003: 0x7fffffff },
				consumeAbnormalEnd: 10153003,
				race: {
					1: { distance: 131.2 }
				}
			},
			4: {
				length: 1973,
				distance: 142.86,
				triggerAbnormal: { 10153004: 0x7fffffff },
				consumeAbnormalEnd: 10153004
			},
			10: {
				type: 'holdInfinite',
				fixedSpeed: 1,
				distance: 33.38,
				triggerAbnormal: { 10153006: 0x7fffffff },
				consumeAbnormalEnd: 10153006,
				endType51: true
			},
			11: {
				type: 'holdInfinite',
				fixedSpeed: 1,
				distance: 33.38,
				triggerAbnormal: { 10153005: 0x7fffffff },
				consumeAbnormalEnd: 10153005,
				endType51: true
			},
			12: {
				chains: {
					'1-0': 1,
					'1-1': 2,
					'1-2': 3,
					'1-3': 4,
					'1-30': 1,
					'1-31': 1,
					'1-32': 2
				}
			}
		},
		3: { // Divine Wrath
			'*': {
				fixedSpeed: 1,
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
			'*': { length: 3235 },
			0: true,
			30: true
		},
		5: { // Bullrush
			0: {
				fixedSpeed: 1,
				length: [2950, 650],
				distance: [0, 135]
			}
		},
		6: { // Haymaker
			'*': {
				length: [1022, 1833],
				distance: [0, 171.61],
				abnormalChains: { 31120: 31 },
				chains: {
					1: 30,
					2: 30,
					'3-1': 30,
					4: 30,
					5: 30,
					6: 30,
					7: 30,
					8: 30,
					9: 30,
					14: 30,
					15: 30,
					16: 30,
					17: 30,
					18: 30,
					20: 30,
					40: 30
				}
			},
			1: true,
			2: true,
			30: true,
			31: true
		},
		7: { // Roundhouse Kick
			'*': {
				length: 860,
				distance: 105,
				noInterrupt: [7],
				hasChains: true
			},
			0: true,
			30: true
		},
		8: { // Piledriver
			'*': {
				length: 1950,
				distance: 164.94,
				abnormalChains: { 31120: 31 },
				chains: {
					1: 30,
					2: 30,
					'3-1': 30,
					4: 30,
					5: 30,
					6: 30,
					7: 30,
					8: 30,
					9: 30,
					14: 30,
					15: 30,
					16: 30,
					17: 30,
					18: 30,
					20: 30,
					40: 30
				}
			},
			1: true,
			2: true,
			30: true,
			31: true
		},
		9: { // Jackhammer
			'*': {
				fixedSpeed: 1,
				length: 1540,
				distance: 40,
				noInterrupt: [9],
				abnormalChains: { 31120: 31 },
				chains: {
					1: 30,
					2: 30,
					'3-1': 30,
					4: 30,
					5: 30,
					6: 30,
					7: 30,
					8: 30,
					9: 30,
					14: 30,
					15: 30,
					16: 30,
					17: 30,
					18: 30,
					20: 30,
					40: 30
				}
			},
			1: true,
			2: true,
			30: true,
			31: true
		},
		10: { // Counterpunch
			'*': {
				length: 1850,
				distance: 155,
				requiredBuff: 10153000,
				chains: {
					1: 30,
					2: 30,
					'3-1': 30,
					4: 30,
					5: 30,
					6: 30,
					7: 30,
					8: 30,
					9: 30,
					14: 30,
					15: 30,
					16: 30,
					17: 30,
					18: 30,
					20: 30,
					40: 30
				}
			},
			0: true,
			30: true
		},
		13: { // Provoke
			'*': {
				fixedSpeed: 1,
				length: 1275
			},
			1: true,
			2: true
		},
		14: { // Infuriate
			'*': { length: 1650 },
			1: true,
			2: true,
			30: true
		},
		16: { // Flip Kick
			'*': {
				length: 2050,
				distance: 134,
				hasChains: true
			},
			1: true,
			2: true,
			30: true
		},
		21: { // Mounting Rage
			'*': {
				fixedSpeed: 1,
				length: 1275
			},
			1: true,
			2: true
		},
		22: { // Flying Kick
			'*': { hasChains: true },
			0: {
				length: 1815,
				distance: 245.21,
				noInterrupt: [22],
				abnormalChains: {
					10153190: 30,
					10153191: 30,
					10153192: 30,
					10153193: 30,
					10153194: 30,
					10153195: 30
				},
				chains: {
					1: 30,
					2: 30,
					'3-1': 30,
					4: 30,
					5: 30,
					6: 30,
					7: 30,
					8: 30,
					9: 30,
					10: 30,
					13: 30,
					14: 30,
					15: 30,
					16: 30,
					17: 30,
					18: 30,
					19: 30,
					20: 30,
					22: 30,
					21: 30,
					24: 30,
					26: 30,
					40: 30
				},
				race: {
					1: { distance: 246.02 }
				}
			},
			30: {
				length: 1222,
				distance: 351.98
			}
		},
		24: { // One-Inch Punch
			'*': {
				length: 2000,
				distance: 16.59,
				race: {
					1: { distance: 23.7 }
				},
				hasChains: true
			},
			1: {
				abnormalChains: { 31120: 31 },
				chains: {
					1: 30,
					2: 30,
					'3-1': 30,
					4: 30,
					5: 30,
					6: 30,
					7: 30,
					8: 30,
					9: 30,
					10: 30,
					13: 30,
					14: 30,
					15: 30,
					16: 30,
					17: 30,
					18: 30,
					19: 30,
					20: 30,
					21: 30,
					22: 30,
					24: 30,
					26: 30,
					40: 30
				}
			},
			2: {
				abnormalChains: {
					31120: 31,
					10153190: 30,
					10153191: 30,
					10153192: 30,
					10153193: 30,
					10153194: 30,
					10153195: 30
				},
				chains: {
					1: 30,
					2: 30,
					'3-1': 30,
					4: 30,
					5: 30,
					6: 30,
					7: 30,
					8: 30,
					9: 30,
					10: 30,
					13: 30,
					14: 30,
					15: 30,
					16: 30,
					17: 30,
					18: 30,
					19: 30,
					20: 30,
					21: 30,
					22: 30,
					24: 30,
					26: 30,
					40: 30
				}
			},
			30: { length: 950 },
			31: { length: 950 }
		},
		26: { // Rythmic Blows
			'*': {
				length: [179, 413],
				distance: [0, 30],
				hasChains: true,
				noRetry: true
			},
			0: {
				abnormalChains: {
					10153001: 3,
					10153002: 3,
					10153003: 3,
					10153004: 3,
					10153190: 2,
					10153191: 3,
					10153192: 4,
					10153193: 5,
					10153194: 6,
					10153195: 7
				},
				chains: {
					1: 2,
					2: 2,
					'3-1': 2,
					4: 2,
					5: 2,
					6: 2,
					7: 2,
					8: 2,
					9: 2,
					10: 2,
					13: 2,
					14: 2,
					15: 2,
					16: 2,
					17: 2,
					18: 2,
					19: 2,
					20: 2,
					21: 2,
					22: 2,
					24: 2,
					26: 2,
					40: 2
				}
			},
			1: true,
			2: {
				length: 782,
				distance: 6
			},
			3: {
				length: 782,
				distance: 6
			},
			4: {
				length: 716,
				distance: 6
			},
			5: {
				length: 916,
				distance: 6
			},
			6: {
				length: 2780,
				distance: 24
			},
			7: {
				length: 1571,
				distance: 24
			}
		},
		40: { // Quick Dash
			'*': {
				fixedSpeed: 1,
				length: 588,
				distance: 144,
				forceClip: true,
				abnormalChains: { 10153150: 30 },
				noRetry: true
			},
			0: true,
			30: true,
		}
	},
	11: { // Ninja
		'*': { consumeAbnormal: [10154000, 10154001, 10154002, 10154003, 10154004, 10154005, 10154006] },
		1: { // Combo Attack
			'*': {
				fixedSpeed: 1,
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
				fixedSpeed: 1,
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
				fixedSpeed: 1,
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
					3: null,
					4: null,
					6: null,
					7: null,
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
				fixedSpeed: 1,
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
				length: [700, 1375, 325],
				distance: [0, 367.31, 0],
				hasChains: true,
				noRetry: true
			},
			0: {
				noInterrupt: [9, 18],
				abnormalChains: {
					10154080: 1,
					10154081: 2
				},
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
			1: {
				length: [1375, 325],
				distance: [411.39, 0]
			},
			2: {
				length: [1375, 325],
				distance: [455.47, 0]
			},
			30: true
		},
		9: { // Smoke Bomb
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
			'*': { fixedSpeed: 1 },
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
			0: { fixedSpeed: 1 }
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
				fixedSpeed: 1,
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
				fixedSpeed: 1,
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
				fixedSpeed: 1,
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
				fixedSpeed: 1,
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
				fixedSpeed: 1,
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
				fixedSpeed: 1,
				length: 925,
				requiredBuff: 10155201
			}
		}
	}
}
