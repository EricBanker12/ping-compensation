* JitterCompensation	 - enable/disable jitter compensation	

* SkillRetryCount		   - Number of times to retry each skill (0 = disabled). Recommended 1-3.

* SkillRetryMs			   - Time to wait between each retry. SkillRetryMs * SkillRetryCount should be under 100, otherwise skills may go off twice.

* SkillRetryJittercomp - Skills that support retry will be sent this much earlier than estimated by jitter compensation.

* SkillsRetryAlways		 - Setting this to true will reduce ghosting for extremely short skills, but may cause other skills to fail.

* SkillDelayOnFail	   - Basic initial desync compensation. Useless at low ping (<50ms).

* ServerTimeout	       - This number is added to your maximum ping + skill retry period to set the failure threshold for skills.
If animations are being cancelled while damage is still applied, increase this number.

* DefendSuccessStrict  - Set this to false to see Brawler's Perfect Block icon at very high ping (warning: may crash client).
