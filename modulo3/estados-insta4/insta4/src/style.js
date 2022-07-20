import styled from "styled-components";

export const MainContainer = styled.div`
    display: flex;
    justify-content:center;
    flex-direction:column;
    align-items:center;

    box-shadow: 0.5vw 0.1vw 0.5vw;
   `
export const DivContainer = styled.div`
    display: flex;
    justify-content:center;
    flex-direction:column;
    align-items:center;
    box-shadow: 0.5vw 0.5vw 1vw;
    margin: 2vw;
        button{
             margin: 0.5vw;
             width: 5vw;
        }
`
export const MyForm=styled.form`
    display:flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-top:20px;
    width: 100%;
    input{
        width: 20vw;
        margin-bottom: 1vw;
    }
    button{
        margin: 0.5vw;
        width: 5vw;
`