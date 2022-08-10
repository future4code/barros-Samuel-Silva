import React from "react";
import styled from "styled-components"
import axios from "axios";
import Routers from "./pages/Routers";
import global from "./styles/global";
import GlobalStyle from "./styles/global";
import { StyleFormDiv } from "./style";

function App() {
  return (
    <StyleFormDiv>
        <Routers/>
        <GlobalStyle/>
    </StyleFormDiv>
  );
}

export default App;
