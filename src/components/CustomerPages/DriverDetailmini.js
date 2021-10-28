import React, { Component } from 'react';
import ProfileHeader from './ProfileHeader';
import { Link } from 'react-router-dom';
import PropTypes from "prop-types";
import { connect } from 'react-redux';
import { getdriverMini } from '../../actions/DriverDetailAction';

 class DriverDetailmini extends Component {
    componentDidMount() {

        this.props.getdriverMini();

      }
    render() {
        
        const { driverauto } = this.props.driverauto;
        return (
            <div>
            <div>
            <ProfileHeader/>
            <div class="jumbotron">
            <h1 class="display-4">Driver For Your Drive</h1>
            <p class="lead">Driver Information As Per Mini Driver....</p>
            <hr class="my-4"></hr>
            <p className="display-4 text-center"><h5>Driver Name:-{driverauto.name}</h5></p>
            <p className="display-4 text-center"><h5>Licence Number:-{driverauto.licenceNo}</h5></p>
            <p className="display-4 text-center"><h5>Mobile Number:-{driverauto.mobileNumber}</h5></p>
           
            <Link to={"/finaltripmini"}>
            <p className="display-4 text-center">
              <a class="btn btn-primary btn-lg" href="#" role="button">Confirm Your Trip </a>
            </p>
            </Link>
            </div>
            </div>   
            </div>
        )
    }
}
DriverDetailmini.propTypes = {

    driverauto: PropTypes.object.isRequired,

    getdriverMini: PropTypes.func.isRequired,

  };

  const mapStateToProps = (state) => ({

    driverauto: state.driverauto,

  });

  

  export default connect(mapStateToProps, { getdriverMini })(DriverDetailmini);
