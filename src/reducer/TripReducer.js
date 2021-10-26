import { GET_TRIPS } from "../actions/type";

const initialState={
    trips:[],
    trip:{}
  
};
export default function(state=initialState,action){
    switch(action.type){
        case GET_TRIPS:
            return {
                ...state,
                trips:action.payload
            };
           
            default:
                return state;
    }
}