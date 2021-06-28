import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import {
    BrowserRouter as Router,
    Switch,
    Redirect
} from "react-router-dom";
import { startChecking } from '../accions/authActions';
import { LoginScreen } from '../components/auth/LoginScreen';
import { ForoScreen } from '../components/foro/ForoScreen';
import { PublicRoute } from './PublicRoute';
import { PrivateRoute} from './PrivateRoute';

export const AppRouter = () => {


    const dispatch = useDispatch();
    const {checking, uid} = useSelector(state => state.auth);
    
    //una vez cargue la pagina se hace este efecto secundario de iniciar el chequeo
    useEffect(() => {
        dispatch(startChecking());
        
    }, [dispatch]);



    //Si es true, es por que el usuario aun no esta verificado, si es false le dejara ver lo que el usuario desea
    if(checking){
        return (<h5>Espere....</h5>);
    }


    
    return (
        <Router>
            <div>
                <Switch>
                    
                    <PublicRoute 
                        exact 
                        path="/login" 
                        component={LoginScreen}
                        isAuthenticated={!!uid}    
                    />
                    <PrivateRoute 
                        exact 
                        path="/" 
                        component={ForoScreen}
                        isAuthenticated={!!uid}    

                    />

                    <Redirect to="/"/>
                </Switch>

            </div>
      
        </Router >
    )
}
