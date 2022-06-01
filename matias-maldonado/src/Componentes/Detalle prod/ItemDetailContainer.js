import { useEffect, useState } from "react";
import ItemDetail from "./ItemDetail";
import { useParams } from "react-router-dom";
import Productos from "./Detalleprod";


const ItemDetailContainer = () => {

    const {id} = useParams()

    const [detalle , setDetalle] = useState([]);
    
  
  const tomarDetalle = () => {
    return new Promise ((resolve,reject) => {
      setTimeout(()=>{
              resolve(Productos)},2000)
  })}
  
   useEffect(()=>{
     
    console.log(filtroProducto)
    tomarDetalle()
     .then((response)=>{
       setDetalle(filtroProducto)
     })},[])

    const filtroProducto =Productos.find((product)=>{
      return product.id == id
    }) 
  
      return(
   
   <>
    <ItemDetail prod = {detalle} />
    
   </>
      )
  }
  

  export default ItemDetailContainer