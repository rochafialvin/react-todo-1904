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
      // status : 2xx --> response dari API akan masuk ke res
      const res = await axios.post("/users/login", {
        username: this.state.username,
        password: this.state.password,
      });

      // res.data = {user, token}
      this.props.loginDispatch(res.data);
    } catch (error) {
      // 4xx or 5xx --> response dari API akan masuk ke error
      console.log({ error: error });
    }
  };

  onLoginClick = () => {
    this.loginHandler();
  };

  onInputPress = (e) => {
    if (e.code === "Enter") this.loginHandler();
  };

  render() {
    if (this.props.username) return <Navigate to="/" replace />;

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
    username: state.auth.user.username,
  };
};
const mapDispatchToProps = (dispatch) => {
  // object yang di return oleh function ini akan menjadi props untuk Login
  // this.props.loginDispatch
  return {
    loginDispatch: (loginData) => {
      // loginData : { user, token }
      // action : { type: 'LOGIN_SUCCESS, payload: {user, token}  }
      const action = loginAction(loginData);
      dispatch(action); // kirim action ke reducer
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);
// connect digunakan untuk menghubungkan component dengan redux store
