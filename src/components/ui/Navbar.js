import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { inicioSalirForo } from '../../accions/authActions';
import { abrirModelPregunta, cargarTematicas } from '../../accions/foroActions';
import { abrirModal } from '../../accions/uiActions';
import '../foro/css.css'
export const Navbar = () => {

    const dispatch = useDispatch();
    const {tematicas} = useSelector(state => state.foro)
    useEffect(() => {
        dispatch((cargarTematicas()))
    }, [dispatch])
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
                    
                    <button className="btn btn-primary" onClick={handleOnClickPregunta}> Hacer una pregunta</button>
                    
                </div>
                {
                    <div className="navbar-nav">
                        {tematicas.map(tema =>(
                            <a key={tema.id} className="btn btn-outline-primary margin-all" href={`/${tema.tematica}`}> {tema.tematica} </a>
                        ))}
                    </div>
                }
                <div className="navbar-nav ml-auto">

                    <button className=" btn btn-outline-danger" onClick={habdelonClickSalir} > Salir </button>
                    
                </div>
            </div>
        </nav>
    )
}
