import axios from "axios"
import { useState } from "react"
import { Link } from "react-router-dom"

function Login(){

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    function Ingresar(){


        
        if(email === '' || password === ''){
            alert('Debe ingresar el email o la contraseña')
        }else{
            axios.get('/api/usuarios')
                .then(res => {
                    const usuarios = res.data
                    const usuario = usuarios.filter(usuario => usuario.email === email)
                    alert("Usuario Ingresado " + usuario[0].usuario)
                    localStorage.setItem('username', usuario[0].usuario)
                })
        }

        /* var usuario = {
            email: email,
            password: password
        }

        if(email === '' || password === ''){
            alert('Debe ingresar el email o la contraseña')
        }else{
            axios.post('/api/login', usuario)
                .then(res => {
                    console.log(res.data)
                    localStorage.setItem('username', JSON.stringify(res.data.usuario)) //local storage almacena el nombre de usuario 
                    alert(JSON.stringify(res.data))//convierto el objeto en una cadena de texto
                })
                .catch(err => {
                    console.log(err)
                })
        } */
        
    }

    return(
        <div className="col-lg-4 offset-lg-4">
            <div className="card cardRegistrar" >
                
                    <form className='formulario-regis'>
                        <h1>Iniciar Sesion</h1>
                        
                        <label className='float-start'>Email:</label>
                        <input type="text" placeholder="Email" className="form-control" onChange={e => setEmail(e.target.value)} value={email}/>
                        <br/>
                        
                        <label className='float-start'>Contraseña:</label>
                        <input type="password" placeholder="Contraseña" className="form-control" onChange={e => setPassword(e.target.value)} value={password}/>
                        <br/>
                        
                        
                        <button className="btn btn-primary float-start" onClick={Ingresar}>Ingresar</button>
                        <Link to="/">
                            <button className="btn btn-primary float-end">Volver a Inicio</button>
                        </Link>
                    </form>
                
            </div>
        </div>
    )
}

export default Login