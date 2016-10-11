
/*

var http = require('http');
var map  = require('through2-map');

var server = http.createServer(function(req, res) {
    if(req.method !== 'POST')
        return res.end('POST please');

    req.pipe(map(function(chunk) {
        return chunk.toString().toUpperCase();
    })).pipe(res);
});

server.listen(8000); */





const http = require('http');

var server = http.createServer(function(req, res) {
    //if(req.method != "POST") resp.end('I respond to POST only');

    var body = '';
    req.setEncoding('utf8');
    req.on('data', function(chunk){
        body+=chunk;
    })

    req.on('end', function(){
        res.end(body.toUpperCase());
    })

});
server.listen(process.argv[2]);

