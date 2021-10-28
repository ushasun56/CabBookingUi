import React, { Component } from "react";
import ProfileHeader from "./ProfileHeader";
import { Link } from "react-router-dom";
import { connect } from 'react-redux';
import PropTypes from "prop-types";
import { getdriverAuto } from "../../actions/DriverDetailAction";

class DriverDetailAuto extends Component {
  componentDidMount() {
    this.props.getdriverAuto();
  }
  render() {
     const { driverauto } = this.props.driverauto;
     console.log(driverauto);
    return (
      <div>
        <ProfileHeader />
        <div class="jumbotron">
          <h1 class="display-4">Driver For Your Drive</h1>
          <p class="lead">
            Driver Information As Per <strong> Auto....</strong>
          </p>
          <hr class="my-4"></hr>
          <p className="display-4 text-center">
            <h3>Driver Name:-{driverauto.name}</h3>
          </p>
          <p className="display-4 text-center">
            <h3>Licence Number:-{driverauto.licenceNo}</h3>
          </p>
          <p className="display-4 text-center">
            <h3>Mobile Number:-{driverauto.mobileNumber}</h3>
          </p>
          <Link to={"/finaltrip"}>
            <p className="display-4 text-center">
              <a class="btn btn-primary btn-lg" href="#" role="button">
                Confirm Your Trip{" "}
              </a>
            </p>
          </Link>
        </div>
      </div>
    );
  }
}

DriverDetailAuto.propTypes = {
  driverauto: PropTypes.object.isRequired,
  getdriverAuto: PropTypes.func.isRequired,
};
const mapStateToProps = (state) => ({
  driverauto: state.driverauto,
});

export default connect(mapStateToProps, { getdriverAuto })(DriverDetailAuto);
