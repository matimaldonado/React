import './App.css';
import NavBar from './Componentes/NavBar/NavBar';
import{BrowserRouter, Routes, Route} from 'react-router-dom'
import Home from './Componentes/Pages/Home';
import Contacto from './Componentes/Pages/Contacto';
import DetalleProducto from './Componentes/Pages/Detalleproducto';
import Productos from './Componentes/Pages/Productos';

function App() {
 
  return (
    <div className="App">
      <h1>Mati Maldonado</h1>
      
      <BrowserRouter>
      <NavBar/>
      <Routes>
        <Route exact path= '/' element={<Home/>}/>
        <Route exact path='/Productos' element ={<Productos/>}/>
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
