import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./style2.css";
import {connect} from "react-redux";
import PropTypes from 'prop-types';
import { getTripstable } from '../../actions/TripTableAction';
import ProfileHeader from "./ProfileHeader";

 class TripBookAuto extends Component {
  componentDidMount() {
    this.props.getTripstable();
  }

  render() {
    const {trip} = this.props.trip;

    return (
      <div>
      <ProfileHeader/>
      <br></br><br></br>
        <body>
          <div class="offset-xl-2 col-xl-8 col-lg-12 col-md-12 col-sm-12 col-12 padding1">
            <div class="card1 ">
              <div class="card1-header1 p-4">
                <a
                  class="pt-2 d-inline-block"
                  href="index.html"
                  data-abc="true"
                >
                  CBS
                </a>
                <div class="float-right">
                  <h3 class="mb-0">Invoice </h3>
                  Date: 29 oct,2021
                </div>
              </div>
              <div class="card1-body1 bg-white">
                <div class="row mb-4">
                  <div class="col-sm-6">
                    <h5 class="mb-3">Driver Detail</h5>
                    <h3 class="text1-dark1 mb-1">{trip.driver.name}</h3>
                    <div>Email: {trip.driver.email}</div>
                    <div>Phone: +91 {trip.driver.mobileNumber}</div>
                  </div>
                  <div class="col-sm-6 ">
                    <h5 class="mb-3">Customer Detail</h5>
                    <h3 class="text-dark1 mb-1">{trip.customer.name}</h3>
                    <div>Email: {trip.customer.email}</div>
                    <div>Phone: +91 {trip.customer.mobileNumber}</div>
                  </div>
                </div>
                <div class="table-responsive-sm">
                  <table class="table table-striped">
                    <thead>
                      <tr>
                        <th class="center">#</th>
                        <th>From Location</th>
                        <th>To Location</th>
                        <th>From Date</th>
                        <th>To Date</th>
                        <th class="right">Ride Bill</th>
                        <th class="right">Total</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td class="center">1</td>
                        <td class="left strong">{trip.fromLocation}</td>
                        <td class="left">{trip.toLocation}</td>
                        <td class="right">{trip.toDateTime}</td>
                        <td class="center">{trip.fromDateTime}</td>
                        <td class="right">{trip.bill}rs</td>
                        <td class="right">{trip.bill}rs</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <div class="row">
                  <div class="col-lg-4 col-sm-5"></div>
                  <div class="col-lg-4 col-sm-5 ml-auto">
                    <table class="table table-clear">
                      <tbody>
                        <tr>
                          <td class="left">
                            <strong class="text1-dark1">Total</strong>{" "}
                          </td>
                          <td class="right">
                            <strong class="text1-dark1">{trip.bill}rs</strong>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
              <div class="card1-footer1 bg-white">
                <p class="mb-0">Visite Again!!!!!!!!!</p>
              </div>
            </div>
          </div>
        </body>
      </div>
    );
  }
}
TripBookAuto.propTypes = {
  trip: PropTypes.object.isRequired,
  getTripstable: PropTypes.func.isRequired,
};
const mapStateToProps = (state) => ({
  trip: state.trip,
});

export default connect(mapStateToProps, { getTripstable })(TripBookAuto);
