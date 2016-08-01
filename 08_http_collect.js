var http = require('http');

var args = process.argv.slice(2);
var url = args[0];

http.get(url, function (response) {
  var result = "";

  response.setEncoding('utf8');
  response.on('data', function (data) {
    result += data;
  });

  response.on('end', function() {
    console.log(result.length);
    console.log(result);
  });
});


// Official Answer Below
// var http = require('http')  
// var bl = require('bl')  
 
// http.get(process.argv[2], function (response) {  
//  response.pipe(bl(function (err, data) {  
//    if (err)  
//      return console.error(err)  
//    data = data.toString()  
//    console.log(data.length)  
//    console.log(data)  
//  }))    
// })  

