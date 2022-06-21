import CartFinally from "../CartFinally/CartFinally"
import { Button} from "@mui/material"
import CartContext  from "../Context/CartContext"
import { useContext, useState } from "react"
import TextField from '@mui/material/TextField'
import { addDoc, collection } from 'firebase/firestore'
import { useNavigate } from "react-router-dom"
import Modal from "../Card/Modal"
import db from "../Firebase/firebaseConfig"

const Cart = () => {
    const { cartListItems,cleanCartProducts , totalPrice, cantidadTotal} = useContext(CartContext)
    const [showModal, setShowModal] = useState(false)
    const [formValue, setFormValue] = useState({
        name: '',
        phone: '',
        email: ''
    })
    const [order, setOrder] = useState({
        buyer: {},
        items: cartListItems.map( item => {
            return {
                id: item.id,
                title: item.title,
                price: item.price,
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
        <div>
        <Modal title={success ? 'Compra exitosa' : 'Formulario de contacto'} open={showModal} handleClose={() => setShowModal(false)}>
            {success ? (
                <div>
                    La order se genero con exito!
                    Numero de orden: {success}
                    <button onClick={finishOrder}>Aceptar</button>
                </div>
            ) : (
                <form className="form-contact" onSubmit={handleSubmit}>
                    <TextField 
                        id="outlined-basic" 
                        name="name"
                        label="Nombre y Apellido" 
                        variant="outlined" 
                        value={formValue.name}
                        onChange={handleChange}
                    />
                    <TextField 
                        id="outlined-basic" 
                        name="phone"
                        label="Telefono" 
                        variant="outlined" 
                        value={formValue.phone}
                        onChange={handleChange}
                    />
                    <TextField 
                        id="outlined-basic" 
                        name="email"
                        label="Mail" 
                        value={formValue.email}
                        variant="outlined" 
                        onChange={handleChange}
                    />
                    <button type="submit">Enviar</button>
                </form>
            )}
            
        </Modal>
    </div>
    </>
    )

}


export default Cart
