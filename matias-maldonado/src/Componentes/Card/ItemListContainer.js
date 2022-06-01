import "./Card.css"
import ItemList from '../Item/ItemList';
import { useEffect, useState } from "react";
import Productos from "../Detalle prod/Detalleprod";

const CardItem = () => {
  const [products , setProducts] = useState([]);
  
 

const tomarProductos = () => {
  return new Promise ((resolve,reject) => {
    setTimeout(()=>{
            resolve(Productos)},2000)
})}

 useEffect(()=>{
   tomarProductos()
   .then((response)=>{
     setProducts(response)
   })
 },[])

    return(

 <>
  <h1>Nuestras Ofertas</h1>
  <ItemList products = {products}/>
 </>
    )
}

export default CardItem

//Con props (Propiedades), le puedo agregar elementos distintos a cada card