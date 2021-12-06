import React from "react";
import axios from "./utils/axios";
import { connect } from "react-redux";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { keepLoginAction } from "./store/actions";

import "bootstrap/dist/css/bootstrap.css";
import "./style.css";

import Home from "./components/Home";
import Login from "./components/Login";

class App extends React.Component {
  state = {
    isStorageChecked: false,
  };

  componentDidMount() {
    const userData = JSON.parse(localStorage.getItem("userData"));

    if (userData) {
      this.props.keepLoginAction(userData);
    }

    this.setState({ isStorageChecked: true });
  }

  render() {
    if (this.state.isStorageChecked) {
      return (
        <Router>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
          </Routes>
        </Router>
      );
    } else {
      return <h1>Loading ...</h1>;
    }
  }
}

export default connect(null, { keepLoginAction })(App);

// function yang pertama kali jalan adalah render() untuk pertama kali
// setelah render yang pertama kali selesai di proses, selanjutnya akan menjalankan componentDidMount()
// this.setState(..) --> render() --> componentDidMount ? tidak
