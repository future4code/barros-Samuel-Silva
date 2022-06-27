import React from 'react';
import './App.css';
import CardGrande from './components/CardGrande/CardGrande'
import CardPequeno from './components/CardPequeno/CardPequeno'
import ImagemButton from './components/ImagemButton/ImagemButton'
import imgSamuel from './samuel.jpg'
import imgSupermais from './supermais.png'
import imgAtos from './atos.png'
import imgEmail from './email.png'
import imgEndereco from './endereco.png'


function App() {
  return (
    <div className="App">
      <div className="page-section-container">
        <h2>Dados pessoais</h2>
        <CardGrande 
          imagem={imgSamuel}
          nome="SAMUEL" 
          descricao="Olá! Meu eu sou Samuel Garcia, Técnico em Informática e aluno do curso Full Stack da Labenu."
        />
        
        <ImagemButton 
          imagem="https://cdn-icons-png.flaticon.com/512/271/271210.png" 
          texto="Ver mais"
        />
      </div>

      <div className="page-section-container">
        <CardPequeno
          imagem={imgEmail}
          label="Email:"
          texto="samuca010@gmail.com"
        />
      </div>
        
      <div className="page-section-container">
        <CardPequeno
          imagem={imgEndereco}
          label="Endereço:"
          texto="Rua Santa Luzia, S/N, Barbacena/MG"
        />
      </div>

      <div className="page-section-container">
        <h2>Experiências profissionais</h2>
        <CardGrande 
          imagem={imgSupermais}
          nome="Super Mais" 
          descricao="A mais de 20 anos trabalhando como T.I., dando Suporte à usuários, Sistemas de Gestão, Monitoramento de Redes, Manutenção em Hardwares, além de apoio a setores
                      como Marketing, Logística e Contábil" 
        />
        
        <CardGrande 
          imagem={imgAtos}
          nome="ATOS" 
          descricao="Encarregado de Logística - Experiência de grande valia, sendo responsável pela administração logísitica do centro de distribução da Nestle na Zona da Mata mineira.
                    Entre as responsabilidades do cargo estavam: Controle e Gerenciamento da frota (própria e terceirizada), Controle de qualidade de processos internos, Mapeamento de 
                    rotas, Gerenciamento de pessoal, entre outras. " 
        />
      </div>

      <div className="page-section-container">
        <h2>Minhas redes sociais</h2>
        <ImagemButton 
          imagem="https://d2v9ipibika81v.cloudfront.net/uploads/sites/261/2017/01/facebook-logo-3.png" 
          texto="Facebook" 
        />        

        <ImagemButton 
          imagem="https://logodownload.org/wp-content/uploads/2014/09/twitter-logo-1-1.png" 
          texto="Twitter" 
        />        
      </div>
    </div>
  );
}

export default App;
