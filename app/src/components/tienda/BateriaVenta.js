import React, { useContext } from 'react';
import TiendaContext from '../../context/tienda/tiendaContext';

const BateriaVenta = () => {

    const tiendaContext = useContext(TiendaContext);
    const { bateriasventa } = tiendaContext;

    return (
        <>
            {bateriasventa.map(bateria => {

                <div class="row">
                    <div class="col-sm-3">
                        <div class="card">
                            <img class="card-img-top mx-auto" src="images/baterias/b1.webp" class="w-100" alt="Card image" />
                            <div class="card-body">
                                <h6 class="card-title">Batería Tudor TB740</h6>
                                <p class="card-text">50 €</p>
                                <a href="articulo.html" class="btn btn-outline-primary">Comprar</a>
                            </div>
                        </div>
                    </div>
                </div>
            })}


        </>
    );
}

export default BateriaVenta;