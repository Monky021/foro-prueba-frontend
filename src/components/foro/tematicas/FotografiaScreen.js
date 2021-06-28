import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { iniciarCargaPreguntasFotografia } from '../../../accions/foroActions';
import {Navbar} from '../../ui/Navbar';
import {Pregunta} from '../Pregunta';
import {ModalForo} from '../Modal';


export const FotografiaScreen = () => {

    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(iniciarCargaPreguntasFotografia());

    }, [dispatch])
    const {preguntas} = useSelector(state => state.foro);
    
    return (
        <div>
            <Navbar />
            
            <div className="container"> 

            <h1>Fotografia</h1>
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