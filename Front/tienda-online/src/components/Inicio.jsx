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
                <img src="https://www.solbyte.com/blog/wp-content/uploads/tienda-online-1.jpg" className="d-block mx-auto img2"  alt="..."></img>
            </div>
            <div class="carousel-item">
                <img src="https://mdbootstrap.com/img/Photos/Slides/img%20(22).webp" className="d-block mx-auto img2" alt="..."></img>
            </div>
            <div class="carousel-item">
                <img src="https://mdbootstrap.com/img/Photos/Slides/img%20(23).webp" className="d-block mx-auto img2" alt="..."></img>
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

    <div class="hm-page-block catPop">
            <div class="container">
                <div class="header-title">
                    <h1  data-aos="fade-up" data-aos-duration="3000">Categorías Populares</h1>
                </div>

                <div class="hm-grid-category">

                    <div class="grid-item" data-aos="fade-up" data-aos-duration="1000">
                    <h5 className="card-title">Herramientas</h5>
                    <Link to={'/herramientas'}>
                        <img src='https://images.hola.com/imagenes/decoracion/20200717172227/herramientas-basicas-bricolaje-casa-mc/0-847-953/herramientas-basicas-4-a.jpg?tx=w_360' className='imgCat' alt='...'></img>
                    </Link> 
                    </div>

                    <div class="grid-item" data-aos="fade-up" data-aos-duration="1500">
                    <h5 className="card-title">Electrodomesticos</h5>
                    <Link to={'/electrodomesticos'}>
                        <img src='https://img.freepik.com/vector-gratis/composicion-realista-electrodomesticos_1284-65307.jpg' className='imgCat' alt='...'></img>
                    </Link> 
                    </div>

                    <div class="grid-item" data-aos="fade-up" data-aos-duration="2000">
                    <h5 className="card-title">Juegos y Juguetes</h5>
                    <Link to={'/juguetes'}>
                        <img src='https://www.fundacionlealtad.org/wp-content/uploads/2019/11/Foto-noticia-600x400-1.jpg' className='imgCat' alt='...'></img>
                    </Link> 
                    </div>

                    <div class="grid-item" data-aos="fade-up" data-aos-duration="2000">
                    <h5 className="card-title">Alimentos y Bebidas</h5>
                    <Link to={'/comidaYbebidas'}>
                        <img src='https://thefoodtech.com/wp-content/uploads/2022/05/alimentos-funcionales-principal.jpg' className='imgCat' alt='...'></img>
                    </Link> 
                    </div>

                </div>

            </div>
        </div>
    
        <div className="hm-page-block prodPop">
            <div className="container">
                <div className="header-title">
                    <h1  data-aos="fade-up" data-aos-duration="3000">Productos Populares</h1>
                </div>

                <div className="hm-grid-category">

                    <div className="grid-item" data-aos="fade-up" data-aos-duration="1000">
                    <h5 className="card-title">Taladro</h5>
                        <Link to={'/producto/64644c25c4ee36d65369e1cd'}>
                            <img src='https://maquinariasboedo.com/wp-content/uploads/2014/11/CARATULA-3.png' className='imgCat' alt='...'></img>
                        </Link> 
                    </div>

                    <div className="grid-item" data-aos="fade-up" data-aos-duration="1500">
                        <h5 className="card-title">Heladera</h5>
                        <Link to={'/producto/64644579c4ee36d65369e1c5'}>
                            <img src='https://electroluxar.vtexassets.com/arquivos/ids/159945/heladera-no-frost-electrolux-dfn3000p-plata-265lts-_Detalhe1.png?v=637541009901930000' className='imgCat' alt='...'></img>
                        </Link> 
                    </div>

                    <div className="grid-item" data-aos="fade-up" data-aos-duration="2000">
                        <h5 className="card-title">Auto y bloques</h5>
                        <Link to={'/producto/646c2b0cde7e89610a0cd922'}>
                            <img src='https://ardiaprod.vtexassets.com/arquivos/ids/238104-1200-auto?v=638074071551430000&width=1200&height=auto&aspect=true' className='imgCat' alt='...'></img>
                        </Link> 
                    </div>

                    <div className="grid-item" data-aos="fade-up" data-aos-duration="2000">
                        <h5 className="card-title">Gaseosa Coca-Cola</h5>
                        <Link to={'/producto/646d1dc5e6fb464ae0254e45'}>
                            <img src='https://d2r9epyceweg5n.cloudfront.net/stores/001/151/835/products/77908950009971-d6396175b7ca20416b15890784336194-640-0.jpg' className='imgCat' alt='...'></img>
                        </Link> 
                    </div>

                </div>

            </div>
        </div>

    
       
        

    </>   
    )
}

export default Inicio