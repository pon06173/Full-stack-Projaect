const mongoose = require('mongoose');
const TodoModel = require('./models/todo'); // 모델 가져오는 부분도 수정

mongoose.connect('mongodb://127.0.0.1:27017/mongo', { useNewUrlParser: true, useUnifiedTopology: true });

const todoSchema = new mongoose.Schema({
  title: String,
  done: Boolean
});

const Todo = mongoose.model('TodoList', todoSchema ,'todoList');

async function connectAndQuery() {
  try {
    console.log("Connected to MongoDB");

    const newTodo = new Todo({
      title: "몽구스를 이용한 새 할일 등록",
      done: false
    });

    let result = await newTodo.save();
    console.dir(result);
    console.log("새 todo 저장 완료!");
  } catch (err) {
    console.error(err);
  }
}

connectAndQuery();
