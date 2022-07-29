import axios from "axios";
import React, { useState, useEffect } from "react";
import { StyleTela2 } from "../style";

function ListUsers() {

  const [listaUser, setlistaUser] = useState([]);

  useEffect(() => {
    getAllUsers();
  }, []);

////AXIOS /////////////////////////////informacoes permanentes/////////////////////////////////////////////

  const url = "https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users";

  const id = "";

  const myHeaders = {
    headers: {
      Authorization: "samuel-garcia-barros"
    }
  };

  ////////////////////////////////////////LISTAR USUARIOS//////////////////////////////////////////////////////

  //GET
  const getAllUsers = () => {
    axios
      .get(url, myHeaders)
      .then((response) => {
    
        setlistaUser(response.data);
        // getAllUsers()
      })
      .catch((erro) => {
        console.log(erro.response);
      });
  };

  ////////////////////////////////////////DELETAR USUARIOS//////////////////////////////////////////////////////

  const delUser = (event) => {
    event.preventDefault();

    axios
      .delete(url + "/" + id, myHeaders)
      .then((response) => {
        alert("Usuário esxcluído com sucesso!");
        getAllUsers();

      })
      .catch((erro) => {
        alert("Ops! Algo deu errado!");
        console.log(erro.response);
      });
  };

  return (
    <StyleTela2>
      <h1> Lista de Usuários</h1>
      <button onClick={delUser}>Deletar</button>
      {listaUser.map((user) => {
        return <li key={user.id}>{user.name}</li>;
      }
     )
    }
    </StyleTela2>  
  )
}

export default ListUsers;