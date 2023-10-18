import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Inicio from './paginas/Inicio';
import Login from './paginas/Login';
import Registro from './paginas/Registro';
import HomeL from './paginas/homeL';
import Perfil from './paginas/perfil';
import Miscursos from './paginas/Miscursos';
import Play from './paginas/Play';

function App() {
  return (
    <Router>
      <Routes>
        
        <Route exact path='/' element={<Inicio/>}/>
        <Route exact path='/Login' element={<Login/>}/>
        <Route exact path='/Registro' element={<Registro/>}/>
        <Route exact path='/HomeL' element={<HomeL/>}/>
        <Route exact path='/Perfil' element={<Perfil/>}/>
        <Route exact path='/Miscursos' element={<Miscursos/>}/>
        <Route exact path='/Play' element={<Play/>}/>
      </Routes>
    </Router>
  );
}

export default App;