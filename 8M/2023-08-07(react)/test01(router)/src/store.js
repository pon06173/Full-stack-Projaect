import { legacy_createStore as createStore } from 'redux';

// 초기 상태
const initialState = {
    count: 100,
    data: ""
};

// 리듀서 함수
const reducer = (state = initialState, action) => {
    switch (action.type) {
      case 'INCREMENT':
        return {
          ...state,
          count: state.count + 1,
        };
      case 'DECREMENT':
        return {
          ...state,
          count: state.count - 1,
        };
      default:
        return state;
    }
};

// 스토어 생성
const store = createStore(reducer);
export default store;