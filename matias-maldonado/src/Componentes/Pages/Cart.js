import CartFinally from "../CartFinally/CartFinally"
import { Button } from "@mui/material"
import CartContext  from "../Context/CartContext"
import { useContext } from "react"


const Cart = ()=>{
    const { totalPrice } = useContext(CartContext)

    return(
        console.log(totalPrice),
        <>
        <CartFinally/>
        
        <footer>
        <div>
            <h3>Total</h3>
            <p>${totalPrice} </p>

        </div>
        <div>
        <Button id="buton">Finalizar Compra</Button>
        </div>
        </footer>
        </>
    )}

export default Cart