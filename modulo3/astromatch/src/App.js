import React, { useState } from "react";
import { StylePrincipal } from "./style";
import Choose from "./components/Choose";
import Matches from "./components/Matches";
import axios from "axios";

function App() {

// //////////////////////////////////////////////////////AXIOS/////////////////////////////////////////////////

const url ="https://us-central1-missao-newton.cloudfunctions.net/astroMatch/:samuel-garcia-barros/clear";
  
const headers = {headers: {
    "Content-Type" : "application/json"
  }
};  

//////////////////////////////////////////LIMPA MATCHES//////////////////////////////////////////////////////

const [listaMatches, setListaMatches] = useState()

const clearMatches = (event) => {
  event.preventDefault();
  axios
    .put(url, headers)
    .then((response) => {
      alert("Matches excluídos!");
      setListaMatches(response.data)
      console.log(response.data)
    })
    .catch((erro) => {
      alert("Ops! Tente novamente.");
      console.log(erro.response);
    });
  }
/////////////////////////////////////////////MUDA PAGINA/////////////////////////////////////////////

const [pagina, setPagina] = useState("1")

const paginaRenderizada = () => {
  switch (pagina){
    case "1":
      return <Choose mudaPagina={mudaPagina}/>
    case "2": 
      return <Matches mudaPagina={mudaPagina}/>
    default: 
      return <Choose mudaPagina={mudaPagina}/>
  }
}

function mudaPagina(p){
  setPagina(p)
}

  return (
    <StylePrincipal>
      <h1>ASTROMATCH</h1>
      {paginaRenderizada()}
    </StylePrincipal>
  );
}



export default App;
