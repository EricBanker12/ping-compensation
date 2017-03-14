/* Note:
	* '*' can be used in place of the skill group or sub-skill to set default values
	* Processing order is 'noInterrupt' > 'chains' > 'abnormals'
*/

module.exports = {
	0: { // Warrior
		4: { // Rain of Blows
			'*': { movement: 151.87 },
			0: {
				length: 2550,
				noInterrupt: [1, 2, 3, 4, 8, 9, 10, 11, 12, 16, 17, 19, 28, 29, 34, 36, 37],
				abnormals: {
					100801: { skill: 360100 }
				},
				chains: {
					18: 30,
					21: 30,
					27: 30
				}
			},
			30: {
				length: 2000,
				abnormals: {
					100801: { skill: 360130 }
				}
			}
		},
		11: { // Poison Blade
			0: {
				length: 925,
				movement: 54.85
			}
		},
		12: { // Leaping Strike
			0: {
				length: 1525,
				movement: 250
			}
		},
		17: { // Vortex Slash
			0: {
				length: 1600,
				requiredBuff: 100400
			}
		},
		18: { // Combative Strike
			0: {
				length: 1100,
				movement: 138.28
			}
		},
		28: { // Traverse Cut
			0: {
				length: 2000,
				movement: 160,
				noInterrupt: [1, 2, 3, 4, 8, 9, 10, 12, 16, 17, 19, 21, 28, 29, 34, 36, 37],
				chains: {
					11: 30,
					18: 30,
					27: 30
				}
			},
			30: {
				length: 2650,
				movement: 210
			}
		},
		29: { // Blade Draw
			0: {
				length: 3000,
				movement: 94.5,
				noInterrupt: [1, 2, 3, 4, 8, 9, 10, 11, 12, '16-0', 18, 21, 27, 29, 34, 36, 37],
				abnormals: {
					100801: { skill: 370100 }
				},
				chains: {
					16: 30,
					17: 30,
					19: 30,
					28: 30,
					32: 30
				}
			},
			30: {
				length: 1333,
				movement: 135,
				abnormals: {
					100801: { skill: 370130 }
				}
			}
		},
		30: { // Scythe
			0: {
				length: 1850,
				movement: 150,
				noInterrupt: [1, 3, 8, 9, 10, 16, 17, 18, 19, 21, 27, 28, 34],
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
					37: 30
				}
			},
			30: {
				length: 1385,
				movement: 120,
				abnormals: {
					100801: { skill: 380130 }
				}
			}
		},
		32: { // Cross Parry
			0: {
				fixedSpeed: 1,
				instantPressAndHold: true,
				requiredBuff: 100203,
				stamina: 50
			}
		},
		36: { // Rain of Blows (Deadly Gamble)
			'*': { movement: 151.87 },
			0: { length: 2550 },
			30: { length: 2000 }
		},
		37: { // Blade Draw (Deadly Gamble)
			0: {
				length: 3000,
				movement: 94.5
			},
			30: {
				length: 1333,
				movement: 135
			}
		},
		38: { // Scythe (Deadly Gamble)
			'*': { movement: 150 },
			0: { length: 1850 },
			30: { length: 1385 }
		}
	},
	1: { // Lancer
		1: { // Combo Attack
			0: {
				length: 650,
				movement: 75
			},
			1: {
				length: 1025,
				movement: 20
			},
			2: {
				length: 1800,
				movement: 66
			}
		},
		2: { // Stand Fast
			0: {
				fixedSpeed: 1,
				instantPressAndHold: true,
				stamina: 50
			}
		},
		3: { // Onslaught
			'*': {
				movement: [0, 100, 100, 100, 100, 62.7],
				abnormals: {
					22060: { speed: 1.25 }
				},
				chains: {
					5: 30
				}
			},
			0: { length: [950, 500, 500, 500, 400, 775] },
			30: { length: [713, 375, 375, 375, 300, 582] }
		},
		4: { // Challenging Shout
			0: {
				length: 2175,
				glyphs: {
					22056: { speed: 1.25 },
					22085: { speed: 1.25 }
				}
			}
		},
		5: { // Shield Bash
			0: {
				length: 830,
				movement: 43.69
			}
		},
		7: { // Guardian Shout
			0: { length: 550 }
		},
		9: { // Leash
			0: { length: [725, 850] }
		},
		10: { // Debilitate
			0: {
				length: 925,
				movement: 43.69
			}
		},
		12: { // Infuriate
			0: { length: 2400 }
		},
		13: { // Spring Attack
			0: {
				length: 2775,
				movement: 85,
				noInterrupt: [3, 13, '18-0', 21, 25, 26],
				chains: {
					1: 30,
					5: 30,
					8: 30,
					10: 30,
					18: 30
				}
			},
			30: {
				length: 1850,
				movement: 85
			}
		},
		16: { // Second Wind
			0: {
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
				length: 625,
				movement: 122.66
			},
			1: {
				length: 800,
				movement: 66.04
			}
		},
		19: { // Pledge of Protection
			0: {
				fixedSpeed: 1,
				length: 1000
			}
		},
		20: { // Menacing Wave
			0: {
				fixedSpeed: 1,
				length: [700, 800]
			}
		},
		21: { // Lockdown Blow
			0: {
				length: 1400,
				movement: 122.66
			}
		},
		22: { // Iron Will
			0: {
				fixedSpeed: 1,
				length: 800
			}
		},
		24: { // Chained Leash
			0: { length: [725, 850] }
		},
		25: { // Wallop
			0: {
				length: 2375,
				movement: 100,
				noInterrupt: [1, 3, 5, '18-0', 21, 25, 26],
				chains: {
					8: 30,
					10: 30,
					13: 30,
					15: 30,
					18: 30
				}
			},
			30: {
				length: 1900,
				movement: 100
			}
		},
		26: { // Backstep
			0: {
				length: 725,
				movement: -150,
				stamina: 700,
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
		}
	},
	3: { // Berserker
		// Somewhat broken - Nearly every single zerk skill should have a different animation # while in Intimidation
		2: { // Axe Block
			'*': {
				fixedSpeed: 1,
				instantPressAndHold: true
			},
			30: true,
			31: true
		},
		4: { // Flatten
			'*': {
				length: 3100,
				glyphs: {
					24008: { speed: 1.25 },
					24050: { speed: 1.25 }
				}
			},
			0: {
				noInterrupt: ['3-10', '3-11', '3-12', '3-13', '10-10', '10-11', '10-12', '10-13', '15-10', '15-11', '15-12', '15-13', '15-14', '26-0', '32-0'],
				abnormals: {
					401400: { chain: 1 }
				},
				chains: {
					6: 30,
					25: 30,
					32: 30
				}
			},
			1: true,
			30: {
				length: 2325,
				abnormals: {
					401400: { chain: 31 }
				}
			},
			31: { length: 2325 }
		},
		5: { // Dash
			0: {
				fixedSpeed: 1,
				length: 700
			}
		},
		6: { // Staggering Strike
			'*': {
				length: 1265,
				movement: 80.47
			},
			0: {
				abnormals: {
					401400: { chain: 30 }
				}
			},
			30: true
		},
		8: { // Fiery Rage
			0: {
				length: 1285,
				abnormals: {
					401400: { chain: 30 }
				}
			},
			30: { length: 1750 }
		},
		21: { // Bloodlust
			0: {
				fixedSpeed: 1,
				length: 700
			}
		},
		25: { // Raze
			'*': { length: 1200 },
			0: {
				noInterrupt: ['3-10', '3-11', '3-12', '3-13', '6-0', '6-30', '10-10', '10-11', '10-12', '10-13', '15-10', '15-11', '15-12', '15-13', '15-14', '26-0', '32-0'],
				abnormals: {
					401400: { chain: 1 }
				},
				chains: {
					30: 31,
					32: 31
				}
			},
			1: true,
			31: { length: 960 }
		},
		26: { // Tackle
			0: {
				length: 1000,
				movement: 80
			}
		}
	},
	4: { // Sorcerer
		2: { // Frost Sphere
			0: { length: 1000 }
		},
		3: { // Lightning Trap
			0: { length: 1300 }
		},
		6: { // Meteor Strike
			0: {
				length: 3700,
				glyphs: {
					25003: { speed: 1.17 },
					25069: { speed: 1.25 }
				},
				abnormals: {
					501603: { skill: 320100 }
				}
			}
		},
		7: { // Backstep
			0: {
				length: 650,
				movement: -200
			}
		},
		10: { // Mana Barrier
			0: { length: 625 }
		},
		11: { // Lightning Strike
			0: { length: 800 }
		},
		12: { // Void Pulse
			0: { length: 925 }
		},
		16: { // Painblast
			0: { length: 1330 }
		},
		17: { // Painful Trap
			0: { length: 1100 }
		},
		18: { // Glacial Retreat
			0: {
				length: 1100,
				movement: -187.5
			}
		},
		20: { // Flaming Barrage
			0: {
				fixedSpeed: 1,
				length: 4900,
				canCancel: true
			},
			10: {
				length: 1500,
				chainType: 36,
				glyphs: {
					25001: { speed: 1.3 },
					25096: { speed: 1.4 }
				}
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
			0: { length: 475 }
		},
		32: { // Meteor Shower
			0: {
				length: 6475,
				glyphs: {
					25003: { speed: 1.17 },
					25069: { speed: 1.25 }
				}
			}
		},
		34: { // Mana Boost
			0: { length: 750 }
		}
	},
	5: { // Archer
		2: { // Arrow Volley
			0: {
				fixedSpeed: 1,
				length: 4900,
				canCancel: true
			},
			10: {
				length: 1225,
				chainType: 36
			}
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
					916: { speed: 1.15 },
					920: { speed: 1.225 }
				}
			}
		},
		6: { // Backstep
			0: {
				length: 650,
				movement: -200
			}
		},
		// Super long animation that can't be cancelled if it breaks - Use at your own risk
		/*7: { // Feign Death
			length: [2950, 54525, 1675],
			movement: [-114.05, 0, 0]
		},*/
		8: { // Rapid Fire
			0: { length: 425 },
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
			0: { length: 1000 }
		},
		15: { // Incendiary Trap
			0: { length: 1150 }
		},
		16: { // Breakaway Bolt
			0: {
				length: 1325,
				movement: -250
			}
		},
		17: { // Web Arrow
			0: { length: 525 }
		},
		18: { // Close Quarters
			0: {
				length: 300,
				movement: 89.8
			},
			1: {
				length: 1200,
				movement: 87.29
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
				requiredBuff: 600200
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
		32: { // Find Weakness
			0: {
				fixedSpeed: 1,
				length: 1300
			}
		}
	},
	6: { // Priest
		1: { // Divine Radiance
			0: { length: 625 },
			1: { length: 650 },
			2: { length: 675 },
			3: { length: 725 }
		},
		2: { // Regeneration Circle
			0: {
				length: 3150,
				abnormals: {
					902: { speed: 1.15 },
					911: { speed: 1.15 },
					916: { speed: 1.15 },
					920: { speed: 1.225 }
				}
			}
		},
		3: { // Healing Circle
			0: { length: 1750 }
		},
		5: { // Blessing of Shakan
			0: { length: 1300 }
		},
		6: { // Arise
			0: { length: 830 }
		},
		8: { // Mana Infusion
			0: {
				length: 4600,
				glyphs: {
					28044: { speed: 1.25 }
				}
			}
		},
		10: { // Purifying Circle
			0: { length: 1275 }
		},
		11: { // Metamorphic Blast
			0: { length: 830 }
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
					916: { speed: 1.15 },
					920: { speed: 1.225 }
				}
			}
		},
		14: { // Summon: Party
			0: { length: 4500 }
		},
		16: { // Shocking Implosion
			0: { length: 1700 }
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
			0: { length: 1250 }
		},
		19: { // Focus Heal
			0: {
				fixedSpeed: 1,
				length: 54440,
				canCancel: true
			},
			10: {
				length: 1940,
				chainType: 36
			}
		},
		22: { // Kaia's Shield
			0: { length: 650 }
		},
		23: { // Blessing of Balder
			0: { length: 1300 }
		},
		26: { // Fiery Escape
			0: {
				length: 1125,
				movement: -250.5
			}
		},
		27: { // Final Reprisal
			0: {
				length: 2600,
				noInterrupt: [27],
				chains: {
					11: 30,
					16: 30,
					29: 30,
					40: 30
				}
			},
			30: { length: 1040 }
		},
		29: { // Triple Nemesis
			0: { length: 800 },
			1: { length: 800 },
			2: { length: 1250 }
		},
		30: { // Plague of Exhaustion
			0: {
				fixedSpeed: 1,
				length: 4900,
				canCancel: true
			},
			10: {
				fixedSpeed: 1,
				length: 1430,
				chainType: 36
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
				fixedSpeed: 1,
				length: [1300, 900]
			}
		},
		33: { // Ishara's Lulliby
			0: {
				fixedSpeed: 1,
				length: 4900,
				canCancel: true
			},
			10: {
				fixedSpeed: 1,
				length: [300, 1430],
				chainType: 36
			}
		},
		34: { // Restorative Burst
			0: { length: 1430 }
		},
		35: { // Energy Stars
			0: {
				fixedSpeed: 1,
				length: 4900,
				canCancel: true
			},
			10: {
				fixedSpeed: 1,
				length: 1430,
				chainType: 36
			}
		},
		37: { // Healing Immersion
			0: {
				fixedSpeed: 1,
				length: 4900,
				canCancel: true,
				noRetry: true
			},
			10: {
				fixedSpeed: 1,
				length: 1430,
				chainType: 36
			}
		},
		38: { // Backstep
			0: {
				length: 650,
				movement: -200
			}
		},
		39: { // Grace of Resurrection
			0: { length: 5900 }
		},
		40: { // Zenobia's Vortex
			0: { length: 1050 }
		},
		41: { // Divine Intervention
			0: {
				fixedSpeed: 1,
				length: 54440,
				canCancel: true
			},
			10: {
				length: 925,
				chainType: 36
			}
		}
	},
	7: { // Mystic
		1: { // Sharan Bolt
			0: { length: 675 },
			1: { length: 675 },
			2: { length: 675 },
			3: { length: 675 }
		},
		4: { // Ancient Binding
			0: { length: 1275 }
		},
		5: { // Titanic Favor
			0: {
				fixedSpeed: 1,
				length: 59900,
				canCancel: true
			},
			10: {
				length: 1940,
				chainType: 36
			}
		},
		6: { // Shara's Lash
			0: { length: 1275 }
		},
		8: { // Metmorphic Blast
			0: {
				length: 820,
				chains: {
					8: 30,
					23: 30
				}
			},
			30: { length: 820 }
		},
		9: { // Arun's Cleansing
			0: {
				fixedSpeed: 1,
				length: 59900,
				canCancel: true
			},
			10: {
				length: 790,
				chainType: 36
			}
		},
		10: { // Resurrect
			0: {
				length: 8050,
				glyphs: {
					27049: { speed: 1.4 },
					27079: { speed: 1.4 }
				},
				abnormals: {
					902: { speed: 1.25 },
					911: { speed: 1.25 },
					916: { speed: 1.25 },
					920: { speed: 1.375 }
				}
			}
		},
		11: { // Summon: Party
			0: { length: 4400 }
		},
		13: { // Aura of the Merciless
			0: { length: 1275 },
			50: { length: 1275 }
		},
		14: { // Aura of the Swift
			0: { length: 1275 },
			50: { length: 1275 }
		},
		15: { // Aura of the Unyielding
			0: { length: 1275 },
			50: { length: 1275 }
		},
		16: { // Aura of the Tenacious
			0: { length: 1275 },
			50: { length: 1275 }
		},
		23: { // Metmorphic Smite
			0: {
				length: 1430,
				chains: {
					8: 30
				}
			},
			30: { length: 1100 }
		},
		24: { // Volley of Curses
			0: {
				fixedSpeed: 1,
				length: 4900,
				canCancel: true
			},
			10: {
				fixedSpeed: 1,
				length: [525, 675],
				chainType: 36
			}
		},
		25: { // Thrall of Protection
			0: {
				fixedSpeed: 1,
				length: [1000, 1700]
			}
		},
		27: { // Thrall of Life
			0: {
				fixedSpeed: 1,
				length: [275, 575]
			}
		},
		28: { // Sonorous Dreams
			0: {
				fixedSpeed: 1,
				length: 4900,
				canCancel: true
			},
			10: {
				fixedSpeed: 1,
				length: 1430,
				chainType: 36
			}
		},
		29: { // Regression
			fixedSpeed: 1,
			length: [500, 700]
		},
		30: { // Curse of Exhaustion
			0: {
				fixedSpeed: 1,
				length: 4900,
				canCancel: true
			},
			10: {
				fixedSpeed: 1,
				length: 1430,
				chainType: 36
			}
		},
		31: { // Curse of Confusion
			0: {
				fixedSpeed: 1,
				length: 4900,
				canCancel: true
			},
			10: {
				fixedSpeed: 1,
				length: 1430,
				chainType: 36
			}
		},
		32: { // Mire
			0: {
				fixedSpeed: 1,
				length: 4900,
				canCancel: true
			},
			10: {
				fixedSpeed: 1,
				length: 1430,
				chainType: 36
			}
		},
		33: { // Thrall of Vengeance
			0: {
				fixedSpeed: 1,
				length: [275, 575]
			}
		},
		34: { // Thrall of Wrath
			0: {
				fixedSpeed: 1,
				length: [1000, 1700]
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
		},
		41: { // Contagion
			0: {
				fixedSpeed: 1,
				length: 4900,
				canCancel: true
			},
			10: {
				length: 1000,
				chainType: 36
			}
		},
		42: { // Boomerang Pulse
			0: { length: 530 }
		}
	},
	9: { // Gunner
		1: { // Blast
			'*': {
				fixedSpeed: 1,
				length: 1200,
				noInterrupt: [1]
			},
			1: true,
			2: true
		},
		3: { // Scattershot
			'*': {
				length: 1725,
				movement: -108,
				glyphs: {
					30007: { movement: 0.6 }
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
				noInterrupt: ['4-3', '4-4'],
				chains: {
					'2-1': 30,
					3: 30,
					4: 4,
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
			3: { length: 1200 },
			4: { length: 1200 },
			30: true
		},
		5: { // Burst Fire
			0: { length: 850 },
			1: {
				fixedSpeed: 1,
				length: 122,
				stamina: 70,
				instantStamina: true,
				glyphs: {
					30046: { stamina: -10 }
				}
			}
		},
		6: { // Time Bomb
			'*': {
				fixedSpeed: 1,
				length: 1000
			},
			1: true,
			2: true
		},
		13: { // Balder's Vengeance
			'*': {
				fixedSpeed: 1,
				length: 5800,
				movement: -269.09,
				chains: { // TODO
					15: 30,
					40: 30
				}
			},
			1: true,
			2: true,
			30: true
		},
		15: { // Replenishment
			'*': {
				fixedSpeed: 1,
				length: 1325,
				chains: {
					'2-1': 30,
					3: 30,
					4: 30,
					'7-3': 30,
					'9-11': 30,
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
				length: 1430
			},
			1: true,
			2: true
		},
		40: { // Rolling Reload
			0: {
				length: 950,
				movement: 172.5
			}
		}
	},
	10: { // Brawler
		1: { // Punch
			'*': { noRetry: true },
			0: {
				length: 1575,
				movement: 71.28,
				noInterrupt: ['1-3'],
				chains: {
					'1-0': 1,
					'1-1': 2,
					'1-2': 3,
					'1-30': 1,
					'1-31': 32,
					'1-32': 2,
					2: 31
				}
			},
			1: {
				length: 1575,
				movement: 68.63
			},
			2: {
				length: 925,
				movement: 50.7
			},
			3: {
				length: 1725,
				movement: 121
			},
			30: {
				length: 1575,
				movement: 71.28,
				noInterrupt: ['1-3'],
				chains: {
					'1-0': 1,
					'1-1': 2,
					'1-2': 3,
					'1-30': 1,
					'1-31': 32,
					'1-32': 2,
					2: 31
				}
			},
			31: {
				length: 1575,
				movement: 71.28,
				noInterrupt: ['1-3'],
				chains: {
					'1-0': 1,
					'1-1': 2,
					'1-2': 3,
					'1-30': 1,
					'1-31': 32,
					'1-32': 2,
					2: 31
				}
			},
			32: {
				length: 1575,
				movement: 68.63
			}
		},
		2: { // Counter
			1: {
				length: 1200,
				movement: 139.97
			},
			2: {
				length: 1800,
				movement: 84
			},
			3: {
				length: 1925,
				movement: 131.2
			},
			4: {
				length: 1950,
				movement: 142.86
			},
			12: {
				/*abnormals: {
					10153061: { chain: 1 },
					10153062: { chain: 2 },
					10153063: { chain: 3 },
					10153064: { chain: 4 }
				},*/
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
		/*3: { // Divine Wrath
			0: {
				fixedSpeed: 1,
				length: 29900
			},
			1: {
				length: [,,],
				movement: [,,],
				chainType: 36
			}
		},*/
		4: { // Ground Pound
			0: { length: 3225 },
			30: { length: 3225 }
		},
		5: { // Bullrush
			0: {
				fixedSpeed: 1,
				length: [2950, 650],
				movement: [0, 135]
			}
		},
		6: { // Haymaker
			'*': {
				length: [1025, 1825],
				movement: [0, 171.61],
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
					40: 30
				}
			},
			1: true,
			2: true,
			30: true,
			31: true
		},
		7: { // Roundhouse Kick
			0: {
				length: 860,
				movement: 105,
				noInterrupt: [7]
			},
			30: {
				length: 860,
				movement: 105,
				noInterrupt: [7]
			}
		},
		8: { // Piledriver
			'*': {
				length: 1950,
				movement: 164.94,
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
			30: { fixedSpeed: 1},
			31: true
		},
		9: { // Jackhammer
			'*': {
				fixedSpeed: 1,
				length: 1540,
				movement: 40,
				noInterrupt: [9],
				abnormals: {
					31120: { chain: 31 }
				}
			},
			1: true,
			2: true,
			30: true,
			31: true
		},
		13: { // Provoke
			1: {
				fixedSpeed: 1,
				length: 1275
			},
			2: {
				fixedSpeed: 1,
				length: 1275
			}
		},
		14: { // Infuriate
			1: { length: 1650 },
			2: { length: 1650 },
			30: { length: 1650 }
		},
		16: { // Flip Kick
			1: {
				length: 2050,
				movement: 134
			},
			2: {
				length: 2050,
				movement: 134
			},
			30: {
				length: 2050,
				movement: 134
			}
		},
		21: { // Mounting Rage
			1: {
				fixedSpeed: 1,
				length: 1275
			},
			2: {
				fixedSpeed: 1,
				length: 1275
			}
		},
		40: { // Quick Dash
			0: {
				fixedSpeed: 1,
				length: 580,
				movement: 144
			}
		}
	},
	11: { // Ninja
		1: { // Combo Attack
			0: {
				fixedSpeed: 1,
				length: 650,
				movement: 45,
				chains: {
					'1-0': 1,
					'1-1': 2,
					'1-2': 3,
					'1-3': 4,
					'1-4': 5,
					'1-5': 6,
					'1-30': 1,
					1: 30,
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
					19: 30
				},
				noRetry: true
			},
			1: {
				fixedSpeed: 1,
				length: 1125,
				movement: 53,
				noRetry: true
			},
			2: {
				fixedSpeed: 1,
				length: 1200,
				movement: 70,
				noRetry: true
			},
			3: {
				fixedSpeed: 1,
				length: 1225,
				movement: 38,
				noRetry: true
			},
			4: {
				fixedSpeed: 1,
				length: 1700,
				movement: 55,
				noRetry: true
			},
			5: {
				fixedSpeed: 1,
				length: 1500,
				movement: 38,
				noRetry: true
			},
			6: {
				fixedSpeed: 1,
				length: 1150,
				movement: 83,
				noRetry: true
			},
			30: {
				fixedSpeed: 1,
				length: 650,
				movement: 45,
				noRetry: true
			}
		},
		3: { // Leaves on the Wind
			0: { length: 1275 }
		},
		11: { // Focus
			0: { length: 1430 },
			50: { length: 1430 }
		},
		14: { // Double Cut
			1: {
				length: 1425,
				movement: 162,
				noInterrupt: [9, 18],
				chains: {
					1: 30,
					4: 30,
					6: 30,
					7: 30,
					8: 30,
					12: 30,
					13: 30,
					15: 30,
					16: 30,
					19: 30
				}
			},
			2: {
				length: 1425,
				movement: 162,
				noInterrupt: [9, 18],
				chains: {
					1: 30,
					4: 30,
					6: 30,
					7: 30,
					8: 30,
					12: 30,
					13: 30,
					15: 30,
					16: 30,
					19: 30
				}
			},
			30: {
				length: 1425,
				movement: 162
			}
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
			0: { length: 880 },
			2: { length: 390 },
			3: { length: 390 },
			4: { length: 390 },
			5: { length: 390 },
			6: { length: 390 },
			7: { length: 390 },
			8: { length: 390 },
			9: { length: 390 }
		},
		16: { // Death Blossom
			0: {
				fixedSpeed: 1,
				length: 1525
			}
		},
		17: { // Attunement
			0: { length: 1000 }
		}
	}
}