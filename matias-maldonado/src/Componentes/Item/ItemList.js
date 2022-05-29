// Cargar contenedor de item y contenedor de card
import Item from "./Item"
import "../Card/Card.css"
import { Grid } from "@mui/material"

const ItemList = ({products})=>{

return(
  <>
        <Grid container spacing={2}>
            {
                products.map( (prod) => {
                  
                  const{tipo,precio,imagen,id,stock}=prod  
                  console.log(stock)
                  return(
                        <Grid item md={4} key={id}>
                            <Item title={tipo} price={precio} image={imagen} stock={stock}/>
                        </Grid>
                    )
                })
            }
        </Grid>
  </>
)
}


export default ItemList





