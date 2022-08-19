import React from "react";
import Routers from "./Rotas/Routers";
import GlobalStyle from "./styles/global";
import { StyleFormDiv, Container } from "./style";


function App() {
  return (
    <Container>
      
        <Routers/>
        <GlobalStyle/>
      
    </Container>

  );
}
export default App;
