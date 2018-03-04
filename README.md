## Ping Compensation
Tera-Proxy module for Tera Online. Gives you fake attack speed to eliminate ping tax between skills.
### Comparison to Skill Prediction
Ping Compensation | Skill Prediction
:--:|:--:
No Ghosting\* | Occasional Ghosting\*
Less Fluid Animations | More Fluid Animations
Partial Benefit For chained and lockon skills | Full Benefit For chained and lockon skills
No Combo Attack, blocking, and chargables support | Full Combo Attack, blocking, and chargables support

\* Ghosting is playing a skill animation without dealing damage or using a different skill than server recieves/sends.
### My Recommendation (WIP: NOT FULLY TESTED YET)
Other than ghosting, Skill-Prediction is probably the better choice, but you don't have to make that choice. You can edit `/config/config.json` and `/config/preset.js` for co-compatability. Use Ping Compensation for troublesome skills that ghost or desync, and use Skill Prediction for everything else. See `docs` folder for details.
### Diagram
![No Proxy vs Skill Prediction vs Ping Compensation](https://i.imgur.com/yXttYwv.png)
### Requirements
[Tera-Proxy](https://github.com/meishuu/tera-proxy) and dependencies
### Contributions
Thanks to [Leiki](https://github.com/Leyki), [Pinkie Pie](https://github.com/pinkipi), [SaltyMonkey](https://github.com/SaltyMonkey), [undefined3394](https://github.com/undefined3394), and [Yunfei](https://github.com/YunfeiG) for Skill Prediction and configuration contributions.
