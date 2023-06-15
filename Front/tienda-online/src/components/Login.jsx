import { Link } from "react-router-dom"

function Login(){
    return(
        <div className="col-lg-4 offset-lg-4">
            <div className="card cardRegistrar" >
                
                    <form className='formulario-regis'>
                        <h1>Iniciar Sesion</h1>
                        
                        <label className='float-start'>Email:</label>
                        <input type="text" placeholder="Email" className="form-control" />
                        <br/>
                        
                        <label className='float-start'>Contraseña:</label>
                        <input type="password" placeholder="Contraseña" className="form-control" />
                        <br/>
                        
                        
                        <button className="btn btn-primary float-start">Ingresar</button>
                        <Link to="/">
                            <button className="btn btn-primary float-end">Volver a Inicio</button>
                        </Link>
                    </form>
                
            </div>
        </div>
    )
}

export default Login