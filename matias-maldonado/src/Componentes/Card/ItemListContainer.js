import "./Card.css"
import ItemList from '../Item/ItemList';
import { useEffect, useState } from "react";


const CardItem = () => {
  const [products , setProducts] = useState([]);
  
  const productos=[
  {
    tipo: "Alfombra Corazon",
    precio:"$1500",
    imagen:"Alfombras.PNG",
    descripcion:"Alfombras corazon varios colores",
    stock: "5",
    id:"Pdt1",

},
{
  tipo: "Repasadores",
  precio:"$300",
  imagen:"Repasadores.PNG",
  descripcion:"Repasadores varios colores y motivos",
  stock: "20",
  id:"Pdt2",

},
{
  tipo: "Perfume",
  precio:"$3500",
  imagen:"Perfumesvarios.jpg",
  descripcion:"Perfumes Natura Humor",
  stock: "3",
  id:"Pdt3",

}]

const tomarProductos = () => {
  return new Promise ((resolve,reject) => {
    setTimeout(()=>{
            resolve(productos)},2000)
})}

 useEffect(()=>{
   tomarProductos()
   .then((response)=>{
     setProducts(response)
   })
 },[])

    return(

 <>
  <ItemList products = {products}/>
 </>
    )
}

export default CardItem

//Con props (Propiedades), le puedo agregar elementos distintos a cada card