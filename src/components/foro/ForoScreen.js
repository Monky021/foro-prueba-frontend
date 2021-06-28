import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { iniciarCargaPreguntas } from '../../accions/foroActions';
import {Nabvar} from '../ui/Nabvar';
import {Pregunta} from './Pregunta';
import {ModalForo} from './Modal';

export const ForoScreen = () => {

    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(iniciarCargaPreguntas());

    }, [dispatch])

    const {preguntas} = useSelector(state => state.foro)
    
    return (
        <>
            <Nabvar/>  

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
