//
// Learning_002
//
// TEST: node Learning_002.js
// REQ.: curl http://localhost:8080/
//
var http = require('http');
var server = http.createServer(function(req, res) {
    res.write("Hello world!\n");
    res.end();
}).listen(8080);