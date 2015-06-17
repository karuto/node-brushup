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


/* Reference from e04

// All synchronous (blocking) methods end with 'Sync'
// All asynchronous (non-blocking) methods won't have 'Sync'
fs.readFile(process.argv[2], finishedReadingCallback); 
// 1st command line argument will supply file loc
// callback will be triggered once readFile finishes

// The actual callback content
function finishedReadingCallback(error, fileBuffer) {
  if (error) {
  	return console.error(error);
  }
  // At this point we are safe to do the same operation
  // Convert the buffer into a string
  var content = fileBuffer.toString();
  // Use regex to split newlines and count length of array
  var l = content.split('\n').length-1;
  console.log(l);
}



*/