import CartContext  from "../Context/CartContext"
import { useContext } from "react"
import { Button } from "@mui/material"
import { Link } from "react-router-dom";
import DeleteIcon from '@mui/icons-material/Delete';
import "./Cart.css"

const CartFinally = ()=>{
    const { cartListItems } = useContext(CartContext)

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
            <h3>{prod.title}</h3>
            <img alt={`${prod.descripcion}`} src={`../${prod.image}`}/>
            <p>{prod.descripcion}</p>            
            <h2>${prod.price}</h2>
          <Button>
              <DeleteIcon />
          </Button>
          </div>  
        </div>  
       </>

       
            )}))}
    
            
}
export default CartFinally