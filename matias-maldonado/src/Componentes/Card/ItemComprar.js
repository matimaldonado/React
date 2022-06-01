import { Button } from "@mui/material"
import "./Card.css"



    const ItemComprar = (total)=>{
    
        const Compra = ()=>{
            console.log ("Usted compró ", total)
            
            }

        return(
            <>
            <div>
                <Button id="botonComprar" onClick = {Compra} >Comprar</Button>
            </div>
            </>
        )
    }

    export default ItemComprar