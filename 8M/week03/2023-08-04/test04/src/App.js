import React, { useState } from "react";
import "./App.css";

const ListComponent = ({
  todoList,
  deleteTodoItem,
  editTodoItem,
  saveTodoItem,
  toggleDone,
}) => {
  const onClickDelBtn = (e) => {
    deleteTodoItem(e.target.dataset.no);
  };

  const onClickEditBtn = (e) => {
    if (e.target.innerText === "수정") {
      editTodoItem(e.target.dataset.no);
    } else {
      saveTodoItem(e.target.dataset.no);
    }
  };

  let list = todoList.map((item) => {
    return (
      <li key={item.no} style={{ listStyle: "none" }}>
        <input
          type="checkbox"
          checked={item.done}
          onChange={() => toggleDone(item.no)}
        />
        {item.editing ? (
          <>
            <input
              type="text"
              value={item.editTitle}
              onChange={(e) => item.setEditTitle(e.target.value)}
            />
            <button data-no={item.no} onClick={onClickEditBtn}>
              완료
            </button>
          </>
        ) : (
          <>
            <label style={item.done ? { textDecoration: "line-through" } : {}}>
              {item.title}
            </label>
            <button data-no={item.no} onClick={onClickEditBtn}>
              수정
            </button>
            <button data-no={item.no} onClick={onClickDelBtn}>
              삭제
            </button>
          </>
        )}
      </li>
    );
  });
  return <ul>{list}</ul>;
};

const InputItem = ({ addTodoItem }) => {
  const [value, setValue] = useState("");

  const onClickHandler = (e) => {
    // 할일 목록에 새 항목을 추가.
    console.log("확인 버튼 클릭...");
    addTodoItem(value);
    setValue("");
  };

  const onChangeHandler = (e) => {
    setValue(e.target.value);
  };

  return (
    <>
      <input value={value} onChange={onChangeHandler}></input>
      <button onClick={onClickHandler}>확인</button>
    </>
  );
};

const MyComponent = () => {
  const [todoList, setTodoList] = useState([
    { no: 1, title: "치맥 하기", done: false },
    { no: 2, title: "방 청소 하기", done: false },
    { no: 3, title: "명상 하기", done: true },
    { no: 4, title: "착한 일 하기", done: false },
  ]);

  todoList.forEach((item) => {
    if (!item.hasOwnProperty("editing")) {
      item.editing = false;
      item.editTitle = item.title;
      item.setEditTitle = (value) => {
        setTodoList((prevList) =>
          prevList.map((prevItem) =>
            prevItem.no === item.no
              ? { ...prevItem, editTitle: value }
              : prevItem
          )
        );
      };
    }
  });

  const [noCnt, setNoCnt] = useState(5);

  const addTodoItem = (title) => {
    // 할일 목록에 새 항목을 추가.
    //console.log("새 아이템 추가...", title);
    // 기존 todoList를 복제한다. (참조가 끊어진다. )
    //let newTodoList = [... todoList];
    //newTodoList.push({no:noCnt, title:data, done:false});
    //setTodoList(newTodoList);
    setTodoList([...todoList, { no: noCnt, title, done: false }]);
    setNoCnt(noCnt + 1);
  };

  //
  const deleteTodoItem = (no) => {
    // 아이템 삭제 버튼
    //console.log("아이템 삭제...", no);
    setTodoList(todoList.filter((todo) => todo.no != Number(no)));
  };

  const editTodoItem = (no) => {
    setTodoList((prevList) =>
      prevList.map((prevItem) =>
        prevItem.no === Number(no)
          ? { ...prevItem, editing: !prevItem.editing }
          : prevItem
      )
    );
  };

  const saveTodoItem = (no) => {
    setTodoList((prevList) =>
      prevList.map((prevItem) =>
        prevItem.no === Number(no)
          ? { ...prevItem, title: prevItem.editTitle, editing: false }
          : prevItem
      )
    );
  };

  const toggleDone = (no) => {
    const newTodoList = [...todoList];
    const idx = newTodoList.findIndex((todo) => todo.no === no);

    if (idx !== -1) {
      newTodoList[idx] = {
        ...newTodoList[idx],
        done: !newTodoList[idx].done,
      };
      setTodoList(newTodoList);
    }
  };

  return (
    <div>
      <header className="App-header">
        <h1>Todo List App</h1>
      </header>
      <main>
        <h2>할 일 입력칸</h2>
        <InputItem addTodoItem={addTodoItem} />
        <hr />
        <ListComponent
          todoList={todoList}
          deleteTodoItem={deleteTodoItem}
          editTodoItem={editTodoItem}
          saveTodoItem={saveTodoItem}
          toggleDone={toggleDone}
        />
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
