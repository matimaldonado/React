// Cargar contenedor de item y contenedor de card
import Item from "./Item"
import "../Card/Card.css"
import { Grid } from "@mui/material"

const ItemList = ({products})=>{

return(
  <>
<div id="tarjeta">

{products.map((prop)=> (<Item prod={prop} />))}

</div>
  </>
)
}


export default ItemList





