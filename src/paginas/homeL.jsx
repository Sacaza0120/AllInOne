import React from "react";
import MenuL from '../componentes/menuL';
import InicioL from '../componentes/inicioL';
import Piedepagina from '../componentes/Piedepagina';

function HomeL() {
  return (
    <div className="homeL">
      <MenuL/>
      <InicioL/>
      <Piedepagina/>
    </div>
  );
}
export default HomeL;