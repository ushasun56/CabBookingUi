import React, { Component } from 'react';
import { connect } from 'react-redux';

import PropTypes from "prop-types";
import { getTripscabwise } from '../../actions/CabWiseTripAction';
import CabTripitem from './CabTripitem';



 class CabWiseTrip extends Component {
    componentDidMount()
    {
        this.props.getTripscabwise();
        
    }
   render() {
       const {cabtrips} = this.props.cabtrips;
       return (
           <div className="projects">
               <div className="container">
                   <div className="row">
                       <div className="col-md-12">
                       <br />
                       <br />
                       <br />
                      
                         <h1 className="display-4 text-center"> All Cab Trip Details</h1>
                           <br />

                         
                          

                           <br />

                           <hr />
                          { cabtrips.map(cabtrip =>(
                              <CabTripitem key={cabtrip.id} cabtrip={cabtrip}/>
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
CabWiseTrip.propTypes = {
   cabtrips:PropTypes.object.isRequired,
   getTripscabwise:PropTypes.func.isRequired
};
const mapStateToProps = state => ({
cabtrips:state.cabtrips
});

export default connect(mapStateToProps, { getTripscabwise })(CabWiseTrip);
