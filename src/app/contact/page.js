'use client'
import { useState } from "react";
import { Button, Grid, Paper, TextField, Typography, CardMedia, Container, Modal, Box } from '@mui/material';
import Layout from '../ui/Layout/page';
import { styled } from '@mui/system';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import { useRouter } from "next/navigation";

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
};

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



export default function Contact() {

    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    const router = useRouter();

    const handleSubmit = async (event) => {
        event.preventDefault();
        const formData = new FormData(event.currentTarget);

        try {
            const res = await fetch("/api/send", { // https://shupptime.vercel.app/
                method: "POST",
                body: formData,
            });
            const data = await res.json();
            handleOpen();
            
            console.log(data);

        } catch (error) {
            console.log(error)
        }

    };
    const exit = ()=> {
        handleClose()
        return  router.push("/");
    }

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
                                <TextField name="name" required label="Name" variant="outlined" margin="normal" fullWidth />
                                <TextField name="email" required label="Email" type="email" variant="outlined" margin="normal" fullWidth />
                                <TextField name="message" required label="Message" multiline rows={4} variant="outlined" margin="normal" fullWidth />
                                {/* Botón de envío form */}
                                <Button
                                    type="submit" variant="contained" color="primary">
                                    Send
                                </Button>
                            </form>
                        </ContactoForm>
                    </Grid>
                </Grid>
                <Modal
                    keepMounted
                    open={open}
                    onClose={handleClose}
                    aria-labelledby="keep-mounted-modal-title"
                    aria-describedby="keep-mounted-modal-description"
                >
                    <Box sx={style}>
                        <div style={{ display: 'flex', textAlign: 'center' }}>
                            <Typography id="keep-mounted-modal-title" variant="h6" component="h2">
                                Email sent successfully !!
                            </Typography>
                            {/* <Typography id="keep-mounted-modal-description" sx={{ mt: 2 }}>
                            Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
                        </Typography> */}
                            <Button onClick = {exit} style={{ marginLeft: '25px', }} variant="contained" color="primary">
                                exit
                            </Button>
                        </div>

                    </Box>
                </Modal>
            </Container>
        </Layout >
    );
}