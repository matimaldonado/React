import { useEffect } from "react";

window.addEventListener()
useEffect(()=>{
    return()=>{
        window.removeEventListener("scroll")
    }
}),

//Sirve para eliminar el evento que hemos creado para que no siga figurando
//Para usarlo la sintaxis es similar a Javascript 


//Syntethic Events

function App() {
    const handleClick = (e)=>{
        console.log(e);
        console.log(e.target)

    };

    const handleChange = (e)=> {
        console.log ("Texto desde input", e.target.name)
    }


    return(
        <>
        <div>
            <button onClick={handleClick}>Boton</button>
            <input type="text" name="nombre" onChange={handleChange}/>

            
        </div>
        </>
    );
    
}

//En este caso la "e" quiere mostrar lo que refiere el Sintethyc event
//Va a mostrar todos los datos que a este refiere.

