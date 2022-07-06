import Item from "./Item"
import "../Card/Card.css"
import { Grid } from "@mui/material"

const ItemList = ({products})=>{

return(
  <>
        <Grid container spacing={2}>
            {
                products.map( (prod) => {
                  const{Tipo,Precio,Imagen,id,Stock,Categoria,Descripcion}=prod  
                 
                  return(
                    

                        <Grid item md={4} key={id}>
                            <Item Tipo={Tipo} Precio={Precio} Descripción={Descripcion} Imagen={Imagen} Stock={Stock} id={id} Categoria={Categoria}/>
                        </Grid>
                    )
                })
            }
        </Grid>
  </>
)
}


export default ItemList





