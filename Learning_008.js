//
// Learning_008
//
// TEST: node Learning_008.js
// REQ.: curl -X POST -d "name1=Haruhiko&name2=Inoue&age=49" http://localhost:8080/
//
var express = require('express');
var app = express();
var bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({extended:true}));    // FORM データを受け取る

app.post('/', function(req, res) {
  for (key in req.body) {
    console.log(key, '=', req.body[key]);
  }
  res.end();
});

app.listen(8080);