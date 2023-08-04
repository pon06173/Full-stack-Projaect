import { Component } from 'react';
import './App.css';
import Example from './components/example';

// class 문법을 이용한 콤퍼넌트 만들기
// Component 클래스를 반드시 상속 받아야 한다.
class MyComponent extends Component {

  constructor(props) {
    super(props);
    // state를 생성자 안에서 선언 한다.
    this.state = {
      cnt : 120,
      value : ""
    };

    // 생성자에서 bind()를 이용해서 특정 함수에 this를 지정 해 주어야 한다.
    // this.onChangeHandler = this.onChangeHandler.bind(this);
  }

  // 화살표 함수로 메서드를 선언 하면 bind(this) 필요 없음.
  onChangeHandler(e) {
    this.setState((prevState)=>{
      return {value: e.target.value}
    });
  }

  // 화살표 함수를 사용 하면 bind()로 this를 지정 하지 않아도 된다.
  // onChangeHandler = (e) => {
  //   this.setState((prevState)=>{
  //     return {value: e.target.value}
  //   });
  // }

  render() {
    return (<div>
      <header className="App-header">
        <h1>React 생명주기와 Hooks</h1>
      </header>
      <section>
        <h2>Welcome</h2>
        <input value={this.state.value} onChange={this.onChangeHandler}></input>
        <button onClick={e=>{
          console.log(this.state.value);
        }}>확인</button>
        <hr />
        <p>Count : {this.state.cnt}</p>
        <button onClick={(event) => {
          // this.setState()를 이용해서 state 변수 값 업데이트
          this.setState((prevState)=>{
            // this.setState()의 콜백 함수는 매개 변수로 이전 state 상태값을 받을 수 있다.
            return {cnt : prevState.cnt + 1}
          });
        }}>확인</button>
      </section>
      <footer>(c)Comstudy21. sice 2023.</footer>
    </div>);
  }
}

function App() {
  return (
    <div >
      <Example />
    </div>
  );
}

export default App;