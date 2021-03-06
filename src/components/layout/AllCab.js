import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import PropTypes from "prop-types";
import Cabitem from './Cabitem';
import { getCabs } from '../../actions/CabAction';
import Adminheader from '../CustomerPages/Adminheader';


 class AllCab extends Component {
    componentDidMount()
    {
        this.props.getCabs();
        
    }
   render() {
       const {cabs} = this.props.cabs;
       return (
           <div className="projects">
              <Adminheader/>
               <div className="container">
                   <div className="row">
                       <div className="col-md-12">
                       <br />
                       <br />
                       <br />
                      
                         <h1 className="display-4 text-center"> All Cab Details</h1>
                           <br />

                         
                           

                           <br />
                           <Link to="/cabinsert" className="btn btn-lg btn-info">Insert Cab</Link>
                           <hr />
                          { cabs.map(cab =>(
                              <Cabitem key={cab.id} cab={cab}/>
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
AllCab .propTypes = {
    cabs:PropTypes.object.isRequired,
   getCabs:PropTypes.func.isRequired
};
const mapStateToProps = state => ({
    cabs:state.cabs
});

export default connect(mapStateToProps, { getCabs })( AllCab );
