import React, { useState, useEffect } from 'react'
import { getFirestore, collection, getDocs } from 'firebase/firestore'

export default function TestLecturaProductos() {
    const [productos, setProductos] = useState([])

    useEffect(() => {
        const db = getFirestore()
        const collectionRef = collection(db, 'products')
        getDocs(collectionRef).then((res) => {
            let productosLimpios = []
            res.docs.forEach((item)=>{
                const objetoLimpio = {...item.data(), id: item.id}
                productosLimpios.push(objetoLimpio)
            })
            
			setProductos(productosLimpios)
        })


    }, [])


    return (
        <div>
            {productos.map((producto) => (
                <div key={producto.id}>
                    id: {producto.id} <br />
                    nombre: {producto.nombre} <br />
                    descripcion: {producto.descripcion} <br />
                    stock: {producto.stock} <br />
					<br />
					<br />
                </div>
            ))}
        </div>
    )
}
