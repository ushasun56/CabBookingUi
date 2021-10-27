import React, { Component } from 'react';
import ProfileHeader from './ProfileHeader';
import { Link } from "react-router-dom";


export default class DriverDetailAuto extends Component {
    render() {
        return (
            <div>
            <ProfileHeader/>
            <div class="jumbotron">
           
            <h1 class="display-4">Driver For Your Drive</h1>
            <p class="lead">Driver Information As Per <strong> Auto....</strong></p>
            <hr class="my-4"></hr>
            <p className="display-4 text-center"><h3 >Driver name</h3></p>
            <p className="display-4 text-center"><h3 >Licence number</h3></p>
            <p className="display-4 text-center"><h3 >Contact Number</h3></p>
            <Link to={"/finaltrip"}>
            <p className="display-4 text-center">
              <a class="btn btn-primary btn-lg" href="#" role="button">Confirm Your Trip </a>
            </p>
            </Link>
                              
                            
            </div>
            </div>
        )
    }
}
