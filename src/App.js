import React from "react";

import "bootstrap/dist/css/bootstrap.css";
import "./style.css";

import TodoItem from "./components/TodoItem";
import InputBox from "./components/InputBox";

class App extends React.Component {
  state = {
    todos: [],
  };

  onAddTodo = (todoAction) => {
    // todoAction : "abc" / yang di ketik
    const newTodo = {
      id: new Date().getTime(),
      action: todoAction,
      isComplete: false,
    };

    this.setState({ todos: [...this.state.todos, newTodo] });
  };

  onDeleteTodo = (selectedId) => {
    // selectedId : 72
    // newArray = [ { id: 27, action: "Mandi", isComplete: false } ]
    const filteredTodos = this.state.todos.filter((todo) => {
      // todo : { id: 27, action: "Mandi", isComplete: false }
      // return true
      return todo.id !== selectedId;
    });

    this.setState({ todos: filteredTodos });
  };

  renderTodoList = () => {
    return this.state.todos.length ? (
      this.state.todos.map((todo) => {
        // todo : { id: 27, action: "Mandi", isComplete: false }
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
        ],
      });
    }, 3000);
  }

  render() {
    return (
      <div className="container p-5">
        <InputBox onAddTodo={this.onAddTodo} />
        {/* Memberikan property ke TodoItem */}
        {this.renderTodoList()}
      </div>
    );
  }
}

export default App;

// function yang pertama kali jalan adalah render() untuk pertama kali
// setelah render yang pertama kali selesai di proses, selanjutnya akan menjalankan componentDidMount()
// this.setState(..) --> render() --> componentDidMount ? tidak
