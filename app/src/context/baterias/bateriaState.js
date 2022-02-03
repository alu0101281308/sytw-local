import React, { useReducer } from 'react';
import BateriaContext from './bateriaContext';
import BateriaReducer from './bateriaReducer';
import {v4 as uuid} from "uuid"; 

import { 
    FORMULARIO_BATERIA,
    OBTENER_BATERIAS,
    AGREGAR_BATERIA,
    VALIDAR_FORMULARIO,
    BATERIA_ACTUAL,
    ELIMINAR_BATERIA,
} from "../../types";

const BateriaState = props => {

    const baterias = [
        {id: 1, marca: 'Chiquipum', estado: 'nuevo', voltaje: '0', amperios: '10000A', precio: '120'},
        {id: 2, marca: 'EstoTePrende', estado: 'nuevo', voltaje: '123GO', amperios: '4A', precio: '120'},
        {id: 3, marca: 'DeQueArrancaArranca', estado: 'nuevo', voltaje: '999999LGTB', amperios: 'INFINITE-AA', precio: '3 Almas'}
    ]

    const initialState = {
        baterias: baterias,
        formulario: false,
        errorformulario: false,
        bateriaactual: null
    }

    //Dispatch para ejecutar acciones
    const [state, dispatch] = useReducer(BateriaReducer, initialState)

    // //Serie de funciones para el CRUD
    // const mostrarFormulario = () => {
    //     dispatch({
    //         type: FORMULARIO_PROYECTO
    //     })
    // }

     const obtenerBaterias = (() => {
         dispatch({
             type: OBTENER_BATERIAS,
             payload: baterias
         })
     })

    // const agregarProyecto = ((proyecto) => {
    //     proyecto.id = uuid();
    //     dispatch({
    //         type: AGREGAR_PROYECTO,
    //         payload: proyecto
    //     })
    // })

    // const mostrarError = (()=>{
    //     dispatch({
    //         type: VALIDAR_FORMULARIO
    //     })
    // })

    // const proyectoActual = ((proyecto)=>{
    //     dispatch({
    //         type: PROYECTO_ACTUAL,
    //         payload: proyecto
    //     })
    // })

    // const eliminarProyecto = ((proyecto)=>{
    //     dispatch({
    //         type: ELIMINAR_PROYECTO,
    //         payload: proyecto
    //     })
    // })


    return (
        <BateriaContext.Provider
            value={{
                baterias: state.baterias,
                // formulario: state.formulario,
                // errorformulario: state.errorformulario,
                // proyectoactual: state.proyectoactual,
                // mostrarFormulario,
                obtenerBaterias,
                // agregarProyecto,
                // mostrarError,
                // proyectoActual,
                // eliminarProyecto
            }}
        >
            {props.children}
        </BateriaContext.Provider>
    )
}

export default BateriaState;