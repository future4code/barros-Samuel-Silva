import React from 'react';
import { ConteudoCab, Titulo } from '../style';
import {MyImage} from '../style';
import logo from '../Labenu.png';

function Cabecalho () {
    return (
        <ConteudoCab>
            <MyImage backImage={logo}/>
            <Titulo> LabZap</Titulo>
        </ConteudoCab>
    )
}

export default Cabecalho;
