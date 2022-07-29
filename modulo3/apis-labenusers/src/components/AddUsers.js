import axios from "axios";
import React, { useState } from "react";
import { StyleTela1 } from "../style";
import ListUsers from "./ListUsers";

function AddUsers( ) {

  const [inputName, setInputName] = useState("");
  const [inputEmail, setInputEmail] = useState("");

  const trocaTela=(props)=>{
    return
    (props.estarLogado(false)
  )}

  //Recebe dados do Input ////////////////////////////////////////////////////////////////////////////////////
   const atualizaInputName = (event) => {
    setInputName(event.target.value);
    
  };
   const atualizaInputEmail = (event) => {
    setInputEmail(event.target.value);
  };

  //AXIOS /////////////////////////////informacoes pemanentes//////////////////////////////////////////////////
  const url ="https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users";
  
  const headers = {headers: {
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

      <label>Nome:</label>
      <input type="text" placeholder="Nome" value={inputName} onChange={atualizaInputName}></input>
      <label>Email:</label>
      <input type="email" placeholder="email" value={inputEmail} onChange={atualizaInputEmail}></input>
      <button onClick={newUser}>Adicionar</button>
    </StyleTela1>
  );
}

export default AddUsers;