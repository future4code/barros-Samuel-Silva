import React, { useState } from "react";
import { Container } from "./style";
import Choose from "./components/Choose";
import Matches from "./components/Matches";

function App(props) {

/////////////////////////////////////////////MUDA PAGINA/////////////////////////////////////////////

const [pagina, setPagina] = useState("1")

const paginaRenderizada = () => {
  switch (pagina){
    case "1":
      return <Choose mudaPagina={mudaPagina}/>
    case "2": 
      return <Matches mudaPagina={mudaPagina}/>
    default: 
      return <Choose mudaPagina={mudaPagina}/>
  }
}

//////////////////////////////////////////LIMPA MATCHES//////////////////////////////////////////////////////



function mudaPagina(p){
  setPagina(p)
}

  return (
    <Container>
      {paginaRenderizada()}
    </Container>
  );
}

export default App;
