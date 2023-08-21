import './App.css';



function App() {

  let title = "Todo List"
  let elementList = [
    <button key={0} onClick={btnEventHandler}>1.hello</button>,
    <button key={1} onClick={btnEventHandler}>2.world</button>,
    <button key={2} onClick={btnEventHandler}>3.orange</button>,
    <button key={3} onClick={btnEventHandler}>4.tomato</button>
  ]

  function btnEventHandler(e) {
    if(e.target.innerText === elementList[0].props.children){
      console.log("첫번째 버튼: ", e.target.elementList[0])
    }
      
    

    if(e.target.dataset.msg){
      console.log("Message: ", title)
    } else {
      console.log("Clicked: ", e.target.innerText)
    }
  }

  return (
    <div className="App">
      <header className="App-header">
        <h1>{title} App</h1>
        <button data-name="msg" onClick={btnEventHandler}>메세지 출력</button>
      </header>
      <div>
    {elementList}
      </div>
    </div>
  );
}

export default App;
