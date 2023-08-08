import React from "react";
import MyComponent from "./MyComponent"; 
import './App.css';

function App() {
  let title = "Web site cloning 2"

  return (
    <div className="App">
      <br />
      <hr/>
      <header className="App-header">
        <h1>{title}</h1>
        </header>
        
      <MyComponent />
      <p></p>
      <hr/>
    </div>
  );
}

export default App;