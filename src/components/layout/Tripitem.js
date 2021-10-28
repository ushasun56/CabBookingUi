import React, { Component } from 'react'


export default class Tripitem extends Component {
    render() {
        const {trip} = this.props;
        // const {customer} = this.props;
        // const {driver} = this.props;
        // const {cab} = this.props;
        return (

            <div className="container">
                <div className="card card-body bg-light mb-3" >
                    <div className="row" style={{ background: "#C5CAE9" }}>
                        <div className="col-2">
                            <span className="mx-auto">CBS</span>
                        </div>
                        <div className="col-lg-6 col-md-4 col-8" >
                           <h1>Trip Booing Id :-{trip.tripBookingId}</h1>
                           <hr/>
                           <h3>From Location:-{trip.fromLocation}</h3>
                            
                            <h3>To Location:-{trip.toLocation}</h3>
                            <h3>From Date:-{trip.fromDateTime}</h3>
                            <h3>To Date:-{trip.toDateTime}</h3>
                           
                            <h3>Distance Km :-{trip.distanceInKm}</h3>
                            <h3>Bill:-{trip.bill}</h3>
                              <h3> Customer Info..............</h3>
                           <h1>Customer Id :-{trip.customer.customerid}</h1>
                           <h3>Customer Name:-{trip.customer.name}</h3>
                            
                           <h3>Customer Password:-{trip.customer.password}</h3>
                           <h3>Customer Address:-{trip.customer.address}</h3>
                           <h3>Customer mobileNumber:-{trip.customer.mobileNumber}</h3>
                           <h3>Customer Email:-{trip.customer.email}</h3>
                           
                           <h3> Driver Info.................</h3>
                           <h1>Driver id :-{trip.driver.driverId}</h1>
                           <hr/>
                           <h3>Driver Name:-{trip.driver.name}</h3>
                            
                           <h3>Driver Password:-{trip.driver.password}</h3>
                           <h3>Driver Address:-{trip.driver.address}</h3>
                           <h3>Driver mobileNumber:-{trip.driver.mobileNumber}</h3>
                           <h3>Driver Email:-{trip.driver.email}</h3>
                           <h3>cab Info.....</h3>
                           <h1>Cab Id :-{trip.driver.cab.cabid}</h1>
                           <hr/>
                           <h3>Cab Type:-{trip.driver.cab.carType}</h3>
                            
                           <h3>Per Km rate:-{trip.driver.cab.perkmRate}</h3>
                         

                            
                        </div>
                       
                         
                        
                                 

                               
                                   
                             
                                
                        </div>
                    </div>
                </div>
            
        )
    }
}


