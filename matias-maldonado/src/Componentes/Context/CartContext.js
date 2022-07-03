import { createContext, useState } from "react"; 

const CartContext = createContext()

const CartProvider = ({children}) =>{

    const [cartListItems, setCartListItems] = useState ([])
    const [totalPrice, setTotalPrice] = useState ([])
    const [cantidadTotal, setCantidadTotal] = useState([])
    const [cantidad, setCantidad] = useState([])
    const addProductToCart = (data) => {
   
    
    const isInCart =cartListItems.find((cartItem) => {return cartItem.id === data.id})
    if (!isInCart){
        console.log("Se agrego algo" , data)    
        setCartListItems([...cartListItems, data])
        setTotalPrice(Number(totalPrice + (data.Precio * data.Cantidad)))
        setCantidadTotal(Number(cantidadTotal + data.Cantidad))
        setCantidad (data.Cantidad)
    }else{
        setCantidad(cantidad + data.Cantidad)
        setTotalPrice(Number(totalPrice + (data.Precio * data.Cantidad)))
        setCantidadTotal(Number(cantidadTotal + data.Cantidad))
    }
    }
    const sumItem = (prod)=>{
        console.log(prod)
        if(cantidad < prod.stock){
        
        setCantidad(cantidad + 1 )
        setTotalPrice(Number(totalPrice + (prod.Precio * prod.Cantidad)))
        setCantidadTotal(Number(cantidadTotal + prod.Cantidad))
    }}
    
    const restItem = (prod)=>{
        if(cantidad > 1){
            setCantidad(cantidad - 1 )
        setTotalPrice(Number(totalPrice - (prod.Precio * prod.Cantidad)))
        setCantidadTotal(Number(cantidadTotal - prod.Cantidad))
        }}
    const cleanCartProducts = () => {
        setTotalPrice(0)
        setCartListItems([])
        setCantidadTotal(0)
    }
    
  

    const deletedItem = (data) => {

        setCartListItems(cartListItems.filter( (cartProduct) => cartProduct.id !== data.id) )
        setCantidadTotal(Number(cantidadTotal - cantidad) )
        setTotalPrice(Number(totalPrice-(data.Precio*cantidad)))
       
    }

const cartInfo = {
    cartListItems,
    addProductToCart,
    totalPrice,
    cantidadTotal,
    cleanCartProducts,
    deletedItem,
    cantidad,
    restItem,
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