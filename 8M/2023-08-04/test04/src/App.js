import React, { useState } from 'react';
import './App.css';


const ListComponent = ({todoList, deleteTodoItem}) => {
  const onClickDelBtn = (e) => {
    deleteTodoItem(e.target.dataset.no);
  }

  let list = todoList.map((item) => {
    return (<li key={item.no}>
      <input type='checkbox'/>
      <label>{item.title}</label>
      <button data-no={item.no}>수정</button>
      <button data-no={item.no} onClick={onClickDelBtn}>삭제</button>
    </li>);
  });
  return (<ul>{list}</ul>);
}


const InputItem = ({addTodoItem}) => {
  const [value, setValue] = useState("");

  const onClickHandler = (e) => {
    // 할일 목록에 새 항목을 추가.
    console.log("확인 버튼 클릭...");
    addTodoItem(value);
    setValue("");
  }

  const onChangeHandler = (e) => {
    setValue(e.target.value);
  };

  return (<>
    <input value={value} onChange={onChangeHandler}></input>
    <button onClick={onClickHandler}>확인</button>
  </>)
}

const MyComponent = () => {
  
  const [todoList, setTodoList] = useState([
    {no:1, title:"치맥 하기", done:false},
    {no:2, title:"방 청소 하기", done:false},
    {no:3, title:"명상 하기", done:true},
    {no:4, title:"착한 일 하기", done:false}
  ]);
  const [noCnt, setNoCnt] = useState(5);

   const addTodoItem = (title) => {
    // 할일 목록에 새 항목을 추가.
    //console.log("새 아이템 추가...", title);
    // 기존 todoList를 복제한다. (참조가 끊어진다. )
    //let newTodoList = [... todoList];
    //newTodoList.push({no:noCnt, title:data, done:false});
    //setTodoList(newTodoList);
    setTodoList([... todoList, {no:noCnt, title, done:false}]);
    setNoCnt(noCnt + 1);
  }

  // 
  const deleteTodoItem = (no) => {
    // 아이템 삭제 버튼
    //console.log("아이템 삭제...", no);
    setTodoList(todoList.filter((todo)=> todo.no != Number(no)));
  }

  return (
    <div>
      <header className="App-header">
        <h1>Todo List App</h1>
      </header>
      <main>
        <h2>Welcome</h2>
        <InputItem addTodoItem={addTodoItem} />
        <hr/>
        <ListComponent todoList={todoList} deleteTodoItem={deleteTodoItem} />
      </main>
      <footer>(c)Comstudy21. since 2023.</footer>
    </div>
  );
};

function App() {
  return (
    <div className="App">
      <MyComponent />
    </div>
  );
}

export default App;