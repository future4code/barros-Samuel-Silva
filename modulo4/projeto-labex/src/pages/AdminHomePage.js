import React, { useState } from "react";
import styled from "styled-components"
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { StyleList, StyleFormDiv } from "../style";
import { DeleteTrip_URL, GetTrip_URL, PostApplyToTrip_URL } from '../constants/constants';
import useRequestData from '../hooks/useRequestData';

const AdminHomePage = () => {

///////////////////////////////////////////////////////////////// navigate
  const navigate = useNavigate();

    const goToLogin = () => {
        navigate("/login")
      }
    
    const goToCreateTrip = () => {
        navigate("/criar")
      }
    
      const goToLast = () => {
        navigate(-1)
      }

///////////////////////////////////////////////////////////////////// lista de viagens
      const [dataListTrips, isLoadingListTrips, erroListTrips]=useRequestData(`${GetTrip_URL}`)    //recebendo os dados do hook

      const lista = dataListTrips&&dataListTrips.map((viagem) => {
        return (
            <div key={viagem.id}>
                <p>Nome:{viagem.name}</p>
                <p>Descrição:{viagem.description}</p>
                <p>Planeta:{viagem.planet}</p>
                <p>Duração em dias:{viagem.durationInDays}</p>
                <p>Data:{viagem.date}</p>
                <button>delete</button>
                <br/>
            </div> 
  
            )
    })
  console.log(lista)
 
   ///////////////////////////////////////////////////////////////////// lista de candidatos     

   const myHeaders = {headers: {"Content-Type" : "application/json"}};

  // const applyToTrip = (event) => {
  //   event.preventDefault();

  const [dataListCandi, isLoadingListCandi, erroListCandi]=useRequestData(  

   axios
      .post(PostApplyToTrip_URL, myHeaders)
      .then((response) => {
      setNovaLista(lista);
      //console.log(novaLista);      
     
      })
      .catch((erro) => {
        alert("Ops! Algo deu errado!");
        console.log(erro.response);
      })
)
  

  const Candidate = dataListCandi&&dataListCandi.map((cand) => {
    return (
        <div key={cand.id}>
            <p>Nome:{cand.name}</p>
            <p>Idade:{cand.age}</p>
            <p>Texto:{cand.applicationText}</p>
            <p>Profissão:{cand.profession}</p>
            <p>País:{cand.country}</p>
            <br/>
        </div> 

        )
})
console.log(Candidate)

 ///////////////////////////////////////////////////////////////////// delete viagem
 const [novaLista, setNovaLista] = useState(lista)
 
 const delTrip = (event) => {
  event.preventDefault();

  axios
    .delete(DeleteTrip_URL)
    .then((response) => {
      alert("Viagem esxcluída com sucesso!");
      setNovaLista(lista)
    console.log(novaLista)      
   
    })
    .catch((erro) => {
      alert("Ops! Algo deu errado!");
      console.log(erro.response);
    });
};
 
/////////////////////////////////////////////////////////////////////////////////////////
    return (
        <div>
            <h1>Painel Administrativo</h1>
            <button onClick={goToLast}>Voltar</button>
            <button onClick={goToCreateTrip}>Criar Viagem</button>
            <button onClick={goToLogin}>Logout</button>
            <h1>Lista de viagens</h1>
            <StyleList>
              {isLoadingListTrips && "Carregando..."} 
              <ul>
                {!isLoadingListTrips && dataListTrips && lista} 
              </ul>
              {!isLoadingListTrips && !dataListTrips && erroListTrips} 
            </StyleList>
      </div>
              
    )
}


export default AdminHomePage;