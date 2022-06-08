import "./Card.css"
import ItemList from '../Item/ItemList';
import { useEffect, useState } from "react";
import Productos from "../Detalle prod/Detalleprod";
import { useParams } from "react-router-dom";

const CardItem = () => {
  const [products , setProducts] = useState([]);
  const {category} = useParams()


 useEffect(()=>{
   setProducts([])
   tomarProductos()
   .then((response)=>{
     if(category) { 
       const filtroProducto = response.filter(item=>item.categoria === category)
      setProducts(filtroProducto)
     } else {
       setProducts(response)
     }
    
   })
 },[category])

 const tomarProductos = () => {
  return new Promise ((resolve,reject) => {
    setTimeout(()=>{
            resolve(Productos)})
})}


 

    return(

 <>
  <h1>Nuestras Ofertas</h1>
  <ItemList products = {products}/>
 </>
    )
}

export default CardItem

//Con props (Propiedades), le puedo agregar elementos distintos a cada card
