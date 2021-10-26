import { GET_TRIPCABWISE } from "../actions/type";

const initialState={
    cabtrips:[],
    cabtrip:{}
  
};
export default function(state=initialState,action){
    switch(action.type){
        case GET_TRIPCABWISE:
            return {
                ...state,
                cabtrips:action.payload
            };
           
            default:
                return state;
    }
}