import React from "react";
import { useNavigate } from "react-router-dom";
import { StyleHomeExt } from "../style";
import logo from "../img/logo.jpg"
import * as MyRouters from "../Rotas/Coodinator";

const HomePage = () => {

  const navigate = useNavigate();

  return (
    <StyleHomeExt>
      <img src={logo} alt="Logo Labex"></img>
      <h1>Aqui, o céu não é o limite!</h1>
      <button onClick={() => MyRouters.goToLogin(navigate)}>Area do Administrador</button>
      <button onClick={() => MyRouters.goToList(navigate)}>Ver Viagens</button>
    </StyleHomeExt>
  )
}

export default HomePage;