import { DELETE_DRIVER, GET_DRIVER } from "../actions/type";

const initialState={
    drivers:[],
    driver:{}
  
};
export default function(state=initialState,action){
    switch(action.type){
        case GET_DRIVER:
            return {
                ...state,
                drivers:action.payload
            };

            case DELETE_DRIVER:
                return{
                    ...state
                    
                }
           
            default:
                return state;
    }
}