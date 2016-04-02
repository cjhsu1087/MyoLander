var Myo = require('myo');

Myo.onError = function(){
	console.log('not connected')
};

Myo.on('connected', function(){
  console.log('connected!', this.id)
});

Myo.on('wave_left', function(){
	console.log('SLAP!!!');
	this.vibrate();
});