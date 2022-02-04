import React, { useContext } from 'react';
import BateriaContext from '../../context/baterias/bateriaContext';
import NullImg from '../../images/subir-imagen.png';


const Bateria = ({ bateria }) => {

    const bateriaContext = useContext(BateriaContext);
    const { obtenerBaterias, bateriaActual, eliminarBateria } = bateriaContext;


    const onClickEliminar = (() => {
        eliminarBateria(bateria);
        obtenerBaterias();
    })

    return (
        <div className="container">

            <li className='mb-5 mt-5 baterias'>
                <img className="mb-2" src={bateria.img} width="100" height="100" alt={'imagen bateria'} />
                <p>{bateria.marca}</p>
                <p>{bateria.estado}</p>
                <p>{bateria.voltaje}</p>
                <p>{bateria.amperios}</p>
                <p>{bateria.precio} €</p>
                <div className="acciones">
                    <button
                        type="button"
                        className="btn btn-primary"
                        onClick={() => bateriaActual(bateria)}
                    >
                        Editar
                    </button>
                    <button
                        type="button"
                        className="btn btn-danger"
                        onClick={onClickEliminar}
                    >
                        Eliminar
                    </button>
                </div>
            </li>
        </div>
    );
}

export default Bateria;