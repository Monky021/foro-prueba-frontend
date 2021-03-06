import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { iniciarCargaPreguntas } from '../../accions/foroActions';
import {Navbar} from '../ui/Navbar';
import {Pregunta} from './Pregunta';
import {ModalForo} from './Modal';

export const ForoScreen = () => {

    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(iniciarCargaPreguntas());

    }, [dispatch])

    const {preguntas} = useSelector(state => state.foro);
    
    return (
        <>
            <Navbar/>  
            <div className="container">
                <h1>Foro</h1>
            </div>
            {
                preguntas.map(pregu => (
                    <Pregunta 
                        key={pregu.id}
                        {...pregu}
                    />

                ))
            
            }
            
            <ModalForo />
        </>
    )
}
