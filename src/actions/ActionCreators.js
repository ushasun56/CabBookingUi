import axios from "axios";
import {GET_ERRORS, GET_CUST_TRIPS,GET_DRIVERS, CREATE_CUST_PROFILE, UPDATE_CUST_PROFILE, GET_CUST_PROFILE, DELETE_CUST_PROFILE} from "./ActionTypes.js";

export const createCustProfile = (custProfile,history) => async dispatch => {
   
        const res = await axios.post(`http://localhost:8081/cbs/customer/save`,custProfile);
       // history.push("/dashboard");
    
        dispatch({
            type:GET_ERRORS,
            payload:res.data
        })
    
}

export const createDriverProfile = (driverProfile,history) => async dispatch => {
   
    const res = await axios.post(`http://localhost:8081/cbs/driver/insertDriver`,driverProfile);
   // history.push("/dashboard");

    dispatch({
        type:GET_ERRORS,
        payload:res.data
    })

}

export const insertCabDetails = (cabDetails,history) => async dispatch => {
   
    const res = await axios.post(`http://localhost:8081/cbs/cab/save`,cabDetails);
   // history.push("/dashboard");

    dispatch({
        type:GET_ERRORS,
        payload:res.data
    })

}

export const insertTrip = (trip,history) => async dispatch => {
   
    const res = await axios.post(`http://localhost:8081/cbs/tripbooking/registerbycustomer`,trip);
   // history.push("/dashboard");

    dispatch({
        type:GET_ERRORS,
        payload:res.data
    })

}

export const getCustProfile = (id,history) => async dispatch => {
    
    const res = await axios.get(`http://localhost:8081/cbs/customer/findbyid/${id}`);
    dispatch({
            type:GET_CUST_PROFILE,
            payload:res.data
        })
   
}


export const getCustTrips = (id,history) => async dispatch => {
    
    const res = await axios.get(`http://localhost:8081/cbs/tripbooking/viewtrips`);
    dispatch({
            type:GET_CUST_TRIPS,
            payload:res.data
        })
   
}

export const getDrivers = () => async dispatch => {
    
    const res = await axios.get(`http://localhost:8081/cbs/driver/listDriver`);
    dispatch({
            type:GET_DRIVERS,
            payload:res.data
        })
   
}


// export const updateProject = (id,history) => async dispatch => {
    
//     const res = await axios.get(`http://localhost:8081/api/project/get/${id}`);
//     dispatch({
//             type:UPDATE_PROJECT,
//             payload:res.data
//         });
   
// };

// export const deleteProject = id => async dispatch => {
    
//     await axios.delete(`http://localhost:8081/api/project/delete/${id}`);
//     dispatch({
//             type:DELETE_PROJECT,
//             payload:id
//         });
   
// };



