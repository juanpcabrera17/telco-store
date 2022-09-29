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

	const {idproduct, nombre, descripcion, precio, img, idcategory} = product;

	let direccion = "/product/";

	/// Como evito repetir este codigo que ya esta en ItemDetail?
	const [contador, setContador] = useState(1);
	const {addItem}=useCart()
	const [compra, setCompra] = useState(false)
	const onAdd = () => {

        console.log(`compraste ${contador} items del producto`)
        let compra = {
            idproduct,
			nombre,
			precio,
			img,
            idcategory,
			cantidad: contador
		}
        setCompra(true)
        addItem(compra)
    }

	//fin codigo repetido


	return (
		<Box p ={2}>
		<Card sx={{ minWidth: 275, maxWidth: 300}}>
		<Link to= {direccion + idproduct} style={{ color: 'inherit', textDecoration: 'inherit'}}><CardActionArea>
			<CardContent>
				<Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
					{idproduct}
				</Typography>
				<Typography variant="h5" component="div">
					{nombre}
				</Typography>
				<Typography sx={{ mb: 1.5 }} color="text.secondary">
					${precio}
				</Typography>
				<CardMedia
					component="img"
					height="194"
					image= {img}
					alt= {nombre}
					sx={{objectFit: "scale-down" }}
				/>
			</CardContent>
			</CardActionArea></Link>
			<ItemCount stock = {5} initial = {1} onAdd = {onAdd} contador={contador} setContador={setContador}/>
		</Card>
		</Box>
	);
}

export default Item;