import React from "react";

import "bootstrap/dist/css/bootstrap.css";
import "./style.css";

import TodoItem from "./components/TodoItem";
import InputBox from "./components/InputBox";
import Pagination from "./components/Pagination";

class App extends React.Component {
  state = {
    todos: [],
    page: 1,
    maxPage: 5,
  };

  onNextPage = () => {
    if (this.state.page < this.state.maxPage) {
      this.setState({ page: this.state.page + 1 });
    }
  };

  onPrevPage = () => {
    if (this.state.page > 1) {
      this.setState({ page: this.state.page - 1 });
    }
  };

  onAddTodo = (todoAction) => {
    const found = this.state.todos.find((todo) => {
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

  onCompleteTodo = (selectedId) => {
    /*
      [
        { id: 72, action: "Bangun tidur", isComplete: true },
        { id: 27, action: "Mandi", isComplete: false }
      ]
    
    */
    const changedTodos = this.state.todos.map((todo) => {
      // todo : { id: 27, action: "Mandi", isComplete: false }
      if (todo.id === selectedId) {
        return { ...todo, isComplete: true };
      } else {
        return todo;
      }
    });

    this.setState({ todos: changedTodos });
  };

  onCancelTodo = (selectedId) => {
    const changedTodos = this.state.todos.map((todo) => {
      if (todo.id === selectedId) {
        return { ...todo, isComplete: false };
      } else {
        return todo;
      }
    });

    this.setState({ todos: changedTodos });
  };

  renderTodoList = () => {
    return this.state.todos.length ? (
      this.state.todos.map((todo) => {
        return (
          <TodoItem
            key={todo.id}
            todo={todo}
            onDeleteTodo={this.onDeleteTodo}
            onCompleteTodo={this.onCompleteTodo}
            onCancelTodo={this.onCancelTodo}
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
          { id: 1, action: "Bangun tidur", isComplete: false },
          { id: 2, action: "Mandi", isComplete: false },
          { id: 3, action: "Sarapan", isComplete: false },
          { id: 4, action: "Prepare", isComplete: false },
          { id: 5, action: "Sekolah", isComplete: false },
        ],
      });
    }, 1000);
  }

  render() {
    return (
      <div className="container p-5">
        <InputBox todos={this.state.todos} onAddTodo={this.onAddTodo} />
        {this.renderTodoList()}
        <Pagination
          page={this.state.page}
          maxPage={this.state.maxPage}
          onNextPage={this.onNextPage}
          onPrevPage={this.onPrevPage}
        />
      </div>
    );
  }
}

export default App;

// function yang pertama kali jalan adalah render() untuk pertama kali
// setelah render yang pertama kali selesai di proses, selanjutnya akan menjalankan componentDidMount()
// this.setState(..) --> render() --> componentDidMount ? tidak
