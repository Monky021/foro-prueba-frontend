import { types } from "../types/types";

//Estado inicial del reducer
const initialState = {
    checking: true,
    
}
export const authReducer = (state= initialState, action) => {
    switch (action.type) {
        case types.authCheckingFinish:
            return {
                ...state,
                checking:false
            }
            
        case types.authLogin:
            return {
                ...state,
                ...action.payload,
                checking:false
            }

        case types.authlogout:
            return {
                checking: false
            }
           
            
    
        default:
            return state;
    }
}