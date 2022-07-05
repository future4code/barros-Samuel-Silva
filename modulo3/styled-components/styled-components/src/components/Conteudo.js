import React from 'react';
import { BackMainOrange, ConteudoMain } from '../style'

function Conteudo() {
    return (
        <ConteudoMain>
            <BackMainOrange></BackMainOrange>
            <form>
                <label for='remetente'> Rementente:</label>
                <input type='text' id='remetente'></input>
                <label for='remetente'> Msg:</label>
                <input type='text' id='remetente'></input>
                <button>Enviar Mensagem</button>
            </form>
            <BackMainOrange></BackMainOrange>
        </ConteudoMain>
    )
}

export default Conteudo;