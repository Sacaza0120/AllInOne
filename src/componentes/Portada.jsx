import React from "react";
import { Link } from "react-router-dom";
import Allinone from "../imagenes/Allinone.png";


function Portada() {
  return(
     <div className='container'>
       
      <div className="row pt-4">
        
        <img src={Allinone} alt="Allinone" className="mx-auto" style= {{maxWidth:"300px", height: '250px'}}/>
        
        <div className="mx-auto">
        <p className="text-center" style={{color:'#ffff'}}>Todo lo que buscas a los mejores precios</p>
        </div>

        <Link to="/Login">
          <div className="d-grid gap-2 mx-auto pb-1">
            <button className="btn btn-primary" style={{backgroundColor:'#E54740',border:'1px solid #000000'}} type="button">Iniciar Sesion</button>
          </div>
        </Link>

        <Link to="/Registro">
          <div className="d-grid gap-2 mx-auto pb-1">
            <button className="btn btn-primary" type="button" style={{backgroundColor:'#E54740', border:'1px solid #000000'}}>Registrarse</button>
          </div>
        </Link>
     
      </div>
       
     </div>
    );
}

export default Portada;