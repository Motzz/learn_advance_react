import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import reportWebVitals from "./reportWebVitals";
import Home from "./container/Home/Home";

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
    <Home />
  </React.StrictMode>
);
// ReactDOM.render(helloWorld,document.getElementById("root"));
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
