import axios from 'axios'
import 'bootstrap/dist/css/bootstrap.min.css'
import '../stylesheets/Inicio.css'
import { useEffect, useState } from 'react'

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
    <div className="row row-cols-1 row-cols-md-4 g-4" >
  
            {dataProductos.map((producto) => (
                <div className="card" >
                    <div className="card-body" >
                        <img src={producto.img} className='card-img-top'></img>
                        <h5 class="card-title">{producto.nombre}</h5>
                        <p className="card-text">{producto.precio}</p>  
                        <button className="btn btn-primary" >Agregar</button>
                    </div>
                </div>
            ))}
            
    </div>
    )
}

export default Inicio