const express = require("express");
const app = express();
const http = require("http");
var formidable = require("formidable");
var fs = require("fs");

//포트
app.set("port", 3000);

// 정적 파일 제공 설정
app.use(express.static("public"));

// 라우트 설정
app.get("/hello", (req, res) => {
  res.send("Hello, Express!");
});

// 서버 실행
const server = http.createServer(app);
server.listen(app.get("port"), () => {
  console.log("Server is running at http://127:0.0.1:" + app.get("port"));
});
