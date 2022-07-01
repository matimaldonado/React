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

    const cleanCartProducts = () => {
        setTotalPrice(0)
        setCartListItems([])
        setCantidadTotal(0)
    }
    const sumItem = (data) =>{
        setCantidad (cantidad + 1)
        setCantidadTotal (cantidadTotal + 1)
        setTotalPrice (totalPrice + (data.Precio*data.Cantidad))
    }
    const deletedItem = (data) => {
     
        setCartListItems(cartListItems.filter( (cartProduct) => cartProduct.id !== data.id) )
        setCantidadTotal(Number(cantidadTotal - data.Cantidad) )
        setTotalPrice(Number(totalPrice-(data.Precio*data.Cantidad)))
       
    }

const cartInfo = {
    cartListItems,
    addProductToCart,
    totalPrice,
    cantidad,
    cantidadTotal,
    cleanCartProducts,
    deletedItem,
    sumItem
}
    
return(
        <CartContext.Provider value={cartInfo}>

        {children}

        </CartContext.Provider>
    )
}


export default CartContext
export {CartProvider }