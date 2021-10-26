import React, { Component } from "react";

import { Link } from "react-router-dom";

export default class LoginPage extends Component {
  render() {
    const styleObj = {
      style: "display: none;",
    };
    return (
      <div class="modal" id="myModal">
        <form id="login-form" name="login-form" method="post" role="form">
          <div class="modal-dialog">
            <div class="modal-content ">
              <div class="modal-header">
                <h4 class="modal-title">Login</h4>
                <button type="button" class="close" data-dismiss="modal">
                  &times;
                </button>
              </div>

              <div class="modal-body">
                <div class="panel">
                  <div class="panel-body">
                    <div class="row">
                      <div class="col-lg-12">
                        <div class="form-group">
                          <input
                            type="text"
                            name="username"
                            id="username"
                            tabindex="1"
                            class="form-control"
                            placeholder="Username"
                            value=""
                          />
                        </div>
                        <div class="form-group">
                          <input
                            type="password"
                            name="password"
                            id="password"
                            tabindex="2"
                            class="form-control"
                            placeholder="Password"
                          />
                        </div>

                        <div class="form-group  text-center">
                        <Link to={"/costomerschedule"}>
                          <button
                            type="button"
                            name="btnlogin"
                            id="btnlogin"
                            class="form-control btn btn-login"
                          >
                            Log in
                          </button>
                          </Link>
                        </div>

                        <div
                          class="form-group text-danger text-center"
                          id="err1"
                        ></div>

                        <div class="form-group text-center">
                        <Link to={"/customerregister"}>
                          <a
                            href="#"
                            class="model-link"
                            id="register-form-link"
                            class="btn btn-outline-primary"
                          >
                            Register as Customer
                          </a>
                          </Link>
                          &nbsp;
                          <Link to={"/driverregister"}>
                          <a
                            href="#"
                            class="model-link"
                            id="register-form-link"
                            class="btn btn-outline-primary"
                          >
                            Register as Driver
                          </a>
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </form>
      </div>
    );
  }
}
