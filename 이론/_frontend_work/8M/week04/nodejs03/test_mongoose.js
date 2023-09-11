const mongoose = require('mongoose');

mongoose.connect('mongodb://127.0.0.1:27017/mydb', { useNewUrlParser: true, useUnifiedTopology: true });

const todoSchema = new mongoose.Schema({
  title: String,
  done: Boolean
});

const Todo = mongoose.model('Todo', todoSchema);

async function connectAndQuery() {
  try {
    console.log("Connected to MongoDB");

    // 데이터 조회, 삽입, 업데이트, 삭제 등의 작업 수행

  } catch (err) {
    console.error(err);
  }
}

connectAndQuery();