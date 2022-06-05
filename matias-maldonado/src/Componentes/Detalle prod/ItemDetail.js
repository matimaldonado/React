import { Button } from "@mui/material"
import { Link } from "react-router-dom"
import Contador from "../Card/ItemCount"
import { useState } from "react"
import "./ItemDetalle.css"

const ItemDetail = ({prod})=>{

    return(
<>
<div id="detalle">

  <div id="Itemdetalle">
    <h2>{prod.tipo}</h2>
    <img alt={`${prod.descripcion}`} src={`../${prod.imagen}`}/>

  </div>
  <div id="botonesdetalle">
    <h2>{prod.descripcion}</h2>
    <h2>{prod.precio}</h2>
    <Contador
     data = {prod}
     cantidad = {prod.stock}/>
      
  </div>
</div>
</>


    )
}

export default ItemDetail