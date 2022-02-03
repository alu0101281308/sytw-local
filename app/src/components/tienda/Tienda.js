import React, { useEffect } from 'react';
import BateriaVenta from './BateriaVenta';
import TiendaContext from '../../context/tienda/tiendaContext';


const Tienda = () => {  

    const tiendaContext = useContext(TiendaContext);
    const { obtenerBateriasVenta } = tiendaContext;

    useEffect(() => {
      
    }, []);
    

    return (
        <>
            <BateriaVenta />
        </>
    );
}
 
export default Tienda;