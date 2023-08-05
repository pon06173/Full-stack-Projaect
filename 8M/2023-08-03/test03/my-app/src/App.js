import "./App.css";

function App() {
  let title = "버튼 클릭!";
  let elementList = [
    <button key={0} onClick={btnEventHandler2}>
      1.hello
    </button>,
    <button key={1} onClick={btnEventHandler2}>
      2.world
    </button>,
    <button key={2} onClick={btnEventHandler2}>
      3.orange
    </button>,
    <button key={3} onClick={btnEventHandler2}>
      4.tomato
    </button>,
  ];

  function btnEventHandler(e) {
    console.log("Button clicked!");
  }

  function btnEventHandler2(e) {
    console.log(e.target.innerText);
  }

  return (
    <div className="App">
      <header className="App-header">
        <h1>{title}</h1>
        <button data-name="msg" onClick={btnEventHandler}>
          버튼입니다
        </button>
      </header>
      <div>{elementList}</div>
    </div>
  );
}

export default App;
