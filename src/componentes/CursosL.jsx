import React from "react";
import { Link } from 'react-router-dom';
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
import { TbDiscount2 } from 'react-icons/tb';

function CursosL() {
  return(
    <div className="row">
      <div className="container" style = {{ backgroundColor: '#1F2E4C'}}>
        <div className='p-3'>
          <h1 className="encabezado text fw-bold" style={{color:'#ffff'}}>Mis cursos</h1>
          <div className="card" >
            <div className="card-header encabezado" style={{color:'#ffff', backgroundColor:'#E54740'}}>
              <strong>Playstation 5</strong>
            </div>
            <div className="card-body">
              <img
              src={ps5}
              className="card-img-top"
              alt="Course 1"
              />
              <p className="card-text pt-2">Consola de nueva generacion muy potente y muy buena</p>
              <hr/>
              <p><strong>$499</strong></p>
              <Link to="/Play" className="btn btn-primary" style={{backgroundColor:'#0C7DB2', border:'1px solid #0C7DB2'}}>Ver</Link>
            </div>
          
              </div>
              
              
            </div>
          </div>
          <div className="p-4">
            <div className="card">
              <div className="card-header encabezado" style={{color:'#ffff', backgroundColor:'#E54740'}}>
                <strong>Sarten antiadherente</strong>
              </div>
              <div className="card-body">
                <img
                src={sarten}
                className="card-img-top"
                alt="Course 1"
                />
                <p className="card-text pt-2">Sarten antiadherente con fibra de carbono, gran durabilidad y facil uso</p>
                <hr/>
                <p><strong>$5</strong></p>
                <Link to="#" className="btn btn-primary" style={{backgroundColor:'#0C7DB2', border:'1px solid #0C7DB2'}}>Ver</Link>
              </div>
            </div>
          </div>
          <div className="p-4">
            <div className="card">
              <div className="card-header encabezado" style={{color:'#ffff', backgroundColor:'#E54740'}}>
                <strong>Elden Ring|Dluxe Edition </strong> <TbDiscount2 style={{position:'relative',left:'150px',width:'25px',height:'25px'}}/>
              </div>
              <div className="card-body">
                <img
                src={elden}
                className="card-img-top"
                alt="Course 1"
                />
                <p className="card-text pt-2">Videojuego Elden Ring disponible para consolas de nueva y antigua generacion</p>
                
                <hr/>
                <p><strong><del>$60</del> $25</strong></p>
                <Link to="#" className="btn btn-primary" style={{backgroundColor:'#0C7DB2', border:'1px solid #0C7DB2'}}>Ver</Link>
              </div>
            </div>
          </div>
          <div className="p-4">
            <div className="card">
              <div className="card-header encabezado" style={{color:'#ffff', backgroundColor:'#E54740'}}>
                <strong>Maximum Berserk</strong>
              </div>
              <div className="card-body">
                <img
                src={berserk}
                className="card-img-top"
                alt="Course 1"
                />
                <p className="card-text pt-2">Manga creado por Kentaro Miura publicado por primera vez en agosto de 1989 en japon</p>
                <hr/>
                <p><strong>$25</strong></p>
                <Link to="#" className="btn btn-primary" style={{backgroundColor:'#0C7DB2', border:'1px solid #0C7DB2'}}>Ver</Link>
              </div>
            </div>
          </div>
          <div className="p-4">
            <div className="card">
              <div className="card-header encabezado" style={{color:'#ffff', backgroundColor:'#E54740'}}>
                <strong>Nokia 3310</strong>
              </div>
              <div className="card-body">
                <img
                src={nokia3310}
                className="card-img-top"
                alt="Course 1"
                />
                <p className="card-text pt-2">Telefono de ultima generacion perfecto para personas mayores</p>
                <hr/>
                <p><strong>$30</strong></p>
                <Link to="#" className="btn btn-primary" style={{backgroundColor:'#0C7DB2', border:'1px solid #0C7DB2'}}>Ver</Link>
              </div>
            </div>
          </div>
        </div>

  );
}
export default CursosL;