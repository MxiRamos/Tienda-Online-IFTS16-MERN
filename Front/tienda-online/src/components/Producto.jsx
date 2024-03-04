import axios from "axios"
import { useEffect, useState } from "react"
import { Link, useParams } from "react-router-dom"
import 'bootstrap/dist/css/bootstrap.min.css'
import '../stylesheets/Producto.css'

// obtengo el producto que elegi en especifico
function Producto(){

    const params = useParams()

    const [producto, setProducto] = useState([])
    const [input, setInput] = useState('')

    useEffect(() => {
        axios.get(`/api/productos/${params.id}`) // obtengo el producto por el id
            .then(res => {
                console.log(res.data)
                setProducto(res.data)
            })
            .catch(err => {
                console.log(err)
            })
    }, [])

    //funcion que agrega un producto al carrito
    function agregarProducto(id) {
        axios.get(`/api/carrito/${id}`)//obtengo el valor del carrito por el id y lo asigno al const carritoIndividual
          .then(resCarrito => {
            const carritoIndividual = resCarrito.data;
      
            if (carritoIndividual && carritoIndividual.nombre) {
              axios.get(`/api/productos/${id}`)//obtengo el producto por el id
                .then(res => {
                  if (carritoIndividual.nombre === res.data.nombre) { //si tiene el mismo nombre solo suma la cantidad que se definio en el input
                    var cantidadActual = carritoIndividual.cantidad;
                    cantidadActual += parseInt(input || 1);//con parserInt paso el valor input a un numero
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
                    cantidad: input || 1
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

    return(
        <div className="row row-cols-1 row-cols-md-4 g-1 Producto" >
            <div className="card" id="cardProducto">
                <div className="card-body" id="card-bodyProducto">
                    <img src={producto.img} className='card-img-top' alt='...'></img>
                    <h5 class="card-title">{producto.nombre}</h5>
                    <p className="card-text">{producto.precio}$</p>
                    <div className="botonesProductos">
                    <input id={producto._id} type="number" className="inputCantidad float-start" value={input || 1} min={1} max={20}
                    onChange={e => setInput(e.target.value)}></input>

                            <Link to={'/carrito'}>
                                <button className="btn btn-primary float-end" onClick={() => agregarProducto(producto._id)}>Agregar</button>
                            </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Producto