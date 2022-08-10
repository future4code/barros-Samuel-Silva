import React, { useState } from "react";
import styled from "styled-components"
import axios from "axios";
import { useNavigate } from 'react-router-dom';
import { StyleFormDiv, StyleForm } from "../style";


const LoginPage = () => {

    const navigate = useNavigate();

    const goToHome = () => {
        navigate("/")
      }
    
    const goToAdmin = () => {
        navigate("/Admin")
      }


    return (
        <StyleFormDiv>
            <h1>Login</h1>
            <StyleForm>
                <input placeholder="email"></input>
                <input placeholder="senha"></input>
            </StyleForm>
            <button onClick={ goToHome }>Voltar</button>
            <button onClick={ goToAdmin }>Entrar</button>
        </StyleFormDiv>
    )
}

export default LoginPage;