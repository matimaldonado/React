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
                  
                  const{tipo,precio,imagen,id,stock,categoria, descripcion}=prod  
                 
                  return(
                        <Grid item md={4} key={id}>
                            <Item title={tipo} price={precio} descripcion={descripcion} image={imagen} stock={stock} id={id} categoria={categoria}/>
                        </Grid>
                    )
                })
            }
        </Grid>
  </>
)
}


export default ItemList





