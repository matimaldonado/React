import { createContext, useState } from "react"; 

const CartContext = createContext()

const CartProvider = ({children}) =>{

    const [cartListItems, setCartListItems] = useState ([])
    const [totalPrice, setTotalPrice] = useState ([])
    const [cantidad, setCantidad] = useState([])
    const [cantidadTotal, setCantidadTotal] = useState([])

const addProductToCart = (data) => {
   
    
    const isInCart =cartListItems.find((cartItem) => { return cartItem.id === data.id})

    if (!isInCart){
        console.log("Se agrego algo" , data)    
        setCartListItems([...cartListItems, data])
        setTotalPrice(Number(totalPrice + (data.Precio * data.Cantidad)))
        setCantidad (data.Cantidad) 
        setCantidadTotal(Number(cantidadTotal + data.Cantidad))
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