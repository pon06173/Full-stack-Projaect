import { useState } from 'react';
import './App.css';

function Message(props) {
  return (<div>
    <h3>스테이트 값 변경 연습</h3>
    <p>Message: {props.message}</p>
    <button onClick={props.handleClickBtn} className='btn btn-success'>Change Message</button>
  </div>)
}

function App() {
  const [message, setMessage] = useState("버튼을 클릭 하시오!");

  function handleClickBtn(event) {
    setMessage("버튼을 클릭했다!")
  }
  return (
    <div className="App">
      <div className="container-fluid p-5 bg-primary text-white text-center">
        <h1>Comstudy Coding Schools</h1>
        <p>Resize this responsive page to see the effect!</p> 
      </div>
       <Message message={message} handleClickBtn={handleClickBtn}></Message>
      
    </div>
  );
}

export default App;