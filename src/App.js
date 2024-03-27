import './App.css';

import { BrowserRouter as Router, Routes, Route, } from 'react-router-dom';
import { PaginaPrincipal } from './components/PaginaPrincipal';
import { Map } from './components/Map';
import ShowCard from './components/ShowCard';
import CreateCard from './components/CreateCard';
import EditCard from './components/EditCard';
import MenuBloquesDinamicos from './components/MenuBloquesDinamicos';
import { Login } from './components/Login';
import {Register} from './components/Register'
import { ProtectedRouter, AdminRoute } from './components/utils/ProtectedRouter'; // Importa los nuevos componentes de ruta protegida
import { AuthProvider } from './components/context/AuthContext';
import ErrorPage from './components/ErrorPage';
import Navbar from './components/Navbar';

function App() {

  return (
    <AuthProvider>
      <Router>
        <div>
          <Navbar> </Navbar>
          <Routes>
            <Route path="/" element={< PaginaPrincipal />} />
            <Route path="/bloques" element={<MenuBloquesDinamicos />} />
            <Route path="/mapa" element={<Map />} />

            {/* Protected Routes for authorized users (not just admins) */}
            <Route element={<ProtectedRouter />}>
              <Route path="/edit/:id" element={<EditCard />} />
              <Route path="/create" element={<CreateCard />} />
            </Route>

            {/* Admin-only Route */} {/* Utiliza AdminRoute para rutas solo de administrador */}
            <Route element={<AdminRoute />}>
              <Route path="/adminitracion" element={<ShowCard />} />
            </Route>

            <Route path="/iniciarsesion" element={<Login />} />
            <Route path="/registro" element={<Register />} />

            {/* Ruta comodín para manejar rutas no encontradas */}
            <Route path="/error" element={<ErrorPage />} /> {/* Ruta para la página de error */}
            <Route path="*" element={<ErrorPage message="Página no encontrada" />} /> {/* Ruta comodín para manejar rutas no encontradas */}
          </Routes>
        </div>
      </Router>
    </AuthProvider>
  );
}

export default App;
