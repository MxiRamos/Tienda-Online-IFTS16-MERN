import axios from "axios"
import { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import '../stylesheets/Productos.css'

function Productos(){

    const [dataProductos, setDataProductos] = useState([])
    const [carritoIndividual, setCarritoIndividual] = useState([])
    const [input, setInput] = useState() //cantidad de productos
    
    useEffect(() => {
        axios.get('/api/productos')
            .then(res => {
                console.log(res.data)
                setDataProductos(res.data) // los datos que obtenemos del get del backen lo asignamos al useState dataProductos
            })
            .catch(err => {
                console.log(err)
            })
    }, [])
      

    //--------------
    //funcion que agrega un producto al carrito
    function agregarProducto(id){

        axios.get(`/api/carrito/${id}`) //obtengo el valor del carrito por el id y lo asigno al useState carritoIndividual
                    .then(resCarrito => {
                        setCarritoIndividual(resCarrito.data)
                    })
                    .catch(err => {
                        console.log(err)
                    })
        

        axios.get(`/api/productos/${id}`) //obtengo el producto por el id
            .then(res => {

                if(carritoIndividual.nombre === res.data.nombre){ //si tiene el mismo nombre solo suma la cantidad que se definio en el input
                    var cantidadActual = carritoIndividual.cantidad
                    cantidadActual += parseInt(input || 1) //con parserInt paso el valor input a un numero
                    carritoIndividual.cantidad = cantidadActual // al valor que obtuve del carrito le sumo la cantidad sumada con el input
                    console.log(carritoIndividual.cantidad)
                    
                    const carritoCantidad = { // defino carritoCantidad con el valor de cantidad modificado
                        _id: carritoIndividual._id,
                        nombre: carritoIndividual.nombre,
                        categoria: carritoIndividual.categoria,
                        precio: carritoIndividual.precio,
                        img: carritoIndividual.img,
                        cantidad: carritoIndividual.cantidad 
                    }
                    console.log(carritoCantidad)

                    axios.put(`/api/carrito/${id}`, carritoCantidad)//hago el put con la cantidad modificada
                        .then(responseCarrito => {
                            console.log(responseCarrito.data)
                        })
                        .catch(err => console.log(err))

                        setCarritoIndividual([])

                }else{ // si el nombre no es el mismo hace un post 
                    var producto = { // defino la variable producto y ingreso los datos del producto
                        _id: res.data._id,
                        nombre: res.data.nombre,
                        categoria: res.data.categoria,
                        precio: res.data.precio,
                        img: res.data.img,
                        cantidad: 1 || input
                    }
                    axios.post('/api/carrito', producto) // hago un post con producto donde esta almacenado el producto que quiero agregar
                        .then(res => {
                            console.log(res.data)
                        })
                        .catch(err => {
                            console.log(err)
                        })
                }
            })
            .catch(err => {
                console.log(err)
            })
    }
    //----------------

    
    

    
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
                                    <input id={producto._id} type="number" className="inputCantidad float-start" value={input || 1} min={1} max={20}
                                    onChange={e => setInput(e.target.value)}></input>
                                    
                                    <Link >
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