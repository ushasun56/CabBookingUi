import React, { Component } from 'react';
import ProfileHeader from './ProfileHeader';
import { Link } from 'react-router-dom';
import { getdriverPrime } from '../../actions/DriverDetailAction';
import PropTypes from "prop-types";
import { connect } from 'react-redux';

 class DriverDetailPrime extends Component {
    componentDidMount() {

        this.props.getdriverPrime();

      }
    render() {
      
        const { driverauto } = this.props.driverauto;
        return (
            <div>
            <div>
            <ProfileHeader/>
            <div class="jumbotron">
            <h1 class="display-4">Driver For Your Drive</h1>
            <p class="lead">Driver Information As Per Prime Driver....</p>
            <hr class="my-4"></hr>
            <p className="display-4 text-center"><h5>Driver Name:-{driverauto.name}</h5></p>
            <p className="display-4 text-center"><h5>Licence Number:-{driverauto.licenceNo}</h5></p>
            <p className="display-4 text-center"><h5>Mobile Number:-{driverauto.mobileNumber}</h5></p>
        
            <Link to={"/finaltripprime"}>
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
DriverDetailPrime.propTypes = {

    driverauto: PropTypes.object.isRequired,

    getdriverPrime: PropTypes.func.isRequired,

  };

  const mapStateToProps = (state) => ({

    driverauto: state.driverauto,

  });
 
export default connect(mapStateToProps, { getdriverPrime })(DriverDetailPrime);

