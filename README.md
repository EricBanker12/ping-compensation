## Ping Compensation
Tera-Proxy module for Tera Online. Gives you fake attack speed to eliminate ping tax between skills.
### Comparison to Skill Prediction
Ping Compensation | Skill Prediction
:--:|:--:
No Ghosting\* | Occasional Ghosting\*
Less Fluid Animations | More Fluid Animations
Less Benefit For **Very** Short Skills/High Ping | Full Benefit For **Very** Short Skills/High Ping
Partial Lockon Support | Full Lockon Support
Partial Chargables Support | Full Chargables Support
No Combo Attack Support | Full Combo Attack Support
No Blocking Support | Full Blocking Support
Does Not Affect Cooldowns | Reduces Cooldowns By Your Ping

\* Ghosting is playing a skill animation without dealing damage or using a different skill than server recieves/sends.
### My Recommendation (WIP: NOT YET FUNCTIONAL)
Other than ghosting, Skill-Prediction is probably the better choice, but you don't have to make that choice. You can edit `/config/skills.js` and `/config/settings.js` for co-compatability. Use Ping Compensation for troublesome skills that ghost or desync, and use Skill Prediction for everything else.
### Diagram
![No Proxy vs Skill Prediction vs Ping Compensation](https://i.imgur.com/yXttYwv.png)
### Requirements
[Tera-Proxy](https://github.com/meishuu/tera-proxy) and dependencies

For *FULL* Support: the following opcodes should be mapped in your `tera-proxy/node_modules/tera-data/map/protocol.{version}.map` file:
* C_NOTIFY_LOCATION_IN_ACTION
* C_NOTIFY_LOCATION_IN_DASH
* C_PLAYER_LOCATION
* C_PRESS_SKILL
* C_REQUEST_GAMESTAT_PING
* S_ACTION_END
* S_ACTION_STAGE
* S_INSTANT_DASH
* S_INSTANT_MOVE
* S_LOGIN
* S_RESPONSE_GAMESTAT_PONG
### Contributions
Thanks to [Leiki](https://github.com/Leyki), [Pinkie Pie](https://github.com/pinkipi), [SaltyMonkey](https://github.com/SaltyMonkey), and [Yunfei](https://github.com/YunfeiG) for Skill Prediction and `/config/skill.js` contributions and formatting.
