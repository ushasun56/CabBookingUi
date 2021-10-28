import React, { Component } from "react";
import { Link } from "react-router-dom";
import { createDriverProfile } from "../../actions/ActionCreators";
import {connect} from "react-redux";
import PropTypes from 'prop-types';

 class DriverRegister extends Component {

  constructor(props)
    {
        super(props);
        this.state={
            name:"",
            password:"",
            mobileNumber:"",
            address:"",
            email:"",
            licenceNo:"",
            rating:""
            //errors: { }
        }
        this.onChange=this.onChange.bind(this);
        this.onSubmit=this.onSubmit.bind(this);
    };
  
    onChange(event)
    {
        console.log("onChange triggered..");
        // this.setState({projectName:event.target.value});
        this.setState({[event.target.name]:event.target.value});
    }

    onSubmit(event)
    {
        event.preventDefault();
        const driverProfile = {
            name:this.state.name,
            email:this.state.email,
            address:this.state.address,
            mobileNumber:this.state.mobileNumber,
            password:this.state.password,
            licenceNo:this.state.licenceNo,
            rating:this.state.rating
        };
        this.props.createDriverProfile(driverProfile,this.props.history);
        console.log(driverProfile);
        alert("You have been registered successfully...");
    }

  render() {
    const styleObj = {
      fontSize: 33,
      color: "#ffffff",
      cursor: "pointer",
    };

    return (
      <div>
        <div id="index.html" class="header_section1">
          <div class="container">
            <div class="row">
              <div class="col-sm-6 col-lg-3">
                <div class="logo">
                  <a href="index.html">
                    <img src="images/logo.png" alt="img" />
                  </a>
                </div>
              </div>
              <div class="col-sm-6 col-lg-9">
                <div class="menu_text">
                  <ul>
                  <li>
                  <Link to="/home" >Home</Link>
                  </li>
                    <li>
                    <Link to="/about" >About</Link>
                    </li>
                    <li>
                    <Link to="/contact" >Contact Us</Link>
                    </li>

                   
                   
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
        <br></br>
        <br></br>
        <div>
        <form onSubmit={this.onSubmit} id="register-form" name="register-form" method="post">
            <div class="modal-dialog">
              <div class="modal-content ">
                <div class="modal-header" style={{ background: "gainsboro" }}>
               
                  <div>
                  &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                    <img
                      src="images/taxi.png"
                      class="rounded"
                      alt="img"
                      height="5"
                      width="60"
                      style={{
                        backgroundColor: "black",
                      }}
                    />
                  </div>
                </div>
                <h4
                  class="modal-title  text-center"
                  style={{
                    background: "gainsboro ",
                    fontFamily: "-moz-initial",
                    fontSize: "30px",
                  }}
                >
                  Sign Up Driver
                </h4>

                <div class="modal-body" style={{ background: "gainsboro " }}>
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
                              placeholder="Full Name"  value={this.state.name} onChange={this.onChange}
                            />
                          </div>

                          

                          <div class="form-group">
                            <input
                              type="text"
                              name="address"
                              id="address"
                              tabindex="4"
                              class="form-control"
                              placeholder="Address"  value={this.state.address} onChange={this.onChange}
                            />
                          </div>

                          <div class="form-group">
                            <input
                              type="text"
                              name="mobileNumber"
                              id="mobileno"
                              tabindex="3"
                              class="form-control"
                              placeholder="Mobile Number"  value={this.state.mobileNumber} onChange={this.onChange}
                            />
                          </div>

                          <div class="form-group">
                            <input
                              type="text"
                              name="email"
                              id="email"
                              tabindex="2"
                              class="form-control"
                              placeholder="Email Address"  value={this.state.email} onChange={this.onChange} 
                            />
                          </div>

                          <div class="form-group">
                            <input
                              type="text"
                              name="licenceNo"
                              id="name"
                              tabindex="1"
                              class="form-control"
                              placeholder="Licence Number"  value={this.state.licenceNo} onChange={this.onChange}
                            />
                          </div>

                          <div class="form-group">
                            <input
                              type="text"
                              name="rating"
                              id="name"
                              tabindex="1"
                              class="form-control"
                              placeholder="Rating"  value={this.state.rating} onChange={this.onChange}
                            />
                          </div>
                          <div class="form-group">
                            <input
                              type="password"
                              name="password"
                              id="password"
                              tabindex="6"
                              class="form-control"
                              placeholder="Password"  value={this.state.password} onChange={this.onChange}
                            />
                          </div>

                          {/*  <div class="form-group">
                                                    <input type="password" name="cpassword" id="cpassword" tabindex="7" class="form-control" placeholder="Confirm Password" />
                                </div>*/}
                              
                          <div class="form-group text-center">
                            <button
                              type="submit"
                              name="btnregister"
                              id="btnregister"
                              tabindex="4"
                              class="form-control btn btn-register"
                              value="Register Now"
                              style={{ background: "lightblue", height:"50px"}}
                            > Register Now</button>

                            <div class="text-danger" id="err2"></div>
                          </div>
                          
                          <div
                            class="form-group text-center"
                            style={{
                              fontFamily: "cursive",
                              fontWeight: "bold",
                            }}
                          >
                         
                              <Link to="/logindriverpage">
                          
                          
                            <a href="#" class="model-link" id="login-form-link">
                              Login
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
      </div>
    );
  }
}
DriverRegister.propTypes = {
  createDriverProfile: PropTypes.func.isRequired,
  //errors: PropTypes.object.isRequired
};

// const mapStateToProps = state => ({
//     errors: state.errors
// });

export default connect(null, {createDriverProfile}) (DriverRegister);