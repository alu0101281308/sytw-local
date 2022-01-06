import React, { useState, useContext, useEffect } from 'react';
import AlertaContext from '../../context/alertas/alertaContext';
import { Link } from 'react-router-dom';

const NuevaCuenta = () => {

    // extraer los valores del context
    const alertaContext = useContext(AlertaContext);
    const { alerta, mostrarAlerta } = alertaContext;

    const [usuario, guardarUsuario] = useState({
        nombre: '',
        apellido: '',
        email: '',
        password: '',
        confirmar: ''
    });

    const onChange = e => {
        guardarUsuario({
            ...usuario,
            [e.target.name]: e.target.value
        })
    }

    const { nombre, apellido, email, password, confirmar } = usuario;

    const onSubmit = e => {
        e.preventDefault();

        // Validar que no haya campos vacios
        if( nombre.trim() === '' || 
            email.trim() === '' || 
            password.trim() === '' || 
            confirmar.trim() === '' ) {
                mostrarAlerta('Todos los campos son obligatorios', 'alerta-error');
                return;
            }

        // Password minimo de 6 caracteres
        if(password.length < 6) {
            mostrarAlerta('El password debe ser de al menos 6 caracteres', 'alerta-error');
            return;
        }

        // Los 2 passwords son iguales
        if(password !== confirmar) {
            mostrarAlerta('Los passwords no son iguales', 'alerta-error');
            return;
        }

        // Pasarlo al action
        // registrarUsuario({
        //     nombre, 
        //     email, 
        //     password
        // });
    }

    return (
        <div className="container rounded border border-dark mt-5 mb-5">
            { alerta ? ( <div className={`alerta ${alerta.categoria}`}> {alerta.msg} </div> )  : null }

            
                <h1>Crear cuenta</h1>

                <form
                 onSubmit={onSubmit}
                >
                    <div class="mb-3 mt-3">
                        <label htmlFor="name" class="form-label">Nombre:</label>
                        <input 
                            type="text" 
                            class="form-control" 
                            id="nombre" 
                            name="nombre"
                            placeholder="Escribe tu nombre" 
                            value={nombre}
                            onChange={onChange}
                        /> 
                    </div>

                    <div class="mb-3 mt-3">
                        <label htmlFor="secondname" class="form-label">Apellido:</label>
                        <input 
                            type="text" 
                            class="form-control" 
                            id="apellido" 
                            name="apellido"
                            placeholder="Escribe tu apellido" 
                            value={apellido}
                            onChange={onChange}
                        /> 
                    </div>

                    <div class="mb-3 mt-3">
                        <label htmlFor="email" class="form-label">Email:</label>
                        <input 
                            type="email" 
                            class="form-control" 
                            id="email" 
                            name="email"
                            placeholder="Enter email" 
                            value={email}
                            onChange={onChange}
                        /> 
                    </div>

                    <div class="mb-3 mt-3">
                        <label htmlFor="password" class="form-label">Password:</label>
                        <input 
                            type="password" 
                            class="form-control" 
                            id="password" 
                            name="password"
                            placeholder="Enter password" 
                            value={password}
                            onChange={onChange}
                        /> 
                    </div>

                    
                    <div class="mb-3 mt-3">
                        <label htmlFor="confirmpassword" class="form-label">Repite el Password:</label>
                        <input 
                            type="password" 
                            class="form-control" 
                            id="confirmar" 
                            name="confirmar"
                            placeholder="Repite el password" 
                            value={confirmar}
                            onChange={onChange}
                        /> 
                    </div>

                    <div className="campo-form d-grid">
                        <input type="submit" className="btn btn-primary btn-block" value="Crear cuenta" />
                    </div>
                </form>

                <Link to={'/login'} className="enlace-cuenta">
                    Regresar al login
                </Link>
            
        </div>
    );
}

export default NuevaCuenta;