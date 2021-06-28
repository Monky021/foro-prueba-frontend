import { types } from "../types/types";

const initialState = {
    modalAbierto: false
}

export const uiReducer = (state=initialState, action)=>{

    switch (action.type) {
        case types.modalAbierto:
            return {
                ...state,
                modalAbierto:true
            }

        case types.modalCerrado:
            return {
                ...state,
                modalAbierto:false
            }
        
            
    
        default:
            return state;
    }
}

