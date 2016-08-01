var readDir = require('./mymodule.js');

var args = process.argv.slice(2);
var dir = args[0];
var filter = args[1];

readDir(dir, filter, function (err, list) {
  list.forEach(function (i) {
    console.log(i);
  });
});

// Official Answer Below
// var filterFn = require('./solution_filter.js')  
// var dir = process.argv[2]  
// var filterStr = process.argv[3]  
 
// filterFn(dir, filterStr, function (err, list) {  
//  if (err)  
//    return console.error('There was an error:', err)  
 
//  list.forEach(function (file) {  
//    console.log(file)  
//  })  
// }) 