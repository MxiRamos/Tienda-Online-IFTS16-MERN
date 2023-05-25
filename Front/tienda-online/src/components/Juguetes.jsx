import axios from "axios"
import { useEffect, useState } from "react"
import '../stylesheets/Juguetes.css'
import { Link } from "react-router-dom"

function Juguetes(){

    const [juguetes, setJuguetes] = useState([])
    

    useEffect(() => {
        axios.get('/api/productos')
            .then(res => {
                console.log(res.data.filter(juguetes => juguetes.categoria === "Juegos y Juguetes")) 
                setJuguetes(res.data.filter(juguetes => juguetes.categoria === "Juegos y Juguetes"))
            })
            .catch(err => {
                console.log(err)
            })
    }, [])

    return(
        <div className="row row-cols-1 row-cols-md-4 g-4 Juguetes" >
            {juguetes.map((juguete) => (
                <div className="card" >
                    <div className="card-body" >
                        <img src={juguete.img} className='card-img-top' alt='...'></img>
                        <h5 class="card-title">{juguete.nombre}</h5>
                        <p className="card-text">{juguete.precio}$</p>  
                        <button className="btn btn-primary" >Agregar</button>
                        <Link to={`/producto/${juguete._id}`}>
                            <button className='btn btn-success float-start'>Detalles</button>
                        </Link> 
                    </div>
                </div>
            ))}
        </div>
    )
}

export default Juguetes