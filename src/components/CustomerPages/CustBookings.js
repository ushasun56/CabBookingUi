import React, { Component } from 'react'

import {connect} from "react-redux";
import PropTypes from 'prop-types';
import { getTripstable } from '../../actions/TripTableAction';


 class CustBookings extends Component 
{
  componentDidMount() {
    this.props.getTripstable();
  }

    render() {
      const {trip} = this.props.trip;

        const styleObj = {
            color: "#4FB5EE",
          };
        
        return (
            <div>
            <br></br><br></br><br></br>
            <h1 className="our_text">
            <span style={styleObj}> Your Trips</span>
          </h1>
            <table class="table table-hover">
            <thead>
              <tr>
                <th scope="col">#</th>
                <th scope="col">From Location</th>
                <th scope="col">To Location </th>
                <th scope="col">From Date</th>
                <th scope="col">To Date</th>
                <th scope="col">Distance in Km</th>
                <th scope="col">Bill</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row">1</th>
                <td>{trip.fromLocation}</td>
                <td>{trip.toLocation}</td>
                <td>{trip.fromDateTime}</td>
                <td>{trip.toDateTime}</td>
                <td>{trip.distanceInKm}</td>
                <td>{trip.bill}</td>
              </tr>
              </tbody>
            </table>
            </div>
        )
    }
}

CustBookings.propTypes = {
  trip: PropTypes.object.isRequired,
  getTripstable: PropTypes.func.isRequired,
};
const mapStateToProps = (state) => ({
  trip: state.trip,
});

export default connect(mapStateToProps, { getTripstable })(CustBookings);

