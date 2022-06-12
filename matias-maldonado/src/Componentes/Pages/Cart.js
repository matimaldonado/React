import CartFinally from "../CartFinally/CartFinally"
import { Button } from "@mui/material"
import CartContext  from "../Context/CartContext"
import { useContext } from "react"


const Cart = ()=>{
    const { totalPrice } = useContext(CartContext)
    const { cantidadTotal } = useContext (CartContext)
    return(
        console.log(totalPrice),
        console.log("lll", cantidadTotal),
        <>
        <CartFinally/>
        
        <footer>
        <div>
            <h2>Total</h2>
            <h3>${totalPrice} </h3>
            <h2>Cantidad de Items</h2>
            <h3>{cantidadTotal}</h3>


        </div>
        <div>
        <Button id="butonCart">Finalizar Compra</Button>
        </div>
        </footer>
        </>
    )}

export default Cart