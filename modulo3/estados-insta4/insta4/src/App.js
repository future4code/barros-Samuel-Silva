import React from 'react';
import Post from './components/Post/Post';
import './style.css'
import { MainContainer, DivContainer } from './style';

const arrayPosts = [
  { nomeUsuario: "Luciene", fotoUsuario: 'https://picsum.photos/50/50', fotoPost: 'https://picsum.photos/200/150' },
  { nomeUsuario: "jhony", fotoUsuario:'https://picsum.photos/60/60' , fotoPost:'https://picsum.photos/200/160' },
  { nomeUsuario: "marcela", fotoUsuario: 'https://picsum.photos/70/70', fotoPost:'https://picsum.photos/200/170'}
]

const postMap = arrayPosts.map((element, index) => {
  return (
    <DivContainer key={index}><Post 
      nomeUsuario={element.nomeUsuario}
      fotoUsuario={element.fotoUsuario}
      fotoPost={element.fotoPost}/>
    </DivContainer>
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
