//Los componente se utilizar con Upper CamelCase, es decir la primer letra en mayúscula

import './NavBar.css'
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import MarketBtn from './Cartwidget';
import { Link } from 'react-router-dom';


const NavBar = () => {
    return(
        <> 
        <h1> <Link to='/'>Mati Maldonado</Link></h1>
      <AppBar position="static">
        <Toolbar >
          <Button id='buton' color="inherit"> <Link to="/">Inicio</Link></Button>
          <Button id='buton' color="inherit"> <Link to="/Products/:category">Productos</Link> </Button>
          <Button id='buton' color="inherit">¿Quienes Somos?</Button>
          <Button id='buton' color="inherit"> <Link to="/Contacto">Contacto</Link> </Button>
          <MarketBtn/>
   
        </Toolbar>
      </AppBar>
        </>
    )
}
//Hay que exportar los archivos a donde lo necesito al elemento
export default NavBar
//<>Son etiquetas fantasmas que sirven para cargar más elementos de los que tenemos.
// En el caso de queres exportar algo más, tenemos que hacer un 
// export {"nombre funcion", "nombre funcion2"} y lo mismo para importar

