import React from "react";
import { Link } from "react-router-dom";

function Singin() {
  return (
    <div className="container">
      <div className="row">
        <div className="text-center mx-auto" style={{color:'#ffff'}}>
          <h1>REGISTRATE</h1>
          <p>¡Registrate para empezar a comprar y disfrutar!</p>
        </div>
        <div className="container pb-3">
          <form className="row g-3" action="/HomeL" method="get">
            <div className="col-md-6">
              <label htmlFor="inputEmail4" className="form-label" style={{color:'#ffff'}}>Correo</label>
              <input type="email" className="form-control" id="inputEmail4"/>
            </div>
            <div className="col-md-6">
              <label htmlFor="inputPassword4" className="form-label" style={{color:'#ffff'}}>Contraseña</label>
              <input type="password" className="form-control" id="inputPassword4"/>
            </div>
            <div className="col-12">
              <label htmlFor="inputAddress" className="form-label" style={{color:'#ffff'}}>Direccion</label>
              <input type="text" className="form-control" id="inputAddress" placeholder="1234 Main St"/>
            </div>
            <div className="col-12">
              <label htmlFor="inputAddress2" className="form-label" style={{color:'#ffff'}}>Complemento</label>
              <input type="text" className="form-control" id="inputAddress2" placeholder="Apartment, studio, or floor"/>
            </div>
            <div className="col-md-6">
              <label htmlFor="inputCity" className="form-label" style={{color:'#ffff'}}>Ciudad</label>
              <input type="text" className="form-control" id="inputCity"/>
            </div>
            <div className="col-md-4">
              <label htmlFor="inputState" className="form-label" style={{color:'#ffff'}}>Departamento</label>
              <select id="inputState" className="form-select" defaultValue="Antioquia">
                <option value="Antioquia">Antioquia</option>
                <option value="Caldas">Caldas</option>
                <option value="Atlantico">Atlantico</option>
                <option value="Magdalena">Magdalena</option>
                <option value="Santander">Santander</option>
                <option value="Nariño">Nariño</option>
                <option value="Putumayo">Putumayo</option>
                <option value="Arauca">Arauca</option>
              </select>
              
            <div className="col-12">
              <label htmlFor="fechaNacimiento" className="form-label" style={{color:'#ffff'}}>
                Fecha de Nacimiento
              </label>
              <input 
                type="date"
                className="form-control"
                id="fechaNacimiento"
                name="fechaNacimiento"/>
          </div>  
              
          </div>
            <div className="col-md-2">
              <label htmlFor="inputZip" className="form-label" style={{color:'#ffff'}}>Ocupacion</label>
              <input type="text" className="form-control" id="inputZip"/>
          </div>
            <div className="col-12">
              <div className="form-check">
                <input className="form-check-input" type="checkbox" id="gridCheck"/>
                <label className="form-check-label" htmlFor="gridCheck" style={{color:'#ffff'}}>
                  Aceptar terminos y condiciones
                </label>
              </div>
            </div>
            <div className="col-12">
              <button type="submit" className="btn btn-primary">Registrarse</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Singin;