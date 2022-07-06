import "./Card.css"
import ItemList from '../Item/ItemList';
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { collection, getDocs } from "firebase/firestore";
import db from "../Firebase/firebaseConfig"

const CardItem = () => {
  const [products , setProducts] = useState([]);
  const {category} = useParams()


    useEffect(()=>{ 
    setProducts([])
    getProducts()
    .then( (prod) => {
      
        if(category) { 

          const filtroProducto = prod.filter(item=>item.Categoria === category)
          
          setProducts(filtroProducto)
            console.log("Item", filtroProducto)

        } else {
          
          setProducts(prod)
          console.log("FUnciona", prod)
        }
        
        })
    },[category])

  const getProducts = async() =>{

    const productsSnapshot = await getDocs(collection(db, "Detalle Productos"));

    const listaProductos = productsSnapshot.docs.map((doc)=>{

        let product = doc.data()
        product.id = doc.id
          return product
      }) 
      
    return listaProductos
  }
return (
  <>
    <h1>Nuestras Ofertas</h1>
    <ItemList products = {products}/>
  </>
    
)}

export default CardItem

