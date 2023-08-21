const http = require('http');
const express = require('express');
const app = express();
const fs = require('fs');

app.set('port', 5000);  // ===> app.get('port')

app.use(express.static("public"));


app.get("/home", (req, res) => {
    console.log("GET - /home 요청 완료!");

    res.end("<h1>Welcome to home!</h1>"); // end(문자열), send(객체), redirect(경로) ...
});


const server = http.createServer(app);
server.listen(app.get('port'), ()=>{
    console.log("Server running at http://127.0.0.1:"+app.get('port'));
});