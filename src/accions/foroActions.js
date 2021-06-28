import Swal from "sweetalert2";
import { fetchConToken } from "../helpers/fetch"
import { types } from "../types/types";

//Accion para hacer la peticion al backend de las preguntas
export const iniciarCargaPreguntas = () => {

    return async (dispatch) => {
        try {
            //se valida el token y se hace el get al endpoint para obtener las preguntas
            const resp = await fetchConToken('pregunta');
            const body = await resp.json();
            const { preguntas } = body;
            
            //si la respuesta es true se hace una carga de las preguntas al store
            if (resp.ok) {
                dispatch(cargaPreguntas(preguntas))
            }
        } catch (error) {
            console.log(error);
        }

    }
}

//Accion para hacer la peticion al backen de las preguntas con tematica de deporte
export const iniciarCargaPreguntasDeporte = () => {

    return async (dispatch) => {
        try {
            //se valida el token y se hace el get al endpoint para obtener las preguntas
            const resp = await fetchConToken('pregunta?tematica=1');
            const body = await resp.json();
            const { preguntas:Deporte } = body;
            
            //si la respuesta es true se hace una carga de las preguntas al store
            if (resp.ok) {
                dispatch(cargaPreguntasDeporte(Deporte))
            }
        } catch (error) {
            console.log(error);
        }

    }
}
//Accion para hacer la peticion al backen de las preguntas con tematica de deporte
export const iniciarCargaPreguntasFotografia = () => {

    return async (dispatch) => {
        try {
            //se valida el token y se hace el get al endpoint para obtener las preguntas
            const resp = await fetchConToken('pregunta?tematica=2');
            const body = await resp.json();
            const { preguntas } = body;
            
            //si la respuesta es true se hace una carga de las preguntas al store
            if (resp.ok) {
                dispatch(cargaPreguntasFotografia(preguntas))
            }
        } catch (error) {
            console.log(error);
        }

    }
}
//Accion para hacer la peticion al backen de las preguntas con tematica de deporte
export const iniciarCargaPreguntasTecnologia = () => {

    return async (dispatch) => {
        try {
            //se valida el token y se hace el get al endpoint para obtener las preguntas
            const resp = await fetchConToken('pregunta?tematica=3');
            const body = await resp.json();
            const { preguntas } = body;
            
            //si la respuesta es true se hace una carga de las preguntas al store
            if (resp.ok) {
                dispatch(cargaPreguntasTecnologia(preguntas))
            }
        } catch (error) {
            console.log(error);
        }

    }
}
//Accion para hacer la peticion al backen de las preguntas con tematica de deporte
export const iniciarCargaPreguntasCriptomoneda = () => {

    return async (dispatch) => {
        try {
            //se valida el token y se hace el get al endpoint para obtener las preguntas
            const resp = await fetchConToken('pregunta?tematica=4');
            const body = await resp.json();
            const { preguntas } = body;
            
            //si la respuesta es true se hace una carga de las preguntas al store
            if (resp.ok) {
                dispatch(cargaPreguntasCriptomoneda(preguntas))
            }
        } catch (error) {
            console.log(error);
        }

    }
}
//Accion para hacer la peticion al backen de las preguntas con tematica de deporte
export const iniciarCargaPreguntasNode = () => {

    return async (dispatch) => {
        try {
            //se valida el token y se hace el get al endpoint para obtener las preguntas
            const resp = await fetchConToken('pregunta?tematica=5');
            const body = await resp.json();
            const { preguntas } = body;
            
            //si la respuesta es true se hace una carga de las preguntas al store
            if (resp.ok) {
                dispatch(cargaPreguntasNode(preguntas))
            }
        } catch (error) {
            console.log(error);
        }

    }
}
//Accion para hacer la peticion al backen de las preguntas con tematica de deporte
export const iniciarCargaPreguntasReact = () => {

    return async (dispatch) => {
        try {
            //se valida el token y se hace el get al endpoint para obtener las preguntas
            const resp = await fetchConToken('pregunta?tematica=6');
            const body = await resp.json();
            const { preguntas } = body;
            
            //si la respuesta es true se hace una carga de las preguntas al store
            if (resp.ok) {
                dispatch(cargaPreguntasReact(preguntas))
            }
        } catch (error) {
            console.log(error);
        }

    }
}
//Accion para hacer la peticion al backen de las preguntas con tematica de deporte
export const iniciarCargaPreguntasRandom = () => {

    return async (dispatch) => {
        try {
            //se valida el token y se hace el get al endpoint para obtener las preguntas
            const resp = await fetchConToken('pregunta?tematica=9');
            const body = await resp.json();
            const { preguntas } = body;
            
            //si la respuesta es true se hace una carga de las preguntas al store
            if (resp.ok) {
                dispatch(cargaPreguntasRandom(preguntas))
            }
        } catch (error) {
            console.log(error);
        }

    }
}
//accion para cargar las preguntas al store
const cargaPreguntas = (preguntas) => ({
    type: types.PreguntasCargadas,
    payload: preguntas
})
const cargaPreguntasDeporte = (preguntas) => ({
    type: types.PreguntasCargadasDeportes,
    payload: preguntas
})
const cargaPreguntasFotografia = (preguntas) => ({
    type: types.PreguntasCargadasFotografia,
    payload: preguntas
})
const cargaPreguntasTecnologia = (preguntas) => ({
    type: types.PreguntasCargadasTecnologia,
    payload: preguntas
})
const cargaPreguntasCriptomoneda = (preguntas) => ({
    type: types.PreguntasCargadasCriptomoneda,
    payload: preguntas
})
const cargaPreguntasNode = (preguntas) => ({
    type: types.PreguntasCargadasNode,
    payload: preguntas
})
const cargaPreguntasReact = (preguntas) => ({
    type: types.PreguntasCargadasReact,
    payload: preguntas
})
const cargaPreguntasRandom = (preguntas) => ({
    type: types.PreguntasCargadasRandom,
    payload: preguntas
})

