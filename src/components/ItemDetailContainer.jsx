import React from 'react';
import ItemDetail from './ItemDetail';
import { useState, useEffect } from 'react';
import productos from './productos';
import Grid from '@mui/material/Unstable_Grid2';
import {useParams} from 'react-router-dom';

export const ItemDetailContainer = () => {


	//promesa q a los 2 segundos devuelve un producto, cuando lo devuelve se lo pasa a itemdetail, detalle de un item puntual

	//const { greeting } = props //desestructuracion de greeting
	const [detalleItem, setDetalleItem] = useState({});
	const [loading, setLoading] = useState(true);

	const {idcategory, idproduct} = useParams();

	console.log(idcategory, idproduct)

	useEffect(() => {
		let promesaDetalle = new Promise((resolve, reject) => {
			setTimeout(() => {
				resolve(productos);
			}, 2000);
		});

		promesaDetalle
			.then((res) => {
				/* setDetalleItem(res); */
				setDetalleItem(productos.find((product)=> product.idproduct == idproduct));
			})
			.catch((err) => {
				console.log("No se pudo mostrar el detalle del producto")
			})
			.finally(() => {
				setLoading(false);
			})
	}, []);

	console.log(detalleItem)

	return (
		<div>
			{loading ? <p>Cargando detalle del producto...</p> :
				<ItemDetail detalleItem={detalleItem} />
			}
		</div>
	)
}
