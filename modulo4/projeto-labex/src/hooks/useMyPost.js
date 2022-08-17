import axios from "axios";

export function useMyPost(url,body){
    return axios.post(url, body).
    then((response)=>{
        console.log(response.data);
    }).catch((error)=>{
        console.log("deu erro")
    }) 
}