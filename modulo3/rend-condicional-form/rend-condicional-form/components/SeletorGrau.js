import React from "react";
import { useState } from "react";
import Etapa2 from "./Etapa2";
import Etapa3 from "./Etapa3";

const SeletorGrau=()=>{
    const [grauEscolar,setGrauEscolar]=useState("Superior Completo")

    if (grauEscolar==="Superior Completo"){
        return(
            console.log("fui clicado"),
            <Etapa2 passaEtapa2={setGrauEscolar}/>
        )
    } if (grauEscolar==="Superior Incompleto"){
        return(
            <Etapa2 passaEtapa2={setGrauEscolar}/>
        )
    } else 
        return(
            <Etapa3 passaEtapa3={setGrauEscolar}/>
        )
    }
  

export default SeletorGrau;