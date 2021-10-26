import React, { Component } from 'react'
import { Link } from "react-router-dom";
import CreateCabButton from './CreateCabButton';

export default class Admin extends Component {
    render() {
        return (
            
           
       <div>
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

                      <a href="">Welcome in Admin Platform </a>

                    </li>

                    <li>

                      

                    </li>

                    



                    <div id="myNav" class="overlay">

                      <a

                        href="javascript:void(0)"

                        class="closebtn"

                        onclick="closeNav()"

                      >

                        &times;

                      </a>

                      <div class="overlay-content">

                        <a href="" >Welcome in Admin Platform</a>

                       



                        

                      </div>

                    </div>

                  </ul>

                </div>

              </div>

            </div>

          </div>
          </div>
          <div className="projects">
          <div className="container">
              <div className="row">
                  <div className="col-md-12">
                  <br/>
                  <br/>
                  &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;  &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; 
                  <img src="images/admin.jpg" alt="img" />
                 <h1 className="display-4 text-center">Cab Booking System</h1>
                      <br />
                     

                      <CreateCabButton/>
                     

                      <br />

                      <hr />
                     

                     

                     
                  </div>
              </div>
          </div>
      </div>
        </div>
                
        )
    }
}
