import React, { useState } from "react";
import { StylePrincipal } from "./style";

import AddUsers from "./components/AddUsers";
import ListUsers from "./components/ListUsers";

function App() {
  const [logado,setLogado]=useState(false)
  
  const SeletorPagina=()=>{
  
    if (logado===true){
        return(
            <AddUsers/>
        )
    }else{
        return(
            <ListUsers/>
        )
    }
    
}

  return (
    <StylePrincipal>
      <h1>CADASTRO DE USUÁRIO</h1>
      <AddUsers/>
      <ListUsers/>
      <button onClick={SeletorPagina}>Troca tela</button>    
    </StylePrincipal>
  );
}

export default App;
