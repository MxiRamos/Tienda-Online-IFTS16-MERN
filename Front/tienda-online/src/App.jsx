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
import Login from './components/Login';
import Registrar from './components/RegistrarUsuario';
import Carrito from './components/Carrito';
import { FaShoppingCart } from 'react-icons/fa'
import { FaTelegramPlane } from "react-icons/fa";
import Contacto from './components/Contacto';
import Nosotros from './components/Nosotros';
import axios from 'axios';
import { useEffect, useState } from 'react';

function App() {

  const [productos, setProductos] = useState([])
  const [busqueda, setBusqueda] = useState('')

  

  useEffect(()=> {
    axios.get('/api/productos')
      .then(res => {
        setProductos(res.data)
      })
      .catch(err => {
        console.log(err)
      })
  },[])


  const handleChange = e => { //obtengo el valor de lo que se escribe en el input
    setBusqueda(e.target.value)
    console.log(busqueda)
  }

  const onSearch = (buscador) =>{// hace un set al useState busqueda
    setBusqueda(buscador)
    console.log('Buscar ', buscador)
  }

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
                <a className="nav-link" aria-current="page" href="/">Inicio</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/productos">Productos</a>
              </li>

              <div className='search-container'>
                <div className='search-inner'>
                  <input type='text' placeholder='Buscar' value={busqueda} onChange={handleChange}></input>
                  <button onClick={() => onSearch(busqueda)}>Buscar</button>
                </div>
                <div className='dropdown'>
                  {productos.filter(producto => { // filtra la lista de productos que se obtuvo con el axios.get
                    const busquedaProducto = busqueda.toLowerCase() // valor del input busqueda se pasa a minuscula para no ocasionar problema al comparar
                    const productoNombre = producto.nombre.toLowerCase() // nombre de los productos se pasa a minuscula

                    return busquedaProducto && productoNombre.startsWith(busquedaProducto) && productoNombre !== busquedaProducto
                  })
                  .map(producto => ( //itera todo los productos
                    <a href={`producto/${producto._id}`}>
                      <div
                      onClick={() => onSearch(producto.nombre)} // onSearch da el nombre del producto y lo setea a useState busqueda
                      className='dropdown-row'
                      >
                        {producto.nombre}
                      </div>
                    </a>
                  ))}
                </div>
              </div>
              
              
            </ul>
            <li className="nav">
                <a className="nav-link" href="/login">Login</a>
            </li>
            <li className="nav">
                <a className="nav-link" href="/registrar">Registrar</a>
            </li>
            <li className="nav-item">
                <a className="nav-icon" href="/carrito"><FaShoppingCart></FaShoppingCart></a>
            </li>
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
          <Route path='/login' element={<Login></Login>}></Route>
          <Route path='/registrar' element={<Registrar></Registrar>}></Route>
          <Route path='/carrito' element={<Carrito></Carrito>}></Route>
          <Route path='/contacto' element={<Contacto></Contacto>}></Route>
          <Route path='/nosotros' element={<Nosotros></Nosotros>}></Route>
        </Routes>
        
      </BrowserRouter>

      <footer>
            
            <div className="container">

                <div className="foo-row">
                    <div className="foo-col">
                        <h2>Suscríbete a nuestro newsletter</h2>
                        <form action="" method="GET">

                            <div className="f-input">
                                <input type="text" placeholder="Ingrese su correo"></input>
                                <button type="submit" class="hm-btn-round btn-primary"><FaTelegramPlane></FaTelegramPlane></button>
                            </div>
                        </form>

                    </div>

                    <div className="foo-col">
                        <ul>
                           <li><a href="/productos">Productos</a></li>
                           <li><a href="/nosotros">Nosotros</a></li>
                           <li><a href="/contacto">Contacto</a></li>
                        </ul>
                    </div>

                </div>

            </div>

        </footer>

    </div>
  );
}

export default App;
