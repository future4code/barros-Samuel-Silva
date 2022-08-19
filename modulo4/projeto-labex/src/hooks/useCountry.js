import React,{useEffect, useState} from 'react'
import axios from "axios";
import { GetCountry_URL } from '../constants/constants';

const useCountry = (GetCountry_URL) => {

    const [pais, setPais] = useState([])
	useEffect(() => {
        axios.get(`${GetCountry_URL}`).then(response =>{
          setPais(response.data)
        }).catch(error =>{
          console.log(error)
        })
      }, [])

    return (
      pais
    )
}

export default useCountry;
