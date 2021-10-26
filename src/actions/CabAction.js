import axios from "axios";
import { DELETE_CAB, GET_CAB } from "./type.js";
export const getCabs=()=>async dispatch=>{
    const res=await axios.get("http://localhost:8081/cbs/cab/list");
   
    dispatch({
        type:GET_CAB,
        payload:res.data
    });
};

export const delcabs = pt_id => async dispatch => {

    if (

        window.confirm(`you are deleting project task ${pt_id}, this action be undone`)

    ) {

        await axios.delete(`http://localhost:8081/cbs/cab/delete/${pt_id}`);

        dispatch({

            type: DELETE_CAB,

            payload: pt_id

        });

    }

};