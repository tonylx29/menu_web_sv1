import './App.css';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { PaginaPrincipal } from './components/PaginaPrincipal';
import { Map } from './components/Map';
import ShowCard from './components/ShowCard';
import CreateCard from './components/CreateCard';
import EditCard from './components/EditCard';
import MenuBloquesDinamicos from './components/MenuBloquesDinamicos';

function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" element={< PaginaPrincipal />} />
          <Route path="/bloques" element={<MenuBloquesDinamicos />} />
          <Route path="/mapa" element={ <Map />} />
          <Route path="/create" element={ <CreateCard> </CreateCard>} />
          <Route path="/edit/:id" element={ <EditCard> </EditCard>} />
          <Route path="/show" element={ <ShowCard> </ShowCard>} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
