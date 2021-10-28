import { combineReducers } from "redux";
import CabReducer from "./CabReducer.js";
import CabWiseReducer from "./CabWiseReducer.js";
import CustomerReducer from "./CustomerReducer.js";
import DriverDetailAutoReducer from "./DriverDetailAutoReducer.js";
import DriverReducer from "./DriverReducer.js";

import TripReducer from "./TripReducer.js";
import TripTable from "./TripTable.js";
export default combineReducers({
   trips:TripReducer,
   cabtrips:CabWiseReducer,
   customers:CustomerReducer,
   drivers:DriverReducer,
   cabs:CabReducer,
   driverauto:DriverDetailAutoReducer,
   trip:TripTable
   
});