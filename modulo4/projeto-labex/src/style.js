import styled from "styled-components";
import background from "../src/img/fundo.jpg"

export const Container=styled.div`
   // background-image:url(${background});
   // background-size: contain ;
   // opacity: 0.8;
    height: 100vh;
    text-align: center;
    padding: 1vw;
    z-index: auto;
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
  // background-color: whitesmoke;
   // opacity: 0.5;
    gap: 2vh;
    justify-content: center;
    margin: auto;
    margin-top: 2vw;
    align-items: center;
    button{
        margin: 2vw;
        padding: 0.3vw;
    }
    input{
        width: 30vw;
        background-color: antiquewhite;
        border-radius: 5px;
    }
`
export const StyleForm=styled.form`
    display: flex;
    flex-wrap: wrap;
    flex-direction: column;
    height: 50vh;
    width: 50vw;
    border-radius: 20px;
    box-shadow: 2px 2px 2px 2px;
    gap: 2vh;
    justify-content: center;
    margin: auto;
    margin-top: 2vw;
    align-items: center;
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
export const StyleFormDiv=styled.div`
    flex-direction: column;
    height: 50vh;
    width: 50vw;
    gap: 2vh;
    justify-content: center;
    text-align: center;
    margin: auto;
    margin-top: 2vw;
    align-items: center;
    
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
    height: 30vh;
    width: 30vw;
    border-radius: 20px;
    box-shadow: 2px 2px 2px 2px;
    gap: 2vh;
    justify-content: center;
    margin: auto;
    margin-top: 2vw;
    align-items: center;
    button{
        margin: 2vw;
        padding: 0.3vw;
    }
    input{
        width: 20vw;
        background-color: whitesmoke;
        border-radius: 5px;
        margin: 1vw 0 1vw 0;
        height: 3vh;
    }
    select{
        width: 30vw;
        background-color: whitesmoke;
        border-radius: 5px;
    }
`