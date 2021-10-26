import React, { Component } from 'react'
import { deldriver } from '../../actions/DriverAction';
import PropTypes from "prop-types";
import { connect } from "react-redux";
class Driveritem extends Component {
    ondeleteClick(pt_id) {

        console.log(pt_id);

        this.props.deldriver(pt_id);

    }
    render() {
        const {driver} = this.props;
        const {cab} = this.props;
        
        return (

            <div className="container">
                <div className="card card-body bg-light mb-3" >
                    <div className="row" style={{ background: "#e9c5ca" }}>
                        <div className="col-2">
                            <span className="mx-auto">CBS</span>
                        </div>
                        <div className="col-lg-6 col-md-4 col-8" >
                           <h1>Driver id :-{driver.driverId}</h1>
                           <hr/>
                           <h3>Driver Name:-{driver.name}</h3>
                            
                           <h3>Driver Password:-{driver.password}</h3>
                           <h3>Driver Address:-{driver.address}</h3>
                           <h3>Driver mobileNumber:-{driver.mobileNumber}</h3>
                           <h3>Driver Email:-{driver.email}</h3>
                           <h3>cab Info.....</h3>
                           <h1>Cab Id :-{driver.cab.cabid}</h1>
                           <hr/>
                           <h3>Cab Type:-{driver.cab.carType}</h3>
                            
                           <h3>Per Km rate:-{driver.cab.perkmRate}</h3>
                          
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
                              <a >
                                <li className="list-group-item delete">
                                <i className="fa fa-minus-circle pr-1"onClick={this.ondeleteClick.bind(this, driver.driverId)}>Delete Driver</i>
                                </li>
                            </a>
                        </ul>
                    </div>
                                
                                 

                               
                                   
                                  
                                {/* <a href="#">
                                    <li className="list-group-item update">
                                        <i className="fa fa-edit pr-1">Update Project Info</i>
                                    </li>
                                </a> */}
                                
                        </div>
                    </div>
                </div>
            
        )
    }
}
Driveritem.propTypes = {
    drivers:PropTypes.object.isRequired,
    deldriver: PropTypes.func.isRequired

};

export default connect(null, { deldriver })(Driveritem);