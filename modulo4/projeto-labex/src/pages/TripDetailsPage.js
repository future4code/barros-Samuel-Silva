import React, { useState } from "react";
import styled from "styled-components"
import axios from "axios";
import { StyleDiv } from "../style";

const TripDetailsPage = () => {
    return (
        <StyleDiv>
            <p>Teste</p>
            <button>Voltar</button>
            <p>Canditados Pendentes</p>
            <ul>
                <li>
                    <p>Astrodev</p>
                    <button>Aprovar</button>
                    <button>Reprovar</button>
                </li>
            </ul>
            <ul>
                <li>

                </li>
            </ul>
        </StyleDiv>
    )
}

export default TripDetailsPage;