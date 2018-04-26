/*	Notes:
	* '*' can be used in place of the skill or sub-skill to set default values.
	* Processing order is 'noInterrupt' > 'chains' > 'abnormals'.
	* Abnormal chains aren't needed if the client is already sending the correct skillId!
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

module.exports = {
	0: { // Warrior
		'*': { consumeAbnormal: 104110 },
		1: { // Combo Attack
			'*': {
				noInterrupt: [1, 32],
				noRetry: true,
				abnormals: { 101750: { speed: 0.20 } }
			},
			0: {
				length: 566.4,
				distance: 64.29,
				race: {
					2: { distance: 47.53 }, // M.Helf
					5: { distance: 45 }, // F.Aman
					8: { distance: 54.32 }, // Popori
					9: { distance: 64.29 } // Elin
				}
			},
			1: {
				length: 657.3,
				distance: 51.69,
				race: {
					2: { distance: 42.12 }, // M.Helf
					5: { distance: 39 }, // F.Aman
					8: { distance: 21.17 }, // Popori
					9: { distance: 51.69 } // Elin
				}
			},
			2: {
				length: 657.3,
				distance: 28.08,
				race: {
					2: { distance: 28.08 }, // M.Helf
					5: { distance: 26 }, // F.Aman
					8: { distance: 56.2 }, // Popori
					9: { distance: 28.08 } // Elin
				}
			},
			3: {
				length: 900,
				distance: 73.34,
				race: {
					2: { distance: 79.9 }, // M.Helf
					5: { distance: 85 }, // F.Aman
					8: { distance: 63.53 }, // Popori
					9: { distance: 73.34 } // Elin
				}
			}
		},
		2: { // Evasive Roll
			0: {
				CC: ["evasive", "extended"],
				length: 839,
				distance: 150,
				forceClip: true,
				stamina: 500,
				instantStamina: true,
				noRetry: true,
				noInterrupt: [2, 10, 32],
				glyphs: {
					21015: { stamina: -100 },
					21067: { stamina: -100 },
					21101: { stamina: -120 }
				},
				race: {
					7: { length: 837 }, // F. Casta
					8: { length: 1081 }, // Popori
					10: { length: 778.2 } // Baraka
				}
			}
		},
		3: { // Torrent of Blows
			0: {
				length: 1600,
				distance: 75,
				noInterrupt: [32],
				race: {
					2: { distance: 75 }, // M.Helf
					8: { distance: 75 }, // Popori
					9: { distance: 68.26 } // Elin: 68.259
				}
			}
		},
		4: { // Rain of Blows
			'*': {
				distance: 151.87,
				race: {
					2: { distance: 152.73 }, // M.Helf
					5: { distance: 150.71 }, // F.Aman
					8: { distance: 148.9 }, // Popori
					9: { distance: 151.87 } // Elin
				}
			},
			0: {
				length: 2545.45,
				noInterrupt: [1, 2, 3, 4, 5, 8, 9, 10, 11, 12, 13, 16, 17, 19, 22, 23, 28, 29, 32, 34, 35, 36, 37, 39, 41, 42], // todo
				abnormals: {
					100801: { skill: 360100 },
					104110: { chain: 30 }
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
				abnormals: { 100801: { skill: 360130 } }
			}
		},
		5: { // Battle Cry
			0: {
				length: 1666,
				noInterrupt: [32],
				glyphs: { 21109: { speed: 0.5 } }
			}
		},
		8: { // Assault Stance
			'*': {
				length: 566.4,
				toggleOnAbnormality: 102500, 
				noInterrupt: [32]
			},
			0: { stamina: 1000 },
			50: true
		},
		9: { // Defensive Stance
			'*': {
				length: 566.4,
				toggleOnAbnormality: 102500, 
				noInterrupt: [32]
			},
			0: { stamina: 1000 },
			50: true
		},
		10: { // Death From Above
			0: {
				length: 2066,
				noInterrupt: [2, 10, 32],
				race: {
					1: { length: 2100 }, // F.Human
					3: { length: 2033 }, // F.Helf
					6: { length: 2033 }, // M.Casta
					9: { length: 2033 } // Elin
				}
			}
		},
		11: { // Poison Blade
			0: {
				length: 933,
				distance: 35,
				noInterrupt: [32],
				race: {
					0: { length: 833 }, // M.Human
					1: { length: 833 }, // F.Human
					2: { // M.Helf
						length: 833,
						distance: 0
					},
					4: { length: 833 }, // M.Aman
					5: { // F.Aman
						length: 833,
						distance: 40
					},
					8: { // Popori
						length: 833,
						distance: 35
					},
					9: { distance: 54.85 }, // Elin
				}
			}
		},
		12: { // Leaping Strike
			0: {
				CC: "extended",
				length: 1533,
				distance: 250,
				noInterrupt: [32],
				glyphs: {
					21048: { speed: 0.2 },
					21082: { speed: 0.2 }
				},
				race: {
					7: { length: 1714 }, // F.Castanic
					8: { length: 1714 }, // Popori
				}
			}
		},
		/*13: { // Retaliate
			0: {
				type: 'retaliate',
				length: 1630,
				noInterrupt: [32],
				noRetry: true
			}
		},*/
		16: { // Charging Slash
			0: {
				CC: ["evasive", "extended"],
				type: 'dash',
				fixedSpeed: 1,
				length: 1117,
				distance: 467.88,
				noRetry: true,
				noInterrupt: [16, 32]
			},
			1: { length: 800 }
		},
		17: { // Vortex Slash
			'*': {
				length: 1633,
				noInterrupt: [32],
				glyphs: { 21040: { speed: 0.3 } }
			},
			1: true,
			2: { requiredBuff: 100201 }
		},
		18: { // Combative Strike
			'*': {
				length: 1100,
				distance: 120.28,
				noInterrupt: [32],
				race: {
					//2: { distance: 120.28 }, // M.Helf
					//5: { distance: 120.28 }, // F.Aman
					8: { distance: 128.89 }, // Popori
					9: { distance: 138.28 } // Elin
				}
			},
			0: true,
			1: true,
			2: { requiredBuff: 100201 }
		},
		19: { // Rising Fury
			'*': { noInterrupt: [32] },
			0: {
				length: 733,
				distance: 144.85,
				race: {
					2: { distance: 144.85 }, // M.Helf
					5: { distance: 143.27 }, // F.Aman
					8: { distance: 161.74 }, // Popori
					9: { distance: 170.67 } // Elin
				}
			},
			1: {
				length: 1400,
				distance: 100.15,
				race: {
					2: { distance: 100.11 }, // M.Helf
					5: { distance: 101.69 }, // F.Aman
					8: { distance: 116.63 }, // Popori
					9: { distance: 122.34 } // Elin
				}
			}
		},
		20: { // Deadly Gamble
			0: {
				fixedSpeed: 1,
				length: 320,
				noInterrupt: [32]
			}
		},
		21: { // Cascade of Stuns
			0: { // Same animation as 2nd cast of Rising fury
				length: 1400,
				distance: 116.63,
				noInterrupt: [32],
				race: {
					2: { distance: 100.11 }, // M.Helf
					8: { distance: 116.63 }, // Popori
					9: { distance: 122.34 } // Elin
				}
			}
		},
		23: { // Spinning Counter
			0: {
				length: 1091,
				distance: 65.35,
				toggleOnAbnormality: [100200, 100201], 
				requiredBuff: 100700,
				race: {
					2: { distance: 68.81 }, // M.Helf
					8: { distance: 65.34 }, // Popori
					9: { distance: 77.36 } // Elin
				}
			}
		},
		24: { // Smoke Aggressor
			0: {
				fixedSpeed: 1,
				length: 500,
				noInterrupt: [32]
			}
		},
		25: { // Command: Attack
			0: { // 1060100 <- shadow-chan templateId
				fixedSpeed: 1,
				length: 700,
				requiredBuff: 102600,
				noInterrupt: [32]
			}
		},
		26: { // Command: Follow
			0: {
				fixedSpeed: 1,
				length: 700,
				requiredBuff: 102600,
				noInterrupt: [32]
			}
		},
		28: { // Traverse Cut
			0: {
				length: 2000,
				distance: 160,
				noInterrupt: [1, 2, 3, 4, 8, 9, 10, 13, 16, 17, 19, 21, 22, 28, 29, 32, 34, 36, 37, 39, 41, 42],
				abnormals: { 104110: { chain: 30 } },
				chains: {
					11: 30,
					12: 30,
					18: 30,
					27: 30,
					40: 30
				},
				level: { 9: { abnormals: { 100201: { skill: 390100 } } } }
			},
			30: {
				length: 2666.66,
				distance: 210,
				level: {
					9: { abnormals: { 100201: { skill: 390130 } } }
				}
			}
		},
		29: { // Blade Draw
			0: {
				length: 3000,
				distance: 94.5,
				noInterrupt: [1, 2, 3, 4, 5, 8, 9, 10, 11, 12, 13, '16-0', 18, '19-0', 21, 22, 23, 27, 29, 34, 35, 36, 37, 41, 42], // todo
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
					32: 30,
					39: 30,
					40: 30
				}
			},
			30: {
				length: 1333.33,
				distance: 135,
				abnormals: { 100801: { skill: 370130 } }
			}
		},
		30: { // Scythe
			'*': { distance: 150 },
			0: {
				length: 1833,
				noInterrupt: [1, 3, 5, 8, 9, 10, 13, 16, 17, 18, 19, 21, 22, 23, 27, 28, 30, 32, 34, 35, 38, 39, 41, 42], // todo
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
					37: 30,
					40: 30
				}
			},
			30: {
				length: 1387,
				abnormals: { 100801: { skill: 380130 } }
			}
		},
		31: { // Reaping Slash
			'*': { distance: 110 },
			0: {
				length: 2292,
				noInterrupt: [1, 2, 3, 5, 8, 9, 10, 11, 12, 13, 16, 17, 19, 21, 22, 23, 27, 28, 29, 32, 33, 34, 35, 37, 39, 41, 42], // todo
				abnormals: { 104110: { chain: 30 } },
				chains: {
					4: 30,
					18: 30,
					36: 30,
					40: 30
				}
			},
			30: { length: 1667 }
		},
		32: { // Cross Parry
			0: {
				CC: "extended",
				type: 'holdInfinite',
				fixedSpeed: 1,
				consumeAbnormal: [102010, 104110], // This should exist for all skills but this is the only real case where it's needed in practice
				requiredBuff: [100200, 100201],
				stamina: 50
			}
		},
		34: { // Binding Sword
			0: {
				length: 1902,
				noInterrupt: [1, 2, 3, 4, 5, 10, 11, 12, 13, 16, 17, 18, 19, 20, 21, 22, 23, 27, 28, 29, 32, 33, 34, 35, 36, 37, 39, 40, 41, 42] // welp
			}
		},
		35: { // Infuriate
			0: {
				length: 2425,
				noInterrupt: [32],
				requiredBuff: [100200, 100201]
			}
		},
		36: { // Rain of Blows (Deadly Gamble)
			'*': {
				distance: 151.87,
				race: {
					2: { distance: 152.73 }, // M.Helf
					5: { distance: 150.71 }, // F.Aman
					8: { distance: 148.9 }, // Popori
					9: { distance: 151.87 } // Elin
				}
			},
			0: {
				length: 2800,
				noInterrupt: [32],
				abnormals: { 104110: { chain: 30 } },
			},
			30: { length: 2000 }
		},
		37: { // Blade Draw (Deadly Gamble)
			0: {
				length: 3000,
				distance: 94.5,
				abnormals: {
					102010: { chain: 30 },
					104110: { chain: 30 }
				}
			},
			30: {
				length: 1333.33,
				distance: 135
			}
		},
		38: { // Scythe (Deadly Gamble)
			'*': { distance: 150 },
			0: {
				length: 1833,
				noInterrupt: [32],
				abnormals: { 104110: { chain: 30 } }
			},
			30: { length: 1387 }
		},
		39: { // Traverse Cut (Defensive Stance)
			0: {
				length: 2000,
				distance: 160,
				abnormals: { 104110: { chain: 30 } },
				chains: {
					11: 30,
					12: 30,
					18: 30,
					27: 30,
					40: 30
				}
			},
			30: {
				length: 2666.66,
				distance: 210
			}
		},
		40: { // Blade Waltz
			'*': {
				length: 810.6,
				distance: 156.248,
				noRetry: true,
				toggleOnAbnormality: [104101, 425100],
				triggerAbnormal: {
					//104100: 8000,
					//104101: 800,
					104110: 2000
				},
				noInterrupt: [32, 40, '41-0', '41-30']
			},
			10: {	// astance 1st?
				abnormals: { 104100: { chain: 12 } },
				chains: {
					// essential mana says all skills can chain into BW, but need to specify them
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
					13: 11, // I assume retaliate can chain into this skill
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
					'41-31': 11,
					42: 11,
				}
			},
			11: true,
			12: {
				triggerAbnormal: false,
				consumeAbnormal: 104100
			},
			20: {
				abnormals: { 104100: { chain: 22 } },
				chains: {
					// essential mana says all skills can chain into BW, but need to specify them
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
					13: 21, // I assume retaliate can chain into this skill
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
					'41-31': 21,
					42: 21,
				}
			},
			21: true,
			22: {
				triggerAbnormal: false,
				consumeAbnormal: 104100
			}
		},
		41: { // Aerial Scythe
			'*': {
				noRetry: true,
				length: 1976.15,
				distance: 219.04,
				toggleOnAbnormality: 425100,
				abnormals: { 105100: { chain: 31 } }
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
					13: 30, // I assume retaliate can chain into this skill
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
					40: 30,
					42: 30,
				}
			},
			30: {
				triggerAbnormal: { 105100: 1800 },
			},
			31: {
				consumeAbnormal: 105100,
				length: 1800,
				distance: 0
			}
		},
		42: { // Blade Frenzy
			0: {
				length: 3309.23,
				distance: 326.55,
				toggleOnAbnormality: [425100, 425101],
				noInterrupt: [1, 3, 4, 8, 9, 10, 12, 13, 16, 17, 19, 21, 22, 29, 32, 34, 36, 37, 39, 40, '41-0', '41-30', 42],
				chains: {
					2: 30,
					30: 30,
					38: 30,
					'41-31': 30
				}
			},
			30: {
				length: 2507.06,
				distance: 326.55
			}
		},
		91: { // Awakening Eyes Aura
			0: { length: 3000 }
		}
	},
	1: { // Lancer
		1: { // Combo Attack
			'*': { noInterrupt: [1, 2] },
			0: {
				length: 635,
				distance: 74.45,
				race: {
					0: { distance: 78.55 }, // M.Human
					2: { distance: 74.41 }, // M.Helf
					4: { distance: 70 }, // M.Aman
					5: { distance: 75 }, // F.Aman
					8: { distance: 72.89 }, // Popori
					9: { distance: 74.45 } // Elin
				}
			},
			1: {
				length: 1025,
				distance: 19.2,
				race: {
					0: { distance: 25 }, // M.Human
					2: { distance: 30.8 }, // M.Helf
					4: { distance: 25 }, // M.Aman
					5: { distance: 30.52 }, // F.Aman
					8: { distance: 39.05 }, // Popori
					9: { distance: 19.2 } // Elin
				}
			},
			2: {
				length: 1818.12,
				distance: 66.07,
				race: {
					0: { distance: 70 }, // M.Human
					2: { distance: 70 }, // M.Helf
					4: { distance: 60 }, // M.Aman
					5: { distance: 54.48 }, // F.Aman
					8: { distance: 41.06 }, // Popori
					9: { distance: 66.07 } // Elin
				}
			}
		},
		2: { // Stand Fast
			0: {
				CC: "extended",
				type: 'holdInfinite',
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
			'*': {
				distance: [0, 100, 100, 100, 100, 40],
				noInterrupt: [3, 4, 8, 9, 10, 11, 12, 13, 15, 21, 23, 24, 25, 26, 27, 28, 29],
				abnormals: {
					22060: { speed: 0.25 }
				},
				chains: {
					1: 30,
					5: 30,
					18: 30
				},
				race: {
					9: { distance: [0, 100, 100, 100, 100, 62.7] } // Elin
				}
			},
			0: { length: [939, 514.54, 514.54, 514.54, 393.63, 760.11] },
			30: { length: [688.66, 377.33, 377.33, 377.33, 288.66, 557.35] }
		},
		4: { // Challenging Shout
			'*': {
				length: 2215,
				glyphs: {
					22056: { speed: 0.25 },
					22085: { speed: 0.25 }
				}
			},
			0: {
				noInterrupt: [9, 12, 23, 26],
				chains: {
					1: 30,
					3: 30,
					5: 30,
					8: 30,
					13: 30,
					15: 30,
					18: 30,
					21: 30,
					25: 30
				}
			},
			30: true
		},
		5: { // Shield Bash
			'*': {
				length: 839.1,
				distance: 30,
				noInterrupt: [2],
				race: {
					/*0: { distance: 30.000 }, // M.Human
					2: { distance: 30.000 }, // M.Helf
					4: { distance: 30.000 }, // M.Aman
					5: { distance: 30.000 }, // F.Aman
					8: { distance: 30.000 }, // Popori*/
					9: { distance: 43.69 } // Elin
				}
			},
			0: true,
			1: true,
			2: { chains: { 10: 30 } },
			30: { length: 694.6 }
		},
		7: { // Guardian Shout
			0: {
				length: 566.4,
				noInterrupt: [2],
				race: {
					/*0: { length: 550 }, // M.Human
					2: { length: 550 }, // M.Helf
					4: { length: 550 }, // M.Aman
					5: { length: 550 }, // F.Aman*/
					8: { length: 800 }, // Popori
					9: { length: 575 }, // Elin
				}
			}
		},
		8: { // Shield Counter
			0: {
				length: 1455.33,
				distance: 90,
				onlyDefenceSuccess: true,
				race: {
					0: { distance: 90 }, // M.Helf
					2: { distance: 95 }, // M.Helf
					4: { distance: 85 }, // M.Aman
					5: { distance: 85 }, // F.Aman
					8: { distance: 90 }, // Popori
					9: { distance: 108.06 } // Elin
				}
			}
		},
		9: { // Leash
			0: {
				length: [733, 833],
				noInterrupt: [2]
			}
		},
		10: { // Debilitate
			'*': {
				triggerAbnormal: { 201830: 2000 },
				consumeAbnormalEnd: 201830
			},
			0: {
				length: 925,
				distance: 30,
				noInterrupt: [3, 4, 8, 9, 10, 11, 12, 13, 15, 21, 23, 24, 25, 26, 27, 28, 29],
				chains: {
					1: 30,
					18: 30
				},
				race: {
					/*0: { distance: 30 }, // M.Human
					2: { distance: 30 }, // M.Helf
					4: { distance: 30}, // M.Aman
					5: { distance: 30 }, // F.Aman
					8: { distance: 30 }, // Popori*/
					9: { distance: 43.69 } // Elin
				}
			},
			30: { length: 840 }
		},
		11: { // Retaliate
			0: {
				type: 'retaliate',
				length: 1633,
				noRetry: true,
				noInterrupt: [2],
			}
		},
		12: { // Infuriate
			0: { // 201803 ?
				length: 2425,
				noInterrupt: [2]
			}
		},
		13: { // Spring Attack
			'*': {
				distance: 85,
				triggerAbnormal: { 201831: 2000 },
				consumeAbnormalEnd: 201831
			},
			0: {
				length: 2800,
				noInterrupt: ['1-0', '1-1', 2, 3, 4, 9, 11, 12, 13, 15, 23, 24, 25, 26, 27, 28, 29],
				chains: {
					1: 30,
					5: 30,
					8: 30,
					10: 30,
					18: 30,
					21: 30
				}
			},
			30: { length: 1850 }
		},
		15: { // Charging Lunge
			0: {
				CC: "extended",
				type: 'dash',
				fixedSpeed: 1,
				length: 1115,
				distance: 474.5,
				noInterrupt: [2, 15]
			},
			1: {
				length: 935,
				noInterrupt: [2]
			}
		},
		16: { // Second Wind
			0: {
				withoutWeapon: true,
				fixedSpeed: 1,
				length: 700,
				noInterrupt: [2]
			}
		},
		17: { // Adrenaline Rush
			0: {
				fixedSpeed: 1,
				length: 700,
				noInterrupt: [2]
			}
		},
		18: { // Shield Barrage
			'*': {
				triggerAbnormal: { 201831: 2000 },
				consumeAbnormalEnd: 201831,
				noInterrupt: [2]
			},
			0: {
				length: 625,
				distance: 95, // M.Aman
				abnormals: {
					201550: { speed: 0.2 }
				},
				race: {
					0: { distance: 100.13 }, // M.Human
					2: { // M.Helf
						length: 525,
						distance: 102.7
					},
					5: { distance: 100.13 }, // F.Aman
					8: { distance: 92.39 }, // Popori
					9: { distance: 122.66 } // Elin
				}
			},
			1: {
				length: 800,
				distance: 87, // M.Aman
				race: {
					0: { distance: 74.84 }, // M.Human
					2: { distance: 80.43 }, // M.Helf
					5: { distance: 74.84 }, // F.Aman
					8: { distance: 89.46 }, // Popori
					9: { distance: 66.04 } // Elin
				}
			}
		},
		19: { // Pledge of Protection
			0: {
				fixedSpeed: 1,
				length: 1000,
				noInterrupt: [2]
			}
		},
		21: { // Lockdown Blow
			'*': {
				length: 1400,
				distance: 100.13, // M.Human
				noInterrupt: [2],
				race: {
					0: { distance: 100.13 }, // M.Human
					2: { // M.Helf
						length: 1175,
						distance: 102.7
					},
					4: { distance: 95 }, // M.Aman
					5: { distance: 100.13 }, // F.Aman
					8: { distance: 92.39 }, // Popori
					9: { distance: 122.66 } // Elin
				}
			},
			1: true,
			2: { chains: { 10: 30, 13: 30, 18: 30 } },
			30: {
				length: 1272.72,
				race: {
					2: { length: 1068 } // ?
				}
			}
		},
		22: { // Iron Will
			0: {
				fixedSpeed: 1,
				length: 800,
				noInterrupt: [2]
			}
		},
		23: { // Master's Leash
			0: {
				length: [725, 850],
				requiredBuff: 201000,
				noInterrupt: [2]
			}
		},
		24: { // Chained Leash
			'*': {
				consumeAbnormal: 201803,
				noInterrupt: [2]
			},
			1: { length: [733, 833] },
			2: { length: 1692.42 }
		},
		25: { // Wallop
			'*': {
				CC: "extended",
			},
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
				},
			}
		},
		27: { // Rallying Cry
			0: {
				length: 640.4,
				noInterrupt: [2],
				race: {
					/*0: { length: 625 }, // M.Human
					2: { length: 625 }, // M.Helf
					4: { length: 625 }, // M.Aman
					5: { length: 625 }, // F.Aman*/
					8: { length: 950 }, // Popori
					9: { length: 650 }, // Elin
				}
			}
		},
		28: { // Righteous Leap
			'*': {
				noRetry: true,
				distance: [29.48, 445.52, 0]
			},
			0: {
				toggleOnAbnormality: 425100,
				noInterrupt: [1, 3, 4, 5, 8, 9, 10, 12, 13, 18, 21, 23, 24, 26, 28, 29],
				length: [333.33, 1055, 3121.66],
				chains: {
					15: 1,
					25: 1
				}
			},
			1: { length: [250, 791.25, 833.75] }
		},
		29: { // Guardian's Barrier
			0: {
				type: 'holdInfinite',
				fixedSpeed: 1,
				length: 700,
				endType51: true,
				toggleOnAbnormality: 425100
			}
		},
		30: { // Divine Protection
			0: {
				length: 1252,
				toggleOnAbnormality: [425100, 425101]
			}
		},
		91: { // Awakening Eyes Aura
			0: { length: 3000 }
		}
	},
	2: { // Slayer
		1: { // Combo Attack
			'*': { noInterrupt: [1] },
			0: {
				length: 750,
				distance: 36.68,
				race: {
					0: { distance: 36.68 }, // M.Human
					2: { distance: 50.68 }, // M.Helf
					4: { distance: 40 }, // M.Aman
					5: { distance: 36.68 }, // F.Aman
					6: { distance: 36.68 }, // M.Casta
					7: { distance: 60 }, // F.Casta
					8: { distance: 31.53 }, // Popori
					9: { distance: 36.68 }, // Elin
					10: { distance: 25.08 } // Baraka
				}
			},
			1: {
				length: 1030,
				distance: 35.68,
				race: {
					0: { distance: 35.68 }, // M.Human
					2: { distance: 30.68 }, // M.Helf
					4: { distance: 35 }, // M.Aman
					5: { distance: 35.68 }, // F.Aman
					6: { distance: 35.68 }, // M.Casta
					7: { distance: 17 }, // F.Casta
					8: { distance: 49.4 }, // Popori
					9: { distance: 35.68 }, // Elin
					10: { distance: 32.95 } // Baraka
				}
			},
			2: {
				length: 750,
				distance: 28.05,
				race: {
					0: { distance: 28.05 }, // M.Human
					2: { distance: 33.05 }, // M.Helf
					4: { distance: 20 }, // M.Aman
					5: { distance: 28.05 }, // F.Aman
					6: { distance: 22.3 }, // M.Casta
					7: { distance: 23 }, // F.Casta
					8: { distance: 19.33 }, // Popori
					9: { distance: 28.05 }, // Elin
					10: { distance: 22.5 } // Baraka
				}
			},
			3: {
				length: 1650,
				distance: 46.76,
				race: {
					0: { distance: 46.76 }, // M.Human
					2: { distance: 46.76 }, // M.Helf
					4: { distance: 40 }, // M.Aman
					5: { distance: 64.36 }, // F.Aman
					6: { distance: 118.2 }, // M.Casta
					7: { distance: 45 }, // F.Casta
					8: { distance: 19.85 }, // Popori
					9: { distance: 46.76 }, // Elin
					10: { distance: 37.5 } // Baraka
				}
			}
		},
		2: { // Knockdown Strike
			'*': {
				consumeAbnormal: 23220,
				length: 2844.16,
				distance: 220.47,
				abnormals: {
					23070: { speed: 0.25 }
				},
				race: {
					//0: { distance: 220.47 }, // M.Human
					2: { distance: 220.15 }, // M.Helf
					4: { distance: 155 }, // M.Aman
					5: { distance: 174.84 }, // F.Aman
					6: { distance: 201.64 }, // M.Casta
					7: { distance: 200 }, // F.Casta
					8: { distance: 175.81 }, // Popori
					//9: { distance: 220.47 }, // Elin
					10: { distance: 205.95 } // Baraka
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
					301150: { speed: 0.20 },
					23080: { speed: 0.25 }
				},
				race: {
					0: { // M.Human
						length: 2844.16,
						distance: 123.21
					},
					2: { distance: 116.49 }, // M.Helf
					4: { distance: 125 }, // M.Aman
					5: { distance: 137.22 }, // F.Aman
					6: { distance: 123.21 }, // M.Casta
					7: { distance: 155 }, // F.Casta
					8: { distance: 116.09 }, // Popori
					9: { distance: 128.69 }, // Elin
					10: { // Baraka
						length: 2844.16,
						distance: 91.21
					}
				}
			}
		},
		4: { // Evasive Roll
			'*': {
				CC: ["evasive", "extended"],
				length: 909.1,
				distance: 150,
				forceClip: true,
				noRetry: true,
				race: {
					8: {	// Popori
						distance: 150.32,
						length: 1181.8
					}
				}
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
			'*': {
				distance: 169.5,
				race: {
					0: { distance: 171.14 }, // M.Human
					2: { distance: 171.14 }, // M.Helf
					4: { distance: 145 }, // M.Aman
					5: { distance: 134.53 }, // F.Aman
					6: { distance: 161.14 }, // M.Casta
					7: { distance: 170 }, // F.Casta
					8: { distance: 150 }, // Popori
					9: { distance: 169.65 }, // Elin
					10: { distance: 151.14 } // Baraka
				}
			},
			0: {
				length: 3365,
				interruptAllWithAbnormal: { 301604: 8 },
				noInterrupt: ['1-0', '1-1', '1-2', 4, 6, 8, 10, '14-0', '14-1', 17, 21, 23, 25, 26, 28],
				abnormals: {
					300801: { skill: 250100 },
					300805: { skill: 250100 },
					301604: { chain: 30 }
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
				length: 1325,
				abnormals: {
					300801: { skill: 250130 },
					300805: { skill: 250130 }
				}
			}
		},
		9: { // Leaping Strike
			0: {
				CC: "extended",
				length: 2175,
				distance: 250,
			}
		},
		10: { // Retaliate
			0: {
				type: 'retaliate',
				length: 1630,
				noRetry: true
			}
		},
		12: { // Heart Thrust
			0: {
				length: 2320,
				distance: 180.96,
				abnormals: {
					23060: { speed: 0.25 },
					23061: { speed: 0.35 }
				},
				race: {
					0: { distance: 166.56 }, // M.Human
					2: { distance: 173.75 }, // M.Helf
					4: { distance: 175 }, // M.Aman
					5: { distance: 166.56 }, // F.Aman
					6: { distance: 168.61 }, // M.Casta
					7: { distance: 230 }, // F.Casta
					8: { distance: 174.05 }, // Popori
					9: { distance: 180.96 }, // Elin
					10: { distance: 136.55 } // Baraka
				}
			}
		},
		13: { // Stunning Backhand
			0: {
				length: 2125,
				distance: 76.71,
				race: {
					0: { distance: 62.07 }, // M.Human
					2: { distance: 55.79 }, // M.Helf
					4: { distance: 40 }, // M.Aman
					5: { distance: 62.07 }, // F.Aman
					6: { distance: 86.12 }, // M.Casta
					7: { distance: 80 }, // F.Casta
					8: { distance: 56.49 }, // Popori
					9: { distance: 76.71 }, // Elin
					10: { distance: 47.07 } // Baraka
				}
			}
		},
		14: { // Distant Blade
			'*': {
				length: 600,
				distance: 75,
				triggerAbnormal: { 23220: 2000 },
				consumeAbnormalEnd: 23220
			},
			0: {
				race: {
					2: { distance: 79.01 }, // M.Helf
				}
			},
			1: {
				race: {
					2: { distance: 70.99 }, // M.Helf
					5: { distance: 100.02 }, // F.Aman
					9: { distance: 100.02 } // Elin
				}
			},
			2: {
				length: 1500,
				distance: 120,
				race: {
					5: { distance: 94.98 }, // F.Aman
					6: { distance: 150 }, // M.Casta
					8: { distance: 112.42 }, // Popori
					9: { distance: 104.82 } // Elin
				}
			}
		},
		15: { // Startling Kick
			0: {
				CC: ["evasive", "extended"],
				length: 1500,
				distance: -175,
				forceClip: true,
				glyphs: { 23060: { speed: 0.25 } },
			}
		},
		16: { // Fury Strike
			0: {
				length: 1000,
				distance: 100,
				race: {
					0: { distance: 96.26 }, // M.Human
					2: { distance: 103.85 }, // M.Helf
					4: { distance: 100 }, // M.Aman
					5: { distance: 96.25 }, // F.Aman
					6: { distance: 135.85 }, // M.Casta
					7: { distance: 140 }, // F.Casta
					8: { distance: 141.74 }, // Popori
					9: { distance: 142.53 }, // Elin
					10: { distance: 100 } // Baraka
				}
			}
		},
		17: { // Headlong Rush
			0: {
				CC: ["evasive", "extended"],
				type: 'dash',
				emulateAttackSpeedBonus: 60,
				fixedSpeed: 1,
				length: 980,
				distance: 413, //not sure - seems borked
				race: {
					0: { distance: 420 },// M.Human
					4: { distance: 420 },// M.Aman
					7: { distance: 419.33 }, //F.Casta
					10: { distance: 420 } // Baraka
				},
				level: [
					{ emulateAttackSpeedBonus: 40 },
					{ emulateAttackSpeedBonus: 50 }
				],
				noInterrupt: [17],
				noRetry: true
			}
		},
		18: { // Overpower
			'*': {
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
				triggerAbnormal: { 23220: 2000 },
				fixedSpeed: 1,
				emulateAttackSpeedBonus: 8,
				length: 1200,
				level: {
					1: { emulateAttackSpeedBonus: 6 }
				}
			}
		},
		21: { // Exhausting Blow
			0: {
				length: 1175,
				distance: 75
			},
		},
		23: { // Measured Slice
			'*': {
				distance: 189,
				races: {
					5: { distance: 190 }, // F.Aman
					10: { distance: 190 } // Baraka
				}
			},
			0: {
				length: 3691.25,
				interruptAllWithAbnormal: { 301604: 23 },
				noInterrupt: [1, 2, 3, 4, 6, 9, 10, 12, 13, 14, 15, 16, 17, 21, 22, 23, 26, 28],
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
				length: 1925,
				distance: 50,
				interruptAllWithAbnormal: { 301604: 24 },
				noInterrupt: ['1-0', '1-1', '1-2', 4, 6, 10, 14, 16, 17, 21, 22, 23, 24, 26, 28],
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
				length: 1525, //
				distance: 100
			}
		},
		25: { // Ultimate Overhand Strike
			'*': {
				noRetry: true,
				distance: 169.5,
				race: {
					0: { distance: 171.14 }, // M.Human
					2: { distance: 171.14 }, // M.Helf
					4: { distance: 145 }, // M.Aman
					5: { distance: 134.53 }, // F.Aman
					6: { distance: 161.14 }, // M.Casta
					7: { distance: 170 }, // F.Casta
					8: { distance: 150 }, // Popori
					9: { distance: 169.65 }, // Elin
					10: { distance: 151.14 } // Baraka
				}
			},
			0: {
				length: 3365,
				interruptAllWithAbnormal: { 301604: 25 },
				abnormals: { 301604: { chain: 30 } }
			},
			30: { length: 1325 } //
		},
		26: { // Decimate(EU), Punishing Blow(NA)
			0: {
				length: [1078, 2166, 120],
				distance: [40.51, 122.33, 11.21],
				interruptAllWithAbnormal: { 301604: 25 },
				toggleOnAbnormality: 425100,
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
		27: { // Blazing Thrust(EU), Savage Strike(NA)
			'*': {
				noRetry: true,
				toggleOnAbnormality: 425100,
				noInterrupt: ['27-31'],
				triggerAbnormal: {
					301600: [4000, 30],
					301603: [5000, 30],
					301604: [5000, 30]
				},
				consumeAbnormalEndPending: { 301604: 1000 },
				abnormals: { 301603: { chain: 31 } },
			},
			0: {
				length: [625, 1000, 1316.25],
				distance: [0, 274.6, 1],
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
					'28-1': 30,
					'28-2': 30,
					'28-3': 30
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
				triggerAbnormalOnCondition: { 301604: [4000, 30] },
				consumeAbnormal: [301600, 301603]
			}
		},
		28: { // Unsheathe
			'*': { length: [1024.26, 0] },
			0: {
				type: 'charging',
				length: [650, 650],
				chargeLevels: [1, 2, 3],
				toggleOnAbnormality: [425100, 425101],
				noInterrupt: [28],
				abnormals: {
					301600: { chargeSpeed: 0.4 },
					301601: { chargeSpeed: 0.6 }
				}
			},
			1: {
				distance: [44.82, 0],
				noInterrupt: ['28-1'],
			},
			2: {
				distance: [44.82, 0],
				noInterrupt: ['28-2'],
			},
			3: {
				distance: [44.82, 0],
				noInterrupt: ['28-3'],
			}
		},
		91: { // Awakening Eyes Aura
			0: { length: 3000 }
		}
	},
	3: { // Berserker / There's a lot of unneeded no interrupts currently since sGrantSkill is emulated now, this applies for all charging skills interactions
		'*': { consumeAbnormal: 401404 },
		1: { // Combo Attack
			'*': {
				noInterrupt: [1, 2, 4],
				noRetry: true
			},
			0: {
				length: 1107,
				distance: 78,
				race: {
					3: { distance: 63.24 }, // F.Helf
					4: { distance: 27.715 }, // M.Aman
					5: { // F.Aman
						length: 1081.8,
						distance: 62
					},
					6: { distance: 55.69 }, // M.Casta
					8: { distance: 48.89 }, // Popori
					10: { distance: 44.22 } // Baraka
				}
			},
			1: {
				length: 925,
				distance: 21.05,
				race: {
					3: { distance: 27.38 }, // F.Helf
					4: { distance: 25 },	// M.Aman
					6: { distance: 23.27 }, // M.Casta
					8: { distance: 7.06 }, // Popori
					9: { distance: 21.05 }, // Elin
					10: { distance: 21.09 } // Baraka
				}
			},
			2: {
				length: 1120,
				distance: 31.84,
				race: {
					3: { distance: 32.47 }, // F.Helf
					4: { distance: 25 },	// M.Aman
					6: { distance: 22.83 }, // M.Casta
					8: { distance: 40.93 }, // Popori
					9: { distance: 31.84 }, // Elin
					10: { distance: 20.68 } // Baraka
				}
			},
			3: {
				length: 1825,
				distance: 54.28,
				race: {
					3: { distance: 55.25 }, // F.Helf
					4: { distance: 45 }, // M.Aman
					6: { distance: 59.47 }, // M.Casta
					8: { distance: 43.68 }, // Popori
					9: { distance: 54.29 }, // Elin
					10: { distance: 63.26 } // Baraka
				}
			}
		},
		2: { // Axe Block
			'*': {
				CC: "extended",
				type: 'holdInfinite',
			},
			0: { fixedSpeed: 1 },
			30: true,
			31: { fixedSpeed: 1 }
		},
		3: { // Thunderstrike
			'*': {
				length: 1748,
				abnormals: { 24170: { speed: 0.25 } },
				noRetry: true
			},
			0: {
				type: 'charging',
				consumeAbnormal: [400900, 401404],
				length: [650, 650, 650],
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
					{ length: 800 },	// 1300
					{ length: [800, 800] },	// 1150
					{ length: [800, 800] }	// 1150
				]
			},
			10: {
				distance: 87.28,
				noInterrupt: ['3-10'],
				race: {
					3: { distance: 90.98 }, // F.Helf
					4: { distance: 35 }, // M.Aman
					6: { distance: 69.7 }, // M.Casta
					8: { distance: 69.51 }, // Popori
					9: { distance: 87.27 }, // Elin
					10: { distance: 64.88 } // Baraka
				}
			},
			11: {
				distance: 87.28,
				noInterrupt: ['3-11'],
				race: {
					3: { distance: 90.98 }, // F.Helf
					4: { distance: 35 }, // M.Aman
					6: { distance: 69.7 }, // M.Casta
					8: { distance: 69.51 }, // Popori
					9: { distance: 87.27 }, // Elin
					10: { distance: 64.88 } // Baraka
				}
			},
			12: {
				distance: 87.28,
				noInterrupt: ['3-12'],
				race: {
					3: { distance: 90.98 }, // F.Helf
					4: { distance: 35 }, // M.Aman
					6: { distance: 69.7 }, // M.Casta
					8: { distance: 69.51 }, // Popori
					9: { distance: 87.27 }, // Elin
					10: { distance: 64.88 } // Baraka
				}
			},
			13: {
				distance: 69.7,
				noInterrupt: ['3-13'],
				race: {
					3: { distance: 90.98 }, // F.Helf
					4: { distance: 35 }, // M.Aman
					6: { distance: 69.7 }, // M.Casta
					8: { distance: 69.51 }, // Popori
					9: { distance: 87.27 }, // Elin
					10: { distance: 64.88 } // Baraka
				},
				enableVB: true,
				pendingStartTime: 454.54
			}
		},
		4: { // Flatten
			'*': {
				length: 3111.8,
				distance: 105.68,
				glyphs: {
					24008: { speed: 0.25 },
					24050: { speed: 0.25 }
				},
				abnormals: {
					24100: { speed: 0.25 },
					24101: { speed: 0.30 }
				},
				race: {
					3: { distance: 90.6 }, // F.Helf
					4: { distance: 80 }, // M.Aman
					6: { distance: 75 }, // M.Casta
					8: { distance: 73.34 }, // Popori
					9: { distance: 105.69 }, // Elin
					10: { distance: 70.23 } // Baraka
				}
			},
			0: {
				noInterrupt: [1, 2, '3-10', '3-11', '3-12', '3-13', 4, '8-30', '10-10', '10-11', '10-12', 11, '10-13', 12, 13, '15-10', '15-11', '15-12', '15-13', '15-14', '16', '18-10', '18-11', '18-12', '18-13', 24, 28, 29, 30, '32-0'],
				abnormals: { 401400: { chain: 1 } },
				chains: {
					6: 30,
					25: 30,
					32: 31,
					31: 30
				}
			},
			1: {
				chains: {
					6: 31,
					25: 31,
					31: 31
				}
			},
			30: { length: 2336.55 },
			31: { length: 2336.55 }
		},
		5: { // Dash
			0: {
				withoutWeapon: true,
				CC: "evasive",
				fixedSpeed: 1,
				length: 700,
				noInterrupt: [2],
			}
		},
		6: { // Sweeping Strike
			'*': {
				length: 1293.63,
				distance: 80.47,
				noRetry: true,
				race: {
					2: { // M.Helf
						length: 1384.54,
						distance: 82.33
					},
					3: { distance: 71.34 }, // F.Helf
					6: { distance: 66.21 }, // M.Casta
					8: { distance: 53.41 }, // Popori
					9: { // Elin
						length: 1263.63,
						distance: 80.47
					},
					10: { distance: 70 } // Baraka
				}
			},
			0: {
				noInterrupt: [2],
				interruptibleWithAbnormal: { 401404: 2 },
				abnormals: { 401400: { chain: 30 } }
			},
			1: true,
			30: true,
		},
		8: { // Fiery Rage
			'*': { noInterrupt: [2] },
			0: {
				fixedSpeed: 1,
				length: [454.54, 596.81]
			},
			30: {
				length: 1742.34,
				requiredBuff: 401400,
				race: {
					7: { length: 1767.34 } // F.Casta
				}
			}
		},
		10: { // Cyclone
			'*': { noRetry: true },
			0: false,
			/*
			0: {
				type: 'charging',
				toggleOnAbnormality: 401400, 
				consumeAbnormal: [400900, 401404],
				length: [650, 650, 650],
				glyphs: {
					24009: { chargeSpeed: 0.25 },
					24052: { chargeSpeed: 0.25 },
					24096: { chargeSpeed: 0.3  }
				},
				abnormals: {
					24190: { chargeSpeed: 0.3 },
					400500: { chargeSpeed: 0.2 },
					400501: { chargeSpeed: 0.4 },
					400508: { chargeSpeed: 0.4 },					
					401150: { chargeSpeed: 0.2 },
				},
				level: [
					{ length: 800 },	// 1300
					{ length: [800, 800] },	// 1150
					{ length: [800, 800] }	// 1150
				]
			},
			*/
			10: {
				length: 1333,
				distance: 50,
				races: {
					2: { length: 1400 },
					3: { length: 1800 }, // F.Helf
					6: { length: 1366 }
				}
			},
			11: {
				length: [366, 366, 1333],
				distance: [33.33, 33.33, 50],
				races: {
					2: { length: [366, 366, 1400] }, // M.Helf
					3: { length: [366, 366, 1800] }, // F.Helf
					6: { length: [366, 366, 1366] } // M.Casta
				}
			},
			12: {
				length: [366, 366, 366, 366, 1333],
				distance: [33.33, 33.33, 33.33, 33.33, 50],
				races: {
					2: { length: [366, 366, 366, 366, 1400] }, // M.Helf
					3: { length: [366, 366, 366, 366, 1800] }, // F.Helf
					6: { length: [366, 366, 366, 366, 1366] } // M.Casta
				}
			},
			13: {
				length: [366, 366, 366, 366, 1333],
				distance: [33.33, 33.33, 33.33, 33.33, 50],
				races: {
					2: { length: [366, 366, 366, 366, 1400] }, // M.Helf
					3: { length: [366, 366, 366, 366, 1800] }, // F.Helf
					6: { length: [366, 366, 366, 366, 1366] } // M.Casta
				},
				enableVB: true,
				pendingStartTime: 1
			}
		},
		11: { // Leaping Strike 
			0: {
				CC: "extended",
				length: 2191.25,
				distance: 250,
				noInterrupt: [2],
			}
		},
		13: { // Retaliate
			0: {
				type: 'retaliate',
				length: 1625,
				noInterrupt: [2],
				noRetry: true
			}
		},
		15: { // Vampiric Blow  
			'*': { length: 1930 },
			0: {
				type: 'charging',
				consumeAbnormal: [400900, 401404],
				length: [800, 800, 800],
				noInterrupt: ['3-0', '10-0', 15],
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
			10: {
				distance: 87.28,
				noInterrupt: ['15-10'],
				race: {
					3: { distance: 72.79 }, // F.Helf
					4: { distance: 35 }, // M.Aman
					6: { distance: 69.7 }, // M.Casta
					8: { distance: 69.51 }, // Popori
					9: { distance: 87.27 }, // Elin
					10: { distance: 64.88 } // Baraka
				}
			},
			11: {
				distance: 87.28,
				noInterrupt: ['15-11'],
				race: {
					3: { distance: 72.79 }, // F.Helf
					4: { distance: 35 }, // M.Aman
					6: { distance: 69.7 }, // M.Casta
					8: { distance: 69.51 }, // Popori
					9: { distance: 87.27 }, // Elin
					10: { distance: 64.88 } // Baraka
				}
			},
			12: {
				distance: 87.28,
				noInterrupt: ['15-12'],
				race: {
					3: { distance: 72.79 }, // F.Helf
					4: { distance: 35 }, // M.Aman
					6: { distance: 69.7 }, // M.Casta
					8: { distance: 69.51 }, // Popori
					9: { distance: 87.27 }, // Elin
					10: { distance: 64.88 } // Baraka
				}
			},
			13: {
				distance: 87.28,
				noInterrupt: ['15-13'],
				race: {
					3: { distance: 72.79 }, // F.Helf
					4: { distance: 35 }, // M.Aman
					6: { distance: 69.7 }, // M.Casta
					8: { distance: 69.51 }, // Popori
					9: { distance: 87.27 }, // Elin
					10: { distance: 64.88 } // Baraka
				}
			},
			14: {
				distance: 87.28,
				noInterrupt: [15],
				race: {
					3: { distance: 72.79 }, // F.Helf
					4: { distance: 35 }, // M.Aman
					6: { distance: 69.7 }, // M.Casta
					8: { distance: 69.51 }, // Popori
					9: { distance: 87.27 }, // Elin
					10: { distance: 64.88 } // Baraka
				}
			}
		},
		16: { // Fearsome Shout
			0: {
				fixedSpeed: 1,
				length: [700, 1425],
				noInterrupt: [2]
			}
		},
		18: { // Lethal Strike
			'*': {
				distance: 167.62,
				toggleOnAbnormality: 401400,
				consumeAbnormal: 400900,
				abnormals: { 24120: { speed: 0.3 } },
				race: {
					4: { distance: 145 },
					6: { distance: 168.11 }, // M.Casta
					8: { distance: 240.4 }, // Popori
					10: { distance: 158.11 } // Baraka
				}
			},
			0: {
				length: 687.5,
				noInterrupt: [1, 4, 6, 13, 18, 24, 25, 26, 28, 29, 31],
				chains: {
					'3-0': 30,
					3: 30,
					11: 30,
					'10-0': 0,
					10: 30,
					'15-0': 0,
					15: 30
				}
			},
			30: { length: 550 }
		},
		19: { // Triumphant Shout
			0: {
				fixedSpeed: 1,
				length: [500, 700],
				noInterrupt: [2]
			}
		},
		20: { // Inescapable Doom
			0: {
				fixedSpeed: 1,
				length: [600, 900],
				noInterrupt: [2]
			}
		},
		21: { // Bloodlust
			0: {
				fixedSpeed: 1,
				length: 700,
				noInterrupt: [2]
			}
		},
		24: { // Evasive Smash
			'*': {
				length: 1833, // 1630
				distance: 167.63, // 167.624
				consumeAbnormal: [400900, 401404],
				requiredBuff: 400900, // <- no werk?
				race: {
					6: { distance: 168.11 }, // M.Casta
					8: { distance: 240.4 }, // Popori
					9: { // Elin
						length: 1633,
						distance: 167.62
					},
					10: { distance: 158.11 } // Baraka
				}
			},
			0: {
				CC: "evasive",
				type: 'storeCharge',
				length: 1020.9,
				distance: 150,
				requiredBuff: false,
			},
			5: {
				type: 'grantCharge',
				requiredBuff: false
			},
			10: true, // shud be ok but confirmation would be nice
			11: true,
			12: true,
			13: true
		},
		25: { // Raze
			'*': {
				length: 1200,
				distance: 96,
				glyphs: {
					24078: { speed: 0.25 }
				}
			},
			0: {
				noInterrupt: [2, 4, 6, '8-30', 11, 12, 13, '18-10', '18-11', '18-12', '18-13', 24, 25, 26, 27, 28, 29, '32-0'],
				interruptibleWithAbnormal: { 401404: 2 }, // .........................
				abnormals: { 401404: { chain: 31 } }, // todo: correct ids
				chains: {
					1: 30,
					3: 30,
					10: 30,
					18: 30,
					30: 31,
					31: 30,
					32: 31
				}
			},
			1: true,
			30: { length: 960 },
			31: { length: 960 }
		},
		26: { // Tackle
			0: {
				length: 1010,
				distance: 80,
				noInterrupt: [2]
			}
		},
		27: { // Unbreakable
			'*': { noInterrupt: [1, 2, '3-10', '3-11', '3-12', '3-13', 4, 6, '8-30', '10-10', '10-11', '10-12', '10-13', 11, 12, 13, '15-10', '15-11', '15-12', '15-13', '15-14', 18, 24, 25, 26, 27, 28, 29, 30, 31, 32] },
			0: {
				length: 2066,
				abnormals: { 401705: { chain: 30 } },
				chains: {
					34: 30,
					35: 30,
					36: 30,
					37: 30
				},
				race: { 7: { length: 2099 } } // F.Casta
			},
			30: { length: 1455 }
		},
		28: { // Intimidation
			'*': {
				length: 1566,
				noInterrupt: [2],
				race: { 7: { length: 1599 } } // F.Casta
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
				noInterrupt: [2, 29],
			}
		},
		30: { // Axe Counter
			'*': {
				length: 655.33,
				distance: 21.05,
				noInterrupt: [1, '3-10', '3-11', '3-12', '3-13', 4, 6, '8-30', '10-10', '10-11', '10-12', '10-13', 11, 12, 13, '15-10', '15-11', '15-12', '15-13', '15-14', '18-10', '18-11', '18-12', '18-13', 24, 25, 26, 27, 28, 29, 30, 31, 32],
				requiredBuff: 401402,
				chains: { 2: 30 },
				race: {
					5: { // F.Aman
						length: 677.33,
						distance: 24.5
					},
					8: { // Popori
						length: 1188.66,
						distance: 240.4
					},
					9: { distance: 21.05 }, // Elin
					10: { distance: 21.08 } // Baraka
				}
			},
			0: true,
			30: true
		},
		31: { // Overwhelm
			0: {
				CC: "extended",
				type: 'dash',
				fixedSpeed: 1,
				length: 1115,
				distance: 470,
				noInterrupt: [2, 31],
				noRetry: true
			},
			1: {
				length: 1510.83,
				race: {
					9: { length: 1344 }
				}
			}
		},
		32: { // Punishing Strike
			0: {
				length: 771.53,
				distance: 31.58,
				noInterrupt: [2],
				requiredBuff: 401400,
				race: {
					5: { // F.Aman
						length: 796.92,
						distance: 24.5
					},
					8: { // Popori
						length: 925.4,
						distance: 61.39
					},
					9: { distance: 31.58 }, // Elin
					10: { distance: 31.63 } // Baraka
				}
			},
			1: {
				length: 800,
				distance: 134.1,
				race: {
					8: { distance: 192.32 }, // Popori
					9: { distance: 134.1 }, // Elin
					10: { distance: 126.49 } // Baraka
				}
			}
		},
		33: { // Unleash
			0: {
				length: [700, 1500, 1766],
				toggleOnAbnormality: 425100
			}
		},
		34: { // Unleash: Dexter
			'*': {
				length: [600, 833, 833],
				distance: [0, 27.5, 0],
				requiredBuff: 401705
			},
			0: {
				noInterrupt: [34, 36],
				noRetry: true,
				abnormals: {
					401706: { speed: 1.2 },
					401716: { chain: 31 }
				},
				chains: {
					33: 30,
					35: 30,
					37: 30
				}
			},
			1: true,
			30: {
				length: [833, 833],
				distance: [27.5, 0]
			},
			31: {
				length: [833, 833],
				distance: [27.5, 0]
			}
		},
		35: { // Unleash: Sinister
			'*': {
				length: [1133, 833],
				distance: [198, 0],
				requiredBuff: 401705
			},
			0: {
				abnormals: {
					401707: { speed: 1.2 },
					401717: { chain: 31 }
				},
				chains: {
					33: 1,
					34: 30
				},
				noRetry: true,
				noInterrupt: [35, 36, 37],
			},
			1: true,
			30: {
				length: [625, 833],
				distance: [27.5, 0]
			},
			31: {
				length: [625, 833],
				distance: [27.5, 0]
			}
		},
		36: { // Unleash: Rampage
			'*': {
				length: 1588.6,
				distance: 38.5,
				noRetry: true,
				noInterrupt: [37],
				requiredBuff: 401705
			},
			0: {
				length: 2714.4,
				noRetry: true,
				abnormals: {
					401708: { speed: 1.2 },
					401718: { chain: 31 }
				},
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
				// race difference could be a thing
				length: [610.8, 694, 721.6, 471.66, 1194],
				distance: [126, 144.824, 151.1, 9.4, 98.64],
				toggleOnAbnormality: 425101,
				noInterrupt: [37],
				requiredBuff: 401705
			},
			0: {
				chains: {
					33: 30,
					34: 30,
					35: 30,
					36: 30,
				}
			},
			30: true
		},
		91: { // Awakening Eyes Aura
			0: { length: 3000 }
		}
	},
	4: { // Sorcerer
		1: { // Fireball
			0: { length: 730 }
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
				length: 1307.22,
				abnormals: {
					25090: { speed: 0.4 }
				}
			}
		},
		4: { // Arcane Pulse
			'*': {
				length: 1293,
				noRetry: true,
				race: { 9: { length: 990.91 } }, // Elin
			},
			0: {
				type: 'charging',
				length: [800, 800],
				noInterrupt: [4],
				abnormals: { 25140: { chargeSpeed: 0.3 } }
			},
			10: {
				noInterrupt: ['4-10'],
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
				noInterrupt: ['4-11'],
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
				noInterrupt: ['4-12'],
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
				abnormals: {
					25100: { speed: 0.25 },
				},
				race: {
					9: { length: 3700 } // Elin
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
				length: 657,
				distance: -200,
				forceClip: true,
			}
		},
		8: { // Flame Pillar
			0: {
				length: 1200,
				abnormals: {
					25070: { speed: 0.25 }
				}
			}
		},
		10: { // Mana Barrier
			0: {
				length: 633,
				race: {
					1: { length: 533 }
				}
			}
		},
		11: { // Lightning Strike
			0: {
				length: 869.56,
				race: {
					9: { length: 809 } // Elin
				}
			}
		},
		12: { // Void Pulse
			0: { length: 933 } //
		},
		13: { // Mindblast
			0: {
				length: 2462,
				race: {
					7: { length: 2460 },
					9: { length: 2315 } // Elin
				},
				glyphs: {
					25048: { speed: 0.3 }
				},
				abnormals: {
					25110: { speed: 0.4 }
				}
			}
		},
		16: { // Painblast
			0: {
				length: 1608, //
				race: {
					7: { length: 1605 },
					9: { length: 1330 } // Elin
				}
			}
		},
		17: { // Painful Trap
			0: { length: 1106 }
		},
		18: { // Glacial Retreat
			0: {
				CC: "extended",
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
				length: [1000, 1000],
				noInterrupt: [19],
			},
			10: { noInterrupt: ['19-10'] },
			11: { noInterrupt: ['19-11'] },
			12: { noInterrupt: ['19-12'] }
		},
		20: { // Flaming Barrage
			0: {
				type: 'lockon',
				fixedSpeed: 1,
				length: 4900,
				noRetry: true
			},
			10: {
				type: 'lockonCast',
				length: 1501,
				glyphs: {
					25001: { speed: 0.3 },
					25096: { speed: 0.4 }
				},
				abnormals: {
					25060: { speed: 0.25 }
				}
			}
		},
		21: { // Nerve Exhaustion
			0: {
				type: 'lockon',
				fixedSpeed: 1,
				length: 4900,
				noRetry: true
			},
			10: {
				type: 'lockonCast',
				fixedSpeed: 1,
				length: [300, 1200]
			}
		},
		22: { // Burning Breath
			0: {
				type: 'lockon',
				fixedSpeed: 1,
				length: 4900,
				noRetry: true
			},
			10: {
				type: 'lockonCast',
				fixedSpeed: 1,
				length: [300, 1200]
			}
		},
		23: { // Mana Volley
			0: {
				type: 'lockon',
				fixedSpeed: 1,
				length: 4900,
				noRetry: true
			},
			10: {
				type: 'lockonCast',
				fixedSpeed: 1,
				length: [325, 875]
			}
		},
		25: { // Time Gyre
			0: {
				type: 'lockon',
				fixedSpeed: 1,
				length: 4900,
				noRetry: true
			},
			10: {
				type: 'lockonCast',
				fixedSpeed: 1,
				length: 700
			}
		},
		26: { // Teleport Jaunt
			0: {
				CC: ["evasive", "extended"],
				type: 'teleport',
				length: [200, 266],
				distance: [0, 333],
				noInterrupt: [26],
				teleportStage: 1,
				noRetry: true,
				timeout: 150
			}
		},
		27: { // Hailstorm
			0: {
				length: 980,
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
				glyphs: {
					25092: { speed: 0.3 }
				}
			}
		},
		31: { // Warp Barrier
			'*': { length: 500 },
			10: true,
			20: true
		},
		32: { // Meteor Shower
			'*': {
				length: 6778.2,
				glyphs: {
					25003: { speed: 0.17 },
					25069: { speed: 0.25 }
				},
				abnormals: {
					25100: { speed: 0.25 },
				},
				race: {
					7: { length: 6774.54 }, // F. Casta
					9: { length: 6475 } // Elin
				}
			},
			0: true,
			50: {
				length: 3933,
				race: {
					7: { length: 3929.4 }, //Casta F.
					9: { length: 3699 } // Elin
				}
			}
		},
		33: { // Arcane Pulse (Mana Boost)
			'*': {
				length: 1292,
				noRetry: true,
				race: {
					9: { length: 990.91 } // Elin
				}
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
				/*race: {
					1: {length: 533}
				}*/
			}
		},

		91: { // Awakening Eyes Aura
			0: { length: 3000 }
		}
	},
	5: { // Archer
		1: { // Arrow
			0: {
				length: 400,
				noRetry: true
			}
		},
		2: { // Arrow Volley
			0: {
				type: 'lockon',
				fixedSpeed: 1,
				length: 4900,
				noInterrupt: [22],
				noRetry: true
			},
			10: {
				type: 'lockonCast',
				length: 1233,
				noInterrupt: [22]
			}
		},
		3: { // Radiant Arrow
			'*': {
				length: 1748.2,
				races: {
					1: { length: 1566.37 }
				}
			},
			0: {
				type: 'charging',
				length: [600, 600, 600],
				//triggerAbnormal: { 600200: 7000 },
				noInterrupt: [3],
				noRetry: true,
				abnormals: {
					26180: { chargeSpeed: 0.3 },
					601450: { chargeSpeed: 0.5 }
				},
				level: [
					{ length: 600 },	// 1400
					{ length: [600, 600] },	// 1400
					{ length: [600, 600] },	// 1400
				]
			},
			10: {
				distance: -100,
				noInterrupt: ['3-10'],
				race: {
					8: { distance: -90.6 } // Popori
				}
			},
			11: {
				distance: -100,
				noInterrupt: ['3-11'],
				race: {
					8: { distance: -90.6 } // Popori
				}
			},
			12: {
				distance: -100,
				noInterrupt: ['3-12'],
				race: {
					8: { distance: -90.6 } // Popori
				}
			},
			13: {
				distance: -100,
				noInterrupt: ['3-13'],
				race: {
					8: { distance: -90.6 } // Popori
				}
			}
		},
		4: { // Penetrating Arrow
			'*': {
				length: 1294,
				races: {
					1: { length: 1275 }, // F.Human
					9: { length: 1323 }	// Elin
				}
			},
			0: {
				type: 'charging',
				length: [800, 800, 800],
				//triggerAbnormal: { 600200: 7000 },
				noInterrupt: [4],
				noRetry: true,
				abnormals: {
					26160: { chargeSpeed: 0.3 },
					26170: { chargeSpeed: 0.3 },
					26171: { chargeSpeed: 0.4 },
					26190: { chargeSpeed: 0.3 },
					601450: { chargeSpeed: 0.5 }
				},
				level: [
					{ length: 1000 },	// 1400
					{ length: [1000, 1000] },	// 1400
					{ length: [1000, 1000] },	// 1400
				]
			},
			10: {
				distance: -50,
				noInterrupt: ['4-10'],
				race: {
					1: { distance: -80 }, // F.Human
					8: { distance: -48.69 } // Popori
				}
			},
			11: {
				distance: -50,
				noInterrupt: ['4-11'],
				race: {
					1: { distance: -80 }, // F.Human
					8: { distance: -48.69 } // Popori
				}
			},
			12: {
				distance: -50,
				noInterrupt: ['4-12'],
				race: {
					1: { distance: -80 }, // F.Human
					8: { distance: -48.69 } // Popori
				}
			},
			13: {
				distance: -50,
				noInterrupt: ['4-13'],
				race: {
					1: { distance: -80 }, // F.Human
					8: { distance: -48.69 } // Popori
				}
			}
		},
		5: { // Rain of Arrows
			0: {
				length: 3131,
				glyphs: {
					26077: { speed: 0.4 }
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
					999010000: { nocTanSpeed: 0.15 }
				}
			}
		},
		6: { // Backstep
			0: {
				CC: ["evasive", "extended"],
				length: 670,
				distance: -200,
				noRetry: true,
				forceClip: true,
			}
		},
		7: { // Feign Death
			0: {
				withoutWeapon: true,
				fixedSpeed: 1,
				length: [3627, 49543.14, 1757],
				race: {
					0: { length: [3399.99, 49577, 1757.3] },
					1: { length: [2945, 49546, 1757.3] },
					2: { length: [3990, 49516.77, 1757.3] },
					3: { length: [2809, 49546.77, 1818.2] },
					4: { length: [4763.6, 49516.77, 1757.3] },
					5: { length: [3718, 49516.77, 1757.3] },
					6: { length: [4202, 49546.8, 1757] },
					8: { length: [3127.3, 49516.77, 1757.3] },
					9: { length: [2854.5, 49516.77, 1757.3] },
					10: { length: [4400, 49546.77, 1757.3] }
				},
				distance: [-114.05, 0, 0] //not sure and lazy
			}
		},
		8: { // Rapid Fire
			'*': {
				noRetry: true,
				blockCancelPacket: true
			},
			0: {
				length: 433,
				noInterrupt: [6, '8-6']
			},
			1: { length: 600 },
			2: { length: 700 },
			3: { length: 800 },
			4: { length: 700 },
			5: { length: 800 },
			6: { length: 1233 }
		},
		9: { // Slow Trap
			0: { length: 1149.5 }
		},
		10: { // Stunning Trap
			0: { length: 1149.5 }
		},
		12: { // Velik's Mark
			0: { length: 200 }
		},
		14: { // Retaliate
			0: {
				type: 'retaliate',
				length: 1633,
				noRetry: true,
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
				length: 1335,
				distance: -250,
				forceClip: true
			}
		},
		17: { // Web Arrow
			0: {
				length: 533,
				noInterrupt: [22]
			}
		},
		18: { // Close Quarters
			0: {
				length: 300,
				distance: 89.8
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
				abnormals: {
					26100: { speed: 0.25 }
				},
				race: {
					8: { distance: -12.17 } // Popori
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
			'*': { length: 625 },
			0: true,
			50: true
		},
		22: { // Sequential Fire
			0: {
				length: 433,
				consumeAbnormal: 600200,
				requiredBuff: 600200,
				noRetry: true,
				race: { 5: { length: 533 } }
			}
		},
		23: { // Stunning Trap Arrow
			0: { length: 1423.6 }
		},
		25: { // Incendiary Trap Arrow
			0: { length: 1192.75 }
		},
		29: { // Thunderbolt
			0: {
				length: 3766,
				distance: -100,
				//triggerAbnormal: { 600200: [7000, 780] },
				noInterrupt: [22],
				glyphs: {
					26089: { speed: 0.3 },
					26102: { speed: 0.3 }
				},
				race: {
					1: { length: 3560 }, // F.Human
					8: { distance: -96.6 } // Popori
				}
			}
		},
		31: { // Tenacity
			0: {
				fixedSpeed: 1,
				length: [500, 720] // 700
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
				type: 'dash',
				fixedSpeed: 1,
				length: 1050, // 950-1025
				distance: 413, // 412.078
				noInterrupt: [33],
			}
		},

		91: { // Awakening Eyes Aura
			0: { length: 3000 }
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
				toggleOnAbnormality: 805800,
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
					999010000: { nocTanSpeed: 0.15 }
				},
				race: { 10: { length: 2774 } }
			}
		},
		3: { // Healing Circle
			0: {
				length: 1763,
				toggleOnAbnormality: 805800,
				noInterrupt: [2, 3, 5, 10, 12, 14, 17, 18, 23, 25, 27, 28, '30-10', '33-10', 34, '35-10', '37-10', '41-10', 42],
				chains: {
					'19-10': 30,
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
				length: 4595,
				toggleOnAbnormality: 805800,
				glyphs: { 28044: { speed: 0.25 } },
				race: { 0: { length: 4625 } }
			}
		},
		10: { // Purifying Circle
			0: { length: 1294 }
		},
		11: { // Metamorphic Blast
			'*': {
				length: 839,
			},
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
			'*': {
				length: 1718,
				noInterrupt: [2, 3, 5, 10, 12, 14, 16, 17, 18, '19-10', 23, 25, 26, 28, 29, '30-10', '33-10', 34, '35-10', '37-10', 38, 40, '41-10', 42]
			},
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
			11: { length: 1438.45 },
			20: {
				chains: {
					11: 21,
					27: 21
				}
			},
			21: { length: 1438.45 },
			30: { length: 1438.46 }
		},
		18: { // Heal Thyself
			0: {
				withoutWeapon: true,
				toggleOnAbnormality: 805800,
				length: 1266
			}
		},
		19: { // Focus Heal
			0: {
				type: 'lockon',
				fixedSpeed: 1,
				length: 54445.45,
				toggleOnAbnormality: 805800,
				noRetry: true
			},
			10: {
				type: 'lockonCast',
				length: 1950,
			}
		},
		22: { // Kaia's Shield
			0: {
				length: 667,
				toggleOnAbnormality: 805800
			}
		},
		26: { // Fiery Escape
			0: {
				CC: ["evasive", "extended"],
				length: 1125,
				distance: -250.5,
				forceClip: true
			}
		},
		27: { // Final Reprisal todo: check
			'*': {
				length: 2933,
				race: { 9: { length: 3333 } },
				noInterrupt: [2, 3, 5, 10, 12, 14, 17, 18, '19-10', 23, 25, 26, 27, 28, '30-10', '33-10', 34, '35-10', '37-10', 38, '41-10', 42],
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
				race: { 9: { length: 1273 } },
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
				race: { 9: { length: 1273 } },
			},
			30: {
				length: 1113,
				race: { 9: { length: 1273 } },
			}
		},
		28: { // Mana Charge / Words of Vitality todo: check
			'*': {
				length: 798.26,
				noRetry: true,
				race: { 0: { length: 827 } },
				level: {
					1: {
						length: 700,
						toggleOnAbnormality: 425100
					}
				}
			},
			0: {
				type: 'charging',
				length: [800, 1600],
				noInterrupt: [28],
				bodyRolls: { 350708: { chargeSpeed: 0.15 } },
				glyphs: { 28031: { chargeSpeed: 0.25 } },
				level: { 1: { length: [900, 900, 900] } }
			},
			10: { noInterrupt: ['28-10'] },
			11: { noInterrupt: ['28-11'] },
			12: { noInterrupt: ['28-12'] },
			13: { noInterrupt: ['28-13'] }
		},
		29: { // Triple Nemesis
			0: { length: 810 },
			1: { length: 800 },
			2: { length: 1250 }
		},
		30: { // Plague of Exhaustion
			0: {
				type: 'lockon',
				fixedSpeed: 1,
				length: 4900,
				noRetry: true
			},
			10: {
				type: 'lockonCast',
				fixedSpeed: 1,
				length: 1433
			}
		},
		31: { // Guardian Sanctuary
			0: {
				fixedSpeed: 1,
				length: 700,
				toggleOnAbnormality: 805800
			}
		},
		32: { // Divine Prayer
			0: {
				withoutWeapon: true,
				fixedSpeed: 1,
				length: [1300, 900],
				toggleOnAbnormality: 805800
			}
		},
		33: { // Ishara's Lullaby
			0: {
				type: 'lockon',
				fixedSpeed: 1,
				length: 4900,
				noRetry: true
			},
			10: {
				type: 'lockonCast',
				fixedSpeed: 1,
				length: [300, 1433]
			}
		},
		34: { // Restorative Burst
			0: { length: 1433 }
		},
		35: { // Energy Stars
			0: {
				type: 'lockon',
				fixedSpeed: 1,
				length: 4900,
				noRetry: true
			},
			10: {
				type: 'lockonCast',
				fixedSpeed: 1,
				length: 1433
			}
		},
		37: { // Healing Immersion
			0: {
				type: 'lockon',
				fixedSpeed: 1,
				length: 4900,
				noInterrupt: [37],
				noRetry: true,
				partyOnly: true
			},
			10: {
				type: 'lockonCast',
				fixedSpeed: 1,
				length: 1433,
				toggleOnAbnormality: 805800,
				noInterrupt: ['37-10']
			}
		},
		38: { // Backstep
			0: {
				CC: ["evasive", "extended"],
				length: 657.27,
				distance: -200,
				forceClip: true,
			}
		},
		39: { // Grace of Resurrection
			0: { length: 5904 }
		},
		40: { // Zenobia's Vortex
			'*': {
				length: 1070.71,
				noInterrupt: [40]
			},
			0: true,
			10: true,
			20: true
		},
		41: { // Divine Intervention / Divine Vitality
			0: {
				type: 'lockon',
				fixedSpeed: 1,
				length: 54445.45,
				toggleOnAbnormality: 805800,
				noRetry: true,
				partyOnly: true
			},
			10: {
				type: 'lockonCast',
				length: 933,
			}
		},
		42: { // Holy Burst
			'*': {
				length: 800,
				toggleOnAbnormality: 425100
			},
			0: true,
			20: true,
			30: true
		},
		43: { // Words of Judgment
			0: {
				length: 1416.66,
				toggleOnAbnormality: [425100, 425101]
			},
			50: { length: 200 }
		},
		91: { // Awakening Eyes Aura
			0: { length: 3000 }
		}
	},
	7: { // Mystic
		1: { // Sharan Bolt
			'*': { length: 689 },
			0: true,
			1: true,
			2: true,
			3: true
		},
		2: { // Corruption Ring
			0: {
				type: 'hold',
				length: 10869,
				chainOnRelease: 11
			},
			11: { length: 839 },
			12: {
				length: 1294,
				race: {
					1: { length: 1224 }
				}
			}
		},
		5: { // Titanic Favor
			0: {
				type: 'lockon',
				fixedSpeed: 1,
				length: 59900,
				noRetry: true
			},
			10: {
				type: 'lockonCast',
				length: 1950
			}
		},
		8: { // Metamorphic Blast
			0: {
				length: 839,
				noInterrupt: [1, 2, 4, '5-10', 6, '9-10', 10, 13, 14, 15, 16, 17, 21, '18-10', '22-10', 37, '41-10', 43], // Last level got fixed? todo: update
				chains: {
					8: 30,
					23: 30
				}
			},
			30: { length: 839 }
		},
		9: { // Arun's Cleansing
			0: {
				type: 'lockon',
				fixedSpeed: 1,
				length: 59900,
				noRetry: true
			},
			10: {
				type: 'lockonCast',
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
					999010000: { nocTanSpeed: 0.15 }
				}
			}
		},
		11: { // Summon: Party
			0: { length: 4445 }
		},
		12: { // Vow of Rebirth
			0: {
				type: 'lockon',
				fixedSpeed: 1,
				length: 59900,
				noRetry: true,
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
			'*': { length: 1294 },
			0: true,
			50: true
		},
		14: { // Aura of the Swift
			'*': { length: 1294 },
			0: true,
			50: true
		},
		15: { // Aura of the Unyielding
			'*': { length: 1294 },
			0: true,
			50: true
		},
		16: { // Aura of the Tenacious
			'*': { length: 1294 },
			0: true,
			50: true
		},
		17: { // Teleport Jaunt
			0: {
				CC: ["evasive", "extended"],
				type: 'teleport',
				length: [222, 255],
				distance: [0, 333],
				noInterrupt: [17],
				teleportStage: 1,
				noRetry: true,
				timeout: 150 
			}
		},
		18: { // Arun's Vitae
			'*': { noRetry: true },
			0: {
				type: 'charging',
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
				noInterrupt: ['18-10'],
				race: {
					9: { length: 833 }
				}
			}
		},
		21: { // Retaliate
			0: {
				type: 'retaliate',
				length: 1633,
				noRetry: true
			}
		},
		22: { // Arun's Tears
			'*': { noRetry: true },
			0: {
				type: 'charging',
				length: 1240,
				chargeLevels: [10, 10],
				noInterrupt: [22],
				abnormals: { 27100: { chargeSpeed: 0.25 } }
			},
			10: {
				length: 800,
				race: {
					9: { length: 833 }
				}
			}
		},
		23: { // Metamorphic Smite
			0: {
				length: 1440,
				noInterrupt: [1, 2, 4, '5-10', 6, '9-10', 10, 13, 14, 15, 16, 17, '18-10', 21, '22-10', 23, 37, '41-10', 43], // todo: update
				chains: { 8: 30 }
			},
			30: { length: 1108 }
		},
		24: { // Volley of Curses
			0: {
				type: 'lockon',
				fixedSpeed: 1,
				length: 4900,
				noRetry: true
			},
			10: {
				type: 'lockonCast',
				fixedSpeed: 1,
				length: [533.33, 667], // [533.33, 633.33]
			}
		},
		25: { // Thrall of Protection
			'*': {
				fixedSpeed: 1,
				length: [1000, 1700]
			},
			0: true,
			10: true, // 1023016
			30: { length: [500, 700] } // 1023017
		},
		27: { // Thrall of Life
			'*': {
				fixedSpeed: 1,
				length: [229, 471] // [229, 438]
			},
			0: true,
			10: true, // 10236013
			30: { length: [500, 700] } // 10236014
		},
		28: { // Sonorous Dreams
			0: {
				type: 'lockon',
				fixedSpeed: 1,
				length: 4900,
				noRetry: true
			},
			10: {
				type: 'lockonCast',
				fixedSpeed: 1,
				length: 1433,
			}
		},
		29: { // Regression
			fixedSpeed: 1,
			length: [500, 700]
		},
		30: { // Curse of Exhaustion
			0: {
				type: 'lockon',
				fixedSpeed: 1,
				length: 4900,
				noRetry: true
			},
			10: {
				type: 'lockonCast',
				fixedSpeed: 1,
				length: 1433
			}
		},
		31: { // Curse of Confusion
			0: {
				type: 'lockon',
				fixedSpeed: 1,
				length: 4900,
				noRetry: true
			},
			10: {
				type: 'lockonCast',
				fixedSpeed: 1,
				length: 1433
			}
		},
		32: { // Mire
			0: {
				type: 'lockon',
				fixedSpeed: 1,
				length: 4900,
				noRetry: true
			},
			10: {
				type: 'lockonCast',
				fixedSpeed: 1,
				length: 1433
			}
		},
		33: { // Thrall of Vengeance
			'*': {
				fixedSpeed: 1,
				length: [267, 511]
			},
			0: true,
			10: true, // 10237014
			30: { length: [500, 700] } //  (500, 1200) 10237015
		},
		34: { // Thrall of Wrath
			'*': {
				fixedSpeed: 1,
				length: [1000, 1700]
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
				type: 'lockon',
				fixedSpeed: 1,
				length: 4900,
				noRetry: true
			},
			10: {
				type: 'lockonCast',
				length: 1020
			}
		},
		42: { // Boomerang Pulse
			0: {
				length: 545.45,
				noInterrupt: [42]
			}
		},
		43: { // Release
			0: { length: [400, 575] }
		},
		44: { // Mass Teleport
			0: {
				type: 'teleport',
				length: [222, 255],
				distance: [0, 333],
				toggleOnAbnormality: 425100,
				noInterrupt: [17],
				teleportStage: 1,
				noRetry: true
			}
		},
		45: { // Thrall Augmentation
			'*': { length: 91 },
			0: { toggleOnAbnormality: 425100 },
			50: true
		},
		47: { // Arunic Release
			0: {
				length: 1060,
				toggleOnAbnormality: 425100
			}
		},
		48: { // Summon: Thrall Lord
			0: {
				fixedSpeed: 1,
				length: 4050,
				toggleOnAbnormality: [425100, 425101]
			} // 10239003
		},
		91: { // Awakening Eyes Aura
			0: { length: 3000 }
		}
	},
	8: { // Reaper
		'*': { consumeAbnormal: [10151020, 10151021, 10151022, 10141023] },
		1: { // Spiral Barrage
			'*': {
				length: 1000,
				distance: 48,
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
				noInterrupt: [3, 4, 5, 6, 8, 9, 10, 11, 12, 13, 14, 20, 40],
				abnormals: {
					10151020: { chain: 2 },
					10151021: { chain: 3 },
					10151022: { chain: 4 },
					10151023: { chain: 5 }
				},
				chains: { // This supposly has chains ? 

				},
				noRetry: true
			},
			0: { triggerAbnormal: { 10151020: 2000 } }, // check
			1: { triggerAbnormal: { 10151020: 2000 } },
			2: {
				length: 1200,
				distance: 42,
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
				triggerAbnormal: { 10151021: 2000 },
			},
			3: {
				length: 860,
				distance: 56,
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
				triggerAbnormal: { 10151022: 1800 },
			},
			4: {
				length: 1400,
				distance: 60,
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
				triggerAbnormal: { 10151023: 2000 },
			},
			5: {
				length: 1900,
				distance: 91,
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
				length: 2025,
				noInterrupt: ['1-0', '1-2', 3, 4, 12, 13, 14, 20],
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
			'*': {
				noInterrupt: [1, 4, 8, 9, 10, 11, 12, 13, 20],
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
				length: [1175, 1750, 1025],
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
				length: [1750, 1025],
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
			'*': {
				blockCancelPacket: true,
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
				noInterrupt: ['1-0', '1-2', 4, 12, 14, 20],
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
			30: { length: [1450, 975] }
		},
		6: { // Death Spiral
			'*': { // todo: fix
				length: 1250,
				triggerAbnormal: { 10151131: 6000 },
				abnormals: { 10151131: { chain: 31 } },
				noInterrupt: ['6-31'],
				noRetry: true
			},
			0: {
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
					20: 30
				}
			},
			30: true,
			31: {
				triggerAbnormal: false,
				consumeAbnormal: 10151131
			}
		},
		8: { // Whipsaw
			'*': {
				length: 2500,
				noInterrupt: [4, 5, 6, 8, 9, 11, 12, 14, 20],
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
				length: 1725,
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
				noInterrupt: [1, 3, 4, 5, 6, 8, 9, 10, 11, 12, 14, 20]
			}
		},
		10: { // Pendulum Strike
			'*': {
				CC: "extended",
				length: 1000,
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
				}
			},
			0: true,
			30: true
		},
		11: { // Shadow Lash
			'*': {
				length: 1250,
				noInterrupt: [1, 3, 4, 5, 6, 8, 9, 10, '11-3', 12, 13, 14, 15, 16, 18, 20, 40]
			},
			0: {
				length: 2150,
				triggerAbnormal: { 10151040: 2000 },
				abnormals: {
					10151040: { chain: 1 },
					10151041: { chain: 2 },
					10151042: { chain: 3 }
				},
				noRetry: true
			},
			1: {
				triggerAbnormal: { 10151041: 2000 },
				consumeAbnormal: 10151040
			},
			2: {
				triggerAbnormal: { 10151042: 2000 },
				consumeAbnormal: 10151041
			},
			3: { consumeAbnormal: 10151042 }
		},
		12: { // Shadow Burst
			'*': { glyphs: { 29026: { speed: 0.25 } } },
			0: {
				length: 3225,
				noInterrupt: [1, 3, 4, 5, 6, 8, 9, 10, 11, '12-1', 14, 20],
				chains: { 12: 1 }
			},
			1: { length: 2025 }
		},
		/*
		13: { // Soul Reversemento
			0: { 
				length: '', toggle?
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
				type: 'retaliate',
				length: 1633,
				noRetry: true
			}
		},
		15: { // Retribution
			0: {
				CC: "extended",
				fixedSpeed: 1,
				length: 1575,
			}
		},
		16: { // Shadow Reaping
			0: {
				fixedSpeed: 1,
				length: 775
			}
		},
		18: { // Shrouded Escape
			0: {
				CC: ["evasive", "extended"],
				length: 850,
				distance: 150,
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
			'*': {
				CC: ["evasive", "extended"],
				length: 700,
				distance: 180,
				forceClip: true,
				abnormals: {
					10151000: { chain: 30 }
				}
			},
			0: true,
			30: true
		},

		91: { // Awakening Eyes Aura
			0: { length: 3000 }
		}
	},
	9: { // Gunner
		'*': { consumeAbnormal: [10152000, 10152001, 10152002, 10152010, 10152011, 10152072, 10152080, 10152081, 10152083] },
		1: { // Blast
			'*': {
				fixedSpeed: 1,
				noRetry: true,
				length: 1195,
				triggerAbnormal: { 10152011: 3100 },
				consumeAbnormal: [10152000, 10152001, 10152010],
				noInterrupt: [1],
				projectiles: [20]
			},
			1: true,
			2: { noRetry: true },
			20: {
				type: 'userProjectile',
				flyingSpeed: 800,
				flyingDistance: 500
			}
		},
		2: { // Bombardment
			0: {
				type: 'lockon',
				fixedSpeed: 1,
				length: 59900,
				noRetry: true
			},
			1: {
				type: 'lockonCast',
				length: 2999,
				noInterrupt: ['2-1'],
				glyphs: {
					30004: { speed: 0.25 }
				}
			}
		},
		3: { // Scattershot
			'*': {
				length: 1725,
				distance: -108,
				triggerAbnormal: { 10152083: [4100, 485] },
				noInterrupt: [3, 20],
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
					1: 30,
					'2-1': 30,
					4: 30,
					5: 30,
					'7-3': 30,
					9: 30,
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
				length: 1532,
				distance: 137.88,
				triggerAbnormal: {
					10152000: [2100, 390],
					10152001: [2100, 390]
				},
				noInterrupt: [4, 20],
				chains: {
					'2-1': 30,
					3: 30,
					5: 30,
					'7-3': 30,
					9: 30,
					10: 30,
					11: 30,
					13: 30,
					15: 30,
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
				requiredBuff: 10152000,
				noInterrupt: ['4-3', '4-4'],
				chains: {
					4: 4,
					5: 30,
					'7-1': 2,
					'7-2': 2,
					'7-3': 30,
					21: 3,
					40: 30
				}
			},
			4: {
				length: 1195,
				distance: -198.53,
				triggerAbnormal: { 10152002: 4100 },
			},
			30: { noInterrupt: [4] }
		},
		5: { // Burst Fire
			'*': {
				bodyRolls: {
					350905: { stamina: -5 }
				},
				blockCancelPacket: true,
				chains: {
					5: 1,
					7: 0,
					9: 0
				}
			},
			0: {
				length: 860,
				triggerAbnormal: { 10152053: [2100, 30] },
				consumeAbnormal: [10152002, 10152010, 10152011, 10152072, 10152080, 10152081, 10152083],
				noInterrupt: [5],
				noRetry: true
			},
			1: {
				fixedSpeed: 1,
				length: 125,
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
				triggerAbnormal: {
					10152010: 3100,
					10152084: 4100
				},
				noInterrupt: [6],
				projectiles: [20]
			},
			1: true,
			2: true,
			20: {
				type: 'userProjectile',
				flyingSpeed: 800
			}
		},
		7: { // Arcane Barrage
			'*': {
				length: 1533,
				triggerAbnormal: {
					//30050: 3100, // -15~20
					10152010: [3100, 25],
					//10152040: [3100, 25]
				},
				noInterrupt: [7]
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
				consumeAbnormal: [30050, 10152000, 10152001, 10152002, 10152010, 10152011, 10152040, 10152072, 10152080, 10152083],
				noInterrupt: ['7-3']
			}
		},
		9: { // Mana Missiles
			'*': { length: 1200 },
			0: {
				type: 'charging',
				length: 1200,
				noInterrupt: [9, 20],
				lastChargeStage: 0
			},
			10: {
				distance: -50,
				noRetry: true,
				noInterrupt: ['9-10'],
				projectiles: [21, 22]
			},
			11: {
				distance: -100,
				noRetry: true,
				noInterrupt: ['9-11'],
				projectiles: [21, 22, 23, 24, 25]
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
				length: 1320,
				noInterrupt: [10, 20],
				projectiles: [20],
				chains: {
					1: null,
					'2-1': null,
					3: null,
					4: null,
					5: null,
					'7-3': null,
					11: null,
					13: null,
					15: null,
					19: null,
					40: null
				}
			},
			1: true,
			2: true,
			20: {
				type: 'userProjectile',
				flyingSpeed: 700,
				flyingDistance: 350
			},
			30: true
		},
		11: { // Rocket Jump
			'*': {
				CC: ["evasive", "extended"],
				length: 1400,
				noInterrupt: [3, 11, 15, 20],
				distance: 415.45,
				chains: {
					1: 30,
					'2-1': 30,
					3: 30,
					4: 30,
					5: 30,
					'7-3': 30,
					9: 30,
					10: 30,
					13: 30,
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
					1: null,
					'2-1': null,
					3: null,
					4: null,
					5: null,
					'7-3': null,
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
			'*': {
				fixedSpeed: 1,
				length: 1320,
				triggerAbnormal: { 10152072: [4100, 485] },
				noInterrupt: [15, 20],
				chains: {
					1: 30,
					'2-1': 30,
					3: 30,
					4: 30,
					5: 30,
					'7-3': 30,
					9: 30,
					10: 30,
					11: 30,
					13: 30,
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
				length: 1433,
				//triggerAbnormalOnce: {10152251: 0x7fffffff },				
				consumeAbnormal: [10152000, 10152001, 10152010, 10152011],
				noInterrupt: [18]
			},
			1: true,
			2: true
		},
		19: { // ST
			'*': {
				length: 1325,
				consumeAbnormal: [10152000, 10152001, 10152010, 10152011],
				projectiles: [20],
				chains: {
					1: null,
					'2-1': null,
					3: null,
					4: null,
					5: null,
					'7-3': null,
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
			20: {
				type: 'userProjectile',
				flyingSpeed: 700,
				flyingDistance: 450
			},
			30: true
		},
		20: { // Retaliate
			0: { // Kd animation consumes abnormals
				type: 'retaliate',
				length: 1500,
				noRetry: true
			}
		},
		/*
		21: { // Command: Recall 
			0: { 
				length: null,
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
				consumeAbnormal: [10152000, 10152001, 10152010, 10152011, 10152251]
			},
			2: { // Follow!
				 triggerAbnormal: { 10152251: 0x7fffffff },
				 consumeAbnormal: [10152000, 10152001, 10152010, 10152011, 10152250]
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
				consumeAbnormal: [10152002, 10152010, 10152011, 10152072, 10152080, 10152081, 10152083],
				noInterrupt: [11],
				distance: 172.5,
				forceClip: true
			}
		}
	},
	10: { // Brawler
		1: { // Punch
			'*': {
				length: 1575,
				distance: 71.28,
				triggerAbnormal: { 10153060: 3000 },
				consumeAbnormalEnd: 10153060,
				noInterrupt: ['1-3', 22, 24, 26],
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
					14: 30,
					15: 30,
					16: 30,
					17: 30,
					18: 30,
					20: 30,
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
				length: 1800,
				distance: 84,
				triggerAbnormal: { 10153002: 0x7fffffff },
				consumeAbnormalEnd: 10153002
			},
			3: {
				length: 1925,
				distance: 131.2,
				triggerAbnormal: { 10153003: 0x7fffffff },
				consumeAbnormalEnd: 10153003
			},
			4: {
				length: 1950,
				distance: 142.86,
				triggerAbnormal: { 10153004: 0x7fffffff },
				consumeAbnormalEnd: 10153004
			},
			10: {
				type: 'holdInfinite',
				fixedSpeed: 1,
				//length: 800,
				distance: 33.38,
				triggerAbnormal: { 10153006: 0x7fffffff },
				consumeAbnormalEnd: 10153006,
				endType51: true
			},
			11: {
				type: 'holdInfinite',
				fixedSpeed: 1,
				//length: 800,
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
			0: {
				fixedSpeed: 1,
				length: 29900,
				noRetry: true
			},
			1: false
		},
		4: { // Ground Pounder
			'*': {
				CC: "extended",
				noInterrupt: [4],
				length: 3225,
				chains: {
					1: 30,
					2: 30,
					'3-1': 30,
					//4: 30,
					5: 30,
					6: 30,
					7: 30,
					8: 30,
					9: 30,
					10: 30,
					14: 30,
					15: 30,
					16: 30,
					17: 30,
					18: 30,
					20: 30,
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
				distance: [0, 135],
			}
		},
		6: { // Haymaker
			'*': {
				length: [1025, 1825],
				distance: [0, 171.61],
				abnormals: {
					31120: { chain: 31 }
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
					14: 30,
					15: 30,
					16: 30,
					17: 30,
					18: 30,
					20: 30,
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
			'*': {
				length: 860,
				distance: 105,
				noInterrupt: [7],
				/*
				chains: {
					1: 30,
					2: 30,
					'3-1': 30,
					4: 30,
					5: 30,
					6: 30,
					//7: 30,
					8: 30,
					9: 30,
					10: 30,
					14: 30,
					15: 30,
					16: 30,
					17: 30,
					18: 30,
					20: 30,
					22: 30,
					24: 30,
					26: 30,
					40: 30
				}
				*/
				hasChains: true
			},
			0: true,
			30: true
		},
		8: { // Piledriver
			'*': {
				length: 1950,
				distance: 164.94,
				abnormals: {
					31120: { chain: 31 }
				},
				chains: {
					1: 30,
					2: 30,
					'3-1': 30,
					4: 30,
					5: 30,
					6: 30,
					7: 30,
					//8: 30,
					9: 30,
					10: 30,
					14: 30,
					15: 30,
					16: 30,
					17: 30,
					18: 30,
					20: 30,
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
			'*': {
				fixedSpeed: 1,
				length: 1540,
				distance: 40,
				noInterrupt: [9],
				abnormals: {
					31120: { chain: 31 }
				},
				/*
				chains: {
					1: 30,
					2: 30,
					'3-1': 30,
					4: 30,
					5: 30,
					6: 30,
					7: 30,
					8: 30,
					//9: 30,
					10: 30,
					14: 30,
					15: 30,
					16: 30,
					17: 30,
					18: 30,
					20: 30,
					22: 30,
					24: 30,
					26: 30,
					40: 30
				},
				*/
				hasChains: true
			},
			1: true,
			2: true,
			30: true,
			31: true
		},
		10: { // Counterpunch
			'*': {
				CC: "extended",
				noInterrupt: [10],
				length: 1855,
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
					//10: 30,
					14: 30,
					15: 30,
					16: 30,
					17: 30,
					18: 30,
					20: 30,
					22: 30,
					24: 30,
					26: 30,
					40: 30
				}
			},
			0: true,
			30: true
		},
		13: { // Provoke
			'*': {
				fixedSpeed: 1,
				length: 1291
			},
			1: true,
			2: true
		},
		14: { // Infuriate
			'*': {
				length: 1666,
				noInterrupt: [14],
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
					//14: 30,
					15: 30,
					16: 30,
					17: 30,
					18: 30,
					20: 30,
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
			'*': {
				length: 1305.44,
				distance: 133.27,
				noInterrupt: [15],
				requiredBuff: 10153503,
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
					14: 30,
					//15: 30,
					16: 30,
					17: 30,
					18: 30,
					20: 30,
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
			'*': {
				length: 2066,
				distance: 134,
				/*
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
					14: 30,
					15: 30,
					//16: 30,
					17: 30,
					18: 30,
					20: 30,
					22: 30,
					24: 30,
					26: 30,
					40: 30
				},
				*/
				hasChains: true
			},
			1: true,
			2: true,
			30: true
		},
		18: { // Growing Fury
			'*': {
				length: 1371.66,
				requiredBuff: 10153050,
			},
			1: { hasChains: true },
			2: true,
			30: true
		},
		19: { // Invigorating Rage
			'*': {
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
			'*': {
				fixedSpeed: 1,
				length: 1275,
				// toggleOnAbnormality: 10153040 can't use this skill when GF is active
			},
			1: true,
			2: true
		},
		22: { // Flying Kick
			0: {
				length: 1815,
				distance: 245.21,
				toggleOnAbnormality: 425100,
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
					'3-1': 30,
					4: 30,
					5: 30,
					6: 30,
					7: 30,
					8: 30,
					9: 30,
					10: 30,
					14: 30,
					15: 30,
					16: 30,
					17: 30,
					18: 30,
					20: 30,
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
		24: { // 2.54cm Punch / todo: check
			'*': {
				noRetry: true,
				distance: 16.59,
				toggleOnAbnormality: 425100,
				length: 2000,
				abnormals: {
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
					'3-1': 30,
					4: 30,
					5: 30,
					6: 30,
					7: 30,
					8: 30,
					9: 30,
					10: 30,
					14: 30,
					15: 30,
					16: 30,
					17: 30,
					18: 30,
					20: 30,
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
			'*': {
				noInterrupt: [26],
				noRetry: true
			},
			0: {
				length: [178.57, 412.85],
				distance: [0, 30],
				toggleOnAbnormality: [425100, 425101],
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
					'3-1': 2,
					4: 2,
					5: 2,
					6: 2,
					7: 2,
					8: 2,
					9: 2,
					10: 2,
					14: 2,
					15: 2,
					16: 2,
					17: 2,
					18: 2,
					20: 2,
					22: 2,
					24: 2,
					'26-0': 2,
					'26-2': 3,
					'26-3': 4,
					'26-4': 5,
					'26-5': 6,
					40: 2
				}
			},
			1: { // todo: check
				length: [178.57, 412.85],
				distance: [0, 30],
			},
			2: {
				length: 782,
				distance: 6,
				abnormals: {
					10153190: { chain: 2 },
					10153191: { chain: 3 },
					10153192: { chain: 4 },
					10153193: { chain: 5 },
					10153194: { chain: 6 },
					10153195: { chain: 7 } // todo: check
				},
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
				length: 2780,
				distance: 24
			}
		},
		40: { // Quick Dash
			'*': {
				CC: ["evasive", "extended"],
				fixedSpeed: 1,
				length: 588,
				distance: 144,
				forceClip: true,
				hasChains: true,
				noRetry: true,
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

		91: { // Awakening Eyes Aura
			0: { length: 3000 }
		}
	},
	11: { // Ninja
		'*': { consumeAbnormal: [10154000, 10154001, 10154002, 10154003, 10154004, 10154005, 10154006] },
		1: { // Combo Attack
			'*': {
				fixedSpeed: 1,
				length: 650,
				distance: 44.86,
				triggerAbnormal: { 10154000: 1650 },
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
				length: 1125,
				distance: 52.47,
				consumeAbnormal: 10154000,
				triggerAbnormal: { 10154001: 1500 }
			},
			2: {
				length: 1200,
				distance: 69.96,
				consumeAbnormal: 10154001,
				triggerAbnormal: { 10154002: 1400 }
			},
			3: {
				length: 1225,
				distance: 38.01,
				consumeAbnormal: 10154002,
				triggerAbnormal: { 10154003: 1400 }
			},
			4: {
				length: 1700,
				distance: 54.69,
				consumeAbnormal: 10154003,
				triggerAbnormal: { 10154004: 1400 }
			},
			5: {
				length: 1500,
				distance: 37.80,
				consumeAbnormal: 10154004,
				triggerAbnormal: { 10154005: 1600 }
			},
			6: {
				length: 1150,
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
				length: 1125,
				distance: 52.47,
				consumeAbnormal: 10154000,
				triggerAbnormal: { 10154001: 1500 }
			},
			42: {
				length: 1200,
				distance: 69.96,
				consumeAbnormal: 10154001,
				triggerAbnormal: { 10154002: 1400 }
			},
			43: {
				length: 1225,
				distance: 38.01,
				consumeAbnormal: 10154002,
				triggerAbnormal: { 10154003: 1400 }
			},
			44: {
				length: 1700,
				distance: 54.69,
				consumeAbnormal: 10154003,
				triggerAbnormal: { 10154004: 1400 }
			},
			45: {
				length: 1500,
				distance: 37.80,
				consumeAbnormal: 10154004,
				triggerAbnormal: { 10154005: 1600 }
			},
			46: {
				length: 1150,
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
		2: { // Shadow Jump
			'*': {
				CC: ["evasive", "extended"],
				fixedSpeed: 1,
				length: 650.3,
				distance: 175,
				forceClip: true,
				abnormals: {
					10154010: { chain: 30 }
				}
			},
			0: true,
			30: true
		},
		3: { // Leaves on the Wind
			'*': {
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
					//17: 30,
					18: null,
					19: null,
					20: null
				}
			},
			0: true,
			30: true
		},
		4: { // Jagged Path
			'*': { length: 665 },
			1: {
				CC: ["evasive", "extended"],
				type: 'dash',
				fixedSpeed: 1,
				distance: 469,
				noInterrupt: [4],
			},
			2: {
				CC: ["evasive", "extended"],
				type: 'dash',
				fixedSpeed: 1,
				distance: 469,
				noInterrupt: [4],
			},
			10: { length: 1500 },
			11: {
				length: 300,
				distance: 150
			}
		},
		5: { // Impact Bomb
			'*': {
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
				noRetry: true,
			},
			0: true,
			30: true
		},
		6: { // One Thousand Cuts
			'*': {
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
				type: 'dash',
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
				noInterrupt: [7],
			}
		},
		8: { // Fire Avalanche
			'*': {
				triggerAbnormal: { 10154080: 10000 },
				length: [700, 1375, 325],
				distance: [0, 367.31, 0],
				abnormals: {
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
				length: [1375, 325],
				distance: [411.39, 0]
			},
			2: {
				triggerAbnormal: { 10154082: 1 },
				consumeAbnormal: 10154081,
				length: [1375, 325],
				distance: [455.47, 0]
			},
			30: true
		},
		9: { // Smoke Bomb
			'*': {
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
				type: 'retaliate',
				length: 1633,
				noRetry: true
			}
		},
		11: { // Focus
			'*': {
				length: 1431,
				noInterrupt: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 12, 13, 14, 15, 16, 17, 18, 19, 20]
			},
			0: true,
			50: true
		},
		12: { // Skyfall
			'*': {
				length: 1320,
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
			'*': {
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
			'*': {
				length: 1429,
				distance: 162,
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
			'*': {
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
			'*': {
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
			'*': {
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
			'*': {
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
			'*': {
				length: [225, 825],
				distance: 127.5,
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
				length: 1258
			}
		},

		91: { // Awakening Eyes Aura
			0: { length: 3000 }
		}
	},
	12: { // Valkyrie
		1: { // Slash
			'*': {
				length: 1107.45,
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
		2: { // Overhead Slash
			'*': {
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
					19: 30,
					20: 30
				}
			},
			0: true,
			30: true
		},
		3: { // Glaive Strike
			'*': {
				length: 2457,
				distance: 105.62,
				requiredBuff: 10155112,
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
					19: 30,
					20: 30
				}
			},
			0: true,
			30: true
		},
		4: { // Charge tod: fix
			0: {
				type: 'dash',
				fixedSpeed: 1,
				length: 550,
				distance: 436,
				//noInterrupt: ['4-0', '4-10', '4-11'],
				noRetry: true
			},
			10: { length: 900 },
			11: {
				length: 400,
				distance: 50,
				noInterrupt: [1, 2, '4-11', 5, 6, 7, 8, 10, 11, 12, 13, 14, 15, 16, 17, 19, 20, 21]
			}
		},
		5: { // Maelstrom
			'*': {
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
					19: 30,
					20: 30
				}
			},
			0: true,
			30: true
		},
		6: { // Leaping Strike
			'*': {
				length: 1772.8,
				distance: 105,
				chains: {
					1: 30,
					2: 30,
					3: 30,
					'4-10': 30,
					'4-11': 30,
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
					20: 30
				}
			},
			0: true,
			30: true
		},
		7: { // Spinning Death
			'*': {
				length: 1786.14,
				distance: 139.72,
				noInterrupt: ['7-2'],
				abnormals: {
					10155070: { chain: 1 },
					10155071: { chain: 2 }
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
					19: 30,
					20: 30
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
			'*': {
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
					19: 30,
					20: 30
				}
			},
			0: true,
			1: { length: 2017 },
			30: true
		},
		9: { // Ground Bash
			'*': {
				length: 1459.62,
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
		10: { // Dream Slash // need to check chains
			'*': {
				length: 1772.52,
				distance: 11.78,
				noInterrupt: [10],
				glyphs: {
					33020: { speed: 0.2 }
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
			'*': {
				length: 2725,
				chains: {
					1: 30,
					2: 30,
					3: 30,
					'4-10': 30,
					'4-11': 30,
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
					19: 30,
					20: 30
				}
			},
			0: true,
			30: true
		},
		13: { // Bloodflower
			'*': {
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
					19: 30,
					20: 30
				}
			},
			0: true,
			30: true
		},
		14: { // Evasion
			'*': {
				CC: ["evasive", "extended"],
				fixedSpeed: 1,
				length: 833.33,
				distance: 188.18,
				forceClip: true,
			},
			0: { triggerAbnormal: { 10155020: 4000 } },
			1: {
				consumeAbnormal: 10155020,
				requiredBuff: 10155020
			}
		},
		15: { // Windslash
			'*': {
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
				length: 1079.23
			}
		},
		/*18: { // Retaliate
			0: { 
				type: 'retaliate',
				length: 1630,
				noRetry: true 
			}
		},*/
		19: { // Reclamation
			'*': {
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
					18: 30,
					20: 30
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
				requiredBuff: 10155201
			}
		},

		91: { // Awakening Eyes Aura
			0: { length: 3000 }
		}
	}
}