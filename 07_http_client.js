var http = require('http');

var args = process.argv.slice(2);
var url = args[0];


// Unlike other callback functions, this one has the signature:  
//   function callback (response) { /* ... */ }  

// The response object / Stream that you get from http.get() also has a setEncoding() method. If you call this method with "utf8", the "data" events will emit Strings rather than the standard Node Buffer objects which you have to explicitly convert to Strings.

// The three events that are of most interest are: "data", "error" and "end". You listen to an event like so:  
//   response.on("data", function (data) { /* ... */ })

http.get(url, function (response) {
  response.setEncoding('utf8');
  response.on('data', function (data) {
    console.log(data);
  });
});


// Official Answer Below
// var http = require('http')  
 
// http.get(process.argv[2], function (response) {  
//  response.setEncoding('utf8')  
//  response.on('data', console.log)  
//  response.on('error', console.error)  
// }).on('error', console.error)