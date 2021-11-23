import React from "react";

// props : key, todo, onDeleteTodo

class TodoItem extends React.Component {
  state = {
    isComplete: false,
  };

  cancelBtnHandler = () => {
    this.setState({ isComplete: false });
  };

  completeBtnHandler = () => {
    this.setState({ isComplete: true });
  };

  render() {
    return (
      <div className="d-flex pt-3 justify-content-between border-bottom mx-auto">
        {this.state.isComplete ? (
          <p className="lead text-decoration-line-through">
            {this.props.todo.action}
          </p>
        ) : (
          <p className="lead"> {this.props.todo.action}</p>
        )}
        <div>
          <button
            onClick={this.completeBtnHandler}
            className="btn btn-outline-success"
          >
            Complete
          </button>
          <button
            onClick={this.cancelBtnHandler}
            className="btn btn-outline-warning ms-2"
          >
            Cancel
          </button>
          <button
            onClick={() => {
              this.props.onDeleteTodo(this.props.todo.id);
            }}
            className="btn btn-outline-danger ms-2"
          >
            Delete
          </button>
        </div>
      </div>
    );
  }
}

export default TodoItem;
