import './App.css';
import NavBar from './Componentes/NavBar/NavBar';
import{BrowserRouter, Routes, Route} from 'react-router-dom'
import Home from './Componentes/Pages/Home';
import Contacto from './Componentes/Pages/Contacto';
import DetalleProducto from './Componentes/Pages/Detalleproducto';
import ProductoList from './Componentes/Pages/Productos';
import {Link} from 'react-router-dom'

function App() {
 
  return (
    <div className="App">
      
      
      <BrowserRouter>
      <NavBar/>
      <Routes>
        <Route exact path= '/' element={<Home/>}/>
        <Route exact path='/Products/:category' element ={<ProductoList/>}/>
        <Route exact path= '/Productos/:id' element={<DetalleProducto/>}/>
        <Route exact path= '/Contacto' element={<Contacto/>}/>
      </Routes>
      
      
     

      </BrowserRouter>        
      
      <footer>

      </footer>
     </div>
  );
}


export default App;
