import axios from "axios"
import { useEffect, useState } from "react"
import '../stylesheets/Electrodomesticos.css'
import { Link } from "react-router-dom"

function Electrodomesticos(){

    const [electrodomesticos, setElectrodomesticos] = useState([])
    

    useEffect(() => {
        axios.get('/api/productos')
            .then(res => {
                console.log(res.data.filter(electrodomestico => electrodomestico.categoria === "Electrodomesticos")) 
                setElectrodomesticos(res.data.filter(electrodomestico => electrodomestico.categoria === "Electrodomesticos"))
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
                            <input className="form-check-input me-1" type="radio" name="listGroupRadio" value="" id="firstRadio"></input>
                            <label className="form-check-label" for="firstRadio">Herramientas</label>
                        </Link>
                    </li>
                    <li className="list-group-item">
                        <Link to={'/electrodomesticos'}>
                            <input className="form-check-input me-1" type="radio" name="listGroupRadio" value="" id="secondRadio" checked></input>
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
            <div className="row row-cols-1 row-cols-md-4 g-4 Electrodomesticos" >
                {electrodomesticos.map((electrodomestico) => (
                    <div className="card" >
                        <div className="card-body" >
                            <img src={electrodomestico.img} className='card-img-top' alt='...'></img>
                            <h5 class="card-title">{electrodomestico.nombre}</h5>
                            <p className="card-text">{electrodomestico.precio}$</p>  
                            <button className="btn btn-primary" >Agregar</button>
                            <Link to={`/producto/${electrodomestico._id}`}>
                                <button className='btn btn-success float-start'>Detalles</button>
                            </Link> 
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Electrodomesticos