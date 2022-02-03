import React, { useContext } from 'react';
import BateriaContext from '../../context/baterias/bateriaContext';
import NullImg from '../../images/subir-imagen.png';


const Bateria = ({ bateria }) => {

    const bateriaContext = useContext(BateriaContext);
    const { bateriaActual } = bateriaContext;

    const onClickBateria = (() => {
        bateriaActual(bateria);
    })

    return (
        <div className="container">

            <li className='mb-5 mt-5 baterias'>
                <img className="" src={NullImg} width="50" height="50" alt="Null Img" />
                <p>{bateria.marca}</p>
                <p>{bateria.estado}</p>
                <p>{bateria.voltaje}</p>
                <p>{bateria.amperios}</p>
                <p>{bateria.precio} €</p>
                <div className="acciones">
                    <button
                        type="button"
                        className="btn btn-primary"

                    >
                        Editar
                    </button>
                    <button
                        type="button"
                        className="btn btn-danger"

                    >
                        Eliminar
                    </button>
                </div>
            </li>
        </div>
    );
}

export default Bateria;