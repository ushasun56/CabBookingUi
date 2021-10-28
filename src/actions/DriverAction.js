import axios from "axios";
import { DELETE_DRIVER, GET_DRIVER } from "./type.js";
export const getDrivers=()=>async dispatch=>{
    const res=await axios.get("http://localhost:8080/cbs/driver/listDriver");
   
    dispatch({
        type:GET_DRIVER,
        payload:res.data
    });
};

export const deldriver = pt_id => async dispatch => {

    if (

        window.confirm(`you are deleting project task ${pt_id}, this action be undone`)

    ) {

        await axios.delete(`http://localhost:8081/cbs/driver/delete/${pt_id}`);

        dispatch({

            type: DELETE_DRIVER,

            payload: pt_id

        });

    }

};