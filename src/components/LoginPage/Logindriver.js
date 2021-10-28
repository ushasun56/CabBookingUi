import React, { Component } from "react";
import { Link } from "react-router-dom";
import AuthenticationService from "./AuthenticationService";

export default class Logindriver extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: "",
      hasLoginFailed: false,
      showSuccessMessage: false,
    };
    this.handleChange = this.handleChange.bind(this);
    this.loginClicked = this.loginClicked.bind(this);
  }

  handleChange(event) {
    console.log(this.state);
    this.setState({
      [event.target.name]: event.target.value,
    });
  }

  loginClicked(event) {
    // if (this.state.username === "anuj" && this.state.password === "dummy") {
    //   AuthenticationService.registerSuccessfulLogin(
    //     this.state.username,
    //     this.state.password
    //   );
    //   console.log("succesful");
    //   this.props.history.push("/driverhome");
    //   //  this.setState({ showSuccessMessage: true });
    //   //  this.setState({ hasLoginFailed: false });
    // } else {
    //   console.log("failed");
    //   this.setState({ showSuccessMessage: false });
    //   this.setState({ hasLoginFailed: true });
    // }
    // console.log(this.state)
    
    AuthenticationService.executeJwtAuthenticationService(
      this.state.username,
      this.state.password
    )
      .then((response) => {
        AuthenticationService.registerSuccessfulLoginForJwt(
          this.state.username,
          response.data.token
        );
        console.log("succesful");
        this.props.history.push("/driverhome");
      })
      .catch(() => {
        console.log("failed");
        this.setState({ showSuccessMessage: false });
        this.setState({ hasLoginFailed: true });
      });
  }
  render() {
    return (
      <div>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <div class="container">
          <div class="row">
            <div class="col-lg-3 col-md-2"></div>
            <div class="col-lg-6 col-md-8 login-box">
              <div class="col-lg-12 login-key">
                <i class="fa fa-key" aria-hidden="true"></i>
              </div>
              <div class="col-lg-12 login-title">DRIVER PANEL</div>

              <div class="col-lg-12 login-form">
                <div class="col-lg-12 login-form">
                  <div class="form-group">
                    <label class="form-control-label">USERNAME</label>
                    <input
                      type="text"
                      class="form-control"
                      name="username"
                      value={this.state.username}
                      onChange={this.handleChange}
                    />
                  </div>
                  <div class="form-group">
                    <label class="form-control-label">PASSWORD</label>
                    <input
                      type="password"
                      class="form-control"
                      name="password"
                      value={this.state.password}
                      onChange={this.handleChange}
                    />
                  </div>

                  <div class="col-lg-12 loginbttm">
                    <div class="col-lg-6 login-btm login-text"></div>

                    <div class="col-lg-9 login-btm login-button">
                      <Link to={"/driverregister"}>
                        <button type="submit" class="btn btn-outline-primary">
                          New Register
                        </button>
                      </Link>
                      &nbsp; &nbsp; &nbsp; &nbsp;
                      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                      <button
                        class="btn btn-outline-primary"
                        onClick={this.loginClicked}
                      >
                        LOGIN
                      </button>
                      {this.state.hasLoginFailed && (
                        <div className="alert alert-warning">Login failed</div>
                      )}
                    </div>
                  </div>
                </div>
              </div>
              <div class="col-lg-3 col-md-2"></div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
