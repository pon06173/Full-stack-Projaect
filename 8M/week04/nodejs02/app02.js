// app.js (또는 index.js)
const express = require("express");
const app = express();
const path = require("path");
const bodyParser = require("body-parser");
const morgan = require("morgan");

//const port = 3000;
app.set("port", 3000);
// 뷰 엔진 설정
//console.log("views:", path.join(__dirname, "views"));
app.set("views", path.join(__dirname, "views")); // prefix
app.set("view engine", "ejs"); // suffix
//console.log("views>>>", app.get("views"));

// 정적 파일 제공을 위한 미들웨어 설정 (serve-static 모듈)
app.use(express.static("public"));

// 외부 모듈로 미들웨어 설정
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
// 로글 형식 지정 미들웨어 설정
//app.use(morgan('combined'));
app.use(morgan("dev"));

// 사용자 정의 미들웨어
app.use((req, res, next) => {
  console.log("사용자 정의 미들웨어 1");
  // 다음 기능으로 넘긴다.
  next();
});

app.use((req, res, next) => {
  console.log("사용자 정의 미들웨어 2");
  // 다음 기능으로 넘긴다.
  next();
});

// 라우팅 설정
app.get("/home", (req, res) => {
  // 뷰 템플릿의 파일명만 명시한다.
  // node.js의 콜백함수 첫번째 인자는 err
  //console.log("GET - /home 요청");
  req.app.render("home", { title: "Home page" }, (err, html) => {
    if (err) throw err;
    res.end(html);
  });
});

// RestFul 요청 CRUD - get(), post(), put(), delete()
app.get("/about", (req, res) => {
  res.send("소개 페이지");
});

app.get("/todo", (req, res) => {
  res.send("todo list 목록");
});

app.post("/todo", (req, res) => {
  res.send("todo item 저장");
});

app.put("/todo", (req, res) => {
  res.send("수정 기능");
});

app.delete("/todo", (req, res) => {
  res.send("삭제 기능");
});

// 서버 실행
app.listen(app.get("port"), () => {
  console.log(`서버가 http://localhost:${app.get("port")} 에서 실행 중입니다.`);
});
