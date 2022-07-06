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

  const categorys = ["Alfombras","Almohadones","Manteles","Medias","Perfumes","Repasadores","Sabanas","Toallones"]
  
    return(
          <> 
          <h1 id="titulo"> <Link id="titulo" to='/'><img src='Titulo.PNG' alt='ImagenLogo'/> Mati Maldonado</Link></h1>
          <AppBar position="static">
              <Toolbar >
                <Button id='buton' color="inherit"> <Link id='buton' to="/">Inicio</Link></Button>
                
                <Button
              
                  aria-controls={open ? 'basic-menu' : undefined}
                  aria-haspopup="true"
                  aria-expanded={open ? 'true' : undefined}
                  onClick={handleClick}
                  id='buton' 
                >
                  Productos
                </Button>
                <Menu
                  id="basic-menu"
                  anchorEl={anchorEl}
                  open={open}
                  onClose={handleClose}
                  MenuListProps={{
                    'aria-labelledby': 'basic-button'}}
                >
                    {categorys.map((cat)=>{
                        return <MenuItem onClick={handleClose}><Link id="buton-interno" to={`/products/${cat}`}>{cat}</Link></MenuItem>
                    })}
              
                </Menu>

                <Button id='buton' color="inherit"><Link id='buton' to="/QuienesSomos">¿Quienes Somos?</Link></Button>
                <Button id='buton' color="inherit"> <Link id='buton' to="/Contacto">Contacto</Link> </Button>
                <MarketBtn/>
        
              </Toolbar>
        </AppBar>
          </>
      )
}

export default NavBar
