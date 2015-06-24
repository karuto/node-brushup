// Write a program that performs an HTTP GET request to a URL provided to you as the first command-line argument. Write the String contents of each "data" event from the response to a new line on the console (stdout).

var url = process.argv[2]; // 1st command line argument will supply URL

// Perform GET request, callback will be triggered once it receives data
http.get(url, callback).on('error', function(e) {
  console.log("Got error: " + e.message);
});

function callback (response) {
  // 'response' is a Node Stream object, bind event listener to it
  // 'data' event is emitted when a chunk of data is available
  response.on("data", dataStreamCallback);
}

function dataStreamCallback(data) {

}