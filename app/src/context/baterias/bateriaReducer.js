import {
    OBTENER_BATERIAS,
    AGREGAR_BATERIA,
    BATERIA_ACTUAL,
    ELIMINAR_BATERIA,
    EDITAR_BATERIA
} from "../../types";

export default (state, action) => {
    switch (action.type) {

        case OBTENER_BATERIAS:
            return {
                ...state,
                baterias: action.payload
            }
        case AGREGAR_BATERIA:
            return {
                ...state,
                baterias: [...state.baterias, action.payload],
            }

        case BATERIA_ACTUAL:
            return {
                ...state,
                bateriaactual: state.baterias.filter((bateria) => bateria.id === action.payload.id)
            }

        case ELIMINAR_BATERIA:
            return {
                ...state,
                baterias: state.baterias.filter((bateria) => bateria.id !== action.payload.id),
                bateriaactual: null
            }
        case EDITAR_BATERIA:
            return {
                ...state,
                baterias : state.baterias.filter((bateria) => bateria.id === action.payload.id ? action.payload : bateria),
                bateriaactual : null
            }
        default:
            return state;
    }
}