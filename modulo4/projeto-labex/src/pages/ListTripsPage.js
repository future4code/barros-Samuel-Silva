import React, { useState, useEffect } from "react";
import styled from "styled-components";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { StyleForm, StyleList } from "../style";
import { GetTrip_URL } from '../constants/constants';
import useRequestData from '../hooks/useRequestData';

const ListTripsPage = () => {
   
/////////////////////////////////////////////////////////////////////////////////////////////////////// navigate    
    
    const navigate = useNavigate();

    const goToLast = () => {
        navigate("/")
      }
    
    const goToForm = () => {
        navigate("/Inscreva")
      }

/////////////////////////////////////////////////////////////////////////////////////////////////////// get Viagens

    const [dataListTrips, isLoadingListTrips, erroListTrips]=useRequestData(`${GetTrip_URL}`)    //recebendo os dados do hook

    const lista = dataListTrips&&dataListTrips.map((perfil) => {
      return (
          <StyleList>
              <p>Nome:{perfil.name}</p>
              <p>Descrição:{perfil.description}</p>
              <p>Planeta:{perfil.planet}</p>
              <p>Duração em dias:{perfil.durationInDay}</p>
              <p>Data:{perfil.date}</p>
              <br/>
          </StyleList> 

          )
  })

  
 // console.log([lista])

 ///////////////////////////////////////////////////////////////////////////////////////////////////////

return (
        <div>
              <h1>Lista de viagens</h1>
              <div>
              {isLoadingListTrips && "Carregando..."} 
              <ul>
                {!isLoadingListTrips && dataListTrips && lista} 
              </ul>
              {!isLoadingListTrips && !dataListTrips && erroListTrips} 
              </div>
             {/* {!isLoadingListTrips && !dataListTrips && dataListTrips.length === 0 && <p>"Nenhuma viagem"</p>}  */}
             <button type="button" onClick={goToLast}>Voltar</button>
             <button type="button" onClick={goToForm}>Inscreva-se</button>
        </div>
        
    )
}


export default ListTripsPage;