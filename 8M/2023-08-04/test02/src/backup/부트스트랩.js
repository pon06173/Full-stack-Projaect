import { useState } from 'react';
import './App.css';

function Column(props) {
  console.log(props.content);
  return (<div className="col-sm-4">
    <h3>{props.title}</h3>
    <p>{props.content[0]}</p>
    <p>{props.content[1]}</p>
  </div>);
}

function App() {
  const [columnObjList,setColumnObjList] = useState([
    {no:1, title:"강의 목록", content:["22222","11111"]},
    {no:2, title:"갤러리 목록", content:["44444","333333"]},
    {no:3, title:"자유게시판 목록", content:["666666","555555"]}
  ]);

  return (
    <div className="App">
      <div className="container-fluid p-5 bg-primary text-white text-center">
        <h1>Comstudy Coding Schools</h1>
        <p>Resize this responsive page to see the effect!</p> 
      </div>
      <div className="container mt-5">
        <div className="row">{
          columnObjList.map((columnObj)=>{
            return <Column key={columnObj.no} title={columnObj.title} content={columnObj.content} />;
          })
        }
        </div>
      </div>
    </div>
  );
}

export default App;