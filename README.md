:heart: [![Donate](https://img.shields.io/badge/Donate-PayPal-ff69b4.svg)](https://www.paypal.com/cgi-bin/webscr?cmd=_donations&business=5MTKARBK2CNG8&lc=US&item_name=Pinkie%27s%20TERA%20Mods&currency_code=USD) :heart:

## Skill Prediction
Simulates skills client-side, eliminating ping-based delays and animation lock.

**Note**: If your skills become delayed, make sure Windows Defender is disabled. See **settings.js** for additional configuration options for non-standard setups.

**Noctenium Infusion**: Having regular, Friendly, or Alliance Noctenium Infusion in your inventory will cause the server to send a huge chunk of redundant data after every skill while using *any* type of Noctenium Infusion. You may use **[this mod](https://github.com/mister-kay/no-more-noctenium-lag)** to reduce the client lag, however the network lag will still be noticable unless you have 50Mbps or higher download speed.

The recommended solution is to delete or bank any Noctenium Infusion and use Refined Noctenium Infusion instead.

## Developers
### config/skills.js
This file contains skill data specific to skill-prediction. The basic structure is as follows:
* `classId` -> `skillGroup` -> `skillSub` -> `skillData` **OR**
* `classId` -> `skillGroup` -> `'*'` -> `skillData` **OR**
* `classId` -> `'*'` -> `skillData`

`skillGroup` and `skillSub` are derived from the skill ID for player skills, which follows a pattern for every skill BHS has implemented thus far:
* **XXYYZZ** where **X** = `skillGroup`, **Y** = `skillLevel`, **Z** = `skillSub`

`skillData` is an object containing one or more of the following properties, or a truthy value such as `true` to inherit defaults:
* **type**: Special skill type, one of the following:
* * `'retaliate'`: Retaliate skill that can be used while knocked down.
* * `'hold'`: Temporarily-held skills (Corruption Ring).
* * `'holdInfinite'`: Infinitely-held skills (Stand Fast, Axe Block, etc.).
* * `'dash'`: Fixed-speed dash using S_INSTANT_DASH.
* * `'teleport'`: Fixed-distance teleport using S_INSTANT_MOVE.
* * `'lockon'`
* * `'lockonCast'`
* * `'charging'`: Charging skills (Thunderstrike, Radiant Arrow, etc.).
* * `'storeCharge'`: Store charge level for the interrupted skill, to be granted later using `grantCharge` (used for ex. Evasive Smash).
* * `'grantCharge'`: Grant the charging level as a charged skill.
* * `'userProjectile'`: Client-sided projectile (not a skill).
* **fixedSpeed**: Fixed animation speed (always 1 or unset).
* **length**: The skill animation length before taking into account speed multipliers.
* **distance**: The distance the skill moves the player in the direction it's facing.
* **noInterrupt** (array): A list of skills that cannot be interrupted by this skill. Each entry can be either `skillGroup` or `'skillGroup-skillSub'`.
* **projectiles**: An array of `skillSub` projectiles. Requires DEBUG_PROJECTILES to be enabled.
* **triggerAbnormal** (object): Abnormalities this skill triggers on use. Keys are abnormality IDs, values are durations.
* **consumeAbnormal**: An array of abnormalities consumed before this skill begins.
* **consumeAbnormalEnd**: An array of abnormalities consumed after this skill ends.
* **movement**: An array of segment objects containing the following parameters (from S_ACTION_STAGE):
* * **duration**: Segment duration.
* * **speed**: Animation speed multiplier for this segment.
* * **unk**: Always 1?
* * **distance**: Distance moved for this segment.
* **glyphs** (object): Keys are glyph IDs, values contain one or more properties:
* * **speed**: Animation speed multiplier.
* * **chargeSpeed**: Bonus charging speed (additive).
* * **movement**: Overrides **movement**.
* * **distance**: Multiplies **distance**.
* * **stamina**: Added to **stamina**.
* **abnormals** (object): Keys are abnormality IDs, values contain one or more properties:
* * **speed**: Multiplies **speed**.
* * **chargeSpeed**: Bonus charging speed (additive).
* * **chain**: Overrides `skillSub` (last abnormal defined takes priority).
* * **skill**: Overrides `skillId` (last abnormal defined takes priority).
* **chains** (object): Keys are `skillGroup` or `'skillGroup-skillSub'`, values override `skillSub`.
* **inPlace** (object): Used while casting a skill without pressing movement keys.
* * **movement**: Overrides **movement**.
* * **distance**: Overrides **distance**.
* **stamina**: How much Stamina (Resolve, Willpower, Chi, Ragnarok) is required to use this skill.
* **instantStamina**: Simulate stamina usage without waiting for server response.
* **requiredBuff**: Abnormality ID (or an array of possible IDs) required to use this skill.
* **forceClip**: Rubberbands the player to the server location in S_ACTION_STAGE.movement (if set) when the skill ends. Used to prevent iframes from clipping through gates, etc.
* **interruptibleWithAbnormal** (object): Keys are abnormality IDs, values are a `skillGroup` that can be interrupted with this skill.
* **chainOnRelease**: `skillSub` animation to play if the button is released early (only for `type: 'hold'` or `type: 'holdInfinite'`).
* **teleportStage**: Stage at which to apply teleport (only for `type: 'teleport'`).
* **partyOnly**: Lockon only applies to party members (only for `type: 'lockon'`).
* **flyingSpeed**: Projectile speed (only for `type: 'userProjectile'`).
* **flyingDistance**: Projectile curve endpoint (only for `type: 'userProjectile'`).
* **noRetry**: Disables automatic retries for this skill.
* **race** (object): Keys are race+gender ID, values override `skillData` properties.
* **level** (object): Keys are skill level - 1 (to enable array usage), values override `skillData` properties.