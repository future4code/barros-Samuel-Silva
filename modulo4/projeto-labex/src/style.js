import styled from "styled-components";
import background from "../src/img/fundo.jpg"


export const Container=styled.div`
    text-align: center;
    padding: 1vw;
    img{
        position: relative;
        height: cover;
        width: cover;
        
    }
    
`
export const StyleDiv=styled.div`
    display: flex;
    flex-wrap: wrap;
    flex-direction: column;
    justify-content: space-around;
    height: 50vh;
    width: 50vw;
    border-radius: 20px;
    box-shadow: 2px 2px 2px 2px;
    margin-bottom: 2vh;
    justify-content: center;
    align-items: center;
    color: #7A1E13;
    button{
        margin: 2vw;
        padding: 0.3vw;
    }
    input{
        width: 30vw;
        background-color: #7c1c17;
        border-radius: 5px;
    }
`
export const StyleForm=styled.form`
    display: flex;
    flex-wrap: wrap;
    flex-direction: column;
    height: 70vh;
    border-radius: 20px;
    box-shadow: 2px 2px 2px 2px;
    gap: 2vh;
    justify-content: center;
    margin-top: 2vw;
    align-items: center;
    color: #7A1E13;
    button{
        margin: 2vw;
        padding: 0.3vw;
    }
    input{
        width: 30vw;
        background-color: whitesmoke;
        border-radius: 5px;
        text-align: center;
    }
    select{
        width: 30vw;
        background-color: whitesmoke;
        border-radius: 5px;
        text-align: center;
    }
`
export const StyleFormDiv=styled.div`  //Lista de Viagem, 
    flex-direction: column;
    height: 50vh;
    width: 50vw;
    gap: 2vh;
    justify-content: center;
    text-align: center;
    margin: auto;
    margin-top: 2vw;
    align-items: center;
    color: #7A1E13;
    button{
        margin: 2vw;
        padding: 0.3vw;
    }
    input{
        width: 30vw;
        background-color: whitesmoke;
        border-radius: 5px;
    }
    select{
        width: 30vw;
        background-color: whitesmoke;
        border-radius: 5px;
    }
    
`
export const StyleList=styled.ul`
    text-align: start;
    padding: 2vw;
    font-family: 'Franklin Gothic Medium';
    border-radius: 20px;
    margin-top: 2vh;
    box-shadow: 2px 2px 2px 2px;
    
    `
export const StyleFormLogin=styled.form`
    display: flex;
    flex-wrap: wrap;
    flex-direction: column;
    height: 50vh;
    border-radius: 20px;
    box-shadow: 2px 2px 2px 2px;
    gap: 2vh;
    justify-content: center;
    margin-top: 2vw;
    align-items: center;
    color: #7A1E13;
    button{
        margin: 2vw;
        padding: 0.3vw;
    }
    input{
        width: 30vw;
        background-color: whitesmoke;
        border-radius: 5px;
        text-align: center;
    }
    select{
        width: 30vw;
        background-color: whitesmoke;
        border-radius: 5px;
        text-align: center;
    }
`