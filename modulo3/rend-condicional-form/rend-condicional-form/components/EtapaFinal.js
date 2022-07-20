import React from "react";
import styled from "styled-components";
import { Ficha } from "../style"
import Etapa1 from "./Etapa1";

const EtapaFinal=(props)=>{
    const fazerLogout=(event)=>{
    event.preventDefault();
    {props.passaEtapa}
    console.log("CLICOU")
}
    return(
      <Ficha>
           <h1>Obrigado por responder nosso questionário!</h1>
           <h2>Entraremos em contato</h2>
           <button onClick={fazerLogout}>SAIR</button>
      </Ficha>
    )
  }
export default EtapaFinal;