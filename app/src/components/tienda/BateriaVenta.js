import React, { useContext } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import TiendaContext from '../../context/tienda/tiendaContext';

const BateriaVenta = () => {

    const navigate = useNavigate();
    const { id } = useParams();

    const tiendaContext = useContext(TiendaContext);
    const { bateriasventa } = tiendaContext;

    return (
        <>
            <div className="row">
                {bateriasventa.map(bateria => (

                    <div className="col-sm-3 mt-2 mb-2">
                        <div className="card">
                            <img className="card-img-top mx-auto" src="images/baterias/b1.webp" alt="Card image" />
                            <div className="card-body">
                                <h6 className="card-title">Bateria {bateria.marca} - {bateria.voltaje}V</h6>
                                <p className="card-text">{bateria.precio} €</p>
                                <button className="btn btn-outline-primary" onClick={() => navigate(`tienda/item/${bateria._id}`)}> Comprar </button>
                            </div>
                        </div>
                    </div>

                ))}
            </div>
        </>
    );
}

export default BateriaVenta;