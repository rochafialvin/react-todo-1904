import React from "react";

import "bootstrap/dist/css/bootstrap.css";
import "./style.css";

import TodoItem from "./components/TodoItem";
import InputBox from "./components/InputBox";

class App extends React.Component {
  state = {
    todos: [
      { action: "Bangun tidur", isComplete: true },
      { action: "Mandi", isComplete: false },
      { action: "Gosok gigi", isComplete: false },
    ],
  };

  renderTodoList = () => {
    return this.state.todos.map((todo) => {
      // todo : { action: "Mandi", isComplete: false }
      return <TodoItem todo={todo} />;
    });
  };

  render() {
    return (
      <div className="container p-5">
        <InputBox />
        {/* Memberikan property ke TodoItem */}
        {this.renderTodoList()}
      </div>
    );
  }
}

export default App;
