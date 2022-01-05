import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Home} from '../src/views/Home';
import {Navigate, Route, Routes} from 'react-router-dom';
import { ProductsView } from './views/ProductsView';
import {PurchaseView} from './views/PurchaseView';



function App() {
  return (
    <Routes>
       <Route path="/"  element={<Home />} />
       <Route path="/product/:id" element={<ProductsView/>} />
       <Route path="/purchase" element={<PurchaseView />} />
       <Route path="*" element={<Navigate to="/" />} />
    </Routes>
     
    
    
  );
}


export default App;
