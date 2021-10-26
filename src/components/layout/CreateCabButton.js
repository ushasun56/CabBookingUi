import { Link } from "react-router-dom"



var CreateCabButton = () => {

    return (
       <div>
       &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;&nbsp;
        <Link to="/AllTrips" className="btn btn-lg btn-info">All Trips</Link>  &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
        <Link to="/CabWiseTrip" className="btn btn-lg btn-info">Cab Wise Trips</Link> &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
        <Link to="/AllCustomer" className="btn btn-lg btn-info">All Customer</Link> &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
    <Link to="/AllDriver" className="btn btn-lg btn-info">All Driver</Link> &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
    <Link to="/AllCab" className="btn btn-lg btn-info">All Cab</Link>
        </div>


    );

}

export default CreateCabButton;