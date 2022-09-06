import React from 'react'
import Item from './Item'


const ItemDetail = ({detalleItem}) =>{
  return (
    <>
    {detalleItem.map (product => 
    
    <div>
    <img /* src={product.img} */></img>

    {product.descripcion}
    {product.precio}
    
    </div>
    )}
    </>
  )
}


export default ItemDetail
