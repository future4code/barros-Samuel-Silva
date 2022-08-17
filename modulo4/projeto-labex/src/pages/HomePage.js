import React, { useState } from "react";
import styled from "styled-components"
import background1 from "../img/fundo1.jpg"
import { useNavigate } from "react-router-dom";
import { Container, StyleDiv } from "../style";
import logo from "../img/logo.jpg"

const HomePage = () => {

  const navigate = useNavigate();

  const goToLogin = () => {
    navigate("/Login")
  }

  const goToList = () => {
    navigate("/Lista")
  }

  return (

    <div>
      <button onClick={goToLogin}>Area do Administrador</button>
      <button onClick={goToList}>Ver Viagens</button>
      <StyleDiv>
        <img src={logo}></img>
      </StyleDiv>
      <h1>Aqui, o céu não é o limite!</h1>
    </div>
  )
}

export default HomePage;