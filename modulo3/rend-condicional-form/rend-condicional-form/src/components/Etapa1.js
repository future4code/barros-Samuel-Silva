import React from "react";
import { Ficha, Radio } from "../style";

const Etapa1 = (props) => {
    
     return (
        <Ficha>
            <label>Nome:</label>
            <input type='text' name='name' required ></input>
            <label>Idade:</label>
            <input type='number' name='idade'></input>
            <label>E-mail:</label>
            <input type='email' name='email'></input>
            <label>Grau de Escolaridade:</label>
            <select >
            <option  defaultValue={""}>Selecione... </option>
            <option  value="Médio Incompleto">Médio Incompleto</option>
            <option  value="Médio Completo">Médio Completo</option>
            <option  value="Superior Incompleto">Superior Incompleto</option>
            <option  value="Superior Incompleto">Superior Completo</option>
            </select>
        </Ficha>
    )
}

export default Etapa1;