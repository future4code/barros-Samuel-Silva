import React, { useState } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import { StyleFormExt } from "../style";
import { useForm } from "../hooks/useForm";
import useRequestCountry from "../hooks/useRequestCountry"
import { BASE_URL, BASE_URL_COUNTRY } from "../constants/constants";
import * as MyRouters from "../Rotas/Coodinator";

    // useEffect(()=>{ApplicationFormPage()},[]);

    const ApplicationFormPage = () => {

    const navigate = useNavigate();

    const pathParams = useParams()

    const [country, setCountry] = useState("");

    const [body, onChange, clear, id] = useForm({ name: "", age: "", applicationText: "", profession: "", country: "", })

    const [paises] = useRequestCountry(`${BASE_URL_COUNTRY}`);

    //////////////////////////////////////////////////////////////////POST CANDIDATES

    const applyTrip = (event) => {
        event.preventDefault()
        axios.post(`${BASE_URL}${pathParams.id}/apply`,
            {
                headers: { auth: localStorage.getItem("token") }
            })
            .then((response) => {
                console.log(response.data)
                // setFormulario(response.data)
                MyRouters.goToList(navigate)
            })
            .catch((er) => {
                alert(er.response.data.message)
            })
        clear();
    }

    /////////////////////////////////////////////////////////////////SELECT PAISES - CONTRIBUIÇÃO: BYRON

    const CountryList = paises && paises.map((item, index) => {
        return (
            <option key={index}
                value={item.nome.abreviado}>
                {item.nome.abreviado}
            </option>
        );
    });

    const GetCountry = (event) => {
        event.preventDefault();
        setCountry(event.target.value);
    };

    //////////////////////////////////////////////////////////////////////////////////////////////////////////

    return (
        <StyleFormExt onSubmit={applyTrip}>
            <h1>Inscreva-se para uma viagem</h1>
            <button onClick={() => MyRouters.goToLast(navigate)}>Voltar</button>
            <label htmlFor="name">Nome: </label>
            <input
                id="name"
                name="name"
                type="text"
                required
                placeholder="seu nome"
                value={body.name}
                onChange={onChange}
                pattern="^.{3,}$"
            />
            <label htmlFor="age">Idade: </label>
            <input
                id="age"
                name="age"
                type="number"
                required
                placeholder="sua idade"
                value={body.age}
                onChange={onChange}
                min={18}
            />
            <label htmlFor="text">Texto de Aplicação </label>
            <input
                id="applicationText"
                name="applicationText"
                type="text"
                required
                placeholder="seu texto"
                value={body.applicationText}
                onChange={onChange}
                pattern="^.{50,}$"
            />
            <label htmlFor="prof">Profissão: </label>
            <input
                id="profession"
                name="profession"
                type="text"
                required
                placeholder="profissão"
                value={body.profession}
                onChange={onChange}
                pattern="^.{5,}$"
            />
            <label htmlFor="country">País: </label>
            <select
                id="country"
                name="country"
                type="text"
                required
                onChange={GetCountry}>
                <option value="">país</option>
                {CountryList}
            </select>
            <button >Enviar</button>
        </StyleFormExt>
    )
}

export default ApplicationFormPage;