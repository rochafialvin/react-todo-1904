import React from "react";

class TodoItem extends React.Component {
  // state adalah object special sebagai tempat penyimpanan data yang akan digunakan oleh komponen
  state = {
    action: "Minum",
    isComplete: false, // true
  };

  // membuat function dengan model arrow function agar keyword this tidak undefined
  deleteBtnHandler = () => {
    // untuk merubah data di dalam state harus dengan menggunakan method setState
    // REMEMBER !!! setiap kali setState dijalankan, maka function render akan dijalankan ulang
    this.setState({ isComplete: false });
  };

  completeBtnHandler = (time) => {
    this.setState({ isComplete: true });
    alert(`Selamat anda sudah ${this.state.action}`);
    console.log(time);
  };

  render() {
    return (
      <div className="d-flex w-50 p-3 justify-content-around">
        {/* ternary operation, sebuah syntax yang bekerja menyerupai if else */}
        {/* jika isComplete bernilai true, akan menampilkan paragraf yang memiliki class text-decoration-line-through */}
        {this.state.isComplete ? (
          <p className="lead text-decoration-line-through">
            {this.state.action}
          </p>
        ) : (
          <p className="lead">{this.state.action}</p>
        )}
        <div>
          <button
            // karena function deleteBtnHandler tidak menerima input (argument), maka bisa langsung ditaruh didalam kurung kurawal
            onClick={this.deleteBtnHandler}
            className="btn btn-outline-danger me-5"
          >
            Delete
          </button>
          <button
            // karena function completeBtnHandler menerima input (argument), maka harus ditaruh didalam arrow funciton terlebih dahulu
            onClick={() => {
              this.completeBtnHandler("Sesuatu");
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
