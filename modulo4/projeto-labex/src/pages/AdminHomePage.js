import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import {StyleButton, StyleAdminExt, StyleListAdmin, StyleAdmin } from "../style";
import { BASE_URL } from '../constants/constants';
import useRequestData from '../hooks/useRequestData';
import * as MyRouters from "../Rotas/Coodinator";
import useProtectPage from "../hooks/useProtectPage";

const AdminHomePage = () => {
  
  useProtectPage()

  const navigate = useNavigate();
////////////////////////////////////////////////////////////////////// DELETA VIAGEM

  const [data, isLoading, erro, reload, setReload] = useRequestData(`${BASE_URL}`)
  
    const delTrip = (id) => {
     axios.delete(`${BASE_URL}${id}`, {
      headers: { auth: localStorage.getItem("token") }
    })
      .then((response) => {
        alert("Viagem excluída!");
        setReload(!reload);
      })
      .catch((erro) => {
        console.log("Algo deu errado!")
      })
  }

  ////////////////////////////////////////////////////////////////////// BOTÃO LOGOUT

  const buttonLogout = () => {
    return (MyRouters.goToLogin(navigate),
      localStorage.clear()
    )
  }

  ////////////////////////////////////////////////////////////////////////// LISTA TRIPS

  const lista = data && data.map((viagem) => {
    return (
      < StyleListAdmin key={viagem.id}>
        <h2>{viagem.name}</h2>
        <button onClick={() => { MyRouters.goToDetails(navigate(viagem.id)) }}>Detalhes</button>
        <button onClick={() => { delTrip(viagem.id) }}>Delete</button>
      </StyleListAdmin>
    )
  })

  /////////////////////////////////////////////////////////////////////////////////////////
  return (
    <StyleAdminExt>
      <h1>Painel Administrativo</h1>
      <StyleAdmin>
        {isLoading && "Carregando..."}
        <>
          {!isLoading && data && lista}
        </>
        {!isLoading && !data && erro}
      </StyleAdmin>
      <StyleButton>
        <button onClick={() => MyRouters.goToLast(navigate)}>[«] Voltar</button>
        <button onClick={() => MyRouters.goToCreateTrip(navigate)}>[√] Criar Viagem</button>
        <button onClick={buttonLogout}>[X] Logout</button>
      </StyleButton>
    </StyleAdminExt>

  )
}

export default AdminHomePage;