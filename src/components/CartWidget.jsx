import React from 'react';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import Badge from '@mui/material/Badge';
import { useCart } from '../context/CartContext';
import { Link } from 'react-router-dom';


export default function CartWidget() {
	const { cartCantidad } = useCart()
	return (
		<div>
			<Link to="/Cart" style={{ color: 'inherit', textDecoration: 'inherit' }}>
				<Badge badgeContent={cartCantidad()} color="success" max={99} overlap="circular">
					<ShoppingCartOutlinedIcon
						color="primary"
						fontSize="large"
					/>
				</Badge>
			</Link>
		</div>
	)
}
