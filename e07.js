// Write a program that performs an HTTP GET request to a URL provided to you as the first command-line argument. Write the String contents of each "data" event from the response to a new line on the console (stdout).

var url = process.argv[2]; // 1st command line argument will supply URL

// Perform GET request, 
http.get(url, callback);

function callback (response) {
  // 'response' is a Node Stream object, bind event listener to it
  response.on("data", dataStreamCallback);
}