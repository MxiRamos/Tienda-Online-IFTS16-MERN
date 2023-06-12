import axios from "axios"
import { useEffect, useState } from "react"
import '../stylesheets/Electrodomesticos.css'
import { Link } from "react-router-dom"

function Electrodomesticos(){

    const [electrodomesticos, setElectrodomesticos] = useState([])
    const [input, setInput] = useState([])

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

    //funcion que agrega un producto al carrito
    function agregarProducto(id){
        axios.get(`/api/productos/${id}`) //obtengo el producto por el id
            .then(res => {
                console.log(res.data)
                var producto = { // defino la variable producto y ingreso los datos del producto
                    nombre: res.data.nombre,
                    categoria: res.data.categoria,
                    precio: res.data.precio,
                    img: res.data.img,
                    cantidad: input
                }
                axios.post('/api/carrito', producto) // hago un post con producto donde esta almacenado el producto que quiero agregar
                    .then(res => {
                        console.log(res.data)
                    })
                    .catch(err => {
                        console.log(err)
                    })
            })
            .catch(err => {
                console.log(err)
            })
    }

    const handleOnChange = e =>{
        const valor = e.target.value
        setInput(valor)
    }

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
                            <Link to={`/producto/${electrodomestico._id}`}>
                                <button className='btn btn-success'>Detalles</button>
                            </Link> 
                            <div className="botonesProductos">
                                <input id={electrodomestico._id} type="number" className="inputCantidad float-start" value={input} min={1} max={20}
                                    onChange={handleOnChange}></input>
                                    
                                    <Link to={'/carrito'}>
                                    <button className="btn btn-primary float-end" onClick={() => agregarProducto(electrodomestico._id)}>Agregar</button>
                                    </Link>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Electrodomesticos