import React, { useState } from "react";
import styled from "styled-components"
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { StyleDiv, StyleFormDiv } from "../style";


const AdminHomePage = () => {

    const navigate = useNavigate();

    const goToLogin = () => {
        navigate("/login")
      }
    
    const goToCreateTrip = () => {
        navigate("/criar")
      }
    
      const goToLast = () => {
        navigate(-1)
      }

    return (
      <StyleFormDiv>
      
            <h1>Painel Administrativo</h1>
            <button onClick={goToLast}>Voltar</button>
            <button onClick={goToCreateTrip}>Criar Viagem</button>
            <button onClick={goToLogin}>Logout</button>
            <p>teste</p>
            <p>keaven</p>
      
      </StyleFormDiv>
    )
}

export default AdminHomePage;