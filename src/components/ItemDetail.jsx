import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Stack from '@mui/material/Stack';
import ItemCount from './ItemCount';
import { useState, useEffect } from 'react';
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';


const ItemDetail = ({ detalleItem }) => {
    const [contador, setContador] = useState(1);
    const [compra, setCompra] = useState(false)

    function onAdd(contador) {

        console.log(`compraste ${contador} items del producto`)
        setCompra(true)
    }

    return (
        <>
            <Card>
                <CardContent>
                    <Stack direction="row" spacing={1} alignItems="center" justifyContent="space-around" pr={5} pl={4}>
                        <CardMedia
                            component="img"
                            height="500"
                            width="100"
                            image={detalleItem.img}
                            alt={detalleItem.nombre}
                            sx={{ width: '40%', objectFit: "scale-down" }}
                        />
                        <Stack direction="column" backgroundColor="#FFE5C1" p={20}>
                            <Typography variant="h5" component="div" align="right">
                                {detalleItem.nombre}
                            </Typography>
                            <Typography variant="subtitle1" color="text.secondary" mb={4}>
                                Precio: ${detalleItem.precio}
                            </Typography>
                            <Typography variant="body1" paragraph>
                                {detalleItem.descripcion}
                            </Typography>

                            {!compra
                               ? < ItemCount stock = {5} initial = {1} onAdd = {onAdd} contador={contador} setContador={setContador}/>
                            : <Link to= "/Cart" style={{ color: 'inherit', textDecoration: 'inherit'}}><Button variant="contained">Ir al carrito</Button></Link>}
                        </Stack>
                    </Stack>
                </CardContent>
            </Card>
        </>
    )
}


export default ItemDetail