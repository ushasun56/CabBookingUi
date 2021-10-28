import React, { Component } from 'react';
import ProfileHeader from './ProfileHeader';
import { Link } from "react-router-dom";
import CustomerCab from './CustomerCab';
 var t={};
export default class CustomerDash extends Component {

  
  constructor(props)
  {
      super(props);
      this.state={
          fromLocation:"",
          toLocation:"",
          fromDateTime:"",
          toDateTime:"",
          distanceInKm:""
      }
      this.onChange=this.onChange.bind(this);
      this.sendTrip=this.sendTrip.bind(this);
  };

  onChange(event)
  {
        console.log("onChange triggered..");
        // this.setState({projectName:event.target.value});
        this.setState({[event.target.name]:event.target.value});
  }

   distance() {
    
   const i = Number(this.state.fromLocation.charAt(6));
   const j = Number(this.state.toLocation.charAt(6));
   var distanceInKm=0;
    if (i-j===1 || i-j===-1) {
      return distanceInKm = 10;
    } else if(i-j===2 || i-j===-2)
    {
      return distanceInKm = 20;
    }
    else if(i-j===3 || i-j===-3)
    {
      return distanceInKm = 30;
    }
    else if(i-j===4 || i-j===-4)
    {
      return distanceInKm = 40;
    }
}



    // onSubmit(event)
    // {
    //     event.preventDefault();
    //     const trip = {
    //       fromLocation:this.state.fromLocation,
    //       toLocation:this.state.toLocation,
    //       fromDateTime:this.state.fromDateTime,
    //       toDateTime:this.state.toDateTime
    //     };
    //     this.props.insertTrip(trip,this.props.history);
    //     console.log(trip);
    //     //alert("You have been registered successfully...");
    // }

    sendTrip=event=>
    {
      event.preventDefault();
      var distance1 = this.distance();

      const trip = {
        fromLocation:this.state.fromLocation,
        toLocation:this.state.toLocation,
        fromDateTime:this.state.fromDateTime,
        toDateTime:this.state.toDateTime,
        distanceInKm:distance1
      };
      
      console.log(trip);
      t=trip;

      console.log(t);

    }

    
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
                      <form onSubmit={this.sendTrip}>
                      <div class="form-group">
                        <input type="" class="email-bt" placeholder="PICKUP"
                         name="fromLocation" value={this.state.fromLocation} onChange={this.onChange}/>
                      </div>
                      <div class="form-group">
                        <input type="" class="email-bt" placeholder="DROP"
                         name="toLocation" value={this.state.toLocation} onChange={this.onChange}/>
                      </div>
                      <div class="form-group">
                      <label>FROM (Date and Time)</label>
                        <input type="date" class="email-bt" placeholder="FROM (Date and Time)" 
                        name="fromDateTime" value={this.state.fromDateTime} onChange={this.onChange}/>
                      </div>
                      <div class="form-group">
                      <label>TO (Date and Time)</label>
                        <input type="date" class="email-bt" placeholder="TO (Date and Time)" 
                        name="toDateTime" value={this.state.toDateTime} onChange={this.onChange}/>
                      </div>
                      <div>
                      <div class="send_bt"><Link to="/selectcabpage">SEARCH</Link></div>
                      {console.log(t)}
                      </div>
                        </form>
                        </div> 
                        </div>
                        
                     {/*<div class="send_bt"><Link to="/selectcabpage">SEARCH</Link></div>*/}
                     
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
