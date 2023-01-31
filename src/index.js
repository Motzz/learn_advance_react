import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import reportWebVitals from "./reportWebVitals";
import Home from "./container/Home/Home";

//=============REDUX=============REDUX===============REDUX==========REDUX==============REDUX======

// import { ReactReduxContext } from "react-redux";
// import redux from "redux";
import { Provider } from "react-redux"; //penyedia global dari
import { createStore } from "redux";
import rootReducer from "./redux/reducer/globalReducer";
const redux = require("redux");
// const createStore = redux.createStore;

// const globalState = {
//   totalOrder: 0,
// };
// //2.REDUCER
// const rootReducer = (state = globalState, action) => {
//   if (action.type === "PLUS_ORDER") {
//     return {
//       ...state,
//       totalOrder: state.totalOrder + 1,
//     };
//   }
//   if (action.type === "MINUS_ORDER") {
//     if (state.totalOrder > 0) {
//       return {
//         ...state,
//         totalOrder: state.totalOrder - 1,
//       };
//     }
//     return {
//       ...state,
//       totalOrder: (state.totalOrder = 0),
//     };
//   }
//   return state;
// };
//1.STORE
const storeRedux = createStore(rootReducer);

//=============REDUX=============REDUX===============REDUX==========REDUX==============REDUX======

const root = ReactDOM.createRoot(document.getElementById("root"));
const HelloWorld = () => {
  return (
    <>
      <h1>Hellow row</h1>
      <p>Hellow row</p>
      <p>Hellow row</p>
      <p>Hellow row</p>
      <p>Hellow row</p>
      <p>Hellow row</p>
      <p>Hellow row</p>
    </>
  );
};

//harus pake huruf bsear
function FunctionComponent() {
  return <p>Hello function</p>;
}

// class StatefullComponent extends React.Component {
//   render() {
//     return <p>statefullComponent</p>;
//   }
// }
root.render(
  <React.StrictMode>
    {/* <Provider store={storeRedux}>
      <Home />
    </Provider> */}
    <Home />
  </React.StrictMode>
);
// ReactDOM.render(helloWorld,document.getElementById("root"));
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
