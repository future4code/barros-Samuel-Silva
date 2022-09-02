import styled from "styled-components"
import background from "./img/fundo.jpg"

export const Header=styled.div`
    display: flex;
    align-items: center;
    height: 4vw;
    justify-content: space-around;
    background:linear-gradient(#7B4595,white,#419C8D);
        button {
            background-color: #7B4595;
            color: white;
            padding: 0.5vw;
            border-radius: 0.5vw ;
        }
        button:hover{
            background-color: #A682B8;
}   
`
//////////////////////////////////////////////////////////////////////////////////// CONTAINER
export const Container=styled.div`
    background-image:url(${background});
    background-size: cover;
    height: 100vh;
    text-align: center;
    padding: 1vw;
    img {
        height: 3vw;
        
    }
`
//////////////////////////////////////////////////////////////////////////////////// FOOTER
export const Footer=styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 2vw;
    margin-bottom: 1vw;
    height: 4vw;
    width: 98%;
    position: absolute;
    bottom: 0;
    border-bottom: solid 2px;
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
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    flex-wrap: wrap;
    align-items: center;
    justify-content: space-around;
    font-size: larger;
    
    button {
        font-size: large;
        background-color: #419C8D;
        color: white;
        padding: 0.5vw;
        border-radius: 0.5vw ;
        width: 5vw;
        
    }

    img {
        height: 8vw;
        width: 8vw;
        border-radius: 5vw;
        border: solid orange 2px;
        object-fit: scale-down;
        background: whitesmoke;
    } 

    p {
        background:linear-gradient(gray,white,#419C8D);
        padding: 0.2vw;
        font-weight: bold;
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
    object-fit: contain;
    background-color:#F9C7D2 ;
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
