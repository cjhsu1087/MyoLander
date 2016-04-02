var Myo = require('myo');


Myo.on('connected', function(){
  console.log('connected!', this.id)
});

Myo.on('wave_in', function(){
	console.log('SLAP!!!');
	this.vibrate();
});

Myo.connect();