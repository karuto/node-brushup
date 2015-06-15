// Import a Node global module, in this case 'filesystem'
var fs = require('fs');

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


