/*	Notes:
	* "*" can be used in place of the skill or sub-skill to set default values.
	* Processing order is "noInterrupt" > "abnormals" > "chains"  .
	* Abnormal chains aren"t needed if the client is already sending the correct skillId!
	* Default Abnormal application delay is 10 unless specified utilizing an array.

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
/* eslint-disable quotes */

module.exports = {
	0: { // Warrior
		'*': { consumeAbnormal: 104110 },
		// noInterrupt: [32], same reason as Lancer
        /*
		1: { // Combo Attack
			"*": {
				noInterrupt: [1],
				noRetry: true,
				abnormals: { 101750: { speed: 0.2 } }
			},
			0: {
				length: 566.4,
				distance: 47.534,
				race: {
					4: { distance: 35.4914246 },
					5: { distance: 45 },
					7: { distance: 60 },
					8: { distance: 54.3200531 },
					9: { distance: 64.28748 },
					10: { distance: 32.81029 }
				}
			},
			1: {
				length: 657.3,
				distance: 42.12,
				race: {
					4: { distance: 42.96183 },
					5: { distance: 39 },
					7: { distance: 27 },
					8: { distance: 21.1709442 },
					9: { distance: 51.6904373 },
					10: { distance: 49.218708 }
				}
			},
			2: {
				length: 657.3,
				distance: 28.08,
				race: {
					4: { distance: 31.015564 },
					5: { distance: 26 },
					7: { distance: 49 },
					8: { distance: 56.19522 },
					10: { distance: 25.6908379 }
				}
			},
			3: {
				length: 909.1,
				distance: 75.07,
				race: {
					1: { distance: 82.0689545 },
					2: { distance: 79.89674 },
					3: { distance: 66.40714 },
					4: { distance: 64.66279 },
					5: { distance: 85 },
					7: { distance: 58 },
					8: { distance: 63.52978 },
					9: { distance: 73.34315 },
					10: { distance: 68.68669 }
				}
			}
		},
		*/
		2: { // Evasive Roll
			0: {
				CC: ["evasive", "extended"],
				length: 839,
				distance: 150,
				forceClip: true,
				stamina: 500,
				instantStamina: true,
				noRetry: true,
				noInterrupt: [2, 10],
				glyphs: {
					21015: { stamina: -100 },
					21067: { stamina: -100 },
					21101: { stamina: -120 }
				},
				race: {
					7: { length: 837 },
					8: { length: 1081 },
					10: { length: 778.2 }
				}
			}
		},
		3: { // Torrent of Blows
			0: {
				length: 1600,
				distance: 75,
				race: { 9: { distance: 68.26 } }
			}
		},
		4: { // Rain of Blows
			"*": {
				distance: 151.87,
				race: {
					0: { distance: 150.25 },
					2: { distance: 152.74 },
					3: { distance: 143.35 },
					4: { distance: 142.61 },
					5: { distance: 150.72 },
					6: { distance: 143.47 },
					7: { distance: 159 },
					8: { distance: 149 },
					10: { distance: 96 }
				}
			},
			0: {
				length: 2545.45,
				noInterrupt: [1, 2, 3, 4, 5, 8, 9, 10, 11, 12, 13, 16, 17, 19, 22, 23, 28, 29, 30, 31, 34, 35, 36, 37, 38, 39, 41, 42],
				abnormals: {
					100801: { skill: 360100 },
					104110: { chain: 30 }
				},
				chains: {
					18: 30,
					21: 30,
					27: 30
				}
			},
			30: {
				length: 2000,
				abnormals: { 100801: { skill: 360130 } }
			}
		},
		5: { // Battle Cry
			0: {
				length: 1666,
				glyphs: { 21109: { speed: 0.5 } }
			}
		},
		8: { // Assault Stance
			"*": {
				length: 566.4,
				race: { 3: { length: 657.27 } },
				disableOnAbnormal: 102500
			},
			0: { stamina: 1000 },
			50: true
		},
		9: { // Defensive Stance
			"*": {
				length: 566.4,
				race: { 3: { length: 657.27 } },
				disableOnAbnormal: 102500
			},
			0: { stamina: 1000 },
			50: true
		},
		10: { // Death From Above
			0: {
				length: 2066,
				noInterrupt: [2, 10],
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
				length: 833,
				distance: 40,
				noInterrupt: [30],
				race: {
					0: { distance: 35 },
					1: { distance: 44.9627571 },
					2: { distance: 0 },
					3: { length: 933 },
					4: { distance: 25.1893 },
					6: { length: 933 },
					7: {
						distance: 45,
						length: 933
					},
					8: { distance: 35 },
					9: {
						distance: 54.85104,
						length: 933
					},
					10: {
						distance: 23.67408,
						length: 933
					}
				}
			}
		},
		12: { // Leaping Strike
			0: {
				CC: "extended",
				length: 1533,
				distance: 250,
				glyphs: {
					21048: { speed: 0.2 },
					21082: { speed: 0.2 }
				}
			}
		},
		13: { // Retaliate
			0: {
				type: "retaliate",
				length: 1633,
				noInterrupt: [13],
				noRetry: true
			}
		},
		16: { // Charging Slash
			0: {
				CC: ["evasive", "extended"],
				type: "dash",
				fixedSpeed: 1,
				length: 1105,
				distance: 467.88,
				//noRetry: true,
			},
			1: {
				length: 800,
				noInterrupt: [2, 10, 32, 40, 41]
			}
		},
		17: { // Vortex Slash
			"*": {
				length: 1600,
				glyphs: { 21040: { speed: 0.3 } }
			},
			1: true,
			2: { enableOnAbnormal: 100201 }
		},
		18: { // Combative Strike
			"*": {
				length: 1100,
				distance: 120.28,
				race: {
					1: { distance: 122.634071 },
					3: { distance: 127.113258 },
					4: { distance: 110.464142 },
					7: { distance: 130 },
					8: { distance: 128.88946 },
					9: { distance: 138.28392 },
					10: { distance: 94.4887 }
				}
			},
			0: true,
			1: true,
			2: { enableOnAbnormal: 100201 }
		},
		19: { // Rising Fury
			"*": { noInterrupt: [19] },
			0: {
				length: 733,
				distance: 144.8458,
				race: {
					0: { distance: 148.1982 },
					1: { distance: 157.281418 },
					3: { distance: 155.302856 },
					5: { distance: 143.269958 },
					6: { distance: 170.433487 },
					7: { distance: 162 },
					8: { distance: 161.738342 },
					9: { distance: 170.671234 },
					10: { distance: 132.614059 }
				}
			},
			1: {
				length: 1400,
				distance: 100.113693,
				race: {
					0: { distance: 92.66016 },
					1: { distance: 88.17459 },
					3: { distance: 92.1048 },
					5: { distance: 101.689529 },
					6: { distance: 117.307358 },
					7: { distance: 85 },
					8: { distance: 116.629524 },
					9: { distance: 122.342155 },
					10: { distance: 83.01158 }
				}
			}
		},
		20: { // Deadly Gamble
			0: {
				fixedSpeed: 1,
				length: 320,
				//fakeAspd: { type: 0, value: 7, delay: 0},
			}
		},
		21: { // Cascade of Stuns
			0: {
				length: 1400,
				distance: 100.113693,
				race: {
					0: { distance: 92.66016 },
					1: { distance: 88.17459 },
					3: { distance: 92.1048 },
					5: { distance: 101.689529 },
					6: { distance: 117.307358 },
					7: { distance: 85 },
					8: { distance: 116.629524 },
					9: { distance: 122.342155 },
					10: { distance: 83.01158 }
				}
			}
		},
		22: { // Backstab
			0: {
				CC: ["evasive", "extended"],
				length: 1255, // S_INSTANT_MOVE sent 194.1667 ms after start
				onlyTarget: true
			}
		},
		23: { // Spinning Counter
			0: {
				length: 1091,
				disableOnAbnormal: 100299,
				enableOnAbnormal: 100700,
				distance: 68.80444,
				race: {
					1: { distance: 105.200417 },
					3: { distance: 80.69249 },
					4: { distance: 60.6973038 },
					5: { distance: 78.072 },
					7: { distance: 90 },
					8: { distance: 65.34422 },
					9: { distance: 77.3590546 },
					10: { distance: 77.072 }
				}
			}
		},
		24: { // Smoke Aggressor
			0: {
				fixedSpeed: 1,
				length: 500
			}
		},
		25: { // Command: Attack
			0: { // 1060100 <- shadow-chan templateId
				fixedSpeed: 1,
				length: 700,
				enableOnAbnormal: 102600
			}
		},
		26: { // Command: Follow
			0: {
				fixedSpeed: 1,
				length: 700,
				enableOnAbnormal: 102600
			}
		},
		28: { // Traverse Cut
			0: {
				length: 2000,
				distance: 160,
				noInterrupt: [1, 2, 3, 4, 8, 9, 10, 13, 16, 17, 19, 21, 22, 28, 29, 30, 32, 34, 36, 37, 38, 39, 41, 42], // 31?
				abnormals: { 104110: { chain: 30 } },
				chains: {
					11: 30,
					12: 30,
					18: 30,
					27: 30
				},
				level: {
					9: {
						abnormals: {
							100201: { skill: 390100 },
							104110: { chain: 30 }
						}
					}
				}
			},
			30: {
				length: 2666.66,
				distance: 210,
				level: { 9: { abnormals: { 100201: { skill: 390130 } } } }
			}
		},
		29: { // Blade Draw
			0: {
				length: 3000,
				distance: 94.5,
				noInterrupt: [1, 2, 3, 4, 5, 8, 9, 10, 11, 12, 13, "16-0", 18, "19-0", 21, 22, 23, 29, 30, 34, 35, 36, 37, 38, 41, 42], // 31?
				interruptibleWithAbnormal: { 102010: 3 },
				abnormals: {
					100801: { skill: 370100 },
					102010: { chain: 30 },
					104110: { chain: 30 }
				},
				chains: {
					3: 30,
					16: 30,
					17: 30,
					19: 30,
					28: 30,
					39: 30
				}
			},
			30: {
				length: 1333.33,
				distance: 135,
				abnormals: { 100801: { skill: 370130 } }
			}
		},
		30: { // Scythe
			"*": { distance: 150 },
			0: {
				length: 1833,
				noInterrupt: [1, 3, 5, 8, 9, 10, 13, 16, 17, 18, 19, 21, 22, 23, 28, 30, 31, 34, 35, 38, 39, 42],
				abnormals: {
					100801: { skill: 380100 },
					104110: { chain: 30 }
				},
				chains: {
					2: 30,
					4: 30,
					11: 30,
					12: 30,
					29: 30,
					36: 30,
					37: 30
				}
			},
			30: {
				length: 1387,
				abnormals: { 100801: { skill: 380130 } }
			}
		},
		31: { // Reaping Slash
			"*": { distance: 110 },
			0: {
				length: 2292,
				noInterrupt: [1, 2, 3, 5, 8, 9, 10, 11, 12, 13, 16, 17, 19, 21, 22, 23, 28, 29, 30, 33, 34, 35, 37, 38, 39, 41, 42],
				abnormalChains: { 104110: 30 },
				chains: {
					4: 30,
					18: 30,
					36: 30
				}
			},
			30: { length: 1668 }
		},
		32: { // Cross Parry
			0: {
				CC: "extended",
				type: "holdInfinite",
				fixedSpeed: 1,
				consumeAbnormal: [102010, 104110], // This should exist for all skills but this is the only real case where it"s needed in practice
				enableOnAbnormal: [100200, 100201],
				stamina: 50
			}
		},
		34: { // Binding Sword
			0: {
				length: 1902,
				noInterrupt: [1, 2, 3, 4, 5, 10, 11, 12, 13, 16, 17, 18, 19, 20, 21, 22, 23, 28, 29, 30, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42]
			}
		},
		35: { // Infuriate
			0: {
				length: 2423,
				enableOnAbnormal: [100200, 100201]
			}
		},
		36: { // Rain of Blows (Deadly Gamble)
			"*": {
				distance: 151.87,
				race: {
					0: { distance: 150.25 },
					2: { distance: 152.74 },
					3: { distance: 143.35 },
					4: { distance: 142.61 },
					5: { distance: 150.72 },
					6: { distance: 143.47 },
					7: { distance: 159 },
					8: { distance: 149 },
					10: { distance: 96 }
				}
			},
			0: { length: 2800 },
			30: { length: 2000 }
		},
		37: { // Blade Draw (Deadly Gamble)
			0: {
				length: 3000,
				distance: 94.5
			},
			30: {
				length: 1333.33,
				distance: 135
			}
		},
		38: { // Scythe (Deadly Gamble)
			"*": { distance: 150 },
			0: { length: 1833 },
			30: { length: 1387 }
		},
		39: { // Traverse Cut (Defensive Stance)
			0: {
				length: 2000,
				distance: 160
			},
			30: {
				length: 2666.66,
				distance: 210
			}
		},
		40: { // Blade Waltz
			"*": {
				hasChains: true,
				length: 810.6,
				distance: 156.25,
				noRetry: true,
				disableOnAbnormal: [104101, 425100],
				triggerAbnormal: {
					//104100: 8000,
					//104101: 800,
					104110: 2000
				},
				consumeAbnormal: 104100, // Shouldn"t be present in 10, 20, but it doesn"t matter
				noInterrupt: [40, "41-0", "41-30", 42]
			},
			10: {
				abnormalChains: { 104100: 12 },
				chains: {
					1: 11,
					2: 11,
					3: 11,
					4: 11,
					5: 11,
					8: 11,
					9: 11,
					10: 11,
					11: 11,
					12: 11,
					13: 11,
					16: 11,
					17: 11,
					18: 11,
					19: 11,
					20: 11,
					21: 11,
					23: 11,
					24: 11,
					25: 11,
					26: 11,
					28: 11,
					29: 11,
					30: 11,
					31: 11,
					34: 11,
					35: 11,
					36: 11,
					37: 11,
					38: 11,
					39: 11,
					"41-31": 11
				}
			},
			11: true, // if the other abnormals ever get emulated this should only trigger 104110
			12: { triggerAbnormal: { 104110: 2000 } },
			20: {
				abnormalChains: { 104100: 22 },
				chains: {
					1: 21,
					2: 21,
					3: 21,
					4: 21,
					5: 21,
					8: 21,
					9: 21,
					10: 21,
					11: 21,
					12: 21,
					13: 21,
					16: 21,
					17: 21,
					18: 21,
					19: 21,
					20: 21,
					21: 21,
					23: 21,
					24: 21,
					25: 21,
					26: 21,
					28: 21,
					29: 21,
					30: 21,
					31: 21,
					34: 21,
					35: 21,
					36: 21,
					37: 21,
					38: 21,
					39: 21,
					"41-31": 21
				}
			},
			21: {
				abnormalChains: { 104100: 22 }
			}, // if the other abnormals ever get emulated this should only trigger 104110
			22: {
				triggerAbnormal: { 104110: 2000 }
			}
		},
		41: { // Aerial Scythe
			"*": {
				hasChains: true,
				noRetry: true,
				length: 1976.15,
				distance: 219.04,
				disableOnAbnormal: 425100,
				noInterrupt: ["41-31", 42],
				abnormalChains: { 105100: 31 }
			},
			0: {
				triggerAbnormal: { 105100: 1800 },
				chains: {
					1: 30,
					2: 30,
					3: 30,
					4: 30,
					5: 30,
					8: 30,
					9: 30,
					10: 30,
					11: 30,
					12: 30,
					13: 30,
					16: 30,
					17: 30,
					18: 30,
					19: 30,
					20: 30,
					21: 30,
					23: 30,
					24: 30,
					25: 30,
					26: 30,
					28: 30,
					29: 30,
					30: 30,
					31: 30,
					34: 30,
					35: 30,
					36: 30,
					37: 30,
					38: 30,
					39: 30,
					40: 30
				}
			},
			30: { triggerAbnormal: { 105100: 1800 } },
			31: {
				consumeAbnormal: 105100,
				length: 1800,
				distance: 0
			}
		},
		42: { // Blade Frenzy
			"*": { disableOnAbnormal: [425100, 425101] },
			0: {
				length: 3309.23,
				distance: 326.55,
				noInterrupt: [1, 3, 4, 5, 8, 9, 10, 11, 12, 13, 16, 17, 18, 19, 21, 22, 23, 29, 34, 35, 36, 37, 39, 40, "41-0", "41-30", 42],
				chains: {
					2: 30,
					30: 30,
					38: 30,
					"41-31": 30
				}
			},
			30: {
				length: 2507.06,
				distance: 326.55
			}
		},
		910: { // Apex Urgency
			0: { length: 500 }
		}
	},
    1: { // Lancer
		//'*': { noInterrupt: [2] }, if bhs breaks it again this might be needed everywhere
        /*
        1: { // Combo Attack
			'*': {
				noInterrupt: [1]
			},
			0: {
				length: 624.4,
				distance: 74.45,
				race: {
					0: { distance: 78.55 },
					4: { distance: 70 },
					5: { distance: 75 },
					8: { distance: 72.89 }
				}
			},
			1: {
				length: 1021,
				distance: 19.2,
				race: {
					0: { distance: 25 },
					1: { distance: 28.39 },
					2: { distance: 30.8 },
					4: { distance: 25 },
					5: { distance: 30.52 },
					8: { distance: 39.05 }
				}
			},
			2: {
				length: 1818.1,
				distance: 66.07,
				race: {
					0: { distance: 70 },
					2: { distance: 70 },
					4: { distance: 60 },
					5: { distance: 54.48 },
					8: { distance: 41.06 }
				}
			}
		},
		*/
		2: { // Stand Fast
			0: {
				CC: "extended",
				type: "holdInfinite",
				noRetry: true,
				fixedSpeed: 1,
				stamina: 50,
				level: {
					1: {
						length: 333,
						stamina: 40,
						endType51: true
					}
				}
			}
		},
		3: { // Onslaught
			"*": {
				distance: 440,
				noInterrupt: [3, 4, 8, 9, 10, 11, 12, 13, 15, 21, 23, 24, 25, 26, 27, 28, 29],
				abnormals: { 22060: { speed: 0.25 } },
				chains: {
					1: 30,
					5: 30,
					18: 30
				},
				race: { 9: { distance: 462.7 } }
			},
			0: { length: 3636.36 },
			30: { length: 2666.66 }
		},
		4: { // Challenging Shout
			"*": {
				length: 2203,
				glyphs: {
					22056: { speed: 0.25 },
					22085: { speed: 0.25 }
				}
			},
			0: {
				noInterrupt: [9, 12, 23, 24, 26],
				chains: {
					1: 30,
					3: 30,
					5: 30,
					8: 30,
					13: 30,
					15: 30,
					18: 30,
					21: 30,
					24: 30,
					25: 30,
					28: 30
				}
			},
			30: true
		},
		5: { // Shield Bash
			"*": {
				length: 839.1,
				distance: 30,
				race: { 9: { distance: 43.69 } }
			},
			0: true,
			1: true,
			2: { chains: { 10: 30 } },
			30: { length: 694.6 }
		},
		7: { // Guardian Shout
			0: {
				length: 566.4,
				race: { 8: { length: 839.1 } }
			}
		},
		8: { // Shield Counter
			0: {
				length: 1455.33,
				distance: 90,
				onlyDefenceSuccess: true,
				race: {
					2: { distance: 95 },
					4: { distance: 85 },
					5: { distance: 85 },
					9: { distance: 108.06 }
				}
			}
		},
		9: { // Leash
			0: { length: [733, 833] }
		},
		10: { // Debilitate
			"*": {
				triggerAbnormal: { 201830: 2000 },
				consumeAbnormalEnd: 201830
			},
			0: {
				length: 933,
				distance: 30,
				noInterrupt: [3, 4, 5, 8, 9, 10, 11, 12, 13, 15, 21, 23, 24, 25, 26, 27, 28, 29],
				chains: {
					1: 30,
					18: 30
				},
				race: { 9: { distance: 43.69 } }
			},
			30: { length: 839.1 }
		},
		11: { // Retaliate
			0: {
				type: "retaliate",
				length: 1633,
				noInterrupt: [11],
				noRetry: true
			}
		},
		12: { // Infuriate
			0: { length: 2433 }
		},
		13: { // Spring Attack
			"*": {
				distance: 85,
				triggerAbnormal: { 201831: 2000 },
				consumeAbnormalEnd: 201831
			},
			0: {
				length: 2799,
				noInterrupt: ["1-0", "1-1", 3, 4, 9, 11, 12, 13, 15, 23, 24, 25, 26, 27, 28, 29],
				chains: {
					1: 30,
					5: 30,
					8: 30,
					10: 30,
					18: 30,
					21: 30
				}
			},
			30: { length: 1849.5 }
		},
		15: { // Charging Lunge
			0: {
				CC: "extended",
				type: "dash",
				fixedSpeed: 1,
				length: 1115,
				distance: 474.5
			},
			1: {
				length: 933,
				distance: 40,
				noInterrupt: [2, 25, 28],
				race: {
					3: { length: 966 },
					4: { length: 966 },
					6: { length: 966 },
					9: { distance: 62.7 }
				}
			}
		},
		16: { // Second Wind
			0: {
				withoutWeapon: true,
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
			"*": {
				triggerAbnormal: { 201831: 2000 },
				consumeAbnormalEnd: 201831,
				noInterrupt: [18]
			},
			0: {
				length: 598,
				distance: 100.13,
				abnormals: { 201550: { speed: 0.2 } },
				race: {
					2: {
						length: 503,
						distance: 102.7
					},
					3: { distance: 103.42 },
					4: { distance: 95 },
					7: { distance: 116.2 },
					8: { distance: 92.39 },
					9: { distance: 122.66 }
				}
			},
			1: {
				length: 800,
				distance: 74.84,
				race: {
					3: { distance: 70.31 },
					2: { distance: 80.43 },
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
		21: { // Lockdown Blow
			"*": {
				length: 1399,
				distance: 100.13,
				race: {
					1: { distance: 105.13 }, //
					2: {
						length: 1166,
						distance: 102.7
					},
					3: {
						length: 1299,
						distance: 103.42
					},
					4: {
						length: 1299,
						distance: 95
					},
					6: { distance: 110.39 },
					7: { distance: 116.18 },
					8: { distance: 92.39 },
					9: { distance: 122.66 },
					10: { distance: 92.18 }
				}
			},
			1: true,
			2: {
				chains: {
					10: 30,
					13: 30,
					18: 30
				}
			},
			30: {
				length: 1272.72,
				race: {
					2: { length: 1068 },
					3: { length: 1238.45 },
					4: { length: 1238.45 }
				}
			}
		},
		22: { // Iron Will
			0: {
				fixedSpeed: 1,
				length: 800
			}
		},
		23: { // Master's Leash
			0: {
				length: [733, 833],
				enableOnAbnormal: 201000
			}
		},
		24: { // Chained Leash
			"*": { consumeAbnormal: 201803 },
			1: { length: [733, 833] },
			2: { length: 1692.42 }
		},
		25: { // Wallop
			"*": { CC: "extended" },
			0: {
				length: 2391.3,
				distance: 100,
				noInterrupt: [1, 3, 4, 5, 9, 11, 12, 23, 24, 25, 26, 27, 28, 29],
				chains: {
					8: 30,
					10: 30,
					13: 30,
					15: 30,
					18: 30,
					21: 30,
					28: 30
				}
			},
			30: {
				length: 1913,
				distance: 100
			}
		},
		26: { // Backstep
			0: {
				CC: ["evasive", "extended"],
				length: 733,
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
			0: {
				length: 640.4,
				race: { 8: { length: 943.43 } }
			}
		},
		28: { // Super Leap
			"*": { disableOnAbnormal: 425100 },
			0: {
				length: [333.33, 1055, 3121.66],
				distance: [29.48, 445.52, 0],
				noInterrupt: [1, 3, 4, 5, 8, 9, 10, 12, 13, 18, 21, 23, 24, 26, 28, 29],
				chains: {
					15: 1,
					25: 1
				},
				race: {
					1: { distance: [20.32, 398.47, 0] },
					5: { distance: [20.32, 398.47, 0] },
					6: { distance: [20.32, 398.47, 0] }
				}
			},
			1: {
				length: [250, 791.25, 833.75],
				distance: [29.48, 469, 0],
				race: {
					1: { distance: [20.32, 419.44, 0] },
					5: { distance: [20.32, 419.44, 0] },
					6: { distance: [20.32, 419.44, 0] }
				}
			}
		},
		29: { // Guardian's Barrier
			0: {
				type: "holdInfinite",
				fixedSpeed: 1,
				length: 700,
				endType51: true,
				disableOnAbnormal: 425100
			}
		},
		30: { // Divine Protection
			0: {
				length: 1252,
				disableOnAbnormal: [425100, 425101]
			}
		},
		910: { // Apex Urgency
			0: { length: 500 }
		}
	},
	2: { // Slayer
		/*
		1: { // Combo Attack
			"*": { noInterrupt: [1] },
			0: {
				length: 761,
				distance: 36.68,
				race: {
					0: { distance: 36.68 },
					2: { distance: 50.68 },
					4: { distance: 40 },
					5: { distance: 36.68 },
					6: { distance: 36.68 },
					7: { distance: 60 },
					8: { distance: 31.53 },
					9: { distance: 36.68 },
					10: { distance: 25.08 }
				}
			},
			1: {
				length: 1021,
				distance: 35.68,
				race: {
					0: { distance: 35.68 },
					2: { distance: 30.68 },
					4: { distance: 35 },
					5: { distance: 35.68 },
					6: { distance: 35.68 },
					7: { distance: 17 },
					8: { distance: 49.4 },
					9: { distance: 35.68 },
					10: { distance: 32.95 }
				}
			},
			2: {
				length: 748.2,
				distance: 28.05,
				race: {
					0: { distance: 28.05 },
					2: { distance: 33.05 },
					3: { distance: 24.225 },
					4: { distance: 20 },
					5: { distance: 28.05 },
					6: { distance: 22.3 },
					7: { distance: 23 },
					8: { distance: 19.33 },
					9: { distance: 28.05 },
					10: { distance: 22.5 }
				}
			},
			3: {
				length: 1636.36,
				distance: 46.76,
				race: {
					3: { distance: 45.33 },
					4: { distance: 40 },
					5: { distance: 64.36 },
					6: { distance: 118.2 },
					7: { distance: 45 },
					8: { distance: 19.85 },
					10: { distance: 37.5 }
				}
			}
		},
		*/
		2: { // Knockdown Strike
			"*": {
				consumeAbnormal: 23220,
				length: 2844.16,
				distance: 220.47,
				abnormals: { 23070: { speed: 0.25 } },
				race: {
					3: { distance: 213.63 },
					4: { distance: 155 },
					5: { distance: 174.84 },
					6: { distance: 201.64 },
					7: { distance: 200 },
					8: { distance: 175.81 },
					10: { distance: 205.95 }
				}
			},
			1: true,
			2: { chains: { 14: 30 } },
			30: { length: 2423.57 }
		},
		3: { // Whirlwind
			0: {
				length: 2871.66,
				distance: 128.69,
				abnormals: {
					23080: { speed: 0.25 },
					301150: { speed: 0.20 }
				},
				race: {
					0: {
						length: 2844.16,
						distance: 123.21
					},
					2: { distance: 116.49 },
					3: { distance: 99.6 },
					4: { distance: 125 },
					5: { distance: 137.22 },
					6: { distance: 123.21 },
					7: { distance: 155 },
					8: { distance: 116.09 },
					10: {
						length: 2844.16,
						distance: 91.21
					}
				}
			}
		},
		4: { // Evasive Roll
			"*": {
				CC: ["evasive", "extended"],
				length: 909.1,
				distance: 150,
				noInterrupt: [4],
				forceClip: true,
				noRetry: true,
				race: { 8: { length: 1181.8 } }
			},
			0: { abnormals: { 301200: { chain: 30 } } },
			30: { consumeAbnormal: 301200 }
		},
		5: { // Dash
			0: {
				CC: "evasive",
				withoutWeapon: true,
				fixedSpeed: 1,
				length: 700
			}
		},
		8: { // Overhand Strike
			"*": {
				distance: 169.5,
				race: {
					3: { distance: 152.2 },
					4: { distance: 145 },
					5: { distance: 134.53 },
					6: { distance: 161.14 },
					8: { distance: 150 },
					9: { distance: 169.65 },
					10: { distance: 151.14 }
				}
			},
			0: {
				length: 3375.7,
				interruptAllWithAbnormal: { 301604: 8 },
				noInterrupt: ["1-0", "1-1", "1-2", 4, 6, 8, 10, "14-0", "14-1", 17, 21, 23, 25, 26, 28],
				abnormals: {
					300801: { skill: 250100 },
					300805: { skill: 250100 },
					301604: { chain: 30 } // todo:
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
					24: 30,
					27: 30
				}
			},
			30: {
				length: 1331.2,
				abnormals: {
					300801: { skill: 250130 },
					300805: { skill: 250130 }
				}
			}
		},
		9: { // Leaping Strike
			0: {
				CC: "extended",
				length: 2191.2,
				distance: 250,
				race: { 3: { length: 2275 } }
			}
		},
		10: { // Retaliate
			0: {
				type: "retaliate",
				length: 1633,
				noInterrupt: [10],
				noRetry: true
			}
		},
		12: { // Heart Thrust
			0: {
				length: 2333,
				distance: 180.96,
				abnormals: {
					23060: { speed: 0.25 },
					23061: { speed: 0.35 }
				},
				race: {
					0: { distance: 166.56 },
					2: { distance: 173.75 },
					3: { distance: 174.9 },
					4: { distance: 175 },
					5: { distance: 166.56 },
					6: { distance: 168.61 },
					7: { distance: 230 },
					8: { distance: 174.05 },
					10: { distance: 136.55 }
				}
			}
		},
		13: { // Stunning Backhand
			0: {
				length: 2133.33,
				distance: 76.71,
				race: {
					0: { distance: 62.07 },
					2: { distance: 55.79 },
					3: { distance: 69.62 },
					4: { distance: 40 },
					5: { distance: 62.07 },
					6: { distance: 86.12 },
					7: { distance: 80 },
					8: { distance: 56.49 },
					10: { distance: 47.07 }
				}
			}
		},
		14: { // Distant Blade
			"*": {
				length: 600,
				distance: 75,
				triggerAbnormal: { 23220: 2000 },
				consumeAbnormalEnd: 23220
			},
			0: {
				race: {
					2: { distance: 79.01 },
					3: { distance: 92.36 }
				}
			},
			1: {
				race: {
					2: { distance: 70.99 },
					3: { distance: 68.07 },
					5: { distance: 100.02 },
					9: { distance: 100.02 }
				}
			},
			2: {
				length: 1500,
				distance: 120,
				race: {
					3: { distance: 109.58 },
					5: { distance: 94.98 },
					6: { distance: 150 },
					8: { distance: 112.42 },
					9: { distance: 104.82 }
				}
			}
		},
		15: { // Startling Kick
			0: {
				CC: ["evasive", "extended"],
				length: 1500,
				distance: -175,
				forceClip: true,
				glyphs: { 23060: { speed: 0.25 } }
			}
		},
		16: { // Fury Strike
			0: {
				length: 1000,
				distance: 100,
				race: {
					0: { distance: 96.26 },
					1: { distance: 120.78 },
					2: { distance: 103.85 },
					3: { distance: 91.79 },
					5: { distance: 96.25 },
					6: { distance: 135.85 },
					7: { distance: 140 },
					8: { distance: 141.74 },
					9: { distance: 142.53 }
				}
			}
		},
		17: { // Headlong Rush
			0: {
				CC: ["evasive", "extended"],
				type: "dash",
				emulateAttackSpeedBonus: 60,
				fixedSpeed: 1,
				length: 980,
				distance: 413, //not sure - seems borked
				race: {
					0: { distance: 420 },
					4: { distance: 420 },
					7: { distance: 419.33 },
					10: { distance: 420 }
				},
				noRetry: true
			}
		},
		18: { // Overpower
			"*": {
				length: 1433,
				noInterrupt: [1, 2, 3, 4, 6, 8, 9, 12, 13, 14, 15, 16, 17, 18, 21, 23, 24, 25, 26, 27, 28] // todo: check abnormal
			},
			0: true,
			50: true
		},
		19: { // Tenacity
			0: {
				fixedSpeed: 1,
				length: [500, 700]
			}
		},
		20: { // In Cold Blood
			0: {
				fixedSpeed: 1,
				length: 1200,
				consumeAbnormalEnd: 23220,
				emulateAttackSpeedBonus: 8,
				triggerAbnormal: { 23220: 2000 },
			}
		},
		21: { // Exhausting Blow
			0: {
				length: 1200,
				distance: 75,
				race: {
					2: { distance: 79.01 },
					3: { distance: 92.35 }
				}
			},
		},
		23: { // Measured Slice
			"*": { distance: 189 },
			0: {
				length: 3691.25,
				interruptAllWithAbnormal: { 301604: 23 },
				noInterrupt: [1, 2, 3, 4, 6, 9, 10, 12, 13, 14, 15, 16, 17, 21, 22, 23, 28],
				abnormals: { 301604: { chain: 30 } },
				chains: {
					8: 30,
					24: 30,
					25: 30,
					27: 30
				}
			},
			30: { length: 1684.1 }
		},
		24: { // Eviscerate
			0: {
				length: 1941,
				distance: 50,
				interruptAllWithAbnormal: { 301604: 24 },
				noInterrupt: ["1-0", "1-1", "1-2", 4, 6, 10, 14, 16, 17, 21, 22, 23, 24, 26, 28],
				abnormals: { 301604: { chain: 30 } },
				chains: {
					1: 30,
					2: 30,
					3: 30,
					8: 30,
					9: 30,
					12: 30,
					13: 30,
					15: 30,
					25: 30,
					27: 30
				}
			},
			30: {
				length: 1533,
				distance: 100
			}
		},
		25: { // Ultimate Overhand Strike
			"*": {
				noRetry: true,
				distance: 171.14,
				race: {
					3: { distance: 152.19 },
					4: { distance: 145 },
					5: { distance: 134.53 },
					6: { distance: 161.14 },
					8: { distance: 150 },
					9: { distance: 169.65 },
					10: { distance: 151.14 }
				}
			},
			0: {
				length: 3375.7,
				interruptAllWithAbnormal: { 301604: 25 },
				abnormals: { 301604: { chain: 30 } }
			},
			30: { length: 1331 }
		},
		26: { // Punishing Blow
			"*": { disableOnAbnormal: 425100 },
			0: {
				length: [1078, 2166, 120],
				distance: [40.51, 122.33, 11.21],
				interruptAllWithAbnormal: { 301604: 26 },
				noInterrupt: [1, 2, 3, 4, 6, 9, 10, 12, 13, 14, 15, 16, 17, 21, 22, 26, 28],
				abnormals: { 301604: { chain: 30 } },
				chains: {
					8: 30,
					23: 30,
					24: 30,
					25: 30,
					27: 30
				}
			},
			30: {
				length: [1710, 0],
				distance: [122, 22]
			}
		},
		27: { // Savage Strike
			"*": {
				noRetry: true,
				disableOnAbnormal: 425100,
				noInterrupt: ["27-31"],
				triggerAbnormal: {
					301600: [4000, 30],
					301603: [5000, 30],
					301604: [5000, 30]
				},
				consumeAbnormalEndPending: { 301604: 1000 },
				abnormals: { 301603: { chain: 31 } },
			},
			0: {
				length: [1000, 1316.25],
				distance: [274.6, 1],
				chains: {
					1: 30,
					2: 30,
					3: 30,
					4: 30,
					5: 30,
					6: 30,
					8: 30,
					9: 30,
					10: 30,
					12: 30,
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
					23: 30,
					24: 30,
					25: 30,
					26: 30,
					"28-0": 0,
					28: 30
				}
			},
			30: {
				length: [1000, 1316.25],
				distance: [274.8, 0]
			},
			31: {
				length: 751.25,
				distance: 275.6,
				triggerAbnormal: { 301601: [4000, 30] },
				triggerAbnormalIfMissing: { 301604: [4000, 30] },
				consumeAbnormal: [301600, 301603]
			}
		},
		28: { // Unsheathe
			"*": {
				length: [1024.26, 0],
				noRetry: true,
				disableOnAbnormal: [425100, 425101]
			},
			0: {
				type: "charging",
				length: [650, 650],
				chargeLevels: [1, 2, 3],
				noInterrupt: [28],
				abnormals: {
					301600: {
						chargeSpeed: 0.4
					},
					301601: {
						chargeSpeed: 0.6
					}
				}
			},
			1: {
				distance: [44.82, 0],
				noInterrupt: ["28-1"]
			},
			2: {
				distance: [44.82, 0],
				noInterrupt: ["28-2"]
			},
			3: {
				distance: [44.82, 0],
				noInterrupt: ["28-3"]
			}
		},
		910: { // Awakening Eyes Aura
			0: {
				length: 500
			}
		}
	},
    3: { // Berserker
        /*
		'*': {
			consumeAbnormal: 401404
			//noInterrupt: [2], Same reason as lancer
		},
		1: { // Combo Attack
			"*": {
				noInterrupt: [1],
				noRetry: true
			},
			0: {
				length: 1111.81,
				distance: 78,
				race: {
					0: {
						distance: 58.10235
					},
					1: {
						distance: 61.9559364
					},
					2: {
						distance: 54.869194
					},
					3: {
						distance: 63.2354965
					},
					4: {
						distance: 27.7150154
					},
					5: {
						length: 1081.5,
						distance: 62.3418961
					},
					6: {
						distance: 55.6866646
					},
					7: {
						distance: 64.0561
					},
					8: {
						distance: 48.886
					},
					9: {
						distance: 78.00602
					},
					10: {
						distance: 44.2169533
					}
				}
			},
			1: {
				length: 930,
				distance: 21.05,
				race: {
					0: {
						distance: 23.28463
					},
					1: {
						distance: 23.28463
					},
					2: {
						distance: 26.0233231
					},
					3: {
						distance: 27.3276443
					},
					4: {
						distance: 25
					},
					5: {
						distance: 24.5182438
					},
					6: {
						distance: 23.2733421
					},
					7: {
						distance: 16.0538425
					},
					8: {
						distance: 7.059998
					},
					9: {
						distance: 21.04979
					},
					10: {
						distance: 21.0849838
					}
				}
			},
			2: {
				length: 1111.81,
				distance: 31.84,
				race: {
					0: {
						distance: 22.8330917
					},
					1: {
						distance: 22.83308
					},
					2: {
						distance: 23.29535
					},
					3: {
						distance: 32.4734344
					},
					4: {
						distance: 25
					},
					5: {
						distance: 17.0962315
					},
					6: {
						distance: 22.83308
					},
					7: {
						distance: 42.59091
					},
					8: {
						distance: 40.9255562
					},
					9: {
						distance: 31.841404
					},
					10: {
						distance: 20.6760979
					}
				}
			},
			3: {
				length: 1825,
				distance: 54.28,
				race: {
					0: {
						distance: 69.2654953
					},
					1: {
						distance: 70.41038
					},
					2: {
						distance: 47.2868958
					},
					3: {
						distance: 55.25166
					},
					4: {
						distance: 45
					},
					5: {
						distance: 61.6042938
					},
					6: {
						distance: 59.46721
					},
					7: {
						distance: 51.109024
					},
					8: {
						distance: 43.6784477
					},
					9: {
						distance: 54.28374
					},
					10: {
						distance: 63.2571335
					}
				}
			}
		},
		*/
		2: { // Axe Block
			"*": {
				CC: "extended",
				type: "holdInfinite",
				fixedSpeed: 1
			},
			0: true,
			30: { fixedSpeed: false },
			31: { consumeAbnormal: 401701 }
		},
		3: { // Thunderstrike
			"*": {
				length: 1748,
				abnormals: { 24170: { speed: 0.25 } },
				noRetry: true,
				distance: 69.704,
				race: {
					1: { distance: 79.030014 },
					3: { distance: 72.7862854 },
					4: { distance: 35 },
					7: { distance: 85.7396851 },
					8: { distance: 69.512 },
					9: { distance: 87.27145 },
					10: { distance: 64.88405 }
				}
			},
			0: {
				type: "charging",
				consumeAbnormal: 400900, // dafuq was dis
				length: [650, 650, 650],
				distance: false,
				noInterrupt: [3, 10, 15],
				glyphs: { 24067: { chargeSpeed: 0.25 } },
				abnormals: {
					24130: { chargeSpeed: 0.3 },
					24170: { speed: 0.25 },
					400500: { chargeSpeed: 0.2 },
					400501: { chargeSpeed: 0.4 },
					400508: { chargeSpeed: 0.4 },
					401150: { chargeSpeed: 0.2 }
				},
				level: [
					{ length: 800 }, // 1300
					{ length: [800, 800] }, // 1150
					{ length: [800, 800] } // 1150
				]
			},
			10: { noInterrupt: ["3-10"] },
			11: { noInterrupt: ["3-11"] },
			12: { noInterrupt: ["3-12"] },
			13: {
				noInterrupt: ["3-13"],
				enableVB: true,
				pendingStartTime: 454.54
			}
		},
		4: { // Flatten
			"*": {
				length: 3111.8,
				distance: 75,
				glyphs: {
					24008: { speed: 0.25 },
					24050: { speed: 0.25 }
				},
				abnormals: {
					24100: { speed: 0.25 },
					24101: { speed: 0.30 }
				},
				race: {
					1: { distance: 78 },
					2: { distance: 70.79296 },
					3: { distance: 90.601 },
					4: { distance: 80 },
					5: { distance: 69.014 },
					7: { distance: 86.6047058 },
					8: { distance: 73.342 },
					9: { distance: 105.684364 },
					10: { distance: 70.22727 }
				}
			},
			0: {
				noInterrupt: [1, "3-10", "3-11", "3-12", "3-13", 4, "8-30", "10-10", "10-11", "10-12", 11, "10-13", 13, "15-10", "15-11", "15-12", "15-13", "15-14", 18, 24, 27, 28, 29, 30, "32-0"],
				abnormals: { 401400: { chain: 1 } }, // Send 1 if no chains and Intimidation is active.
				chains: { // Bunch of chains
					6: 30,
					25: 30,
					31: 30,
					32: 31, // Intimidation doesn't matter here.
					34: 30,
					35: 30,
					36: 30,
					37: 30
				}
			},
			1: true, // No chains here because the script doesn't support this kind of BHS austism!
			30: { // We chained something!
				length: 2336.55,
				abnormals: { 401400: { chain: 31 } } // Check if Intimidation is active, send 31 if so.
			},
			31: { length: 2336.55 }
		},
		5: { // Dash
			0: {
				withoutWeapon: true,
				CC: "evasive",
				fixedSpeed: 1,
				length: 700
			}
		},
		6: { // Sweeping Strike
			"*": {
				length: 1293.63,
				distance: 66.2,
				race: {
					1: { distance: 79.19432 },
					2: { distance: 82.33742 },
					3: {
						length: 1384.54,
						distance: 71.33583
					},
					4: { distance: 50.072 },
					7: { distance: 82.33742 },
					8: { distance: 53.4118347 },
					9: {
						length: 1263.63,
						distance: 80.4679947
					},
					10: { distance: 70 }
				}
			},
			0: {
				interruptibleWithAbnormal: { 401404: 2 }, // Currently broken by BHS to fix a client bug.
				abnormals: { 401400: { chain: 30 } }
			},
			30: true
		},
		8: { // Fiery Rage
			1: {
				fixedSpeed: 1,
				length: [454.54, 596.81]
			},
			30: {
				length: 1742.34,
				enableOnAbnormal: 401400,
				race: { 7: { length: 1767.34 } }
			}
		},
		10: { // Cyclone
			"*": {
				noRetry: true,
				length: [366, 366, 366, 366, 1333],
				distance: [33.33, 33.33, 33.33, 33.33, 50],
				race: {
					2: { length: [366, 366, 366, 366, 1400] },
					3: { length: [366, 366, 366, 366, 1800] },
					6: { length: [366, 366, 366, 366, 1366] }
				}
			},
			0: {
				type: "charging",
				canInstantCharge: { abnormal: 401701 },
				disableOnAbnormal: 401400,
				consumeAbnormal: [400900, 401404],
				length: [650, 650, 650],
				distance: false,
				noInterrupt: ["28-0"],
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
					401150: { chargeSpeed: 0.2 },
				},
				race: { // Workaround
					2: { length: [650, 650, 650] },
					3: { length: [650, 650, 650] },
					6: { length: [650, 650, 650] }
				},
				level: [
					{ length: 800 }, // 1300
					{ length: [800, 800] }, // 1150
					{ length: [800, 800] } // 1150
				]
			},
			10: {
				length: 1333,
				distance: 50,
				race: {
					2: { length: 1400 },
					3: { length: 1800 },
					6: { length: 1366 }
				}
			},
			11: {
				length: [366, 366, 1333],
				distance: [33.33, 33.33, 50],
				race: {
					2: { length: [366, 366, 1400] },
					3: { length: [366, 366, 1800] },
					6: { length: [366, 366, 1366] }
				}
			},
			12: true,
			13: {
				enableVB: true,
				consumeAbnormal: [401701],
				pendingStartTime: 1
			}
		},
		11: { // Leaping Strike 
			0: {
				CC: "extended",
				length: 2191.25,
				distance: 250,
				race: { 8: { length: 2232.5 } }
			}
		},
		13: { // Retaliate
			0: {
				type: "retaliate",
				length: 1633,
				noInterrupt: [13],
				noRetry: true
			}
		},
		15: { // Vampiric Blow  
			"*": {
				length: 1930,
				distance: 69.704,
				race: {
					1: { distance: 79.030014 },
					3: { distance: 72.7862854 },
					4: { distance: 35 },
					7: { distance: 85.7396851 },
					8: { distance: 69.512 },
					9: { distance: 87.27145 },
					10: { distance: 64.88405 }
				}
			},
			0: {
				type: "charging",
				consumeAbnormal: 400900,
				length: [800, 800, 800],
				distance: false,
				noInterrupt: ["3-0", "10-0", 15],
				abnormals: {
					400500: { chargeSpeed: 0.2 },
					400501: { chargeSpeed: 0.4 },
					400508: { chargeSpeed: 0.4 },
					401150: { chargeSpeed: 0.2 }
				},
				chains: {
					3: 14,
					10: 14
				},
				level: [
					{ length: 800 },
					{ length: [800, 800] },
					{ length: [800, 800] }
				]
			},
			10: { noInterrupt: ["15-10"] },
			11: { noInterrupt: ["15-11"] },
			12: { noInterrupt: ["15-12"] },
			13: { noInterrupt: ["15-13"] },
			14: { noInterrupt: [15] }
		},
		16: { // Fearsome Shout / Normie Odium Cry
			"*": {
				fixedSpeed: 1,
				length: [700, 1425]
			},
			0: true,
			// 0 -> 10, 0 + 401705 -> 20 (Might not be needed to be handled) 
			10: true,
			20: { length: 384.61 }
		},
		18: { // Lethal Strike
			"*": {
				distance: 168.11,
				consumeAbnormal: 400900,
				abnormals: { 24120: { speed: 0.3 } },
				race: {
					1: { distance: 188.370682 },
					3: { distance: 173.191574 },
					4: { distance: 145 },
					7: { distance: 191.789749 },
					8: { distance: 240.400055 },
					10: { distance: 158.112289 }
				}
			},
			0: {
				length: 687.5,
				noInterrupt: [1, 4, 6, 13, 18, 24, 25, 26, 27, 28, 29, 30, 31, 32, 34, 35, 36, 37],
				chains: {
					"3-0": 0,
					3: 30,
					11: 30,
					"10-0": 0,
					10: 30,
					"15-0": 0,
					15: 30
				}
			},
			30: {
				length: 550,
				hardLock: 150
			}
		},
		19: { // Triumphant Shout
			0: {
				fixedSpeed: 1,
				length: [500, 700]
			}
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
			"*": {
				length: 1833,
				distance: 168.112289,
				consumeAbnormal: [400900, 401404],
				enableOnAbnormal: 400900,
				race: {
					1: { distance: 188.370682 },
					3: { distance: 173.191574 },
					4: { distance: 145 },
					7: { distance: 191.789749 },
					8: { distance: 240.400055 },
					9: {
						length: 1633,
						distance: 167.624313
					},
					10: { distance: 158.112289 }
				}
			},
			0: {
				CC: "evasive",
				type: "storeCharge",
				length: 1020.9,
				distance: 150,
				enableOnAbnormal: false
			},
			5: {
				type: "grantCharge",
				enableOnAbnormal: false
			},
			10: true,
			11: true,
			12: true,
			13: true
		},
		25: { // Raze
			"*": {
				length: 1200,
				distance: 96,
				glyphs: { 24078: { speed: 0.25 } }
			},
			0: {
				noInterrupt: [2, 4, 6, "8-30", 11, 13, 24, 25, 26, 27, 28, 29, "32-0"],
				interruptibleWithAbnormal: { 401404: 2 }, // Currently broken by BHS to fix a client bug.
				abnormals: { 401400: { chain: 1 } },
				abnormalChains: { 401404: 31 },
				chains: {
					1: 30,
					"3-0": 0,
					3: 30,
					"10-0": 0,
					10: 30,
					"15-0": 0,
					15: 30,
					18: 30,
					30: 31,
					31: 30,
					32: 31
				}
			},
			1: true,
			30: {
				length: 960,
				abnormals: { 401400: { chain: 31 } }
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
			"*": { noInterrupt: [1, "3-10", "3-11", "3-12", "3-13", 4, 6, "8-30", "10-10", "10-11", "10-12", "10-13", 11, 13, "15-10", "15-11", "15-12", "15-13", "15-14", 18, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33] },
			0: {
				length: 2066,
				abnormals: { 401705: { chain: 30 } },
				interruptibleWithAbnormal: { 401705: 33 }, // Half ping taxed for now due to the lack of proper emulation.
				race: { 7: { length: 2099 } }
			},
			30: {
				length: 1455,
				enableOnAbnormal: 401705
			}
		},
		28: { // Intimidation
			"*": {
				length: 1566,
				race: { 7: { length: 1599 } }
			},
			0: true,
			50: true
		},
		29: { // Evasive Roll
			0: {
				CC: ["evasive", "extended"],
				length: 909.1,
				distance: 150,
				forceClip: true,
				noInterrupt: [29]
			}
		},
		30: { // Axe Counter
			"*": {
				length: 655.33,
				distance: 23.28463,
				noInterrupt: [1, "3-10", "3-11", "3-12", "3-13", 4, 6, "8-30", "10-10", "10-11", "10-12", "10-13", 11, 13, "15-10", "15-11", "15-12", "15-13", "15-14", 18, 24, 25, 26, 27, 28, 29, 30, 31, 32],
				enableOnAbnormal: 401402,
				abnormalChains: { 401404: 30 },
				race: {
					2: { distance: 26.0233231 },
					3: { distance: 27.3276443 },
					4: { distance: 25 },
					5: { distance: 24.5182438 },
					7: { distance: 16.0538425 },
					8: { distance: 240.400055 },
					9: { distance: 21.04979 },
					10: { distance: 21.0849838 }
				}
			},
			0: true, // False
			30: true // True
		},
		31: { // Overwhelm
			0: {
				CC: "extended",
				type: "dash",
				fixedSpeed: 1,
				length: 1115,
				distance: 470,
				noInterrupt: [31],
				hardLock: 135, // ??
				noRetry: true
			},
			1: {
				length: 1510.83,
				noInterrupt: [2, 4, 25, 10],
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
			"*": { noInterrupt: [32] },
			0: {
				length: 771.53,
				distance: 31.58,
				enableOnAbnormal: 401400,
				race: {
					5: {
						length: 796.92,
						distance: 24.5
					},
					8: {
						length: 925.4,
						distance: 61.39
					}
				}
			},
			1: {
				length: 800,
				distance: 134.4898312,
				race: {
					1: { distance: 150.6965456 },
					3: { distance: 138.5532592 },
					4: { distance: 116 },
					7: { distance: 153.4317992 },
					8: { distance: 192.32004400000002 },
					9: { distance: 134.0994504 },
					10: { distance: 126.48983120000001 }
				}
			}
		},
		33: { // Unleash
			0: {
				length: [700, 1500, 1766], // 401705 Should trigger based on something here, idk wut but it's affected by aspd due to that.
				disableOnAbnormal: 425100
			}
		},
		34: { // Unleash: Dexter
			"*": {
				length: 2266,
				distance: 25,
				enableOnAbnormal: 401705,
				abnormals: { 401716: { chain: 31 } },
			},
			0: {
				noRetry: true,
				noInterrupt: [27, 34, 36],
				chains: {
					33: 30,
					35: 30,
					37: 30
				}
			},
			1: true,
			30: {
				length: 1666,
				distance: 25 // 27.5
			},
			31: {
				length: 1666,
				distance: 25 // 27.5
			}
		},
		35: { // Unleash: Sinister
			"*": {
				length: 1966,
				distance: 180,
				enableOnAbnormal: 401705,
				abnormals: { 401717: { chain: 31 } }
			},
			0: {
				noRetry: true,
				noInterrupt: [27, 35, 36, 37],
				chains: {
					33: 1,
					34: 30
				}
			},
			1: true,
			30: {
				length: 1666,
				distance: 25
			},
			31: {
				length: 1666,
				distance: 25
			}
		},
		36: { // Unleash: Rampage
			"*": {
				length: 1588.66,
				distance: 35,
				noRetry: true,
				enableOnAbnormal: 401705,
				abnormals: {
					401718: { chain: 31 }
				},
			},
			0: {
				length: 2714.4,
				noInterrupt: [27, 37],
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
			"*": {
				length: [610.83, 694, 721.66, 396.42, 1094],
				distance: [114.545456, 131.657135, 137.36264, 8.545507, 114.73892205000001],
				enableOnAbnormal: 401705,
				disableOnAbnormal: 425101,
				noInterrupt: [37],
				race: {
					2: { distance: [120, 137.142853, 142.857147, 8.545507, 114.73892205000001] },
					3: { distance: [120, 137.142853, 142.857147, 8.545507, 114.73892205000001] },
					9: { distance: [120, 137.142853, 142.857147, 8.545507, 114.73893000000001] },
					10: { distance: [114.545456, 131.657135, 137.36264, 8.545507, 89.67] }
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
		},
		910: { // Apex Urgency
			0: { length: 500 }
		}
	},
	4: { // Sorcerer
		/*
		1: { // Fireball
			0: { length: 727.27 }
		},
		*/
		2: { // Frost Sphere
			0: {
				length: 800,
				race: {
					4: { length: 1250 }, // Male Aman
					9: { length: 1010 },
					10: { length: 950 }
				}
			}
		},
		3: { // Lightning Trap
			0: {
				length: 1333.33,
				abnormals: { 25090: { speed: 0.4 } }
			}
		},
		4: { // Arcane Pulse
			"*": {
				length: 1293,
				noRetry: true,
				race: { 9: { length: 990.91 } },
			},
			0: {
				type: "charging",
				length: [800, 800],
				noInterrupt: [4],
				abnormals: { 25140: { chargeSpeed: 0.3 } }
			},
			10: {
				noInterrupt: ["4-10"],
				level: {
					11: {
						abnormals: {
							500150: { skill: 330110 },
							501650: { skill: 330150 }
						}
					}
				}
			},
			11: {
				noInterrupt: ["4-11"],
				level: {
					11: {
						abnormals: {
							500150: { skill: 330111 },
							501650: { skill: 330151 }
						}
					}
				}
			},
			12: {
				noInterrupt: ["4-12"],
				level: {
					11: {
						abnormals: {
							500150: { skill: 330112 },
							501650: { skill: 330152 }
						}
					}
				}
			},
		},
		5: { // Mana Infusion
			0: { length: 4595.5 }
		},
		6: { // Meteor Strike
			0: {
				length: 3932,
				glyphs: {
					25003: { speed: 0.17 },
					25069: { speed: 0.25 }
				},
				abnormals: { 25100: { speed: 0.25 } },
				race: {
					7: { length: 3930.76 },
					9: { length: 3700 }
				},
				level: {
					9: {
						abnormals: {
							500150: { skill: 320100 },
							501650: { skill: 320150 }
						}
					}
				}
			}
		},
		7: { // Backstep
			0: {
				CC: ["evasive", "extended"],
				length: 657.3,
				noInterrupt: [7],
				distance: -200,
				forceClip: true
			}
		},
		8: { // Flame Pillar
			0: {
				length: 1210,
				abnormals: { 25070: { speed: 0.25 } }
			}
		},
		10: { // Mana Barrier
			0: { // lvl 1, f amani: 566.36 | lvl 2, elin: 566.36 
				length: 633,
				race: { 1: { length: 566 } }
			}
		},
		11: { // Lightning Strike
			0: {
				length: 869.56,
				race: { 9: { length: 809 } }
			}
		},
		12: { // Void Pulse
			0: {
				length: 933,
				race: { 7: { length: 931 } }
			}
		},
		13: { // Mindblast
			0: {
				length: 2462,
				race: {
					7: { length: 2460 },
					9: { length: 2315 }
				},
				glyphs: { 25048: { speed: 0.3 } },
				abnormals: { 25110: { speed: 0.4 } }
			}
		},
		14: { // Retaliate
			0: {
				type: "retaliate",
				length: 1633,
				noInterrupt: [14],
				noRetry: true
			}
		},
		16: { // Painblast
			0: {
				length: 1608,
				race: {
					7: { length: 1607 },
					9: { length: 1330 }
				}
			}
		},
		17: { // Painful Trap
			0: { length: 1106 }
		},
		18: { // Glacial Retreat
			0: {
				CC: "extended",
				length: 1111,
				noInterrupt: [18],
				distance: -187.5,
				forceClip: true
			}
		},
		19: { // Mana Siphon
			"*": {
				length: 900,
				noRetry: true
			},
			0: {
				type: "charging",
				length: [1000, 1000],
				noInterrupt: [19]
			},
			10: { noInterrupt: ["19-10"] },
			11: { noInterrupt: ["19-11"] },
			12: { noInterrupt: ["19-12"] }
		},
		20: { // Flaming Barrage
			0: {
				type: "lockon",
				fixedSpeed: 1,
				length: 4900,
				noRetry: true
			},
			10: {
				type: "lockonCast",
				length: 1501,
				glyphs: {
					25001: { speed: 0.3 },
					25096: { speed: 0.4 }
				},
				abnormals: { 25060: { speed: 0.25 } }
			}
		},
		21: { // Nerve Exhaustion
			"*": { noRetry: true },
			0: {
				type: "lockon",
				fixedSpeed: 1,
				length: 4900
			},
			10: {
				type: "lockonCast",
				fixedSpeed: 1,
				length: [300, 1200]
			}
		},
		22: { // Burning Breath
			"*": { noRetry: true },
			0: {
				type: "lockon",
				fixedSpeed: 1,
				length: 4900
			},
			10: {
				type: "lockonCast",
				fixedSpeed: 1,
				length: [300, 1200]
			}
		},
		23: { // Mana Volley
			0: {
				type: "lockon",
				fixedSpeed: 1,
				length: 4900,
				noRetry: true
			},
			10: {
				type: "lockonCast",
				fixedSpeed: 1,
				length: [300, 900]
			}
		},
		25: { // Time Gyre
			"*": { noRetry: true },
			0: {
				type: "lockon",
				fixedSpeed: 1,
				length: 4900
			},
			10: {
				type: "lockonCast",
				fixedSpeed: 1,
				length: 700
			}
		},
		26: { // Teleport Jaunt
			0: {
				disableOnAbnormal: 425103,
				CC: ["evasive", "extended"],
				type: "teleport",
				length: [222, 255.33],
				distance: [0, 333],
				noInterrupt: [26],
				teleportStage: 1,
				noRetry: true,
				timeout: 150
			}
		},
		27: { // Hailstorm
			0: {
				length: 1000,
				abnormals: {
					902: { nocTanSpeed: 0.15 },
					910: { nocTanSpeed: 0.15 },
					911: { nocTanSpeed: 0.15 },
					912: { nocTanSpeed: 0.15 },
					913: { nocTanSpeed: 0.15 },
					916: { nocTanSpeed: 0.15 },
					917: { nocTanSpeed: 0.15 },
					920: { nocTanSpeed: 0.225 },
					921: { nocTanSpeed: 0.225 },
					922: { nocTanSpeed: 0.225 },
					929: { nocTanSpeed: 0.225 },
					5010009: { nocTanSpeed: 0.15 },
					999010000: { nocTanSpeed: 0.15 }
				}
			}
		},
		//28: { // Stone Skin
		//0: { length: 305 }, // gets cancelled with endtype 9
		//  <- S_ACTION_STAGE C11005-05 0 1x 1 0 0 0 0 0 (88888888 1 1 -1) xdd
		// <- S_ACTION_END C11005-05 25 0u 5004ms (5004ms)
		//50: { length: 365 },
		//},
		30: { // Nova
			0: {
				length: 2858,
				glyphs: { 25092: { speed: 0.3 } }
			}
		},
		31: { // Warp Barrier
			"*": { length: 500 },
			/*
			10: {
				triggerAbnormal: { 501600: 1000 },
				glyphs: { 25095: { triggerAbnormal: { 501600: 2000 } } }
			},
			20: {
				triggerAbnormal: { 501650: 1000 },
				glyphs: { 25095: { triggerAbnormal: { 501650: 2000 } } }
			}
			*/
			10: true,
			20: true
		},
		32: { // Meteor Shower
			"*": {
				length: 6778.2,
				glyphs: {
					25003: { speed: 0.17 },
					25069: { speed: 0.25 }
				},
				abnormals: { 25100: { speed: 0.25 } },
				race: {
					7: { length: 6774.54 },
					9: { length: 6475 }
				}
			},
			0: true,
			50: {
				length: 3933,
				race: {
					7: { length: 3929.4 },
					9: { length: 3699 }
				}
			}
		},
		33: { // Arcane Pulse (Mana Boost)
			"*": {
				length: 1292,
				noRetry: true,
				race: { 9: { length: 990.91 } }
			},
			10: true,
			11: true,
			12: true,
			50: true,
			51: true,
			52: true
		},
		34: { // Mana Boost
			0: {
				length: 633,
				race: { 1: { length: 533 } }
			}
		},
		910: { // Apex Urgency
			0: { length: 500 }
		}
	},
	5: { // Archer
		/*
		1: { // Arrow
			0: {
				length: 412,
				noInterrupt: [1]
			}
		},
		*/
		2: { // Arrow Volley
			0: {
				type: "lockon",
				fixedSpeed: 1,
				length: 4900,
				noInterrupt: [22],
				noRetry: true
			},
			10: {
				type: "lockonCast",
				length: 1233,
				noInterrupt: [22],
				race: {
					2: { length: 1266 },
					5: { length: 1266 }
				}
			}
		},
		3: { // Radiant Arrow
			"*": {
				length: 1748.2,
				noRetry: true,
				distance: -100,
				race: {
					1: { length: 1566.37 },
					8: { distance: -96.6 }
				}
			},
			0: {
				type: "charging",
				length: [600, 600, 600],
				distance: false,
				//triggerAbnormal: { 600200: 7000 },
				noInterrupt: [3],
				abnormals: {
					26180: { chargeSpeed: 0.3 },
					601450: { chargeSpeed: 0.5 }
				},
				level: [
					{ length: 600 },
					{ length: [600, 600] },
					{ length: [600, 600] }
				]
			},
			10: { noInterrupt: ["3-10"] },
			11: { noInterrupt: ["3-11"] },
			12: { noInterrupt: ["3-12"] },
			13: { noInterrupt: ["3-13"] }
		},
		4: { // Penetrating Arrow
			"*": {
				length: 1293.63,
				distance: -50,
				noRetry: true,
				race: {
					1: {
						length: 1275,
						distance: -80
					},
					8: { distance: -48.69 },
					9: { length: 1323 }
				}
			},
			0: {
				type: "charging",
				length: [800, 800, 800],
				distance: false,
				//triggerAbnormal: { 600200: 7000 },
				noInterrupt: [4],
				abnormals: {
					26160: { chargeSpeed: 0.3 },
					26170: { chargeSpeed: 0.3 },
					26171: { chargeSpeed: 0.4 },
					26190: { chargeSpeed: 0.3 },
					601450: { chargeSpeed: 0.5 }
				},
				level: [
					{ length: 1000 },
					{ length: [1000, 1000] },
					{ length: [1000, 1000] }
				]
			},
			10: { noInterrupt: ["4-10"] },
			11: { noInterrupt: ["4-11"] },
			12: { noInterrupt: ["4-12"] },
			13: { noInterrupt: ["4-13"] }
		},
		5: { // Rain of Arrows
			0: {
				length: 3153.84,
				glyphs: { 26077: { speed: 0.4 } },
				abnormals: {
					902: { nocTanSpeed: 0.15 },
					910: { nocTanSpeed: 0.15 },
					911: { nocTanSpeed: 0.15 },
					912: { nocTanSpeed: 0.15 },
					913: { nocTanSpeed: 0.15 },
					916: { nocTanSpeed: 0.15 },
					917: { nocTanSpeed: 0.15 },
					920: { nocTanSpeed: 0.225 },
					921: { nocTanSpeed: 0.225 },
					922: { nocTanSpeed: 0.225 },
					929: { nocTanSpeed: 0.225 },
					5010009: { nocTanSpeed: 0.15 },
					999010000: { nocTanSpeed: 0.15 }
				}
			}
		},
		6: { // Backstep
			0: {
				CC: ["evasive", "extended"],
				length: 657.27,
				distance: -200,
				noInterrupt: [6],
				noRetry: true,
				forceClip: true
			}
		},
		7: { // Feign Death
			0: {
				withoutWeapon: true,
				fixedSpeed: 1,
				length: [3727.273, 54545.455, 1657.273],
				distance: [-136.38, 0, 0],
				race: {
					0: {
						length: [3500, 54545.455, 1657.273],
						distance: [-119.575417, 0, 0]
					},
					1: {
						length: [3045.455, 54545.455, 1657.273],
						distance: [-70, 0, 0]
					},
					2: {
						length: [4090.909, 54545.455, 1657.273],
						distance: [-102.666664, 0, 0]
					},
					3: {
						length: [2909.091, 54545.455, 1718.182],
						distance: [-100, 0, 0]
					},
					4: {
						length: [4863.636, 54545.455, 1657.273],
						distance: [-66.59007, 0, 0]
					},
					5: {
						length: [3818.182, 54545.455, 1657.273],
						distance: [-119.723, 0, 0]
					},
					6: {
						length: [4302.727, 54545.455, 1657.273],
						distance: [-113.775879, 0, 0]
					},
					9: {
						length: [2954.545, 54545.455, 1657.273],
						distance: [-114.050468, 0, 0]
					},
					10: {
						length: [4500, 54545.455, 1657.273],
						distance: [-40.0000038, 0, 0]
					}
				},
			}
		},
		8: { // Rapid Fire
			"*": {
				length: 700,
				noRetry: true,
				blockCancelPacket: true,
				noInterrupt: [5]
			},
			0: {
				length: 433,
				noInterrupt: [6, "8-6"],
				forceDelay: 15
			},
			1: true,
			2: true,
			3: true,
			4: true,
			5: true,
			6: { length: 1235 }
		},
		9: { // Slow Trap
			0: { length: 1149.5 }
		},
		10: { // Stunning Trap
			0: {
				length: 1149.5,
				abnormals: {
					26110: { speed: 0.4 },
					26111: { speed: 0.5 }
				}
			}
		},
		12: { // Velik's Mark
			0: { length: 200 }
		},
		14: { // Retaliate
			0: {
				type: "retaliate",
				length: 1633,
				noRetry: true,
				noInterrupt: [14],
				race: {
					0: { length: 1433 },
					1: { length: 1433 }
				}
			}
		},
		15: { // Incendiary Trap
			0: { length: 1149.5 }
		},
		16: { // Breakaway Bolt
			0: {
				CC: "extended",
				length: 1333,
				distance: -250,
				forceClip: true
			}
		},
		17: { // Web Arrow
			0: { length: 533 }
		},
		18: { // Close Quarters
			"*": { noInterrupt: [18] },
			0: {
				length: 300,
				distance: 89.8,
				race: {
					1: { length: 333 },
					4: { length: 333 },
					7: { length: 333 },
					8: { length: 333 },
					10: { length: 333 }
				}
			},
			1: {
				length: 1233,
				distance: 87.29,
				race: {
					0: { length: 1266 },
					1: { length: 1266 },
					2: { length: 1266 },
					3: { length: 1266 },
					4: { length: 1266 },
					5: { length: 1266 }
				}
			}
		},
		19: { // Poison Arrow
			0: {
				length: 1102.36,
				distance: -12.5,
				noInterrupt: [22],
				abnormals: { 26100: { speed: 0.25 } },
				race: {
					0: { length: 1151.47 },
					1: {
						length: 1086.17,
						distance: -20
					},
					6: { length: 1151.4 },
					8: { distance: -12.17 },
					9: { length: 1118.53 }
				}
			}
		},
		20: { // Restraining Arrow
			0: {
				length: 533,
				noInterrupt: [22]
			}
		},
		21: { // Sniper's Eye
			"*": { length: 636 },
			0: true,
			50: true
		},
		22: { // Sequential Fire
			0: {
				length: 433,
				consumeAbnormal: 600200,
				enableOnAbnormal: 600200,
				noRetry: true,
				race: { 5: { length: 533 } }
			}
		},
		23: { // Stunning Trap Arrow
			0: { length: 1423.6 }
		},
		25: { // Incendiary Trap Arrow
			0: { length: 1192.73 }
		},
		29: { // Thunderbolt
			0: {
				length: 3766,
				distance: -100,
				//triggerAbnormal: { 600200: [7000, 798] }, // Fixed ASPD
				noInterrupt: [22],
				glyphs: {
					26089: { speed: 0.3 },
					26102: { speed: 0.3 }
				},
				race: {
					1: { length: 3566 },
					5: { length: 3799 },
					8: { distance: -96.6 }
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
				length: 182
			}
		},
		33: { // Chase
			0: {
				CC: "evasive",
				type: "dash",
				fixedSpeed: 1,
				length: 1050,
				distance: 413
			}
		},
		910: { // Apex Urgency
			0: { length: 500 }
		}
	},
	6: { // Priest
		/*
		1: { // Divine Radiance
			"*": { noInterrupt: [1] },
			0: { length: 619 },
			1: { length: 650 },
			2: { length: 684 },
			3: { length: 722 }
		},
		*/
		2: { // Regeneration Circle
			0: {
				length: 2149.4,
				disableOnAbnormal: 805800,
				abnormals: {
					902: { nocTanSpeed: 0.15 },
					910: { nocTanSpeed: 0.15 },
					911: { nocTanSpeed: 0.15 },
					912: { nocTanSpeed: 0.15 },
					913: { nocTanSpeed: 0.15 },
					916: { nocTanSpeed: 0.15 },
					917: { nocTanSpeed: 0.15 },
					920: { nocTanSpeed: 0.225 },
					921: { nocTanSpeed: 0.225 },
					922: { nocTanSpeed: 0.225 },
					929: { nocTanSpeed: 0.225 },
					5010009: { nocTanSpeed: 0.15 },
					999010000: { nocTanSpeed: 0.15 }
				},
				race: { 10: { length: 2774.4 } }
			}
		},
		3: { // Healing Circle
			0: {
				length: 1763,
				disableOnAbnormal: 805800,
				noInterrupt: [2, 3, 5, 10, 12, 11, 14, 16, 18, 25, 27, 28, "30-10", "33-10", 34, "35-10", "37-10", "41-10", 42],
				chains: {
					"19-10": 30,
					26: 30,
					38: 30
				}
			},
			30: { length: 1477 }
		},
		5: { // Blessing of Shakan, Seren, Balder, Zenobia and Arachne
			0: { length: 1293.63 }
		},
		6: { // Arise
			0: { length: 839 }
		},
		8: { // Mana Infusion
			0: {
				ength: 2537.5,
				disableOnAbnormal: 805800,
				glyphs: {
					28044: { speed: 0.25 },
					28077: { speed: 0.25 }
				},
				race: { 0: { length: 2565 } }
			}
		},
		10: { // Purifying Circle
			0: { length: 1294 }
		},
		11: { // Metamorphic Blast
			"*": { length: 839 },
			0: true,
			1: true,
			2: true
		},
		12: { // Resurrect
			0: {
				length: 5900,
				glyphs: { 28045: { speed: 0.15 } },
				abnormals: {
					902: { nocTanSpeed: 0.15 },
					910: { nocTanSpeed: 0.15 },
					911: { nocTanSpeed: 0.15 },
					912: { nocTanSpeed: 0.15 },
					913: { nocTanSpeed: 0.15 },
					916: { nocTanSpeed: 0.15 },
					917: { nocTanSpeed: 0.15 },
					920: { nocTanSpeed: 0.225 },
					921: { nocTanSpeed: 0.225 },
					922: { nocTanSpeed: 0.225 },
					929: { nocTanSpeed: 0.225 },
					5010009: { nocTanSpeed: 0.15 },
					999010000: { nocTanSpeed: 0.15 }
				}
			}
		},
		14: { // Summon: Party
			0: {
				length: 4506,
				race: { 0: { length: 4535 } }
			}
		},
		16: { // Shocking Implosion
			"*": {
				length: 1718,
				noInterrupt: [2, 3, 5, 10, 12, 14, 16, 18, "19-10", 25, 26, 28, 29, "30-10", "33-10", 34, "35-10", "37-10", 38, 40, "41-10", 42]
			},
			0: { chains: { 11: 30, 27: 30 } },
			10: { chains: { 11: 11, 27: 11 } },
			11: { length: 1438.45 },
			20: { chains: { 11: 21, 27: 21 } },
			21: { length: 1438.45 },
			30: { length: 1438.46 }
		},
		18: { // Heal Thyself
			0: {
				withoutWeapon: true,
				disableOnAbnormal: 805800,
				length: 1266
			}
		},
		19: { // Focus Heal
			0: {
				type: "lockon",
				fixedSpeed: 1,
				length: 54545.45,
				disableOnAbnormal: 805800,
				noRetry: true
			},
			10: {
				type: "lockonCast",
				length: 1949.5
			}
		},
		22: { // Kaia's Shield
			0: {
				length: 667,
				disableOnAbnormal: 805800
			}
		},
		25: { // Retaliate
			0: {
				type: "retaliate",
				noInterrupt: [25],
				length: 1633,
				noRetry: true
			}
		},
		26: { // Fiery Escape
			0: {
				CC: ["evasive", "extended"],
				noInterrupt: [26, 34, 38],
				length: 1110.83,
				distance: -250.5,
				forceClip: true
			}
		},
		27: { // Final Reprisal
			"*": {
				length: 2933,
				race: { 9: { length: 3333 } },
				noInterrupt: [2, 3, 5, 10, 12, 14, 18, "19-10", 25, 26, 27, 28, "30-10", "33-10", 34, "35-10", "37-10", 38, "41-10", 42],
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
				race: { 9: { length: 1273 } }
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
				race: { 9: { length: 1273 } }
			},
			30: {
				length: 1113,
				race: { 9: { length: 1273 } }
			}
		},
		28: { // Mana Charge / Divine Charge
			"*": {
				length: 798.26,
				noRetry: true,
				race: { 0: { length: 827 } },
				glyphs: { 28039: { effectScale: 1.5 } },
				level: {
					1: {
						length: 700,
						disableOnAbnormal: 425100
					}
				}
			},
			0: {
				type: "charging",
				length: [800, 1600],
				noInterrupt: [28],
				bodyRolls: { 350708: { chargeSpeed: 0.15 } },
				glyphs: {
					28031: { chargeSpeed: 0.25 },
					28039: { effectScale: 1 }
				},
				level: {
					1: {
						length: [900, 900, 900],
						glyphs: {
							28031: { chargeSpeed: 0.25 },
							28039: { effectScale: 1.5 }
						},
					}
				}
			},
			10: { noInterrupt: ["28-10"] },
			11: { noInterrupt: ["28-11"] },
			12: { noInterrupt: ["28-12"] },
			13: { noInterrupt: ["28-13"] }
		},
		29: { // Triple Nemesis
			0: { length: 810 },
			1: { length: 800 },
			2: { length: 1250 }
		},
		30: { // Plague of Exhaustion
			"*": { noRetry: true },
			0: {
				type: "lockon",
				fixedSpeed: 1,
				length: 4900
			},
			10: {
				type: "lockonCast",
				fixedSpeed: 1,
				length: 1433
			}
		},
		31: { // Guardian Sanctuary
			0: {
				fixedSpeed: 1,
				length: 700,
				disableOnAbnormal: 805800
			}
		},
		32: { // Divine Prayer
			0: {
				withoutWeapon: true,
				fixedSpeed: 1,
				length: [1300, 900],
				disableOnAbnormal: 805800
			}
		},
		33: { // Ishara's Lullaby
			"*": { noRetry: true },
			0: {
				type: "lockon",
				fixedSpeed: 1,
				length: 4900
			},
			10: {
				type: "lockonCast",
				fixedSpeed: 1,
				length: [300, 1433]
			}
		},
		34: { // Restorative Burst
			0: { length: 1433 }
		},
		35: { // Energy Stars
			"*": { noRetry: true },
			0: {
				type: "lockon",
				fixedSpeed: 1,
				length: 4900
			},
			10: {
				type: "lockonCast",
				fixedSpeed: 1,
				length: 1433
			}
		},
		37: { // Healing Immersion
			"*": { noRetry: true },
			0: {
				type: "lockon",
				fixedSpeed: 1,
				length: 4900,
				noInterrupt: [37],
				partyOnly: true
			},
			10: {
				type: "lockonCast",
				fixedSpeed: 1,
				length: 1433,
				disableOnAbnormal: 805800,
				noInterrupt: ["37-10"]
			}
		},
		38: { // Backstep
			0: {
				CC: ["evasive", "extended"],
				noInterrupt: [26, 38],
				length: 657.27,
				distance: -200,
				forceClip: true,
				race: {
					0: { distance: -211.52 },
					4: { distance: -215.3 }
				}
			}
		},
		39: { // Grace of Resurrection
			0: { length: 5904 }
		},
		40: { // Zenobia's Vortex
			"*": {
				length: 1070.71,
				noInterrupt: [40],
				timeout: 150
			},
			0: true,
			10: true,
			20: true
		},
		41: { // Divine Intervention / Divine Vitality
			0: {
				type: "lockon",
				fixedSpeed: 1,
				length: 54445,
				disableOnAbnormal: 805800,
				noRetry: true,
				partyOnly: true
			},
			10: {
				type: "lockonCast",
				length: 933,
			}
		},
		42: { // Holy Burst
			"*": {
				length: 800,
				disableOnAbnormal: 425100
			},
			0: true,
			20: true,
			30: true
		},
		43: { // Words of Judgment
			"*": { disableOnAbnormal: [425100, 425101] },
			0: { length: 1416.66 },
			50: { length: 200 }
		},
		910: { // Apex Urgency
			0: { length: 500 }
		}
	},
	7: { // Mystic
		/*
		1: { // Sharan Bolt
			"*": { length: 689 },
			0: true,
			1: true,
			2: true,
			3: true
		},
		*/
		2: { // Corruption Ring
			0: {
				type: "hold",
				length: 10869,
				chainOnRelease: 11
			},
			11: { length: 839 },
			12: {
				length: 1294,
				timeout: 135,
				race: {
					1: {
						length: 1224
					}
				}
			}
		},
		5: { // Titanic Favor
			0: {
				type: "lockon",
				fixedSpeed: 1,
				length: 59900,
				noRetry: true
			},
			10: {
				type: "lockonCast",
				length: 1950
			}
		},
		6: { // Shara's Lash
			0: { length: 1300 }
		},
		7: { // Mana Infusion
			0: {
				length: 4595.45,
				glyphs: { 27044: { speed: 0.25 } }
			}
		},
		8: { // Metamorphic Blast
			0: {
				length: 839,
				noInterrupt: [1, 2, 4, "5-10", 6, "9-10", 10, 13, 14, 15, 16, 17, 21, "18-10", "22-10", 37, "41-10", 43, 48],
				chains: { 8: 30, 23: 30 }
			},
			30: { length: 839 }
		},
		9: { // Arun's Cleansing
			0: {
				type: "lockon",
				fixedSpeed: 1,
				length: 59900,
				noRetry: true
			},
			10: {
				type: "lockonCast",
				length: 800
			}
		},
		10: { // Resurrect
			0: {
				length: 8066,
				glyphs: {
					27049: { speed: 0.2 },
					27079: { speed: 0.2 }
				},
				abnormals: {
					902: { nocTanSpeed: 0.15 },
					910: { nocTanSpeed: 0.15 },
					911: { nocTanSpeed: 0.15 },
					912: { nocTanSpeed: 0.15 },
					913: { nocTanSpeed: 0.15 },
					916: { nocTanSpeed: 0.15 },
					917: { nocTanSpeed: 0.15 },
					920: { nocTanSpeed: 0.225 },
					921: { nocTanSpeed: 0.225 },
					922: { nocTanSpeed: 0.225 },
					929: { nocTanSpeed: 0.225 },
					5010009: { nocTanSpeed: 0.15 },
					999010000: { nocTanSpeed: 0.15 }
				}
			}
		},
		11: { // Summon: Party
			0: { length: 4445 }
		},
		12: { // Vow of Rebirth
			0: {
				type: "lockon",
				fixedSpeed: 1,
				length: 59900,
				noRetry: true,
				partyOnly: true
			},
			10: {
				type: "lockonCast",
				length: 1950,
				race: { 4: { length: 939 } }
			}
		},
		13: { // Aura of the Merciless
			"*": {
				length: 1293.63,
				race: { 4: { length: 1206.36 } }
			},
			0: true,
			50: true
		},
		14: { // Aura of the Swift
			"*": {
				length: 1293.63,
				race: { 4: { length: 1206.36 } }
			},
			0: true,
			50: true
		},
		15: { // Aura of the Unyielding
			"*": {
				length: 1293.63,
				race: { 4: { length: 1206.36 } }
			},
			0: true,
			50: true
		},
		16: { // Aura of the Tenacious
			"*": {
				length: 1293.63,
				race: { 4: { length: 1206.36 } }
			},
			0: true,
			50: true
		},
		17: { // Teleport Jaunt
			0: {
				disableOnAbnormal: 425103,
				CC: ["evasive", "extended"],
				type: "teleport",
				length: [222, 255.33],
				distance: [0, 333],
				noInterrupt: [17],
				teleportStage: 1,
				noRetry: true,
				timeout: 150
			}
		},
		18: { // Arun's Vitae
			"*": { noRetry: true },
			0: {
				type: "charging",
				length: 1240,
				chargeLevels: [10, 10],
				noInterrupt: [18],
				abnormals: {
					27070: { chargeSpeed: 0.25 },
					27080: { chargeSpeed: 0.25 }
				}
			},
			10: {
				length: 800,
				noInterrupt: ["18-10"],
				race: { 9: { length: 833 } }
			}
		},
		21: { // Retaliate
			0: {
				type: "retaliate",
				length: 1633,
				noRetry: true
			}
		},
		22: { // Arun's Tears
			"*": { noRetry: true },
			0: {
				type: "charging",
				length: 1240,
				chargeLevels: [10, 10],
				noInterrupt: [22],
				abnormals: { 27100: { chargeSpeed: 0.25 } }
			},
			10: {
				length: 800,
				noInterrupt: ["18-10"],
				race: { 9: { length: 833 } }
			}
		},
		23: { // Metamorphic Smite
			0: {
				length: 1440,
				noInterrupt: [1, 2, 4, "5-10", 6, "9-10", 10, 13, 14, 15, 16, 17, "18-10", 21, "22-10", 23, 37, "41-10", 43, 48],
				chains: { 8: 30 }
			},
			30: { length: 1108 }
		},
		24: { // Volley of Curses
			"*": { fixedSpeed: 1 },
			0: {
				type: "lockon",
				length: 4900,
				noRetry: true
			},
			10: {
				type: "lockonCast",
				fixedSpeed: 1,
				length: [533.33, 667]
			}
		},
		25: { // Thrall of Protection
			"*": {
				fixedSpeed: 1,
				length: [1000, 1700],
				timeout: 150
			},
			0: true,
			10: true, // 1023016
			30: { length: [500, 700] } // 1023017
		},
		27: { // Thrall of Life
			"*": {
				fixedSpeed: 1,
				length: [229, 471]
			},
			0: true,
			10: true, // 10236013
			30: { length: [500, 700] } // 10236014
		},
		28: { // Sonorous Dreams
			"*": { fixedSpeed: 1 },
			0: {
				type: "lockon",
				length: 4900,
				noRetry: true
			},
			10: {
				type: "lockonCast",
				fixedSpeed: 1,
				length: 1433
			}
		},
		29: { // Regression
			0: {
				fixedSpeed: 1,
				length: [500, 700]
			}
		},
		30: { // Curse of Exhaustion
			"*": { fixedSpeed: 1 },
			0: {
				type: "lockon",
				length: 4900,
				noRetry: true
			},
			10: {
				type: "lockonCast",
				fixedSpeed: 1,
				length: 1433
			}
		},
		31: { // Curse of Confusion
			"*": { fixedSpeed: 1 },
			0: {
				type: "lockon",
				length: 4900,
				noRetry: true
			},
			10: {
				type: "lockonCast",
				fixedSpeed: 1,
				length: 1433
			}
		},
		32: { // Mire
			"*": { fixedSpeed: 1 },
			0: {
				type: "lockon",
				length: 4900,
				noRetry: true
			},
			10: {
				type: "lockonCast",
				fixedSpeed: 1,
				length: 1433
			}
		},
		33: { // Thrall of Vengeance
			"*": {
				fixedSpeed: 1,
				length: [267, 511]
			},
			0: true,
			10: true, // 10237014
			30: { length: [500, 700] } //  (500, 1200) 10237015
		},
		34: { // Thrall of Wrath
			"*": {
				fixedSpeed: 1,
				length: [1000, 1700],
				glyphs: { 27057: { speed: 0.3 } }
			},
			0: true,
			10: true, //10238007
			30: { length: [500, 1200] } // 10238008
		},
		35: { // Command: Attack
			0: {
				fixedSpeed: 1,
				length: 700
			}
		},
		36: { // Command: Follow
			0: {
				fixedSpeed: 1,
				length: 700
			}
		},
		37: { // Warding Totem
			0: { length: 1900 } // 1024001
		},
		41: { // Contagion
			0: {
				type: "lockon",
				fixedSpeed: 1,
				length: 4900,
				noRetry: true
			},
			10: {
				type: "lockonCast",
				length: 1020
			}
		},
		42: { // Boomerang Pulse
			0: {
				length: 545.45,
				noInterrupt: [42],
				timeout: 150
			}
		},
		43: { // Release
			0: { length: [400, 575] }
		},
		44: { // Mass Teleport
			0: {
				type: "teleport",
				length: [222, 255],
				distance: [0, 333],
				disableOnAbnormal: [425100, 425103],
				noInterrupt: [17],
				teleportStage: 1,
				noRetry: true,
				timeout: 150
			}
		},
		45: { // Thrall Augmentation
			"*": {
				length: 91,
				disableOnAbnormal: 425100
			},
			0: true,
			50: true
		},
		47: { // Arunic Release
			0: {
				length: 1060,
				disableOnAbnormal: 425100
			}
		},
		48: { // Summon: Thrall Lord
			0: {
				fixedSpeed: 1,
				length: 4050,
				disableOnAbnormal: [425100, 425101]
			} // 10239003
		},
		910: { // Apex Urgency
			0: { length: 500 }
		}
	},
	8: { // Reaper
		/*
		"*": { consumeAbnormal: [10151020, 10151021, 10151022, 10151023] },
		1: { // Spiral Barrage
			"*": {
				length: 1012.4,
				distance: 48,
				inPlace: {
					movement: [{
						duration: 766,
						speed: 1,
						unk: 1,
						distance: 0
					}, {
						duration: 346,
						speed: 1,
						unk: 1,
						distance: 0
					}],
					distance: 0
				},
				triggerAbnormal: { 10151020: 2000 },
				noInterrupt: [3, 4, 5, 6, 8, 9, 10, 11, 12, 13, 14, 15, 18, 20, 40],
				abnormals: {
					10151020: { chain: 2 },
					10151021: { chain: 3 },
					10151022: { chain: 4 },
					10151023: { chain: 5 }
				},
				chains: { "1-5": 1 },
				noRetry: true
			},
			0: true,
			1: true,
			2: {
				length: 1196.4,
				distance: 42,
				inPlace: {
					movement: [{
						duration: 950,
						speed: 1,
						unk: 1,
						distance: 0
					}, {
						duration: 346,
						speed: 1,
						unk: 1,
						distance: 0
					}],
					distance: 0
				},
				triggerAbnormal: { 10151021: 2000 },
			},
			3: {
				length: 862.4,
				distance: 56,
				inPlace: {
					movement: [{
						duration: 616,
						speed: 1,
						unk: 1,
						distance: 0
					}, {
						duration: 346,
						speed: 1,
						unk: 1,
						distance: 0
					}],
					distance: 0
				},
				triggerAbnormal: { 10151022: 1800 },
			},
			4: {
				length: 1394.4,
				distance: 60,
				inPlace: {
					movement: [{
						duration: 1150,
						speed: 1,
						unk: 1,
						distance: 0
					}, {
						duration: 346,
						speed: 1,
						unk: 1,
						distance: 0
					}],
					distance: 0
				},
				triggerAbnormal: { 10151023: 2000 },
			},
			5: {
				length: 1916,
				distance: 91,
				inPlace: {
					movement: [{
						duration: 2016,
						speed: 1,
						unk: 1,
						distance: 0
					}],
					distance: 0
				},
				triggerAbnormal: false
			}
		},
		*/
		3: { // Double Shear
			"*": {
				length: 2040,
				noInterrupt: ["1-0", "1-2", 3, 4, 12, 13, 14, 15, 18, 20],
				abnormals: { 29030: { speed: 0.25 } },
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
			0: true,
			30: true
		},
		4: { // Sundering Strike
			"*": {
				noInterrupt: [1, 4, 8, 9, 10, 11, 12, 14, 20],
				chains: {
					1: null,
					3: null,
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
				length: [1166.25, 1757.3, 1038.34],
				distance: [0, 100, 0],
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
				length: [1757.3, 1038.3],
				distance: [100, 0],
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
			"*": {
				//blockCancelPacket: true,
				distance: [120, 0],
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
				length: [2400, 975],
				noInterrupt: ["1-0", "1-2", 4, 12, 14, 15, 18, 20],
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
			30: { length: [1450, 966] }
		},
		6: { // Death Spiral
			"*": { // todo: fix
				length: 1246.7,
				triggerAbnormal: { 10151131: 6000 },
				noRetry: true
			},
			0: {
				abnormalChains: { 10151131: 31 },
				noInterrupt: ["6-31"],
				chains: {
					1: 30,
					3: 30,
					4: 30,
					5: 30,
					8: 30,
					9: 30,
					10: 30,
					11: 30,
					12: 30,
					13: 30,
					14: 30
					//15: 30
					//18: 30
				}
			},
			30: true,
			31: {
				triggerAbnormal: false,
				consumeAbnormal: 10151131
			}
		},
		8: { // Whipsaw
			"*": {
				length: 2511.1,
				noInterrupt: [4, 5, 6, 8, 9, 11, 12, 14, 15, 18, 20],
				chains: {
					1: 30,
					3: 30,
					10: 30
				}
			},
			0: true,
			30: true
		},
		9: { // Smite
			0: {
				CC: ["evasive", "extended"],
				length: 1732.8,
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
				noInterrupt: [1, 3, 4, 5, 6, 8, 9, 10, 11, 12, 14, 15, 18, 20]
			}
		},
		10: { // Pendulum Strike
			"*": {
				CC: "extended",
				length: 983,
				distance: -200,
				noInterrupt: [10],
				chains: {
					1: 30,
					3: 30,
					4: 30,
					5: 30,
					6: 30,
					8: 30,
					9: 30,
					11: 30,
					12: 30,
					14: 30
					//15: 30
					//18: 30
				}
			},
			0: true,
			30: true
		},
		11: { // Shadow Lash
			"*": { // todo: fix
				length: 1247.3,
				noInterrupt: [1, 3, 4, 5, 6, 8, 9, 10, "11-3", 12, 13, 14, 15, 18, 20, 40],
				noRetry: true
			},
			0: {
				length: 2156.4, // Should noInterrupts just be here and not use abnormals as guides?
				triggerAbnormal: { 10151040: [2000, 809.1, true] },
				interruptAllWithAbnormal: {
					10151040: 11,
					10151041: 11,
					10151042: 11
				},
				abnormalChains: {
					10151040: 1,
					10151041: 2,
					10151042: 3
				}
			},
			1: {
				consumeAbnormal: 10151040,
				triggerAbnormal: { 10151041: 2000 }
			},
			2: {
				consumeAbnormal: 10151041,
				triggerAbnormal: { 10151042: 2000 }
			},
			3: { consumeAbnormal: 10151042 }
		},
		12: { // Shadow Burst
			"*": { glyphs: { 29026: { speed: 0.25 } } },
			0: {
				length: 3221.9,
				noInterrupt: [1, 3, 4, 5, 6, 8, 9, 10, 11, "12-1", 13, 14, 15, 18, 20],
				chains: { 12: 1 }
			},
			1: { length: 2019 }
		},
		/*
		13: { // Soul Reversemento
			0: { 
				length: ' ',
				abnormals: {
					10151031: { chain: 30 }
					10151035: { chain: 40 }
				}
			},
			30: false, // Swap
			40: false  // Backstab
		},
		*/
		14: { // Retaliate
			0: {
				type: "retaliate",
				length: 1633,
				noInterrupt: [14],
				noRetry: true
			}
		},
		15: { // Retribution
			0: {
				CC: "extended",
				fixedSpeed: 1,
				length: 1580.6
			}
		},
		16: { // Shadow Reaping
			0: {
				fixedSpeed: 1,
				length: 789.23
			}
		},
		18: { // Shrouded Escape
			0: {
				CC: ["evasive", "extended"],
				length: 839.1,
				distance: 150
			}
		},
		/*
		20: { // Cable Step
			0: {
				type: 'dynamicDistance',
				length: 1250
			}
		},
		*/
		40: { // Shadow Step
			"*": {
				CC: ["evasive", "extended"],
				length: 692.3,
				distance: 180,
				forceClip: true,
				abnormals: { 10151000: { chain: 30 } }
			},
			0: true,
			30: true
		},
		910: { // Apex Urgency
			0: { length: 500 }
		}
	},
	9: { // Gunner
		/*
		"*": { consumeAbnormal: [10152000, 10152002, 10152010, 10152011, 10152072, 10152080, 10152081, 10152083] }, // todo: diff hotkeys with awk2
		1: { // Blast
			"*": {
				fixedSpeed: 1,
				//noRetry: true,
				length: 1195,
				triggerAbnormal: { 10152011: 3100 },
				consumeAbnormal: [10152000, 10152010],
				noInterrupt: [1, 20],
			},
			1: true,
			2: { noRetry: true }
		},
		*/
		2: { // Bombardment
			0: {
				type: "lockon",
				fixedSpeed: 1,
				length: 59900,
				noRetry: true
			},
			1: {
				type: "lockonCast",
				length: 2999,
				noInterrupt: ["2-1"],
				glyphs: { 30004: { speed: 0.25 } }
			}
		},
		3: { // Scattershot
			"*": {
				length: 1739,
				distance: -108,
				triggerAbnormal: { 10152083: [4100, 490] },
				noInterrupt: [3, 20],
				glyphs: {
					30007: {
						movement: [{
							duration: 394,
							speed: 1,
							unk: 1,
							distance: 0
						}, {
							duration: 111,
							speed: 1,
							unk: 1,
							distance: 0
						}, {
							duration: 1333,
							speed: 1.8,
							unk: 1,
							distance: 64.8
						}],
						distance: 0.6
					}
				},
				chains: {
					2: 30,
					4: 30,
					5: 30,
					"7-3": 30,
					9: 30,
					10: 30,
					11: 30,
					13: 30,
					15: 30,
					18: 30,
					19: 30,
					40: 30
				}
			},
			1: true,
			2: true,
			30: true
		},
		4: { // Point Blank
			"*": {
				noRetry: true,
				length: 1532,
				distance: 137.88,
				triggerAbnormalIfMissing: { // hack or fix, idk
					10152000: [2100, 390],
					10152001: [2100, 390]
				},
				consumeAbnormalEnd: [10152000, 10152001],
				noInterrupt: [4, 20],
				chains: {
					2: 30,
					3: 30,
					5: 30,
					"7-3": 30,
					9: 30,
					10: 30,
					11: 30,
					13: 30,
					15: 30,
					18: 30,
					19: 30,
					40: 30
				},
			},
			1: true,
			2: true,
			3: {
				length: 1195,
				distance: -198.53,
				triggerAbnormal: { 10152002: 4100 },
				triggerAbnormalIfMissing: false,
				//enableOnAbnormal: 10152000,
				consumeAbnormalEnd: false,
				noInterrupt: [1, 3, "4-3", "4-4", 5, 6, 7, 10, 11, 13, 15, 19, 20, 21, 22, 23, 40],
				chains: { 4: 4 }
			},
			4: {
				length: 1200,
				distance: -198.53,
				triggerAbnormal: { 10152002: 4100 },
				triggerAbnormalIfMissing: false,
				consumeAbnormalEnd: false // this won't cause false to be searched...r-right? :swblob:
			},
			30: { noInterrupt: [4] }
		},
		5: { // Burst Fire
			"*": {
				bodyRolls: { 350905: { stamina: -5 } },
				blockCancelPacket: true
			},
			0: {
				length: 860,
				consumeAbnormal: [10152002, 10152010, 10152011, 10152072, 10152080, 10152081, 10152083],
				noInterrupt: [5],
				noRetry: true
			},
			1: {
				fixedSpeed: 1,
				length: 125,
				stamina: 75,
				instantStamina: true,
				//triggerAbnormal: { 10152053: [2100, 30] },
				glyphs: { 30046: { stamina: -10 } },
				level: [
					{ stamina: 50 },
					{ stamina: 55 },
					{ stamina: 60 },
					{ stamina: 65 }
				]
			}
		},
		6: { // Time Bomb
			"*": {
				fixedSpeed: 1,
				length: 1000,
				triggerAbnormal: {
					10152010: 3100,
					10152084: 4100
				},
				noInterrupt: [6, 20]
			},
			1: true,
			2: true
		},
		7: { // Arcane Barrage
			"*": {
				length: 1533,
				triggerAbnormal: {
					//30050: 3100, // -15~20
					10152010: [3100, 25]
					//10152040: [3100, 25]
				},
				noInterrupt: [7, 20]
			},
			1: {
				fixedSpeed: 1,
				noRetry: true
			},
			2: {
				fixedSpeed: 1,
				noRetry: true
			},
			3: {
				length: 1200,
				triggerAbnormal: { 10152081: [4100, 20] },
				noInterrupt: ["7-3"]
			}
		},
		9: { // Mana Missiles
			"*": { length: 1266 },
			0: {
				type: "charging",
				length: 1200,
				noInterrupt: [9, 20]
			},
			10: {
				distance: -50,
				noRetry: true,
				noInterrupt: ["9-10"]
			},
			11: {
				distance: -100,
				noRetry: true,
				noInterrupt: ["9-11"]
			}
		},
		10: { // Arc Bomb
			"*": {
				length: 1320,
				noInterrupt: [10, 20],
				chains: {
					"2-1": null,
					3: null,
					4: null,
					5: null,
					"7-3": null,
					11: null,
					13: null,
					15: null,
					19: null,
					40: null
				}
			},
			1: true,
			2: true,
			30: true
		},
		11: { // Rocket Jump
			"*": {
				CC: ["evasive", "extended"],
				length: 1400,
				noInterrupt: [11, 15, 20],
				distance: 415.45,
				chains: {
					2: 30,
					3: 30,
					4: 30,
					5: 30,
					"7-3": 30,
					9: 30,
					10: 30,
					13: 30,
					18: 30,
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
		13: { // Balder"s Vengeance
			"*": {
				length: 5800,
				distance: -269.09,
				noInterrupt: [13],
				chains: {
					"2-1": null,
					3: null,
					4: null,
					5: null,
					"7-3": null,
					9: null,
					10: null,
					11: null,
					15: null,
					19: null,
					40: null
				}
			},
			1: true,
			2: true,
			30: true
		},
		15: { // Replenishment
			"*": {
				fixedSpeed: 1,
				length: 1320,
				triggerAbnormal: { 10152072: [4100, 490] },
				noInterrupt: [15, 20],
				chains: {
					2: 30,
					3: 30,
					4: 30,
					5: 30,
					"7-3": 30,
					9: 30,
					10: 30,
					11: 30,
					13: 30,
					18: 30,
					19: 30,
					40: 30
				}
			},
			1: true,
			2: true,
			30: true
		},
		18: { // HB
			"*": {
				fixedSpeed: 1,
				length: 1433,
				//triggerAbnormalOnce: {10152251: 0x7fffffff },				
				consumeAbnormal: [10152000, 10152010, 10152011],
				noInterrupt: [18]
			},
			1: true,
			2: true
		},
		19: { // ST
			"*": {
				length: 1325,
				consumeAbnormal: [10152000, 10152001, 10152010, 10152011],
				chains: {
					1: null,
					"2-1": null,
					3: null,
					4: null,
					5: null,
					"7-3": null,
					9: null,
					10: null,
					11: null,
					13: null,
					15: null,
					40: null
				}
			},
			1: true,
			2: true,
			30: true
		},
		20: { // Retaliate
			0: { // Kd reaction consumes abnormals
				type: "retaliate",
				length: 1500,
				noInterrupt: [20],
				noRetry: true
			}
		},
		/*
		21: { // Command: Recall (Reaction) (No Timeline)
			0: { 
				length: xxx,
				consumeAbnormal: [10152010, 10152011]
			}
		}
		22: { // Command: Self-Destruct
			0: { 
				length: null,
				consumeAbnormal: [10152010, 10152011]
			}
		}
		23: { // Command: Stay/Follow
			'*': { length: null },
			0: true,
			1: { // Stay!
				triggerAbnormal: { 10152250: 0x7fffffff },
				consumeAbnormal: [10152000, 10152010, 10152011, 10152251]
			},
			2: { // Follow!
				 triggerAbnormal: { 10152251: 0x7fffffff },
				 consumeAbnormal: [10152000, 10152010, 10152011, 10152250]
			}
		},
		*/
		40: { // Rolling Reload
			0: {
				CC: ["evasive", "extended"],
				fixedSpeed: 1,
				length: 935,
				triggerAbnormal: {
					10152010: 3100,
					10152080: [4100, 20]
				},
				consumeAbnormal: [10152002, 10152010, 10152011, 10152072, 10152080, 10152081, 10152083], // todo: check
				noInterrupt: [11, 20],
				distance: 172.5,
				forceClip: true
			}
		},
		910: { // Apex Urgency
			0: { length: 500 }
		}
	},
	10: { // Brawler
		/*
		1: { // Punch
			"*": {
				length: 1575,
				distance: 71.28,
				triggerAbnormal: { 10153060: 3000 },
				consumeAbnormalEnd: 10153060,
				noInterrupt: ["1-3", 22, 24, 26],
				chains: {
					"1-0": 1,
					"1-1": 2,
					"1-2": 3,
					"1-30": 1,
					"1-31": 32,
					"1-32": 2,
					"2-2": 31,
					"2-3": 31,
					2: 30,
					"3-1": 30,
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
				noRetry: true
			},
			0: true,
			1: { distance: 68.63 },
			2: {
				length: 925,
				distance: 50.7
			},
			3: {
				length: 1725,
				distance: 121
			},
			30: true,
			31: true,
			32: { distance: 68.63 }
		},
		*/
		2: { // Counter
			'*': {
				CC: "extended",
				noRetry: true
			},
			/*
			0: 				 -> 10
				10153001 -> 11,
				10153002 -> 11,
				10153003 -> 11,
				10153004 -> 11,
				10153005 -> 11,
				10153060 -> 12,
			*/
			1: {
				length: 1200,
				distance: 139.97,
				triggerAbnormal: { 10153001: 0x7fffffff },
				consumeAbnormalEnd: 10153001
			},
			2: {
				length: 1817.8,
				distance: 84,
				triggerAbnormal: { 10153002: 0x7fffffff },
				consumeAbnormalEnd: 10153002
			},
			3: {
				length: 1932,
				distance: 131.2,
				triggerAbnormal: { 10153003: 0x7fffffff },
				consumeAbnormalEnd: 10153003
			},
			4: {
				length: 1973.4,
				distance: 142.86,
				triggerAbnormal: { 10153004: 0x7fffffff },
				consumeAbnormalEnd: 10153004
			},
			10: {
				type: "holdInfinite",
				fixedSpeed: 1,
				//length: 800,
				distance: 33.38,
				triggerAbnormal: { 10153006: 0x7fffffff },
				consumeAbnormalEnd: 10153006,
				endType51: true
			},
			11: {
				type: "holdInfinite",
				fixedSpeed: 1,
				//length: 800,
				distance: 33.38,
				triggerAbnormal: { 10153005: 0x7fffffff },
				consumeAbnormalEnd: 10153005,
				endType51: true
			},
			12: {
				chains: {
					"1-0": 1,
					"1-1": 2,
					"1-2": 3,
					"1-3": 4,
					"1-30": 1,
					"1-31": 1,
					"1-32": 2
				}
			}
		},
		3: { // Divine Wrath
			"*": {
				fixedSpeed: 1,
				noRetry: true
			},
			0: { length: 29900 },
			1: {
				type: "lockonCast",
				setEndpointStage: 1,
				length: [1800, 1433, 1366.5]
			}
		},
		4: { // Ground Pounder
			"*": {
				CC: "extended",
				noInterrupt: [4],
				length: 3234.75,
				chains: {
					1: 30,
					2: 30,
					"3-1": 30,
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
			0: true,
			30: true
		},
		5: { // Bullrush
			0: {
				CC: ["evasive", "extended"],
				fixedSpeed: 1,
				length: [2950, 650],
				distance: [0, 135]
			}
		},
		6: { // Haymaker
			"*": {
				length: [1022, 1833],
				distance: [0, 171.61],
				timeout: 150,
				abnormals: {
					31120: {
						chain: 31
					}
				},
				chains: {
					1: 30,
					2: 30,
					"3-1": 30,
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
			/*
			0: 				 -> 1
				10153001 -> 
				10153002 -> -> 2
				10153003 -> -> 2
				10153004 ->
			*/
			1: true,
			2: true,
			30: true,
			31: true
		},
		7: { // Roundhouse Kick
			"*": {
				length: 866,
				distance: 105,
				noInterrupt: [7],
				chains: {
					1: 30,
					2: 30,
					"3-1": 30,
					4: 30,
					5: 30,
					6: 30,
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
			0: true,
			30: true
		},
		8: { // Piledriver
			"*": {
				length: 1960,
				distance: 164.94,
				race: { 0: { distance: 162 } },
				abnormals: { 31120: { chain: 31 } },
				chains: {
					1: 30,
					2: 30,
					"3-1": 30,
					4: 30,
					5: 30,
					6: 30,
					7: 30,
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
			1: true,
			2: true,
			30: true,
			31: true
		},
		9: { // Jackhammer
			"*": {
				fixedSpeed: 1,
				length: 1543,
				distance: 40,
				noInterrupt: [9],
				abnormals: { 31120: { chain: 31 } },
				chains: {
					1: 30,
					2: 30,
					"3-1": 30,
					4: 30,
					5: 30,
					6: 30,
					7: 30,
					8: 30,
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
				},
			},
			1: true,
			2: true,
			30: true,
			31: true
		},
		10: { // Counterpunch
			"*": {
				CC: "extended",
				noInterrupt: [10],
				length: 1855,
				distance: 155,
				enableOnAbnormal: 10153000,
				chains: {
					1: 30,
					2: 30,
					"3-1": 30,
					4: 30,
					5: 30,
					6: 30,
					7: 30,
					8: 30,
					9: 30,
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
			0: true,
			30: true
		},
		12: { // Retaliate
			0: {
				type: "retaliate",
				length: 1000,
				noInterrupt: [12],
				noRetry: true
			}
		},
		13: { // Provoke
			"*": {
				fixedSpeed: 1,
				length: 1292,
				noInterrupt: [13, 40]
			},
			1: true,
			2: true
		},
		14: { // Infuriate
			"*": {
				length: 1666,
				noInterrupt: [14],
				chains: {
					1: 30,
					2: 30,
					"3-1": 30,
					4: 30,
					5: 30,
					6: 30,
					7: 30,
					8: 30,
					9: 30,
					10: 30,
					13: 30,
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
			1: true,
			2: true,
			30: true
		},
		15: { // High Kick
			"*": {
				length: 1305.44,
				distance: 133.27,
				noInterrupt: [15],
				enableOnAbnormal: 10153503,
				chains: {
					1: 30,
					2: 30,
					"3-1": 30,
					4: 30,
					5: 30,
					6: 30,
					7: 30,
					8: 30,
					9: 30,
					10: 30,
					13: 30,
					14: 30,
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
			0: true,
			30: true
		},
		16: { // Flip Kick
			"*": {
				length: 2066,
				distance: 134,
				chains: {
					1: 30,
					2: 30,
					"3-1": 30,
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
			1: true,
			2: true,
			30: true
		},
		18: { // Growing Fury
			"*": {
				length: 1371.66,
				enableOnAbnormal: 10153050,
			},
			1: {
				chains: {
					1: 30,
					2: 30,
					"3-1": 30,
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
					19: 30,
					20: 30,
					21: 30,
					22: 30,
					24: 30,
					26: 30,
					40: 30
				}
			},
			2: true,
			30: true
		},
		19: { // Invigorating Rage
			"*": {
				fixedSpeed: 1,
				length: 1433,
				noInterrupt: [19],
				stamina: 1500,
				instantStamina: true,
				bodyRolls: { 351009: { stamina: -600 } }
			},
			1: true,
			2: true
		},
		21: { // Mounting Rage
			"*": {
				fixedSpeed: 1,
				length: 1275,
				disableOnAbnormal: 10153040
			},
			1: true,
			2: true
		},
		22: { // Flying Kick
			"*": {
				disableOnAbnormal: 425100,
				noInterrupt: [22]
			},
			0: {
				length: 1815,
				distance: 245.21,
				noInterrupt: [22],
				abnormals: {
					10153190: { chain: 30 },
					10153191: { chain: 30 },
					10153192: { chain: 30 },
					10153193: { chain: 30 },
					10153194: { chain: 30 },
					10153195: { chain: 30 }
				},
				chains: {
					1: 30,
					2: 30,
					"3-1": 30,
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
					24: 30,
					26: 30,
					40: 30
				}
			},
			30: {
				length: 1222,
				distance: 351.98
			}
		},
		24: { // 2.54cm Punch
			"*": {
				noInterrupt: [24],
				race: {
					0: { distance: 16.6 },
					1: { distance: 23.7 }
				},
				disableOnAbnormal: 425100,
				length: 2000,
				abnormals: {
					10153540: { speed: 0.2 },
					31120: { chain: 31 },
					10153190: { chain: 30 },
					10153191: { chain: 30 },
					10153192: { chain: 30 },
					10153193: { chain: 30 },
					10153194: { chain: 30 },
					10153195: { chain: 30 }
				},
				chains: {
					1: 30,
					2: 30,
					"3-1": 30,
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
					26: 30,
					40: 30
				}
			},
			1: true,
			2: true,
			30: { length: 950 },
			31: { length: 950 }
		},
		26: { // Ult aka Brawling Roll/Rythmic Blows
			"*": {
				length: [178.57, 412.85],
				distance: 6,
				noRetry: true,
				disableOnAbnormal: [425100, 425101],
				noInterrupt: [26]
			},
			0: {
				distance: [0, 30],
				abnormals: {
					10153190: { chain: 2 },
					10153191: { chain: 3 },
					10153192: { chain: 4 },
					10153193: { chain: 5 },
					10153194: { chain: 6 },
					10153195: { chain: 7 } // todo: check
				},
				chains: {
					1: 2,
					2: 2,
					"3-1": 2,
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
					"26-0": 2,
					"26-2": 3,
					"26-3": 4,
					"26-4": 5,
					"26-5": 6,
					40: 2
				}
			},
			1: { distance: [0, 30] },
			2: {
				length: 782,
				abnormals: {
					10153190: { chain: 2 },
					10153191: { chain: 3 },
					10153192: { chain: 4 },
					10153193: { chain: 5 },
					10153194: { chain: 6 },
					10153195: { chain: 7 } // todo: check
				},
			},
			3: { length: 782 },
			4: { length: 716 },
			5: { length: 916 },
			6: {
				length: 2780,
				distance: 24
			},
			7: {
				length: 2780,
				distance: 24
			}
		},
		40: { // Quick Dash
			"*": {
				CC: ["evasive", "extended"],
				fixedSpeed: 1,
				length: 588.2,
				distance: 144,
				forceClip: true,
				hasChains: true,
				noRetry: true
			},
			0: true,
			/*
			{
				triggerAbnormal: { 10153150: 8000 },
				abnormals: { 10153150: { chain: 30 } },
				noInterrupt: [40]
			},
			*/
			1: true,
			30: true, //{ consumeAbnormal: 10153150 },
			31: true
		},
		910: { // Apex Urgency
			0: { length: 500 }
		}
	},
    11: { // Ninja
        /*
		'*': {
			consumeAbnormal: [10154000, 10154001, 10154002, 10154003, 10154004, 10154005, 10154006]
		},
		1: { // Combo Attack
			"*": {
				fixedSpeed: 1,
				length: 650,
				distance: 44.86,
				triggerAbnormal: {
					10154000: 1650
				},
				noRetry: true
			},
			0: {
				abnormals: {
					10154000: { chain: 1 },
					10154001: { chain: 2 },
					10154002: { chain: 3 },
					10154003: { chain: 4 },
					10154004: { chain: 5 },
					10154005: { chain: 6 }
				},
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
			1: {
				length: 1138,
				distance: 52.47,
				consumeAbnormal: 10154000,
				triggerAbnormal: { 10154001: 1500 }
			},
			2: {
				length: 1212,
				distance: 69.96,
				consumeAbnormal: 10154001,
				triggerAbnormal: { 10154002: 1400 }
			},
			3: {
				length: 1243,
				distance: 38.01,
				consumeAbnormal: 10154002,
				triggerAbnormal: { 10154003: 1400 }
			},
			4: {
				length: 1710,
				distance: 54.69,
				consumeAbnormal: 10154003,
				triggerAbnormal: { 10154004: 1400 }
			},
			5: {
				length: 1510,
				distance: 37.80,
				consumeAbnormal: 10154004,
				triggerAbnormal: { 10154005: 1600 }
			},
			6: {
				length: 1152,
				distance: 82.62,
				consumeAbnormal: 10154005,
				triggerAbnormal: { 10154006: 100 }
			},
			30: {
				abnormals: {
					10154000: { chain: 1 },
					10154001: { chain: 2 },
					10154002: { chain: 3 },
					10154003: { chain: 4 },
					10154004: { chain: 5 },
					10154005: { chain: 6 }
				}
			},
			40: {
				abnormals: {
					10154000: { chain: 41 },
					10154001: { chain: 42 },
					10154002: { chain: 43 },
					10154003: { chain: 44 },
					10154004: { chain: 45 },
					10154005: { chain: 46 }
				},
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
			41: {
				length: 1138,
				distance: 52.47,
				consumeAbnormal: 10154000,
				triggerAbnormal: { 10154001: 1500 }
			},
			42: {
				length: 1212,
				distance: 69.96,
				consumeAbnormal: 10154001,
				triggerAbnormal: { 10154002: 1400 }
			},
			43: {
				length: 1243,
				distance: 38.01,
				consumeAbnormal: 10154002,
				triggerAbnormal: { 10154003: 1400 }
			},
			44: {
				length: 1710,
				distance: 54.69,
				consumeAbnormal: 10154003,
				triggerAbnormal: { 10154004: 1400 }
			},
			45: {
				length: 1510,
				distance: 37.80,
				consumeAbnormal: 10154004,
				triggerAbnormal: { 10154005: 1600 }
			},
			46: {
				length: 1152,
				distance: 82.62,
				consumeAbnormal: 10154005,
				triggerAbnormal: { 10154006: 100 }
			},
			70: {
				abnormals: {
					10154000: { chain: 41 },
					10154001: { chain: 42 },
					10154002: { chain: 43 },
					10154003: { chain: 44 },
					10154004: { chain: 45 },
					10154005: { chain: 46 }
				}
			}
		},
		*/
		2: { // Shadow Jump
			"*": {
				CC: ["evasive", "extended"],
				fixedSpeed: 1,
				length: 650.3,
				distance: 175,
				forceClip: true,
				abnormals: { 10154010: { chain: 30 } }
			},
			0: true,
			30: true
		},
		3: { // Leaves on the Wind
			"*": {
				length: 1272.72,
				noInterrupt: [3],
				chains: {
					1: null,
					2: 30,
					4: null,
					5: null,
					6: null,
					7: null,
					8: null,
					9: null,
					10: null,
					12: null,
					13: null,
					14: null,
					15: null,
					16: null,
					18: null,
					19: null,
					20: null
				}
			},
			0: true,
			30: true
		},
		4: { // Jagged Path
			"*": { length: 665 },
			1: {
				CC: ["evasive", "extended"],
				type: "dash",
				fixedSpeed: 1,
				distance: 469
			},
			2: {
				CC: ["evasive", "extended"],
				type: "dash",
				fixedSpeed: 1,
				distance: 469
			},
			10: { length: 1501.25 },
			11: {
				length: 300,
				distance: 150
			}
		},
		5: { // Impact Bomb
			"*": {
				CC: ["evasive", "extended"],
				length: 1022,
				distance: -291.6,
				noInterrupt: [5],
				chains: {
					1: null,
					2: null,
					3: null,
					4: null,
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
				},
				forceClip: true,
				noRetry: true
			},
			0: true,
			30: true
		},
		6: { // One Thousand Cuts
			"*": {
				CC: ["evasive", "extended"],
				length: 430,
				chains: {
					1: 30,
					5: 30,
					4: 30,
					7: 30,
					8: 30,
					9: 30,
					12: 30,
					13: 30,
					14: 30,
					15: 30,
					16: 30,
					18: 30,
					19: 30,
					20: 30
				},
			},
			0: true,
			1: {
				type: "dash",
				fixedSpeed: 1,
				length: 300,
				distance: 246
			},
			10: { length: 3516 },
			30: true
		},
		7: { // Decoy Jutsu
			0: {
				CC: ["evasive", "extended"],
				length: 1550,
				onlyTarget: true,
				noInterrupt: [7]
			}
		},
		8: { // Fire Avalanche
			"*": {
				triggerAbnormal: { 10154080: 10000 },
				stamina: 333,
				length: [700, 1366, 333],
				distance: [0, 367.31, 0],
				abnormals: { // todo: check times, look ou for conflicts
					32033: { speed: 0.2 },
					32058: { speed: 0.3 },
					10154080: { chain: 1 },
					10154081: { chain: 2 }
				},
				chains: {
					1: 30,
					3: 30,
					4: 30,
					5: 30,
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
				},
				noRetry: true
			},
			0: true,
			1: {
				triggerAbnormal: { 10154081: 5000 },
				consumeAbnormal: 10154080,
				length: [1366, 333],
				distance: [411.39, 0]
			},
			2: {
				triggerAbnormal: { 10154082: 1 },
				consumeAbnormal: 10154081,
				length: [1366, 333],
				distance: [455.47, 0]
			},
			30: true
		},
		9: { // Smoke Bomb
			"*": {
				CC: "evasive",
				length: 722,
				chains: {
					1: null,
					2: null,
					4: null,
					5: null,
					6: null,
					7: null,
					8: null,
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
				},
			},
			0: true,
			30: true
		},
		10: { // Retaliate
			0: {
				noInterrupt: [10],
				type: "retaliate",
				length: 1633,
				noRetry: true
			}
		},
		11: { // Focus
			"*": {
				length: 1431,
				noInterrupt: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 12, 13, 14, 15, 16, 17, 18, 19, 20]
			},
			0: true,
			50: true
		},
		12: { // Skyfall
			"*": {
				length: 1320.6,
				distance: 154.72,
				noInterrupt: [12],
				chains: {
					1: 30,
					2: 30,
					4: 30,
					5: 30,
					6: 30,
					7: 30,
					8: 30,
					9: 30,
					13: 30,
					14: 30,
					15: 30,
					16: 30,
					19: 30,
					18: 30,
					20: 30
				}
			},
			1: true,
			2: true,
			30: true
		},
		13: { // Circle of Steel
			"*": {
				length: 3210,
				distance: 245.06,
				noInterrupt: [13],
				chains: {
					1: 30,
					2: 30,
					4: 30,
					5: 30,
					6: 30,
					7: 30,
					8: 30,
					9: 30,
					12: 30,
					14: 30,
					15: 30,
					16: 30,
					18: 30,
					19: 30,
					20: 30
				}
			},
			1: true,
			2: true,
			30: true
		},
		14: { // Double Cut
			"*": {
				length: 1429.5,
				distance: 162.33,
				noInterrupt: [14],
				chains: {
					1: 30,
					2: 30,
					4: 30,
					5: 30,
					6: 30,
					7: 30,
					8: 30,
					9: 30,
					12: 30,
					13: 30,
					15: 30,
					16: 30,
					18: 30,
					19: 30,
					20: 30
				}
			},
			1: true,
			2: true,
			30: true
		},
		15: { // Burning Heart
			"*": {
				length: 400,
				stamina: 100,
				instantStamina: true,
				abnormals: {
					32033: { speed: 0.2 },
					32058: { speed: 0.3 }
				}
			},
			0: { length: 900 },
			1: true,
			2: true,
			3: true,
			4: true,
			5: true,
			6: true,
			7: true,
			8: true,
			9: true
		},
		16: { // Death Blossom
			"*": {
				fixedSpeed: 1,
				length: 1532.3,
				noInterrupt: [16],
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
					12: null,
					13: null,
					14: null,
					15: null,
					18: null,
					19: null,
					20: null
				}
			},
			0: true,
			30: true
		},
		17: { // Attunement
			"*": {
				length: 995,
				chains: {
					1: 30,
					2: 30,
					4: 30,
					5: 30,
					6: 30,
					7: 30,
					8: 30,
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
			0: true,
			30: true
		},
		18: { // Bladestorm
			"*": {
				length: 1016.5,
				distance: 68.535,
				noInterrupt: [18],
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
					12: null,
					13: null,
					14: null,
					15: null,
					16: null,
					19: null,
					20: null
				}
			},
			0: true,
			30: true
		},
		19: { // Chakra Thrust
			"*": {
				length: [232, 833],
				distance: [-26.25, 127.5],
				noInterrupt: [19],
				chains: {
					1: 30,
					3: 30,
					4: 30,
					5: 30,
					6: 30,
					7: 30,
					8: 30,
					9: 30,
					12: 30,
					13: 30,
					14: 30,
					15: 30,
					16: 30,
					18: 30,
					20: 30
				}
			},
			0: true,
			30: true
		},
		20: { // Clone Jutsu
			0: {
				fixedSpeed: 1,
				length: 1257.1
			}
		},
		910: { // Apex Urgency
			0: { length: 500 }
		}
	},
	12: { // Valkyrie
		/*
		1: { // Slash
			"*": {
				length: 1107.45,
				distance: 47.13,
				noInterrupt: ["1-3"],
				chains: {
					"1-0": 1,
					"1-1": 2,
					"1-2": 3,
					"1-30": 1,
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
					17: 30,
					18: 30,
					19: 30,
					20: 30,
					21: 30
				},
				noRetry: true
			},
			0: true,
			1: {
				length: 1200.35,
				distance: 43.37
			},
			2: {
				length: 1454.3,
				distance: 58.54
			},
			3: {
				length: 1927.58,
				distance: 90.1
			},
			30: true
		},
		*/
		2: { // Overhead Slash
			"*": {
				length: 1917.8,
				distance: 102.47,
				chains: {
					1: 30,
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
					17: 30,
					18: 30,
					19: 30,
					20: 30,
					21: 30
				}
			},
			0: true,
			30: true
		},
		3: { // Glaive Strike
			"*": {
				length: 2457,
				distance: 105.62,
				enableOnAbnormal: 10155112,
				chains: {
					1: 30,
					2: 30,
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
					17: 30,
					18: 30,
					19: 30,
					20: 30,
					21: 30
				}
			},
			0: true,
			30: true
		},
		4: { // Charge
			"*": { noInterrupt: [1, 2 , 5, 6, 7, 8, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21] },
			0: {
				type: "dash",
				fixedSpeed: 1,
				length: 550,
				distance: 436,
				//noInterrupt: ["4-0", "4-10", "4-11"],
				noRetry: true
			},
			10: { length: 900 },
			11: {
				length: 400,
				distance: 50
			}
		},
		5: { // Maelstrom
			"*": {
				length: 3145.43,
				distance: 125.11,
				chains: {
					1: 30,
					2: 30,
					3: 30,
					4: 30,
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
					17: 30,
					18: 30,
					19: 30,
					20: 30,
					21: 30
				}
			},
			0: true,
			30: true
		},
		6: { // Leaping Strike
			"*": {
				length: 1772.8,
				distance: 105,
				chains: {
					1: 30,
					2: 30,
					3: 30,
					"4-10": 30,
					"4-11": 30,
					5: 30,
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
					20: 30,
					21: 30
				}
			},
			0: true,
			30: true
		},
		7: { // Spinning Death
			"*": {
				length: 1786.14,
				distance: 139.72,
				noInterrupt: ["7-2"],
				abnormalChains: {
					10155071: 2,
					10155070: 1
				},
				chains: {
					1: 30,
					2: 30,
					3: 30,
					4: 30,
					5: 30,
					6: 30,
					8: 30,
					9: 30,
					10: 30,
					11: 30,
					12: 30,
					13: 30,
					14: 30,
					15: 30,
					16: 30,
					17: 30,
					18: 30,
					19: 30,
					20: 30,
					21: 30
				},
				noRetry: true
			},
			0: true,
			1: true,
			2: {
				length: 2293,
				distance: 197.82
			},
			30: true
		},
		8: { // Titansbane
			"*": {
				fixedSpeed: 1,
				length: 7702,
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
					17: 30,
					18: 30,
					19: 30,
					20: 30,
					21: 30
				}
			},
			0: true,
			1: {
				fixedSpeed: false,
				length: 2017.6
			},
			30: true
		},
		9: { // Ground Bash
			"*": {
				length: 1459.62,
				distance: 136,
				enableOnAbnormal: 10155112,
				chains: {
					1: 30,
					2: 30,
					3: 30,
					4: 30,
					5: 30,
					6: 30,
					7: 30,
					8: 30,
					10: 30,
					11: 30,
					12: 30,
					13: 30,
					14: 30,
					15: 30,
					16: 30,
					17: 30,
					18: 30,
					19: 30,
					20: 30,
					21: 30
				}
			},
			0: true,
			30: true
		},
		10: { // Dream Slash // need to check chains
			'*': {
				length: 1772.52,
				distance: 11.78,
				noInterrupt: [10],
				glyphs: {
					33020: {
						speed: 0.2
					}
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
					11: null,
					12: null,
					13: null,
					14: null,
					15: null,
					16: null,
					//17: 30, // Not correct since still triggers substage 4 on them.
					18: null,
					19: null,
					20: null,
					//21: 30 //  But for now it works /shrug
				}
			},
			0: true,
			30: true // if we add a chain to a skill that we want to trigger substage 4 on, it will break, ghosting if there's no fast enough server response.
		},
		11: { // Shining Crescent
			"*": { length: 2742 },
			0: {
				distance: 227.49,
				noInterrupt: [11],
				chains: {
					1: 30,
					2: 30,
					3: 30,
					"4-10": 30,
					"4-11": 30,
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
					17: 30,
					18: 30,
					19: 30,
					20: 30,
					21: 30
				}
			},
			1: {
				length: 2522.5,
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
					17: 31,
					18: 31,
					19: 31,
					20: 31,
					21: 31
				}
			},
			30: { distance: 227.49 },
			31: { length: 2522.5 }
		},
		12: { // Ragnarok
			"*": {
				length: 2821.54,
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
					13: 30,
					14: 30,
					15: 30,
					16: 30,
					17: 30,
					18: 30,
					19: 30,
					20: 30,
					21: 30
				}
			},
			0: true,
			30: true
		},
		13: { // Bloodflower
			"*": {
				length: 1666.67,
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
					14: 30,
					15: 30,
					16: 30,
					17: 30,
					18: 30,
					19: 30,
					20: 30,
					21: 30
				}
			},
			0: true,
			30: true
		},
		14: { // Evasion
			"*": {
				CC: ["evasive", "extended"],
				fixedSpeed: 1,
				length: 833.33,
				distance: 188.18,
				forceClip: true,
			},
			0: { triggerAbnormal: { 10155020: 4000 } },
			1: {
				consumeAbnormal: 10155020,
				enableOnAbnormal: 10155020
			}
		},
		15: { // Windslash
			"*": {
				length: 1111.11,
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
					16: 30,
					17: 30,
					18: 30,
					19: 30,
					20: 30,
					21: 30
				}
			},
			0: true,
			30: true
		},
		16: { // Runeburst
			"*": {
				fixedSpeed: 1,
				length: 1327.8,
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
					17: 30,
					18: 30,
					19: 30,
					20: 30,
					21: 30
				}
			},
			0: true,
			30: true
		},
		17: { // Balder's Tears
			0: {
				disableOnAbnormal: 425103,
				fixedSpeed: 1,
				length: 1079.23
			}
		},
		18: { // Retaliate
			0: {
				type: "retaliate",
				length: 1633,
				noInterrupt: [18],
				noRetry: true
			}
		},
		19: { // Reclamation
			"*": {
				length: 1531,
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
					17: 30,
					18: 30,
					19: 30,
					20: 30,
					21: 30
				}
			},
			0: true,
			30: true
		},
		20: { // Backstab
			0: {
				CC: ["evasive", "extended"],
				length: 1490,
				onlyTarget: true
			}
		},
		21: { // Dark Herald
			0: {
				fixedSpeed: 1,
				length: 922,
				enableOnAbnormal: 10155201
			}
		},
		910: { // Apex Urgency
			0: { length: 500 }
		}
	}
};
