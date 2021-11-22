import React from "react";

import "bootstrap/dist/css/bootstrap.css";
import "./style.css";

import TodoItem from "./components/TodoItem";
import InputBox from "./components/InputBox";

class App extends React.Component {
  render() {
    return (
      <div className="container p-5">
        <InputBox />
        <TodoItem />
        <TodoItem />
        <TodoItem />
      </div>
    );
  }
}

export default App;
