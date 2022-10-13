import React from 'react'
import Box from '@mui/material/Box'
import Paper from '@mui/material/Paper'
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import FacebookIcon from '@mui/icons-material/Facebook';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import InstagramIcon from '@mui/icons-material/Instagram';

export default function Footer() {
    return (
        <Box
            sx={{
                display: 'flex',
                flexWrap: 'wrap',
                '& > :not(style)': {
                    width: "100%",
                }
            }}
        >
            <Paper elevation={0} sx={{ backgroundColor: "#FEA82F", padding: "20px" }}>
                <Grid container spacing={2} p={2} justifyContent={"space-evenly"}>
                    <div style={{display: "flex", flexDirection: "column", alignItems: "center" }}>
                        <img src="https://i.ibb.co/NKmPZ9s/logo.png" alt="logo"style={{padding: "30px"}}></img>
                        <Typography variant="body1" gutterBottom>Telco-Store, tu principal proveedor de insumos de telecomunicaciones</Typography>
                    </div>


                    <Typography variant="h2" gutterBottom>
                        <ul style={{ listStyleType: "none", display: "flex", flexDirection: "row", justifyContent: "space-evenly"}}>
                            <li ><a href="https://www.facebook.com/" target="_blank" rel="noreferrer"><FacebookIcon color="primary" fontSize="inherit" /></a></li>
                            <li ><a href="https://www.instagram.com/" target="_blank" rel="noreferrer"><InstagramIcon color="primary" fontSize="inherit" /></a></li>
                            <li ><a href="https://www.whatsapp.com/" target="_blank" rel="noreferrer"><WhatsAppIcon color="primary" fontSize="inherit" /></a></li>
                            <li ><a href="https://www.linkedin.com/" target="_blank" rel="noreferrer"><LinkedInIcon color="primary" fontSize="inherit" /></a></li>
                        </ul>
                    </Typography>

                    <Typography variant="body1" gutterBottom>
                        <ul style={{ listStyleType: "none" }}>
                            <Typography variant="h3" gutterBottom>
                                Contacto
                            </Typography>
                            <li><strong>Email: </strong>telcostore@contacto.com</li>
                            <li><strong>Dirección: </strong>Mitre 251 - Concepción del Uruguay - Entre Ríos</li>
                            <li><strong>Teléfono: </strong>03442-123456</li>
                        </ul>
                    </Typography>
                </Grid>
                <p style={{display: "flex", justifyContent: "center"}}>Juan Pablo Cabrera 2022 || Telco-Store © Todos los derechos reservados</p>


            </Paper>
        </Box>
    )
}