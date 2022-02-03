import { 
    FORMULARIO_BATERIA,
    OBTENER_BATERIAS,
    AGREGAR_BATERIA,
    VALIDAR_FORMULARIO,
    BATERIA_ACTUAL,
    ELIMINAR_BATERIA,
} from "../../types";

export default (state, action) => {
    switch (action.type) {
        // case FORMULARIO_PROYECTO:
        //     return {
        //         ...state,
        //         formulario: true
        //     }
        case OBTENER_BATERIAS:
            return {
                ...state,
                baterias: action.payload
            }
        // case AGREGAR_PROYECTO:
        //     return {
        //         ...state,
        //         proyectos: [...state.proyectos, action.payload],
        //         formulario: false,
        //         errorformulario: false
        //     }
        // case VALIDAR_FORMULARIO:
        //     return {
        //         ...state,
        //         errorformulario: true
        //     }
        // case PROYECTO_ACTUAL:
        //     return {
        //         ...state,
        //         proyectoactual: state.proyectos.filter((proyecto) => proyecto.id === action.payload.id)
        //     }
        // case ELIMINAR_PROYECTO:
        //     return {
        //         ...state,
        //         proyectos: state.proyectos.filter((proyecto) => proyecto.id !== action.payload.id),
        //         proyectoactual: null
        //     }
        default:
            return state;
    }
}