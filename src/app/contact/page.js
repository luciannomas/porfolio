'use client'
import { Button, Grid, Paper, TextField, Typography, CardMedia, Container } from '@mui/material';
import Layout from '../ui/Layout/page';
import { styled } from '@mui/system';

import LocationOnIcon from '@mui/icons-material/LocationOn';

const StyledPaper = styled(Paper)(({ theme }) => ({
    padding: theme.spacing(3),
    textAlign: 'center',
    color: theme.palette.text.secondary,
    borderRadius: theme.spacing(2),
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
}));

const QuienesSomosPaper = styled(StyledPaper)({
    backgroundColor: '#f0f0f0',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
});

const ContactoForm = styled(StyledPaper)({
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
});

const handleSubmit = async (event) => {
    event.preventDefault();

    const formData = new FormData(event.currentTarget);
    
    const res = await fetch("/api/send", {
        method: "POST",
        body: formData,
    });
    const data = await res.json();

    console.log(data)

    /*  if (res?.error) setError(res.error);
 
     if (res?.ok) return router.push("/dashboard"); */

};

export default function Contact() {

    return (
        <Layout>
            <Container>
                <Grid container spacing={4} style={{ marginTop: '10px' }}>
                    {/* Título arriba de las dos columnas */}
                    <Grid item xs={12}>
                        <Typography variant="h4" gutterBottom align="center">
                            <LocationOnIcon fontSize="large" style={{ marginRight: '8px' }} />
                            Innovating with Passion
                        </Typography>
                    </Grid>
                    {/* Lado izquierdo: Quiénes somos */}
                    <Grid item xs={12} sm={6}>
                        <QuienesSomosPaper elevation={3}>
                            <CardMedia
                                component="img"
                                alt="Equipo de trabajo"
                                height="140"
                                image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQtaWIs_3hUqbQfio5L8l08s9OY8kG61wb8ig&usqp=CAU" // Cambia esto por la ruta de tu imagen
                            />
                            <Typography variant="h4" gutterBottom style={{ marginTop: "12px" }}>
                                ShuppTimee
                            </Typography>
                            <Typography variant="body1">
                                We are an innovative company that uses artificial intelligence and cutting-edge technologies to serve society.
                            </Typography>
                            <Typography variant="body1">
                                We work by forming smart teams and cells to address complex challenges and develop creative solutions.
                            </Typography>
                        </QuienesSomosPaper>
                    </Grid>
                    {/* Lado derecho: Formulario de contacto */}
                    <Grid item xs={12} sm={6} style={{ width: '80px' }}>
                        <ContactoForm elevation={3}>
                            {/* Formulario */}
                            <form onSubmit={handleSubmit}>
                                <Typography variant="h5" gutterBottom align="center">
                                    Contact us!
                                </Typography>
                                <TextField name="name" label="Name" variant="outlined" margin="normal" fullWidth />
                                <TextField name="email" label="Email" type="email" variant="outlined" margin="normal" fullWidth />
                                <TextField name="message" abel="Message" multiline rows={4} variant="outlined" margin="normal" fullWidth />

                                {/* Botón de envío */}
                                <Button

                                    type="submit" variant="contained" color="primary">
                                    Send
                                </Button>
                            </form>
                        </ContactoForm>
                    </Grid>


                </Grid>
            </Container>


        </Layout >
    );
}