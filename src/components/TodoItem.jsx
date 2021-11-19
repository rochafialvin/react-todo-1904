import React from "react";

class TodoItem extends React.Component {
  deleteBtnHandler() {
    alert("Tombol delete berhasil di tekan");
  }

  completeBtnHandler(time) {
    alert(`Good ${time}`);
  }

  render() {
    return (
      <div className="d-flex w-50 p-3 justify-content-around">
        <p className="lead">Makan</p>
        <div>
          <button
            onClick={this.deleteBtnHandler}
            className="btn btn-outline-danger me-5"
          >
            Delete
          </button>
          <button
            onClick={() => {
              this.completeBtnHandler("morning");
            }}
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
