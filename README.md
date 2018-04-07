![Logo](https://github.com/SaltyMonkey/skill-prediction/blob/master/res/spLogo.png?raw=true)

## Introduction

*Simulates skills client-side, eliminating ping-based delays and animation lock.*

**Does this mean my ping will effectively be lower?** 

No. What the module does is attempt to avoid the restrains caused by ping on skills and so letting the player interact with skills in the intended way. Please do remember that skill emulation isn't perfect(or can be due to the lack of server side support) and the module's accuracy is heavily affected by the user's **network quality and natural ping**.

**What about PvP, does it work with no affairs?** 

While the module does support PvP in certain areas it doesn't fully do it or does it perfectly manage player's position as per the server will expect, it's **not recommended for this purpose.** Furthermore, the module can be deactivated in-game via accessing the command `/8 sp off`, more info can be found in `skill-prediction\docs\commands.pdf` locally or hosted [here](https://github.com/SaltyMonkey/skill-prediction/wiki/Commands).

**Notes:**

* By default and when using "active" ping method the ingame ping stats will instead of showing your framerate + ping delay, show the delay provided by **only framerate**.
* It can get you banned due to possible desync and further users report. Use at own risk.

## Installation

1. Download the module via clicking in the button `Clone or Download` and then on `Download Zip`.
2. Uncompress and place the resulting folder in `Tera-proxy\bin\node_modules` and you're set.

**Notes:**

* It's strongly recommended that you utilize the module in conjuction with **Caali's proxy version** since that will let the module update itself and have the needed **tera-data** available. Its can be found on his [discord server](https://discord.gg/maqBmJV).

## Usage

The module by itself doesn't require you to do anything in-game to then make use of it. It's instead suggested that you do take a look at users documentation in the folder `skill-prediction\docs\` locally or hosted in the [wiki](https://github.com/SaltyMonkey/skill-prediction/wiki#usage).

## Troubleshooting

Refer to the [Troubleshooting section](https://github.com/SaltyMonkey/skill-prediction/wiki#troubleshooting) in the wiki **(not developed yet)**. Alternatively, help will also be provided in [Caali's Proxy and Private server development discord](https://discord.gg/maqBmJV).

## Awakening update

With awakening adding a marginal amount of skills and new interactions among them(including new types of these) it's fair to say that **a lot of skills will not fully work or work at all for a while until it gets adressed.** If you suffer from this, it's for the moment suggested to disable the issueing skill. If you wanna help out with these please do open one in [SP Issues](https://github.com/SaltyMonkey/skill-prediction/issues). 

## Other stuff

[SP Wiki](https://github.com/SaltyMonkey/skill-prediction/wiki)

[Patreon link for helping Monkey get drunk(and develop SP)](https://www.patreon.com/SaltyMonkey)

[Origin repository](https://github.com/pinkipi/skill-prediction)

[![Donate](https://img.shields.io/badge/Donate-PayPal-ff69b4.svg)](https://www.paypal.com/cgi-bin/webscr?cmd=_donations&business=5MTKARBK2CNG8&lc=US&item_name=Pinkie%27s%20TERA%20Mods&currency_code=USD) 
Donation link for the origin repository developer.
