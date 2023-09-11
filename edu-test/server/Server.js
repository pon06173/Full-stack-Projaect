const express = require('express');
const webServer = express();

webServer.listen(80, function () {
  console.log("Node.js 활용한 Express Web Server");
})

webServer.get('/', function (request, response) {
  console.log("Root URL 들어옴");
  response.sendFile("C:/Users/sw1/Desktop/Full-stack-Projaect/edu-test/client/views/pages/index.html")
})