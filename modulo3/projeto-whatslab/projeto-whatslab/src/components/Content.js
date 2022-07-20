import React from 'react';
import { StyleContent, Chat } from '../style';
import { useState } from 'react';

function Content() {

    const [arrayMessage, setArrayMessage] = useState([{ name: "", message: "" }])                           //ARRAY DE MENSAGENS
    const [inputName, setInputname] = useState("");
    const [inputMessage, setInputMessage] = useState("");

    const changeName = (event) => {
        setInputname(event.target.value)
    }
                                                    //FUNÇÕES DO ONCHANGE
    const changeMsg = (event) => {
        setInputMessage(event.target.value)
    }

    const SendMsg = (e) => {
        e.preventDefault()
        const newArrayMessage = [...arrayMessage, { name: inputName, message: inputMessage }]
        setArrayMessage(newArrayMessage)               // BOTÃO ENVIAR   
        setInputname("eu")
        setInputMessage("")
    }

    const messageMap = arrayMessage.map((element, index) => {
        return (
            <Chat key={index}>
                <span>{element.name}</span>
                <span>{element.message}</span>
            </Chat>
        )
       
    })

   function euNao(element){
        if (inputName="eu") {                         //NÃO ENVIA REMETENTE "EU"
           console.log("este é EU")
        }
    }
    
    return (
        <StyleContent>
            <div>
                {messageMap}
            </div>
            <div>
                <input type='text'  size={15} value={inputName} onChange={changeName}></input>
                 <input type='text' size={40} value={inputMessage} onChange={changeMsg}></input>
                 <button onClick={SendMsg}>Enviar</button>
                 {/* {euNao} */}
            </div>
        </StyleContent>
    )
}

export default Content; 