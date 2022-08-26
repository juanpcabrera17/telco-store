import React from 'react'

export const ItemListContainer = (props) => {

    const {greeting} = props //desestructuracion de greeting

  return (
    <div>
        <p>{greeting}</p>
    </div>
  )
}
