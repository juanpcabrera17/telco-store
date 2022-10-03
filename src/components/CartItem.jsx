import React from 'react'
import { useCart } from '../context/CartContext'
import TableCell from '@mui/material/TableCell';
import CardMedia from '@mui/material/CardMedia';
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';

const CartItem = ({ compra }) => {
    const { removeItem } = useCart()
    return (
        <>
            <TableCell component="th" scope="row">
                <CardMedia
                    component="img"
                    height="180"
                    
                    image={compra.img}
                    alt={compra.nombre}
                    sx={{ objectFit: "scale-down" }}
                />
            </TableCell>
            <TableCell align="center">{compra.nombre}</TableCell>
            <TableCell align="center">{compra.cantidad}</TableCell>
            <TableCell align="center">${compra.precio}</TableCell>
            <IconButton sx={{ mt:11}} color="error" aria-label="delete" onClick={() => removeItem(compra.id)}><DeleteIcon/></IconButton>
        </>
    )
}

export default CartItem