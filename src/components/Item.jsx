import React from 'react'
import Button from '@mui/material/Button';


import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';

import { CardActionArea } from '@mui/material';
import { Link } from 'react-router-dom';
import ItemCount from './ItemCount';

function onAdd(){
	//?
}

const Item = ({ product }) => {

	const {idproduct, nombre, descripcion, precio, img, idcaregory} = product;

	let direccion = "/product/";

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
				{/* <Typography variant="body2">
					<br />
					{'"a benevolent smile"'}
				</Typography> */}
			</CardContent>
			</CardActionArea></Link>
			<ItemCount stock = {5} initial = {2} onAdd = {onAdd}/>
		</Card>
		</Box>
	);
}

export default Item;
      /*   <div>
	  <div>
		  <img  src={product.img} ></img>
		  {product.nombre}
		  <Button variant="contained"
			  onClick={() => {
				  <p>{product.descripcion}</p>
			  }}
		  >
			  Ver más
		  </Button>
	  </div>
	  <div>
		  {product.id}
	  </div>
  </div>
)
} */