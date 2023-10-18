import React from "react";
import MenuL from "../componentes/menuL";
import Profile from "../componentes/profile";
import Piedepagina from '../componentes/Piedepagina';

function Perfil () {
  return(
    <div className="perfil">
      <MenuL/>
      <Profile/>
      <Piedepagina/>
    </div>
  );
  
}
export default Perfil;