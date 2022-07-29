import React, { useState } from 'react';
import { AddUser } from './components/AddUser';
import { ListUser } from './components/ListUser';
import { StylePrincipal } from './style';


function App() {

  const [pagina, setPagina] = useState("1")

  const paginaRenderizada = () => {
    switch (pagina){
      case "1":
        return <AddUser mudaPagina={mudaPagina}/>
      case "2": 
        return <ListUser mudaPagina={mudaPagina}/>
      default: 
        return <AddUser mudaPagina={mudaPagina}/>
    }
  }

 function mudaPagina(p){
    setPagina(p)
 }

  return (
    <StylePrincipal>
      {paginaRenderizada()}
     </StylePrincipal>
  );
}

export default App;
