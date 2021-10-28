import { DRIVER_DETAIL_AUTO,DRIVER_DETAIL_MINI,DRIVER_DETAIL_PRIME} from "../actions/type";

const initialState={
    driverautos:[],
    driverauto:{}
  
};
export default function(state=initialState,action){
    switch(action.type){
        case DRIVER_DETAIL_AUTO:
            return {
                ...state,
                driverauto :action.payload
            };
            case DRIVER_DETAIL_MINI:
                return {
                    ...state,
                    driverauto :action.payload
                };
            case DRIVER_DETAIL_PRIME:
                return {
                    ...state,
                    driverauto :action.payload
                };
           
            default:
                return state;
    }
}