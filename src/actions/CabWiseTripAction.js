import axios from "axios";
import {  GET_TRIPCABWISE } from "./type.js";
export const getTripscabwise=()=>async dispatch=>{
    const res=await axios.get("http://localhost:8080/cbs/admin/gettripscabwise");
   
    dispatch({
        type:GET_TRIPCABWISE,
        payload:res.data
    });
};