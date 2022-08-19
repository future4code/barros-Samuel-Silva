import React, { useState, useEffect } from "react";
import styled from "styled-components";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { Container, StyleList, StyleLogin } from "../style";
import { BASE_URL } from '../constants/constants';
import useRequestData from '../hooks/useRequestData';
import * as MyRouters from "../Rotas/Coodinator";

const ListTripsPage = () => {

  const navigate = useNavigate();

  /////////////////////////////////////////////////////////////////////////////////////////////////////// get Viagens

  const [dataListTrips, isLoadingListTrips, erroListTrips] = useRequestData(`${BASE_URL}`)    //recebendo os dados do hook

  const lista = dataListTrips && dataListTrips.map((perfil) => {
    return (
      <StyleList>
        <p>Nome:{perfil.name}</p>
        <p>Descrição:{perfil.description}</p>
        <p>Planeta:{perfil.planet}</p>
        <p>Duração em dias:{perfil.durationInDay}</p>
        <p>Data:{perfil.date}</p>
        <br />
      </StyleList>

    )
  })
  ///////////////////////////////////////////////////////////////////////////////////////////////////////

  return (
    <div>

      <StyleLogin>
        <h1>Lista de viagens</h1>
        <div>
          {isLoadingListTrips && "Carregando..."}
          <ul>
            {!isLoadingListTrips && dataListTrips && lista}
          </ul>
          {!isLoadingListTrips && !dataListTrips && erroListTrips}
        </div>
      </StyleLogin>
      <button type="button" onClick={() => MyRouters.goToLast(navigate)}>Voltar</button>
      <button type="button" onClick={() => MyRouters.goToForm(navigate)}>Inscreva-se</button>
    </div>
  )
}


export default ListTripsPage;