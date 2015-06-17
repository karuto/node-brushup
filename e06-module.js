// Import a Node global module, in this case 'filesystem' & 'path'
var fs = require('fs');
var path = require('path');

// Export custom module - bind it to a function
module.exports = readDirModule;

// Design instructions: The module must export a single function that takes three arguments: the directory name, the filename extension string and a callback function, in that order.
// 
function readDirModule(targetDir, targetExt, lsCallbackToMain) {
  var parsedTargetExt = "." + targetExt;
  console.log(lsCallbackToMain);

  // Must use in-line callback style here
  // i.e. not defining finishedScanningCallback elsewhere
  // Reason is for easy access to 'parsedTargetExt' variable, otherwise we would have to use closure / anonymous function to pass that in, but we would not be able to due to the special parameter requirement of readdir's callback (i.e. only having error and list as parameters)
  fs.readdir(targetDir, function(error, list) {
    if (error) {
    return lsCallbackToMain(error);
    // If you receive an error, e.g. from your call to  fs.readdir(), the callback must be called with the error, and only the error, as the first argument.
  } else {
    var matches = [];
    // Loop through the file list, retrieve only ones matching ext
    for (var i = 0; i < list.length; i++) {
      // JavaScript string comparison
      if (path.extname(list[i]).localeCompare(parsedTargetExt) == 0) {
        matches.push(list[i]);
      }
    }
    lsCallbackToMain(null, matches);
    // This convention stipulates that unless there's an error, the first argument passed to the callback will be null, and the second will be your data.
  }
  });
  // callback will be triggered once readdir finishes
}

function callbackExecuter(callback) {
  callback();
}

// function finishedScanningCallback(error, list, parsedTargetExt) {
// 	if (error) {
//     return lsCallbackToMain(error);
//     // If you receive an error, e.g. from your call to  fs.readdir(), the callback must be called with the error, and only the error, as the first argument.
//   } else {
//     var matches = [];
//     // Loop through the file list, retrieve only ones matching ext
//     for (var i = 0; i < list.length; i++) {
//       // JavaScript string comparison
//       if (path.extname(list[i]).localeCompare(parsedTargetExt) == 0) {
//         matches.push(list[i]);
//       }
//     }
//     lsCallbackToMain(null, matches);
//     // This convention stipulates that unless there's an error, the first argument passed to the callback will be null, and the second will be your data.
//   }
// }