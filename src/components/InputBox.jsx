import { Component } from "react";

export class InputBox extends Component {
  render() {
    return (
      <div className="w-50 mx-auto mb-2">
        <input
          type="text"
          className="form-control mb-2"
          placeholder="What's next ?"
        />
        <button className="btn btn-outline-primary w-100">Add</button>
      </div>
    );
  }
}

export default InputBox;
