import React from 'react';
import './style';
import Cabecalho from './components/Cabecalho';
import Conteudo from './components/Conteudo';
import Rodape from './components/Rodape';
// import {MyImage} from './style';
// import logo from './Labenu.png';

function App() {
  return (
    <div>
      {/* <MyImage backImage={logo}/> */}
      <Cabecalho/>
      <Conteudo/>
      <Rodape/>
    </div>
  )
}
export default App;
