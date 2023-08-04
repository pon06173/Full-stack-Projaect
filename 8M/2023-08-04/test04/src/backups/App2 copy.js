import React, { useState, useEffect } from 'react';

function MyComponent() {
  const [inputValue, setInputValue] = useState("");

  useEffect(() => {
    console.log("1. mount ...");

    return (()=>{
      console.log("3. will unmount ...");
    });
  }, []);

  useEffect(()=>{
    console.log("2. inputValue update ...");
  }, [inputValue]);

  const handleChange = (e)=>{
    setInputValue(e.target.value);
  }

  const handleClick = (e) => {
    console.log(inputValue);
    setInputValue("");
  }

  return (<>
    <h2>Hello world!</h2>
    <input type="text" value={inputValue} onChange={handleChange} />
    <button onClick={handleClick}>확인</button>
    <p>결과: {inputValue}</p>
  </>);
}

function App() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log('1. Component mounted');

    return () => {
      console.log('3. Component will unmount');
    };
  }, []);

  useEffect(() => {
    console.log('2. Component count updated');
  }, [count]);

  const handleClick = () => {
    setCount(prevCount => prevCount + 1);
  };

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={handleClick}>Increment</button>
      <MyComponent />
    </div>
  );
}

export default App;