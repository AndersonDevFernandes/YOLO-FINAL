import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Home from './Pages/Index'
import Dispositivos from './Pages/CadastrarDispositivos'
import Ambientes from './Pages/Ambientes'
import './App.css';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/pages/CadastrarDispositivos' element={<Dispositivos />} />
          <Route path='/pages/Ambientes' element={<Ambientes />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
