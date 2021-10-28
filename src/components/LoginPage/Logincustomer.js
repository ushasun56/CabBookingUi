import React, { Component } from "react";
import { Link } from "react-router-dom";
import AuthenticationService from "./AuthenticationService.js";

export default class Logincustomer extends Component {
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
    // console.log(this.state);
    this.setState({
      [event.target.name]: event.target.value,
    });
  }

  loginClicked(event) {
    // if (this.state.username === "samuel" && this.state.password === "dummy") {
    //   AuthenticationService.registerSuccessfulLogin(
    //     this.state.username,
    //     this.state.password
    //   );
    //   console.log("succesful");
    //   this.props.history.push("/costomerschedule");
    //   //  this.setState({ showSuccessMessage: true });
    //   //  this.setState({ hasLoginFailed: false });
    // } else {
    //   console.log("failed");
    //   this.setState({ showSuccessMessage: false });
    //   this.setState({ hasLoginFailed: true });
    // }
    // AuthenticationService.customerLoginService(
    //   this.state.username,
    //   this.state.password
    // )
    //   .then(() => {
    //     AuthenticationService.registerSuccessfulLogin(
    //       this.state.username,
    //       this.state.password
    //     );
    //     console.log("succesful");
    //     this.props.history.push("/costomerschedule");
    //   })
    //   .catch(() => {
    //     console.log("failed");
    //     this.setState({ showSuccessMessage: false });
    //     this.setState({ hasLoginFailed: true });
    //   });
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
        this.props.history.push("/costomerschedule");
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

        <div className="container">
          <div className="row">
            <div className="col-lg-3 col-md-2"></div>
            <div className="col-lg-6 col-md-8 login-box">
              <div className="col-lg-12 login-key">
                <i className="fa fa-key" aria-hidden="true"></i>
              </div>
              <div className="col-lg-12 login-title">CUSTOMER PANEL</div>

              <div className="col-lg-12 login-form">
                <div className="col-lg-12 login-form">
                  <div className="form-group">
                    <label className="form-control-label">USERNAME</label>
                    <input
                      type="text"
                      className="form-control"
                      name="username"
                      value={this.state.username}
                      onChange={this.handleChange}
                    />
                  </div>
                  <div className="form-group">
                    <label className="form-control-label">PASSWORD</label>
                    <input
                      type="password"
                      className="form-control"
                      name="password"
                      value={this.state.password}
                      onChange={this.handleChange}
                    />
                  </div>

                  <div className="col-lg-12 loginbttm">
                    <div className="col-lg-6 login-btm login-text"></div>

                    <div className="col-lg-9 login-btm login-button">
                      <Link to={"/customerregister"}>
                        {" "}
                        <button
                          type="submit"
                          className="btn btn-outline-primary"
                        >
                          New Register
                        </button>
                      </Link>
                      &nbsp; &nbsp; &nbsp; &nbsp;
                      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                      <button
                        className="btn btn-outline-primary"
                        onClick={this.loginClicked}
                      >
                        LOGIN
                      </button>
                      {this.state.hasLoginFailed && (
                        <div>invalid credentials</div>
                      )}
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-md-2"></div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
