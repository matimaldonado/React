import { Button } from '@mui/material';
import "./Card.css";
import { useState } from 'react';
import ItemComprar from './ItemComprar';

const Contador = ({cantidad})=>{
    const [Count,setCount] = useState(1)
    
    
    const addItem = ()=>{
        console.log("stock = ",cantidad)
        if(Count < cantidad){
        setCount(Count + 1)
    }}
    
    const restItem = () => {
        if(Count > 1){
        setCount (Count - 1)
    }

    }
        return(
        <>
        <div className='Contador'>
        <Button onClick={restItem} id='botonMenos'>-</Button>
        <p id="Cantidad">{Count}</p>
        <Button onClick={addItem} id='botonMas'>+</Button>
        </div>
        <ItemComprar total={Count}/>
        </>
    )
}

export default Contador
