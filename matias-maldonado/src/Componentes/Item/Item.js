//Cargar datos del producto y se lo pasa al app
import "../Card/Card.css"
import ItemComprar from "../Card/ItemComprar";
import Contador from "../Card/ItemCount"
import { Button, Card, CardContent, Container, Grid } from '@mui/material';
import { PropaneSharp } from "@mui/icons-material";
 

const Item = ({prod})=>{
   
      return(
        <>
        <CardContent>
            <Container>
            <Grid container className='general-conteiner' >
               <Grid> 
                <Card id="Card1" >
                    <div className="card-item">
                        <img alt="imagen" id="imagenCard" src={prod[0].image}  />
                        <p className='titulo-card'>{prod[0].title}</p>
                        <span>{prod[0].price}</span>
                        <Contador/>
                        <Button variant={'contained'}>Detalle</Button >
                        <ItemComprar/>
                    </div>
                    </Card>
                </Grid>
                <Grid>
                
                <Card id="Card1" >
                    <div className="card-item">
                        <img alt="imagen" id="imagenCard" src={prod[1].image}  />
                        <p className='titulo-card'>{prod[1].title}</p>
                        <span>{prod[1].price}</span>
                        <Contador/>
                        <Button variant={'contained'}>Detalle</Button >
                        <ItemComprar/>

                    </div>
                
                </Card>
                </Grid>    
                <Grid>    
                <Card id="Card1" >
                    <div className="card-item">
                        <img alt="imagen" id="imagenCard" src={prod[2].image}  />
                        <p className='titulo-card'>{prod[2].title}</p>
                        <span>{prod[2].price}</span>
                        <Contador/>
                        <Button variant={'contained'}>Detalle</Button >
                        <ItemComprar/>

                    </div>
                </Card>
                </Grid>    
        </Grid>
        </Container>
        </CardContent>
        </>
    )
}

       

export default Item


