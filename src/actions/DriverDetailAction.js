import axios from "axios";
import { DRIVER_DETAIL_AUTO,DRIVER_DETAIL_MINI,DRIVER_DETAIL_PRIME} from "./type.js";
export const getdriverAuto = pt_id => async dispatch => {
        console.log(pt_id);
      const res=  await axios.get(`http://localhost:8080/cbs/driver/viewDriver/1`);

        dispatch({
            type: DRIVER_DETAIL_AUTO,
            payload: res.data

        });
};

export const getdriverMini = pt_id => async dispatch => {
    console.log(pt_id);
  const res=  await axios.get(`http://localhost:8080/cbs/driver/viewDriver/2`);

    dispatch({
        type: DRIVER_DETAIL_MINI,
        payload: res.data

    });
};

export const getdriverPrime = pt_id => async dispatch => {
    console.log(pt_id);
  const res=  await axios.get(`http://localhost:8080/cbs/driver/viewDriver/3`);

    dispatch({
        type: DRIVER_DETAIL_PRIME,
        payload: res.data
    });
};