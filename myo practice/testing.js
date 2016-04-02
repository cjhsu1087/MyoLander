var Myo = require('myo');

Myo.on('connected', function(){
  console.log('connected!', this.id)
});

Myo.on('fist', function(){
	console.log('Hello Myo!');
	this.vibrate();
});