import React, { useContext, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import TiendaContext from '../../context/tienda/tiendaContext';
import AuthContext from '../../context/autenticacion/authContext';

const BateriaCompra = () => {

    const { id } = useParams();
    const navigate = useNavigate();

    const tiendaContext = useContext(TiendaContext);
    const { mensaje, bateriacompra, cargando, obtenerBateriaID, comprarBateria } = tiendaContext;

    const authContext = useContext(AuthContext);
    const { autenticado } = authContext;

    useEffect(() => {
        obtenerBateriaID(id);

    }, [cargando]);

    const onClickComprar = (() => {
        if (autenticado) {
            comprarBateria(id)
            //navigate('/');
        } else {
            navigate('/login');
        }
    });

    if (!bateriacompra) return <div className='container'><h2>{mensaje.msg}</h2></div>

    return (
        <>

            <div className="container-venta">
                <div className="row">
                    <div className="col">
                        <div className="imagen-venta">
                            <img className="mb-2 img-fluid" src={bateriacompra.img}  alt={'imagen bateria'} />
                        </div>
                    </div>
                    <div className="col">
                        <div className="titulo-venta">
                            <h2>Bateria {bateriacompra.marca}</h2>
                        </div>
                        <div className="precio-venta">
                            <p>Precio : {bateriacompra.precio} €</p>
                        </div>
                        <div className="descripcion-venta">
                            <h2 className='m-auto'>Descripción</h2>
                            <p>Estado : {bateriacompra.estado}</p>
                            <p>Voltaje : {bateriacompra.voltaje}</p>
                            <p>amperios : {bateriacompra.amperios}</p>
                        </div>
                        <div className="boton-venta">
                            <button className='btn btn-success btn-block mb-3' onClick={onClickComprar}> Comprar </button>
                        </div>
                    </div>
                </div>
            </div>


            {/* <div className="container border rounded border-dark mt-5 mb-5 d-grid">
                <div className='titulo-venta'>
                    <h2>Bateria {bateriacompra.marca}</h2>
                </div>
                <hr />
                <div className='imagen-venta'>
                    <img className="mb-2" src={bateriacompra.img} width="300" height="300" alt={'imagen bateria'} />
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
            </div> */}
        </>
    );
}

export default BateriaCompra;