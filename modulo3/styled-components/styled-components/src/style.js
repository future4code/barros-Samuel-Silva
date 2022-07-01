import React from "react";
import styled from "styled-components";

export const MyImage = styled.div `
    background-image: url(${(props)=>props.backImage});
    height: 100px;
    width: 100px;
`
export const Titulo = styled.h1`
    display: flex;
    flex-wrap: wrap;
    Justify-content: center;
    font-family: Arial;
    font-weight: bold;
`

export const BackMainOrange = styled.div`
    display: flex;
    align-items: flex-end;
    background-color: orange;
    width: 100%;
    height: 400px;
      
`
export const ConteudoMain = styled.div`
    display: grid;
    grid-template-columns: 1fr 5fr 1fr;
    justify-items: center;
    align-items: flex-end;
    height: 400px;
    input {
        margin: 10px;
    }
`    
export const ConteudoCab = styled.div`
    display: flex;
    justify-content: center;
    align-items: flex-end;
    
`
export const TextoRodape = styled.footer`
    display: flex;
    align-items: center ;
    justify-content: center;
    background-color: gray;
    justify-items: center;
    font-weight: 600;
    height: 25px;
`