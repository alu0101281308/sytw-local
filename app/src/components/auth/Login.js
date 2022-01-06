import React, { useState, useContext, useEffect } from 'react';
import { Link } from 'react-router-dom';

const Login = () => {

    const [usuario, guardarUsuario] = useState({
        email: '',
        password: ''
    });

    const onChange = e => {
        guardarUsuario({
            ...usuario,
            [e.target.name]: e.target.value
        })
    }

    const { email, password } = usuario;

    const onSubmit = e => {
        e.preventDefault();

        // Validar que no haya campos vacios
        // if( nombre.trim() === '' || 
        //     email.trim() === '' || 
        //     password.trim() === '' || 
        //     confirmar.trim() === '' ) {
        //         mostrarAlerta('Todos los campos son obligatorios', 'alerta-error');
        //         return;
        //     }

        // Password minimo de 6 caracteres
        // if(password.length < 6) {
        //     mostrarAlerta('El password debe ser de al menos 6 caracteres', 'alerta-error');
        //     return;
        // }

        // Los 2 passwords son iguales
        // if(password !== confirmar) {
        //     mostrarAlerta('Los passwords no son iguales', 'alerta-error');
        //     return;
        // }

        // Pasarlo al action
        // registrarUsuario({
        //     nombre, 
        //     email, 
        //     password
        // });
    }

    return (
        <div className="container rounded border border-dark mt-5 mb-5">
            {/* { alerta ? ( <div className={`alerta ${alerta.categoria}`}> {alerta.msg} </div> )  : null } */}

            
                <h1>Iniciar Sesión</h1>

                <form
                 onSubmit={onSubmit}
                >
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

                    <div className="campo-form d-grid">
                        <input type="submit" className="btn btn-primary btn-block" value="Iniciar Sesión" />
                    </div>
                </form>

                <Link to={'/nueva-cuenta'} className="enlace-cuenta">
                    Obtener Cuenta
                </Link>
            
        </div>
    );
}

export default Login;