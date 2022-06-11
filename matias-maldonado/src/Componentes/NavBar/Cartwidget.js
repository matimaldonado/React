import LocalGroceryStoreIcon from '@mui/icons-material/LocalGroceryStore';
import { Button} from '@mui/material';
import { useContext, useState } from 'react';
import CartContext from '../Context/CartContext';
import Menu from '@mui/material/Menu';
import './NavBar.css'
import { Link } from 'react-router-dom';
import DeleteIcon from '@mui/icons-material/Delete';

const MarketBtn = () =>{

    const { cartListItems } = useContext(CartContext)
    const [anchorEl, setAnchorEl] = useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
    return(
       <>
        <Button id='btnCarrito' color='inherit'  onClick={handleClick} >
            <LocalGroceryStoreIcon/>
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
       <div id="botonCompra">
                    {cartListItems.length === 0 && (
                        <>
                            <p>No hay productos agregados al carrito</p>
                            
                        </>
                    )} 
             {cartListItems.map((prod)=>{

         return(
        <>
         <div key ={prod.id} id="detalleCompra">
            <h3>{prod.title}</h3>
            <img alt={`${prod.descripcion}`} src={`../${prod.image}`}/>
            <p>{prod.descripcion}</p>            
            <h2>{prod.price}</h2>
          <Button>
              <DeleteIcon />
          </Button>
          </div>
       </>
       )})}
       <Button><Link id="botonCarrito" to= "/Cart"> Terminar compra </Link></Button>  
       </div>         
      </Menu>
        </>
    )
}


export default MarketBtn