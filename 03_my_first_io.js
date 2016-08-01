var fs = require('fs');

// To read a file, you'll need to use fs.readFileSync('/path/to/file')
var file = fs.readFileSync(process.argv[2]);

// Buffer objects can be converted to strings by simply calling the toString() method on them. e.g. var str = buf.toString().  
// JavaScript String can be .split() into an array of substrings and that '\n' can be used as a delimiter.
console.log(file.toString().split('\n').length - 1);


//Offical answer below
// var fs = require('fs')  
 
// var contents = fs.readFileSync(process.argv[2])  
// var lines = contents.toString().split('\n').length - 1  
// console.log(lines)  
 
// note you can avoid the .toString() by passing 'utf8' as the  
// second argument to readFileSync, then you'll get a String!  
//  
// fs.readFileSync(process.argv[2], 'utf8').split('\n').length - 1 