import React, { Component } from 'react';
import { connect } from 'react-redux';

import PropTypes from "prop-types";

import { getTrips } from '../../actions/TripActipn';
import Tripitem from './Tripitem';

import Customeritem from './Customeritem';
import { getCustomers } from '../../actions/CustomerAction';
import Adminheader from '../CustomerPages/Adminheader';

 class AllTrips extends Component {
       componentDidMount()
     {
         this.props.getTrips();
         
     }
     
    render() {
        const {trips} = this.props.trips;
      
        return (
            <div className="projects">
            <Adminheader/>
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                        <br />
                        <br />
                        <br />
                        
                          <h1 className="display-4 text-center"> All Trips Details</h1>
                            <br />

                          
                            

                            <br />

                            <hr />
                           { trips.map(trip =>(
                               <Tripitem key={trip.id} trip={trip}/>
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
AllTrips.propTypes = {
    trips:PropTypes.object.isRequired,
    getTrips:PropTypes.func.isRequired,
   
};
const mapStateToProps = state => ({
 trips:state.trips,
 
});

export default connect(mapStateToProps, { getTrips })(AllTrips);
