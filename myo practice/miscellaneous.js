miscellaneous

Myo.on('fingers_spread', function(pose_name) {
		KeyTracker.keysPressed[38] = true;
	});
	Myo.on('fingers_spread_off', function(pose_name) {
		KeyTracker.keysPressed[38] = false;
	});
	Myo.on('wave_in', function(pose_name) {
		KeyTracker.keysPressed[37] = true;
	});
	Myo.on('wave_in_off', function(pose_name) {
		KeyTracker.keysPressed[37] = false;
	});
	Myo.on('wave_out', function(pose_name) {
		KeyTracker.keysPressed[39] = true;
	});
	Myo.on('wave_out_off', function(pose_name) {
		KeyTracker.keysPressed[39] = false;
	});