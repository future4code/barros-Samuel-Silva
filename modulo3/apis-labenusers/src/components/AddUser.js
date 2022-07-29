import React, { useState } from "react";
import axios from "axios";
import { StyleTela1 } from "../style";

export function AddUser({ mudaPagina }) {

    const [inputName, setInputName] = useState("");
    const [inputEmail, setInputEmail] = useState("");

    function handleSubmit(event) {
        event.preventDefault()
        mudaPagina("2")
    }

    //Recebe dados do Input ////////////////////////////////////////////////////////////////////////////////////
    const atualizaInputName = (event) => {
        setInputName(event.target.value);

    };
    const atualizaInputEmail = (event) => {
        setInputEmail(event.target.value);
    };

    //AXIOS /////////////////////////////informacoes pemanentes//////////////////////////////////////////////////
    const url = "https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users";

    const headers = {
        headers: {
            Authorization: "samuel-garcia-barros"
        }
    };

    const body = {
        "name": inputName,
        "email": inputEmail
    }

    ////////////////////////////////////////ADICIONA USUARIO//////////////////////////////////////////////////////

    const newUser = (event) => {
        event.preventDefault();
        axios
            .post(url, body, headers)
            .then((response) => {
                alert("Cadastro efetuado com sucesso!");
                console.log(response.data)

            })
            .catch((erro) => {
                alert("Cadastro incorreto! Tente novamente.");
                console.log(erro.response);
            });
        setInputName("");
        setInputEmail("");
    };

    return (
        <StyleTela1>
            <h3>Cadastro de usuário</h3>
            <label>Nome:</label>
            <input type="text" placeholder="Nome" value={inputName} onChange={atualizaInputName}></input>
            <label>Email:</label>
            <input type="email" placeholder="email" value={inputEmail} onChange={atualizaInputEmail}></input>
            <button onClick={newUser}>Adicionar</button>
            <button onClick={handleSubmit}>Troca tela »</button>
        </StyleTela1>
    )
}