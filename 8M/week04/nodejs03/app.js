const express = require("express");
const app = express();
const path = require("path");
const bodyParser = require("body-parser");
const morgan = require("morgan");
const cors = require("cors");
const mongoose = require("mongoose");
const Todo = require("./models/todo");

app.set("port", 3000);
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

app.use(cors());
app.use(express.static("public"));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(morgan("dev"));

mongoose.connect("mongodb://127.0.0.1:27017/mongo", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// dn에 저장된 모든 할 일 목록을 조회하고, 조회된 목록을 클라이언트에게 응답으로 보냄
app.get("/todo", async (req, res) => {
  try {
    const todoList = await Todo.find();
    res.send(todoList);
  } catch (err) {
    console.error("Error:", err);
    res.status(500).json({ error: "에러 발생" });
  }
});

// 클라이언트로부터 받은 할 일 제목을 사용하여 새로운 할 일 객체를 생성하고
// dn에 저장한 후, 업데이트된 할 일 목록을 클라이언트에게 반환
let noCnt = 1;

app.post("/todo", async (req, res) => {
  try {
    let title = req.body.title;
    const newTodo = new Todo({
      no: noCnt++,
      title: title,
      done: false,
    });

    await newTodo.save();
    const todoList = await Todo.find();
    res.send(todoList);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "에러 발생" });
  }
});

// 클라이언트로부터 받은 업데이트할 할 일 데이터를 사용하여 해당 할 일을 찾아 업데이트하고,
// 업데이트된 할 일 목록을 클라이언트에게 반환
app.put("/todo", async (req, res) => {
  try {
    let newData = req.body;
    const updatedTodo = await Todo.findOneAndUpdate(
      { no: newData.no },
      { $set: { title: newData.title } },
      { new: true }
    );
    const todoList = await Todo.find();
    res.send(todoList);
  } catch (err) {
    res.status(500).json({ error: "에러 발생" });
  }
});

// 클라이언트로부터 받은 할 일 번호를 사용하여 해당 할 일을
// db에서 삭제하고, 업데이트된 할 일 목록을 클라이언트에게 반환
app.delete("/todo", async (req, res) => {
  try {
    const { no } = req.query;
    await Todo.findOneAndDelete({ no: Number(no) });
    const todoList = await Todo.find();
    res.send(todoList);
  } catch (err) {
    res.status(500).json({ error: "에러 발생" });
  }
});

app.listen(app.get("port"), () => {
  console.log(`서버가 http://localhost:${app.get("port")} 에서 실행 중입니다.`);
});
