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
    }else{
        isInCart.Cantidad += data.Cantidad;
        setCartListItems(cartListItems);
        setCantidad(cantidad + data.Cantidad)
        setTotalPrice(Number(totalPrice + (data.Precio * data.Cantidad)))
        setCantidadTotal(Number(cantidadTotal + data.Cantidad))
    }
    }

    const sumItem = (prod)=>{
        if(prod.Cantidad < prod.stock){
        
        prod.Cantidad = prod.Cantidad + 1 
        setTotalPrice(Number(totalPrice + prod.Precio))
        setCantidadTotal(Number(cantidadTotal + 1))
    }}
    
    const restItem = (prod)=>{
        if(prod.Cantidad > 1){
            prod.Cantidad = prod.Cantidad - 1
        setTotalPrice(Number(totalPrice - prod.Precio))
        setCantidadTotal(Number(cantidadTotal - 1))
        }}

    const cleanCartProducts = () => {
        setTotalPrice(0)
        setCartListItems([])
        setCantidadTotal(0)
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
    cantidadTotal,
    cleanCartProducts,
    deletedItem,
    cantidad,
    restItem,
    sumItem,
}
    
return(
        <CartContext.Provider value={cartInfo}>

        {children}

        </CartContext.Provider>
    )
}


export default CartContext
export {CartProvider }