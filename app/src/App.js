import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Login from './components/auth/Login';
import NuevaCuenta from './components/auth/NuevaCuenta';
import Baterias from './components/batteries/Baterias';
import Tienda from './components/batteries/Tienda';
import Footer from './components/layouts/Footer';
import NavBar from './components/layouts/NavBar';
import RutaPrivada from './components/rutas/RutaPrivada';
import AlertaState from './context/alertas/alertaState';
import AuthState from './context/autenticacion/authState';
import tokenAuth from './config/token';
import Menu from './components/usuarios/Menu';
import AgregarBateria from './components/usuarios/AgregarBateria';

function App() {

  console.log(process.env.REACT_APP_BACKEND_URL)
  const token = localStorage.getItem('token');
  if(token) {
    tokenAuth(token);
  }

  return (
    
    <AuthState>
      <AlertaState>
        <BrowserRouter>
          <NavBar />
          <Routes>
            <Route path="/" element={<Tienda />} />
            <Route path="/login" element={<Login />} />
            <Route path="/nueva-cuenta" element={<NuevaCuenta />} />
            <Route path="/baterias" element={<Baterias />} />
            <Route path="/menu" element={<RutaPrivada />} >
              <Route index element={<Menu />} />
              <Route path="agregar-bateria" element={<AgregarBateria />} />
            </Route>
          </Routes>
          <Footer />
        </BrowserRouter>
      </AlertaState>
    </AuthState>

  );
}

export default App;


// links de estar registrado
// - al comprar la bateria
// - menu usuario
// - agregar bateria

