import React from "react";
import { useState } from "react";
import MockDeDados from "./MockDeDados";

function Produtos(){
    return(
        <div>
            <h3>Quantidade de itens: ${}</h3>
            <select>
                <option>Crescente</option>
                <option>Decrescente</option>
            </select>
        
            <MockDeDados/>
        </div>
    )
}

export default Produtos;