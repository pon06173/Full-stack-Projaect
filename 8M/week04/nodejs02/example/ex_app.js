// https://docs.google.com/presentation/d/1hTAwoG6A_0BazmwQi2I21KZFnCiLRfhX/edit#slide=id.p32
var http = require('http');

var server = http.createServer();

server.listen(3001, ()=>{
    console.log('http://127.0.0.1:'+3001);
});

server.on('connection', function(socket) {
    console.log("클라이언트 접속 >>> ");
});

server.on('request', function(req, res) {
    console.log("클라이언트 요청 >>> ");
    res.end("<h1>Hello world!</h1>");
});

server.on('close', function() {
    console.log("클라이언트 종료 >>> ");
});