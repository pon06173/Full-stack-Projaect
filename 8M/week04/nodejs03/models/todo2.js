const mongoose = require("mongoose");
const Schema = mongoose.Schema;

mongoose.connect("mongodb://127.0.0.1:27017/mongo", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// 스키마 정의
const todoSchema = new mongoose.Schema({
  title: String,
  done: Boolean,
});
// 모델 생성
const Todo = mongoose.model("TodoList", todoSchema, "todoList");

// 모듈 내보내기
module.exports = Todo;
