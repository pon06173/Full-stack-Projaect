const mongoose = require('mongoose');
const Schema = mongoose.Schema;

mongoose.connect('mongodb://127.0.0.1:27017/mongo', { useNewUrlParser: true, useUnifiedTopology: true });

const todoSchema = new mongoose.Schema({
  title: String,
  done: Boolean
});

const Todo = mongoose.model('TodoList', todoSchema ,'todoList');

// 스키마 정의
const todoSchema = new Schema({
  title: String,
  done: Boolean
});

// 모델 생성
const Todo = mongoose.model('Todo', todoSchema);

// 모듈 내보내기
module.exports = Todo;