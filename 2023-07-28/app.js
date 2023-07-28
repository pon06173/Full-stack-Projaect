const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');

app.set('port', 5000);
//ejs 설정
app.set("views", __dirname + '/views');
app.set("view engine", "ejs");

// 정적 파일 제공 설정
app.use(express.static('public'));

// 요청 데이터 파싱 미딜웨어 설정
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());
app.use(cors());

// 임시 데이터 리스트
let todoList = [
    {no:1, title:"치맥 하기", done:true},
    {no:2, title:"방 청소 하기", done:false},
    {no:3, title:"명상 하기", done:true},
    {no:4, title:"착한 일 하기", done:false}
];
let cnt = 5;

// EJS 사용을 위한 설정
//select 기능(list)
app.get("/todo", (req, res) => {
    // req.app.render("home", {todoList:todoList},(err, html)=>{
    //     if(err) throw err;
    //     res.end(html);
    // });
    
});

//서버의 insert 기능 (save)
app.post("/input", (req, res) => {
    let todo = {
        no:cnt++, 
        title: req.body.title,
        done:false
    }
    todoList.push(todo);
    res.redirect("list");
});

app.get("/todo/update", (req, res) => {
    let idx = todoList.findIndex(item => {
        return item.no == req.query.no;
    });
    let todo = null;
    if(idx != -1) {
        todo = todoList[idx]
    }
    req.app.render('todoEdit', {todo:todo}, (err, html)=>{
        if(err) throw err;
        res.end(html);
    });
});

app.post("/todo/update", (req, res) => {
    let todo = {
        no: parseInt(req.body.no), 
        title: req.body.title,
        done: req.body.done=='true' ? true : false
    }
    let idx = todoList.findIndex(item => {
        return item.no == req.body.no;
    });
    if(idx != -1) {
        console.log("idx => ", idx);
        todoList[idx] = todo;
    }
    console.log(todoList);
    res.redirect("list");
});

app.post("/todo/delete", (req, res) => {
    let idx = todoList.findIndex(item => {
        return item.no == req.body.no;
    });
    if(idx != -1) {
        todoList.splice(idx, 1);
    }
    res.redirect("list");
});

// ---- RestAPI 방식 설정 : 결과가 JSON으로 반환
// select 기능
app.get("/todo", (req, res) => {
    // res.end(); <--- 인자가 문자열
    // 인자가 객체
    res.send(todoList);
});

// 서버의 insert 기능
app.post("/todo", (req,res) => {
    let todo = {
        no:cnt++, 
        title: req.body.title,
        done:false
    }
    todoList.push(todo);
    res.send(todoList);
});

// update 기능
app.get("/todo/update", (req, res) => {

});

// delete 기능
app.get("/todo/delete", (req, res) => {

});

// 서버 실행
app.listen(app.get('port'), () => {
  console.log(`Server is running at http://localhost:${app.get('port')}`);
});