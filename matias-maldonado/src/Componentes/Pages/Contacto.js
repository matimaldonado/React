 import { Button } from "@mui/material"
 import { useState } from "react"
 import { addDoc, collection } from 'firebase/firestore'
 import db from "../Firebase/firebaseConfig"
 import TextField from '@mui/material/TextField'
 import { useNavigate } from "react-router-dom"
 import "./pages.css"
 const Contacto = ()=>{

     const [verModal, setVerModal] = useState(false)
     const [success, setSuccess] = useState()
     const [formValue, setFormValue] = useState({
         Nombre: "",
         Telefono: "",
         Email: "",
         Consulta: ""
     })

     const handleChange = (e) => {
         setFormValue({...formValue, [e.target.name]: e.target.value})
     }

     const [order, setOrder] = useState({
         contact: {}    })

     const handleSubmit = (e) => {
         e.preventDefault()
         setOrder({...order, contact: formValue})
         saveData({...order, contact: formValue})
     }

     const navigate = useNavigate()
     const finishOrder = () => {
         navigate('/')
     }

     const saveData = async (newContact) => {
         const orderFirebase = collection(db, 'Contacto')
         const contactDoc = await addDoc(orderFirebase, newContact)
         setSuccess(contactDoc.id)
         
     }

     return(
         <>
        
         <div>
         <h1 id="tituloContacto">Contacto</h1>

         </div>

         <div >
             <div title={success? "Compra Finalizada" : "Datos contacto"} open={verModal} handleClose={() => setVerModal(true)}>
                
                 {success ? (
                    <div >
                     
                     <h4> Gracias por su consulta, en breve serás contactado</h4>
                     <Button id="butonCart" onClick={finishOrder}>Volver al Inicio</Button>
                     
                    </div>
                 ) : (
                     <form id="formContacto" onSubmit={handleSubmit}>
                             <TextField 
                                id= "datosForm"
                                 name="Nombre"
                                 label="Nombre y Apellido"  
                                 value={formValue.Nombre}
                                 onChange={handleChange}
                                 required
                             />
                             <TextField 
                                 id= "datosForm"
                                 name="Telefono"
                                 label="Telefono" 
                                 value={formValue.Telefono}
                                 onChange={handleChange}
                                 required
                             />
                             <TextField 
                                 id= "datosForm"
                                 name="Email"
                                 label="Email" 
                                 value={formValue.Email} 
                                 onChange={handleChange}
                                 required
                             />
                             <TextField 
                                 id= "datosForm"
                                 name="Consulta"
                                 label="Ingrese su Consulta" 
                                 value={formValue.Consulta} 
                                 onChange={handleChange}
                                 required
                             />
                             <Button id="butonCart" type="submit">Enviar</Button>
                     </form>
         )}
        
     </div>
 </div>
 </>
     )}

 export default Contacto