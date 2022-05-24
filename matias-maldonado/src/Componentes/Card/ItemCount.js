import { Button } from '@mui/material';
import "./Card.css";
import { useState } from 'react';


const Contador = (propiedades)=>{
    const [Count,setCount] = useState(1)
    const [Stock, setStock]= useState(5)
    
    const addItem = ()=>{
        if(Count < Stock){
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
        </>
    )
}

export default Contador
