import { combineReducers } from "redux";
import CabReducer from "./CabReducer.js";
import CabWiseReducer from "./CabWiseReducer.js";
import CustomerReducer from "./CustomerReducer.js";
import DriverReducer from "./DriverReducer.js";

import TripReducer from "./TripReducer.js";
export default combineReducers({
   trips:TripReducer,
   cabtrips:CabWiseReducer,
   customers:CustomerReducer,
   drivers:DriverReducer,
   cabs:CabReducer
   
});