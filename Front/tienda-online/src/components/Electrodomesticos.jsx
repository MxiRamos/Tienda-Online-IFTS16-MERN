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
    )
}

export default Electrodomesticos