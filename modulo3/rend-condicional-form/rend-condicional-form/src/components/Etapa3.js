import React from "react";
import { Ficha } from "../style";
import EtapaFinal from "./EtapaFinal";

const Etapa3=()=>{
    return(
        <Ficha>
            <h2>Ensino Médio:</h2>
            <label>Por que você não terminou um curso de graduação?</label>
            <input type='text' name='termGraduacao'></input>
            <label>Você fez algum curso complementar?</label>
            <select >
            <option  defaultValue={""}>Selecione... </option>
            <option  value="Curso Técnico">Curso Técnico</option>
            <option  value="Curso de Inglês">Curso de Inglês</option>
            <option  value="Não fiz nenhum">Não fiz nenhum</option>
            </select>
        </Ficha>
    )
}

export default Etapa3;