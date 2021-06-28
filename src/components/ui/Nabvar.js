import React from 'react'
import { useDispatch } from 'react-redux';
import { inicioSalirForo } from '../../accions/authActions';
import { abrirModelPregunta } from '../../accions/foroActions';
import { abrirModal } from '../../accions/uiActions';

export const Nabvar = () => {

    const dispatch = useDispatch();
    // abre el modal y crea la pregunta nueva
    const handleOnClickPregunta = () => {
        

        dispatch(abrirModal())
        dispatch(abrirModelPregunta())
    }
    const habdelonClickSalir = () => {
        dispatch(inicioSalirForo())
    }
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light ">
            <a className="navbar-brand" href="/">NuestroForo</a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                <div className="navbar-nav ">
                    
                    <button className="btn btn-outline-primary" onClick={handleOnClickPregunta}> Hacer una pregunta</button>
                    
                </div>
                <div className="navbar-nav ml-auto">

                    <button className=" btn btn-outline-danger" onClick={habdelonClickSalir} > Salir </button>
                    
                </div>
            </div>
        </nav>
    )
}
