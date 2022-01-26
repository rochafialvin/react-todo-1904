import React from "react";

// props : key, todo, onDeleteTodo, onCompleteTodo, onCancelTodo
// todo : { id: 72, action: "Mandi", isComplete: false },

class TodoItem extends React.Component {
  cancelBtnHandler = () => {
    this.props.onCancelTodo(this.props.todo.id);
  };

  completeBtnHandler = () => {
    this.props.onCompleteTodo(this.props.todo.id);
  };

  render() {
    return (
      <div className="d-flex pt-3 justify-content-between border-bottom mx-auto">
        {this.props.todo.isComplete ? (
          <p className="lead text-decoration-line-through">
            {this.props.todo.activity}
          </p>
        ) : (
          <p className="lead"> {this.props.todo.activity}</p>
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
