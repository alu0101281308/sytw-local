import React, { useState } from 'react';
import NullImg from '../../images/subir-imagen.png';

const FormularioBaterias = () => {

    const [bateria, setBateria] = useState({
        //imagen
        marca: '',
        estado: '',
        voltaje: '',
        amperios: '',
        precio: ''
    })

    const { marca, estado, voltaje, amperios, precio } = bateria;


    const onChange = e => {
        setBateria({
            ...bateria,
            [e.target.name]: e.target.value
        })
    }

    const onSubmitNuevaBateria = ((e) => {
        e.preventDefault();

        // validaciones

        // Agregar o actualizar

        // limpiar campos
    });


    return (
        <div className="container rounded border border-dark mt-5 mb-5">
            <form onSubmit={onSubmitNuevaBateria}>
                <div className="">
                    <p>Imagen de la batería</p>
                    <img className="" src={NullImg} width="50" height="50" alt="Null Img" />
                </div>
                <hr />
                <div className="row">
                    <div className="col">
                        <div className="mt-2 mb-2">
                            <label htmlFor="select">Marca</label>
                            <select className="form-select" name="marca" onChange={onChange}>
                                <option value="Yuasa">Yuasa</option>
                                <option value="Bosh">Bosh</option>
                                <option value="Innpo">Innpo</option>
                                <option value="Norauto">Norauto</option>
                                <option value="Exide">Exide</option>
                                <option value="Tudor">Tudor</option>
                                <option value="otra">otra marca</option>
                            </select>
                        </div>
                    </div>
                    <div className="col">
                        <div className="mt-2 mb-2">
                            <label htmlFor="select">Estado de la batería</label>
                            <select className="form-select" name="estado" onChange={onChange}>
                                <option value="nuevo">Nueva</option>
                                <option value="buen-estado">Buen estado</option>
                                <option value="condiciones-aceptables">Condiciones aceptables</option>
                            </select>
                        </div>
                    </div>
                </div>

                <div className="row">
                    <div className="col">
                        <div className="mt-2 mb-2">
                            <label htmlFor="voltaje">Voltaje</label>
                            <input
                                type="text"
                                className="form-control"
                                id="voltaje"
                                name="voltaje"
                                placeholder="Voltaje de la batería"
                                value={voltaje}
                                onChange={onChange}
                            />
                        </div>
                    </div>
                    <div className="col">
                        <div className="mt-2 mb-2">
                            <label htmlFor="amperios">Amperios</label>
                            <input
                                type="text"
                                className="form-control"
                                id="amperios"
                                name="amperios"
                                placeholder="Amperios de la batería"
                                value={amperios}
                                onChange={onChange}
                            />
                        </div>
                    </div>
                    <div className="col">
                        <div className="mt-2 mb-2">
                            <label htmlFor="precio">Precio</label>
                            <input
                                type="text"
                                className="form-control"
                                id="precio"
                                name="precio"
                                placeholder="Precio de la batería"
                                value={precio}
                                onChange={onChange}
                            />
                        </div>
                    </div>
                </div>

                <div className="mt-2 mb-2">
                    <input
                        type="submit"
                        className="btn btn-primary btn-block"
                        value="Publicar Batería"
                    //value={tareaseleccionada ? 'Editar tarea' : 'Agregar tarea'}
                    />
                </div>
            </form>
        </div>
    );
}

export default FormularioBaterias;