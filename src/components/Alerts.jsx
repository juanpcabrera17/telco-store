import Alert from '@mui/material/Alert';
import * as React from 'react';
import Stack from '@mui/material/Stack';

const Alerts = () =>{

  return (
    <Stack sx={{ width: '100%' }} spacing={2}>
        <Alert severity="error">No hay suficiente stock</Alert>
    </Stack>
  )
}

export default Alerts;