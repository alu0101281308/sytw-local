import React from 'react';

const BateriaCompra = (bateria) => {
    return ( 
        <div className="container border border-radius border-dark">
            <div className='titulo-venta'>
                <h6>Bateria {bateria.marca}</h6>
            </div>
            <div className='imagen-venta'>

            </div>
            <div className="descripcion-venta">
                <p>Estado : {bateria.estado}</p>
                <p>Voltaje : {bateria.voltaje}</p>
                <p>amperios : {bateria.amperios}</p>
                <p>precio : {bateria.precio}</p>
            </div>
            <button className='btn btn-success'> Comprar </button>
        </div>
    );
}
 
export default BateriaCompra;