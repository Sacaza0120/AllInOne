import React from "react";
import Allinone from '../imagenes/Allinone.png';
import { Link } from "react-router-dom";
import {BiCopyright} from "react-icons/bi";

function Piedepagina() {
  return (
    
    <div className="container-fluid">
      <div className="row mx-auto">
        <div className="text-center pt-5 mx-auto">
          <hr style={{color:'#ffff'}}/>
          <h2 className="encabezado">Vendemos lo que quieras vender</h2>
          <img src={Allinone} style={{width:'350px', height:'350px'}} alt="pdp" width="100%"/>
          <h4 style={{color:'#ffff'}}>¿Quieres empezar a vender?</h4>
          <p  className='px-3' style={{color:'#ffff'}}><small>Esta es tu oportunidad para empezar</small></p>
          <section>
            <button className="btn btn-succes" style={{backgroundColor:'#E54740', color:'#ffff'}}>Instalar All In One</button>
          </section>
          <div id="copyright" style={{color:'#ffff'}} >
            <hr/>
            <p style={{color:'#ffff'}}><small>All In One<BiCopyright/>Todos los derechos reservados</small></p>
          </div>
        </div>
      </div>
    </div>


    
  );
}
export default Piedepagina;