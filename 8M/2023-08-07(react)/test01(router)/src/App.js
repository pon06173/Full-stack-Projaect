import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./components/Home";
import About from "./components/About";
import Gallery from "./components/Gallery";
import Profile from "./components/Profile";
import Nav from "./components/Nav";
import Counter from "./components/Counter";
// 만약 Routes를 불러 오지 못하면 
// npm uninstall react-router-dom 으로 모듈 삭제 후
// npm install react-router react-router-dom 으로 재 설치

function App() {
  return (
    <Router>
      <h1>Comstudy Company</h1>
      <Nav />

      <Routes>
        <Route path="/" element={<Home />} ></Route>
        <Route path="/about" element={<About />} ></Route>
        <Route path="/gallery" element={<Gallery />} ></Route>
        <Route path="/profile" element={<Profile />} ></Route>
        <Route path="/counter" element={<Counter />} ></Route>
      </Routes>
    </Router>
  );
}

export default App;
