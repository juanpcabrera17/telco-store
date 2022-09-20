import React from 'react'
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import { Link } from 'react-router-dom';
import ItemCount from './ItemCount';
/* import { onAdd } from './ItemDetail'; */
import { useState, useEffect } from 'react';

const Item = ({ product }) => {

	const {idproduct, nombre, descripcion, precio, img, idcaregory} = product;

	let direccion = "/product/";

	const [contador, setContador] = useState(1);

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
			<ItemCount stock = {5} initial = {2} /* onAdd = {onAdd} */ contador={contador} setContador={setContador}/>
		</Card>
		</Box>
	);
}

export default Item;