
import React from "react";
import ReactDOM from "react-dom";
import App from './App.tsx';

const Index = () => {
  return <div>Hello React! You are ready for heroku</div>;
};

ReactDOM.render(<App />, document.getElementById("index"));
// ReactDOM.render(<Index />, document.getElementById("index"));
