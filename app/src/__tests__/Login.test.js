import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Login from '../components/auth/Login';
import NuevaCuenta from '../components/auth/NuevaCuenta';
import Tienda from '../components/tienda/Tienda';
import Footer from '../components/layouts/Footer';
import NavBar from '../components/layouts/NavBar';
import RutaPrivada from '../components/rutas/RutaPrivada';
import AlertaState from '../context/alertas/alertaState';
import AuthState from '../context/autenticacion/authState';
import tokenAuth from '../config/token';
import Menu from '../components/usuarios/Menu';
import Baterias from '../components/baterias/Baterias';
import BateriaState from '../context/baterias/bateriaState';
import TiendaState from '../context/tienda/tiendaState';
import BateriaCompra from '../components/tienda/BateriaCompra';


import '@testing-library/jest-dom/extend-expect';
import { render, screen } from '@testing-library/react'

test('<Login /> Cargando formulario y haciendo testing.', () => {

    render(
        <AuthState>
            <AlertaState>
                <BateriaState>
                    <TiendaState>
                        <BrowserRouter>
                            <NavBar />
                            <Routes>
                            <Route path="/login" element={<Login />} />
                            </Routes>
                        <Footer />
                    </BrowserRouter>
                </TiendaState>
            </BateriaState>
        </AlertaState>
    </AuthState >
    );
    
    expect ( screen.getByTestId('titulo')).toBeInTheDocument();


});