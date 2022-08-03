import axios from "axios";
import React, { useState, useEffect } from "react";
import { StyleTela2, CardPost } from "../style";

function Choose({ mudaPagina }) {

  const [listaToChoose, setListaToChoose] = useState([]);

  useEffect(() => {
    GetProfileToChoose();
  }, []);

  function handleSubmit (event) {
    event.preventDefault()
    mudaPagina("2")
}

//////////////////////////////////////////////AXIOS/////////////////////////////////////////////

const url ="https://us-central1-missao-newton.cloudfunctions.net/astroMatch/samuel-garcia-barros/person";
  
const headers = {
  headers: {
    "Content-Type" : "application/json"
  }
};  

////////////////////////////////////////MOSTRA LISTA DE MATCHES//////////////////////////////////////////////////////

const GetProfileToChoose = () => {
    axios
      .get(url)
      .then((response) => {
        console.log(response.data.profile);
        // setListaToChoose(response.data.profile);
      })
      .catch((erro) => {
        console.log(erro.response);
      });
  };

  
  return (
    <StyleTela2>
         
       <h2>Escolha seu par...</h2>
       <button onClick={handleSubmit}>Troca tela »</button>
       <button>♥</button><button>X</button>
       {listaToChoose.map((user) => {return <li key={user.id}>{user.bio}</li>}
        
       )
    }
    </StyleTela2>  
  )
}


export default Choose;