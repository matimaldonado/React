//Cargar datos del producto y se lo pasa al app
import "../Card/Card.css"
import ItemComprar from "../Card/ItemComprar";
import Contador from "../Card/ItemCount"
import { Button, Card, CardContent, Container, Grid } from '@mui/material';
 

const Item = ({prod})=>{
   
      return(
    
        <>
        <div>
             <Grid  container >
               <Grid item m={3} > 
                <Card id="Card1" >
                    <div className="card-item">
                        <img alt="imagen" id="imagenCard" src={prod.imagen}  />
                        <p className='titulo-card'>{prod.tipo}</p>
                        <span>{prod.precio}</span>
                        <Contador/>
                        <Button variant={'contained'}>Detalle</Button >
                        <ItemComprar/>
                    </div>
                 </Card>
                    
                </Grid>
            </Grid>
        </div>

        </>
        )
}

       

export default Item


