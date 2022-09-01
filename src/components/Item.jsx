import React from 'react'
import Button from '@mui/material/Button';

const Item = ({ product }) => {
    return (
        <div>
            <div>
                <img src={product.img}></img>
                {product.nombre}
                <Button variant="contained"
                    onClick={() => {
                        <p>{product.descripcion}</p>
                    }}
                >
                    Ver más
                </Button>
            </div>
            <div>
                {product.id}
            </div>
        </div>
    )
}

export default Item