const express = require("express");
const app = express();
const path = require("path");
const bodyParser = require("body-parser");
const morgan = require("morgan");
const cors = require("cors");
const fs = require("fs");
const todo = require("./models/todo");

app.set("port", 3000);
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

app.use(cors());
app.use(express.static("public"));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(morgan("dev"));

let todoList = [];
let noCnt = 0;
let fileURLPath = path.join(__dirname, "public/todoList.json");

function loadData() {
  // todoList.json 파일에서 데이터를 읽어 와서 초기화
  fs.readFile(fileURLPath, (err, data) => {
    let dataObj = JSON.parse(data);
    todoList = dataObj.todoList;
    noCnt = dataObj.noCnt;
  });
}

app.get("/todo", async (req, res) => {
  // 파일의 데이터를 로드한다.
  await loadData();
  res.send(todoList);
});

// post - 저장 기능
app.post("/todo", async (req, res) => {
  await loadData();
  let title = req.body.title;
  todoList.push({ no: todoList.length + 1, title: title, done: false });
  async function saveDB() {
    try {
      const newTodo = new todo({
        no: Number(todoList.length),
        title: title,
        done: false,
      });
      // Mongoose6부터 callback 문법이 사용되지 않음
      await newTodo.save().then((err, todo) => {
        if (err) throw err;
      });
    } catch (err) {
      console.error(err);
    }
  }
  saveDB();
  res.send(todoList);
  // 업데이트 된 todoList를 파일에 기록
  fs.writeFileSync(fileURLPath, JSON.stringify({ noCnt, todoList }));
});

// put 요청 - 수정기능
app.put("/todo", async (req, res) => {
  await loadData();
  let newData = req.body;
  let idx = todoList.findIndex((item) => {
    return newData.no === item.no;
  });
  try {
    const updatedTodo = await todo.updateOne(
      { no: newData.no },
      { $set: { title: newData.title } },
      { new: true }
    );

    res.send(updatedTodo);
  } catch (err) {
    console.error("Error:", err);
  }
});
// delete - 삭제 기능
app.delete("/todo", async (req, res) => {
  await loadData();
  let idx = todoList.findIndex((item) => {
    return item.no === Number(req.query.no);
  });
  if (idx != -1) {
    await todoList.splice(idx, 1);
  }
  // 수정 후 파일에 다시 기록
  fs.writeFileSync(fileURLPath, JSON.stringify({ noCnt, todoList }));
  res.send(todoList);
});

app.listen(app.get("port"), () => {
  console.log(`서버가 http://localhost:${app.get("port")} 에서 실행 중입니다.`);
  loadData();
});
