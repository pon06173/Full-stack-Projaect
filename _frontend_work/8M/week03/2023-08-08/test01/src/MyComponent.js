import React, { useEffect, useState } from "react";
import InputItem from "./InputItem"; 
import ListTable from "./ListTable";
import "bootstrap/dist/css/bootstrap.min.css";

const MyComponent = () => {
  const [todoList, setTodoList] = useState([
    { no: 1, name: "치맥 하기", description: "치맥을 먹으러가자", price: 10000, category: "Food"},
    { no: 3, name: "명상 하기", description: "명상 하러가자", price: 10000, category: "1" },
    { no: 2, name: "방 청소 하기", description: "청소 하러가자", price: 10000, category: "2"},
    { no: 4, name: "착한 일 하기", description: "착한 일 하러가자", price: 10000, category: "3"},
  ]);


  const updateEditName = (no, value) => {
    setTodoList((prevList) =>
      prevList.map((prevItem) =>
        prevItem.no === no ? { ...prevItem, editTitle: value } : prevItem
      )
    );
  };
  
  const updateEditDescription = (no, value) => {
    setTodoList((prevList) =>
      prevList.map((prevItem) =>
        prevItem.no === no ? { ...prevItem, editDescription: value } : prevItem
      )
    );
  };
  
  const updateEditPrice = (no, value) => {
    setTodoList((prevList) =>
      prevList.map((prevItem) =>
        prevItem.no === no ? { ...prevItem, editPrice: value } : prevItem
      )
    );
  };
  
  const updateEditCategory = (no, value) => {
    setTodoList((prevList) =>
      prevList.map((prevItem) =>
        prevItem.no === no ? { ...prevItem, editCategory: value } : prevItem
      )
    );
  };

  const addTodoItem = (newItem) => {
    setTodoList([...todoList, { no: todoList.length + 1, ...newItem, done: false }]);
  };

  const deleteTodoItem = (no) => {
    setTodoList(todoList.filter((todo) => todo.no !== Number(no)));
  };

  const editTodoItem = (no) => {
    setTodoList((prevList) =>
      prevList.map((prevItem) =>
        prevItem.no === no
          ? {
              ...prevItem,
              editing: true,
              editTitle: prevItem.name,
              editDescription: prevItem.description,
              editPrice: prevItem.price,
              editCategory: prevItem.category
            }
          : prevItem
      )
    );
  };

  const saveTodoItem = (no) => {
    setTodoList((prevList) =>
      prevList.map((prevItem) =>
        prevItem.no === no
          ? {
              ...prevItem,
              name: prevItem.editTitle,
              description: prevItem.editDescription,
              price: prevItem.editPrice,
              category: prevItem.editCategory,
              editing: false
            }
          : prevItem
      )
    );

  };


  return (
    <div>
      <InputItem addTodoItem={addTodoItem} />
      <ListTable
        todoList={todoList}
        deleteTodoItem={deleteTodoItem}
        editTodoItem={editTodoItem}
        updateEditName={updateEditName}
        updateEditDescription={updateEditDescription}
        updateEditPrice={updateEditPrice}
        updateEditCategory={updateEditCategory}
        saveTodoItem={saveTodoItem}
      />
    </div>
  );
};

export default MyComponent;