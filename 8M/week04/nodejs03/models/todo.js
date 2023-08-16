const mongoose = require('mongoose');
const Schema = mongoose.Schema;



// 스키마 정의
const todoSchema = new Schema({
  title: String,
  done: Boolean
});

// 모델 생성
const Todo = mongoose.model('Todo', todoSchema);

// 모듈 내보내기
module.exports = Todo;