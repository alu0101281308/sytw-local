import React, { useReducer } from 'react';
import TiendaContex from './tiendaContext';
import TiendaReducer from './tiendaReducer';
import clienteAxios from '../../config/axios';
//import { v4 as uuid } from "uuid";

import {
    TIENDA_BATERIAS
} from "../../types";

const TiendaState = props => {


    const initialState = {
        bateriasventa : [],
    }

    //Dispatch para ejecutar acciones
    const [state, dispatch] = useReducer(TiendaReducer, initialState)


    const obtenerBateriasVenta = (async () => {
        try {
            const resultado = await clienteAxios.get('/api/Tienda');  
            dispatch({
                type: TIENDA_BATERIAS,
                payload: resultado.data.baterias
            })
        } catch (error) {
            console.log(error);
        }
    })


    return (
        <TiendaContex.Provider
            value={{
                bateriasventa: state.bateriasventa,
                obtenerBateriasVenta
            }}
        >
            {props.children}
        </TiendaContex.Provider>
    )
}

export default TiendaState;