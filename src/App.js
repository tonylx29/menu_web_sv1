import './App.css';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { PaginaPrincipal } from './components/PaginaPrincipal';
import { MenuBloques2 } from './components/MenuBloques2';

function App() {
  
  return (
    
    <Router>
      <div>
        <Routes>
          <Route path="/" element={< PaginaPrincipal />} />
          <Route path="/bloques" element={ <MenuBloques2 />} />
          <Route path="/otro-link" element={<h2>Otro Link</h2>} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
