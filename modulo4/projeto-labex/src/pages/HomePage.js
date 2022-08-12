import React, { useState } from "react";
import styled from "styled-components"
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { StyleDiv } from "../style";
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
        <StyleDiv>
            <img src={logo}></img>
            <h1>Labe X</h1>
            <button onClick={goToLogin}>Area do Administrador</button>
            <button onClick={goToList}>Ver Viagens</button>
        </StyleDiv>
    )
}

export default HomePage;