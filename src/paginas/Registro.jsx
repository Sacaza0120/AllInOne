import React from "react";
import Menu from "../componentes/Menu";
import Singin from "../componentes/singin";
import Piedepagina from '../componentes/Piedepagina';
import FormularioRegistro from '../componentes/FormularioRegistro';

function Registro(){
  return (
    <div className="Registro">
      <Menu/>
      <FormularioRegistro/>
      <Piedepagina/>
    </div>
  );
}

export default Registro;