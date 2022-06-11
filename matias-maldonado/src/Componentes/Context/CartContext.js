import { ProductionQuantityLimits } from "@mui/icons-material";
import { createContext, useState } from "react"; 

const CartContext = createContext()

const CartProvider = ({children}) =>{

    const [cartListItems, setCartListItems] = useState ([])
    const [totalPrice, setTotalPrice] = useState ([])

const addProductToCart = ({data}) => {
   
    
    const isInCart =cartListItems.find((cartItem) => { return cartItem.id === data.id})

    if (!isInCart){
        console.log("Se agrego algo" , data)    
        setCartListItems(cartListItems => [...cartListItems, data])
        setTotalPrice(Number(totalPrice + data.price))
        
    }}

const cartInfo = {
    cartListItems,
    addProductToCart,
    totalPrice
}
    
return(
        <CartContext.Provider value={cartInfo}>

        {children}

        </CartContext.Provider>
    )
}


export default CartContext
export {CartProvider }