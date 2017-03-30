[![Donate](https://img.shields.io/badge/Donate-PayPal-ff69b4.svg)](https://www.paypal.com/cgi-bin/webscr?cmd=_donations&business=5MTKARBK2CNG8&lc=US&item_name=Pinkie%27s%20TERA%20Mods&currency_code=USD)

Simulates skills client-side, eliminating ping-based delays and animation lock.

## Current supported class skills
* Lancer: All besides Shield Counter
* Brawler: Most besides Rampage, Divine Wrath, Meat Grinder, High Kick, Counterpunch
* Warrior: Combative Strike, Traverse Cut, Blade Draw, Poison Blade, Scythe, Rain of Blows, Torrent of Blows, Leaping Strike
* Slayer: All besides Combo Attack, Evasive Roll, Exhausting Blow and Backstab
* Berserker: Axe Block, Raze, Flatten, Tackle, Staggering Strike, Bloodlust, Dash
* Sorcerer: Most combat besides Arcane Pulse
* Archer: Most besides Chase
* Reaper: All besides Cable Step, Soul Reversal
* Gunner: Blast, Rolling Reload, Burst Fire, Balder's Vengeance, Replenishment, Scattershot, Time Bomb, Point Blank, HB
* Ninja: Combo Attack, Double Cut, Burning Heart, Fire Avalanche, Jagged Path, Leaves on the Wind, Death Blossom, Attunement, Focus
* Priest: All besides Mana Charge
* Mystic: All besides Arun's Vitae, Arun's Tears, Vow of Rebirth

## Changelog
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