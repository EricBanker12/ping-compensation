## Ping Compensation
Tera-Proxy module for Tera Online. Gives you fake attack speed to eliminate ping tax between skills.
### My Recommendation
Other than ghosting, [**Skill-Prediction**](https://github.com/tera-mods/skill-prediction) **is probably the better choice**, but you don't have to make that choice. You can edit `/config/config.json` and `/config/preset.js` for co-compatability. **Use Ping-Compensation for troublesome skills** that ghost or desync, and **use Skill Prediction for everything else.** See [config](https://github.com/Mister-Kay/ping-compensation/blob/master/docs/config.md) and [preset](https://github.com/Mister-Kay/ping-compensation/blob/master/docs/preset.md) instructions in the `/docs/` folder.
### Comparison to Skill Prediction
Ping Compensation | Skill Prediction
:--:|:--:
No Ghosting\* | Occasional Ghosting\*
Less Fluid Animations | More Fluid Animations
Partial Benefit For chained, lockon, and chargable skills | Full Benefit For chained, lockon, and chargable skills
No Combo Attack or blocking support | Full Combo Attack and blocking support

\* Ghosting is playing a skill animation without dealing damage or using a different skill than server recieves/sends.
### Diagram
![No Proxy vs Skill Prediction vs Ping Compensation](https://i.imgur.com/yXttYwv.png)
### Requirements
[Tera-Proxy](https://github.com/tera-toolbox/tera-toolbox) and dependencies
### Contributions
Thanks to [Leiki](https://github.com/Leyki), [Pinkie Pie](https://github.com/pinkipi), [SaltyMonkey](https://github.com/SaltyMonkey), [undefined3394](https://github.com/undefined3394), and [Yunfei](https://github.com/YunfeiG) for Skill Prediction and configuration contributions.
