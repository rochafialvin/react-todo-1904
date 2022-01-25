import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { Navigate } from "react-router-dom";
import { loginAction } from "../store/actions";
import axios from "../utils/axios";

export class Login extends Component {
  state = {
    username: "",
    password: "",
  };

  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  loginHandler = async () => {
    try {
      const res = await axios.get("/users", {
        params: {
          username: this.state.username,
          password: this.state.password,
        },
      });

      if (res.data.length) {
        const { id, username } = res.data[0];
        this.props.loginDispatch({ id, username });
      } else {
        alert("Username atau password salah");
      }
    } catch (error) {}
  };

  onLoginClick = () => {
    this.loginHandler();
  };

  onInputPress = (e) => {
    if (e.code === "Enter") this.loginHandler();
  };

  render() {
    if (this.props.sundaEmpire) return <Navigate to="/" replace />;

    return (
      <div className="container">
        <div className="row">
          <div className="col-12 text-center">
            <h1>Log in now!</h1>
            <p className="lead">
              Log in now and start shopping in the most affordable ecommerce
              platform
            </p>
          </div>
        </div>
        <div className="row mt-5">
          <div className="col-4 offset-4">
            <div className="card">
              <div className="card-body">
                <h5 className="font-weight-bold mb-3">Log in</h5>
                <input
                  name="username"
                  placeholder="Username"
                  type="text"
                  className="form-control my-2"
                  onChange={this.handleChange}
                  onKeyPress={this.onInputPress}
                />
                <input
                  name="password"
                  placeholder="Password"
                  type="password"
                  className="form-control my-2"
                  onChange={this.handleChange}
                  onKeyPress={this.onInputPress}
                />
                <div className="d-flex flex-row justify-content-between align-items-center">
                  <button
                    onClick={this.onLoginClick}
                    className={`btn btn-primary mt-2 `}
                  >
                    Login
                  </button>
                  <Link to="/register">Or register</Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    sundaEmpire: state.auth.username,
  };
};
const mapDispatchToProps = (dispatch) => {
  // object yang di return oleh function ini akan menjadi props untuk Login
  // this.props.loginDispatch
  return {
    loginDispatch: (loginData) => {
      // loginData : { id : 1, username : "rochafi" }
      const action = loginAction(loginData);
      dispatch(action);
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);
// connect digunakan untuk menghubungkan component dengan redux store
