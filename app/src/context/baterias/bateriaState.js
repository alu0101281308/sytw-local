import React, { useReducer } from 'react';
import BateriaContext from './bateriaContext';
import BateriaReducer from './bateriaReducer';
import clienteAxios from '../../config/axios';
//import { v4 as uuid } from "uuid";

import {
    OBTENER_BATERIAS,
    AGREGAR_BATERIA,
    BATERIA_ACTUAL,
    ELIMINAR_BATERIA,
    EDITAR_BATERIA
} from "../../types";

const BateriaState = props => {


    const initialState = {
        baterias: [],
        bateriaactual: null,
    }

    //Dispatch para ejecutar acciones
    const [state, dispatch] = useReducer(BateriaReducer, initialState)


    const obtenerBaterias = (async () => {
        try {
            const resultado = await clienteAxios.get('/api/baterias');  
            dispatch({
                type: OBTENER_BATERIAS,
                payload: resultado.data.baterias
            })
        } catch (error) {
            console.log(error);
        }
    })

    const agregarBateria = (async (bateria) => {
        try {
            const resultado = await clienteAxios.post('/api/baterias', bateria);
            dispatch({
                type: AGREGAR_BATERIA,
                payload: bateria
            })
        } catch (error) {
            console.log(error)
        }
    })

    const bateriaActual = ((bateria)=>{
        dispatch({
            type: BATERIA_ACTUAL,
            payload: bateria
        })
    })

    const eliminarBateria = (async (bateria)=>{
        console.log(bateria);
        try {
            const resultado = await clienteAxios.delete(`/api/baterias/${bateria._id}`);
            console.log(resultado.data);
            dispatch({
                type: ELIMINAR_BATERIA,
                payload: bateria
            })
        } catch (error) {
            // const alerta = {
            //     msg: 'Hubo un error',
            //     categoria: 'alerta-error'
            // }
            
            // dispatch({
            //     type: PROYECTO_ERROR,
            //     payload: alerta
            // })
            console.log(error)
        }

    })

    const editarBateria = ((bateria) => {
        dispatch({
            type: EDITAR_BATERIA,
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
                eliminarBateria,
                editarBateria
            }}
        >
            {props.children}
        </BateriaContext.Provider>
    )
}

export default BateriaState;