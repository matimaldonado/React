// Cargar contenedor de item y contenedor de card
import { Container, Grid } from '@mui/material';
import { Productos,Productos2,Productos3, PromesaProducto, Item } from './Item'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import "../Card/Card.css"


const ItemList = ()=>{
return(
<>

  <CardContent >
  
      <Container>
        <Grid container className='general-conteiner' >
        
          <Grid item md={4}> 
            <Item title={Productos.title} price={Productos.price} image={Productos.image} />
          <PromesaProducto/> 
          </Grid>
        
          <Grid item md={4}> 
            <Item title={Productos2.title} price={Productos2.price} image={Productos2.image} />
          </Grid>
            <Grid item md={4}> 
            <Item title={Productos3.title} price={Productos3.price} image={Productos3.image} />
          </Grid>
          </Grid>
      </Container>
  </CardContent>


      </>
)}


export default ItemList