import React from "react";
import styled from "styled-components";
import Etapa1 from "./components/Etapa1";
import Etapa2 from "./components/Etapa2";
import Etapa3 from "./components/Etapa3";
import EtapaFinal from "./components/EtapaFinal";
import { useState } from "react";
import { StyleHome } from "./style";


function App() {

const [etapa,setEtapa]=useState(1)
let next;

  switch(etapa){
      case 1 :
        next=<Etapa1/>
      break;
    
      case 2 :
        next=<Etapa2/>
      break;
    
      case 3:
        next=<Etapa3/>
      break;
    
      case 4 :
        next=<EtapaFinal/>
      break;

      default:
        next=<Etapa1/>
      break;
    }


const irParaProximaEtapa=()=>{
  setEtapa(etapa+1)
}

 return (
    
    <StyleHome>
      <h1>PROCESSO SELETIVO</h1>
      {next}
      <button onClick={irParaProximaEtapa}>Próxima »</button>
    </StyleHome>
  );
}

export default App;

