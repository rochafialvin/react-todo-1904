import React from "react";

import "bootstrap/dist/css/bootstrap.css";
import "./style.css";

import TodoItem from "./components/TodoItem";
import InputBox from "./components/InputBox";

class App extends React.Component {
  state = {
    todos: [
      { id: 72, action: "Bangun tidur", isComplete: false },
      { id: 27, action: "Mandi", isComplete: false },
      { id: 231453245, action: "Makan", isComplete: false },
    ],
  };

  onAddTodo = (todoAction) => {
    // todoAction : "BANGUN TIDUR"
    // found : { id: 72, action: "Bangun tidur", isComplete: false }
    const found = this.state.todos.find((todo) => {
      // todo : { id: 72, action: "Bangun tidur", isComplete: false }
      // "bangun tidur" === "bangun tidur"
      return todo.action.toLowerCase() === todoAction.toLowerCase();
    });

    if (found) {
      alert("Action ini sudah terdapat pada list");
    } else {
      const newTodo = {
        id: new Date().getTime(),
        action: todoAction,
        isComplete: false,
      };

      this.setState({ todos: [...this.state.todos, newTodo] });
    }
  };

  onDeleteTodo = (selectedId) => {
    const filteredTodos = this.state.todos.filter((todo) => {
      return todo.id !== selectedId;
    });

    this.setState({ todos: filteredTodos });
  };

  renderTodoList = () => {
    return this.state.todos.length ? (
      this.state.todos.map((todo) => {
        return (
          <TodoItem
            key={todo.id}
            todo={todo}
            onDeleteTodo={this.onDeleteTodo}
          />
        );
      })
    ) : (
      <h3 className="text-center mt-5">Loading ...</h3>
    );
  };

  componentDidMount() {
    setTimeout(() => {
      this.setState({
        todos: [
          { id: 72, action: "Bangun tidur", isComplete: false },
          { id: 27, action: "Mandi", isComplete: false },
          { id: 231453245, action: "Makan", isComplete: false },
        ],
      });
    }, 3000);
  }

  render() {
    return (
      <div className="container p-5">
        <InputBox onAddTodo={this.onAddTodo} />
        {this.renderTodoList()}
      </div>
    );
  }
}

export default App;

// function yang pertama kali jalan adalah render() untuk pertama kali
// setelah render yang pertama kali selesai di proses, selanjutnya akan menjalankan componentDidMount()
// this.setState(..) --> render() --> componentDidMount ? tidak
