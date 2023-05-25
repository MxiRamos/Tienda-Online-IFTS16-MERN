import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import Inicio from './components/Inicio';
import Producto from './components/Producto';
import Herramientas from './components/Herramientas';
import Electrodomesticos from './components/Electrodomesticos';
import Productos from './components/Productos';
import Juguetes from './components/Juguetes';
import ComidaYBebidas from './components/ComidaYBebidas';

function App() {
  return (
    <div className="App">
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container">
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="/">Inicio</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/productos">Productos</a>
              </li>
              <li className="nav-item">
                <input placeholder='Buscar'></input>
              </li>
              
              
            </ul>
          </div>
        </div>
      </nav>

      

      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Inicio></Inicio>}></Route>
          <Route path='/productos' element={<Productos></Productos>}></Route>
          <Route path='/producto/:id' element={<Producto></Producto>}></Route>
          <Route path='/herramientas' element={<Herramientas></Herramientas>}></Route>
          <Route path='/electrodomesticos' element={<Electrodomesticos></Electrodomesticos>}></Route>
          <Route path='/juguetes' element={<Juguetes></Juguetes>}></Route>
          <Route path='/comidaYbebidas' element={<ComidaYBebidas></ComidaYBebidas>}></Route>
        </Routes>
        
      </BrowserRouter>



    </div>
  );
}

export default App;
