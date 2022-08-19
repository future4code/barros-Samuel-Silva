import React from "react";
import { useNavigate } from "react-router-dom";
import { StyleHome } from "../style";
import logo from "../img/logo.jpg"
import * as MyRouters from "../Rotas/Coodinator";

const HomePage = () => {

  const navigate = useNavigate();

  return (
    <div>
    <StyleHome>
      <img src={logo} alt="Logo Labex"></img>
      <h1>Aqui, o céu não é o limite!</h1>
    </StyleHome>
      <button onClick={()=>MyRouters.goToLogin(navigate)}>Area do Administrador</button>
      <button onClick={()=>MyRouters.goToList(navigate)}>Ver Viagens</button>
    </div>
  )
}

export default HomePage;