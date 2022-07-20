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
            <input type="radio" value="CursoTec" name="CursoTec"/>Curso Técnico
            <input type="radio" value="CursoIngles" name="CursoIngles"/>Curso de Inglês
            <input type="radio" value="NaoFiz" name="NaoFiz"/>Nao fiz curso complementar
            <button onClick={EtapaFinal}>Próxima »</button>
        </Ficha>
    )
}

export default Etapa3;