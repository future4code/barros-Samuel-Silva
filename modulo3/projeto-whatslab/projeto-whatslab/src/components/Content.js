import React, { useState } from 'react';
import { StyleContent } from '../style';
import Chat from './Chat';
import Remove from './Remove';


const [chat, setChat] = useState([
    { nome: "", mensagem: "" },
])

function Content() {

    const [inputName, setInputName] = useState("")
    const [inputMessage, setInputMessage] = useState("")

    const altName = (e) => {
        setInputName(e.target.value);
        console.log(inputName);
    }
    const altMessage = (e) => {
        setInputMessage(e.target.value);
        console.log(inputMessage);
    }

    const SendText = (e) => {
        e.prevent.default()
             const novoChat = [...chat, { nome: inputName, menssagem: inputMessage }]    //adicionando conteudo do input a lisa
                setChat(novoChat)
                setInputName("")
                setInputMessage("")
                console.log("Clicando");
    }

    return (
        <StyleContent>
            <input type='text' required id='remetente' value={inputName} size={15} onChange={altName}></input>
            <input type='text' id='mensage' value={inputMessage} size={40} onChange={altMessage}></input>
            <button onClick={SendText}>Enviar</button>
            <button onClick={Remove}>Remover</button>
        </StyleContent>
    )
}

export default Content; 