import React, { useState } from "react";
import styled from "styled-components"
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { StyleFormDiv, StyleForm } from "../style";
import useAplicationForm from "../hooks/useAplicationForm";
import { BASE_URL } from "../constants/constants";


const ApplicationFormPage = () => {
    
    const navigate = useNavigate();

    const goToLast = () => {
        navigate("/Lista")
      }
    
    const alertCad = () => {
        alert("Cadastro efetuado com sucesso")
      }
      
  /////////////////////////////////////////////////////////////////////////////////////////////////////// get Viagens
  
    const [dataListTrips, isLoadingListTrips, erroListTrips]=useAplicationForm(`${BASE_URL}id/apply`)    //recebendo os dados do hook
    const [inputName, setInputName] = useState()
    const [inputAge, setInputAge] = useState()
    const [inputText, setInputText] = useState()
    const [inputProf, setInputProf] = useState()
    const [inputCountry, setInputCountry] = useState()

 //////////////////////////////////////////////////////////////////////////////////// recebe dados do Input

    const atualizaInputName = (event) => {
        setInputName(event.target.value);
  };
     const atualizaInputAge = (event) => {
        setInputAge(event.target.value);
  };
     const atualizaInputText = (event) => {
        setInputText(event.target.value);
  };
     const atualizaInputProf = (event) => {
        setInputProf(event.target.value);
  };
     const atualizaInputCountry = (event) => {
        setInputCountry(event.target.value);
  };

   ///////////////////////////////////////////////////////////////////////////////// axios
     
   const headers = {headers: {"Content-Type" : "application/json" } };  
   const body = {
    "name": inputName,
    "age": inputAge,
    "applicationText": inputText,
    "profession": inputProf,
    "country": inputCountry,
   }


    const addTrip = dataListTrips&&dataListTrips.map((perfil) => {
        return (
            <div>
                <p>Nome:{perfil.Prof}</p>
                <p>Descrição:{perfil.description}</p>
                <p>Planeta:{perfil.planet}</p>
                <p>Duração em dias:{perfil.durationInDay}</p>
                <p>Data:{perfil.date}</p>
                <br/>
            </div> 
  
            )
    })
  
   // console.log([lista])
  
    return (
        <StyleFormDiv>
            <h1>Inscreva-se para uma viagem</h1>
            <StyleForm>
                <select>
                    <option>teste</option>
                    <option>kaven</option>
                </select>
                <input placeholder="nome" value={inputName} onChange={atualizaInputName}></input>
                <input placeholder="idade" value={inputAge} onChange={atualizaInputAge}></input>
                <input placeholder="texto de candidatura" value={inputText} onChange={atualizaInputText}></input>
                <input placeholder="profissão" value={inputProf} onChange={atualizaInputProf}></input>
                <select value={inputCountry} onChange={atualizaInputCountry}>
                    <option>teste</option>
                    <option>kaven</option>
                </select>
            </StyleForm>
            <button onClick={goToLast}>Voltar</button>
            <button onClick={addTrip}>Enviar</button>
        </StyleFormDiv>
    )
}

export default ApplicationFormPage;