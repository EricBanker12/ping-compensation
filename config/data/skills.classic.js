/*	Notes:
	* Processing order is 'noInterrupt' > 'abnormals' > 'chains'.
	* Abnormal chains aren't needed if the client is already sending the correct skillId!
	* Default Abnormal application delay is 10 unless specified utilizing an array.
	* Todo: Add fixed aspd on charge stages

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
			'*': {
				noInterrupt: [1, 32],
				noRetry: true
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
					21067: { stamina: -100 }
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
				race: { 9: { distance: 68.26 } }
			}
		},
		4: { // Rain of Blows
			'*': {
				distance: 151.87,
				race: {
					0: {
						distance: 150.25
					},
					2: {
						distance: 152.74
					},
					3: {
						distance: 143.35
					},
					4: {
						distance: 142.61
					},
					5: {
						distance: 150.72
					},
					6: {
						distance: 143.47
					},
					7: {
						distance: 159
					},
					8: {
						distance: 149
					},
					10: {
						distance: 96
					}
				}
			},
			0: {
				length: 2545.45,
				noInterrupt: [1, 2, 3, 4, 5, 8, 9, 10, 11, 12, 13, 16, 17, 19, 22, 23, 28, 29, 30, 31, 32],
				chains: {
					18: 30,
					21: 30,
					27: 30
				}
			},
			30: { length: 2000 }
		},
		5: { // Battle Cry
			0: {
				length: 1666,
				noInterrupt: [32],
				glyphs: { 21040: { speed: 0.5 } }
			}
		},
		8: { // Assault Stance
			'*': {
				length: 566.4,
				noInterrupt: [32]
			},
			0: { stamina: 1000 },
			50: true
		},
		9: { // Defensive Stance
			'*': {
				length: 566.4,
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
					1: {
						length: 2100
					}, // F.Human
					3: {
						length: 2033
					}, // F.Helf
					6: {
						length: 2033
					}, // M.Casta
					9: {
						length: 2033
					} // Elin
				}
			}
		},
		11: { // Poison Blade
			0: {
				length: 833,
				distance: 40,
				noInterrupt: [30, 32],
				race: {
					0: { distance: 35 },
					1: { distance: 44.9627571 },
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
				noInterrupt: [32]
			}
		},
		13: { // Retaliate
			0: {
				type: 'retaliate',
				length: 1633,
				noInterrupt: [32],
				noRetry: true
			}
		},
		14: { // Mangle
			'*': {
				length: 633,
				noInterrupt: [32],
				race: { 4: { length: 733 } }
			},
			0: true,
			50: true
		},
		16: { // Charging Slash
			0: {
				CC: ["evasive", "extended"],
				type: 'dash',
				fixedSpeed: 1,
				length: 1105,
				distance: 467.88,
				//noRetry: true,
			},
			1: { length: 800 }
		},
		17: { // Vortex Slash
			0: { length: 1600 }
		},
		18: { // Combative Strike
			0: {
				length: 1100,
				distance: 120.28,
				noInterrupt: [32],
				race: {
					1: {
						distance: 122.634071
					},
					3: {
						distance: 127.113258
					},
					4: {
						distance: 110.464142
					},
					7: {
						distance: 130
					},
					8: {
						distance: 128.889465
					},
					9: {
						distance: 138.28392
					},
					10: {
						distance: 94.4887
					}
				}
			}
		},
		19: { // Rising Fury
			'*': { noInterrupt: [19, 32] },
			0: {
				length: 733,
				distance: 144.8458,
				race: {
					0: {
						distance: 148.1982
					},
					1: {
						distance: 157.281418
					},
					3: {
						distance: 155.302856
					},
					5: {
						distance: 143.269958
					},
					6: {
						distance: 170.433487
					},
					7: {
						distance: 162
					},
					8: {
						distance: 161.738342
					},
					9: {
						distance: 170.671234
					},
					10: {
						distance: 132.614059
					}
				}
			},
			1: {
				length: 1400,
				distance: 100.113693,
				race: {
					0: {
						distance: 92.66016
					},
					1: {
						distance: 88.17459
					},
					3: {
						distance: 92.1048
					},
					5: {
						distance: 101.689529
					},
					6: {
						distance: 117.307358
					},
					7: {
						distance: 85
					},
					8: {
						distance: 116.629524
					},
					9: {
						distance: 122.342155
					},
					10: {
						distance: 83.01158
					}
				}
			}
		},
		20: { // Deadly Gamble
			0: {
				fixedSpeed: 1,
				length: 1433, // or 3000
				noInterrupt: [32]
			}
		},
		21: { // Cascade of Stuns
			0: {
				length: 1400,
				distance: 100.113693,
				noInterrupt: [32],
				race: {
					0: {
						distance: 92.66016
					},
					1: {
						distance: 88.17459
					},
					3: {
						distance: 92.1048
					},
					5: {
						distance: 101.689529
					},
					6: {
						distance: 117.307358
					},
					7: {
						distance: 85
					},
					8: {
						distance: 116.629524
					},
					9: {
						distance: 122.342155
					},
					10: {
						distance: 83.01158
					}
				}
			}
		},
		23: { // Spinning Counter
			0: {
				length: 1091,
				disableOnAbnormal: 100299,
				enableOnAbnormal: 100700,
				distance: 68.80444,
				noInterrupt: [32],
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
				length: [1363.37, 1393.37],
				noInterrupt: [32]
			}
		},
		25: { // Command: Attack
			0: {
				fixedSpeed: 1,
				length: 700,
				noInterrupt: [32],
				enableOnAbnormal: 102600,
			}
		},
		26: { // Command: Follow
			0: {
				fixedSpeed: 1,
				length: 700,
				noInterrupt: [32],
				enableOnAbnormal: 102600,
			}
		},
		27: { // Pounce
			0: {
				length: 2000,
				distance: 180,
				noInterrupt: [32],
				glyphs: {
					21048: { speed: 0.3 },
					21082: { speed: 0.3 }
				}
			}
		},
		28: { // Traverse Cut
			0: {
				length: 2000,
				distance: 160,
				noInterrupt: [1, 2, 3, 4, 8, 9, 10, 12, 13, 16, 17, 19, 21, 22, 28, 29, 30, 31, 32],
				chains: {
					11: 30,
					18: 30,
					27: 30
				}
			},
			30: {
				length: 2666.66,
				distance: 210
			}
		},
		29: { // Blade Draw
			0: {
				length: 3000,
				distance: 94.5,
				noInterrupt: [1, 2, 3, 4, 5, 8, 9, 10, 11, 12, 13, '16-0', 18, '19-0', 21, 22, 23, 29, 30, 31, 32],
				chains: {
					16: 30,
					17: 30,
					19: 30,
					28: 30
				}
			},
			30: {
				length: 1333.33,
				distance: 135
			}
		},
		30: { // Scythe
			'*': { distance: 150 },
			0: {
				length: 1833,
				noInterrupt: [1, 3, 5, 8, 9, 10, 12, 13, 16, 17, 18, 19, 21, 22, 23, 28, 30, 31, 32],
				abnormals: {
					100801: {
						skill: 380100
					},
					104110: {
						chain: 30
					}
				},
				chains: {
					2: 30,
					4: 30,
					11: 30,
					29: 30
				}
			},
			30: {
				length: 1387,
				abnormals: {
					100801: {
						skill: 380130
					}
				}
			}
		},
		31: { // Reaping Slash
			'*': { distance: 110 },
			0: {
				length: 2292,
				noInterrupt: [1, 2, 3, 5, 8, 9, 10, 11, 12, 13, 16, 17, 19, 21, 22, 23, 28, 29, 30],
				chains: {
					4: 30,
					18: 30
				}
			},
			30: {
				length: 1667
			}
		},
		32: { // Cross Parry
			0: {
				CC: "extended",
				type: 'holdInfinite',
				fixedSpeed: 1,
				consumeAbnormal: [102010, 104110], // This should exist for all skills but this is the only real case where it's needed in practice
				enableOnAbnormal: [100200, 100201],
				stamina: 50
			}
		}
	},
	1: { // Lancer
		1: { // Combo Attack /parse distances
			'*': { noInterrupt: [1, 2] },
			0: {
				length: 657.27,
				distance: 74.45,
				race: {
					0: {
						distance: 78.55
					}, // M.Human
					4: {
						distance: 70
					}, // M.Aman
					5: {
						distance: 75
					}, // F.Aman
					8: {
						distance: 72.89
					} // Popori
				}
			},
			1: {
				length: 1021,
				distance: 19.2,
				race: {
					0: {
						distance: 25
					}, // M.Human
					1: {
						distance: 28.39
					}, // F.Human
					2: {
						distance: 30.8
					}, // M.Helf
					4: {
						distance: 25
					}, // M.Aman
					5: {
						distance: 30.52
					}, // F.Aman
					8: {
						distance: 39.05
					} // Popori
				}
			},
			2: {
				length: 1818.1,
				distance: 66.07,
				race: {
					0: {
						distance: 70
					}, // M.Human
					2: {
						distance: 70
					}, // M.Helf
					4: {
						distance: 60
					}, // M.Aman
					5: {
						distance: 54.48
					}, // F.Aman
					8: {
						distance: 41.06
					} // Popori
				}
			}
		},
		2: { // Stand Fast
			0: {
				CC: "extended",
				type: 'holdInfinite',
				noRetry: true,
				fixedSpeed: 1,
				stamina: 50
			}
		},
		3: { // Onslaught
			'*': {
				distance: [0, 100, 100, 100, 100, 40],
				noInterrupt: [1, 2, 3, 4, 8, 9, 10, 11, 12, 13, 15, 18, 21, 23, 24, 25, 26],
				abnormals: { 22060: { speed: 0.25 } },
				chains: { 5: 30 },
				race: { 9: { distance: [0, 100, 100, 100, 100, 62.7] } }
			},
			0: { length: [939, 514.54, 514.54, 514.54, 393.63, 766.36] },
			30: { length: [688.66, 377.33, 377.33, 377.33, 288.66, 562] }
		},
		4: { // Challenging Shout
			0: {
				length: 2203,
				noInterrupt: [2],
				glyphs: {
					22056: { speed: 0.25 },
					22085: { speed: 0.25 }
				}
			}
		},
		5: { // Shield Bash
			0: {
				length: 839.1,
				distance: 30,
				noInterrupt: [2],
				race: { 9: { distance: 43.69 } }
			}
		},
		7: { // Guardian Shout
			0: {
				length: 566.4,
				noInterrupt: [2],
				race: { 8: { length: 839.1 } }
			}
		},
		8: { // Shield Counter
			0: {
				length: 1455.33,
				distance: 90,
				onlyDefenceSuccess: true,
				race: {
					2: {
						distance: 95
					}, // M.Helf
					4: {
						distance: 85
					}, // M.Aman
					5: {
						distance: 85
					}, // F.Aman
					9: {
						distance: 108.06
					} // Elin
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
			0: {
				length: 933,
				distance: 30,
				noInterrupt: [2],
				race: { 9: { distance: 43.69 } }
			}
		},
		11: { // Retaliate
			0: {
				type: 'retaliate',
				length: 1633,
				noRetry: true
			}
		},
		12: { // Infuriate
			0: {
				length: 2433,
				noInterrupt: [2]
			}
		},
		13: { // Spring Attack
			'*': { distance: 85 },
			0: {
				length: 2799,
				noInterrupt: ['1-0', '1-1', 2, 3, 4, 8, 9, 10, 11, 12, 13, 15, '18-0', 21, 23, 24, 25, 26],
				chains: {
					1: 30,
					5: 30,
					18: 30
				}
			},
			30: { length: 1849.5 }
		},
		15: { // Charging Lunge
			0: {
				CC: "extended",
				type: 'dash',
				fixedSpeed: 1,
				length: 1115,
				distance: 474.5
			},
			1: {
				length: 933,
				distance: 40,
				race: {
					3: {
						length: 966
					},
					4: {
						length: 966
					},
					6: {
						length: 966
					},
					9: {
						distance: 62.7
					}
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
			'*': { noInterrupt: [2, 18] },
			0: {
				length: 598,
				distance: 100.13,
				abnormals: { 201550: { speed: 0.2 } },
				race: {
					2: { // M.Helf
						length: 503,
						distance: 102.7
					},
					3: {
						distance: 103.42
					}, // F.Helf
					4: {
						distance: 95
					}, // M.Aman
					7: {
						distance: 116.2
					},
					8: {
						distance: 92.39
					}, // Popori
					9: {
						distance: 122.66
					} // Elin
				}
			},
			1: {
				length: 800,
				distance: 74.84, // M.Aman
				race: {
					3: {
						distance: 70.31
					}, // M.Human
					2: {
						distance: 80.43
					}, // M.Helf
					4: {
						distance: 87
					}, // M.Aman
					8: {
						distance: 89.46
					}, // Popori
					9: {
						distance: 66.04
					} // Elin
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
		20: { // Menacing Wave
			0: {
				fixedSpeed: 1,
				length: [700, 800],
				noInterrupt: [2]
			}
		},
		21: { // Lockdown Blow
			0: {
				length: 1399,
				distance: 100.13, // M.Human
				race: {
					1: {
						distance: 105.13
					}, //
					2: { // M.Helf
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
					}, // M.Aman
					6: {
						distance: 110.39
					}, // F.Aman
					7: {
						distance: 116.18
					}, // F.Aman
					8: {
						distance: 92.39
					}, // Popori
					9: {
						distance: 122.66
					},
					10: {
						distance: 92.18
					}
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
				length: [733, 833],
				enableOnAbnormal: 201000,
				noInterrupt: [2]
			}
		},
		24: { // Chained Leash
			0: { length: [733, 833] },
		},
		25: { // Wallop
			'*': { CC: "extended" },
			0: {
				length: 2391.3,
				distance: 100,
				noInterrupt: [1, 3, 4, 5, 9, 11, 12, 21, 23, 24, 25, 26],
				chains: {
					8: 30,
					10: 30,
					13: 30,
					15: 30,
					18: 30
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
		}
	},
	2: { // Slayer
		1: { // Combo Attack
			'*': { noInterrupt: [1] },
			0: {
				length: 839.1,
				distance: 36.68,
				race: {
					0: {
						distance: 36.68
					}, // M.Human
					2: {
						distance: 50.68
					}, // M.Helf
					4: {
						distance: 40
					}, // M.Aman
					5: {
						distance: 36.68
					}, // F.Aman
					6: {
						distance: 36.68
					}, // M.Casta
					7: {
						distance: 60
					}, // F.Casta
					8: {
						distance: 31.53
					}, // Popori
					9: {
						distance: 36.68
					}, // Elin
					10: {
						distance: 25.08
					} // Baraka
				}
			},
			1: {
				length: 1021,
				distance: 35.68,
				race: {
					0: {
						distance: 35.68
					}, // M.Human
					2: {
						distance: 30.68
					}, // M.Helf
					4: {
						distance: 35
					}, // M.Aman
					5: {
						distance: 35.68
					}, // F.Aman
					6: {
						distance: 35.68
					}, // M.Casta
					7: {
						distance: 17
					}, // F.Casta
					8: {
						distance: 49.4
					}, // Popori
					9: {
						distance: 35.68
					}, // Elin
					10: {
						distance: 32.95
					} // Baraka
				}
			},
			2: {
				length: 748.2,
				distance: 28.05,
				race: {
					0: {
						distance: 28.05
					}, // M.Human
					2: {
						distance: 33.05
					}, // M.Helf
					3: {
						distance: 24.225
					},
					4: {
						distance: 20
					}, // M.Aman
					5: {
						distance: 28.05
					}, // F.Aman
					6: {
						distance: 22.3
					}, // M.Casta
					7: {
						distance: 23
					}, // F.Casta
					8: {
						distance: 19.33
					}, // Popori
					9: {
						distance: 28.05
					}, // Elin
					10: {
						distance: 22.5
					} // Baraka
				}
			},
			3: {
				length: 1636.36,
				distance: 46.76,
				race: {
					3: {
						distance: 45.33
					},
					4: {
						distance: 40
					}, // M.Aman
					5: {
						distance: 64.36
					}, // F.Aman
					6: {
						distance: 118.2
					}, // M.Casta
					7: {
						distance: 45
					}, // F.Casta
					8: {
						distance: 19.85
					}, // Popori
					10: {
						distance: 37.5
					} // Baraka
				}
			}
		},
		2: { // Knockdown Strike
			0: {
				length: 3112,
				distance: 220.47,
				abnormals: { 23070: { speed: 0.25 } },
				race: {
					3: {
						distance: 213.63
					}, // M.Helf
					4: {
						distance: 155
					}, // M.Aman
					5: {
						distance: 174.84
					}, // F.Aman
					6: {
						distance: 201.64
					}, // M.Casta
					7: {
						distance: 200
					}, // F.Casta
					8: {
						distance: 175.81
					}, // Popori
					10: {
						distance: 205.95
					} // Baraka
				}
			}
		},
		3: { // Whirlwind
			0: {
				length: 3142,
				distance: 128.69,
				abnormals: {
					301150: { speed: 0.20 },
					23080: { speed: 0.25 }
				},
				race: {
					0: { // M.Human
						length: 3112,
						distance: 123.21
					},
					2: {
						distance: 116.49
					}, // M.Helf
					3: {
						distance: 99.6
					}, // F.Helf
					4: {
						distance: 125
					}, // M.Aman
					5: {
						distance: 137.22
					}, // F.Aman
					6: {
						distance: 123.21
					}, // M.Casta
					7: {
						distance: 155
					}, // F.Casta
					8: {
						distance: 116.09
					}, // Popori
					10: { // Baraka
						length: 3112,
						distance: 91.21
					}
				}
			}
		},
		4: { // Evasive Roll
			0: {
				CC: ["evasive", "extended"],
				length: 1363.63,
				distance: 150,
				forceClip: true,
				noRetry: true
			}
		},
		5: { // Dash
			0: {
				CC: "evasive",
				withoutWeapon: true,
				fixedSpeed: 1,
				length: 700
			}
		},
		7: { // Thriumphant Shout
			0: {
				fixedSpeed: 1,
				length: 700
			}
		},
		8: { // Overhand Strike
			'*': {
				distance: 171.14,
				race: {
					3: {
						distance: 152.2
					}, // F.Helf
					4: {
						distance: 145
					}, // M.Aman
					5: {
						distance: 134.53
					}, // F.Aman
					6: {
						distance: 161.14
					}, // M.Casta
					8: {
						distance: 150
					}, // Popori
					9: {
						distance: 169.65
					}, // Elin
					10: {
						distance: 151.14
					} // Baraka
				}
			},
			0: {
				length: 3375.7,
				noInterrupt: ['1-0', '1-1', '1-2', 4, 6, 8, 10, '14-0', '14-1', 17, 21, 23],
				chains: {
					1: 30,
					2: 30,
					3: 30,
					9: 30,
					12: 30,
					13: 30,
					14: 30,
					15: 30,
					16: 30
				}
			},
			30: { length: 1331.2 }
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
				type: 'retaliate',
				length: 1633,
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
					0: {
						distance: 166.56
					}, // M.Human
					2: {
						distance: 173.75
					}, // M.Helf
					3: {
						distance: 174.9
					}, // F.Helf
					4: {
						distance: 175
					}, // M.Aman
					5: {
						distance: 166.56
					}, // F.Aman
					6: {
						distance: 168.61
					}, // M.Casta
					7: {
						distance: 230
					}, // F.Casta
					8: {
						distance: 174.05
					}, // Popori
					10: {
						distance: 136.55
					} // Baraka
				}
			}
		},
		13: { // Stunning Backhand
			0: {
				length: 2133.33,
				distance: 76.71,
				race: {
					0: {
						distance: 62.07
					}, // M.Human
					2: {
						distance: 55.79
					}, // M.Helf
					3: {
						distance: 69.62
					}, // F.Helf
					4: {
						distance: 40
					}, // M.Aman
					5: {
						distance: 62.07
					}, // F.Aman
					6: {
						distance: 86.12
					}, // M.Casta
					7: {
						distance: 80
					}, // F.Casta
					8: {
						distance: 56.49
					}, // Popori
					10: {
						distance: 47.07
					} // Baraka
				}
			}
		},
		14: { // Distant Blade
			'*': {
				length: 600,
				distance: 75
			},
			0: {
				race: {
					2: {
						distance: 79.01
					}, // M.Helf
					3: {
						distance: 92.36
					} // F.Helf
				}
			},
			1: {
				race: {
					2: {
						distance: 70.99
					}, // M.Helf
					3: {
						distance: 68.07
					}, // F.Helf
					5: {
						distance: 100.02
					}, // F.Aman
					9: {
						distance: 100.02
					} // Elin
				}
			},
			2: {
				length: 1500,
				distance: 120,
				race: {
					3: {
						distance: 109.58
					}, // F.Helf
					5: {
						distance: 94.98
					}, // F.Aman
					6: {
						distance: 150
					}, // M.Casta
					8: {
						distance: 112.42
					}, // Popori
					9: {
						distance: 104.82
					} // Elin
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
					0: {
						distance: 96.26
					}, // M.Human
					1: {
						distance: 120.78
					}, // F.Human
					2: {
						distance: 103.85
					}, // M.Helf
					3: {
						distance: 91.79
					}, // F.Helf
					5: {
						distance: 96.25
					}, // F.Aman
					6: {
						distance: 135.85
					}, // M.Casta
					7: {
						distance: 140
					}, // F.Casta
					8: {
						distance: 141.74
					}, // Popori
					9: {
						distance: 142.53
					} // Elin
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
					0: {
						distance: 420
					}, // M.Human
					4: {
						distance: 420
					}, // M.Aman
					7: {
						distance: 419.33
					}, //F.Casta
					10: {
						distance: 420
					} // Baraka
				},
				level: [{
					emulateAttackSpeedBonus: 40
				}, {
					emulateAttackSpeedBonus: 50
				}],
				noRetry: true
			}
		},
		18: { // Overpower
			0: { length: 700 },
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
				emulateAttackSpeedBonus: 8,
				level: { 0: { emulateAttackSpeedBonus: 6 } }
			}
		},
		21: { // Exhausting Blow
			0: {
				length: 1200,
				distance: 75,
				race: {
					2: { distance: 79.01 }, // M.Helf
					3: { distance: 92.35 } // F.Helf
				}
			},
		},
		//22: Eviscerate(unused)
		23: { // Measured Slice
			'*': { distance: 189 },
			0: {
				length: 3691.25,
				noInterrupt: [1, 2, 3, 4, 6, 9, 10, 12, 13, 14, 15, 16, 17, 21, 23],
				chains: { 8: 30 }
			},
			30: { length: 1684.1 }
		}
	},
	3: { // Berserker
		1: { // Combo Attack
			'*': {
				noInterrupt: [1, 2],
				noRetry: true
			},
			0: {
				length: 1111.81,
				distance: 78,
				race: {
					0: { distance: 58.10235 },
					1: { distance: 61.9559364 },
					2: { distance: 54.869194 },
					3: { distance: 63.2354965 },
					4: { distance: 27.7150154 },
					5: {
						length: 1081.5,
						distance: 62.3418961
					},
					6: { distance: 55.6866646 },
					7: { distance: 64.0561 },
					8: { distance: 48.886 },
					9: { distance: 78.00602 },
					10: { distance: 44.2169533 }
				}
			},
			1: {
				length: 930,
				distance: 21.05,
				race: {
					0: { distance: 23.28463 },
					1: { distance: 23.28463 },
					2: { distance: 26.0233231 },
					3: { distance: 27.3276443 },
					4: { distance: 25 },
					5: { distance: 24.5182438 },
					6: { distance: 23.2733421 },
					7: { distance: 16.0538425 },
					8: { distance: 7.059998 },
					9: { distance: 21.04979 },
					10: { distance: 21.0849838 }
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
		2: { // Axe Block
			0: {
				CC: "extended",
				type: 'holdInfinite',
				fixedSpeed: 1
			}
		},
		3: { // Thunderstrike
			'*': {
				length: 1748,
				noRetry: true,
				distance: 87.28,
				race: {
					0: { distance: 69.704 },
					1: { distance: 79.030014 },
					2: { distance: 69.704 },
					3: { distance: 72.7862854 },
					4: { distance: 35 },
					5: { distance: 69.704 },
					6: { distance: 69.704 },
					7: { distance: 85.7396851 },
					8: { distance: 69.512 },
					9: { distance: 87.27145 },
					10: { distance: 64.88405 }
				}
			},
			0: {
				type: 'charging',
				fixedSpeed: 1,
				consumeAbnormal: 400900,
				length: [650, 650, 650],
				distance: false,
				noInterrupt: [2, 3, 10, 15, 18],
				glyphs: { 24067: { chargeSpeed: 0.25 } },
				abnormals: {
					24130: { chargeSpeed: 0.3 },
					400500: { chargeSpeed: 0.2 },
					400501: { chargeSpeed: 0.4 }
				},
				level: [
					{ length: 800 }, // 1300
					{ length: [800, 800] }, // 1150
					{ length: [800, 800] } // 1150
				]
			},
			10: { noInterrupt: ['3-10'] },
			11: { noInterrupt: ['3-11'] },
			12: { noInterrupt: ['3-12'] },
			13: {
				noInterrupt: ['3-13'],
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
					0: { distance: 75 },
					1: { distance: 78 },
					2: { distance: 70.79296 },
					3: { distance: 90.601 },
					4: { distance: 80 },
					5: { distance: 69.014 },
					6: { distance: 75 },
					7: { distance: 86.6047058 },
					8: { distance: 73.342 },
					9: { distance: 105.684364 },
					10: { distance: 70.22727 }
				}
			},
			0: {
				noInterrupt: [1, 2, '3-10', '3-11', '3-12', '3-13', 4, '10-10', '10-11', '10-12', 11, '10-13', 13, '15-10', '15-11', '15-12', '15-13', '15-14', '18-10', '18-11', '18-12', '18-13', 24],
				chains: { 6: 30 }
			},
			30: { length: 2336.55 },
		},
		5: { // Dash
			0: {
				withoutWeapon: true,
				CC: "evasive",
				fixedSpeed: 1,
				length: 700,
				noInterrupt: [2]
			}
		},
		6: { // Staggering Strike
			0: {
				length: 1293.63,
				distance: 80.47,
				noInterrupt: [2],
				race: {
					0: { distance: 66.209465 },
					1: { distance: 79.19432 },
					2: { distance: 82.33742 },
					3: { distance: 71.33583 },
					4: { distance: 50.072 },
					5: { distance: 66.209 },
					6: { distance: 66.209465 },
					7: { distance: 82.33742 },
					8: { distance: 53.4118347 },
					9: {
						length: 1263.63,
						distance: 80.4679947
					},
					10: { distance: 70 }
				}
			}
		},
		7: { // Mocking Shout
			0: {
				fixedSpeed: 1,
				length: [307.7, 1079],
				noInterrupt: [2],
				noRetry: true,
				glyphs: {
					24010: { speed: 0.5 },
					24055: { speed: 0.5 }
				}
			}
		},
		8: { // Fiery Rage
			0: {
				fixedSpeed: 1,
				length: 1414.54,
				noInterrupt: [2],
				race: { 7: { length: 1444.54 } } // F.Casta
			}
		},
		9: { // Thriumphant Shout
			0: {
				fixedSpeed: 1,
				length: 700,
				noInterrupt: [2]
			}
		},
		10: { // Cyclone
			'*': { noRetry: true },
			0: {
				type: 'charging',
				fixedSpeed: 1,
				canInstantCharge: { abnormal: 401701 },
				disableOnAbnormal: 401400,
				consumeAbnormal: [400900, 401404],
				length: [650, 650, 650],
				noInterrupt: ['28-0'],
				glyphs: {
					24009: { chargeSpeed: 0.25 },
					24052: { chargeSpeed: 0.25 },
					24096: { chargeSpeed: 0.3 }
				},
				abnormals: {
					400500: { chargeSpeed: 0.2 },
					400501: { chargeSpeed: 0.4 },
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
					2: {
						length: 1400
					},
					3: {
						length: 1800
					}, // F.Helf
					6: {
						length: 1366
					}
				}
			},
			11: {
				length: [366, 366, 1333],
				distance: [33.33, 33.33, 50],
				race: {
					2: {
						length: [366, 366, 1400]
					}, // M.Helf
					3: {
						length: [366, 366, 1800]
					}, // F.Helf
					6: {
						length: [366, 366, 1366]
					} // M.Casta
				}
			},
			12: {
				length: [366, 366, 366, 366, 1333],
				distance: [33.33, 33.33, 33.33, 33.33, 50],
				race: {
					2: {
						length: [366, 366, 366, 366, 1400]
					}, // M.Helf
					3: {
						length: [366, 366, 366, 366, 1800]
					}, // F.Helf
					6: {
						length: [366, 366, 366, 366, 1366]
					} // M.Casta
				}
			},
			13: {
				length: [366, 366, 366, 366, 1333],
				distance: [33.33, 33.33, 33.33, 33.33, 50],
				race: {
					2: {
						length: [366, 366, 366, 366, 1400]
					}, // M.Helf
					3: {
						length: [366, 366, 366, 366, 1800]
					}, // F.Helf
					6: {
						length: [366, 366, 366, 366, 1366]
					} // M.Casta
				},
				enableVB: true,
				noRetry: false,
				consumeAbnormal: [401701],
				pendingStartTime: 1
			}
		},
		11: { // Leaping Strike 
			0: {
				CC: "extended",
				length: 2191.25,
				distance: 250,
				noInterrupt: [2],
				race: { 8: { length: 2232.5 } }
			}
		},
		12: { // Unchained Anger
			0: {
				length: [1033, 533],
				noInterrupt: [2],
				race: { 7: { length: [1066, 533] } }
			}
		},
		13: { // Retaliate
			0: {
				type: 'retaliate',
				length: 1633,
				noInterrupt: [2],
				noRetry: true
			}
		},
		15: { // Vampiric Blow  
			'*': { length: 1930 },
			0: {
				type: 'charging',
				fixedSpeed: 1,
				consumeAbnormal: 400900,
				length: [800, 800, 800],
				noInterrupt: [2, '3-0', '10-0', 15, '18-0'],
				abnormals: {
					400500: { chargeSpeed: 0.2 },
					400501: { chargeSpeed: 0.4 },
				},
				chains: {
					3: 14,
					10: 14,
					18: 14
				},
				level: [{
					length: 800
				}, {
					length: [800, 800]
				}, {
					length: [800, 800]
				}]
			},
			10: {
				distance: 87.28,
				noInterrupt: ['15-10'],
				race: {
					0: {
						distance: 69.704
					},
					1: {
						distance: 79.030014
					},
					2: {
						distance: 69.704
					},
					3: {
						distance: 72.7862854
					},
					4: {
						distance: 35
					},
					5: {
						distance: 69.704
					},
					6: {
						distance: 69.704
					},
					7: {
						distance: 85.7396851
					},
					8: {
						distance: 69.512
					},
					9: {
						distance: 87.27145
					},
					10: {
						distance: 64.88405
					}
				}
			},
			11: {
				distance: 87.28,
				noInterrupt: ['15-11'],
				race: {
					0: {
						distance: 69.704
					},
					1: {
						distance: 79.030014
					},
					2: {
						distance: 69.704
					},
					3: {
						distance: 72.7862854
					},
					4: {
						distance: 35
					},
					5: {
						distance: 69.704
					},
					6: {
						distance: 69.704
					},
					7: {
						distance: 85.7396851
					},
					8: {
						distance: 69.512
					},
					9: {
						distance: 87.27145
					},
					10: {
						distance: 64.88405
					}
				}
			},
			12: {
				distance: 87.28,
				noInterrupt: ['15-12'],
				race: {
					0: {
						distance: 69.704
					},
					1: {
						distance: 79.030014
					},
					2: {
						distance: 69.704
					},
					3: {
						distance: 72.7862854
					},
					4: {
						distance: 35
					},
					5: {
						distance: 69.704
					},
					6: {
						distance: 69.704
					},
					7: {
						distance: 85.7396851
					},
					8: {
						distance: 69.512
					},
					9: {
						distance: 87.27145
					},
					10: {
						distance: 64.88405
					}
				}
			},
			13: {
				distance: 87.28,
				noInterrupt: ['15-13'],
				race: {
					0: {
						distance: 69.704
					},
					1: {
						distance: 79.030014
					},
					2: {
						distance: 69.704
					},
					3: {
						distance: 72.7862854
					},
					4: {
						distance: 35
					},
					5: {
						distance: 69.704
					},
					6: {
						distance: 69.704
					},
					7: {
						distance: 85.7396851
					},
					8: {
						distance: 69.512
					},
					9: {
						distance: 87.27145
					},
					10: {
						distance: 64.88405
					}
				}
			},
			14: {
				distance: 87.28,
				noInterrupt: [15],
				race: {
					0: {
						distance: 69.704
					},
					1: {
						distance: 79.030014
					},
					2: {
						distance: 69.704
					},
					3: {
						distance: 72.7862854
					},
					4: {
						distance: 35
					},
					5: {
						distance: 69.704
					},
					6: {
						distance: 69.704
					},
					7: {
						distance: 85.7396851
					},
					8: {
						distance: 69.512
					},
					9: {
						distance: 87.27145
					},
					10: {
						distance: 64.88405
					}
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
		17: { // Flurry of Blows
			0: {
				fixedSpeed: 1,
				length: 700,
				noInterrupt: [2]
			}
		},
		18: { // Lethal Strike
			'*': {
				length: 1500,
				distance: 167.62,
				consumeAbnormal: 400900,
				race: {
					0: { distance: 168.112289 },
					1: { distance: 188.370682 },
					2: { distance: 168.112289 },
					3: { distance: 173.191574 },
					4: { distance: 145 },
					5: { distance: 168.112289 },
					6: { distance: 168.112289 },
					7: { distance: 191.789749 },
					8: { distance: 240.400055 },
					9: { distance: 167.624313 },
					10: { distance: 158.112289 }
				}
			},
			0: {
				type: 'charging',
				fixedSpeed: 1,
				length: [800, 800, 800],
				distance: false,
				noInterrupt: [2, 3, 4, 10, 15, 24, 25, 30],
				abnormals: {
					24120: { chargeSpeed: 0.3 },
					400500: { chargeSpeed: 0.2 },
					400501: { chargeSpeed: 0.4 },
				},
				level: [
					{ length: 800 },	// 1600
					{ length: [800, 800] },	// 1600
					{ length: [800, 800] }	// 1600
				]
			},
			10: { noInterrupt: ['18-10'] },
			11: { noInterrupt: ['18-11'] },
			12: { noInterrupt: ['18-12'] },
			13: {
				noInterrupt: ['18-13'],
				enableVB: true,
				pendingStartTime: 500 // 500 / timeRate = 1
			}
		},
		19: { // Tenacity
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
		//22: Tackle(unused)
		//23: Raze(unused)
		24: { // Evasive Smash
			'*': {
				length: 1833,
				distance: 167.63,
				consumeAbnormal: [400900, 401404],
				enableOnAbnormal: 400900,
				noInterrupt: [2],
				race: {
					0: { distance: 168.112289 },
					1: { distance: 188.370682 },
					2: { distance: 168.112289 },
					3: { distance: 173.191574 },
					4: { distance: 145 },
					5: { distance: 168.112289 },
					6: { distance: 168.112289 },
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
				type: 'storeCharge',
				length: 1020.9,
				distance: 150,
				enableOnAbnormal: false
			},
			5: {
				type: 'grantCharge',
				enableOnAbnormal: false
			},
			10: true,
			11: true,
			12: true,
			13: true
		}
	},
	4: { // Sorcerer
		1: { // Fireball
			0: { length: 727.27 }
		},
		2: { // Ice Needle
			0: {
				length: 800,
				race: {
					4: { length: 1250 }, // Male Aman
					9: { length: 1010 }, // Elin
					10: { length: 950 } // Baraka
				}
			}
		},
		3: { // Lightning Trap
			0: {
				length: 3000,
				abnormals: { 25090: { speed: 0.4 } }
			}
		},
		4: { // Arcane Pulse
			'*': {
				length: 1293,
				noRetry: true,
				race: { 9: { length: 990.91 } },
			},
			0: {
				type: 'charging',
				fixedSpeed: 1,
				length: [1000, 1000, 1000],
				noInterrupt: [4],
				abnormals: { 25140: { chargeSpeed: 0.3 } }
			},
			10: { noInterrupt: ['4-10'] },
			11: { noInterrupt: ['4-11'] },
			12: { noInterrupt: ['4-12'] },
			13: { noInterrupt: ['4-13'] },
		},
		5: { // Mana Infusion
			0: {
				length: 4595.45,
				race: { 0: { length: 4625.45 } }
			}
		},
		6: { // Fireblast
			0: {
				length: 5141.81,
				glyphs: {
					25003: { speed: 0.17 },
					25069: { speed: 0.17 }
				},
				abnormals: { 25100: { speed: 0.25 } },
				race: {
					7: { length: 5140 },
					9: { length: 4839.1 }
				}
			}
		},
		7: { // Backstep
			0: {
				CC: ["evasive", "extended"],
				length: 657,
				noInterrupt: [7],
				distance: -200,
				forceClip: true
			}
		},
		8: { // Flame Pillar
			0: {
				length: 1933,
				abnormals: { 25070: { speed: 0.25 } }
			}
		},
		9: { // Overchannel
			0: {
				length: 633,
				race: { 1: { length: 566 } }
			}
		},
		10: { // Mana Barrier
			0: {
				length: 633,
				race: { 1: { length: 566 } }
			}
		},
		11: { // Magma Bomb
			0: {
				length: 933,
				race: { 10: { length: 966 } }
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
				length: 3744,
				race: {
					7: { length: 3742.66 },
					9: { length: 3522 }
				},
				glyphs: { 25048: { speed: 0.3 } },
				abnormals: { 25110: { speed: 0.4 } }
			}
		},
		14: { // Retaliate
			0: {
				type: 'retaliate',
				length: 1633,
				noRetry: true
			}
		},
		16: { // Painblast
			0: {
				length: 1949.5,
				race: {
					7: { length: 1948.5 },
					9: { length: 1616.5 }
				}
			}
		},
		17: { // Painful Trap
			0: { length: 1709.3 }
		},
		18: { // Glacial Retreat
			0: {
				CC: "extended",
				length: 1333,
				distance: -187.5,
				forceClip: true
			}
		},
		19: { // Mana Siphon
			'*': {
				length: 1000,
				noRetry: true
			},
			0: {
				type: 'charging',
				fixedSpeed: 1,
				length: [1000, 1000],
				noInterrupt: [19]
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
				length: 2000,
				glyphs: {
					25096: { speed: 0.4 } // Broke in v71
				},
				abnormals: { 25060: { speed: 0.25 } }
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
				length: [300, 900]
			}
		},
		24: { // Burst of Celerity
			0: { length: [300, 400] }
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
		//29: Weeb Prison
	},
	5: { // Archer
		1: { // Arrow
			0: {
				length: 400.4,
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
				noInterrupt: [22],
				race: {
					2: { length: 1266 },
					5: { length: 1266 }
				}
			}
		},
		3: { // Radiant Arrow
			'*': {
				length: 1748.2,
				distance: -100,
				race: {
					1: { length: 1566.37 },
					8: { distance: -96.6 }
				}
			},
			0: {
				type: 'charging',
				fixedSpeed: 1,
				length: [600, 600, 600],
				distance: false,
				//triggerAbnormal: { 600200: 7000 },
				noInterrupt: [3],
				noRetry: true,
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
			10: { noInterrupt: ['3-10'] },
			11: { noInterrupt: ['3-11'] },
			12: { noInterrupt: ['3-12'] },
			13: { noInterrupt: ['3-13'] }
		},
		4: { // Penetrating Arrow
			'*': {
				length: 1293.63,
				distance: -50,
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
				type: 'charging',
				fixedSpeed: 1,
				length: [800, 800, 800],
				distance: false,
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
					{ length: 1000 },
					{ length: [1000, 1000] },
					{ length: [1000, 1000] }
				]
			},
			10: { noInterrupt: ['4-10'] },
			11: { noInterrupt: ['4-11'] },
			12: { noInterrupt: ['4-12'] },
			13: { noInterrupt: ['4-13'] }
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
					999010000: { nocTanSpeed: 0.15 }
				}
			}
		},
		6: { // Backstep
			0: {
				CC: ["evasive", "extended"],
				length: 657.27,
				distance: -200,
				noRetry: true,
				forceClip: true
			}
		},
		7: { // Feign Death
			0: {
				withoutWeapon: true,
				fixedSpeed: 1,
				length: [3727.273, 54545.455, 1657.273],
				distance: [136.38, 0, 0],
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
					8: {
						length: [3227.273, 54545.455, 1657.273],
						distance: [-136.38, 0, 0]
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
			'*': {
				length: 700,
				noRetry: true,
				blockCancelPacket: true
			},
			0: {
				length: 433,
				forceDelay: 15,
				race: { 5: { length: 533 } }
			},
			1: { length: 600 },
			2: true,
			3: { length: 800 },
			4: true,
			5: { length: 800 },
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
		// 11: Venom Trap
		12: { // Velik's Mark
			0: { length: 1000 }
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
				length: 1333,
				distance: -250,
				forceClip: true
			}
		},
		17: { // Web Arrow
			0: { length: 533 }
		},
		18: { // Close Quarters
			'*': { noInterrupt: [18] },
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
				length: 1944,
				distance: -12.5,
				noInterrupt: [22],
				abnormals: { 26100: { speed: 0.25 } },
				race: {
					0: { length: 2000 },
					1: {
						length: 1916.5,
						distance: -20
					},
					8: { distance: -12.17 },
					9: { length: 1971.5 }
				}
			}
		},
		20: { // Restraining Arrow
			0: { length: 533 }
		},
		21: { // Sniper's Eye
			'*': { length: 636 },
			0: true,
			50: true
		},
		22: { // Final Salvo
			'*': {
				length: 433,
				race: { 5: { length: 533 } },
				noRetry: true,
				blockCancelPacket: true
			},
			0: { forceDelay: 15 },
			1: true,
			2: true,
			3: true,
			4: { length: 1233 }
		},
		23: { // Stunning Trap Arrow
			0: { length: 1423.6 }
		},
		24: { // Slow Trap Arrow
			0: { length: 1423.6 }
		},
		25: { // Incendiary Trap Arrow
			0: { length: 1192.73 }
		},
		28: { // Eagle's Eye
			'*': { length: 636 },
			0: true,
			50: true
		},
	},
	6: { // Priest
		1: { // Divine Radiance
			0: { length: 727.27 }
		},
		2: { // Regeneration Circle
			0: {
				length: 3359.63,
				abnormals: {
					902: { nocTanSpeed: 0.15 },
					910: { nocTanSpeed: 0.15 },
					911: { nocTanSpeed: 0.15 },
					912: { nocTanSpeed: 0.15 },
					913: { nocTanSpeed: 0.15 },
					916: { nocTanSpeed: 0.15 },
					917: { nocTanSpeed: 0.15 },
					999010000: { nocTanSpeed: 0.15 }
				},
				race: {
					3: { length: 3492.63 },
					10: { length: 4359.63 }
				}
			}
		},
		3: { // Healing Circle
			0: { length: 1763.18 }
		},
		4: { // Blessing of Seren
			0: { length: 1293.63 }
		},
		5: { // Blessing of Shakan
			0: { length: 1293.63 }
		},
		6: { // Arise
			0: { length: 839 }
		},
		8: { // Mana Infusion
			0: {
				length: 4595.45,
				race: { 0: { length: 4625.45 } },
				glyphs: { 28044: { speed: 0.25 } },
			}
		},
		10: { // Purifying Circle
			0: { length: 1294 }
		},
		11: { // Metamorphic Blast
			0: { length: 839 }
		},
		12: { // Resurrect
			0: {
				length: 5900, // todo: do
				glyphs: { 28045: { speed: 0.3 } },
				abnormals: {
					902: { nocTanSpeed: 0.15 },
					910: { nocTanSpeed: 0.15 },
					911: { nocTanSpeed: 0.15 },
					912: { nocTanSpeed: 0.15 },
					913: { nocTanSpeed: 0.15 },
					916: { nocTanSpeed: 0.15 },
					917: { nocTanSpeed: 0.15 },
					999010000: { nocTanSpeed: 0.15 }
				}
			}
		},
		13: { // Homeword Bound
			0: {
				length: 4506,
				race: { 0: { length: 4535 } }
			}
		},
		14: { // Summon: Party
			0: {
				length: 4506,
				race: { 0: { length: 4535 } }
			}
		},
		15: { // Blessing of Zenobia
			0: { length: 1293.63 }
		},
		16: { // Shocking Implosion
			0: { length: 1718.18 },
		},
		17: { // Prayer of Peace
			0: {
				length: [939.1, 939.1, 850, 939.1],
				glyphs: { 28021: { speed: 2 } },
				race: { 3: { length: [939.1, 960, 939.1] } }
			}
		},
		18: { // Heal Thyself
			0: {
				withoutWeapon: true,
				length: 1266.33
			}
		},
		19: { // Focus Heal
			0: {
				type: 'lockon',
				fixedSpeed: 1,
				length: 54545.45,
				noRetry: true
			},
			10: {
				type: 'lockonCast',
				length: 1949.5
			}
		},
		20: { // Blessing of Seren
			0: { length: 1293.63 }
		},
		21: { // Blessing of Arachne
			0: { length: 1293.63 }
		},
		22: { // Kaia's Shield
			0: { length: 667 }
		},
		23: { // Blessing of Balder
			0: { length: 1293.63 }
		},
		25: { // Retaliate
			0: {
				type: 'retaliate',
				length: 1633,
				noRetry: true
			}
		},
		26: { // Fiery Escape
			0: {
				CC: ["evasive", "extended"],
				noInterrupt: [26, 38], // Not sure if this correct for 38
				length: 1110.83,
				distance: -250.5,
				forceClip: true
			}
		},
		27: { // Final Reprisal
			0: {
				length: 2600,
				noInterrupt: [2, 3, 4, 5, 10, 12, 14, 18, '19-10', 20, 21, 23, 25, 26, 27, 28, '30-10', '33-10', 34, '35-10', '37-10', 38, 39],
				chains: {
					11: 30,
					16: 30,
					29: 30
				}
			},
			30: { length: 1040 }
		},
		28: { // Mana Charge
			'*': {
				length: 798.26,
				noRetry: true,
				race: { 0: { length: 827 } },
				glyphs: { 28039: { effectScale: 1.5 } }
			},
			0: {
				type: 'charging',
				fixedSpeed: 1,
				length: [800, 1600, 1600],
				noInterrupt: [28],
				bodyRolls: { 350708: { chargeSpeed: 0.15 } },
				glyphs: {
					28031: { chargeSpeed: 0.25 },
					28039: { effectScale: 1 } // Might be wrooooooooong
				}
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
			}
		},
		32: { // Divine Repiste
			0: {
				withoutWeapon: true,
				fixedSpeed: 1,
				length: [1300, 900],
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
			0: { //
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
				noInterrupt: ['37-10']
			}
		},
		38: { // Backstep
			0: {
				CC: ["evasive", "extended"],
				noInterrupt: [26, 38], // Not sure if this correct for 26
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
		2: { // Corruption Ring (Max 10 targets for succ and gib)
			0: {
				type: 'hold',
				length: 10869,
				chainOnRelease: 11
			},
			11: { length: 839 },
			12: {
				length: 1294,
				timeout: 135,
				race: { 1: { length: 1224 } }
			}
		},
		3: { // Titanic Wrath (Max 10 targets)
			0: {
				length: 1293.63,
				race: { 1: { length: 1323.63 } }
			}
		},
		4: { // Ancient Binding
			0: { length: 1293.63 }
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
				length: 1949.5
			}
		},
		6: { // Shara's Lash
			0: { length: 1293.63 }
		},
		7: { // Mana Infusion
			0: {
				length: 4595.45,
				glyphs: { 2044: { speed: 0.25 } }
			}
		},
		8: { // Metamorphic Blast
			0: { length: 839 }
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
					27049: { speed: 0.4 },
					27079: { speed: 0.4 }
				},
				abnormals: {
					902: { nocTanSpeed: 0.15 },
					910: { nocTanSpeed: 0.15 },
					911: { nocTanSpeed: 0.15 },
					912: { nocTanSpeed: 0.15 },
					913: { nocTanSpeed: 0.15 },
					916: { nocTanSpeed: 0.15 },
					917: { nocTanSpeed: 0.15 },
					999010000: { nocTanSpeed: 0.15 }
				}
			}
		},
		11: { // Summon: Party
			0: { length: 4545.45 }
		},
		12: { // Vow of Rebirth
			10: {
				length: 839,
				race: { 10: { length: 869 } }
			}
		},
		13: { // Aura of the Merciless
			'*': {
				length: 1293.63,
				race: { 4: { length: 1206.36 } }
			},
			0: true,
			50: true
		},
		14: { // Aura of the Swift
			'*': {
				length: 1293.63,
				race: { 4: { length: 1206.36 } }
			},
			0: true,
			50: true
		},
		15: { // Aura of the Unyielding
			'*': {
				length: 1293.63,
				race: { 4: { length: 1206.36 } }
			},
			0: true,
			50: true
		},
		16: { // Aura of the Tenacious
			'*': {
				length: 1293.63,
				race: { 4: { length: 1206.36 } }
			},
			0: true,
			50: true
		},
		17: { // Teleport Jaunt
			0: {
				CC: ["evasive", "extended"],
				type: 'teleport',
				length: [222, 255.33],
				distance: [0, 333],
				noInterrupt: [17],
				teleportStage: 1,
				noRetry: true,
				timeout: 150
			}
		},
		18: { // Arun's Vitae
			0: {
				length: 799.66,
				race: { 9: { length: 833 } },
				abnormals: {
					27070: { speed: 0.25 },
					27080: { speed: 0.25 }
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
			0: {
				length: 799.66,
				race: { 9: { length: 833 } },
				abnormals: { 27100: { speed: 0.25 } }
			}
		},
		23: { // Metamorphic Smite
			0: { 
				length: 1440,
				glyphs: { 27042: { speed:  0.25 } }
			 }
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
				length: [800, 1000]
			}
		},
		25: { // Thrall of Protection
			0: {
				fixedSpeed: 1,
				length: 2999,
				timeout: 150,
				race: {
					3: { length: 3132 },
					7: { length: 3132 }
				}
			}
		},
		26: { // Thrall of Attack?
			0: {
				fixedSpeed: 1,
				length: 2999,
				timeout: 150,
				race: {
					3: { length: 3132 },
					7: { length: 3132 }
				}
			}
		},
		27: { // Thrall of Life
			0: {
				fixedSpeed: 1,
				length: 1530.37,
				timeout: 150,
				//abnormals: { 27090: { speed: 0.25 } }
			}
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
			0: {
				fixedSpeed: 1,
				length: 1530.37
			}
		},
		34: { // Thrall of Wrath
			0: {
				fixedSpeed: 1,
				length: 2999,
				timeout: 150,
				// 27057 0.3 speed
				race: {
					3: { length: 3132 },
					7: { length: 3132 }
				}
			}
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
			0: { length: 1900 }
		}
	}
}
