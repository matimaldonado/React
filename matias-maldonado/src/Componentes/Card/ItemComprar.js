import { Button } from "@mui/material"
import "./Card.css"


const Compra = ()=>{
    console.log ("Usted compró un producto ")
    
    }

    const ItemComprar = ()=>{
    
        return(
            <>
            <div>
                <Button onClick = {Compra} >Comprar</Button>
            </div>
            </>
        )
    }

    export default ItemComprar