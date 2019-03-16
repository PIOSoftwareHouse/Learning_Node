//
// Learning_006
//
// TEST: node Learning_006.js
// REQ.: curl -X POST -d 'Hello' http://localhost:8080/
//
var express = require('express');
var app = express();
var bodyParser = require('body-parser');
app.use(bodyParser.raw({ type:'*/*' }));    // RAW データを受け取る

app.post('/', function(req, res) {
  console.log(req.body);
  res.end();
});

app.listen(8080);