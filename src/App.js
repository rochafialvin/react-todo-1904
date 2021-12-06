import React from "react";
import axios from "./utils/axios";

import "bootstrap/dist/css/bootstrap.css";
import "./style.css";

import TodoItem from "./components/TodoItem";
import InputBox from "./components/InputBox";
import Pagination from "./components/Pagination";

class App extends React.Component {
  state = {
    todos: [],
    page: 1,
    maxPage: 0,
    itemPerPage: 5,
    sortBy: "",
  };

  onSelectSort = (sortValue) => {
    this.setState({ sortBy: sortValue });
  };

  onNextPage = () => {
    if (this.state.page < this.state.maxPage) {
      this.setState({ page: this.state.page + 1 });
    }
  };

  onPrevPage = () => {
    if (this.state.page > 1) {
      this.setState({ page: this.state.page - 1 });
    }
  };

  onAddTodo = async (todoAction) => {
    try {
      const res = await axios.get("/todos");
      const found = res.data.find((todo) => {
        // todo.action : Bangun tidur
        const action = todo.action.toLowerCase(); // bangun tidur
        // todoAtion : BANGUN TIDUR
        const todoActionLowerCase = todoAction.toLowerCase(); // bangun tidur
        return action === todoActionLowerCase;
      });

      if (found) {
        alert("Action ini sudah terdapat pada list");
      } else {
        const newTodo = {
          id: new Date().getTime(),
          action: todoAction,
          isComplete: false,
        };

        await axios.post("/todos", newTodo);
        alert(`Action ${todoAction} berhasil di tambahkan`);
        this.fetchProduts();
      }
    } catch (error) {
      alert("Terjadi kesalahan pada server");
    }
  };

  onDeleteTodo = async (selectedId) => {
    const isProcessDelete = window.confirm("Bener nih mau dihapus ?");
    if (isProcessDelete) {
      try {
        // /todos/1654786965
        await axios.delete(`/todos/${selectedId}`);
        alert(`Todo dengan id ${selectedId} berhasil di hapus`);
        this.fetchProduts();
      } catch (error) {
        alert("Gagal menghapus todo");
      }
    }
  };

  onCompleteTodo = async (selectedId) => {
    try {
      await axios.patch(`/todos/${selectedId}`, { isComplete: true });
      this.fetchProduts();
    } catch (error) {
      alert("Terjadi kesalahan pada server");
    }
  };

  onCancelTodo = async (selectedId) => {
    try {
      await axios.patch(`/todos/${selectedId}`, { isComplete: false });
      this.fetchProduts();
    } catch (error) {
      alert("Terjadi kesalahan pada server");
    }
  };

  renderTodoList = () => {
    if (this.state.todos.length) {
      // Mengcopy isi array
      const rawData = [...this.state.todos];

      // Sorting
      switch (this.state.sortBy) {
        case "a-z":
          // sort ascending
          rawData.sort((a, b) => {
            if (a.action > b.action) {
              return 1;
            } else if (a.action < b.action) {
              return -1;
            } else {
              return 0;
            }
          });
          break;

        case "z-a":
          // sort descending
          rawData.sort((a, b) => {
            if (a.action > b.action) {
              return -1;
            } else if (a.action < b.action) {
              return 1;
            } else {
              return 0;
            }
          });
          break;

        default:
          break;
      }

      // Slicing
      const startIndex = (this.state.page - 1) * this.state.itemPerPage;
      const endIndex = startIndex + this.state.itemPerPage;
      const slicedTodos = rawData.slice(startIndex, endIndex);

      // Maping
      return slicedTodos.map((todo) => {
        return (
          <TodoItem
            key={todo.id}
            todo={todo}
            onDeleteTodo={this.onDeleteTodo}
            onCompleteTodo={this.onCompleteTodo}
            onCancelTodo={this.onCancelTodo}
          />
        );
      });
    } else {
      return <h3 className="text-center mt-5">Loading ...</h3>;
    }
  };

  fetchProduts = async () => {
    try {
      const res = await axios.get("/todos");
      this.setState({
        todos: res.data,
        maxPage: Math.ceil(res.data.length / this.state.itemPerPage),
      });
    } catch (error) {
      console.log(error);
    }
  };

  componentDidMount() {
    setTimeout(() => {
      this.fetchProduts();
    }, 2000);
  }

  render() {
    return (
      <div className="container p-5">
        <InputBox
          todos={this.state.todos}
          onAddTodo={this.onAddTodo}
          onSelectSort={this.onSelectSort}
        />
        <div style={{ height: "320px" }}>{this.renderTodoList()}</div>
        <Pagination
          page={this.state.page}
          maxPage={this.state.maxPage}
          onNextPage={this.onNextPage}
          onPrevPage={this.onPrevPage}
        />
      </div>
    );
  }
}

export default App;

// function yang pertama kali jalan adalah render() untuk pertama kali
// setelah render yang pertama kali selesai di proses, selanjutnya akan menjalankan componentDidMount()
// this.setState(..) --> render() --> componentDidMount ? tidak
