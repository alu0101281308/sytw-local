import {
    TIENDA_BATERIAS,
} from "../../types";

export default (state, action) => {
    switch (action.type) {

        case TIENDA_BATERIAS:
            return {
                ...state,
                bateriasventa: action.payload
            }
            
        default:
            return state;
    }
}