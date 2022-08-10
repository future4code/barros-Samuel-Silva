import React, { useState } from "react";
import styled from "styled-components"
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { StyleFormDiv, StyleForm } from "../style";

const CreateTripPage = () => {

    const navigate = useNavigate();

    const goToLast = () => {
        navigate(-1)
      }
    
    const goToList = () => {
        navigate("/Lista")
      }


    return (
        <StyleFormDiv>
            <h1>Criar viagem</h1>
            <StyleForm>
                <input placeholder="nome"></input>
                <select>
                    <option>Escolha um planeta</option>
                </select>
                <input type="date" placeholder=""></input>
                <input placeholder="Descrição"></input>
                <input placeholder="Duração em dias"></input>
            </StyleForm>
            <button onClick={goToLast}>Voltar</button>
            <button onClick={goToList}>Criar</button>
        </StyleFormDiv>
    )
}

export default CreateTripPage;