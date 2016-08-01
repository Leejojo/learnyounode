var fs = require('fs');

// Instead of fs.readFileSync() you will want to use fs.readFile().
// Instead of using the return value of this method you need to collect the value from a callback function that you pass in as the second argument.
// Remember that idiomatic Node.js callbacks normally have the signature: function callback (err, data) { /* ... */ }
var file = fs.readFile(process.argv[2], function (err, data) {
  if (!err) {
    console.log(data.toString().split('\n').length - 1);
  }
});

// Official answer below

// var fs = require('fs')  
// var file = process.argv[2]  
 
// fs.readFile(file, function (err, contents) {  
//  // fs.readFile(file, 'utf8', callback) can also be used  
//  var lines = contents.toString().split('\n').length - 1  
//  console.log(lines)  
// })  
