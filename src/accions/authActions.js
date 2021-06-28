
import Swal from 'sweetalert2';
import {fetchConToken, fetchSinToken} from '../helpers/fetch';
import {types} from '../types/types'


// Se hace el posteo para poder iniciar sesion con el nombre y la contraseña
export const startLogin = (nombre,password) => {

    return async(dispatch) => {
        // se hace la peticion sin token para iniciar sesion en el backend 
        const resp = await fetchSinToken('auth/login', {nombre, password}, 'POST');

        const body = await resp.json();
        //si la respuesta es true guarda el token y hace el logueo manteniendo la data en el store de redux
        if(resp.ok){
            const {data, token} = body;
            const {dataValues} = data;
            localStorage.setItem('token', token);
            dispatch(login({uid: dataValues.id, nombre: dataValues.nombre}))
            Swal.fire('Bienvenido','','success')
        }else {
            Swal.fire('Error', body.msg, 'error')
        }
    }
}

//accion que guarda el usuario en el store
const login = (usuario) => ({
    type: types.authLogin,
    payload: usuario
})


//Accion que hace el posteo para realizar el registro del nuevo usuario
export const startRegistro = (nombre, password) => {
    return async(dispatch)=> {
        //se hace la peticion sin token para el registro
        const resp = await fetchSinToken('usuario', {nombre, password}, 'POST');
        const body = await resp.json();
        
        //si la respuesta es true saldra una alerta de confirmado pero no iniciara sesion
        if(resp.ok){
            return Swal.fire('Buen trabajo', 'Tu cuenta fue creada, solo te falta iniciar sesion', 'success')
        }else{
            return Swal.fire('Ups...', body.msg, 'error');
        }
    }
}

//Accion que incia el chequeo del usuario
export const startChecking = () =>{
    return async(dispatch)=>{
        //se hace la peticion con el token para verificar si es un usuario valido y regresa un nuevo token
        const resp = await fetchConToken('auth/renew' );
        const body = await resp.json();
        
        //si la respuesta es true guarda el token nuevo en el localStorage y mantiene la sesion activa
        if(resp.ok){
            
            localStorage.setItem('token', body.token);
            dispatch(login({
                uid: body.uid,
                nombre: body.nombre
            }));

        }else {
            dispatch(checkingFinish());
        }
    }
}


//finaliza el chequeo del usuario
const checkingFinish = () => ({
    type: types.authCheckingFinish
})


//Realizar el logout
export const inicioSalirForo = () => {
    return (dispatch)=> {
        localStorage.clear();

        dispatch(logout())
        Swal.fire(':)', 'Esperamos volverlo a ver pronto', 'info')
    }
}

//logout
const logout = () =>({type:types.authlogout})