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
                  const{Tipo,Precio,Imagen,id,Stock,Categoria,Descripcion}=prod  
                 
                  return(
                    

                        <Grid item md={4} key={id}>
                            <Item title={Tipo} price={Precio} descripcion={Descripcion} image={Imagen} stock={Stock} id={id} categoria={Categoria}/>
                        </Grid>
                    )
                })
            }
        </Grid>
  </>
)
}


export default ItemList





