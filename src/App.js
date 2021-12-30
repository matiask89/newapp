import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container} from 'react-bootstrap';
import { Headerapp } from './components/Headerapp';
import { ListProducts } from './components/Products/ListProducts';

function App() {
  return (
    <Container>
      <div className="App">
        <Headerapp />
        <ListProducts />
      </div>
    </Container>
  );
}


export default App;
