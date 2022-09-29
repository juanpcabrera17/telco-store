import React, {useState, useEffect} from 'react'
import {getFirestore, doc, getDoc} from 'firebase/firestore'

export default function TestLecturaProducto() {
    const [producto, setProducto] = useState({})
   
    useEffect(()=>{
        const db = getFirestore()
        const productoRef = doc(db, 'products', 'ZEmqTLiDY5VpildgX4gC')
        getDoc(productoRef).then((res)=>{
            const miobjeto = {...res.data(), id: res.id}
            console.log(miobjeto)
            setProducto(miobjeto)

        })

    }, [])


    return (
    <div>
        id: {producto.id} <br/>
        nombre: {producto.nombre} <br/>
        descripcion: {producto.descripcion} <br/>
        stock: {producto.stock} <br/>

    
    </div>
  )
}
