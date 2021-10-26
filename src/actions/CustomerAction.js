import axios from "axios";
import { GET_CUSTOMER } from "./type.js";
export const getCustomers=()=>async dispatch=>{
    const res=await axios.get("http://localhost:8081/cbs/customer/list");
   
    dispatch({
        type:GET_CUSTOMER,
        payload:res.data
    });
};