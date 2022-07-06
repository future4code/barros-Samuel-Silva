import React from 'react';
import Post from './components/Post/Post';
import './style.css'
import { MainContainer } from './style';

const photoOne = <img src='https://picsum.photos/50/50' alt='Foto Usuario'/>
const photoOnePost = <img src='https://picsum.photos/200/150' alt='Foto Post'/>
const photoTwo = <img src='https://picsum.photos/60/60' alt='Foto Usuario'/>
const photoTwoPost = <img src='https://picsum.photos/200/160' alt='Foto Post'/>
const photoThree = <img src='https://picsum.photos/70/70' alt='Foto Usuario'/>
const photoThreePost = <img src='https://picsum.photos/200/170' alt='Foto Post'/>

const arrayPosts = [
  { nomeUsuario: "Luciene", fotoUsuario: photoOne, fotoPost: photoOnePost },
  { nomeUsuario: "jhony", fotoUsuario: photoTwo, fotoPost: photoTwoPost },
  { nomeUsuario: "marcela", fotoUsuario: photoThree, fotoPost: photoThreePost }
]

let postMap = arrayPosts.map((element, index) => {
  return (
    <MainContainer key={index}>
      <p>{element.nomeUsuario}</p>
      <p>{element.fotoUsuario}</p>
      <p>{element.fotoPost}</p>
    </MainContainer>
  )
})
console.log([arrayPosts]);

function App() {
  return (
    <MainContainer>
      <h1>Insta4</h1>
      <p>{postMap}</p>
    </MainContainer>
  )
}

export default App;
