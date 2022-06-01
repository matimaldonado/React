import { useEffect, useState } from "react";
import ItemList from "../Item/ItemList";
import Productos from "../Detalle prod/Detalleprod";
import { useParams } from "react-router-dom";


const ProductoList = ()=>{

    const [products , setProducts] = useState([]);
    const {category} = useParams()

     
     useEffect( () => {
        console.log("categoria;" , category)
        tomarProductos()
       .then((response)=>{
        filtroCategoria(response)
              })
     },[])

     const tomarProductos = () => {
        return new Promise ((resolve,reject) => {
            
            resolve(Productos)})}
    
     const filtroCategoria = (array) =>{
         return array.map((item)=>{
             if(item.categoria == category){
                 return setProducts(Productos =>[...Productos, item])
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