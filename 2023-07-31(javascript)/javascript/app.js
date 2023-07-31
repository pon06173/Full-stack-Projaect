const express = require('express');
const app = express();
const http = require('http');
const formidable = require('formidable');
const fs = require('fs');

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())
// 포트 
app.set('port',5000);

// 정적 파일 제공 설정
app.use(express.static('public'));

app.get('/hello', (req, res) => {
  res.send('Hello, Express!');
});

// 라우트 설정
app.post('/fileupload', (req, res) => {
  var form = new formidable.IncomingForm();
    form.parse(req, function (err, fields, files) {
      var oldpath = files.filetoupload.filepath;
      var newpath = "C:\\Users\\User\\upload\\" + files.filetoupload.originalFilename;
      fs.rename(oldpath, newpath, function (err) {
        if (err) throw err;
        res.write('File uploaded and moved!');
        res.end();
      })
    })
});

// 서버 실행
const server = http.createServer(app);
server.listen(app.get('port'), () => {
    console.log("Server is running at http://127.0.0.1:"+ app.get('port'));
});