import React, { useContext, useEffect } from 'react';
import BateriaContext from "../../context/baterias/bateriaContext";
import AuthContext from '../../context/autenticacion/authContext';
import Bateria from "./Bateria";

const ListadoBaterias = () => {

    const bateriaContext = useContext(BateriaContext);
    const {baterias, obtenerBaterias} = bateriaContext;

    const authContext = useContext(AuthContext);
    const { usuario } = authContext

    useEffect(() => {
        obtenerBaterias(usuario);
    }, [] );
    
    if (baterias.length === 0) return <p>No tienes baterías en venta.</p>;

    return ( 
        <ul className="">
            {baterias.map( bateria => (
                <Bateria key={bateria.id} bateria={bateria} />
            ))}
        </ul>
    );
}
 
export default ListadoBaterias;