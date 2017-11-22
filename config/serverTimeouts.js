/*
This number is added to your maximum ping + skill retry period to set the failure threshold for skills.
If animations are being cancelled while damage is still applied, increase this number.
*/
module.exports = {
	timeouts:
	{
		'*': 200, //Default value
		3: 2500,  //Berserker
		9: 100	  //Gunner
	}
}
