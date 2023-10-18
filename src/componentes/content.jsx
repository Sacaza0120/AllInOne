import React from "react";
import elbichooosiuu from "../imagenes/elbichooosiuu.jpg";
import sarten from "../imagenes/sarten.jpg";
import ps5 from "../imagenes/ps5.jpg";
import elden from "../imagenes/elden.jpg";
import berserk from "../imagenes/berserk.webp";
import '../estilos/estilos.css';
import puta2 from "../imagenes/puta2.jpg";
import monkey from "../imagenes/monkey.png";
import puta3 from "../imagenes/puta3.jpg";
import ps52 from "../imagenes/ps52.jpg";
import moda from "../imagenes/moda.png";
import nokia3310 from "../imagenes/nokia3310.jpg";
import chayomi from "../imagenes/chayomi.webp";


function CursosInit() {
  return(
    <div className="container">
      <h1 className="text-center" style={{color:'#ffff'}}>Productos Populares</h1>
      <div className="row row-cols-1 row-cols-md-3 g-4">
         <div id="carouselExample" className="carousel  #00000">
           <div className="carousel-inner">
             <div className="carousel-item active">
              <img src={puta2} className="d-block w-100" alt="..."/>
             </div>
            <div className="carousel-item">
              <img src={ps52} style={{width:'168px', height:'300px'}} className="d-block w-100" alt="..."/>
            </div>
            <div className="carousel-item">
              <img src={moda} className="d-block w-100" alt="..."/>
            </div>
          </div>
          <button className="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button className="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>
        <div className="container">
          <h2 className="encabezado pt-3" style={{color:'#ffff'}}>
          Filtros
          </h2>
        </div>
          <div className="btn-group" style={{width:'45px', height:'39px', position:'relative'}}>
  <button type="button" className="btn btn-danger dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
    Precios
  </button>
  <ul className="dropdown-menu">
    <li><a className="dropdown-item" href="#">$1 a $10</a></li>
    <li><a className="dropdown-item" href="#">$11 a $20</a></li>
    <li><a className="dropdown-item" href="#">$21 a $30</a></li>
    <li><a className="dropdown-item" href="#">$31 a $40</a></li>
    <li><a className="dropdown-item" href="#">$41 a $50</a></li>
    <li><a className="dropdown-item" href="#">$51 a $60</a></li>
  </ul>
</div>
        <div className="btn-group" style={{width:'45px', height:'45px', position: 'relative'}}>
  <button type="button" className="btn btn-primary dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false" style={{ position: 'absolute', top: '0px', left: '60px' }}>
    Tipo de producto
  </button>
  <ul className="dropdown-menu">
    <li><a className="dropdown-item" href="#">Tecnologia</a></li>
    <li><a className="dropdown-item" href="#">Arte</a></li>
    <li><a className="dropdown-item" href="#">Hogar</a></li>
    <li><a className="dropdown-item" href="#">Belleza</a></li>
  </ul>
</div>
        <div className="btn-group" style={{width:'45px', height:'45px', position: 'relative'}}>
  <button type="button" className="btn btn-info dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false" style={{ position: 'absolute', top: '0px', left: '180px' }}>
    Mas especificaciones
  </button>
  <ul className="dropdown-menu">
    <li><a className="dropdown-item" href="#">Talla (solo ropa)</a></li>
    <li><a className="dropdown-item" href="#">Especificaciones del equipo (solo objetos tecnologicos)</a></li>
    <li><a className="dropdown-item" href="#">Marca</a></li>
    <li><a className="dropdown-item" href="#">Estrellas del vendedor</a></li>
  </ul>
</div>
        
        <h1 className="text-center" style={{color:'#ffff'}}>Productos</h1>

        

        
        <div className="col">
          <div className="card h-100">
            <img
              src={ps5}
              className="card-img-top"
              alt="Course 1"
            />
            <div className="card-body">
              <h5 className="card-title">Playstation 5</h5>
              <p className="card-text">
                consola de nueva generacion muy potente y muy buena
                <hr/>
                $499
              </p>
            </div>
          </div>
        </div>
        <div className="col">
          <div className="card h-100">
            <img
              src={sarten}
              className="card-img-top"
              alt="Course 2"
            />
            <div className="card-body">
              <h5 className="card-title" style={{color:'#000000'}}>Sarten</h5>
              
              <p className="card-text">un sarten<hr/>
                $5</p>
            </div>
          </div>
        </div>
        <div className="col">
          <div className="card h-100">
            <img
              src={elden}
              className="card-img-top"
              alt="Course 3"
            />
            <div className="card-body">
              <h5 className="card-title" style={{color:'#000000'}}>Elden Ring</h5>
              <p className="card-text">
                Goty 2022, mejor juego de todos los años y al que no le guste que coma monda, aguante clock tower
                <hr/>
                $59
              </p>
            </div>
          </div>
        </div>
        <div className="col">
          <div className="card h-100"> 
            <img
              src={berserk}
              className="card-img-top"
              alt="Course 4"
            />
            <div className="card-body">
             <h5 className="card-title" style={{color:'#000000'}}>Berserk</h5>
              <p className="card-text">
                Leed berserk
                <hr/>
                $49
              </p>
            </div>
          </div>
        </div>
        <div className="col">
          <div className="card h-100">
            <img
              src={nokia3310}
              className="card-img-top"
              alt="Course 1"
            />
            <div className="card-body">
              <h5 className="card-title" style={{color:'#000000'}}>Nokia3310</h5>
              <p className="card-text" style={{color:'#000000'}}>
               Celular de ultima generacion con capacidad de 126Gb, camara de 50 megapixeles, bateria de 500 mbps con cargador rapido 
                <hr/>
                $199
              </p>
            </div>
          </div>
        </div>
        <div className="col">
          <div className="card h-100">
            <img
              src={chayomi}
              className="card-img-top"
              alt="Course 1"
            />
            <div className="card-body">
              <h5 className="card-title" style={{color:'#000000'}}>xiaomi note 12</h5>
              <p className="card-text" style={{color:'#000000'}}>
               Telefono antigue, perfecto para cualquier coleccionista. Perfecto estado. Envio en menos de una semana
                <hr/>
                $999
              </p>
            </div>
          </div>
        </div>
        </div>
      </div>
      
  );

  
}
export default CursosInit;