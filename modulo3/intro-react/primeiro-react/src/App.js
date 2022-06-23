import logo from './logo_samu.png';
import logoReact from './logo.svg';
import './App.css';

function App() {
  const mensagem = () => {
    alert('BOA NOITE!')
  }
  return (
    <div className="App">
      <header className="App-header">
        <h2>
          Olá! Eu sou Samuel Garcia.
        </h2>
        <img src={logo} className="App-logo-samu" alt="logo Samuel" />
        <img src={logoReact} className="App-logo" alt="logo React" />
        <p className="texto1">
          Este é o meu primeiro site React
        </p>
        <button className="botao" onClick={mensagem}>Aperte este botão</button>
           
      </header>
    </div>
  );
}

export default App;
