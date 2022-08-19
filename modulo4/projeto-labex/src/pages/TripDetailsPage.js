import React, { useEffect, useState } from "react";
import styled from "styled-components"
import axios from "axios";
import { StyleDateils } from "../style";
import * as MyRouters from "../Rotas/Coodinator";
import { useNavigate } from "react-router-dom";
import useProtectPage from "../hooks/useProtectPage";
import BASE_URL from "../constants/constants";

const TripDetailsPage = () => {

    useProtectPage();
    const navigate=useNavigate();
    const [details,setDetails] = useState({});

    

        ////////////////////////////////////////////////REQUISIÇÃO

    const getTripDetails = (id)=>{

        axios.get('${BASE_URL})/trip/${id}',
        {headers:{ auth: localStorage.getItem("token")}
        })
        .then ((response)=>{
            console.log(response.data)
            setDetails(response.data)
            MyRouters.goToList(navigate)
        })
        .catch((er)=>{
            alert(er.response.data.message)
        })
    }

    console.log(details)
    useEffect(()=>{TripDetailsPage()},[])
    
    return (
        <StyleDateils>
            <p>Teste</p>
            <button onClick={()=>MyRouters.goToLast(navigate)}>Voltar</button>
            <p>Canditados Pendentes</p>
            <ul>
                <li>
                    <p>Astrodev</p>
                    <button>Aprovar</button>
                    <button>Reprovar</button>
                </li>
            </ul>
            <ul>
                <li>

                </li>
            </ul>
        </StyleDateils>
    )
}

export default TripDetailsPage;