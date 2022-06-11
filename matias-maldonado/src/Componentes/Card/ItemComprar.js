import { Button } from "@mui/material"
import "./Card.css"
import { Link } from "react-router-dom"
import { useContext, useState } from "react"
import CartContext  from "../Context/CartContext"


    const ItemComprar = ({stock, data})=>{

        const{ addProductToCart  } = useContext(CartContext)

        const [mostrarBoton, setMostrarBoton] = useState(false)
        
        const [Count,setCount] = useState(1)
        
        
        const addItem = ()=>{
            console.log("stock = ",stock)
            if(Count < stock){
            setCount(Count + 1)
        }}
        
        const restItem = () => {
            if(Count > 1){
            setCount (Count - 1)
        }}

         if(mostrarBoton === true){
            addProductToCart({data,Count})
            
            console.log("Cantidad de productos ", Count)

           return(
           <>
            <Button><Link id="botonTerminar" to= "/Cart"> Terminar compra </Link></Button>
            </>
         )}
         else{       
        return(
            
            <>
            <div className='Contador'>
                <Button onClick={restItem} id='botonMenos'>-</Button>
                <p id="Cantidad">{Count}</p>
                <Button onClick={addItem} id='botonMas'>+</Button>
            </div>
            <Button id="botonComprar" onClick={()=>setMostrarBoton(true)} >Agregar al carrito</Button>

            </>
        )}
    }

    export default ItemComprar
