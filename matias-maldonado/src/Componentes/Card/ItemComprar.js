import { Button } from "@mui/material"
import "./Card.css"
import { Link } from "react-router-dom"
import { useState } from "react"


    const ItemComprar = ({total, data})=>{

        const [mostrarBoton, setMostrarBoton] = useState(false)
        
        const Compra = ()=>{
            console.log ("Usted compró ", total)
            console.log ("Producto: ", data )
            
            }

         if(mostrarBoton === true){
            {Compra()}
           
           return(
           <>
            <Button><Link id="botonTerminar" to= "/cart"> Terminar compra </Link></Button>
            </>
         )}
         else{       
        return(
            
            <>
            <div>
            <Button id="botonComprar" onClick={()=>setMostrarBoton(true)} >Comprar</Button>
          
            </div>
            </>
        )}
    }

    export default ItemComprar