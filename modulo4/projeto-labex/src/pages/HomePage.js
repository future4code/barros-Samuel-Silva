import React from "react";
import { useNavigate } from "react-router-dom";
import { StyleHome, StyleHomeExt } from "../style";
import logo from "../img/logo.jpg"
import * as MyRouters from "../Rotas/Coodinator";

const HomePage = () => {

  const navigate = useNavigate();

  return (
    <StyleHomeExt>
      <StyleHome>
        <img src={logo} alt="Logo Labex"></img>
        <h1>Aqui, o céu não é o limite!</h1>
      </StyleHome>
      <button onClick={() => MyRouters.goToLogin(navigate)}>Area do Administrador</button>
      <button onClick={() => MyRouters.goToList(navigate)}>Ver Viagens</button>
    </StyleHomeExt>
  )
}

export default HomePage;