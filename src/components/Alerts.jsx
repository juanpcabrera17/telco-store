import Alert from '@mui/material/Alert';
import * as React from 'react';
import Stack from '@mui/material/Stack';

export default function Alerts() {
  return (
    <Stack sx={{ width: '100%' }} spacing={2}>
        <Alert severity="error">This is an error alert — check it out!</Alert>
    </Stack>
  )
}


