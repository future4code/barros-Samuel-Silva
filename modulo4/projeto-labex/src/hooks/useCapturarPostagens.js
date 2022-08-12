import React,{useEffect, useState} from 'react'
import axios from "axios";

const useCapturarPostagens = (BASE_URL) => {
    
    const [postagens, setPostagens] = useState([])
    
    useEffect(() => {
        axios.get(`${BASE_URL}trips`).then(response =>{
          setPostagens(response.data)
        }).catch(error =>{
          console.log(error)
        })
      }, [])

    return (
      postagens
    )
}

export default useCapturarPostagens;