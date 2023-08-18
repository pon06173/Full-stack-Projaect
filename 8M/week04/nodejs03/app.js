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


app.get("/todo", async (req, res) => {
  try {
    const todos = await Todo.find();
    res.send(todos);
  } catch (err) {
    console.error("Error:", err);
    res.status(500).json({ error: "An error occurred" });
  }
});

app.post("/todo", async (req, res) => {
  let title = req.body.title;

  try {
    const newTodo = new Todo({
      title: title,
      done: false,
    });

    await newTodo.save();
    res.send(newTodo);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "An error occurred" });
  }
});

app.put("/todo", async (req, res) => {
  await loadData();
  let newData = req.body;

  try {
    const updatedTodo = await Todo.findOneAndUpdate(
      { no: newData.no },
      { $set: { title: newData.title } },
      { new: true }
    );

    res.send(updatedTodo);
  } catch (err) {
    console.error("Error:", err);
  }
});

app.delete("/todo", async (req, res) => {
  await loadData();
  let idx = todoList.findIndex((item) => {
    return item.no === Number(req.query.no);
  });

  if (idx !== -1) {
    try {
      await Todo.deleteOne({ no: todoList[idx].no });
      res.send(todoList);
    } catch (err) {
      console.error("Error:", err);
    }
  }
});

app.listen(app.get("port"), () => {
  console.log(`서버가 http://localhost:${app.get("port")} 에서 실행 중입니다.`);
});