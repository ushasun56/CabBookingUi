import React, { Component } from "react";

export default class Register extends Component {
  render() {
    return (
      <div>
        <form id="register-form" name="register-form" method="post" role="form">
          <div class="modal-dialog">
            <div class="modal-content ">
              <div class="modal-header">
                <h4 class="modal-title">Sign Up</h4>
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
                            name="name"
                            id="name"
                            tabindex="1"
                            class="form-control"
                            placeholder="Full Name"
                            value=""
                          />
                        </div>

                        <div class="form-group">
                          <input
                            type="email"
                            name="email"
                            id="email"
                            tabindex="2"
                            class="form-control"
                            placeholder="Email Address"
                            value=""
                          />
                        </div>

                        <div class="form-group">
                          <input
                            type="text"
                            name="phoneno"
                            id="phoneno"
                            tabindex="3"
                            class="form-control"
                            placeholder="Phone Number"
                            value=""
                          />
                        </div>

                        <div class="form-group">
                          <input
                            type="text"
                            name="address"
                            id="address"
                            tabindex="4"
                            class="form-control"
                            placeholder="Address"
                            value=""
                          />
                        </div>

                        <div class="form-group">
                          <input
                            type="text"
                            name="username"
                            id="username"
                            tabindex="5"
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
                            tabindex="6"
                            class="form-control"
                            placeholder="Password"
                          />
                        </div>
                        <div class="form-group">
                          <input
                            type="password"
                            name="cpassword"
                            id="cpassword"
                            tabindex="7"
                            class="form-control"
                            placeholder="Confirm Password"
                          />
                        </div>

                        <div class="form-group text-center">
                          <input
                            type="button"
                            name="btnregister"
                            id="btnregister"
                            tabindex="4"
                            class="form-control btn btn-register"
                            value="Register Now"
                          />

                          <div class="text-danger" id="err2"></div>
                        </div>

                        <div class="form-group text-center">
                          <a href="#" class="model-link" id="login-form-link">
                            Login
                          </a>
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
