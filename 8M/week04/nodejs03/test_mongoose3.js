const mongoose = require("mongoose");
const Todo = require("./models/todo");

mongoose.connect("mongodb://127.0.0.1:27017/mongo", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const todoSchema = new mongoose.Schema({
  title: String,
  done: Boolean,
});

const Todo = mongoose.model("TodoList", todoSchema, "todoList");

async function connectAndQuery() {
  try {
    console.log("Connected to MongoDB");

    // 데이터 조회, 삽입, 업데이트, 삭제 등의 작업 수행
    const newTodo = new Todo({
      title: "몽구스를 이용한 새 할일 등록",
      done: false,
    });

    // newTodo.save((err, todo)=>{
    //   if(err) throw err;
    //   console.log("새 할일 저장 완료!")
    //   console.log(todo)
    // })

    let result = await newTodo.save();
    console.dir(result);
    console.log("새 todo 저장 완료!");
  } catch (err) {
    console.error(err);
  }
}

connectAndQuery();
