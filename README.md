Simulates skills client-side, eliminating ping-based delays and animation lock.

## Current supported class skills
* Lancer: All besides Charging Lunge, Shield Counter, Master's Leash
* Brawler: Most besides Rampage, Divine Wrath, Meat Grinder, High Kick, Counterpunch
* Warrior: Combative Strike, Traverse Cut, Blade Draw, Poison Blade, Scythe, Rain of Blows, Leaping Strike
* Berserker: Axe Block, Raze, Flatten, Tackle, Staggering Strike, Bloodlust, Dash
* Sorcerer: Most combat besides Arcane Pulse
* Archer: Most besides Chase
* Reaper: All besides Sundering Strike, Cable Step, Soul Reversal
* Slayer: All besides Combo Attack, Evasive Roll, Exhausting Blow and Backstab
* Gunner: Blast, Rolling Reload, Burst Fire, Balder's Vengeance, Replenishment, Scattershot, Time Bomb, Point Blank, HB
* Ninja: Combo Attack, Burning Heart, Leaves on the Wind, Death Blossom, Attunement, Focus
* Priest: All besides Mana Charge
* Mystic: All besides Teleport Jaunt, Arun's Vitae, Arun's Tears, Vow of Rebirth

## Changelog
### 1.12.0:
* + Support controlled skill movement
* + Added Reaper: Death Spiral, Double Shear, Grim Strike, Pendulum Strike, Whipsaw, Smite, Shadow Burst, Retribution, Shadow Reaping, Shrounded Escape, Shadow Step

### 1.11.1:
* * Fixed interrupting non-emulated multi-stage skills sometimes causing your character to become stuck in animation

### 1.11.0:
* + Added Berserker: Fiery Rage
* * Unknown button release packets no longer update your current location (fixes player teleporting after interrupting a charging skill)
* * Fixed Gunner: Blast sometimes interrupting its own animation (client bug)
* * Fixed Berserker: Raze and Flatten interrupting Vampiric Blow
* * Added skill movement for Berserker: Tackle, Staggering Strike
* * Updated skill IDs to include Intimidation stance for Berzerker: Axe Block, Raze, Flatten, Staggering Strike

### 1.10.1:
* * Fixed Onslaught chain regression

### 1.10.0:
* + Added abnormality prediction system (currently unused)
* ~ Abnormalities are now calculated after chains
* * Fixed Warrior animations during Deadly Gamble: Blade Draw, Scythe, Rain of Blows
* * Fixed Gunner: Point Blank second hit interrupting itself
* * Fixed Gunner: Balder's Vengeance being set to variable-speed
