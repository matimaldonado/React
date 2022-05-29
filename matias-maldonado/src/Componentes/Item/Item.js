//Cargar datos del producto y se lo pasa al app
import "../Card/Card.css"
import ItemComprar from "../Card/ItemComprar";
import Contador from "../Card/ItemCount"
import { Button, Card, CardContent, Container, Grid } from '@mui/material';
 

const Item = ({image,title,price,stock})=>{
 
      return(
        <>
        <div>
                <Card id="Card1" >
                    <div className="card-item">
                        <img alt="imagen" id="imagenCard" src={`./${image}`}  />
                        <p className='titulo-card'>{title}</p>
                        <span>{price}</span>
                        <Contador cantidad={stock}/>
                        <Button variant={'contained'}>Detalle</Button >
                        <ItemComprar/>
                    </div>
                 </Card>
        </div>

        </>
        )
}

       

export default Item


