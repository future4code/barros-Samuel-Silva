import React, {useState} from 'react'
import './style.css'

import {IconeComContador} from '../IconeComContador/IconeComContador'
import iconeCoracaoBranco from '../../img/favorite-white.svg'
import iconeCoracaoPreto from '../../img/favorite.svg'
import iconeComentario from '../../img/comment_icon.svg'
import {SecaoComentario} from '../SecaoComentario/SecaoComentario'



function Post(props){
  // const [state, setState] = useState({
  //   curtido: false,
  //   numeroCurtidas: 0,
  //   comentando: false,
  //   numeroComentarios: 0
  // })

  const [numeroCurtidas, setnumeroCurtidas] = useState (0)
  const [curtido, setCurtido] = useState(false)
  const [comentando, setComentando] = useState(false)
  const [numeroComentarios, setNumeroComentarios] = useState(0)
  const [entradaComentario, setEntradaComentario] = useState('Comentario')

  const handleentradaComentario = (event) => {
    setEntradaComentario(event.target.value) //responsavel pelo input
    
  }

  const onClickCurtida = () => {
    if(curtido === false) {
      setCurtido(iconeCoracaoBranco)
      setCurtido(!curtido)
      setnumeroCurtidas(numeroCurtidas+1)
    } else {
      setCurtido(iconeCoracaoPreto)
      setCurtido(!curtido)
      setnumeroCurtidas(numeroCurtidas-1)
    }
    console.log('Curtiu!')
  }

  const onClickComentario = () => {
    setComentando(!comentando)
    if(comentando) {
      componenteComentario = <SecaoComentario aoEnviar={aoEnviarComentario} inputComentario={entradaComentario}/>
    }
         
  }


  const aoEnviarComentario = () => {
    setComentando(false)
    setNumeroComentarios(numeroComentarios + 1)
    console.log(entradaComentario)
  }

  let iconeCurtida

    if(curtido) {
      iconeCurtida = iconeCoracaoPreto
    } else {
      iconeCurtida = iconeCoracaoBranco
    }

    let componenteComentario

    if(comentando) {
      componenteComentario = <SecaoComentario aoEnviar={aoEnviarComentario}  onChangeComentario={handleentradaComentario}/>
    }

  return(
    <div className = 'PostContainer'>
      <div className = 'PostHeader'>
        <img className = 'UserPhoto' src={props.fotoUsuario} alt={'Imagem do usuario'}/>
        <p>{props.nomeUsuario}</p>
      </div>

      <img className = 'PostPhoto'src={props.fotoPost} alt={'Imagem do post'}/>

      <div className = 'PostFooter'>
        <IconeComContador
          icone={iconeCurtida}
          onClickIcone={onClickCurtida}
          valorContador={numeroCurtidas}
        />

        <IconeComContador
          icone={iconeComentario}
          onClickIcone={onClickComentario}
          valorContador={numeroComentarios}
        />
      </div>
      {componenteComentario}
    </div>
  )
}


export default Post