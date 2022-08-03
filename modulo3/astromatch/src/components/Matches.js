import axios from "axios";
import React, { useState, useEffect } from "react";
import { StyleTela2 } from "../style";

function Matches({ mudaPagina }) {

  const [listaMatches, setListaMatches] = useState([]);

  useEffect(() => {
    getMatches();
  }, []);

  function handleSubmit (event) {
    event.preventDefault()
    mudaPagina("1")
}

//////////////////////////////////////////////AXIOS/////////////////////////////////////////////

const url ="https://us-central1-missao-newton.cloudfunctions.net/astroMatch/:samuel-garcia-barros/matches";
  
const headers = {headers: {
    "Content-Type" : "application/json"
  }
};  

////////////////////////////////////////MOSTRA LISTA DE MATCHES//////////////////////////////////////////////////////

const getMatches = () => {
    axios
      .get(url)
      .then((response) => {
        console.log(response.data.profile);
        // setListaMatches(response.data)
      })
      .catch((erro) => {
        console.log(erro.response);
      });
  };

  return (
    <StyleTela2>
      <h2> Lista de Matches</h2>
      <button onClick={handleSubmit}>Troca tela »</button>
     
      {listaMatches.map((user) => {
        return <li key={user.id}>{user}</li>;
      }
     
     )
    }
    </StyleTela2>  
  )
}

export default Matches;