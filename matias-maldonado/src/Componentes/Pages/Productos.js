import { useEffect, useState } from "react";
import ItemList from "../Item/ItemList";
import Productos from "../Detalle prod/Detalleprod";
import { useParams } from "react-router-dom";


const ProductoList = ()=>{

    const [products , setProducts] = useState([]);
    const {category} = useParams()

     
     useEffect( () => {

        console.log("categoria;" , category)
        tomarProducto()
       .then((response)=>{
        filtroCategoria(response)
              })
     },[category])

     const tomarProducto = () => {
        return new Promise ((resolve,reject) => {
            
            resolve(Productos)})}
    
     const filtroCategoria = () =>{
         return products.map((item)=>{
             if(item.category == category){
                 return setProducts(products =>[...products, item])
             }
         })
     }
    
      return(
     console.log(filtroCategoria),
     <>
     
      <h1>Nuestras Ofertas</h1>
      <ItemList products = {products}/>
     </>
        )
    }
    
    

export default ProductoList
