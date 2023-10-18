import React from "react";
import Menu from "../componentes/Menu";
import Portada from '../componentes/Portada';
import Piedepagina from '../componentes/Piedepagina';

function Inicio(){
  return (
    <div className="Inicio">
      <Menu/>
      <Portada/>
      <Piedepagina/>
    </div>
  );
}

export default Inicio;