import React from 'react'
import ItemList from './ItemList'
import { useState, useEffect } from 'react';
import productos from './productos';

export const ItemListContainer = (props) => {

    const {greeting} = props //desestructuracion de greeting
    const [listProductos, setlistProductos] = useState([])

    useEffect(() => {
      let promesaProductos = new Promise((resolve, reject) => {
        setTimeout(() => {
          resolve(productos);
        }, 2000);
      });
  
      promesaProductos
        .then((res) => {
          setlistProductos(res);
        })
/*         .catch((err) => {
          setError(err);
        })
        .finally(() => {
          setLoading(false);
        }); */
    }, []);

    console.log(listProductos)

  return (
    <div>
        <p>{greeting}</p>
        <ItemList listProductos={listProductos}/>
    </div>
  )
}
