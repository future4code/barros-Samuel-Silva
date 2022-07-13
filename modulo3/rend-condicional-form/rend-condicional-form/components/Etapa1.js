import React from "react";
import { Ficha, Radio } from "../style";
import SeletorGrau from "./SeletorGrau"


const Etapa1 = (props) => {
    
    const passaEtapa =()=>{
        console.log("fui clicado")
             }
    return (
        <Ficha>
            <label>Nome:</label>
            <input type='text' name='name' required ></input>
            <label>Idade:</label>
            <input type='number' name='idade'></input>
            <label>E-mail:</label>
            <input type='email' name='email'></input>
            <label>Grau de Escolaridade:</label>
            <input type="radio" value="Medio Incompleto" name="MedioInc" />Medio Incompleto
            <input type="radio" value="Medio Completo" name="MedioInc" />Medio Coompleto
            <input type="radio" value="Superior Incompleto" name="MedioInc" />Superior Incompleto
            <input type="radio" value="Superior Completo" name="MedioInc" />Superior Completo
            <button onClick={SeletorGrau}>Próxima »</button>
        </Ficha>
    )
}

export default Etapa1;