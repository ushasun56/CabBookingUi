import { DELETE_CAB, GET_CAB } from "../actions/type";

const initialState={
    cabs:[],
    cab:{}
  
};
export default function(state=initialState,action){
    switch(action.type){
        case GET_CAB:
            return {
                ...state,
                cabs:action.payload
            };
            case DELETE_CAB:
                    return{
                        ...state
                        
                    }
            default:
                return state;
    }
}