import { useEffect, useState } from 'react'
import '../stylesheets/Carrito.css'
import axios from 'axios'
import { FaTrash } from "react-icons/fa";

function Carrito(){

    const [carrito, setCarrito] = useState([])

    useEffect(() => {
        axios.get('/api/carrito')
            .then(res => {
                console.log(res.data)
                setCarrito(res.data) // los datos que obtenemos del get del backend lo asignamos al useState carrito
            })
            .catch(err => {
                console.log(err)
            })
    }, [])


    function eliminarProducto(id){
        axios.delete(`/api/carrito/${id}`)
            .then(res =>{
                console.log(res.data)
            })
            .catch(err => {
                console.log(err)
            })
    }

    return(
        
            <div className="cardCarrito">
                <div className='containerLista'>
                    <span className="titulo">LISTA DE PRODUCTOS</span>

                    <div className='containerTabla'>  
                        <table className="table table-bordered" >
                            <thead>
                                <tr>          
                                    <th scope="col"></th>
                                    <th scope="col">Producto</th>
                                    <th scope="col">Categoria</th>
                                    <th scope="col">Precio</th>
                                    <th scope='col'>Cantidad</th>
                                    <th></th>
                                </tr>
                            </thead>
                            <tbody className="table-group-divider">
                                
                                {carrito.map((carrito) => (
                                    <tr>
                                        <th><img src={carrito.img} className='card-img-top-carrito' alt='...'></img></th>
                                        <th>{carrito.nombre}</th>
                                        <th>{carrito.categoria}</th>
                                        <th>{carrito.precio}$</th>
                                        <th>{carrito.cantidad}</th>
                                        <th>
                                            <FaTrash onClick={() => eliminarProducto(carrito._id)}></FaTrash>
                                        </th>
                                    </tr>
                                ))}
                                
                                

                            </tbody>
                        </table>
                    </div>                               
                </div>
            </div>
        
    
    )
}

export default Carrito