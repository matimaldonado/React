//Cargar datos del producto y se lo pasa al app
import "../Card/Card.css"
import ItemComprar from "../Card/ItemComprar";
import Contador from "../Card/ItemCount"
import { Button, Card } from '@mui/material';
import { useState, useEffect } from "react"
 

const Item = (props)=>{
    const {image,title,price} = props

    return(
        <>
        <Card id="Card1" >
        <div className="card-item">
            <img alt="imagen" id="imagenCard" src={`./${image}`}/>
            <p className='titulo-card'>{title}</p>
            <span> {price}</span>
            <Contador/>
            <Button variant={'contained'}>Detalle</Button >
            <ItemComprar/>

        </div>
        </Card>
        </>
    )
}

const Productos={
        title: "Alfombra Corazon",
        price:"$1500",
        image:"Alfombras.PNG",
        description:"Alfombras corazon varios colores",
        stock: "5",
        id:"Pdt1",

    }
const Productos2={
        title: "Reparadores",
        price:"$300",
        image:"Repasadores.PNG",
        description:"Repasadores varios colores y motivos",
        stock: "20",
        id:"Pdt2",

    }
const Productos3={
        title: "Perfume",
        price:"$3500",
        image:"Perfumesvarios.jpg",
        description:"Perfumes Natura Humor",
        stock: "3",
        id:"Pdt3",

    }


function PromesaProducto () {

        const [PromProducto , setPromProducto] = useState({});
        
        const getProducts = () => {
            return new Promise ((resolve,reject) => {
                setTimeout(() => {
                resolve(Productos)}, 2000)
            })
        }
        useEffect (() => {
            getProducts()
            .then ((response) => {
                console.log("Respuesta promesa: ", response)
                
            })
        }, [])    
        }


export {Productos,Productos2,Productos3, PromesaProducto, Item}
