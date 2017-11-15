[![Donate](https://img.shields.io/badge/Donate-PayPal-ff69b4.svg)](https://www.paypal.com/cgi-bin/webscr?cmd=_donations&business=5MTKARBK2CNG8&lc=US&item_name=Pinkie%27s%20TERA%20Mods&currency_code=USD)

Simulates skills client-side, eliminating ping-based delays and animation lock.

Wiki: https://github.com/Leyki/skill-prediction/wiki

Disabling a skill in SP: https://github.com/Leyki/skill-prediction/wiki#commenting-in-javascriptaka-if-you-want-a-skill-to-not-be-affected-by-sp

## Current supported class skills
* Lancer: All besides Retaliate
* Brawler: Most besides Rampage, Divine Wrath, Meat Grinder, High Kick, Retaliate
* Warrior: All besides Backstab, Smoke Flanker, Retaliate
* Slayer: All besides Backstab, Retaliate
* Berserker: All besides Vampiric Blow which somewhat works if uncommented
* Sorcerer: All besides Stone Skin, Retaliate
* Archer: All besides Snare, Retaliate
* Reaper: All besides Cable Step, Soul Reversal, Retaliate
* Gunner: Most skills besides Retaliate
* Ninja: All besides Retaliate
* Valkyrie: All besides Retaliate
* Priest: All besides Retaliate
* Mystic: All

## Changelog
### 2.1.0
* [+] Added Berserker: Vampiric Blow (unchained), Retaliate
* [+] Added Archer: Arrow, Penetrating Arrow
* [+] Added Mystic: Release (translation pending)
* [+] Added Reaper: Spiral Barrage, Shadow Lash
* [+] Added Gunner: Rocket Jump
* [+] Added Brawler: Counter, Counterpunch
* [~] Restored old no-target behavior of Ninja: Decoy Jutsu and Valkyrie: Backstab
* [*] Fixed Slayer: Knockdown Strike
* [*] Fixed Berserker: Combo Attack 2nd hit length, Axe Block (pre-65)
* [*] Fixed Archer: Velik's Mark, Find Weakness, Feign Death cancel
* [*] Fixed Reaper: Sundering Strike chained animation
* [*] Fixed Gunner: Balder's Vengeance occasionally dealing 0 damage

### 2.0.0
* [+] Added compatability check to avoid seemingly random crashes with conflicting mods and outdated proxy versions
* [+] Added automatic handling of skills sent by third party mods
* [+] Added automatic ping detection
* [+] Added ping compensation to abnormality (buff/debuff) lengths
* [+] Added timeout to skills to prevent getting locked in wrong animation
* [+] Merged Cooldowns (ping compensation for cooldown lengths)
* [+] Merged Lockons (lockon prediction)
* [+] Added Berserker: Combo Attack, Lethal Strike, Evasive Roll, Axe Counter, Overwhelm, Punishing Strike, Mocking Shout, Leaping Strike, Tenacity
* [+] Added Archer: Feign Death
* [~] Jitter compensation is now automatic and enabled by default
* [~] Jitter compensation now applies to all stages and may increase animation lock to prevent rubberbanding on the server
* [~] Equipped weapon check is now only performed out of combat (optimization)
* [*] Fixed dashes occasionally teleporting you under the map
* [*] Fixed skills having no animation for some number of uses after teleporting
* [*] Fixed "This skill requires an equipped weapon." message due to protocol changes
* [*] Fixed Warrior: Charging Slash occasionally desyncing due to short animation length at point blank
* [*] Fixed Lancer: Onslaught and Spring Attack incorrectly interrupting Charging Lunge
* [*] Fixed Slayer Evasive Roll animation
* [*] Fixed Slayer: Eviscerate being usable during Fury Strike, Headlong rush, and the third hit of Distant Blade
* [*] Fixed Berserker: Axe Block incorrectly interrupting Thunderstrike charging animation
* [*] Fixed Berserker: Axe Block, Raze and Flatten incorrectpy interrupting Evasive Roll
* [*] Fixed Sorcerer: Teleport Jaunt awkward animation and camera stutter
* [*] Fixed Sorcerer: Warp Barrier/Meteor Strike/Arcane Pulse changes
* [*] Fixed Archer: Poison Arrow speed glyph now stacks with Focus buff
* [*] Fixed Mystic: Volley of Curses consuming 2 Noctenium Infusion instead of 1
* [*] Fixed Mystic: Teleport Jaunt awkward animation and camera stutter
* [*] Fixed Gunner: Arcane barrage occasionally emitting 2 projectiles (only one can be detonated)
* [*] Fixed Brawler: Quick Dash second use animation
* [*] Fixed Valkyrie: Glaive Strike, Maelstrom, Leaping Strike, Spinning Death, and Shining Crescent occasionally causing your character's hitbox to pass through the target

### 1.26.1
* [*] Fixed small positional errors with teleports causing you to clip through solid entities
* [*] Fixed abnormalities not being re-applied after resurrecting
* [*] Fixed chain-on-release skills causing incorrect jitter compensation
* [*] Fixed Slayer: Evasive Roll
* [*] Fixed Berserker: Staggering Strike resets
* [*] Fixed Gunner: Arcane Barrage failing to detonate at high ping
* [*] Fixed Ninja: Combo Attack appearing to continue from the last hit after being interrupted
* [*] Fixed Valkyrie: Ragnarok

### 1.26.0
* [+] Added jitter compensation (disabled by default)
* [+] Added Gunner: Arc Bomb
* [~] Updated abnormality prediction system
* [*] Fixed behavior of SKILL_RETRY_ALWAYS and disabled by default
* [*] Fixed Lancer: Backstep RE cost
* [*] Fixed Gunner: Arcane Barrage not being able to detonate immediately at high ping
* [*] Fixed Ninja: Combo Attack sideways movement

### 1.25.0
* [+] Added Sorcerer: Fireball, Teleport Jaunt, Flame Pillar, Mindblast, Time Gyre, Burning Breath, Nerve Exhaustion, Mana Infusion, Mana Siphon, Mana Volley
* [+] Added Gunner: Mana Missiles
* [+] Added Priest: Mana Charge
* [+] Added Mystic: Retaliate
* [~] Always retry skills by default (better consistency for Warrior's Charging Slash, Gunner's Burst Fire, etc.)
* [*] Compatibility with mods that modify skill packets
* [*] Force end type 9 on CC/death and type 6 on 0 or non-same-skill interrupt (fixes some cases of stuck in animation on CC/death)
* [*] Fixed Sorcerer: Lightning Trap and Meteor Strike speedcast powerlinks
* [*] Fixed Archer: Rapid Fire retries interrupting the combo and Sequential Fire error messages
* [*] Fixed Gunner: Point Blank occasionally going on cooldown after the first hit

### 1.24.1
* [~] Update for new sysmsg
* [*] Correct charging speed algorithm

### 1.24.0
* [+] Support abnormality correction (game bugfixes)
* [+] Added Berserker: Thunderstrike, Cyclone
* [+] Added Sorcerer: Arcane Pulse
* [+] Added Archer: Radiant Arrow
* [*] Fix regressions with multi-stage actions + dashes
* [*] Fix infinite stage loop for final charging stage
* [*] Correct charging speed algorithm + animation override
* [*] Fix Slayer: Heart Thrust incorrectly interrupting Knockdown Strike

### 1.23.1
* [*] Fixed broken animations due to malformed S_ACTION_STAGE
* [*] Fixed Mystic: Teleport Jaunt and Boomerang Pulse incorrectly interrupting themselves

### 1.23.0
* [+] Support basic charging, timed press-and-hold and chain-on-release skills
* [+] Added Gunner: Arcane Barrage
* [+] Added Mystic: Arun's Vitae, Arun's Tears, Corruption Ring, Vow of Rebirth (lockon)
* [*] Fixed incorrect animation IDs after teleporting
* [*] Fix race-based knockdown/stagger detection
* [*] Teleport skills now send S_INSTANT_MOVE (fixes delay)
* [*] Update S_ABNORMALITY_BEGIN to V2 (fixes parsing errors from other mods)
* [*] Fixed Lancer: Shield Barrage speed buff from Combo Attack
* [*] Fixed Slayer: Evasive Roll distance
* [*] Fixed Gunner: Scattershot recoil glyph
* [*] Fixed Valkyrie: Shining Crescent interrupting itself at high ping
* [*] Fixed Mystic: Metamorphic Blast and Metamorphic Smite incorrectly interrupting a few skills

### 1.22.0
* [+] Added S_DEFEND_SUCCESS support
* [+] Added Lancer: Shield Counter
* [~] Default SKILL_RETRY_MS from 50 > 60
* [*] Emulate S_CANNOT_START_SKILL (fixes occasionally not being able to jump or use skills after death)
* [*] Fixed Warrior: Not being able to chain Blade Draw from Cross Parry (after releasing button) or Torrent of Blows in Defensive Stance
* [*] Fixed Gunner: Point Blank rubberbanding
* [*] Fixed Valkyrie: Dream Slash incorrectly interrupting itself + speedcast glyph
* [*] Fixed Valkyrie: Spinning Death third hit being able to cast multiple times

### 1.21.0
* [+] Added C_NOTIFY_LOCATION_IN_ACTION rainbow tables (player location desync reduction)
* [+] Added Ninja: Shadow Jump, Decoy Jutsu, Chakra Thrust, Clone Jutsu
* [*] Fixed Brawler: Boss occasionally turning while tanking
* [*] Fixed Brawler: Punch > Counter chains at high ping
* [*] Fixed Berserker: Raze and Flatten incorrectly interrupting Flatten

### 1.20.0
* [+] Added all Valkyrie skills
* [+] Added S_INSTANT_MOVE support
* [*] Prevent skills from being retried while dead

### 1.19.0
* [+] Added Warrior: Combo Attack, Evasive Roll, Battle Cry, Assault Stance, Defensive Stance, Death from Above, Charging Slash, Rising Fury, Deadly Gamble, Smoke Aggressor, Command: Attack, Command: Follow, Pounce, Reaping Slash, Binding Sword, Infuriate
* [+] Added Archer: Tenacity, Chase
* [+] Added Ninja: Impact Bomb
* [*] Fixed character sometimes becoming stuck in animation upon death
* [*] Fixed jumping after using a skill without an equipped weapon
* [*] Fixed Warrior: Blade Draw incorrectly chaining from the first hit of Rising Fury
* [*] Fixed Warrior: Rain of Blows > Reaping Slash chain during Deadly Gamble
* [*] Fixed Slayer: Startling Kick clipping through gates
* [*] Fixed Sorcerer: Glacial Retreat clipping through gates

### 1.18.0
* [+] Emulate S_INSTANT_DASH
* [+] Added Ninja: Skyfall, Circle of Steel, One Thousand Cuts, Bladestorm, Smoke Bomb
* [*] Fixed Sorcerer: Meteor Strike animation during Warp Barrier
* [*] Fixed Ninja: Combo Attack behavior, Fire Avalache chain
* [*] Prevent using skills without an equipped weapon

### 1.17.0
* [+] Allow array for requiredBuff
* [+] Added Warrior: Torrent of Blows
* [+] Added Ninja: Fire Avalanche, Jagged Path
* [*] Fixed Warrior: Cross Parry with pre-65 Defensive Stance
* [*] Fixed Slayer: Several chains
* [*] Fixed Reaper: Smite > Double Shear chain

### 1.16.1
* [~] Abnormality system updated for new tera-data-parser
* [*] Stagger/knockdown is now detected by skill group
* [*] Disable skills during pushback/stun
* [*] Fixed Warrior: Several skills interrupting Backstab
* [*] Fixed Reaper: Several skills interrupting Cable Step, and Smite interrupting several skills

### 1.16.0
* [+] Re-Added Slayer: Headlong Rush
* [~] Updated for new tera-data-parser
* [~] Removed Z axis fom dash teleport correction
* [*] Fixed Lancer: Charging Lunge speed
* [*] Fixed chains and length for a few Slayer skills

### 1.15.0
* [+] Added Dash & Teleport support
* [+] Added Lancer: Charging Lunge, Master's Leash
* [+] Added Slayer: Evasive Roll
* [+] Added Reaper: Sundering Strike
* [+] Added Mystic: Teleport Jaunt
* [*] Fixed interrupting multi-stage actions
* [*] Fixed clipping for iframes with negative movement
* [*] Fixed Slayer: Combo Attack
* [*] Fixed Slayer: Knockdown Strike interrupting Headlong Rush

### 1.14.1:
* [*] Add forced clipping to iframes (fixes being able to iframe through gates)
* [*] Support C_NOTIFY_LOCATION_IN_DASH
* [*] Fixed incorrect parameters for multi-part skills
* [*] Fixed Slayer: Combo Attack
* [*] Temporarily disabled Slayer: Headlong Rush

### 1.14.0:
* [+] Added Slayer: Combo Attack
* [*] Fixed emulation of cast-while-moving (Reaper: Grim Strike, Smite)
* [*] Fixed Slayer: Heart Thrust, Stunning Backhand, Fury Strike, Whirlwind, Startling Kick, Headlong Rush, Leaping Strike, Overpower, In Cold Blood, Dash, Tenacity
* [*] Fixed Slayer: Knockdown Strike speed buff
* [*] Fixed Slayer: Combo Attack x4 > Overhand Strike chain
* [*] Fixed Slayer: Overhand Strike interrupting Ultimate Overhand Strike, Eviscerate interrupting itself
* [*] Fixed Slayer: Measured Slice (chained) and Ultimate Overhand Strike (chained) movement

### 1.13.0:
* [+] Added Slayer: Knockdown Strike, Measured Slice, Overhand Strike, Heart Thrust, Eviscerate, Leaping Strike, Whirlwind, Stunning Backhand, Distant Blade, Startling Kick, Fury Strike, Headlong Rush, Overpower, Tenacity, In Cold Blood, Dash

### 1.12.1:
* [~] Updated for tera-proxy 2017-03-14
* [*] Fixed user-controlled movement for Reaper: Grim Strike, Smite

### 1.12.0:
* [+] Support controlled skill movement
* [+] Added Reaper: Death Spiral, Double Shear, Grim Strike, Pendulum Strike, Whipsaw, Smite, Shadow Burst, Retribution, Shadow Reaping, Shrounded Escape, Shadow Step

### 1.11.1:
* [*] Fixed interrupting non-emulated multi-stage skills sometimes causing your character to become stuck in animation

### 1.11.0:
* [+] Added Berserker: Fiery Rage
* [*] Unknown button release packets no longer update your current location (fixes player teleporting after interrupting a charging skill)
* [*] Fixed Gunner: Blast sometimes interrupting its own animation (client bug)
* [*] Fixed Berserker: Raze and Flatten interrupting Vampiric Blow
* [*] Added skill movement for Berserker: Tackle, Staggering Strike
* [*] Updated skill IDs to include Intimidation stance for Berzerker: Axe Block, Raze, Flatten, Staggering Strike

### 1.10.1:
* [*] Fixed Onslaught chain regression

### 1.10.0:
* [+] Added abnormality prediction system (currently unused)
* [~] Abnormalities are now calculated after chains
* [*] Fixed Warrior animations during Deadly Gamble: Blade Draw, Scythe, Rain of Blows
* [*] Fixed Gunner: Point Blank second hit interrupting itself
* [*] Fixed Gunner: Balder's Vengeance being set to variable-speed
