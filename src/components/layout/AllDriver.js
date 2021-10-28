import React, { Component } from 'react'
import { connect } from 'react-redux';

import PropTypes from "prop-types";
import Driveritem from './Driveritem';
import { getDrivers } from '../../actions/DriverAction';
import Adminheader from '../CustomerPages/Adminheader';


class AllDriver extends Component {
    componentDidMount()
    {
        this.props.getDrivers();
        
    }
   render() {
       const {drivers} = this.props.drivers;
       return (
           <div className="projects">
           <Adminheader/>
               <div className="container">
                   <div className="row">
                       <div className="col-md-12">
                       <br />
                       <br />
                       <br />
                      
                         <h1 className="display-4 text-center"> All Drivers Details</h1>
                           <br />

                         
                           

                           <br />

                           <hr />
                          { drivers.map(driver =>(
                              <Driveritem key={driver.id} driver={driver}/>
                          )

                          )

                          }
                       </div>
                   </div>
               </div>
           </div>
       )
   }
}
AllDriver .propTypes = {
    drivers:PropTypes.object.isRequired,
    getDrivers:PropTypes.func.isRequired
};
const mapStateToProps = state => ({
    drivers:state.drivers
});

export default connect(mapStateToProps, { getDrivers })( AllDriver);
