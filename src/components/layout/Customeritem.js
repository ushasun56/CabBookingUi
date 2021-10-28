import React, { Component } from 'react'

export default class Customeritem extends Component {
    render() {
        const {customer} = this.props;
        
        return (

            <div className="container">
                <div className="card card-body bg-light mb-3" >
                    <div className="row" style={{ background: "#ffe599" }}>
                        <div className="col-2">
                            <span className="mx-auto">CBS</span>
                        </div>
                        <div className="col-lg-6 col-md-4 col-8" >
                           <h1>Customer id :-{customer.customerid}</h1>
                           <hr/>
                           <h3>Customer Name:-{customer.name}</h3>
                            
                           <h3>Customer Password:-{customer.password}</h3>
                           <h3>Customer Address:-{customer.address}</h3>
                           <h3>Customer mobileNumber:-{customer.mobileNumber}</h3>
                           <h3>Customer Email:-{customer.email}</h3>
                          
                        </div>
                       
                         
                                 <div className="col-md-4 d-none d-lg-block">
                        <ul className="list-group">
                           

                           
                            {/* <a href="#">
                                <li className="list-group-item update">
                                    <i className="fa fa-edit pr-1">Update Project Info</i>
                                </li>
                            </a> */}
                            <br/>
                            <br/>
                            <br/>
                            <br/>
                            <br/>
                           
                        </ul>
                    </div>
                        </div>
                    </div>
                </div>
            
        )
    }
}