import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import { Auth } from "aws-amplify";

class SignIn extends Component {
  constructor() {
    super();
    this.state = {
      username: "",
      password: "",
    };
  }

  handleSignIn = (event) => {
    event.preventDefault();
    const { username, password } = this.state;
    console.log(username);
    console.log(password);

    Auth.signIn({ username, password })
      .then((user) => console.log(user))
      .then(() => this.props.history.push("/home"))

      .catch((err) => console.log(err));
  };

  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
    });
  };

  render() {
    return (
      <div className="container my-5">
        <div className="row">
          <div className="col-md-6 offset-md-3">
            <form>
              <h2>Login Form</h2>
              <div className="form-group">
                <input
                  style={{ width: "400px" }}
                  type="text"
                  name="username"
                  value={this.state.username}
                  placeholder="Username"
                  onChange={this.handleChange}
                />
              </div>

              <div className="form-group">
                <input
                  style={{ width: "400px" }}
                  type="password"
                  name="password"
                  value={this.state.password}
                  placeholder="Password"
                  onChange={this.handleChange}
                />
              </div>

              <div className="form-group">
                <div className="custom-control custom-checkbox">
                  <input
                    type="checkbox"
                    className="custom-control-input"
                    id="customCheck1"
                  />
                  <label
                    className="custom-control-label"
                    htmlFor="customCheck1"
                  >
                    Remember me
                  </label>
                </div>
              </div>

              <input
                type="submit"
                value="SIGN IN"
                onClick={this.handleSignIn}
                className="btn btn-dark btn-small "
              />
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default withRouter(SignIn);
