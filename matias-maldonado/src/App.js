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
      <CardItem/>
      {/* <Container>
        <Grid container className='general-conteiner' >
         <Grid item md={4}> 
        <CardItem title="Alfombra corazon" price={"$1500"} image={"Alfombras.PNG"} />
        </Grid>
        <Grid item md={4}> 
        <CardItem  title="Repasador" price={"$3500"} image={"Repasadores.PNG"}  />
        </Grid>
        <Grid item md={4}> 
        <CardItem title="Perfume" price={"$2500"} image={"Perfumesvarios.jpg"}  />
        </Grid>
        </Grid>
      </Container> */}
      <footer>

      </footer>
     </div>
  );
}


export default App;
