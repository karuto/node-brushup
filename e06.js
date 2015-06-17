// Use custom module in Node (module resides in e06-module.js)
var lsModule = require('./e06-module');

var targetDir = process.argv[2]; // 1st command line argument will supply scanning dir
var targetExt = process.argv[3]; // 2nd command line argument will supply filtering ext

// Call the custom module with callback
lsModule(targetDir, targetExt, lsCallback);

function lsCallback(err, files) {
  if (err) {
    return console.log(err);
  }
  // print files
  for (var i = 0; i < files.length; i++) {
    console.log(files[i]);
  }
}