import axios from "axios";
import { GET_TRIPS } from "./type.js";
export const getTrips=()=>async dispatch=>{
    const res=await axios.get("http://localhost:8081/cbs/admin/getalltrips");
   
    dispatch({
        type:GET_TRIPS,
        payload:res.data
    });
};