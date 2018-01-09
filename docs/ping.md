From version 3.8 SP can use new optional passive method for ping check by "Undefined".

Good features: 
* Not detectable
* Actual ping value in battle without delays 

Bad features:
* 1-3 first skills can be a bit delayed in battle
* Effect can be different for users
* Your skills will be broken with bad settings

How to:

1) Open config.json (path `./config/config.json`)

2) Find "pingMethod" field and change it to "passive" (be care)

3) Edit "pingHistoryMax" field (should be 40+, 20 for active ping method)

Optional (IF YOU STARTED TO DO SMTH AFTER THAT LINE THEN YOU MUST END ALL STEPS):

4) Find "pingSpikesLimit" and set it to "true" (especially if your connection unstable)

5) Find "pingSpikesMin": field and set it to:  `your average minimal ping - 35`
6) Find "pingSpikesMax" field and set it to: `your average max ping + 50`

P.S. Steps 5 and 6 should be corrected by user (if you will have problems)
