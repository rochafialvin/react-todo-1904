import React from "react";

import "bootstrap/dist/css/bootstrap.css";
import "./style.css";

import TodoItem from "./components/TodoItem";
import InputBox from "./components/InputBox";

class App extends React.Component {
  state = {
    todos: [],
  };

  renderTodoList = () => {
    return this.state.todos.length ? (
      this.state.todos.map((todo) => {
        // todo : { action: "Bangun tidur", isComplete: true }
        return <TodoItem todo={todo} />;
      })
    ) : (
      <h3 className="text-center mt-5">Loading ...</h3>
    );
  };

  componentDidMount() {
    setTimeout(() => {
      this.setState({
        todos: [
          { action: "Bangun tidur", isComplete: true },
          { action: "Mandi", isComplete: false },
          { action: "Gosok gigi", isComplete: false },
        ],
      });
    }, 3000);
  }

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

// function yang pertama kali jalan adalah render() untuk pertama kali
// setelah render yang pertama kali selesai di proses, selanjutnya akan menjalankan componentDidMount()
// this.setState(..) --> render() --> componentDidMount ? tidak
