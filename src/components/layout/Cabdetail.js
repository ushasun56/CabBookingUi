import React, { Component } from 'react'

import {connect} from "react-redux";
import PropTypes from 'prop-types';
import { insertCabDetails } from '../../actions/ActionCreators';

class Cabdetail extends Component {

    constructor(props)
    {
        super(props);
        this.state={
            carType:"",
            perkmRate:""
        }
        this.onChange=this.onChange.bind(this);
        this.onSubmit=this.onSubmit.bind(this);
    };
   
    onChange(event)
    {
        console.log("onChange triggered..");
        // this.setState({projectName:event.target.value});
        this.setState({[event.target.name]:event.target.value});
    }

    onSubmit(event)
    {
        event.preventDefault();
        const cabDetails = {
            carType:this.state.carType,
            perkmRate:this.state.perkmRate
        };
        this.props.insertCabDetails(cabDetails,this.props.history);
        console.log(cabDetails);
        alert("Cab details have been added successfully...");
    }

    render() {
        return (
           
            <div>
            <div>
            <form onSubmit={this.onSubmit} id="register-form" name="register-form" method="post">
            <div class="jumbotron">
            <h1 class="display-4">Enter Cab Details </h1>
            <p class="lead"></p>
            <hr class="my-4"></hr>
            <div class="form-row">
                <div class="form-group col-md-5">
                <label for="inputCity">Per kilometer Rate</label>
                <input type="text" class="form-control" id="inputRate" name="perkmRate"
                value={this.state.perkmRate} onChange={this.onChange}/>
                </div>

                <div class="form-group col-md-5">
                <label for="inputCity">Car Type</label>
                <input type="text" class="form-control" id="inputRate" name="carType"
                value={this.state.carType} onChange={this.onChange}
                placeholder="Auto/Mini/Prime"/>
                </div>

            <p class="form-group col-md-2">
            <input type="submit" name="btnregister" id="btnregister" 
            tabindex="4" class="form-control btn btn-register" 
            value="Add Cab" style={{background:"lightblue"}} />

            </p>
            </div>
            </div>
            </form>   
            </div>
            </div> 
          
        )
    }
}

Cabdetail.propTypes = {
    insertCabDetails: PropTypes.func.isRequired,
    //errors: PropTypes.object.isRequired
};

export default connect(null, {insertCabDetails}) (Cabdetail);
