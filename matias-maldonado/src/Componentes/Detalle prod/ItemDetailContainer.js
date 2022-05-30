import { useEffect, useState } from "react";
import ItemDetail from "./ItemDetail";

const ItemDetailContainer = () => {

    const [detalle , setDetalle] = useState([]);
    const [detalle1 , setDetalle1] = useState([]);
    const [detalle2 , setDetalle2] = useState([]);
    
    const productos1=
    {
      tipo: "Alfombra Corazon",
      precio:"$1500",
      imagen:"Alfombras.PNG",
      descripcion:"Alfombras corazon varios colores",
      stock: 5,
      id:"Pdt1",
  
  }
  const productos2=
  {
    tipo: "Repasadores",
    precio:"$300",
    imagen:"Repasadores.PNG",
    descripcion:"Repasadores varios colores y motivos",
    stock: 20,
    id:"Pdt2",
  
  }
  const productos3=
  {
    tipo: "Perfume",
    precio:"$3500",
    imagen:"Perfumesvarios.jpg",
    descripcion:"Perfumes Natura Humor",
    stock: 3,
    id:"Pdt3",
  
  }
  
  const tomarDetalle = () => {
    return new Promise ((resolve,reject) => {
      setTimeout(()=>{
              resolve(productos1)},2000)
  })}
  
   useEffect(()=>{
     tomarDetalle()
     .then((response)=>{
       setDetalle(response)
     })},[])

     
     const tomarDetalle1 = () => {
        return new Promise ((resolve,reject) => {
          setTimeout(()=>{
                  resolve(productos2)},2000)
      })}
      
       useEffect(()=>{
         tomarDetalle1()
         .then((response)=>{
           setDetalle1(response)
         })},[])

    const tomarDetalle2 = () => {
            return new Promise ((resolve,reject) => {
              setTimeout(()=>{
                      resolve(productos3)},2000)
          })}
          
          useEffect(()=>{
             tomarDetalle2()
             .then((response)=>{
               setDetalle2(response)
             })
   },[])
  
      return(
   
   <>
    <ItemDetail prod1 = {detalle} prod2={detalle1} prod3 = {detalle2}/>
    
   </>
      )
  }
  

  export default ItemDetailContainer