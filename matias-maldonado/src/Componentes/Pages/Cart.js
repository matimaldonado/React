import CartFinally from "../CartFinally/CartFinally"
import { Button} from "@mui/material"
import CartContext  from "../Context/CartContext"
import { useContext, useState } from "react"
import TextField from '@mui/material/TextField'
import { addDoc, collection } from 'firebase/firestore'
import { useNavigate } from "react-router-dom"
import Modal from "../Card/Modal"
import db from "../Firebase/firebaseConfig"
import "../CartFinally/Cart.css"


const Cart = () => {
    const { cartListItems,cleanCartProducts , totalPrice, cantidadTotal} = useContext(CartContext)
    const [showModal, setShowModal] = useState(false)
    const [formValue, setFormValue] = useState({
        Nombre: '',
        Telefono: '',
        Email: ''
    })
    const [order, setOrder] = useState({
        buyer: {},
        items: cartListItems.map( item => {
            return {
                id: item.id,
                title: item.Tipo,
                price: item.Precio,
            }
        } ),
        total: totalPrice
    })
    
    const [success, setSuccess] = useState()
    const navigate = useNavigate()

    const handleSubmit = (e) => {
        e.preventDefault()
        setOrder({...order, buyer: formValue})
        saveData({...order, buyer: formValue})
    }

    const handleChange = (e) => {
        setFormValue({...formValue, [e.target.name]: e.target.value})
    }

    const finishOrder = () => {
        navigate('/')
    }
    
    const saveData = async (newOrder) => {
        const orderFirebase = collection(db, 'ordenes')
        const orderDoc = await addDoc(orderFirebase, newOrder)
        console.log("orden generada: ", orderDoc.id)
        setSuccess(orderDoc.id)
        cleanCartProducts()
    }

    return(
            <>
            <CartFinally/>
            
            <div>
                <h2>Total</h2>
                <h3>${totalPrice} </h3>
                <h2>Cantidad de Items</h2>
                <h3>{cantidadTotal}</h3>
    
    
            </div>
            <div>
            <Button id="butonCart" onClick={() => setShowModal(true)}>Finalizar Compra</Button>
            </div>
        <div >
        <Modal title={success? "Compra Finalizada" : "Datos contacto"} open={showModal} handleClose={() => setShowModal(false)}>
        
        {success ? (
                <div id="Finalizacompra">
                  <h3> Su orden fue registrada exitosamente</h3>
                    <p>Orden n°: {success}</p>
                    <Button id="butonCart" onClick={finishOrder}>Volver al Inicio</Button>
                </div>
            ) : (
                <form id="Contacto" onSubmit={handleSubmit}>
                    <TextField 
                        name="Nombre"
                        label="Nombre y Apellido"  
                        value={formValue.Nombre}
                        onChange={handleChange}
                        required
                    />
                    <TextField 
                        name="Telefono"
                        label="Telefono" 
                        value={formValue.Telefono}
                        onChange={handleChange}
                        required
                    />
                    <TextField 
                        
                        name="Email"
                        label="Email" 
                        value={formValue.Email} 
                        onChange={handleChange}
                        required
                    />
                    <Button id="butonCart" type="submit">Enviar</Button>
                </form>
            )}
            
        </Modal>
    </div>
    </>
    )

}


export default Cart
