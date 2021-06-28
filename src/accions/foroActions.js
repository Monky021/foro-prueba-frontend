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

//accion para cargar las preguntas al store
const cargaPreguntas = (preguntas) => ({
    type: types.PreguntasCargadas,
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
export const hacerPreguntas = (pregunta, usuarioId) => {
    return async (dispatch) => {
        try {
            const resp = await fetchConToken('pregunta', { pregunta, usuarioId }, 'POST');
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