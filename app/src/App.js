import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Login from './components/auth/Login';
import NuevaCuenta from './components/auth/NuevaCuenta';
import Baterias from './components/batteries/Baterias';
import Tienda from './components/batteries/Tienda';
import Footer from './components/layouts/Footer';
import NavBar from './components/layouts/NavBar';
import AlertaState from './context/alertas/alertaState';
import AuthState from './context/autenticacion/authState';

function App() {

 console.log(process.env.REACT_APP_BACKEND_URL)

  return (

    <BrowserRouter>
      <NavBar />
      
      <AlertaState>
        <Routes>
          <Route path="/" element={<Tienda />} />
          <Route path="/login" element={<Login />} />
          <Route path="/nueva-cuenta" element={<NuevaCuenta />} />
          <Route path="/baterias" element={<Baterias />} />
        </Routes>
      </AlertaState>
      <Footer />
    </BrowserRouter>

  );
}

export default App;


