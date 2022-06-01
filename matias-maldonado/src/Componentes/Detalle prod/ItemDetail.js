import ItemComprar from "../Card/ItemComprar"
import Contador from "../Card/ItemCount"
import "./ItemDetalle.css"

const ItemDetail = ({prod})=>{
console.log(prod)
    return(
<>
<div id="detalle">

  <div id="Itemdetalle">
    <h2>{prod.tipo}</h2>
    <img src={`../${prod.imagen}`}/>

  </div>
  <div id="botonesdetalle">
    <h2>{prod.descripcion}</h2>
    <h2>{prod.precio}</h2>
    <Contador cantidad = {prod.stock}/>

  </div>
</div>
</>


    )
}

export default ItemDetail