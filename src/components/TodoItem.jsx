import React from "react";

class TodoItem extends React.Component {
  deleteBtnHandler = () => {
    this.setState({ isComplete: false });
  };

  completeBtnHandler = () => {
    this.setState({ isComplete: true });
  };

  render() {
    // this.props.todo : { action: "Mandi", isComplete: false }
    return (
      <div className="d-flex w-50 pt-3 justify-content-between border-bottom mx-auto">
        {this.props.todo.isComplete ? (
          <p className="lead text-decoration-line-through">
            {this.props.todo.action}
          </p>
        ) : (
          <p className="lead"> {this.props.todo.action}</p>
        )}
        <div>
          <button
            onClick={this.deleteBtnHandler}
            className="btn btn-outline-warning me-2"
          >
            Cancel
          </button>
          <button
            onClick={this.completeBtnHandler}
            className="btn btn-outline-success"
          >
            Complete
          </button>
        </div>
      </div>
    );
  }
}

export default TodoItem;
