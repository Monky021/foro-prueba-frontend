import React from 'react'
import { useDispatch } from 'react-redux'
import { abrirModalEliminar, abrirModelPregunta, preguntaActiva } from '../../accions/foroActions';
import {Respuesta} from './Respuesta'
import { abrirModal } from '../../accions/uiActions';
import './css.css';

export const Pregunta = ({id, pregunta = '', respuestas=[]}) => {
    
    const dispatch = useDispatch();

    const handlerOnClickRespuesta = () => {
        dispatch(abrirModal())
        dispatch(preguntaActiva(id))

        
    }
    const handlerOnClickEditarPregunta = () => {

        dispatch(abrirModal())
        dispatch(abrirModelPregunta())
        dispatch(preguntaActiva(id))
        
    }
    const handlerOnClickEliminarPregunta = () => {
        dispatch(abrirModal())
        dispatch(abrirModalEliminar())
        dispatch(preguntaActiva(id))

    }
    

    return (
        <div className="container">
            <div className="card" >
                <div className="card-body">
                    <h5 className="card-title">{pregunta}</h5>
                    <h6 className="card-subtitle mb-2 text-muted">Respuestas</h6>
                    {
                        respuestas.map((resp) =>( 
                        
                            <Respuesta
                                key={resp.id}
                                {...resp}
                            />    
                        )
                            

                        
                            
                        )
                        }
                    {/* <a href="#" className="card-link">Another link</a> */}
                    
                    <button className="btn btn-primary margin-all" onClick={handlerOnClickRespuesta}> Responder </button>
                    <button className="btn btn-primary margin-all" onClick={handlerOnClickEditarPregunta}> Editar pregunta </button>
                    <button className="btn btn-outline-danger margin-all" onClick={handlerOnClickEliminarPregunta}> Eliminar pregunta </button>


                </div>
            </div>
        </div>
    )
}
