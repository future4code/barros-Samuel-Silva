import logo from './logo_samu.png';
import logoReact from './logo.svg';

// import './App.css';
import { Titulo,ComponenteTitulo, Rodape } from './style';
import { Exercicio1 } from './Exercicio1';
import Exercicio2 from './Exercicio2';
import Exercicio3 from './Exercicio3';
import ImagemHomer from './homer.jpg';

function App() {
  const mensagem = () => {
    alert('BOA NOITE!')
  }
  return (
    <ComponenteTitulo>
      <header className="App-header">
        <Titulo>
          Olá! Eu sou Samuel Garcia.
        </Titulo>
            <Exercicio3/>
            <Exercicio1/>
            <Exercicio2/>
            
          
      </header>
    </ComponenteTitulo>
    );
      
}

export default App;
