import { CollectionsOutlined } from '@mui/icons-material'
import React from 'react'
import { useCart } from '../context/CartContext'

export const Cart = () => {
	const{cart} = useCart();
	console.log('carrito', cart)
	return (
		<div>Cart</div>
	)
}
