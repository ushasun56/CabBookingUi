import React, { Component } from 'react';
import { Link } from "react-router-dom";


export default class Logindriver extends Component {
    render() {
        return (
           
            <div>  
     <br></br><br></br><br></br><br></br><br></br>  
    <div class="container">
    <div class="row">
        <div class="col-lg-3 col-md-2"></div>
        <div class="col-lg-6 col-md-8 login-box">
            <div class="col-lg-12 login-key">
                <i class="fa fa-key" aria-hidden="true"></i>
            </div>
            <div class="col-lg-12 login-title">
                DRIVER PANEL
            </div>

            <div class="col-lg-12 login-form">
                <div class="col-lg-12 login-form">
                    <form>
                        <div class="form-group">
                            <label class="form-control-label">USERNAME</label>
                            <input type="text" class="form-control"/>
                        </div>
                        <div class="form-group">
                            <label class="form-control-label">PASSWORD</label>
                            <input type="password" class="form-control" />
                        </div>

                        <div class="col-lg-12 loginbttm">
                            <div class="col-lg-6 login-btm login-text">
                                
                            </div>
                           
                            <div class="col-lg-9 login-btm login-button">
                            <Link to={"/driverregister"}><button type="submit" class="btn btn-outline-primary">New Register</button></Link>
                            &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                            <Link to={"/adminhome"}>
                                <button type="submit" class="btn btn-outline-primary">LOGIN</button>
                            </Link>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
            <div class="col-lg-3 col-md-2"></div>
        </div>
    </div>
    </div>
    </div> 
                
            
        )
    }
}
