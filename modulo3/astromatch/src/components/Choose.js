import axios from "axios";
import React, { useState, useEffect } from "react";
import { Footer, CardPost, Header } from "../style";
import iconMatch from "../img/match.png"
import iconNoMatch from "../img/noMatch.png";
import iconLimpar from "../img/limpar.png";
import Logo from "../img/logo.png";



function Choose({ mudaPagina }) {

  const [listaToChoose, setListaToChoose] = useState([]);

  useEffect(() => {
    GetProfileToChoose();
  }, []);

  function handleSubmit(event) {
    event.preventDefault()
    mudaPagina("2")
  }

  //////////////////////////////////////////////AXIOS/////////////////////////////////////////////

  const url = "https://us-central1-missao-newton.cloudfunctions.net/astroMatch/samuel-garcia-barros/person";
  const urlPost = "https://us-central1-missao-newton.cloudfunctions.net/astroMatch/samuel-garcia-barros/choose-person";

  const headers = {
    headers: {
      "Content-Type": "application/json"
    }
  };

  const [perfil, setPerfil] = useState([])
  const [foto, setFoto] = useState(undefined)
  const [id, setId] = useState(undefined)

  ////////////////////////////////////////MOSTRA LISTA DE MATCHES//////////////////////////////////////////////////////

  const GetProfileToChoose = () => {
    axios
      .get(url, headers)
      .then((response) => {
        setPerfil(response.data.profile)
        setFoto(response.data.profile.photo)
        setId(response.data.profile.id)
      }).catch((error) => {
        console.log(error.data)
      })
  };

  const ChoosePersonYes = () => {
    axios
      .post(urlPost, { id: id, choice: true })
      .then((response) => {
        GetProfileToChoose()
      }).catch((error) => {
        console.log(id)
      })
  };

  const ChoosePersonNo = () => {
    axios
      .post(urlPost, { id: id, choice: false })
      .then((response) => {
        GetProfileToChoose()
      }).catch((error) => {
        console.log("OPS!")
      })
  };


  return (
    <>
      <Header>
        <img src={Logo}></img>
        <button onClick={handleSubmit}>♥ View Matches</button>
      </Header>
      <CardPost>
        <img src={perfil.photo}></img>
        <h3>{perfil.name}, {perfil.age}</h3>
        <p>{perfil.bio}</p>
      </CardPost>
        
      <Footer>
        <img src={iconNoMatch} onClick={ChoosePersonNo} alt="Icone descatar match"></img>
        <img src={iconMatch} onClick={ChoosePersonYes} alt="Icone dar match"></img>
        <img src={iconLimpar} onClick={ChoosePersonYes} alt="Icone limpar matches"></img>
      </Footer>
    </>
  )
}


export default Choose;