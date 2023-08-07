// components/Counter.js
import { useDispatch, useSelector } from 'react-redux';
import ButtonGroupComponent from './ButtonGroupComponent';

const Counter = () => {
  
        // 훅을 사용해서 상태와 상태관리 dispatch를 얻어온다.
    const count = useSelector((state)=>{
        return state.count;
    });
    
    return (
        <div>
            <h1>카운터</h1>
            <p>현재 값: {count}</p>
            <ButtonGroupComponent />
        </div>
    );
};

export default Counter;