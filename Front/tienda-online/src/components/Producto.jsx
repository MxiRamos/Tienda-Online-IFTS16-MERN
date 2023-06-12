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
    function agregarProducto(id){
        axios.get(`/api/productos/${id}`) //obtengo el producto por el id
            .then(res => {
                console.log(res.data)
                var producto = { // defino la variable producto y ingreso los datos del producto
                    nombre: res.data.nombre,
                    categoria: res.data.categoria,
                    precio: res.data.precio,
                    img: res.data.img,
                    cantidad: input
                }
                axios.post('/api/carrito', producto) // hago un post con producto donde esta almacenado el producto que quiero agregar
                    .then(res => {
                        console.log(res.data)
                    })
                    .catch(err => {
                        console.log(err)
                    })
            })
            .catch(err => {
                console.log(err)
            })
    }

    const handleOnChange = e =>{
        const valor = e.target.value
        setInput(valor)
    }

    return(
        <div className="row row-cols-1 row-cols-md-4 g-1 Producto" >
            <div className="card" id="cardProducto">
                <div className="card-body" id="card-bodyProducto">
                    <img src={producto.img} className='card-img-top' alt='...'></img>
                    <h5 class="card-title">{producto.nombre}</h5>
                    <p className="card-text">{producto.precio}$</p>
                    <div className="botonesProductos">
                        <input id={producto._id} type="number" className="inputCantidad float-start" value={input} min={1} max={20}
                            onChange={handleOnChange}></input>
                                    
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