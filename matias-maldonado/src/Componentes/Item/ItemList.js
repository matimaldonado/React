// Cargar contenedor de item y contenedor de card
import Item from "./Item"
import "../Card/Card.css"

const ItemList = ({products})=>{

return(
  <>

{products.map((prop)=> (<Item prod={prop} />))}

  </>
)
}


export default ItemList





