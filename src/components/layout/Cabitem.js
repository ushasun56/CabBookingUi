import React, { Component } from 'react';
import { delcabs } from '../../actions/CabAction';
import PropTypes from "prop-types";
import { connect } from "react-redux";
class Cabitem extends Component {
    ondeleteClick(pt_id) {

        console.log(pt_id);

        this.props.delcabs(pt_id);

       

    }
   
      
    render() {
        const {cab} = this.props;
        
        return (

            <div className="container">
                <div className="card card-body bg-light mb-3" >
                    <div className="row" style={{ background: "#C5CAE9" }}>
                        <div className="col-2">
                            <span className="mx-auto">CBS</span>
                        </div>
                        <div className="col-lg-6 col-md-4 col-8" >
                           <h1>Cab Id :-{cab.cabid}</h1>
                           <hr/>
                           <h3>Cab Type:-{cab.carType}</h3>
                            
                           <h3>Per Km rate:-{cab.perkmRate}</h3>
                           
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
                                <i className="fa fa-minus-circle pr-1"onClick={this.ondeleteClick.bind(this, cab.cabid)}>Delete Cab</i>
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
Cabitem.propTypes = {
    cabs:PropTypes.object.isRequired,
    delcabs: PropTypes.func.isRequired

};

export default connect(null, { delcabs })(Cabitem);
