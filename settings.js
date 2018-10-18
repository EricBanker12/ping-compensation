module.exports = {
	JITTER_COMPENSATION:	true,
	SKILL_RETRY_COUNT:		3,		//	Number of times to retry each skill (0 = disabled). Recommended 1-3.
	SKILL_RETRY_MS:			25,		/*	Time to wait between each retry.
										SKILL_RETRY_MS * SKILL_RETRY_COUNT should be under 100, otherwise skills may go off twice.
									*/
	SKILL_RETRY_JITTERCOMP:	15,		//	Skills that support retry will be sent this much earlier than estimated by jitter compensation.
	SKILL_RETRY_ALWAYS:		false,	//	Setting this to true will reduce ghosting for extremely short skills, but may cause other skills to fail.
	SKILL_DELAY_ON_FAIL:	true,	//	Basic initial desync compensation. Useless at low ping (<50ms).
	SERVER_TIMEOUT:			200,	/*	This number is added to your maximum ping + skill retry period to set the failure threshold for skills.
										If animations are being cancelled while damage is still applied, increase this number.
									*/
	FORCE_CLIP_STRICT:		true,	/*	Set this to false for smoother, less accurate iframing near walls.
										Warning: Will cause occasional clipping through gates when disabled. Do NOT abuse this.
									*/
	DEFEND_SUCCESS_STRICT:	true,	//	[Brawler] Set this to false to see the Perfect Block icon at very high ping (warning: may crash client).
	PING_INTERVAL:			6000,	//	Interval between pings. Recommended 2000-3000ms for WiFi or unstable connections, 6000ms for wired.
	PING_TIMEOUT:			30000,	//	Milliseconds to wait before giving up and retrying ping.
	PING_HISTORY_MAX:		20,		//	Maximum number of ping samples used to calculate min/max/avg values.
	DEBUG:					false,
	DEBUG_LOC:				false,
	DEBUG_GLYPH:			false,
	DEBUG_PROJECTILE:		false,
	DEBUG_ABNORMAL:			false
}