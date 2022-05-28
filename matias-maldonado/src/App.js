import './App.css';
import NavBar from './Componentes/NavBar/NavBar';
import Item from './Componentes/Item/Item';
import ItemList from './Componentes/Item/ItemList';
import CardItem from './Componentes/Card/ItemListContainer';
import { List } from '@mui/material';

function App() {
 
  return (
    <div className="App">
      <h1>Mati Maldonado</h1>
      <NavBar/>        
      <CardItem className = "tarjeta" />
     
      <footer>

      </footer>
     </div>
  );
}


export default App;
