//
// Learning_003
//
// TEST: node Learning_003.js
// REQ.: curl -X GET http://localhost:8080/test?name=Haruhiko
//
var http = require('http');
var url = require('url');

var server = http.createServer(function(req, res) {
    var url_parse = url.parse(req.url, true);
    console.log(url_parse);
    res.end();
}).listen(8080);