import axios from "axios"
import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import 'bootstrap/dist/css/bootstrap.min.css'
import '../stylesheets/Producto.css'

// obtengo el producto que elegi en especifico
function Producto(){

    const params = useParams()

    const [producto, setProducto] = useState([])

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

    return(
        <div className="row row-cols-1 row-cols-md-4 g-4 Producto" >
            <div className="card" >
                <div className="card-body" >
                    <img src={producto.img} className='card-img-top' alt='...'></img>
                    <h5 class="card-title">{producto.nombre}</h5>
                    <p className="card-text">{producto.precio}$</p>  
                    <button className="btn btn-primary" >Agregar</button>
                </div>
            </div>
        </div>
    )
}

export default Producto