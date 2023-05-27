import { useState } from 'react'
import '../stylesheets/RegistrarUsuario.css'
import axios from 'axios'
import { Link } from 'react-router-dom'

function Registrar(){

    const [usuario, setUsuario] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    function nuevoUsuario(e){
        
        var usuarioNuevo = {//asigno los valores de los input a usuarioNuevo
            usuario: usuario,
            email: email,
            password: password
        }
        console.log(usuarioNuevo)

        //axios
        axios.post('/api/usuarios', usuarioNuevo) //hace el post de backend para la base de datos
            .then(res => {
                console.log(res.data)
                alert(res.data)
            })
            .catch(error => {
                console.log(error)
            })
    }

    return(
        <div className="col-lg-4 offset-lg-4">
            <div className="card cardRegistrar" >
                
                    <form className='formulario-regis'>
                        <h1>Registrar</h1>

                        <label className='float-start'>Usuario:</label>
                        <input type="text" placeholder="Usuario" className="form-control" value={usuario} onChange={(e) => {setUsuario(e.target.value)}}/>
                        <br/>
                        
                        <label className='float-start'>Email:</label>
                        <input type="text" placeholder="Email" className="form-control" value={email} onChange={(e) => {setEmail(e.target.value)}}/>
                        <br/>
                        
                        <label className='float-start'>Contraseña:</label>
                        <input type="password" placeholder="Contraseña" className="form-control" value={password} onChange={(e) => {setPassword(e.target.value)}}/>
                        <br/>
                        
                        
                        <button className="btn btn-primary float-start" onClick={nuevoUsuario}>Registrar Usuario</button>
                        <Link to="/">
                            <button className="btn btn-primary float-end">Volver a Inicio</button>
                        </Link>
                    </form>
                
            </div>
        </div>
    )
}

export default Registrar