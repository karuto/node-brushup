// Import a Node global module, in this case 'filesystem' & 'path'
var fs = require('fs');
var path = require('path');

var targetDir = process.argv[2]; // 1st command line argument will supply scanning dir
var targetExt = "." + process.argv[3]; // 2nd command line argument will supply filtering ext

fs.readdir(targetDir, finishedScanningCallback);
// callback will be triggered once readdir finishes

function finishedScanningCallback(error, list) {
	if (error) {
		return console.log(error);
	}
	// Loop through the file list, print only ones matching ext
	for (var i = 0; i < list.length; i++) {
		// JavaScript string comparison
		if (path.extname(list[i]).localeCompare(targetExt) == 0) {
			console.log(list[i]);			
		}
	}
}