//Cargar datos del producto y se lo pasa al app
import "../Card/Card.css"
import Contador from "../Card/ItemCount"
import { Button, Card} from '@mui/material';
import { Link } from "react-router-dom"; 

const Item = ({Imagen,Tipo,Precio,Stock,id,Descripción})=>{
    
       return(
        <>
        <div>
                <Card id="Card1"  >
                    <div className="card-item">
                        <img alt={`${Tipo}`} id="imagenCard" src={`/${Imagen}`}  />
                        <p className='titulo-card'>{Tipo}</p>
                        <span>${Precio}</span>
                        <Contador data={{Imagen,Tipo,Precio,Stock,id, Descripción}} cantidad={Stock}/>
                        <Button id="botonDetalle" variant={'contained'}> <Link id="botonDetalle" to={'/Productos/' + id} > Ver detalle</Link> </Button >
                        
                    </div>
                 </Card>
        </div>

        </>
        )
}

       

export default Item


