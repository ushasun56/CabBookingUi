import React, { Component } from 'react'

export default class Cabs extends Component {
    render() {
        const styleObj = {
           
            color: " #f4db31",
          
        }
        return (
            <div id="taxis" className="taxis_section layout_padding">
            <div className="container">
              <h1 className="our_text">Our <span style={styleObj} >Cabs</span></h1>
              <div className="taxis_section_2">
                <div className="row">
                  <div className="col-sm-4">
                    <div className="taxi_main">
                      <div className="round_1">01</div>
                      <h2 className="carol_text">Auto</h2><br/>
                     <div className="images_2"><a href="#"><img src="images/auto.png"/></a></div>
                    </div>
                  </div>
                  <div className="col-sm-4">
                    <div className="taxi_main">
                      <div className="round_1">02</div>
                      <h2 className="carol_text">Mini</h2>
                      <p className="reader_text">Hatchback<br/> </p>
                     
                      <div className="images_2"><img src="images/img-2.png"/></div>
                    </div>
                  </div>
                  <div className="col-sm-4">
                    <div className="taxi_main">
                      <div className="round_1">03</div>
                      <h2 className="carol_text">Prime</h2>
                      <p className="reader_text">Sedan<br/> </p>
                       
                      <div className="images_2"><img src="images/img-2.png"/><a/></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )
    }
}
