//
// Learning_010
//
// TEST: node Learning_010.js
//
var fs = require('fs');
var ejs = require('ejs');
var template = fs.readFileSync('./views/learning_010.ejs', 'utf8');

var buf = ejs.render(template, {
  title: "EJS Sample Code",
  content: "This is EJS Sample..."
});
console.log(buf);