const {BASE_DIR} = require("../Global");

const express = require('express');
const webServer = express();

webServer.listen(80, function () {
    console.log("Node.js를 활용한 Express Web Server");
})

webServer.get('/', function (request, response) {
    console.log("Root URL");
    response.sendFile("C:/Users/chlwj/dev/tool/ide/vscode/workspace/edu-test/client/views/pages/index.html")
})

webServer.get('*.*', function (request, response) {
    response.sendFile(BASE_DIR + request.params['0'] + '.' + request.params['1']);
})