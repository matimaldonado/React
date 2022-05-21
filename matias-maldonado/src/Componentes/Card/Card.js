import { Button } from '@mui/material';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import "./Card.css"
import ItemComprar from './ItemComprar';
import Contador from "./ItemCount"


const CardItem = (props) => {
    const {image,title,price} = props
    return(
  <Card id="Card1" >
    <CardContent >
        <>
        <div className="card-item">
            <img alt="imagen" id="imagenCard" src={`./${image}`}/>
            <p className='titulo-card'>{title}</p>
            <span> {price}</span>
            <Contador/>
            <Button variant={'contained'}>Detalle</Button >
            <ItemComprar/>
        </div>
        </>
    </CardContent>
  </Card>
    )
}

export default CardItem

//Con props (Propiedades), le puedo agregar elementos distintos a cada card