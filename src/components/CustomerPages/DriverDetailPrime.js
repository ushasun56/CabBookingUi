import React, { Component } from 'react';
import ProfileHeader from './ProfileHeader';
import { Link } from 'react-router-dom';

export default class DriverDetailPrime extends Component {
    render() {
        return (
            <div>
            <div>
            <ProfileHeader/>
            <div class="jumbotron">
            <h1 class="display-4">Driver For Your Drive</h1>
            <p class="lead">Driver Information As Per Prime Driver....</p>
            <hr class="my-4"></hr>
            <p className="display-4 text-center"><h5>Driver name</h5></p>
            <p className="display-4 text-center"><h5>Licence number</h5></p>
            <p className="display-4 text-center"><h5>Contact Number</h5></p>
            <Link to={"/finaltrip"}>
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
