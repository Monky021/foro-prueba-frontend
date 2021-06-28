import React from 'react'
import {useDispatch} from 'react-redux';
import Swal from 'sweetalert2'
import { startLogin, startRegistro } from '../../accions/authActions';
import { useForm } from '../../hooks/useForm'
import './login.css'
export const LoginScreen = () => {

    //Estado incial del formulario de registro
    const initialFormRegistro = {
        nombre: '',
        password: '',
        password2:''
    }
    //estado inicial del formulario de login
    const initialFormLogin = {
        nombre: '',
        password: '',
        
    }

    const dispatch = useDispatch()

    const [formRegistro, handleRegistroInput] = useForm(initialFormRegistro);
    const [formLogin, handleLoginInput] = useForm(initialFormLogin);


    const { nombre, password, password2 } = formRegistro;
    const { nombre:nombreL, password:passwordL} = formLogin;

    //funcion para capturar los eventos del formulario de registro, se validan los datos y se despachan
    const handleSubmirRegistro = (e) => {
        e.preventDefault();

        
        if(nombre === ''){
            return Swal.fire('Error', 'El nickname es obligatorio', 'error')

        }
        if(nombre.trim().length <3){
            return Swal.fire('Error', 'El nickname debe tener mas de 2 caracteres', 'error')

        }
        if(password !== password2){
            return Swal.fire('Error', 'Las contraseñas deben de coincidir', 'error')
        }

        dispatch(startRegistro(nombre, password));
    }

    //funcion para capturar los eventos del formulario de login, se validan los datos y se despachan
    const handleSubmirLogin = (e) => {
        e.preventDefault();
        if(nombreL === '' ){
            return Swal.fire('Error', 'El nombre es obligatorio', 'error')

        }
        if(passwordL.trim().length === 0){
            return Swal.fire('Error', 'la contraseña es obligatoria', 'error')
        }

        dispatch(startLogin(nombreL, passwordL));
    }
    return (

        <div>
            <div className="container mt-60">

                <form onSubmit={handleSubmirRegistro}>
                    <div className="form-group">
                        <label >Registrar su Nickname</label>
                        <input type="text" className="form-control" name="nombre" value={nombre} onChange={handleRegistroInput} />
                        <small id="emailHelp" className="form-text text-muted">Su nickname debe ser unico en el foro para poder ingresar</small>
                    </div>
                    <div className="form-group">
                        <label htmlFor="exampleInputPassword1">Contraseña</label>
                        <input type="password" className="form-control" name="password" value={password} onChange={handleRegistroInput}  />
                        <small id="emailHelp" className="form-text text-muted">La contraseña debe ser minimo de 6 digitos</small>
                    </div>
                    <div className="form-group">
                        <label htmlFor="exampleInputPassword1">Confirmar contraseña</label>
                        <input type="password" className="form-control" name="password2" value={password2} onChange={handleRegistroInput} />
                    </div>

                    <button type="submit" className="btn btn-primary">Registrar</button>
                </form>
            </div>

            <hr />
            <div className="container mt-60">

                <form onSubmit={handleSubmirLogin}>
                    <div className="form-group">
                        <label >Nickname</label>
                        <input type="text" className="form-control" name="nombre" value={nombreL} onChange={handleLoginInput} />
                        <small id="emailHelp" className="form-text text-muted">Su nickname debe ser unico en el foro para poder ingresar</small>
                    </div>
                    <div className="form-group">
                        <label htmlFor="exampleInputPassword1">Contraseña</label>
                        <input type="password" className="form-control" name="password" value={passwordL} onChange={handleLoginInput}  />
                        <small id="emailHelp" className="form-text text-muted">La contraseña debe ser minimo de 6 digitos</small>
                    </div>
                    

                    <button type="submit" className="btn btn-primary">Entrar al foro</button>
                </form>
            </div>



        </div>
    )
}
