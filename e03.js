// Import a Node global module, in this case 'filesystem'
var fs = require('fs');

// All synchronous (blocking) methods end with 'Sync'
var fileBuffer = fs.readFileSync(process.argv[2]); // 1st argument will supply file loc

// Convert the buffer into a string
var content = fileBuffer.toString();
// Use regex to split newlines and count length of array
var l = content.split('\n').length-1;

console.log(l);