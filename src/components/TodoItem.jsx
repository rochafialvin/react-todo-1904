import React from "react";

class TodoItem extends React.Component {
  render() {
    return (
      <div className="d-flex w-50 p-3 justify-content-around">
        <p className="lead">Makan</p>
        <div>
          <button className="btn btn-outline-danger me-5">Delete</button>
          <button className="btn btn-outline-success">Complete</button>
        </div>
      </div>
    );
  }
}

export default TodoItem;
