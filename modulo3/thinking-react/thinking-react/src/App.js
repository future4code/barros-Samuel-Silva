import Carrinho from './components/Carrinho';
import Filtros from './components/Filtros';
import Produtos from './components/Produtos';
import { Container } from './style';

function App() {
  return (
    <Container>
      <Filtros/>
      <Produtos/>
      <Carrinho/>
    </Container>
  )
}

export default App;
