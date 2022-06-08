import { Button } from "@mui/material"
import "./Card.css"
import { Link } from "react-router-dom"
import { useContext, useState } from "react"
import CartContext  from "../Context/CartContext"


    const ItemComprar = ({total, data})=>{

        const{ addProductToCart  } = useContext(CartContext)

        const [mostrarBoton, setMostrarBoton] = useState(false)
        
        const Compra = ()=>{
        
        addProductToCart(data)
            
        console.log("Cantidad de productos ", total)    
            
            }

         if(mostrarBoton === true){
            Compra()
           

           return(
           <>
            <Button><Link id="botonTerminar" to= "/cart"> Terminar compra </Link></Button>
            </>
         )}
         else{       
        return(
            
            <>
            <div>
            <Button id="botonComprar" onClick={()=>setMostrarBoton(true)} >Agregar al carrito</Button>
          
            </div>
            </>
        )}
    }

    export default ItemComprar
