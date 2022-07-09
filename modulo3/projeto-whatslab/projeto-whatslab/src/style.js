
import styled from "styled-components";

export const StyleContent = styled.div`
   display: flex;
   flex-wrap: wrap;
   align-content: flex-end;
   height:40vw;
   width :40vw;
   box-shadow: 0.5vw 1vw 1vw;
   margin-left: 30vw;
   margin-top: 2vw;
   background-color: #f1e8c7;
   div:nth-child(1){                //DIV das mensagens
    display: grid;
    align-items: flex-end;
    margin-left: 1vw;
    grid-template-rows: 1fr;
    }
    div:nth-child(2){               //DIV dos inputs
    display: flex;
    align-items: flex-end;
    align-items: center;
    grid-template-rows: 1fr;
    margin-left: 2vw;
    }
   input {
        margin: 0.3vw;
    }
    button {
        width: 5vw;
    }
     `

export const Chat = styled.span`
    display: flex;
    flex-direction: column ;
    padding: 2px;
    max-width: 10vw;
    max-height: 6vw;
    margin: 0.4vw 0vw 0.4vw 1.3vw;
    box-shadow: 0.2vw 0.2vw 0.2vw;
    background-color: rgb(202, 219, 177);
    font-family: Arial, Helvetica, sans-serif;
    span:nth-child(1){
        font-weight: bold;
        font-size: x-small;
        color: gray;
    }
 
 `
