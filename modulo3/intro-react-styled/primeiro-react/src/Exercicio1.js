import React from "react";
import{CaixaDeSpan,Imagem,SpanB,SpanV} from "./style";



export function Exercicio1(){
    return(
        <CaixaDeSpan>
            <SpanV>
                Sou Vermelho
            </SpanV>
            <SpanB>
                Sou Branco
            </SpanB>
            <Imagem backImage={Imagem}/>
        </CaixaDeSpan>
    )
}