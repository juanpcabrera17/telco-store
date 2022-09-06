import React from 'react';
import ItemDetail from './ItemDetail';
import { useState, useEffect } from 'react';
import productos from './productos';
import Grid from '@mui/material/Unstable_Grid2';

export const ItemDetailContainer = () => {


    //promesa q a los 2 segundos devuelve un producto, cuando lo devuelve se lo pasa a itemdetail, detalle de un item puntual

  //const { greeting } = props //desestructuracion de greeting
  const [detalleItem, setDetalleItem] = useState([])

  useEffect(() => {
    let promesaDetalle = new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(productos);
      }, 2000);
    });

    promesaDetalle
      .then((res) => {
        setDetalleItem(res);
      })
  }, []);

  console.log(detalleItem)

  return (
    <div>
      <Grid container spacing={2}>
          <ItemDetail detalleItem={detalleItem}/>
        </Grid>
    </div>
  )
}
