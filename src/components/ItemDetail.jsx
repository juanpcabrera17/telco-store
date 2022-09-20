import React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import ItemCount from './ItemCount';


const ItemDetail = ({ detalleItem }) => {

    return (
        <>
            <Card>
            <CardContent>
            <Stack direction="row" spacing={1} alignItems="center" justifyContent="space-around" pr={5} pl={4}>
            <CardMedia
                component="img"
                height="500"
                width="100"
                image= {detalleItem.img}
                alt= {detalleItem.nombre}
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

                <ItemCount stock = {5} initial = {2}/>
                </Stack>
                </Stack>
            </CardContent>
            </Card>
        </>
    )
}


export default ItemDetail