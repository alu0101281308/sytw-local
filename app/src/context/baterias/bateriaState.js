import React, { useReducer } from 'react';
import BateriaContext from './bateriaContext';
import BateriaReducer from './bateriaReducer';
import { v4 as uuid } from "uuid";

import {
    OBTENER_BATERIAS,
    AGREGAR_BATERIA,
    BATERIA_ACTUAL,
    ELIMINAR_BATERIA,
    EDITAR_BATERIA
} from "../../types";

const BateriaState = props => {

    const baterias = [
        { id: 1, marca: 'yuasa', estado: 'nuevo', voltaje: '0', amperios: '10000A', precio: '120' },
        { id: 2, marca: 'yuasa', estado: 'nuevo', voltaje: '123GO', amperios: '4A', precio: '120' },
        { id: 3, marca: 'yuasa', estado: 'nuevo', voltaje: '999999LGTB', amperios: 'INFINITE-AA', precio: '3 Almas' }
    ]

    const initialState = {
        baterias: [],
        bateriaactual: null
    }

    //Dispatch para ejecutar acciones
    const [state, dispatch] = useReducer(BateriaReducer, initialState)


    const obtenerBaterias = (() => {
        dispatch({
            type: OBTENER_BATERIAS,
            payload: baterias
        })
    })

    const agregarBateria = ((bateria) => {
        bateria.id = uuid();
        dispatch({
            type: AGREGAR_BATERIA,
            payload: bateria
        })
    })

    const bateriaActual = ((bateria)=>{
        dispatch({
            type: BATERIA_ACTUAL,
            payload: bateria
        })
    })

    const eliminarBateria = ((bateria)=>{
        dispatch({
            type: ELIMINAR_BATERIA,
            payload: bateria
        })
    })

    const editarBateria = ((bateria) => {
        dispatch({
            type: EDITAR_BATERIA
            payload: bateria
        })
    })


    return (
        <BateriaContext.Provider
            value={{
                baterias: state.baterias,
                bateriaactual: state.bateriaactual,
                obtenerBaterias,
                agregarBateria,
                bateriaActual,
                eliminarBateria
            }}
        >
            {props.children}
        </BateriaContext.Provider>
    )
}

export default BateriaState;