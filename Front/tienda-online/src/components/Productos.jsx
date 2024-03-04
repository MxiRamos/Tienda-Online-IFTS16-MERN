import axios from "axios"
import { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import '../stylesheets/Productos.css'

function Productos(){

    const [dataProductos, setDataProductos] = useState([])
    const [input, setInput] = useState() //cantidad de productos
    
    useEffect(() => {
        axios.get('/api/productos')
            .then(res => {
                console.log(res.data)
                setDataProductos(res.data) // los datos que obtenemos del get del backen lo asignamos al useState dataProductos
              
                const valorInput = {}
                res.data.forEach(producto => {
                  valorInput[producto._id] = 1
                })
                setInput(valorInput)
              })
            .catch(err => {
                console.log(err)
            })
    }, [])
      
    

    //--------------
    //funcion que agrega un producto al carrito
    function agregarProducto(id) {
      const inputValor = input[id]
        axios.get(`/api/carrito/${id}`)//obtengo el valor del carrito por el id y lo asigno al const carritoIndividual
          .then(resCarrito => {
            const carritoIndividual = resCarrito.data;
      
            if (carritoIndividual && carritoIndividual.nombre) {
              axios.get(`/api/productos/${id}`)//obtengo el producto por el id
                .then(res => {
                  if (carritoIndividual.nombre === res.data.nombre) { //si tiene el mismo nombre solo suma la cantidad que se definio en el input
                    var cantidadActual = carritoIndividual.cantidad;
                    cantidadActual += parseInt(inputValor || 1);//con parserInt paso el valor input a un numero
                    carritoIndividual.cantidad = cantidadActual;// al valor que obtuve del carrito le sumo la cantidad sumada con el input
                    console.log(carritoIndividual.cantidad);
      
                    const carritoCantidad = {// defino carritoCantidad con el valor de cantidad modificado
                      cantidad: carritoIndividual.cantidad
                    };
                    console.log(carritoCantidad);
      
                    axios.put(`/api/carrito/${id}`, carritoCantidad)//hago el put con la cantidad modificada
                      .then(responseCarrito => {
                        console.log(responseCarrito.data);
                        window.location.reload(true)
                      })
                      .catch(err => console.log(err));
                  } else {
                    console.log("El producto ya está en el carrito.");
                  }
                })
                .catch(err => {
                  console.log(err);
                });
            } else { // si el nombre no es el mismo hace un post 
              axios.get(`/api/productos/${id}`)
                .then(res => {
                  var producto = {// defino la variable producto y ingreso los datos del producto
                    _id: res.data._id,
                    nombre: res.data.nombre,
                    categoria: res.data.categoria,
                    precio: res.data.precio,
                    img: res.data.img,
                    cantidad: inputValor || 1
                  };
                  axios.post('/api/carrito', producto)// hago un post con producto donde esta almacenado el producto que quiero agregar
                    .then(res => {
                      console.log(res.data);
                      window.location.reload(true)
                    })
                    .catch(err => {
                      console.log(err);
                    });
                })
                .catch(err => {
                  console.log(err);
                });
            }
          })
          .catch(err => {
            console.log(err);
          });
    }
    
    function handleInputChange(e, id) {
      const { value } = e.target;
      setInput(prevState => ({
        ...prevState,
        [id]: value
      }));
    }
    
    return(
        <div className="container containerProductos">
            <div className="containerList">
                <h1>Categorias</h1>
                <ul className="list-group">
                    <li className="list-group-item">
                        <Link to={'/productos'}> 
                            <input className="form-check-input me-1" type="radio" name="listGroupRadio" value="" id="firstRadio" checked></input>
                            <label className="form-check-label" for="firstRadio">Productos</label>
                        </Link>
                    </li>
                    <li className="list-group-item">
                        <Link to={'/herramientas'}> 
                            <input className="form-check-input me-1" type="radio" name="listGroupRadio" value="" id="firstRadio"></input>
                            <label className="form-check-label" for="firstRadio">Herramientas</label>
                        </Link>
                    </li>
                    <li className="list-group-item">
                        <Link to={'/electrodomesticos'}>
                            <input className="form-check-input me-1" type="radio" name="listGroupRadio" value="" id="secondRadio"></input>
                            <label className="form-check-label" for="secondRadio">Electrodomesticos</label>
                        </Link>
                    </li>
                    <li className="list-group-item">
                        <Link to={'/comidaYbebidas'}>
                            <input className="form-check-input me-1" type="radio" name="listGroupRadio" value="" id="thirdRadio"></input>
                            <label className="form-check-label" for="thirdRadio">Alimento y Bebidas</label>
                        </Link>
                    </li>
                    <li className="list-group-item">
                        <Link to={'/juguetes'}>
                            <input className="form-check-input me-1" type="radio" name="listGroupRadio" value="" id="thirdRadio"></input>
                            <label className="form-check-label" for="thirdRadio">Juguetes</label>
                        </Link>
                    </li>
                </ul>
            </div>
        
            <div className="row row-cols-1 row-cols-md-4 g-1" >
                
                    {/* itero los productos que obtuve de la base de datos */}
                    
                    {dataProductos.map((producto) => (
                        <div className="card cardProductos" >
                            <div className="card-body" >
                                <img src={producto.img} className='card-img-top' alt='...'></img>
                                <h5 class="card-title">{producto.nombre}</h5>
                                <p className="card-text">{producto.precio}$</p>
                                <Link to={`/producto/${producto._id}`}>
                                    <button className='btn btn-success '>Detalles</button>
                                </Link>
                                <div className="botonesProductos">
                                    <input id={producto._id} type="number" className="inputCantidad float-start" value={input[producto._id] || 1} min={1} max={20}
                                    onChange={(e) => handleInputChange(e, producto._id)}></input>
                                    
                                    <Link to={'/carrito'}>
                                    <button className="btn btn-primary float-end" onClick={() => agregarProducto(producto._id)}>Agregar</button>
                                    </Link>
                                </div>
                                
                            </div>
                        </div>
                    ))}
                    
                    
            </div>
    </div> 
    )
}

export default Productos