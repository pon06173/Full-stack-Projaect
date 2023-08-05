import "./App.css";
import { useState } from "react";

function App() {
  let title = "랜덤 숫자";
  const [inputValue, setInputValue] = useState("");
  const [number, setNumber] = useState(0);
  const [colorStyle, setColorStyle] = useState({ color: "red" });

  function numBtnHandler() {
    //난수 발생
    let number = Math.floor(Math.random() * 401) - 200;
    setNumber(number);
    if (number <= 0) {
      setColorStyle({ color: "red" });
    } else {
      setColorStyle({ color: "blue" });
    }
  }

  return (
    <div className="App">
      <header className="App-header">
        <h1>{title} App</h1>
        내용입력:{" "}
        <input
          value={inputValue}
          onChange={(e) => {
            //inputValue = e.target.value;
            setInputValue(e.target.value);
            console.log(inputValue);
          }}
        />
        <div>내용: {inputValue}</div>
        {/* <div><button onClick={numBtnHandler}>숫자 생성</button></div> */}
      </header>
      <div className="App-content">
        {/* <p style={colorStyle}>숫자 : {number}</p> */}
      </div>
    </div>
  );
}

export default App;
