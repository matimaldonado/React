import CartContext  from "../Context/CartContext"
import { useContext } from "react"
import { Button } from "@mui/material"
import { Link } from "react-router-dom";
import DeleteIcon from '@mui/icons-material/Delete';
import "./Cart.css"

const CartFinally = ()=>{
    const { cartListItems } = useContext(CartContext)
    const {deletedItem, restItem,sumItem} = useContext(CartContext)

    if(cartListItems.length === 0){
            return(
            
                        <>
                            <div id="Cart">
                                <p>No hay productos agregados al carrito</p>
                            <Button><Link id='butonCart' to="/">Volver al Inicio</Link></Button>
                            </div>
                        </>
            )} else{
           
                return(
         cartListItems.map((prod)=>{
         return(
        <>
        <div id="Cart">
         <div key ={prod.id} id="detalleCart">
            <h3>{prod.Tipo}</h3>
            <img alt={`${prod.Descripcion}`} src={`../${prod.Imagen}`}/>
            <div id="btnCantidad">
            <Button  onClick={()=>restItem(prod)}>-</Button>
            <h4>{prod.Cantidad}</h4>
            <Button onClick={()=>sumItem(prod)}>+</Button>
            </div>
            <h4>{prod.Descripcion}</h4>            
            <h4>Precio unitario ${prod.Precio}</h4>
            <h2>Total ${prod.Precio * prod.Cantidad}</h2>

            <Button onClick={()=>deletedItem(prod)}>
              <DeleteIcon />
          </Button>
          </div>  
        </div>  
       </>
    
       
            )}))}
    
            
}
export default CartFinally



