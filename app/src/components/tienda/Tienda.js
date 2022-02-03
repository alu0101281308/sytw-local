import React, { useContext, useEffect } from 'react';
import BateriaVenta from './BateriaVenta';
import TiendaContext from '../../context/tienda/tiendaContext';


const Tienda = () => {

    const tiendaContext = useContext(TiendaContext);
    const { obtenerBateriasVenta } = tiendaContext;

    useEffect(() => {
        obtenerBateriasVenta();
    }, []);


    return (
        <>
            <div class="container">

                <BateriaVenta />
            </div>
        </>
    );
}

export default Tienda;