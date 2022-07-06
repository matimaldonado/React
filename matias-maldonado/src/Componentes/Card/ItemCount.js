import "./Card.css";
import ItemComprar from './ItemComprar';

const Contador = ({cantidad, data})=>{
 

    
        return(
        <>
       
        <ItemComprar data = {data} stock={cantidad}/>
        
        </>
    )
}

export default Contador
