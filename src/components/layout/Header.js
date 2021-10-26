import React, { Component, forwardRef } from "react";
import { Link } from "react-router-dom"
import Footer from "./Footer";



export default class Header extends Component {
  render() {
    const styleObj = {
      fontSize: 33,
      color: "#ffffff",
      cursor: "pointer",
    };

    return (
      <div id="index.html" class="header_section">
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
                  <Link to="/cabs" >Cab</Link>
                  </li>
                 
                  <li>
                  <Link to="/contact" >Contact Us</Link>
                  </li>
                  
                  <li> 
                  <div class="dropdown">
                  <button

                  class="btn btn-success dropdown-toggle"

                  type="button"

                  id="dropdownMenu2"

                  data-toggle="dropdown"

                  aria-haspopup="true"

                  aria-expanded="false"

                >

                  Login

                </button>

                <div

                  class="dropdown-menu"

                  aria-labelledby="dropdownMenu2"

                >

                  <Link to="/logincustomerpage">

                    {" "}

                    <button class="dropdown-item" type="button">

                      Customer Login

                    </button>

                  </Link>

                  <Link to="/logindriverpage">

                    {" "}

                    <button class="dropdown-item" type="button">

                      Driver Login

                    </button>

                  </Link>

                  <Link to="/loginadminpage">

                    {" "}

                    <button class="dropdown-item" type="button">

                      Admin

                    </button>

                  </Link>

                </div>

              </div>
                 
                </li>
                
               
              
                </ul>
              </div>
            </div>
          </div>
        </div>
        
      </div>
      


    );
  }
}
