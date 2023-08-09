var http = require('http');
const express = require("express");
const fs = require("fs"); // fs 모듈 import 추가
const app = express();

app.set('port', 3000);

// bodyParser 미들웨어 셋
app.use(express.static('public'));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// 임시 메모 저장 Array
let memoList = [];

// Path 라우팅 설정
app.get("/", (req, res) => {
    res.end("<h1>Hello world</h1>");
})

app.get("/api/memolist", (req, res) => {

    fs.readFile("", () => {
        // 파일 내용 읽어와서 임시 배열에 저장.
        
        // 저장 후 Ajax 처리 할 수 있도록 JSON으로 반환.
        res.send({memoList: memoList});
    });
});

app.post("/api/memos", (req, res)=>{
    const memos = req.body.memos;
    const regdate = req.body.regdate;

    memoList.push({ memos, regdate });

    // 파일 기록
    fs.writeFileSync();

    // 처리 후 목록으로 이동
    res.redirect("/api/memolist");
});


var server = http.createServer(app);
server.listen(app.get('port'), ()=>{
    console.log(`Server running at http://127.0.0.1:${app.get('port')}`);
});
