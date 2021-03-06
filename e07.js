var http = require('http');

var url = process.argv[2]; // 1st command line argument will supply URL

// Perform GET request, callback will be triggered once it receives data
http.get(url, callback).on('error', function(e) {
  console.log("Got error: " + e.message);
});

function callback (response) {
  // 'response' is a Node Stream object, bind event listener to it
  // 'utf8' so that it will emit String rather than standard Node Buffer objects
  response.setEncoding('utf8');
  // 'data' event is emitted when a chunk of data is available
  response.on("data", dataStreamCallback);
  response.on('error', console.error);
}

function dataStreamCallback(data) {
  console.log(data);
}