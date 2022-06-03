import "./Card.css"
import ItemList from '../Item/ItemList';
import { useEffect, useState } from "react";
import Productos from "../Detalle prod/Detalleprod";
import { useParams } from "react-router-dom";


const CardItem = () => {
  const [products , setProducts] = useState([]);
  const {category} = useParams()

const tomarProductos = () => {
  return new Promise ((resolve,reject) => {
    setTimeout(()=>{
            resolve(Productos)},2000)
})}

 useEffect(()=>{
   setProducts{[]}
   tomarProductos()
   .then((response)=>{
     filtroCategoria(response)
   })
 },[category])

 const filtroCategoria = (array) =>{
  return array.map( (item) => {
    if(item.category === category) {
        return setProducts(products => [...products, item]),
      
      }else{
        return setProducts(array),
        
      }
  })
}

    return(

 <>
  <h1>Nuestras Ofertas</h1>
  <ItemList products = {products}/>
 </>
    )
}

export default CardItem

//Con props (Propiedades), le puedo agregar elementos distintos a cada card
