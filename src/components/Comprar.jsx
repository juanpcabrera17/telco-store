import React, { useState, useEffect } from 'react'
import { useCart } from '../context/CartContext'
import { getDatabase } from '../firebase/firebase'
import { addDoc, collection, getFirestore } from 'firebase/firestore'

export function Comprar() {
    const [name, setName] = useState('')
    const [phone, setPhone] = useState('')
    const [email, setEmail] = useState('')
    const [idCompra, setIdCompra] = useState('')
    const [showId, setShowId] = useState('')

    const { cart, cartTotal, clear } = useCart();
    const [alert, setAlert] = useState('')
    const [desactivarBoton, setDesactivarBoton] = useState(false)

    function terminarCompra() {
        console.log(name, phone, email)

        if(!name || !phone || !email){
            setAlert('Campos incompletos')
            return
        }

        setDesactivarBoton(true)

        setShowId(true)
        let order = {
            buyer: { name, phone, email },
            items: cart.map((item) =>
            ({
                id: item.id,
                title: item.nombre,
                price: item.precio
            })),
            date: new Date().toISOString().replace("T", "|"),
            total: cartTotal()
        }

        const db = getFirestore();
        const miCollection = collection(db, "orders")
        addDoc(miCollection, order)
            .then(({ id }) => {
                setIdCompra(id)
            })
            .catch((e)=>{
                setDesactivarBoton(false)

            })
    }


    return (
        <div>
            {alert && alert}
            <input value={name} onChange={(e) => setName(e.target.value)} placeholder="ingrese su nombre" type={'text'} />
            <input value={phone} onChange={(e) => setPhone(e.target.value)} placeholder="ingrese su telefono" type={'text'} />
            <input value={email} onChange={(e) => setEmail(e.target.value)} placeholder="ingrese su email" type={'text'} />
            {!idCompra ? !desactivarBoton ?
                <button onClick={terminarCompra}>Terminar compra</button>
                : 'Loading' : <p>Gracias por tu compra. Tu número de ticket es {idCompra}</p>
            }




        </div>
    )
}

