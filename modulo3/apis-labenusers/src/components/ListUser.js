import React, { useState, useEffect } from "react";
import axios from "axios";
import { StyleList, StyleTela2 } from "../style";

export function ListUser({ mudaPagina }) {

    const [listaUser, setlistaUser] = useState([]);

    useEffect(() => {
        getAllUsers();
    }, []);

    function handleSubmit(event) {
        event.preventDefault()
        mudaPagina("1")
    }
    ////AXIOS /////////////////////////////informacoes permanentes/////////////////////////////////////////////

    const url = "https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users/";

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
            .delete(url + id, myHeaders)
            .then((response) => {
                alert("Usuário esxcluído com sucesso!");
                getAllUsers();

            })
            .catch((erro) => {
                alert("Ops! Algo deu errado!");
                console.log(erro.response);
            });
    };

    ////////////////////////////////////////MUDA PAGINA/////////////////////////////////////////////////////

    function handleSubmit(event) {
        event.preventDefault()
        mudaPagina("1")
    }

    return (
        <StyleTela2>
            <h1> Lista de Usuários</h1>
            <button onClick={handleSubmit}>Troca tela »</button>
                  {listaUser.map((user) => {
                      return (
                        <StyleList>
                            <li key={user.id}>{user.name}</li>
                            <li><button onClick={()=>delUser(user.id)}>x</button></li>
                        </StyleList>
                      )
                    }
                )      
            }
        </StyleTela2>
    )
}