export const abrirModelPregunta = () => ({ type: types.modalAbiertoPreguntas })
export const cerrarModelPregunta = () => ({ type: types.modalCerradoPreguntas })


//Añade la nueva pregunta al store
const añadirPRegunta = (pregunta) => ({
    type: types.añadirNuevaPregunta,
    payload: pregunta
})

//accion para crear las preguntas
export const hacerPreguntas = (pregunta, usuarioId, tematicaId) => {
    return async (dispatch) => {
        try {
            const resp = await fetchConToken('pregunta', { pregunta, usuarioId, tematicaId }, 'POST');
            const body = await resp.json();
            const { pregunta: pregun } = body;
            
            if (resp.ok) {
                dispatch(añadirPRegunta(pregun))
                Swal.fire('Listo', 'La pregunta se creo satisfactoriamente', 'success')
            }
        } catch (error) {
            console.log(error);
        }

    }
}


// Selecciona el id de la pregunta en el store
export const preguntaActiva = (preguntaId) => ({
    type: types.preguntaActiva,
    payload: preguntaId
})
//limpia el id de la pregunta de la store
export const limpiarPreguntaActiva = () => ({type: types.limparPreguntaActiva})



//Actualizar pregunta
const preguntaActualizada = (pregunta) =>({
    type: types.preguntaActualizada,
    payload:pregunta
}) 


export const iniciarActualizarPregunta = (id, pregunta) => {
    return async(dispatch)=> {

        try {

            const resp = await fetchConToken(`pregunta/${id}`, {pregunta}, 'PUT')
            const body = await resp.json();
            
            if (resp.ok) {
                dispatch(preguntaActualizada(body));
                Swal.fire('Listo', 'La pregunta se actualizo satisfactoriamente', 'success')

                
            }
        } catch (error) {
            console.log(error);
        }
    }
}

export const abrirModalEditarPegunta = () =>({
    type:types.modalAbiertoEditarPregunta
})


//Eliminar pregunta

export const abrirModalEliminar = () => ({
    type: types.modalAbiertoEliminarPregunta
})

export const limpiarModalEliminar = () => ({
    type: types.modalCerradoEliminarPregunta
})

export const iniciarEliminarPregunta = () => {
    return async(dispatch, getState)=> {
        const id = getState().foro.preguntaActiva;
        try {
            const resp = await fetchConToken(`pregunta/${id}`, {} ,'DELETE');
            
            const {msg} = resp.json();
            if(resp.ok){
                dispatch(eliminarPregunta())
                Swal.fire('Listo', msg, 'success');
            }
        } catch (error) {

            console.log(error);
        }
    }
}

const eliminarPregunta = () => ({
    type: types.eliminarPregunta
})






//Crear respuesta

export const hacerRespuesta = (respuesta, preguntaId) => {

    return async(dispatch)=> {
        try {
            const resp = await fetchConToken('respuesta', {respuesta, preguntaId}, 'POST');
            
            if(resp.ok){
                //cargar preguntas
                const resp2 = await fetchConToken('pregunta');
                const body2 = await resp2.json();
                const { preguntas } = body2;
                dispatch(cargaPreguntas(preguntas))
                Swal.fire('Listo', 'La respuesta se creo satisfactoriamente', 'success');
            }
        } catch (error) {
            console.log(error);
        }
    }
}
//Seleccionar el id de la respuesta en el store
export const idRespuesta = (id) => ({
    type: types.idRespuesta,
    payload: id
})
//limpiar el id de la respuesta del store
export const limpiarIdRespuesta = () => ({
    type: types.limpiarIdRespuesta
})


//Actualizar respuesta 

 export const actualizarRespuesta = (respuesta, idRes, idPre) => {
     return async(dispatch)=> {
         try {
             const resp = await fetchConToken(`respuesta/${idRes}`, {respuesta, idPre}, 'PUT');
             
             if(resp.ok){
                const resp2 = await fetchConToken('pregunta');
                const body2 = await resp2.json();
                const { preguntas } = body2;
                dispatch(cargaPreguntas(preguntas))
                Swal.fire('Listo', 'La respuesta se actualizo satisfactoriamente', 'success');

            }
         } catch (error) {
             
         }
     }
 }


//selecionar esEliminar respuesta
export const esEliminarRespuesta = ()=> ({
    type:types.esEliminarRespuesta
})
export const limpiarEsEliminarRespuesta = ()=> ({
    type:types.limpiarEsEliminarRespuesta
})

//Eliminar respuesta de la base de datos
export const eliminarRespuesta = (id) =>{

    return async(dispatch) => {
        
        try {
            const resp = await fetchConToken(`respuesta/${id}`, {}, 'DELETE');
            const {msg} = await resp.json();
            if (resp.ok) {
                const resp2 = await fetchConToken('pregunta');
                const body2 = await resp2.json();
                const { preguntas } = body2;
                dispatch(cargaPreguntas(preguntas))
                Swal.fire('Listo', msg, 'success');
            }
        } catch (error) {
            console.log(error);
        }
    }
}




//Cargar tematicas 
export const cargarTematicas = () => {
    return async (dispatch)=> {

        const resp = await fetchConToken('tematica');
        const body = await resp.json();
        console.log(body);
        if (resp.ok) {
            dispatch(cargarTematicasStore(body));
        }

    }
}
const cargarTematicasStore = (tematicas) => ({
    type: types.cargarTematicasStore,
    payload: tematicas
})