// Cargar contenedor de item y contenedor de card
import Item from "./Item"
import "../Card/Card.css"

const ItemList = ({data})=>{
console.log(data)
return(
  <>
  <div>
    <Item prod = {data}/>
 </div>
  </>
)
}


export default ItemList




