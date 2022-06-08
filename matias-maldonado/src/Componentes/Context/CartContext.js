import { createContext, useState } from "react"; 

const CartContext = createContext()

const CartProvider = ({children}) =>{
const [cartListItems, setCartListItems] = useState ([])


const addProductToCart = (products) => {
   
    
    const isInCart =cartListItems.find((cartItem) => { return cartItem.id === products.id})

    if (!isInCart){
        console.log("Se agrego algo" , products)    
        setCartListItems(cartListItems => [...cartListItems, products])
        
    }
}

const cartInfo = {
    cartListItems,
    addProductToCart
}
    
return(
        <CartContext.Provider value={cartInfo}>

        {children}

        </CartContext.Provider>
    )
}


export default CartContext
export {CartProvider }