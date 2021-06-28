import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { iniciarCargaPreguntasTecnologia } from '../../../accions/foroActions';
import {Navbar} from '../../ui/Navbar';
import {Pregunta} from '../Pregunta';
import {ModalForo} from '../Modal';


export const TecnologiaScreen = () => {

    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(iniciarCargaPreguntasTecnologia());

    }, [dispatch])
    const {preguntas} = useSelector(state => state.foro);
    
    return (
        <div>
            <Navbar />
            
            <div className="container"> 

            <h1>Tecnologia</h1>
            {
                preguntas.map(pregu => (
                    <Pregunta 
                        key={pregu.id}
                        {...pregu}
                    />

                ))
            
            }
            
            <ModalForo />
            
            </div>
        </div>
    )
}