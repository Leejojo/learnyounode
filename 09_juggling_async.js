
var http = require('http');

var args = process.argv.slice(2);

var results = [];
var done = [];

for (var i = 0; i < 3; i++) {
  var url = args[i];

  results.push('');
  done.push(false);

  http.get(url, createResponseHandler(i));
}

function createResponseHandler(i) {
  return function (response) {
    response.setEncoding('utf8');

    response.on('data', function (data) {
      results[i] += data;
    });

    response.on('end', function() {
      done[i] = true;

      if (allRequestsDone())
        printResults();
    });
  };
}

function allRequestsDone() {
  return done.reduce(function (result, current) {
    return result && current;
  }, true);
}

function printResults() {
  for (var i = 0; i < results.length; i++) {
    console.log(results[i]);
  }
}


// Official Answer Below
// var http = require('http')  
// var bl = require('bl')  
// var results = []  
// var count = 0  
 
// function printResults () {  
//  for (var i = 0; i < 3; i++)  
//    console.log(results[i])  
// }  
 
// function httpGet (index) {  
//  http.get(process.argv[2 + index], function (response) {  
//    response.pipe(bl(function (err, data) {  
//      if (err)  
//        return console.error(err)  
 
//      results[index] = data.toString()  
//      count++  
 
//      if (count == 3)  
//        printResults()  
//    }))  
//  })  
// }  
 
// for (var i = 0; i < 3; i++)  
//  httpGet(i)  
 
