import React from "react";
import Menu from "../componentes/Menu";
import Init from "../componentes/init";
import Piedepagina from '../componentes/Piedepagina';

function Login(){
  return (
    <div className="Login">
      <Menu/>
      <Init/>
      <Piedepagina/>
    </div>
  );
}

export default Login;