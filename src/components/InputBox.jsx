import { Component } from "react";

export class InputBox extends Component {
  state = {
    inputValue: "",
  };

  onBtnAddHandler = () => {
    this.props.onAddTodo(this.state.inputValue);
  };

  handleChange = (event) => {
    this.setState({ inputValue: event.target.value });
  };

  countCompleteTodo = () => {
    /*
      [
        { id: 27, action: "Mandi", isComplete: true },
      ]
    */

    // { id: 72, action: "Bangun tidur", isComplete: false },
    // { id: 27, action: "Mandi", isComplete: true },
    const filteredTodosCount = this.props.todos.filter(
      (todo) => todo.isComplete
    ).length;

    return `Done ${filteredTodosCount} of ${this.props.todos.length}`;
  };

  render() {
    return (
      <div className="mx-auto mb-2">
        <p>{this.countCompleteTodo()}</p>
        <input
          type="text"
          className="form-control mb-2"
          placeholder="What's next ?"
          onChange={this.handleChange}
          value={this.state.inputValue}
        />
        <button
          onClick={this.onBtnAddHandler}
          className="btn btn-outline-primary w-100"
        >
          Add
        </button>
      </div>
    );
  }
}

export default InputBox;

// props (properties) --> data yang data dari luar komponen
