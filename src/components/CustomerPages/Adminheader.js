import React, { Component } from 'react';
import {Link} from "react-router-dom";

import AuthenticationService from "../LoginPage/AuthenticationService";

export default class Adminheader extends Component {
    render() {
        return (
           
            <div id="index.html" class="header_section1">
            <div class="container">
                <div class="row">
                    <div class="col-sm-6 col-lg-3">
                        <div class="logo"><a href="index.html"><img src="images/logo.png"  alt="img"/></a></div>
                    </div>
                    <div class="col-sm-6 col-lg-9">
                        <div class="menu_text">
                            <ul>
                                <li><Link to="/home">Home</Link></li>                                                    
                               
                               
                               
                                <li> <Link to="/contact" >Contact Us</Link></li>
                                <li> <Link to="/logout"

                                className="btn btn-default btn-sm"
        
                                onClick={AuthenticationService.logout} >Logout</Link></li>
                            
                    
                            </ul>
                        </div>
                </div>
                </div>
                </div>
         </div>
        )
    }
}
