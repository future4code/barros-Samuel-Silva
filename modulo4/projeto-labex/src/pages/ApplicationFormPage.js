import React, { useState } from "react";
import styled from "styled-components"
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { StyleFormDiv, StyleForm } from "../style";
import { useForm } from "../hooks/useForm";
import { PostApplyToTrip_URL } from "../constants/constants";


const ApplicationFormPage = () => {
    
    const navigate = useNavigate();

    const goToLast = () => {
        navigate("/Lista")
      }
    
    const alertCad = () => {
        alert("Cadastro efetuado com sucesso")
      }
      
  
    const [body,onChange,clear]=useForm({ email: "", password: ""})

    const createTrip = (event) => {
        event.preventDefault()
        axios.post(`${PostApplyToTrip_URL}`, body).
        then((response)=>{
            console.log("Cadastrado")
            console.log(response.data);
        }).catch((error)=>{
            console.log("deu erro")
        })
        clear();
        
    }
   
    return (
        <div>
            <h1>Inscreva-se para uma viagem</h1>
            <StyleForm>
                <label htmlFor="name">Nome: </label>
                <input
                       id="name"
                       name="name"
                       type="name"
                       required
                       placeholder="seu nome"
                       value={body.name}
                       onChange={onChange}
                       pattern="[a-z]$"
                   />
                <label htmlFor="name">Idade: </label>
                <input
                       id="age"
                       name="age"
                       type="age"
                       required
                       placeholder="sua idade"
                       value={body.age}
                       onChange={onChange}
                       pattern="[18-99]$"
                   />
                <label htmlFor="name">Texto de Aplicação </label>
                <input
                       id="text"
                       name="text"
                       type="text"
                       required
                       placeholder="seu texto"
                       value={body.text}
                       onChange={onChange}
                       pattern=".^{50,}$"
                   />
                <label htmlFor="name">Profissão: </label>
                <input
                       id="prof"
                       name="prof"
                       type="prof"
                       required
                       placeholder="profissão"
                       value={body.prof}
                       onChange={onChange}
                       pattern=".^{50,}$"
                   />
                <label htmlFor="name">País: </label>
                <select
                       id="country"
                       name="country"
                       type="country"
                       required
                       value={body.country}
                       onChange={onChange}>
                        <option>Brasil</option>
                        <option>China</option>
                </select>
            </StyleForm>
            <button type="button" onClick={goToLast}>Voltar</button>
            <button type="button" onClick={alertCad}>Enviar</button>
        </div>
    )
}

export default ApplicationFormPage;