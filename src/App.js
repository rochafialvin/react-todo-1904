import React from "react";

import "bootstrap/dist/css/bootstrap.css";
import "./style.css";

import TodoItem from "./components/TodoItem";

class App extends React.Component {
  render() {
    return (
      <div className="container border border-1 border-dark">
        <TodoItem />
        <TodoItem />
        <TodoItem />
      </div>
    );
  }
}

export default App;
