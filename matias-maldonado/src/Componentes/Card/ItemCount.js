import { Button } from '@mui/material';
import "./Card.css";
import { useState } from 'react';
import ItemComprar from './ItemComprar';

const Contador = ({cantidad, data})=>{
 

    
        return(
        <>
       
        <ItemComprar data = {data} stock={cantidad}/>
        
        </>
    )
}

export default Contador
