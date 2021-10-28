import axios from "axios";
import { GET_TRIPS_TABLE } from "./type.js";
export const getTripstable = Pt_id => async dispatch=>{
    console.log(Pt_id);
    const res=await axios.get(`http://localhost:8080/cbs/tripbooking/findbyid/1`);
   
    dispatch({
        type:GET_TRIPS_TABLE,
        payload:res.data
    });
};