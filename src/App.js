import './App.css';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { PaginaPrincipal } from './components/PaginaPrincipal';
import { Map } from './components/Map';
import ShowCard from './components/ShowCard';
import CreateCard from './components/CreateCard';
import EditCard from './components/EditCard';
import MenuBloquesDinamicos from './components/MenuBloquesDinamicos';
import { Login } from './components/Login';
import { Register } from './components/Register';
import ProtectedRouter from './components/utils/ProtectedRouter';
import { AuthProvider } from './components/context/AuthContext';

function App() {
  return (
    <Router>  
      <div>
        <AuthProvider>
          <Routes>
            <Route path="/" element={< PaginaPrincipal />} />
            <Route path="/bloques" element={<MenuBloquesDinamicos />} />
            <Route path="/mapa" element={ <Map />} />
            <Route element={<ProtectedRouter canActivate={false} / >}>
              <Route path="/create" element={ <CreateCard> </CreateCard>} />
              <Route path="/show" element={ <ShowCard> </ShowCard>} />
            </Route>
            <Route path="/edit/:id" element={ <EditCard> </EditCard>} />
            <Route path="/iniciarsesion" element={<Login/> } />
            <Route path="/register" element={ <Register/>} />
          </Routes>
        </AuthProvider>
      </div>
    </Router>
  );
}

export default App;
