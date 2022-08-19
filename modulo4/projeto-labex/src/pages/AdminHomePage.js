import React from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { StyleAdmin, StyleList } from "../style";
import { BASE_URL } from '../constants/constants';
import useRequestData from '../hooks/useRequestData';
import * as MyRouters from "../Rotas/Coodinator";
import useProtectPage from "../hooks/useProtectPage";

const AdminHomePage = () => {

  useProtectPage()
  const navigate = useNavigate();

  ///////////////////////////////////////////////////////////////////// DELETA VIAGEM

  const [data, isLoading, erro, page, setPage] = useRequestData(`${BASE_URL}`) 

  const delTrip = (id) => {
    console.log("o chamado")
    axios.delete(`${BASE_URL}/${id}`, {
      headers: { auth: localStorage.getItem("token") }
    })
      .then((response) => {
        setPage(!page);
        alert("Viagem excluída!")
      })
      .catch((erro) => {
        console.log("Algo deu errado!")
      })
  }

  ///////////////////////////////////////////////////////////////////// BOTÃO LOGOUT

  const buttonLogout = () => {
    return (MyRouters.goToLogin(navigate),
      localStorage.getItem("token")
    )
  }

  ///////////////////////////////////////////////////////////////////// DETALHES

  const detailTrip = (id) => {

    axios.get(`${BASE_URL}/${id}`, {
      headers: { auth: localStorage.getItem("token") }
    })
      .then((response) => {
        setPage(!page);
      })
      .catch((erro) => {
        console.log("Algo deu errado!")
      })
  }

  ///////////////////////////////////////////////////////////////////// lista de viagens
   
  const lista = data && data.map((viagem) => {
    return (
      <StyleList key={viagem.id}>
        <h2>VIAGEM</h2>
        <p>Nome:{viagem.planet}</p>
        <p>Nome:{viagem.durationInDays}</p>
        <p>Nome:{viagem.date}</p>
        <p>Nome:{viagem.name}</p>
        <p>Nome:{viagem.description}</p>
        <h3>Candidato</h3>
        <p>Nome:{viagem.applicationText}</p>
        <p>Nome:{viagem.profession}</p>
        <p>Nome:{viagem.age}</p>
        <p>Nome:{viagem.name}</p>
        <p>Nome:{viagem.country}</p>
        <button onClick={() => { detailTrip(viagem.id) }}>Detalhes</button>
        <button onClick={() => { delTrip(viagem.id) }}>Delete</button>
        <br />
      </StyleList>

    )
  })
  console.log(lista)



  /////////////////////////////////////////////////////////////////////////////////////////
  return (
    <StyleAdmin>
      <h1>Painel Administrativo</h1>
      <button onClick={() => MyRouters.goToLast(navigate)}>Voltar</button>
      <button onClick={() => MyRouters.goToCreateTrip(navigate)}>Criar Viagem</button>
      <button onClick={buttonLogout}>Logout</button>
      <h1>Lista de viagens</h1>
      <StyleList>
        {isLoading && "Carregando..."}
        <ul>
          {!isLoading && data && lista}
        </ul>
        {!isLoading && !data && erro}
      </StyleList>
    </StyleAdmin>

  )
}


export default AdminHomePage;