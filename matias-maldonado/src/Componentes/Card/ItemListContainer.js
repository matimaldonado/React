import "./Card.css"
import ItemList from '../Item/ItemList';
import { useEffect, useState } from "react";


const CardItem = () => {
  const [products , setProducts] = useState({});
  
  const productos=[
  {
    title: "Alfombra Corazon",
    price:"$1500",
    image:"Alfombras.PNG",
    description:"Alfombras corazon varios colores",
    stock: "5",
    id:"Pdt1",

},
{
  title: "Repasadores",
  price:"$300",
  image:"Repasadores.PNG",
  description:"Repasadores varios colores y motivos",
  stock: "20",
  id:"Pdt2",

},
{
  title: "Perfume",
  price:"$3500",
  image:"Perfumesvarios.jpg",
  description:"Perfumes Natura Humor",
  stock: "3",
  id:"Pdt3",

}]

const tomarProducto = () => {
  return new Promise ((resolve,reject) => {
      setTimeout(() => {
      resolve(productos)}, 2000)
  })
}
 useEffect(()=>{
   tomarProducto()
   .then((response)=>{
     setProducts(response)
   })
 },[])

    return(
 <>
 
    <ItemList data ={products}/>
 
  </>
    )
}

export default CardItem

//Con props (Propiedades), le puedo agregar elementos distintos a cada card