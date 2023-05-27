import axios from "axios"
import { useEffect, useState } from "react"
import '../stylesheets/Herramientas.css'
import { Link } from "react-router-dom"

function Herramientas(){

    const [herramientas, setHerramientas] = useState([])
    

    useEffect(() => {
        axios.get('/api/productos')
            .then(res => {
                //filtra el json de la base de datos por la categoria que tenga el nombre "Herramientas"
                console.log(res.data.filter(herramienta => herramienta.categoria === "Herramientas")) 
                setHerramientas(res.data.filter(herramienta => herramienta.categoria === "Herramientas"))
                
                
                
                    
                /* res.data.map((productos) => { // itera los productos de la base de datos
                    console.log(productos.categoria)
                }) */
                /* console.log(res.data[0].categoria)
                setHerramientas(res.data) */ // los datos que obtenemos del get del backend lo asignamos al useState dataProductos
            })
            .catch(err => {
                console.log(err)
            })
    }, [])

    return(
        <div className="container">
            <div className="containerList">
            <h1>Categorias</h1>
                <ul className="list-group">
                    <li className="list-group-item">
                        <Link to={'/herramientas'}> 
                            <input className="form-check-input me-1" type="radio" name="listGroupRadio" value="" id="firstRadio" checked></input>
                            <label className="form-check-label" for="firstRadio">Herramientas</label>
                        </Link>
                    </li>
                    <li className="list-group-item">
                        <Link to={'/electrodomesticos'}>
                            <input className="form-check-input me-1" type="radio" name="listGroupRadio" value="" id="secondRadio" ></input>
                            <label className="form-check-label" for="secondRadio">Electrodomesticos</label>
                        </Link>
                    </li>
                    <li className="list-group-item">
                        <Link to={'/comidaYbebidas'}>
                            <input className="form-check-input me-1" type="radio" name="listGroupRadio" value="" id="thirdRadio" ></input>
                            <label className="form-check-label" for="thirdRadio">Alimento y Bebidas</label>
                        </Link>
                    </li>
                    <li className="list-group-item">
                        <Link to={'/juguetes'}>
                            <input className="form-check-input me-1" type="radio" name="listGroupRadio" value="" id="thirdRadio" ></input>
                            <label className="form-check-label" for="thirdRadio">Juguetes</label>
                        </Link>
                    </li>
                </ul>
            </div>
            <div className="row row-cols-1 row-cols-md-4 g-4 Herramientas" >
                {herramientas.map((herramienta) => (
                    <div className="card" >
                        <div className="card-body" >
                            <img src={herramienta.img} className='card-img-top' alt='...'></img>
                            <h5 class="card-title">{herramienta.nombre}</h5>
                            <p className="card-text">{herramienta.precio}$</p>  
                            <button className="btn btn-primary" >Agregar</button>
                            <Link to={`/producto/${herramienta._id}`}>
                                <button className='btn btn-success float-start'>Detalles</button>
                            </Link> 
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Herramientas