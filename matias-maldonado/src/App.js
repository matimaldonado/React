import './App.css';
import NavBar from './Componentes/NavBar/NavBar';
import{BrowserRouter, Routes, Route} from 'react-router-dom'
import Home from './Componentes/Pages/Home';
import Contacto from './Componentes/Pages/Contacto';
import DetalleProducto from './Componentes/Pages/Detalleproducto';
import ProductoList from './Componentes/Pages/Productos';
import { CartProvider } from './Componentes/Context/CartContext';
import Cart from './Componentes/Pages/Cart';
import QuienesSomos from './Componentes/Pages/QuienesSomos';

function App() {
 
  return (
    <div className="App">
      
      <CartProvider>      

      <BrowserRouter>
      <NavBar/>
      <Routes>
        <Route exact path= '/' element={<Home/>}/>
        <Route exact path='/Products/:category' element ={<ProductoList/>}/>
        <Route exact path= '/Productos/:id' element={<DetalleProducto/>}/>
        <Route exact path= '/Contacto' element={<Contacto/>}/>
        <Route exact path='/Cart' element={<Cart/>}/>
        <Route exact path = '/QuienesSomos' element ={<QuienesSomos/>}/>
      </Routes>
      
      
     

      </BrowserRouter>        
      </CartProvider>

      <footer>

      </footer>
     </div>
  );
}


export default App;
