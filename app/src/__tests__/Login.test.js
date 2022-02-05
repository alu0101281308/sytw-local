import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Login from '../components/auth/Login';
import AlertaState from '../context/alertas/alertaState';
import AuthState from '../context/autenticacion/authState';



import '@testing-library/jest-dom/extend-expect';
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'

test('<Login /> Cargando formulario y haciendo testing.', () => {

    const wrapper = render(
        <AuthState>
            <AlertaState>
                <BrowserRouter>
                    <Login />
                </BrowserRouter>
            </AlertaState>
        </AuthState>
    );

    const boton_submit = screen.getByTestId('botonSubmit');
    expect( screen.getByTestId('titulo').textContent).toBe('Iniciar Sesión');
    expect( screen.getByTestId('email').tagName).toBe('INPUT');
    expect( screen.getByTestId('password').tagName).toBe('INPUT');
    expect( boton_submit.tagName).toBe('INPUT'); 

    
});

test('<Login /> Relleno los campos.', () => {

    const wrapper = render(
        <AuthState>
            <AlertaState>
                <BrowserRouter>
                    <Login />
                </BrowserRouter>
            </AlertaState>
        </AuthState>
    );

    userEvent.type(screen.getByTestId('email'), 'hola'); 

});