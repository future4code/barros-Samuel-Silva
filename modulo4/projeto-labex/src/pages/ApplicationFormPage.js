import React, { useState } from "react";
import styled from "styled-components"
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { StyleFormDiv, StyleForm } from "../style";

const ApplicationFormPage = () => {
    
    const navigate = useNavigate();

    const goToLast = () => {
        navigate("/Lista")
      }
    
    const alertCad = () => {
        alert("Cadastro efetuado com sucesso")
      }

    return (
        <StyleFormDiv>
            <h1>Inscreva-se para uma viagem</h1>
            <StyleForm>
                <select>
                    <option>teste</option>
                    <option>kaven</option>
                </select>
                <input placeholder="nome"></input>
                <input placeholder="idade"></input>
                <input placeholder="texto de candidatura"></input>
                <input placeholder="profissão"></input>
                <select>
                    <option>teste</option>
                    <option>kaven</option>
                </select>
            </StyleForm>
            <button onClick={goToLast}>Voltar</button>
            <button onClick={alertCad}>Enviar</button>
        </StyleFormDiv>
    )
}

export default ApplicationFormPage;