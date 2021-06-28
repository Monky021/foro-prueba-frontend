import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import {
    BrowserRouter as Router,
    Switch,
    Redirect
} from "react-router-dom";
import { startChecking } from '../accions/authActions';
import { LoginScreen } from '../components/auth/LoginScreen';
//import { ForoScreen } from '../components/foro/ForoScreen';
import { PublicRoute } from './PublicRoute';
import { PrivateRoute} from './PrivateRoute';

import { ForoScreen } from '../components/foro/ForoScreen';
import { CriptomonedasScreen } from '../components/foro/tematicas/CriptomonedasScreen';
import { DeportesScreen } from '../components/foro/tematicas/DeportesScreen';
import { FotografiaScreen } from '../components/foro/tematicas/FotografiaScreen';
import { NodeScreen } from '../components/foro/tematicas/NodeScreen';
import { ReactScreen } from '../components/foro/tematicas/ReactScreen';
import { TecnologiaScreen } from '../components/foro/tematicas/TecnologiaScreen';
import { RandomScreen } from '../components/foro/tematicas/RandomScreen';
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
                    
                    <PrivateRoute
                        
                        path="/Deportes"
                        component={DeportesScreen}
                        isAuthenticated={!!uid}

                    />
                    <PrivateRoute
                        exact
                        path="/Fotografia"
                        component={FotografiaScreen}
                        isAuthenticated={!!uid}

                    />
                    <PrivateRoute
                        exact
                        path="/Tecnología"
                        component={TecnologiaScreen}
                        isAuthenticated={!!uid}

                    />
                    <PrivateRoute
                        exact
                        path="/Criptomonedas"
                        component={CriptomonedasScreen}
                        isAuthenticated={!!uid}

                    />
                    <PrivateRoute
                        exact
                        path="/NodeJs"
                        component={NodeScreen}
                        isAuthenticated={!!uid}

                    />
                    <PrivateRoute
                        exact
                        path="/ReactJs"
                        component={ReactScreen}
                        isAuthenticated={!!uid}

                    />
                    <PrivateRoute
                        exact
                        path="/Random"
                        component={RandomScreen}
                        isAuthenticated={!!uid}

                    />

                    <Redirect to="/"/>
                </Switch>

            </div>
      
        </Router >
    )
}
