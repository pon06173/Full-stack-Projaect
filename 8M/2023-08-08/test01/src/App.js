import { useSelector } from "react-redux";
import WeightController from "./WeightController";

function App() {
  const 몸무게 = useSelector((state) => state.체중);
  return (
    <div className="App">
      <p>몸무게 : {몸무게}</p>
      <WeightController />
    </div>
  );
}

export default App;
