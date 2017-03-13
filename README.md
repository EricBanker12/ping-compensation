Simulates skills client-side, eliminating ping-based delays and animation lock.

## Changelog
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
