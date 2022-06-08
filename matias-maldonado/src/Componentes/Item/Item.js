//Cargar datos del producto y se lo pasa al app
import "../Card/Card.css"
import Contador from "../Card/ItemCount"
import { Button, Card} from '@mui/material';
import { Link } from "react-router-dom"; 

const Item = ({image,title,price,stock,id,descripcion})=>{
    
       return(
        <>
        <div>
                <Card id="Card1"  >
                    <div className="card-item">
                        <img alt={`${title}`} id="imagenCard" src={`/${image}`}  />
                        <p className='titulo-card'>{title}</p>
                        <span>{price}</span>
                        <Contador data={{image,title,price,stock,id}} cantidad={stock}/>
                        <Button id="botonDetalle" variant={'contained'}> <Link id="botonDetalle" to={'/Productos/' + id} > Ver detalle</Link> </Button >
                        
                    </div>
                 </Card>
        </div>

        </>
        )
}

       

export default Item


