import { useContext } from "react";
import BateriaContext from "../../context/baterias/bateriaContext";
import Bateria from "./Bateria";

const ListadoBaterias = () => {

    const bateriaContext = useContext(BateriaContext);
    const {baterias, obtenerBaterias} = bateriaContext;

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