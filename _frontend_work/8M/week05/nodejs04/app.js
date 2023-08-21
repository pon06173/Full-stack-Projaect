const http = require('http');
const express = require('express');
const app = express();
const path = require("path");
const morgan = require('morgan');
const cookieParser = require('cookie-parser');
const expressSession = require('express-session');
const cors = require('cors');

// 라우트 모듈 사용.
const router = require('./routes/routes');
const calc = require('./routes/calc');
const count = require('./routes/count')
const chat_ajax = require('./routes/chat_ajax')

// IT는 반복이다.
// 암기 해야 할것은 암기 하고 이해 할것은 이해 한다.
// 당장 이해되지 않는것은 외워서 쓰다보면 이해 된다.
// 독서백편의자현

app.set('port', 3000);
app.set("views", path.join(__dirname, "views")); // 경로
app.set("view engine", "ejs"); // 확장자

// body-parser 미들웨어 설정(Post요청 방식의 파라미터 전달)
app.use(express.json());
app.use(express.urlencoded({extended:false}));
// staitc 미들웨어 설정 (정적파일 서비스)
app.use(express.static(path.join(__dirname, "public")));
// Access-Control-Allow-Origin 해결
// npm i cors -S
app.use(cors());

// cookie와 session 모듈 설정.
// npm i cookie-parser -S
// npm express-session -S
app.use(cookieParser());
app.use(expressSession({
    secret: 'my key',
    resave: true,
    saveUninitialized: true
}));


app.use(morgan('tiny'));




// 라우터 미들웨어 등록
app.use('/', router);
app.use('/', calc);
app.use('/', count);
app.use('/', chat_ajax);

const server = http.createServer(app);
server.listen(app.get('port'), ()=>{
    console.log(`Server at http://127.0.0.1:${app.get('port')}`);
});