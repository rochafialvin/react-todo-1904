import React from "react";

class TodoItem extends React.Component {
  state = {
    action: "Minum",
    isComplete: false,
  };

  deleteBtnHandler = () => {
    this.setState({ isComplete: false });
  };

  completeBtnHandler = () => {
    this.setState({ isComplete: true });
  };

  render() {
    return (
      <div className="d-flex w-50 pt-3 justify-content-between border-bottom mx-auto">
        {this.state.isComplete ? (
          <p className="lead text-decoration-line-through">
            {this.state.action}
          </p>
        ) : (
          <p className="lead">{this.state.action}</p>
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
