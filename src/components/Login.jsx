import React, { Component } from "react";
import { Link } from "react-router-dom";

export class Login extends Component {
  onLoginClick = () => {
    alert("Login gan");
  };

  handleChange = () => {
    alert("Handle change");
  };

  onInputPress = () => {
    alert("On Input");
  };

  render() {
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

export default Login;
