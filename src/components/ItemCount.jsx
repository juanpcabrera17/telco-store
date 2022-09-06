import * as React from 'react';
import IconButton from '@mui/material/IconButton';
import Stack from '@mui/material/Stack';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import Button from '@mui/material/Button';
import { useState, useEffect } from 'react';
import Alerts from './Alerts';



export default function ItemCount({ stock, initial, onAdd }) {
    const [contador, setContador] = useState(0);

    useEffect(() => {
        setContador(initial);
    }, [])

    const [alert, setAlert] = useState()



    return (
        <Stack direction="row" spacing={1}>
            <IconButton aria-label="delete"
                onClick={() => {
                    if (contador > '0') {
                        setContador(contador - 1);
                    }
                }}
            >
                <RemoveIcon />
            </IconButton>
            <span>{contador}</span>
            <IconButton aria-label="add"
                onClick={() => {
                    if (contador < stock) {
                        setContador(contador + 1);
                    } else {
                        setAlert(Alerts)
                    }
                }}
            >
                <AddIcon />
            </IconButton>
            <Button variant="contained"
                onClick={() => {
                    onAdd();
                }}
            >
                Agregar al carrito
            </Button>
        </Stack>
    );
}