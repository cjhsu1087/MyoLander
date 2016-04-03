Myo.connect('com.cjhsu.myolander');

KeyTracker = new (function(){
	this.keysPressed = {}; 
	this.UP = 38; 
	this.LEFT = 37; 
	this.RIGHT = 39; 
	this.DOWN = 40; 
	this.keyListeners = []; 
	
	this.isKeyDown = function (key) { 
		if (typeof key == 'string')
			key = key.charCodeAt(0); 
		return(this.keysPressed[key]);
	};
	
	Myo.on('pose', function(pose_name) {
	console.log(pose_name);
	if (pose_name === 'fingers_spread') {
		KeyTracker.keysPressed[38] = true;
	}
	else if (pose_name === 'wave_in') {
		KeyTracker.keysPressed[37] = true;
	}
	else if (pose_name === 'wave_out') {
		KeyTracker.keysPressed[39] = true;
	}

	});

	Myo.on('pose_off', function(pose_name) {
	console.log(pose_name);
	if (pose_name === 'fingers_spread') {
		KeyTracker.keysPressed[38] = false;
	}
	else if (pose_name === 'wave_in') {
		KeyTracker.keysPressed[37] = false; 
	}
	else if (pose_name === 'wave_out') {
		KeyTracker.keysPressed[39] = false; 
	}
	});


	document.addEventListener("keydown", function(e) {		
		KeyTracker.keysPressed[e.keyCode] = true; }); 

	document.addEventListener("keyup", 	function(e) {
		KeyTracker.keysPressed[e.keyCode] = false;}); 
		
	this.addKeyDownListener = function(key, func) { 
		if (typeof key == 'string')
			key = key.charCodeAt(0); 
		
		this.keyListeners.push({key:key, func:func});
		
	}
		
})();
