import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { iniciarCargaPreguntasCriptomoneda} from '../../../accions/foroActions';
import {Navbar} from '../../ui/Navbar';
import {Pregunta} from '../Pregunta';
import {ModalForo} from '../Modal';


export const CriptomonedasScreen = () => {

    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(iniciarCargaPreguntasCriptomoneda());

    }, [dispatch])
    const {preguntas} = useSelector(state => state.foro);
    
    return (
        <div>
            <Navbar />
            
            <div className="container"> 

            <h1>Criptomonedas</h1>
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