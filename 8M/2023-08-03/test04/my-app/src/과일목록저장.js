<<<<<<< HEAD
import "./App.css";
import { useState } from "react";

function App() {
  const [inputValue, setInputValue] = useState("");
  const [fruitList, setFruitList] = useState(["Apple", "Banana", "Orange"]);
  let list = fruitList.map((fruit, i) => {
    return (
      <li key={i} style={{ listStyle: "none" }}>
        {fruit}
      </li>
    );
  });

  function saveBtnHandler(e) {
    setFruitList([...fruitList, inputValue]);
    setInputValue("");
=======
import './App.css';
import {useState} from 'react'



function App() {
  const [inputValue, setInputValue] = useState("")
  const [fruitList, setFruitList] = useState(["사과","오렌지","딸기"])
  let list = fruitList.map((fruit, i)=>{
    return <li key={i}>
      {fruit}
    </li>
  })

  function saveBtnHandler(e) {
    setFruitList([...fruitList, inputValue])
    setInputValue("")
>>>>>>> ca97d5b934034fb0574e6b295acdae32e3ea7f47
  }
  return (
    <div className="App">
      <header className="App-header">
<<<<<<< HEAD
        <h1>과일 목록</h1>
      </header>
      <div>
        <p>
          과일:{" "}
          <input
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
          />
          <button onClick={saveBtnHandler}>저장</button>
        </p>
        <div>
          <ul>{list}</ul>
        </div>
      </div>
    </div>
=======
        <h1>과일 목록</h1>   
    </header>
    <div>
      <p>
        과일: <input value={inputValue} onChange={(e)=>setInputValue(e.target.value)}/>
        <button onClick={saveBtnHandler}>저장</button>
      </p>
      <div>
        <ul>
          {list}
        </ul>
      </div>
    </div>
    </div>
    
>>>>>>> ca97d5b934034fb0574e6b295acdae32e3ea7f47
  );
}

export default App;
