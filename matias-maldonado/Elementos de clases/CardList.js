// import { Grid } from "@mui/material"
// import { useState, useEffect } from "react"


// const CardList= ({title}) =>{
//     const [products , setProducts] = useState({})
    
// //Promesas, Sirven para saltar el sincronismo de Js y tomar el resultado más adelante
//     const getProducts = () => {
//         return new Promise ((resolve,reject) => {
//             resolve(productos)}, 4000)
//         }
// // el número 4000 representa el tiempo de espera para ejectuurase
//         getProducts()
//         .then ((response) => {
//             console.log("Respuesta promesa: ", response)
//         })

//         .catch ((err) =>{console.log("Fallo la llamada.", err)})

//         .finally(() =>{

//         }, [])
// //CARGA DE API        
//         useEffect(()=>{
//             fetch("https://jsonplaceholder.typicode.com/users") ,{

//                 headers : {
//                     //SE cargan elementos como token,o para indicar el origen de la llamada o el tipo de archivo
//                     "Access-Control-Allow-Origin": "http://localhost:3000",
//                     "Content-Type": "aplication/json",

//                 },
//                 body: JSON.stringify({
//                     name:"Matias",
//                     mail: "jasdlas@gmail.com"
//                 })
//             }
            
//             .then((response)=> {
//                 return response.json()
//             })
//             .then((res)=>{
//                 console.log("respuesta : ", res)
//             })
//         },[])
        
//         return(
//         <>
//         <h2>Titulo</h2>
//         {console.log("state products: " , products)}
//         <Grid container spacing={2}>
//         {
//             productos.map(({title,price}) => {
//                 console.log("item actual: ", item)
//                 return (
//                     <Grid item md={3} key={id}>
//                         <CardItem title={productos.title} price={productos.price}/>
//                     </Grid>)

//             })
//         }
//         </Grid>
//         </>
//         )
// }

// export default CardList
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
  