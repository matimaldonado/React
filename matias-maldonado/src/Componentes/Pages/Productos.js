import { useEffect, useState } from "react";
import ItemList from "../Item/ItemList";
import Productos from "../Detalle prod/Detalleprod";
import { useParams } from "react-router-dom";


const ProductoList = ()=>{

    const [products , setProducts] = useState([]);
    const {category} = useParams()

     
     useEffect( () => {
         setProducts([])
        console.log("categoria;" , category)
        tomarProductos()
       .then((response)=>{
        filtroCategoria(response)
              })
     },[category])

     const tomarProductos = () => {
        return new Promise ((resolve,reject) => {
            
            resolve(Productos)})}
    
     const filtroCategoria = (array) =>{
         return array.map((item)=>{
             if(item.category == category){
                 return setProducts(products =>[...products, item])
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
    
    

export default ProductoList
