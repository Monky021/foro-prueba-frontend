import React from 'react'
import { useDispatch } from 'react-redux';
import { esEliminarRespuesta, idRespuesta } from '../../accions/foroActions';
import { abrirModal } from '../../accions/uiActions';
import './css.css';

export const Respuesta = ({id, respuesta}) => {

    const dispatch = useDispatch();

    const handlerOnClickEditarRespuesta = () => {
        dispatch(abrirModal())

        dispatch(idRespuesta(id))
        
    }
    const handlerOnClickEliminarRespuesta = () => {
        dispatch(idRespuesta(id))
        dispatch(esEliminarRespuesta())
        dispatch(abrirModal())
    }

    return (
        <div className="card" >
            <div className="card-body">
                
                <p className="card-text">{respuesta}</p>
                <button className="btn btn-primary margin-all"  onClick={handlerOnClickEditarRespuesta}> Editar respuesta </button>
                <button className="btn btn-outline-danger margin-all"  onClick={handlerOnClickEliminarRespuesta}> Eliminar respuesta </button>

                
            </div>
        </div>
    )
}
