import React from 'react'
import Item from './Item'


const ItemList = ({listProductos}) =>{
  return (
    <>
    {listProductos.map (product => <Item 
    key = {product.idproduct}
    product = {product}/>)}
    </>
  )
}


export default ItemList