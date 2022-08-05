import styled from "styled-components"
import background from "./img/fundo.jpg"

export const Header=styled.div`
    display: flex;
    align-items: center;
    height: 4vw;
    justify-content: space-around;
    background:linear-gradient(#7B4595,white,#419C8D);
        button {
            margin: 0.5vw;
            background-color: #7B4595;
            color: white;
            padding: 0.5vw;
            border-radius: 0.5vw ;
    }
`
//////////////////////////////////////////////////////////////////////////////////// CONTAINER
export const Container=styled.div`
    background-image:url(${background});
    background-size: cover;
     max-height: 100%;
    text-align: center;
    padding: 1vw;
`
//////////////////////////////////////////////////////////////////////////////////// FOOTER
export const Footer=styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 2vw;
    margin: 2vw;
    height: 4vw;
    
    background:linear-gradient(#7B4595,white,#419C8D);
    img {
        height: 3vw;
        
    }
        img:hover {
            height: 3.5vw;
            background-color: aliceblue;
            padding: 0.2vw;
        }
    button {
            margin: 0.5vw;
            background-color: #419C8D;
            color: white;
            padding: 0.5vw;
            border-radius: 0.5vw ;
    }
    
 `
//////////////////////////////////////////////////////////////////////////////////// LISTA DE MATCHES
export const TelaMatches=styled.div`
    display: flex;
    align-items: center;
    justify-content: space-around;
    button {
        font-size: large;
        background-color: #419C8D;
        color: white;
        padding: 0.5vw;
        border-radius: 0.5vw ;
        width: 5vw;
    }

    img {
        height: 5vw;
        width: 5vw;
        border-radius: 5vw;
        border: solid orange 2px;
    } 
 `
//////////////////////////////////////////////////////////////////////////////////// CARD
export const CardPost = styled.div`
    
button {
    margin: 0.5vw;
    background-color: #419C8D;
    color: white;
    padding: 0.5vw;
    border-radius: 0.5vw ;
}
img {
    height: 20vw;
    width: 15vw;
    box-shadow: 5px 5px 5px 5px;
    border-radius: 3vw;
    margin: 2vw;

}

h3 {
    margin: 0.3vw 0;
    font-family: monospace;
    font-size: xx-large;
}                                                                           
p {
    background:linear-gradient(white, pink ) ;
    font-size: larger;
    font-style: italic;
    font-family: cursive;
    
}
`
