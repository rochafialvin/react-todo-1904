// di import karena ingin menggunakan class Component yang berada di dalam React
import React from "react";

// import css yang ingin digunakan, ada css milik bootstrap dan juga css milik sendiri
import "bootstrap/dist/css/bootstrap.css";
import "./style.css";

import TodoItem from "./components/TodoItem";

// membuat komponen berbasis class
class App extends React.Component {
  // komponen berbasis class harus memiliki function render yang mereturn satu buah element html yang disusun menggunakan jsx
  render() {
    return (
      // ini bukanlah html melainkan jsx, yaitu syntax dari javascript yang serupa dengan html
      <div className="container border border-1 border-dark">
        <TodoItem />
        <TodoItem />
        <TodoItem />
      </div>
    );
  }
}

// setiap komponen yang akan digunakan di tempat lain harus di export
export default App;
