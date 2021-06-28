import {combineReducers} from 'redux';
import { authReducer } from './authReducer';
import { foroReducer } from './foroReducer';
import {uiReducer} from './uiReducer'


export const rootReducer = combineReducers({
    ui:uiReducer,
    auth: authReducer,
    foro: foroReducer
})