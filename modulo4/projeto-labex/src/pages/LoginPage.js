import React, { useState } from "react";
import axios from "axios";
import { useForm } from "../hooks/useForm"
import { PostLogin_URL } from "../constants/constants"
import { useNavigate } from 'react-router-dom';
import { StyleFormLogin, StyleForm } from "../style";


const LoginPage = () => {

  const [body,onChange,clear]=useForm({ email: "", password: ""})
   
    const fazerLogin = (event) => {
        event.preventDefault()
        axios.post(`${PostLogin_URL}`, body).
        then((response)=>{
            {goToAdmin()};
            console.log(response.data);
        }).catch((error)=>{
            console.log("deu erro")
        })
        clear();
        
    }

    const navigate = useNavigate();

    const goToHome = () => {
        navigate("/")
    }

    const goToAdmin = () => {
        navigate("/Admin")
    }


    return (
        <StyleFormLogin  onSubmit={fazerLogin} >
            <h1>LOGIN</h1>
         
                <label htmlFor="email">E-mail: </label>
                <input
                    id="email"
                    name="email"
                    type="email"
                    placeholder="email@email.com.br"
                    value={body.email}
                    onChange={onChange}
                    required
                    pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"
                />
                <label htmlFor="password">Senha: </label>
                <input
                    id="password"
                    name="password"
                    type="password"
                    required
                    placeholder="******"
                    value={body.password}
                    onChange={onChange}
                    pattern="^.{3,}"
                />
               
                <button>Login</button>
                <button type="button" onClick={ goToHome }>Voltar</button>
        </StyleFormLogin>
        
    )
}

export default LoginPage;