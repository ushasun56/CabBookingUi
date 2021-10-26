import { GET_CUSTOMER } from "../actions/type";

const initialState={
    customers:[],
    customer:{}
  
};
export default function(state=initialState,action){
    switch(action.type){
        case GET_CUSTOMER:
            return {
                ...state,
                customers:action.payload
            };
           
            default:
                return state;
    }
}