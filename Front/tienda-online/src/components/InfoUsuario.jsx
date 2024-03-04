import axios from "axios"
import { useEffect, useState } from "react"
import { useParams, useNavigate } from "react-router-dom"
import '../stylesheets/InfoUsuario.css'

function InfoUsuario(){

    const navigate = useNavigate()
    const params = useParams()

    const [usuario, setUsuario] = useState([])

    useEffect(() => {
        axios.get(`/api/usuarios/${params.id}`) // obtengo el producto por el id
            .then(res => {
                console.log(res.data)
                setUsuario(res.data)
            })
            .catch(err => {
                console.log(err)
            })
    }, [params.id]) //params.id como dependencia del useEffect

    function cerrarSesion(){
        localStorage.setItem('username', '')
    }

    function handleCerrarSesion(){
        cerrarSesion()
        navigate('/') // voy a la ruta /
        window.location.reload()
    }

    return(
        <div id="divUsuario">
            <h1>Hola soy info usuario</h1>
            <p>{usuario.usuario}</p>
            <p>{usuario.email}</p>
            <button className="btn btn-primary" onClick={handleCerrarSesion}>Cerrar sesion</button>
        </div>
    )
}

export default InfoUsuario