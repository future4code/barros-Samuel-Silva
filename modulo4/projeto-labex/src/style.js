import styled from "styled-components";
import background from "../src/img/fundo.jpg"

export const Container = styled.body`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    background-image:url(${background});
    background-size: cover;
    color: whitesmoke;
   
    img{
        margin: 2vh;
    }
    button{
        background-color: #7c1c17;
        color: whitesmoke;
        border-radius: 20px;
        width: 15vw;
        padding: 0.5vw;
        margin: 2vw;
    }
    button:hover {
       box-shadow:  0 0 2px 2px;
    }    
`
//////////////////////////////////////////////////////////////////////////////////// Home page
export const StyleHome = styled.div`    
    display: flex;
    flex-direction: column;
    height: 100vh;
    margin: 0 auto;
    h1{
        font-style: italic;
        font-size: xxx-large;
        font-family: monospace;
    }   
`
///////////////////////////////////////////////////////////////////////////////// Painel Admin

export const StyleAdmin = styled.div`  
    flex-direction: column;
    text-align: center;
    color: whitesmoke;
    
    button{
        background-color: #7c1c17;
        color: whitesmoke;
        border-radius: 20px;
        min-width: 10vw;
        padding: 0.5vw;
        margin: 2vw;
    }
    input{
        width: 30vw;
        background-color: #7c1c17;
        border-radius: 5px;
    }
`
export const StyleList = styled.ul`   
   display: grid;
   justify-items: center;
   width: 60vw;
   padding: 1vw;
    font-family: 'Franklin Gothic Medium';
    border-radius: 20px;
    margin-top: 0.8vw;
    box-shadow: 2px 2px 2px 2px;
    button{
        width: 10vh;
    }
    
`
////////////////////////////////////////////////////////////////////Detalhes

export const StyleDateils = styled.div`  
    display: flex;
    background-color: #7c1c17;
    flex-direction: column;
    justify-content: space-around;
    height: 50vh;
    width: 50vw;
    margin-bottom: 2vh;
    align-items: center;
    color: whitesmoke;
    button{
        background-color: #7c1c17;
        color: whitesmoke;
        border-radius: 20px;
        min-width: 10vw;
        padding: 0.5vw;
        margin: 2vw;
    }
    input{
        width: 30vw;
        background-color: #7c1c17;
        border-radius: 5px;
    }
    `
    ////////////////////////////////////////////////////////////////////////INSCREVA-SE 

export const StyleForm = styled.form`  
    display: flex;
    flex-wrap: wrap;
    flex-direction: column;
    height: 100vh;
    border-radius: 20px;
    box-shadow: 2px 2px 2px 2px;
    gap: 2vh;
    justify-content: center;
    margin-top: 2vw;
    align-items: center;
    
    button{
        background-color: #7c1c17;
        color: whitesmoke;
        border-radius: 20px;
        min-width: 10vw;
        padding: 0.5vw;
        margin: 2vw;
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
export const StyleFormDiv = styled.div`  //Lista de Viagem, 
    flex-direction: column;
    height: 50vh;
    width: 50vw;
    gap: 2vh;
    justify-content: center;
    text-align: center;
    margin: auto;
    margin-top: 2vw;
    align-items: center;
    color: whitesmoke;
    
    button{
        background-color: #7c1c17;
        color: whitesmoke;
        border-radius: 20px;
        min-width: 10vw;
        padding: 0.5vw;
        margin: 2vw;
    }
    input{
        min-width: 30vw;
        min-height: 5vh;
        background-color: whitesmoke;
        border-radius: 8px;
        text-align: center;
    }
    select{
        min-width: 30vw;
        min-height: 5vh;
        background-color: whitesmoke;
        border-radius: 8px;
        text-align: center;
    }
    h1{
        font-style: italic;
        font-size: xxx-large;
        font-family: monospace;
    }   
`

export const StyleListDiv = styled.div`
    button{
        background-color: #7c1c17;
        color: whitesmoke;
        border-radius: 20px;
        min-width: 10vw;
        padding: 0.5vw;
        margin: 2vw;
    }
    h1{
        font-style: italic;
        font-size: xxx-large;
        font-family: monospace;
    }   
`
////////////////////////////////////////////////login///////////////////////////////////

export const StyleLogin = styled.form`     
    display: flex;
    flex-direction: column;
    align-items: center;
    height: 100vh;
    margin: 0 auto;
    
 
    h1{
        font-style: italic;
        font-size: xxx-large;
        font-family: monospace;
    }   
    button{
        background-color: #7c1c17;
        color: whitesmoke;
        border-radius: 20px;
        width: 15vw;
        padding: 0.5vw;
        margin: 2vw;
    }
    input{
        min-width: 30vw;
        min-height: 5vh;
        background-color: whitesmoke;
        border-radius: 8px;
        text-align: center;
        margin: 2vh;
    }
`


//////////////////////////////////////////////////////////////////////////////////