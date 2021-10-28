import axios from "axios";
import { GET_TRIPS_TABLE } from "./type.js";
export const getTripstable = Pt_id => async dispatch=>{
    console.log(Pt_id);
    const res=await axios.get(`http://localhost:8081/cbs/tripbooking/findbyid/1`);
   
    dispatch({
        type:GET_TRIPS_TABLE,
        payload:res.data
    });
};
export const getTripstablemini = Pt_id => async dispatch=>{
    console.log(Pt_id);
    const res=await axios.get(`http://localhost:8081/cbs/tripbooking/findbyid/2`);
   
    dispatch({
        type:GET_TRIPS_TABLE,
        payload:res.data
    });
};
export const getTripstableprime = Pt_id => async dispatch=>{
    console.log(Pt_id);
    const res=await axios.get(`http://localhost:8081/cbs/tripbooking/findbyid/3`);
   
    dispatch({
        type:GET_TRIPS_TABLE,
        payload:res.data
    });
};