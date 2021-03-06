import React from 'react';
import { useState } from 'react';
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

import { MainContainer, DivContainer, MyForm } from './style';

function App() {

  const [arrayPosts,setArrayPosts]=useState ([
    { nomeUsuario: "Mary", fotoUsuario: 'https://picsum.photos/50/50', fotoPost: 'https://picsum.photos/200/150' },
    { nomeUsuario: "jhony", fotoUsuario:'https://picsum.photos/60/60' , fotoPost:'https://picsum.photos/200/160' }, //ARRAY ACEITANDO MODIFICAÇÕES
    { nomeUsuario: "marcela", fotoUsuario:'https://picsum.photos/70/70', fotoPost:'https://picsum.photos/200/170'}
  ])

const [inputName,setInputname]=useState("");
const [inputPhotoUser,setInputPhotoUser]=useState("");       //VARIAVEIS DOS INPUTS ACEITANDO MODIFICAÇÕES
const [inputPhotoPost,setInputPhotoPost]=useState("");

const changeName=(event)=>{
  setInputname(event.target.value)
}
const changePhotoPost=(event)=>{
  setInputPhotoPost(event.target.value)      //FUNÇÕES DO ONCHANGE
}
const changePhotoUser=(event)=>{
  setInputPhotoUser(event.target.value)
}

const addPost=(e)=>{
  e.preventDefault()
  const newArrayPost=[...arrayPosts,{nomeUsuario:inputName,fotoUsuario:inputPhotoUser,fotoPost:inputPhotoPost}]
  setArrayPosts(newArrayPost)               // BOTÃO ADICIONAR
  setInputname("")
  setInputPhotoUser("Sua Foto")
  setInputPhotoPost("Sua Postagem")
}

const RemovePost=(indexRemove)=>{
  const newArrayPost=arrayPosts.filter((item,index)=>{   //BOTÃO REMOVER
    return index !== indexRemove
  })
 setArrayPosts(newArrayPost)
}

 const EditPost=()=>{
  return(
    alert("Clique em Remover e poste novamente")   //NÃO CONSEGUI FAZER
  )
 }
 
const postMap = arrayPosts.map((element, index) => {
  return (
    <DivContainer key={index}><Post 
      nomeUsuario={element.nomeUsuario}           // ARRAY MAPEADO COMO OBJETO
      fotoUsuario={element.fotoUsuario}
      fotoPost={element.fotoPost}/>
      <button onClick={()=>RemovePost(index)}>Remover</button>
      <button onClick={()=>EditPost(index)}>Editar</button>
    </DivContainer>
  )
})

console.log([arrayPosts]);

return (

<MainContainer>
       {postMap}
       <h1>Insta4</h1>
    <MyForm>
      <input type='text' required placeholder='Seu nome' value={inputName} onChange={changeName}></input>
      <input type='text' placeholder='Link de sua foto' value={inputPhotoUser} onChange={changePhotoUser}></input>                    
      <input type='text' placeholder='Link de sua postagem' value={inputPhotoPost} onChange={changePhotoPost}></input>
      <button onClick={addPost}>Postar</button>
    </MyForm>
    </MainContainer>
  )
}

export default App;