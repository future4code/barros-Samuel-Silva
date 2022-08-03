import styled from "styled-components"

export const StylePrincipal=styled.div`
 display: grid;
 align-items: center;
 justify-items: center;
 justify-content: center;
 background-color: aliceblue;
 padding: 1vw;
 `
export const StyleTela1=styled.form`
 display: flex;
 align-items: center;
 background-color: aliceblue;
 padding: 1vw;
 width: 100%;
 gap: 1vw;
 `
export const StyleTela2=styled.div`
 display: grid;
 align-items: center;
 justify-items: center;
 justify-content: center;
 background-color: white;
 width: 100%;
 gap: 1vh;
 `

export const CardPost = styled.div`
display: flex;
flex-direction: column;
text-align: center;
margin: 0.5vw;
height: 1vh;
width: 10vw;
h3 {
    margin: 0.3vw 0;
}                                                                           
p {
    margin: 0 0 0.7vw 0;
}
button {
    background-color: greenyellow;
    border-radius: 5px;
    font-size: 1vw;
    width: 10vw;
    height: 2vw;
}
button:hover {
    background-color: green;
}
`
