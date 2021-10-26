import React, { Component } from 'react'
import Footer from '../layout/Footer'
import Header from '../layout/Header'





export default class DriverWelcome extends Component {
    render() {
        return (
            <div>
            
            <Header/>
                
                <br/>
                <br/>
                <br/>
                <br/>
                
                <h1 style={{color: "red", textAlign:"center", fontFamily:"cursive" , textDecoration:"underline" }}>Welcome Driver</h1>

                &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;&nbsp; &nbsp; &nbsp; &nbsp; &nbsp;&nbsp; &nbsp; &nbsp; &nbsp; &nbsp;&nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                <img src="images/dwlc.png" width="500" />



          <Footer/>
            </div>
        )
    }
}
