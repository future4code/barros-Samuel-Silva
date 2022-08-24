import React from "react";
import { BASE_URL } from "../constants/constants";
import axios from "axios";
import { useForm } from "../hooks/useForm"
import { useNavigate } from "react-router-dom";
import { StyleFormExt } from "../style";
import useProtectPage from "../hooks/useProtectPage";
import * as MyRouters from "../Rotas/Coodinator";

const CreateTripPage = () => {

    const [form, onChange, clear] = useForm({ name: "", planet: "", date: "", description: "", durationInDays: "" })

    useProtectPage()
    const navigate = useNavigate();

    const body = {
        "name": form.name,
        "planet": form.planet,
        "date": form.date,
        "description": form.description,
        "durationInDays": form.durationInDays
    }

    const createTrip = (event) => {
        event.preventDefault()
        axios.post(`${BASE_URL}`, body,
            {
                header: { auth: localStorage.getItem("token") }
            })
            .then((response) => {
                { MyRouters.goToList() };
                console.log(response.data);
            }).catch((error) => {
                alert("Erro ao criar viagem!")
                console.log("deu erro")
            })
        clear();
            console.log(body)
    }

    return (
        <StyleFormExt onSubmit={createTrip}>
            <h1>Criar viagem</h1>
            <label htmlFor="name">Nome: </label>
            <input
                id="name"
                name="name"
                type="text"
                required
                placeholder="seu nome"
                value={form.name}
                onChange={onChange}
                pattern="^.{5,}$"
            />
            <label htmlFor="planet">Planeta: </label>
           <select
                id="planet"
                name="planet"
                required
                value={form.planet}
                onChange={onChange}
            >
                <option value="Júpiter">Júpiter</option>
                <option value="Marte">Marte</option>
                <option value="Mercúrio">Mercúrio</option>
                <option value="Netuno">Netuno</option>
                <option value="Saturno">Saturno</option>
                <option value="Terra">Terra</option>
                <option value="Urano">Urano</option>
                <option value="Vênus">Vênus</option>
            </select>
            <label htmlFor="date">Data: </label>
            <input
                id="date"
                name="date"
                type="date"
                required
                value={form.date}
                onChange={onChange}
                pattern="^[0-31]{2}[/][0-12]{2}[/][2023-9999]{4}$"
            />
            <label htmlFor="description">Descrição: </label>
            <input id="description"
                name="description"
                type="text"
                required
                placeholder="digite seu texto"
                value={form.description}
                onChange={onChange}
                pattern="^.{30,}$"
            />
            <label htmlFor="durationInDays">Duração em dias: </label>
            <input id="durationInDays"
                name="durationInDays"
                type="number"
                required
                placeholder="duração em dias"
                value={form.durationInDays}
                onChange={onChange}
                min={50}
            />
            <button type="button" onClick={() => MyRouters.goToLast(navigate)}>Voltar</button>
            <button>Criar</button>
        </StyleFormExt>
    )
}

export default CreateTripPage;