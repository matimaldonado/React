import './NavBar.css'
import {useState} from 'react'
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import MarketBtn from './Cartwidget';
import { Link } from 'react-router-dom';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';


const NavBar = () => {
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const categorys = ["Alfombras","Repasadores","Perfumes"]
  
  return(
        <> 
        <h1> <Link id="titulo" to='/'>Mati Maldonado</Link></h1>
      <AppBar position="static">
        <Toolbar >
          <Button id='buton' color="inherit"> <Link id='buton' to="/">Inicio</Link></Button>
          
          <Button
        
        aria-controls={open ? 'basic-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        onClick={handleClick}
        id='buton' 
        color="inherit"
      >
      Productos
      </Button>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          'aria-labelledby': 'basic-button',
        
        }}
      >
        {categorys.map((cat)=>{
         return <MenuItem onClick={handleClose}><Link id="buton" to={`/products/${cat}`}>{cat}</Link></MenuItem>
        })}
        
      </Menu>




          <Button id='buton' color="inherit">¿Quienes Somos?</Button>
          <Button id='buton' color="inherit"> <Link id='buton' to="/Contacto">Contacto</Link> </Button>
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
