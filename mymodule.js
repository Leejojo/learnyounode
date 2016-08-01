var fs = require('fs');

module.exports = function (directory, filter, callback) {
  fs.readdir(directory, function (err, list) {
    if (err)
      return callback(err);

    var extension = '.' + filter;

    var files = list.filter(function (f) {
      return f.indexOf(extension) !== -1;
    });

    callback(null, files);
  });
};


// Official Answer Below
// var fs = require('fs')  
// var path = require('path')  
 
// module.exports = function (dir, filterStr, callback) {  
 
//  fs.readdir(dir, function (err, list) {  
//    if (err)  
//      return callback(err)  
 
//    list = list.filter(function (file) {  
//      return path.extname(file) === '.' + filterStr  
//    })  
 
//    callback(null, list)  
//  })  
// }  

