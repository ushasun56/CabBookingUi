import { GET_TRIPS_TABLE} from "../actions/type";

const initialState={
    trips:[],
    trip:{}
  
};
export default function(state=initialState,action){
    switch(action.type){
        case GET_TRIPS_TABLE:
            return {
                ...state,
                trip:action.payload
            };
           
            default:
                return state;
    }
}