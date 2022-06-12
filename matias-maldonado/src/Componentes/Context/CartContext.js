import { createContext, useState } from "react"; 

const CartContext = createContext()

const CartProvider = ({children}) =>{

    const [cartListItems, setCartListItems] = useState ([])
    const [totalPrice, setTotalPrice] = useState ([])
    const [cantidad, setCantidad] = useState([])
    const [cantidadTotal, setCantidadTotal] = useState([])

const addProductToCart = ({data, Count}) => {
   
    
    const isInCart =cartListItems.find((cartItem) => { return cartItem.id === data.id})

    if (!isInCart){
        console.log("Se agrego algo" , data)    
        setCartListItems([...cartListItems, data])
        setTotalPrice(Number(totalPrice + data.price))
        setCantidad (Count) 
        setCantidadTotal(Number(cantidadTotal + cantidad))
    }}

const cartInfo = {
    cartListItems,
    addProductToCart,
    totalPrice,
    cantidad,
    cantidadTotal
}
    
return(
        <CartContext.Provider value={cartInfo}>

        {children}

        </CartContext.Provider>
    )
}


export default CartContext
export {CartProvider }