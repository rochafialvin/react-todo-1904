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

  selectHandler = (event) => {
    this.props.onSelectSort(event.target.value);
  };

  countCompleteTodo = () => {
    const filteredTodosCount = this.props.todos.filter(
      (todo) => todo.isComplete
    ).length;

    return `Done ${filteredTodosCount} of ${this.props.todos.length}`;
  };

  render() {
    // event handler
    return (
      <div className="mx-auto mb-2">
        <div className="d-flex justify-content-between mb-2">
          <p className="m-0">{this.countCompleteTodo()}</p>
          <select
            onChange={this.selectHandler}
            className="form-select form-select-sm w-50"
          >
            <option defaultValue>Sort</option>
            <option value="a-z">A - Z</option>
            <option value="z-a">Z - A</option>
          </select>
        </div>
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
