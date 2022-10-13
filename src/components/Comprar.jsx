import React, { useState, useEffect } from 'react'
import { useCart } from '../context/CartContext'
import { getDatabase } from '../firebase/firebase'
import { addDoc, collection, getFirestore } from 'firebase/firestore'
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';

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

        if (!name || !phone || !email) {
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
            .catch((e) => {
                setDesactivarBoton(false)
            })
    }


    return (
        <div style={{display: "flex", flexDirection: "column", alignItems: "center"}}>
            {alert && <Typography variant="h5" gutterBottom sx = {{marginTop: "70px"}}>{alert}</Typography>}

            <Card elevation={6} style={{border: "10px solid #FF6701", padding: "50px", margin: "100px", width: "50%"}}>
                <CardContent>
                    <Box
                        component="form"
                        sx={{
                            '& > :not(style)': { m: 1, width: '25ch' },
                        }}
                        noValidate
                        autoComplete="off"
                    >
                        <Typography variant="h5" gutterBottom>Ingresá tus datos</Typography>
                        <TextField error={alert} id="outlined-basic" label="Nombre completo" variant="outlined" color="secondary" value={name} onChange={(e) => setName(e.target.value)} />
                        <TextField error={alert} id="outlined-basic" label="Número de teléfono" variant="outlined" color="secondary" value={phone} onChange={(e) => setPhone(e.target.value)} />
                        <TextField error={alert} id="outlined-basic" label="Dirección de Email" variant="outlined" color="secondary" type={email} value={email} onChange={(e) => setEmail(e.target.value)} />
                    

                    {!idCompra ? !desactivarBoton ?
                        <Button style={{marginTop: "50px"}}variant="contained" onClick={terminarCompra}>Terminar compra</Button>
                        : 'Loading' : <Typography variant="h5" gutterBottom>Gracias por tu compra. Tu número de ticket es {idCompra}</Typography>
                    }
                    </Box>


                </CardContent>
            </Card>

        </div>
    )
}

