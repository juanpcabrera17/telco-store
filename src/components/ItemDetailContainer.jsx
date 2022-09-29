import React from 'react';
import ItemDetail from './ItemDetail';
import { useState, useEffect } from 'react';
import {useParams} from 'react-router-dom';
import { collection, getDoc, doc } from 'firebase/firestore';
import { db } from '../firebase/firebase';

export const ItemDetailContainer = () => {


	const [detalleItem, setDetalleItem] = useState({});
	const [loading, setLoading] = useState(true);

	const {idcategory, id} = useParams();

	console.log(idcategory, id)


	useEffect(() => {
		const coleccionProductos = collection(db, "products")
		const referenciaDoc = doc(coleccionProductos, id)
		getDoc(referenciaDoc)
		.then((res)=>{
			setDetalleItem({
				id:res.id,
				...res.data()
			})
		})
		.catch((err) => {
			console.log("No se pudo mostrar el detalle del producto")
		})
		.finally(() => {
			setLoading(false);
		})
	},[])

	console.log(detalleItem)

	return (
		<div>
			{loading ? <p>Cargando detalle del producto...</p> :
				<ItemDetail detalleItem={detalleItem} />
			}
		</div>
	)
}
