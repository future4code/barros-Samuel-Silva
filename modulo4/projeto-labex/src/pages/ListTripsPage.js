import React, { useState } from "react";
import styled from "styled-components"
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { StyleDiv } from "../style";

const ListTripsPage = () => {

    const navigate = useNavigate();

    const goToLast = () => {
        navigate("/Admin")
      }
    
    const goToForm = () => {
        navigate("/Inscreva")
      }


    return (
        <StyleDiv>
            <button onClick={goToLast}>Voltar</button>
            <button onClick={goToForm}>Inscreva-se</button>
            <h1>Lista de viagens</h1>
            <section>
                <div>

                </div>
            </section>
        </StyleDiv>
        
    )
}

export default ListTripsPage;