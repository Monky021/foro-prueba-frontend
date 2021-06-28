import { types } from "../types/types";

const initialState = {
    preguntas: [],
    tematicas: [],
    preguntasDe:[],
    preguntasFoto:[],
    preguntasTec:[],
    preguntasCrip:[],
    preguntasNode:[],
    preguntasReact:[],
    preguntasRandom:[],
    preguntaActiva: null,
    respuestaId:null,
    esPregunta:false,
    esRespuesta: false,
    esEditPregunta: false,
    esEditRespuesta:false,
    esEliminarPregunta:false,
    EsEliminarRespuesta:false,
}

export const foroReducer = (state= initialState, action) => {
    switch (action.type) {
        case types.PreguntasCargadas:
            return {
                ...state,
                preguntas: [...action.payload]
            }

        case types.PreguntasCargadasDeportes:
            return{
                ...state,
                preguntasDe:[...action.payload]
            }

        case types.PreguntasCargadasFotografia:
            return{
                ...state,
                preguntasFoto:[...action.payload]
            }
            
        case types.modalAbiertoPreguntas:
            return {
                ...state,
                esPregunta:true
            }
        case types.modalCerradoPreguntas:
            return {
                ...state,
                esPregunta:false
            }
        case types.añadirNuevaPregunta:
            return{
                ...state,
                preguntas:[
                    ...state.preguntas,
                    action.payload
                ]
            }
        case types.preguntaActiva:
            return {
                ...state,
                preguntaActiva: action.payload
            }

        case types.limparPreguntaActiva:
            return {
                ...state,
                preguntaActiva: null
            }
        case types.modalAbiertoEditarPregunta:
            return {
                ...state
            }
        case types.modalAbiertoEliminarPregunta:
            return{
                ...state,
                esEliminarPregunta: true
            }
        case types.modalCerradoEliminarPregunta:
            return {
                ...state,
                esEliminarPregunta: false
            }
        case types.preguntaActualizada:
            return {
                ...state,
                preguntas: state.preguntas.map(
                    pre => (pre.id===action.payload.id) ? action.payload: pre
                )
            }
        case types.eliminarPregunta:
            return {
                ...state,
                preguntas: state.preguntas.filter(
                    pre => (pre.id!==state.preguntaActiva)
                ),
                preguntaActiva:null
            }
        case types.idRespuesta:
            return {
                ...state,
                respuestaId: action.payload
            }
        case types.limpiarIdRespuesta:
            return {
                ...state,
                respuestaId: null
            }
        case types.esEliminarRespuesta:
            return{
                ...state,
                esEliminarRespuesta:true
            }
        case types.limpiarEsEliminarRespuesta:
            return {
                ...state,
                esEliminarRespuesta:false
            }
        case types.cargarTematicasStore:
            return {
                ...state,
                tematicas: [...action.payload]
            }
        
        default:
            return state;
    }
}
