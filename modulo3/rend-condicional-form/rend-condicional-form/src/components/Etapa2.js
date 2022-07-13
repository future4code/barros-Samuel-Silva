import React from "react"
import { Ficha } from "../style"
import EtapaFinal from "./EtapaFinal"

const Etapa2=()=>{
    return(
      <Ficha>
            <h2>Curso Superior:</h2>
            <label>Qual o curso?</label>
            <input type='text' name='curso'></input>
            <label>Qual a unidade de ensino?</label>
            <input type='text' name='instuicao'></input>
         
      </Ficha>
    )
}

export default Etapa2;