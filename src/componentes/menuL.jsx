import React from "react";
import '../estilos/estilos.css';
import { Link } from "react-router-dom";
import relogo from "../imagenes/relogo.png"
import { GiShoppingCart } from 'react-icons/gi';
import carro from "../imagenes/carro.png";

function MenuL() {
  return (
    <div className="header">
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
          
          <Link className="navbar-brand" to='/HomeL'><img src={relogo} alt="Logo" className="logo" style={{width: '35px', height: '35px', border:'1px solid #000000'}}/></Link>

          
          <Link to='#'><img src={carro} style={{width:'20px',heigth:'20px'}}/></Link><button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>

           <div className="container">
        <form className="d-flex" role="search">
          <input className="form-control me-2" type="search" placeholder="Busca" aria-label="Search"/>
          <button className="btn btn-outline-success" type="submit" style={{color:'#ffff', backgroundColor:'#E54740',border:'2px solid #E54740'}}>Buscar</button>
        </form>
      </div>
          
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to='/HomeL'>Inicio</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to='/Perfil'>Perfil</Link>
              </li>
              
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to='/MisCursos'>Productos</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link active" aria-disabled="true" to="/">Cerrar Sesion</Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
     
</div>
    
  );
}

export default MenuL;