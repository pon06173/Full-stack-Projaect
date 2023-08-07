import React, { useState } from 'react';
import './App.css';

const InputItem = ({appendTodo}) => {
  const [value, setValue] = useState("");
  
  const onChangeHandler = (e) => {
    setValue(e.target.value);
  };

  return (<>
    할일 : <input value={value} onChange={onChangeHandler}></input>
    <button onClick={e => {
      appendTodo(value);
      setValue("");
    }}>확인</button>
  </>);
}

const ItemComponent = ({item, removeTodo, updateTodo}) => {
  let titleStyle = item.done ? "line-through" : "none";
  let isCheck = item.done ? "checked" : "";
  const [editValue, setEditValue] = useState(item.title);

  return (<li>
      <input type='checkbox' checked={isCheck} onChange={e=>{
        updateTodo({no:item.no, title:item.title, done:!item.done});
      }} />
      <input style={{border:0, textDecoration:titleStyle}} type='text' 
      value={editValue} 
      onChange={e=>{setEditValue(e.target.value)}} onBlur={e=>{
        updateTodo({no:item.no, title:editValue, done:item.done});
      }} />
      <button onClick={() => {
        removeTodo(item.no);
      }}>삭제</button>
    </li>)
}

const ListComponent = ({todoList, removeTodo, updateTodo}) => {
  return (<>
    <ul>{todoList.map((item) => {
      return (<ItemComponent key={item.no} item={item} removeTodo={removeTodo} updateTodo={updateTodo} />);
    })}</ul>
  </>);
}

const MyComponent = () => {
  const [todoList, setTodoList] = useState([
    {no:1, title:"치맥 하기", done:false},
    {no:2, title:"방 청소 하기", done:false},
    {no:3, title:"명상 하기", done:true},
    {no:4, title:"착한 일 하기", done:false}
  ]);
  const [cnt, setCnt] = useState(5);
  
  const appendTodo = (title) => {
    // 할일 목록에 새 항목을 추가.
    let newItem = {no:cnt, title:title, done:false};
    setCnt(cnt + 1);
    setTodoList([...todoList, newItem]);
  }

  const removeTodo = (no) => {
    // 할일 목록에서 같은 no인 item을 찾아서 제거 한다.
    // Javascript 배열에는 remove(), delete()함수 대신 splice()사용.
    // 배열.splice(index, 갯수);
    // index를 찾기 위해 Javascript에 findIndex() 함수 활용.
    let index = todoList.findIndex(function (item) {
      return no === item.no;
    });

    let newList = [...todoList];
    newList.splice(index, 1);
    setTodoList(newList);
  }

  const updateTodo = (newItem) => {
    // newItem의 모양은 {no:1, title:"치맥 하기", done:false}
    let index = todoList.findIndex(function (item) {
      return newItem.no === item.no;
    });

    if(index !== -1) {
      let newList = [...todoList];
      newList[index] = newItem;
      setTodoList(newList);
    }
  }

  return (
    <div>
      <header className="App-header">
        <h1>Todo List</h1>
      </header>
      <main>
        <h2>Welcome</h2>
        <InputItem appendTodo={appendTodo} />
        <hr/>
        <ListComponent todoList={todoList} removeTodo={removeTodo} updateTodo={updateTodo} />
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