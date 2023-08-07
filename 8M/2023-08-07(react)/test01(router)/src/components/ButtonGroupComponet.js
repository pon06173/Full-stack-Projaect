import { useDispatch } from "react-redux";

function ButtonGroupComponent() {
    const dispatch = useDispatch();

    const increment = () => {
        dispatch({ type: 'INCREMENT' });
    };

    const decrement = () => {
        dispatch({ type: 'DECREMENT' });
    };

    return (<>
        <button onClick={increment}>증가</button>
        <button onClick={decrement}>감소</button>
    </>)
}

export default ButtonGroupComponent;