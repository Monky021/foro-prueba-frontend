
export const types = {

    authChecking: '[auth] Revisando el estado del inicio de sesion',
    authCheckingFinish: '[auth] Revision del estado del inicio de sesion finalizo',
    authStartLogin: '[auth] inicio del login',
    authLogin: '[auth] login',
    authStartRegistro: '[auth] inicio del Registro',
    authStartTokenRenew: '[auth] obtener nuevo token',
    authlogout: '[auth] salir de la app',

    preguntasCargar: '[preguntas] Cargar preguntas',
    PreguntasCargadas: '[preguntas] Poner las preguntas en el store',
    hacerPregunta: '[preguntas] postear preguntas' ,
    añadirNuevaPregunta: '[Preguntas] añade una nueva pregunta al store',
    preguntaActiva: '[pregunta] poner pregunta activa',
    limparPreguntaActiva: '[pregunta] limpiare la pregunta seleccionada',
    preguntaActualizada: '[pregunta] actualiza la pregunta',
    eliminarPregunta:'[pregunta] eliminar pregunta',

    idRespuesta:'[respuesta] poner el id de la respuesta en el store ',
    limpiarIdRespuesta: '[respuesta] limpiar el id de la respuesta',
    actualizarRespuesta: '[Respuesta] se actualiza la respuesta en el store',
    eliminarRespuesta: '[respuesta] eliminar la respuesta',
    esEliminarRespuesta: '[respuesta] seleccionar isEliminarRespuesta',
    limpiarEsEliminarRespuesta: '[respuesta] limpiar selecion eliminar la respuesta',

    modalAbierto: '[ui] el modal se abre',
    modalCerrado: '[ui] el modal se cierra',
    modalAbiertoPreguntas: '[ui] el modal se abre para hacer preguntas',
    modalCerradoPreguntas: '[ui] el modal se cierra y pone en false las preuntas',
    modalAbiertoEditarPregunta: '[ui] el modal se abre para editar pregunta',
    modalAbiertoEliminarPregunta: '[ui] el modal se abre para confirmar la eliminacion de la pregunta',
    modalCerradoEliminarPregunta: '[ui] cambia el estado de eliminar en el store'







}