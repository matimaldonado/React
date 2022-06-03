import { useEffect, useState } from "react";
import ItemList from "../Item/ItemList";
import Productos from "../Detalle prod/Detalleprod";
import { useParams } from "react-router-dom";
import CardItem from "../Card/ItemListContainer";


const ProductoList = ()=>{

    const [products , setProducts] = useState([]);
    
    const {category} = useParams()  

     
    const tomarProducto = () => {
     return new Promise ((resolve,reject) => {
            
            resolve(Productos)})}
            

     useEffect( () => {
         setProducts([])
        console.log("categoria;" , category)
        tomarProducto()
       .then((response)=>{
        filtroCategoria(response)
              })

     },[category])    


     const filtroCategoria = (array) =>{
         return array.map((item)=>{
             console.log("hola", item.category)
           
             if(item.category == category){
                 return setProducts(products =>[...products, item])
             }
         })
     }
    
      return(
          
     
     <>
     
      <CardItem filtro={products} />
     </>
        )
    }
    
    

export default ProductoList
