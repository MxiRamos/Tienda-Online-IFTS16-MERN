import axios from "axios"
import { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import '../stylesheets/Productos.css'

function Productos(){

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
        <div className="container containerProductos">
            <div className="containerList">
                <h1>Categorias</h1>
                <ul className="list-group">
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
                                <button className='btn btn-success float-start'>Detalles</button>
                                </Link>   
                                <button className="btn btn-primary float-end" >Agregar</button>
                            </div>
                        </div>
                    ))}
                    
            </div>
    </div> 
    )
}

export default Productos