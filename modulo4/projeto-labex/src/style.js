import styled from "styled-components";
import background from "../src/img/fundo.jpg"

export const Container = styled.body`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    background-image:url(${background});
    background-size: cover;
    color: whitesmoke;
    height: 1000px;
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
//////////////////////////////////////////////////////////////////////////////////// HOME - ok
export const StyleHome = styled.div`    
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;
    height: 500px;
    margin: 0 auto;
    h1{
        font-style: italic;
        font-size: xxx-large;
        font-family: monospace;
    }
   
`
export const StyleHomeExt = styled.div`  
text-align:center ;
button{
        background-color: #7c1c17;
        font-size: large;
        color: whitesmoke;
        border-radius: 20px;
        width: 200px;
        padding: 3px;
        margin: 10px;
    }
    button:hover {
       box-shadow:  0 0 2px 2px;
    }           
`
///////////////////////////////////////////////////////////////////////////////// PAINEL ADMIN - ok

export const StyleAdmin = styled.div`  
    text-align: center;
    button:nth-child(2){
        background-color: #7c1c17;
        color: whitesmoke;
        border-radius: 20px;
        width: 100px;
    }
    button:nth-child(3){
        background-color: #7c1c17;
        color: whitesmoke;
        border-radius: 20px;
        width: 100px;
    }
    h1{
        font-style: italic;
        font-size: xxx-large;
        font-family: monospace;
    }
 `
export const StyleListAdmin = styled.ul`  
    text-align: center;
    border-radius: 20px;
    box-shadow: 2px 2px 2px 2px;
   
`
/////////////////////////////////////////////////////////////////////////////// DETALHES

export const StyleTrip = styled.div`    
    display: grid;
    justify-content: space-around;
    gap: 2vh;
    padding: 2vh;
`
export const StyleTripCand = styled.div`    
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    text-align: center;
    border-radius: 20px;
    box-shadow: 2px 2px 2px 2px;
    button{
        background-color: #7c1c17;
        color: whitesmoke;
        border-radius: 20px;
        width: 80px;
        padding: 2px;
        margin: 5px;
    }
    button:hover {
       box-shadow:  0 0 2px 2px;
    }
`
export const StyleTripExt = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 90%;
    justify-content: space-around;
    h1{
        font-style: italic;
        font-size: xxx-large;
        font-family: monospace;
    }
`


    ///////////////////////////////////////////////////////////////CRIAR VIAGEM & INSCREVA-SE -ok
export const StyleForm = styled.form`  
   margin: auto;
   height: 600px;
`
export const StyleFormExt = styled.form`   
    margin-top: 20px;
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 900px;
    input{
        width: 500px;
        height: 30px;
        border-radius: 20px;
        text-align: center;
        margin: 20px;
    }      
    select{
        width: 500px;
        height: 30px;
        border-radius: 20px;
        text-align: center;
        margin: 20px;
    }      
    button{
        background-color: #7c1c17;
        font-size: large;
        color: whitesmoke;
        border-radius: 20px;
        width: 200px;
        padding: 3px;
        margin: 20px;
    }
    button:hover {
       box-shadow:  0 0 2px 2px;
    }      
    h1{
        font-style: italic;
        font-size: xxx-large;
        font-family: monospace;
    }
`

///////////////////////////////////////////////////////////////////////////////////LOGIN - ok
export const StyleLogin = styled.form`    
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;
    height: 400px;
    margin: 0 auto;
    h1{
        font-style: italic;
        font-size: xxx-large;
        font-family: monospace;
    }
   
`
export const StyleLoginExt = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    
    button{
        background-color: #7c1c17;
        font-size: large;
        color: whitesmoke;
        border-radius: 20px;
        width: 200px;
        padding: 3px;
        margin: 10px;
    }
    button:hover {
       box-shadow:  0 0 2px 2px;
    }      
    input{
        width: 500px;
        height: 30px;
        border-radius: 20px;
        text-align: center;
        margin: 20px;
    }      
`
///////////////////////////////////////////////////////////////////////////////////TRIPLIST - ok
export const StyleList = styled.div`    
    display: grid;
    grid-template-columns: 1fr 1fr;
    margin: 2vh;
    text-align: center;
    box-shadow: 2px 2px 2px 2px;
    border-radius: 20px;
    gap: 2vh;
    padding: 2vh;
`
export const StyleListExt = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 90%;
    margin-top: 20px;
    button{
        background-color: #7c1c17;
        font-size: large;
        color: whitesmoke;
        border-radius: 20px;
        width: 200px;
        padding: 3px;
        margin: 10px;
    }
    button:hover {
       box-shadow:  0 0 2px 2px;
    }      
`