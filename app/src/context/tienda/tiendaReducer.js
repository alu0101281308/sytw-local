import {
    COMPRA_BATERIA,
    TIENDA_BATERIAS,
    TIENDA_COMPRA
} from "../../types";

export default (state, action) => {
    switch (action.type) {

        case TIENDA_BATERIAS:
            return {
                ...state,
                bateriasventa: action.payload,
                bateriacompra: null,
                cargando: false
            }
        case TIENDA_COMPRA:
            return {
                ...state,
                bateriacompra: action.payload,
                cargando: false
            }
        case COMPRA_BATERIA:
            return {
                ...state,
                bateriacompra: null,
                cargando: false
            }
        default:
            return state;
    }
}