import { types } from "../types/types"



//Accion para abrir el modal
export const abrirModal = () => ({
    type: types.modalAbierto
})
//accion para cerrar el modal
export const cerrarModal = () => ({
    type: types.modalCerrado
})