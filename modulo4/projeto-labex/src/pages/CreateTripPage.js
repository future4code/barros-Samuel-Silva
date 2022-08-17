import React from "react";
import { PostCreateTrip_URL } from "../constants/constants";
import axios from "axios";
import { useForm } from "../hooks/useForm"
import { useNavigate } from "react-router-dom";
import { StyleFormDiv, StyleForm } from "../style";

const CreateTripPage = () => {

    const [body,onChange,clear]=useForm({ email: "", password: ""})

    const createTrip = (event) => {
        event.preventDefault()
        axios.post(`${PostCreateTrip_URL}`, body).
        then((response)=>{
            {goToList()};
            console.log(response.data);
        }).catch((error)=>{
            console.log("deu erro")
        })
        clear();
        
    }
    const navigate = useNavigate();

    const goToLast = () => {
        navigate(-1)
    }

    const goToList = () => {
        navigate("/Lista")
    }


    return (
        <StyleForm onSubmit={createTrip}>
            <h1>Criar viagem</h1>
                <label htmlFor="name">Nome: </label>
                <input
                    id="name"
                    name="name"
                    type="name"
                    required
                    placeholder="nome"
                    value={body.name}
                    onChange={onChange}
                    pattern="[a-zA-Z]{5,}"
                />
                <label htmlFor="name">Planeta: </label>
                <select 
                id="planets"
                name="planets" 
                type="planets"
                required
                value={body.name}
                onChange={onChange}
                >
                    <option value="Júpiter">Júpiter</option>
                    <option value="Marte">Marte</option>
                    <option value="Mercúrio">Mercúrio</option>
                    <option value="Netuno">Netuno</option>
                    <option value="Saturno">Saturno</option>
                    <option value="Terra" selected="selected">Terra</option>
                    <option value="Urano">Urano</option>
                    <option value="Vênus">Vênus</option>
                </select>
                <label htmlFor="name">Data: </label>
                <input
                       id="date"
                       name="date"
                       type="date"
                       required
                       placeholder="date"
                       value={body.date}
                       onChange={onChange}
                       pattern="^[0-31]{2}[/][0-12]{2}[/][2023-9999]{4}$"
                   />
                <label htmlFor="name">Descrição: </label>
                <input id="description"
                       name="description"
                       type="description"
                       required
                       placeholder="description"
                       value={body.description}
                       onChange={onChange}
                       pattern="[a-zA-Z]{30,}"
                    />
                <label htmlFor="name">Duração em dias: </label>
                <input id="duration"
                       name="duration"
                       type="duration"
                       required
                       placeholder="duration"
                       value={body.duration}
                       onChange={onChange}
                       pattern="[5-9]{1}[0-9]{1}"
                    />
            <button type="button" onClick={goToLast}>Voltar</button>
            <button>Criar</button>
        </StyleForm>
    )
}

export default CreateTripPage;