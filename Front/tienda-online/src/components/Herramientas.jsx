import axios from "axios"
import { useEffect, useState } from "react"

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
                setHerramientas(res.data) */ // los datos que obtenemos del get del backen lo asignamos al useState dataProductos
            })
            .catch(err => {
                console.log(err)
            })
    }, [])

    return(
        <div className="row row-cols-1 row-cols-md-4 g-4" >
            {herramientas.map((herramienta) => (
                <div className="card" >
                    <div className="card-body" >
                        <img src={herramienta.img} className='card-img-top' alt='...'></img>
                        <h5 class="card-title">{herramienta.nombre}</h5>
                        <p className="card-text">{herramienta.precio}$</p>  
                        <button className="btn btn-primary" >Agregar</button>
                    </div>
                </div>
            ))}
        </div>
    )
}

export default Herramientas