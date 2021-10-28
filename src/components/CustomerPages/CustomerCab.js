import React, { Component } from 'react';
import ProfileHeader from './ProfileHeader';

import { Link } from "react-router-dom";


export default class CustomerCab extends Component {

  constructor(props)
{
    super(props);
    // this.state={
    //     trip:""
    // }
}
    render() {

      const styleObj = {
           
        color: " #f4db31",
      
    }
    // const{trip} = this.props.data;
    // console.log(trip);
        return (
         
          <div>
         
          <ProfileHeader/>
            <div id="taxis" className="taxis_section layout_padding">
            <div className="container">
              <h1 className="our_text">Select Your Trip <span style={styleObj} >Cab</span></h1>
              <div className="taxis_section_2">
                <div className="row">
                  <div className="col-sm-4">
                  <Link to="/driverfirstpage">
                    <div className="taxi_main">
                      <div className="round_1">01</div>
                      <h2 className="carol_text">Auto</h2><br/>
                     <div className="images_2" ><a href="#"><img src="images/auto.png"/></a></div>
                     <h2 className="carol_text">Rate Per Kilometer <i class="fa fa-rupee"></i>15<sub><s>20</s></sub></h2>
                    </div>
                    </Link>
                  </div>

                  <div className="col-sm-4">
                  <Link to="/driversecondpage">
                    <div className="taxi_main">
                      <div className="round_1">02</div>
                      <h2 className="carol_text">Mini</h2>
                      <p className="reader_text">Hatchback<br/> </p>
                     
                      <div className="images_2"><img src="images/img-2.png"/></div>
                      <h2 className="carol_text">Rate Per Kilometer <i class="fa fa-rupee"></i>30<sub><s>38</s></sub></h2>
                    </div>
                  
                    </Link>
                  </div>
                  <div className="col-sm-4">
                  <Link to="/driverthiredpage">
                    <div className="taxi_main">
                      <div className="round_1">03</div>
                      <h2 className="carol_text">Prime</h2>
                      <p className="reader_text">Sedan<br/> </p>
                      
                      <div className="images_2"><img src="images/img-2.png"/><a/></div>
                      <h2 className="carol_text">Rate Per Kilometer <i class="fa fa-rupee"></i>50<sub><s>62</s></sub></h2>
                    </div>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
          </div>
        )
    }
}
