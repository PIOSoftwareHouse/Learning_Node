//
// Learning_005
//
// TEST: node Learning_005.js
// REQ.: curl -X GET http://localhost:8080/test1
// REQ.: curl -X POST http://localhost:8080/test2
//
var express = require('express');
var mymod = require('./mymod');
var app = express();
app.listen(8080);

app.get('/test1', function(req, res) {
  var message = mymod.send01();
  // res.send('TEST1\n');
  res.send(`${message}`);
});

app.post('/test2', function(req, res) {
  var message = mymod.send02();
  // res.send('TEST2\n');
  res.send(`${message}`);
});