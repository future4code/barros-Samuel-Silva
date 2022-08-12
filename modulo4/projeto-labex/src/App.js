import React from "react";
import Routers from "./pages/Routers";
import GlobalStyle from "./styles/global";
import { StyleFormDiv, Container } from "./style";


function App() {
  return (
    <Container>
      <StyleFormDiv>
        <Routers/>
        <GlobalStyle/>
        </StyleFormDiv>
    </Container>
    
  );
}

export default App;
