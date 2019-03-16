//
// Learning_004
//
// TEST: node Learning_004.js
// REQ.: curl -X POST -d 'name=Haruhiko' http://localhost:8080/test
//
var http = require('http');

var server = http.createServer(function(req, res) {
  if (req.method == 'POST') {
    var body = '';
    req.on('data', function(chunk) {
        body += chunk;
    });
    req.on('end', function() {
      console.log(body);
      res.end();
    });
  }
}).listen(8080);