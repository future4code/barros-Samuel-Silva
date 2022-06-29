import React from 'react';
import Post from './components/Post/Post';
import './style.css'


function App() {
return(
  <div className='MainContainer'>
           <Post
            nomeUsuario={'paulinha'}
            fotoUsuario={'https://picsum.photos/50/50'}
            fotoPost={'https://picsum.photos/200/150'}
          />
          <Post
            nomeUsuario={'jhony'}
            fotoUsuario={'https://picsum.photos/50/60'}
            fotoPost={'https://picsum.photos/200/160'}
          />
          <Post
            nomeUsuario={'leo'}
            fotoUsuario={'https://picsum.photos/50/70'}
            fotoPost={'https://picsum.photos/200/170'}
          />
  </div>
)

}


export default App;
