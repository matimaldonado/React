import Contador from "../Card/ItemCount"
import "./ItemDetalle.css"

const ItemDetail = ({prod})=>{

    return(
          <>
          <div id="detalle">

              <div id="Itemdetalle">
                <h2>{prod.Tipo}</h2>
                <img alt={`${prod.Descripción}`} src={`../${prod.Imagen}`}/>

              </div>
              <div id="botonesdetalle">
                <h2>{prod.Descripción}</h2>
                <h2>${prod.Precio}</h2>
                
                <Contador
                data = {prod}
                cantidad = {prod.Stock}/>
                  
              </div>
          </div>
          </>


    )
}

export default ItemDetail