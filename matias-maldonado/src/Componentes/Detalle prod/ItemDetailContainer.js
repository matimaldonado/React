import { useEffect, useState } from "react";
import ItemDetail from "./ItemDetail";
import { useParams } from "react-router-dom";
import Productos from "./Detalleprod";
import { doc, getDoc } from "firebase/firestore";
import db from "../Firebase/firebaseConfig";

const ItemDetailContainer = () => {

    const {id} = useParams()

    const [detalle , setDetalle] = useState([]);
  
   useEffect(()=>{
    getProduct()
    .then((item)=>{
      console.log("item", item)
      setDetalle(item)
    })
  },[id])

    const getProduct = async()=>{

      const refDoc= doc(db,"Detalle Productos", id)
      const docSnaptshop = await getDoc(refDoc)
      let product = docSnaptshop.data()
      product.id = docSnaptshop.id 
      return product
    } 

  
      return(
   
   <>
    <ItemDetail prod = {detalle} />
    
   </>
      )
  }
  

  export default ItemDetailContainer