import React, { useContext, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import TiendaContext from '../../context/tienda/tiendaContext';
import AuthContext from '../../context/autenticacion/authContext';

const BateriaCompra = () => {

    const {id} = useParams();
    const navigate = useNavigate();

    const tiendaContext = useContext(TiendaContext);
    const { bateriacompra, cargando, obtenerBateriaID, comprarBateria } = tiendaContext;

    const authContext = useContext(AuthContext);
    const { autenticado } = authContext;

    useEffect(() => {
        obtenerBateriaID(id);
        
    }, [cargando]);

    const onClickComprar = (() => {
        if(autenticado) {
            comprarBateria(id)
            navigate('/');
        } else {
            navigate('/login');
        }
    });
    
    if(!bateriacompra) return <div className='container'><h2>Hubo un error</h2></div>

    return ( 
        <div className="container border rounded border-dark mt-5 mb-5 d-grid">
            <div className='titulo-venta'>
                <h2>Bateria {bateriacompra.marca}</h2>
            </div>
            <hr />
            <div className='imagen-venta'>
                <h2>Image</h2>
            </div>
            <hr />
            <h2 className='m-auto'>Descripción</h2>
            
            <div className="descripcion-venta">
                <p>Estado : {bateriacompra.estado}</p>
                <p>Voltaje : {bateriacompra.voltaje}</p>
                <p>amperios : {bateriacompra.amperios}</p>
            </div>
            <div className="venta-precio">
                <p>Precio : {bateriacompra.precio} €</p>
            </div>
            <button className='btn btn-success btn-block mb-3' onClick={onClickComprar}> Comprar </button>
        </div>
    );
}
 
export default BateriaCompra;