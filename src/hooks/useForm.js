import { useState } from "react"

//Custom hook para capturar los datos del formulario
export const useForm = (initialState= {}) => {

    const [form, setForm] = useState(initialState)

    const reset = () => {
        setForm(initialState);
    }

    const handleInputChange = ({target}) => {
        setForm({
            ...form,
            [target.name]: target.value
        })
    } 
    return [form, handleInputChange, reset]


}