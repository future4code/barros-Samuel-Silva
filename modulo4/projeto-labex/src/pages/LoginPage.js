import React from "react";
import axios from "axios";
import { useForm } from "../hooks/useForm"
import { PostLogin_URL } from "../constants/constants"
import { useNavigate } from 'react-router-dom';
import { StyleLogin, StyleLoginExt } from "../style";
import * as MyRouters from "../Rotas/Coodinator";

const LoginPage = () => {

    const [form, onChange, clear] = useForm({ email: "", password: "" })

    const navigate = useNavigate()

    const fazerLogin = (event) => {
        event.preventDefault()

        axios.post(`${PostLogin_URL}`, form)
            .then((response) => {
                console.log(response.data)
                localStorage.setItem("token", response.data.token)
                MyRouters.goToAdmin(navigate)
            })
            .catch((error) => console.log(error.message))
        localStorage.removeItem("token")                                       //fazer logout
        clear();
    }
    return (
        <StyleLoginExt >
            <StyleLogin onSubmit={fazerLogin}>
                <h1>LOGIN</h1>
                <label htmlFor="email">E-mail: </label>
                <input
                    id="email"
                    name="email"
                    type="email"
                    placeholder="email@email.com.br"
                    value={form.email}
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
                    value={form.password}
                    onChange={onChange}
                    pattern="^.{3,}$"
                />
                <button>Login</button>
            </StyleLogin>
            <button type="button" onClick={() => MyRouters.goToHome(navigate)}>Voltar</button>
        </StyleLoginExt>
    )
}

export default LoginPage;