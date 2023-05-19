import axios from 'axios'
import 'bootstrap/dist/css/bootstrap.min.css'
import '../stylesheets/Inicio.css'
import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

function Inicio(){

    const [dataProductos, setDataProductos] = useState([])

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

    return(
    <div className="row row-cols-1 row-cols-md-6 g-1" >
        
            {/* itero los productos que obtuve de la base de datos */}
            {dataProductos.map((producto) => (
                <div className="card" >
                    <div className="card-body" >
                        <img src={producto.img} className='card-img-top' alt='...'></img>
                        <Link to={`producto/${producto._id}`}>
                            <h5 class="card-title">{producto.nombre}</h5>
                        </Link>  
                        <p className="card-text">{producto.precio}</p>  
                        <button className="btn btn-primary" >Agregar</button>
                    </div>
                </div>
            ))}
            
    </div>
    )
}

export default Inicio