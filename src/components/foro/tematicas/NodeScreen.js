import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import {iniciarCargaPreguntasNode } from '../../../accions/foroActions';
import {Navbar} from '../../ui/Navbar';
import {Pregunta} from '../Pregunta';
import {ModalForo} from '../Modal';


export const NodeScreen = () => {

    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(iniciarCargaPreguntasNode());

    }, [dispatch])
    const {preguntas} = useSelector(state => state.foro);
    
    return (
        <div>
            <Navbar />
            
            <div className="container"> 

            <h1>Node</h1>
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