import React from "react";
import { useState } from "react";

function Filtros(){
    return(
        <div>
            <h1>Filtros</h1>
            <label>Valor mínimo:</label>
            <input type="text" name="ValorMinimo" ></input>
            <label>Valor máximo:</label>
            <input type="text" name="ValorMaximo"></input>
            <label>Busca por nome:</label>
            <input type="text" name="BuscaNome" ></input>
        </div>
    )
}

export default Filtros;