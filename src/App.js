import './App.css';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { PaginaPrincipal } from './components/PaginaPrincipal';
import { MenuBloques } from './components/MenuBloques';

function App() {
  
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" element={< PaginaPrincipal />} />
          <Route path="/bloques" element={ <MenuBloques />} />
          <Route path="/otro-link" element={<h2>Otro Link</h2>} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
