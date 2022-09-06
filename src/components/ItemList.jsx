import React from 'react'
import Item from './Item'


const ItemList = ({listProductos}) =>{
  return (
    <>
    {listProductos.map (product => <Item 
    key = {product.id}
    product = {product}/>)}
    </>
  )
}


export default ItemList