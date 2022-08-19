import React, { useState } from "react";
import styled from "styled-components"
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { StyleForm } from "../style";
import { useForm } from "../hooks/useForm";
import  useCountry  from "../hooks/useCountry"
import { BASE_URL } from "../constants/constants";
import * as MyRouters from "../Rotas/Coodinator";

//////////////////////////////////////////////////////////////////////////////////////////////////////////

const ApplicationFormPage = () => {
    
    const navigate = useNavigate();
    const [formulario,setFormulario] = useState({});

   // useEffect(()=>{ApplicationFormPage()},[]);
       
//////////////////////////////////////////////////////////////////////////////////////////////////////////

    const [body, id, onChange, clear]=useForm({ email: "", password: ""})
    const myHeaders = {headers: {"Content-Type": "application/json"}};
    const myBody = {body: {"Content-Type": "application/json"}};
 

    const applyTrip = (event) => {
        event.preventDefault()
        axios.post('${BASE_URL})/trip/${id}',
        {headers:{ auth: localStorage.getItem("token")}
        })
        .then ((response)=>{
            console.log(response.data)
            setFormulario(response.data)
            MyRouters.goToList(navigate)
        })
        .catch((er)=>{
            alert(er.response.data.message)
        })
        clear();
    }

    console.log(formulario)
    
   
//////////////////////////////////////////////////////////////////////////////////////////////////////////

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
                        <option >PAIS</option>
                </select>
            </StyleForm>
            <button onClick={()=>MyRouters.goToLast(navigate)}>Voltar</button>
            <button onClick={applyTrip}>Enviar</button>
        </div>
    )
}

export default ApplicationFormPage;