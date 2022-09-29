import React from 'react'
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import { Link } from 'react-router-dom';
import ItemCount from './ItemCount';
import { useState, useEffect } from 'react';
import { useCart } from '../context/CartContext'

const Item = ({ product }) => {

	const { id, nombre, descripcion, precio, img, idcategory, stock } = product;

	let direccion = "/product/";

	function apurate(stock) {
		if (stock < 7) {
			return (
				<Typography variant="body1" paragraph color="error" sx={{ display: 'flex', justifyContent: "center" }}>Últimos {stock} disponibles!</Typography>)
		}
	}

	const [contador, setContador] = useState(1);
	const { addItem } = useCart()
	const [compra, setCompra] = useState(false)
	const onAdd = () => {

		console.log(`compraste ${contador} items del producto`)
		let compra = {
			id,
			nombre,
			precio,
			img,
			idcategory,
			stock,
			cantidad: contador
		}
		setCompra(true)
		addItem(compra)
	}

	return (
		<Box p={2}>
			<Card sx={{ minWidth: 275, maxWidth: 300 }}>
				<Link to={direccion + id} style={{ color: 'inherit', textDecoration: 'inherit' }}><CardActionArea>
					<CardContent>
						<Typography variant="h5" component="div">
							{nombre}
						</Typography>
						<Typography sx={{ mb: 1.5 }} color="text.secondary">
							${precio}
						</Typography>
						<CardMedia
							component="img"
							height="194"
							image={img}
							alt={nombre}
							sx={{ objectFit: "scale-down" }}
						/>
					</CardContent>
				</CardActionArea></Link>
				{apurate(stock)}
				<ItemCount stock={stock} initial={1} onAdd={onAdd} contador={contador} setContador={setContador} />
			</Card>
		</Box>
	);
}

export default Item;