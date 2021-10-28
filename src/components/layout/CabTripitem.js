import React, { Component } from 'react'

export default class CabTripitem extends Component {
    render() {
        const {cabtrip} = this.props;
        
        return (

            <div className="container">
                <div className="card card-body bg-light mb-3" >
                    <div className="row" style={{ background: "#C7BCD5" }}>
                        <div className="col-2">
                            <span className="mx-auto">CBS</span>
                        </div>
                        <div className="col-lg-6 col-md-4 col-8" >
                           <h1>Trip Booing Id :-{cabtrip.tripBookingId}</h1>
                           <hr/>
                           <h3>Cab Type:-{cabtrip.driver.cab.carType}</h3>
                           <h3>From Location:-{cabtrip.fromLocation}</h3>
                            
                           <h3>To Location:-{cabtrip.toLocation}</h3>
                           <h3>From Date:-{cabtrip.fromDateTime}</h3>
                           <h3>To Date:-{cabtrip.toDateTime}</h3>
                           
                           <h3>Distance :-{cabtrip.distanceInKm}</h3>
                           <h3>Bill:-{cabtrip.bill}</h3>
                        </div>
                      
                                
                        </div>
                    </div>
                </div>
            
        )
    }
}

