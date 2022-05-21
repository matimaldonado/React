import { Grid } from "@mui/material"
import { useState, useEffect } from "react"
const CardList= ({title}) =>{
    const [products , setProducts] = useState({})
    const productos=[
        {
            title: "",
            price:"",
            image:"",
            description:"",
            stock: "",
            id:"",

        },

        {
            title: "",
            price:"",
            image:"",
            description:"",
            stock: "",
            id:"",

        },
        {
            title: "",
            price:"",
            image:"",
            description:"",
            stock: "",
            id:"",

        },
        {
            title: "",
            price:"",
            image:"",
            description:"",
            stock: "",
            id:"",

        },
    ]
//Promesas, Sirven para saltar el sincronismo de Js y tomar el resultado más adelante
    const getProducts = () => {
        return new Promise ((resolve,reject) => {
            resolve(productos)}, 4000)
        }
// el número 4000 representa el tiempo de espera para ejectuurase
        getProducts()
        .then ((response) => {
            console.log("Respuesta promesa: ", response)
        })

        .catch ((err) =>{console.log("Fallo la llamada.", err)})

        .finally(() =>{

        })
        
        return(
        <>
        <h2>Titulo</h2>
        {console.log("state products: " , products)}
        <Grid container spacing={2}>
        {
            productos.map(({title,price}) => {
                console.log("item actual: ", item)
                return (
                    <Grid item md={3} key={id}>
                        <CardItem title={productos.title} price={productos.price}/>
                    </Grid>)

            })
        }
        </Grid>
        </>
        )
}

//Prueba de promesa
// // const ListaProducto = () =>{
// //     const productos=[
// //       {
// //         Tipo:"Remera",
// //         Talle:42,
// //         Color:"Gris",
// //         Nombre: "Remera gris",
// //         Precio:4000,
// //         id:"idr1",
// //       },
// //       {
// //         Tipo:"Pantalon",
// //         Talle:44,
// //         Color:"Negro",
// //         Nombre: "Pantalon negro",
// //         Precio:5000,
// //         id:"idp1",
// //       },
// //       {
// //         Tipo:"Remera",
// //         Talle:40,
// //         Color:"Naraja",
// //         Nombre: "Remera Naraja",
// //         Precio:2000,
// //         id:"idr2",
// //       },
// //     ]
  
// //     const TomarProductos = ()=>{
// //       return new Promise ((resolve,reject) =>{
// //         resolve(productos)
// //       },(3000))
  
// //     }
   
// //     TomarProductos()
// //     .then((response)=>{
// //       console.log ("Bien hecho: ", response)
// //     })
// //     .catch((err) =>{
// //       console.log("Mal armado", err)
// //     })
// //   },
  
  
// //   export default ListaProducto
  