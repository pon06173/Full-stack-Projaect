import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import { createStore } from "redux";
//import store from "./store";

import App from "./App";

const currentState = { 체중: 100, 키: 180 };
function reducer(state = currentState, action) {
  if (currentState == undefined) {
    return { 체중: 100, 키: 180 };
  }
  if (action.type === "체중증가") {
    state.체중++;
  } else if (action.type === "체중감소") {
    state.체중--;
  }
  const newState = { ...state };
  return newState;
}

let store = createStore(reducer);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
    <App />
  </Provider>
);
