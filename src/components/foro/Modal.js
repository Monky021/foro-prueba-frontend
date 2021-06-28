
import Modal from 'react-modal';

import { useForm } from '../../hooks/useForm';
import Swal from 'sweetalert2';
import { useDispatch, useSelector } from 'react-redux';
import { cerrarModal } from '../../accions/uiActions';
import { actualizarRespuesta, cerrarModelPregunta, eliminarRespuesta, hacerPreguntas, hacerRespuesta, iniciarActualizarPregunta, iniciarEliminarPregunta, limpiarEsEliminarRespuesta, limpiarIdRespuesta, limpiarModalEliminar, limpiarPreguntaActiva } from '../../accions/foroActions';
//import { Tematica } from './Tematica';
import './css.css';


const customStyles = {
    content: {
        top: '50%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        marginRight: '-50%',
        transform: 'translate(-50%, -50%)',
    },
};

Modal.setAppElement('#root');





export const ModalForo = () => {

    const dispatch = useDispatch();

    const { modalAbierto } = useSelector(state => state.ui);
    const {
        esPregunta,
        preguntaActiva,
        esEliminarPregunta,
        respuestaId,
        esEliminarRespuesta,
        tematicas
    } = useSelector(state => state.foro);
    const { uid } = useSelector(state => state.auth);


    const [form, handleInputChange, reset] = useForm({
        pregunta: '',
        respuesta: '',
        tematica:1,
    });

    const { pregunta, respuesta, tematica } = form;

    const handlerSubmit = (e) => {
        e.preventDefault();
        if (esPregunta) {
            if (pregunta === '') {
                return Swal.fire('Ups...', 'La pregunta es obligatoria', 'error')

            }
            if (!!preguntaActiva) {
                dispatch(iniciarActualizarPregunta(preguntaActiva, pregunta))
            } else {
                console.log(tematica);
                dispatch(hacerPreguntas(pregunta, uid, tematica));
                reset();
                dispatch(cerrarModal());
                dispatch(cerrarModelPregunta());

            }

        } else {
            if (respuesta === '') {

                return Swal.fire('Ups...', 'La respuesta es obligatoria', 'error')
            }
            if (!!respuestaId) {
                dispatch(actualizarRespuesta(respuesta, respuestaId, preguntaActiva))
            } else {


                dispatch(hacerRespuesta(respuesta, preguntaActiva));
            }
        }
        reset();
        dispatch(cerrarModal());
        dispatch(limpiarIdRespuesta())

    }



    const modalCerrado = () => {
        reset();
        dispatch(cerrarModal());
        dispatch(limpiarEsEliminarRespuesta())
        dispatch(cerrarModelPregunta());
        dispatch(limpiarPreguntaActiva());
        dispatch(limpiarModalEliminar());
        dispatch(limpiarIdRespuesta());
    }
    // const cancelarPosteo = () => {
    //     reset();
    //     dispatch(cerrarModal());
    //     dispatch(limpiarEsEliminarRespuesta())
    //     dispatch(cerrarModelPregunta());
    //     dispatch(limpiarPreguntaActiva());
    //     dispatch(limpiarModalEliminar());
    //     dispatch(limpiarIdRespuesta());
    // }
    const handlerConfirmarEliminacion = () => {
        if (esEliminarPregunta) {
            dispatch(iniciarEliminarPregunta());
            dispatch(cerrarModal());
            dispatch(limpiarModalEliminar());

        }
        if (esEliminarRespuesta) {
            dispatch(eliminarRespuesta(respuestaId));
            dispatch(cerrarModal());
            dispatch(limpiarEsEliminarRespuesta());


        }


    }
    return (
        <div>
            <Modal
                isOpen={modalAbierto}
                // onAfterOpen={afterOpenModal}
                onRequestClose={modalCerrado}
                style={customStyles}
                closeTimeoutMS={300}

            >
                {
                    esEliminarPregunta
                        ? (<div className="card">
                            <p className="card-text"> Seguro que quieres eliminar la pregunta?</p>
                            <button type="button" className="btn btn-danger" onClick={handlerConfirmarEliminacion}>Si</button>
                            <button type="button" className="btn btn-lightr" onClick={modalCerrado}>No</button>
                        </div>)
                        : esEliminarRespuesta
                            ? (<div className="card">
                                <p className="card-text"> Seguro que quieres eliminar la Respuesta?</p>
                                <button type="button" className="btn btn-danger" onClick={handlerConfirmarEliminacion}>Si</button>
                                <button type="button" className="btn btn-lightr" onClick={modalCerrado}>No</button>
                            </div>)
                            : (<>
                                {
                                    esPregunta
                                        ? (preguntaActiva !== null)
                                            ? <h1> Editar pregunta</h1>
                                            : <h1> Nueva Pregunta</h1>
                                        : (!!respuestaId)
                                            ? <h1> Editar respuesta</h1>
                                            : <h1> Nueva respuesta</h1>


                                }
                                <hr />
                                <form className="container" onSubmit={handlerSubmit}>
                                    {
                                        esPregunta &&
                                        (<div className="form-group">
                                            <label>Pregunta</label>
                                            <input
                                                type="text"
                                                className="form-control"
                                                placeholder="Escribir toda la pregunta"
                                                name="pregunta"
                                                value={pregunta}
                                                onChange={handleInputChange}
                                                autoComplete="off"

                                            />
                                            

                                            <label>Escojer tematica</label>
            
                                            <select 
                                                className="form-control" 
                                                onChange={handleInputChange}
                                                value={tematica}
                                                name='tematica'
                                            >
                                                {
                                                    tematicas.map(tema=>(
                                                        
                                                        <option key={tema.id} value={tema.id}  >{tema.tematica}</option>

                                                    ))
                                                }
                                                
                                            </select>



                                            


                                        </div>)

                                    }
                                    {
                                        esPregunta
                                            ? <hr />
                                            : (
                                                <div className="form-group">
                                                    <textarea
                                                        type="text"
                                                        className="form-control"
                                                        placeholder="Respuesta"
                                                        rows="5"
                                                        name="respuesta"
                                                        value={respuesta}
                                                        onChange={handleInputChange}
                                                    ></textarea>
                                                    <small id="emailHelp" className="form-text text-muted">Respuesta con sumo detalle</small>
                                                </div>

                                            )
                                    }
                                    <div className="d-flex justify-content-between">
                                        <button
                                            type="submit"
                                            className="btn btn-outline-primary btn-block"
                                        >
                                            Enviar
                                        </button>

                                        {/* <button
                                            
                                            className="btn btn-outline-primary "
                                            onClick={cancelarPosteo}
                                        >
                                        Cancelar
                                        </button> */}

                                    </div>
                                </form>

                            </>)
                }

            </Modal>
        </div>
    )
}
