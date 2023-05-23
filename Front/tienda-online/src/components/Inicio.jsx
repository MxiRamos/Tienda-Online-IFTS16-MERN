import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.min.js'
import '../stylesheets/Inicio.css'
import { Link } from 'react-router-dom'

function Inicio(){

    

    return(
    <>
    <div id="carouselExampleControls" class="carousel slide" data-bs-ride="carousel">
        <div class="carousel-inner">
            <div class="carousel-item active">
                <img src="https://mdbootstrap.com/img/Photos/Slides/img%20(15).webp" class="d-block mx-auto" alt="..."></img>
            </div>
            <div class="carousel-item">
                <img src="https://mdbootstrap.com/img/Photos/Slides/img%20(22).webp" class="d-block mx-auto" alt="..."></img>
            </div>
            <div class="carousel-item">
                <img src="https://mdbootstrap.com/img/Photos/Slides/img%20(23).webp" class="d-block mx-auto" alt="..."></img>
            </div>
        </div>
        <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Previous</span>
        </button>
        <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Next</span>
        </button>
    </div>

        <h1>Categorias Populares</h1>
        <div className="row row-cols-1 row-cols-md-4 g-4" >
            <div className="card" >
                <h5 className="card-title">Herramientas</h5>
                <Link to={'/herramientas'}>
                    <img src='https://images.hola.com/imagenes/decoracion/20200717172227/herramientas-basicas-bricolaje-casa-mc/0-847-953/herramientas-basicas-4-a.jpg?tx=w_360' className='imgCat' alt='...'></img>
                </Link> 
            </div>
            <div className="card" >
                <h5 className="card-title">Electrodomesticos</h5>
                <Link to={'/electrodomesticos'}>
                    <img src='https://img.freepik.com/vector-gratis/composicion-realista-electrodomesticos_1284-65307.jpg' className='imgCat' alt='...'></img>
                </Link> 
            </div>
            <div className="card" >
                <h5 className="card-title">Electrodomesticos</h5>
                <Link to={'/juguetes'}>
                    <img src='https://www.fundacionlealtad.org/wp-content/uploads/2019/11/Foto-noticia-600x400-1.jpg' className='imgCat' alt='...'></img>
                </Link> 
            </div>
        </div>

    
      <h2>Productos Populares</h2>  


    </>   
    )
}

export default Inicio