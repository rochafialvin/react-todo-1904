import React from "react";
import axios from "../utils/axios";
import { connect } from "react-redux";

import TodoItem from "./TodoItem";
import InputBox from "./InputBox";
import Pagination from "./Pagination";

class Home extends React.Component {
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
      const res = await axios.post(
        "/todos",
        { activity: todoAction },
        {
          headers: {
            authorization: `Bearer ${this.props.token}`,
          },
        }
      );
      this.fetchProduts();
    } catch (error) {
      alert("Terjadi kesalahan pada server");
      console.log({ error });
    }
  };

  onDeleteTodo = async (selectedId) => {
    const isProcessDelete = window.confirm("Bener nih mau dihapus ?");
    if (isProcessDelete) {
      try {
        await axios.delete(`/todos/${selectedId}`, {
          headers: {
            authorization: `Bearer ${this.props.token}`,
          },
        });
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

      // Mapping
      return slicedTodos.map((todo) => {
        // todo : {id, activity, is_done}
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
      const res = await axios.get("/todos", {
        headers: {
          authorization: `Bearer ${this.props.token}`,
        },
      });

      //res.data = {data : []}
      this.setState({
        todos: res.data.data,
        maxPage: Math.ceil(res.data.data.length / this.state.itemPerPage),
      });
    } catch (error) {
      console.log({ error });
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

const mapStateToProps = (state) => {
  // object yang di return akan menjadi property
  return {
    token: state.auth.token,
  };
};

export default connect(mapStateToProps)(Home);

// function yang pertama kali jalan adalah render() untuk pertama kali
// setelah render yang pertama kali selesai di proses, selanjutnya akan menjalankan componentDidMount()
// this.setState(..) --> render() --> componentDidMount ? tidak
