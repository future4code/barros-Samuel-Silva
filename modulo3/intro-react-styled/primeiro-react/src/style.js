import styled from "styled-components"

export const Titulo = styled.h1`
    color:red;
    font-size : 80px;
`

export const ComponenteTitulo = styled.div`
    display: flex;
    background-color: cyan;
    align-items: center;
`
export const CaixaDeSpan=styled.div`
    background-color: gray;
    height: 200px;
    width: 100%;
`
export const SpanV=styled.span`
    background-color: red;
    width: 100px;
    height: 100px;
`

export const SpanB=styled.span`
    background-color: white;
    width: 100px;
    height: 100px;
`
export const Imagem=styled.div`
    background-image: url(${(props)=>props.backImage});
    width: 200px;
    height: 200px;
`

export const Rodape=styled.footer`
    background: #333b3e;
    color: white;
    position: fixed;
    bottom: 0;
    width: 100%;
    display: flex;
    padding: 0 10px;
    p{                          //altera omente o <p> desse componente
        font-weight: bold;
        color: violet;
    }
`
export const Cabecalho=styled.header`
    background-color: orange;
 
`