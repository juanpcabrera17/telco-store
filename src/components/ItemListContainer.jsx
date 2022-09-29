import React from 'react'
import ItemList from './ItemList'
import { useState, useEffect } from 'react';
import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import {useParams} from 'react-router-dom';
import {collection, getDocs, query, where} from 'firebase/firestore'
import { db } from '../firebase/firebase';

export const ItemListContainer = (props) => {

	const { greeting } = props; //desestructuracion de greeting
	const [listProductos, setlistProductos] = useState([]);
	const [loading, setLoading] = useState(true);

	const {idcategory, idproduct} = useParams();

	console.log('categoria: ', idcategory, 'idproducto: ', idproduct)

	useEffect(()=>{
		const collectionRef = idcategory ? query(collection(db, "products"), where("idcategory", "==", idcategory)) : collection(db, "products")
		getDocs(collectionRef)
		.then((result)=>{
			const objetoLimpio = result.docs.map((product)=>{
				return{
					id: product.id,
					...product.data()
				}
			})
			setlistProductos(objetoLimpio)
		})
		.catch((err) => {
			console.log("No se pudieron mostrar los productos")
		})
		.finally(() => {
			setLoading(false);
			
		});
	},[])
	
	
	console.log(listProductos)

	return (
		<Stack p={3} alignItems={"center"} direction={"column"}>
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