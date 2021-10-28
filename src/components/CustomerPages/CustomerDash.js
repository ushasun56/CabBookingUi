import React, { Component } from 'react';
import ProfileHeader from './ProfileHeader';
import { Link } from "react-router-dom";

export default class CustomerDash extends Component {
    render() {
        return (
            <div>
            <ProfileHeader/>
            <div class="banner_section">
            <div class="container-fluid">
              <div id="main_slider" class="carousel slide" data-ride="carousel">
        <div class="carousel-inner">
          <div class="carousel-item active">
            <div class="row">
                <div class="col-md-6">
                  <div class="book_now">
                    <h1 class="book_text">BOOK NOW</h1>
                    
                  </div>
                  <div class="image_1"><img src="images/img-1.png" alt="img"/></div>
                </div>
                <div class="col-md-6">
                  <h1 class="booking_text">Book a City Taxi to your destination in town</h1>
                  <div class="contact_bg">
                  <div class="input_main">
                    <div class="container">
                      <h2 class="request_text">Your everyday travel partner</h2>
                      <form action="/action_page.php">
                      <div class="form-group">
                        <input type="" class="email-bt" placeholder="PICKUP" name="Name"/>
                      </div>
                      <div class="form-group">
                        <input type="" class="email-bt" placeholder="DROP" name="Email"/>
                      </div>
                      <div class="form-group">
                      <label>FROM (Date and Time)</label>
                        <input type="date" class="email-bt" placeholder="FROM (Date and Time)" name="Email"/>
                      </div>
                      <div class="form-group">
                      <label>TO (Date and Time)</label>
                        <input type="date" class="email-bt" placeholder="TO (Date and Time)" name="Email"/>
                      </div>
                        </form>
                        </div> 
                        </div>
                        
                      <div class="send_bt"><Link to="/selectcabpage">SEARCH</Link></div>
                     
                </div>
                </div>
              </div>
          </div>
          
                </div>
                </div>
              </div>
          </div>
            </div>
        )
    }
}
