import * as React from 'react';
import IconButton from '@mui/material/IconButton';
import Stack from '@mui/material/Stack';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import Button from '@mui/material/Button';
import { useState, useEffect } from 'react';
import Alerts from './Alerts';


export default function ItemCount({ stock, initial, onAdd, contador, setContador, limite}) {

    const sumar = () => {
        if (contador < stock) {
            setContador(contador + 1)
        } else {
            setAlert(Alerts)
        }
    }

    const restar = () => {
        if (contador > initial) {
            setContador(contador - 1)
            setAlert(false)
        }
    }

    const [alert, setAlert] = useState(false)



    return (
        <Stack>
            <Stack direction="row" spacing={1} alignItems="center" justifyContent="center">
                <IconButton aria-label="delete"
                    onClick={restar}
                >
                    <RemoveIcon />
                </IconButton>
                <span>{contador}</span>
                <IconButton aria-label="add"
                    onClick={sumar}
                >
                    <AddIcon />
                </IconButton>

            </Stack>
            {alert}
            <Button disabled={limite} variant="contained"
                onClick={onAdd}
            >
                Agregar al carrito
            </Button>
        </Stack>
    );
}