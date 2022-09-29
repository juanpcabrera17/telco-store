import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import React from 'react'
import { useCart } from '../context/CartContext'
import { Link } from 'react-router-dom';
import CartItem from './CartItem';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';

export const Cart = () => {
	const { cart, cartTotal, clear } = useCart();
	console.log('carrito', cart)

	return (
		<div style={{ display: "flex", flexDirection: "column", alignItems: "center", padding: 30 }}>
			<Typography variant="h3" component="div">Carrito</Typography>
			{
				cart.length == 0
					? <div style={{ display: "flex", flexDirection: "column", alignItems: "center", padding: 80 }}>
						<Typography variant="h5" component="div">Tu carrito está vacío!</Typography>
						<h4>Te invitamos a ver nuestros productos</h4>
						<Link to="/" style={{ color: 'inherit', textDecoration: 'inherit' }}>
							<Button variant="contained">
								Ir a comprar
							</Button>
						</Link>
					</div>
					:

					<TableContainer component={Paper}>
						<Table sx={{ minWidth: 650 }} aria-label="simple table">
							<TableHead>
								<TableRow>
									<TableCell align="center">Item</TableCell>
									<TableCell align="center">ID</TableCell>
									<TableCell align="center">Cantidad</TableCell>
									<TableCell align="center">Precio</TableCell>
								</TableRow>
							</TableHead>
							<TableBody>
								{cart.map(compra =>
									<TableRow>
										<CartItem key={compra.idproduct} compra={compra} />
									</TableRow>
								)}
								<TableRow align="right" sx={{ padding: 650 }}>
									<TableCell colSpan={2}>Total a pagar: ${cartTotal()}
										<Button variant="contained" color="error" onClick={clear}>Vaciar carrito</Button>
										<Button variant="contained">Terminar compra</Button>
									</TableCell>
								</TableRow>
							</TableBody>
						</Table>
					</TableContainer>
			}
		</div>
	);
}