import axios from "axios";
import React, { useState, useEffect } from "react";
import { Footer, Header, TelaMatches } from "../style";
import iconLimpar from "../img/limpar.png";

import Logo from "../img/logo.png"


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

const url ="https://us-central1-missao-newton.cloudfunctions.net/astroMatch/samuel-garcia-barros/matches";
  
const headers = {headers: {
    "Content-Type" : "application/json"
  }
};  

////////////////////////////////////////MOSTRA LISTA DE MATCHES//////////////////////////////////////////////////////

const getMatches = () => {
    axios
      .get(url)
      .then((response) => {
        console.log(response.data.matches);
        setListaMatches(response.data.matches)
      })
      .catch((erro) => {
        console.log("Algo deu errado");
      });
  };

  const lista = listaMatches.map((perfil) => {
    return (
        <ul> 
            <div>
            <img src={perfil.photo} alt={perfil.photo_alt}></img>
            <p>{perfil.name}</p>
            </div> 
        </ul>
    )
})

//////////////////////////////////////////LIMPA MATCHES//////////////////////////////////////////////////////


const clearMatches = () => {
      axios.put(`https://us-central1-missao-newton.cloudfunctions.net/astroMatch/samuel-garcia-barros}/clear`)
      .then(() => {
        alert("Matches descartados!")
        setListaMatches([])
    }).catch(() =>{
        alert("Ops! Algo deu errado.")
    })
}

  return (
    <>
    <Header>
        <img src={Logo}></img>
        <button onClick={handleSubmit}>♥ Search More</button>  
    </Header>
      <TelaMatches>
        {lista}
    </TelaMatches>  
    <Footer>
        <img src={iconLimpar} onClick={clearMatches} alt="Icone limpar matches"></img>
    </Footer>
    </>
  )
}

export default Matches;