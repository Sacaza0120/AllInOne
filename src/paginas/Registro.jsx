import React from "react";
import Menu from "../componentes/Menu";
import Singin from "../componentes/singin";
import Piedepagina from '../componentes/Piedepagina';

function Registro(){
  return (
    <div className="Registro">
      <Menu/>
      <Singin/>
      <Piedepagina/>
    </div>
  );
}

export default Registro;