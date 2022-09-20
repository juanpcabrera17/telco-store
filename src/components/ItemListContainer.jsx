import React from 'react'
import ItemList from './ItemList'
import { useState, useEffect } from 'react';
import productos from './productos';
import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';

import {useParams} from 'react-router-dom';

export const ItemListContainer = (props) => {

	const { greeting } = props; //desestructuracion de greeting
	const [listProductos, setlistProductos] = useState([]);
	const [loading, setLoading] = useState(true);

	const {idcategory, idproduct} = useParams();

	console.log(idcategory, idproduct)

	useEffect(() => {
		let promesaProductos = new Promise((resolve, reject) => {
			setTimeout(() => {
				resolve(productos);
			}, 2000);
		});

		promesaProductos
			.then((res) => {
				if (!idcategory){
					setlistProductos(res);
				} else {
					setlistProductos(productos.filter((product) => product.idcategory == idcategory));
				}
			})
			.catch((err) => {
				console.log("No se pudieron mostrar los productos")
			})
			.finally(() => {
				setLoading(false);
			});
	}, [idcategory]);


	/* useEffect(()=>{
		if (!idcategory) {
			//HOME
			setProducts(productosHC);
		  } else {
			//EN UNA CATEGORIA PUNTUAL
			setProducts(productosHC.filter((product) => product.idcategory == idcategory));
		  }

	},[idcategory]); */



	console.log(listProductos)

	return (
		<Stack p={3} alignItems={"center"} direction={"row"}>
			<Typography sx={{ mb: 4 }} variant="h6" color="text.primary" >
				{greeting}
			</Typography>

			{loading ? <p>Cargando productos...</p> :
				<Grid container spacing={2} p={2} justifyContent={"space-evenly"}>
					<ItemList listProductos={listProductos} />
				</Grid>
			}
		</Stack>
	)
}