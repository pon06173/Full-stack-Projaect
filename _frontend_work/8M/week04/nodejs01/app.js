// https://docs.google.com/presentation/d/1hTAwoG6A_0BazmwQi2I21KZFnCiLRfhX/edit#slide=id.p32
var http = require('http');
const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
  res.send('Hello, world');
});

app.listen(port, () => {
  console.log(`서버가 http://localhost:${port} 에서 실행 중입니다.`);
});