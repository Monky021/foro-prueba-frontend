import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { iniciarCargaPreguntasDeporte } from '../../../accions/foroActions';
import {Navbar} from '../../ui/Navbar';
import {Pregunta} from '../Pregunta';
import {ModalForo} from '../Modal';


export const DeportesScreen = () => {

    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(iniciarCargaPreguntasDeporte());

    }, [dispatch])
    const {preguntas} = useSelector(state => state.foro);
    
    return (
        <div>
            <Navbar />
            
            <div className="container"> 

            <h1>Deportes</h1>
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
