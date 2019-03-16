//
// Learning_009
//
// TEST: node Learning_009.js
// REQ.: curl -X POST -H "Content-Type: application/json" -d "{\"name\":[\"Haruhiko\",\"Inoue\"],\"Age\":36}" http://localhost:8080/
//
var express = require('express');
var app = express();
var bodyParser = require('body-parser');
app.use(bodyParser.json());   // JSON データを受け取る

app.post('/', function(req, res) {
  for (key in req.body) {
    console.log(key, '=', req.body[key]);
  }
  res.end();
});
app.listen(8080);