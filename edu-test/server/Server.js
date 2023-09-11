const {BASE_DIR} = require("../Global");

const express = require('express');
const webServer = express();

const FS = require('fs');
const Transform = require('stream').Transform;
const newLineStream = require('new-line');

webServer.listen(80, function () {
  console.log("Node.js 활용한 Express Web Server");
})

webServer.get('/', function (request, response) {
  console.log("Root URL 들어옴");
  response.sendFile("C:/Users/sw1/Desktop/Full-stack-Projaect/edu-test/client/views/pages/index.html")
})

webServer.get('*.page', function (request, response) {
  const streamTransform = new Transform();
  streamTransform._transform = function (data, encoding, done) {
      let fileContent = data.toString();
let replaceBeforeContent = `<script id="app-start-view">const APP_START_VIEW_PATH = '/';</script>`;
      let replaceAfterContent = `<script id="app-start-view">const APP_START_VIEW_PATH = '${request.params['0']}.page';</script>`;
      fileContent.replace(replaceBeforeContent, replaceAfterContent);
this.push(fileContent);
      done();
  }
FS.createReadStream(`${BASE_DIR}/client/views/pages/index.html`).pipe(newLineStream()).pipe(streamTransform).pipe(response);
})


webServer.get('*.*', function (request, response) {
  response.sendFile(BASE_DIR + request.params['0'] + '.' + request.params['1']);
})