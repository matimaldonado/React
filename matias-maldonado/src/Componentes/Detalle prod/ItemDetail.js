import ItemComprar from "../Card/ItemComprar"
import Contador from "../Card/ItemCount"
import "./ItemDetalle.css"

const ItemDetail = ({prod1, prod2, prod3})=>{

    return(
<>
<div id="detalle">
<div id="Itemdetalle">
  <h2>{prod1.tipo}</h2>
  <img src={`./${prod1.imagen}`}/>
  <h2>{prod1.descripcion}</h2>
  <h2>{prod1.precio}</h2>
</div>
<div id="botonesdetalle">
  <Contador/>
  <ItemComprar/>
  </div>
</div>
</>


    )
}

export default ItemDetail