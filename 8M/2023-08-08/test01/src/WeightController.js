import { useDispatch, useSelector } from "react-redux";

function WeightController() {
  const dispatch = useDispatch();
  return (
    <div>
      <button
        onClick={function () {
          dispatch({ type: "체중증가" });
        }}
      >
        몸무게 증가
      </button>
    </div>
  );
}
export default WeightController;
