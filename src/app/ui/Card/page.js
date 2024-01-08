import React from 'react'
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import CardActions from '@mui/material/CardActions';
import Button from '@mui/material/Button';

import { useRouter } from "next/navigation";


const cards = [1, 2, 3, 4, 5, 6];
const aux = [{ id: 1, image: "", description: "", title: "", demo: "" },
{ id: 2, image: "", description: "", title: "", demo: "" },
{ id: 3, image: "", description: "", title: "", demo: "" },
{ id: 4, image: "", description: "", title: "", demo: "" },
{ id: 5, image: "", description: "", title: "", demo: "" },
{ id: 6, image: "", description: "", title: "", demo: "" },
{ id: 7, image: "", description: "", title: "", demo: "" },
{ id: 8, image: "", description: "", title: "", demo: "" }];

export default function MediaCard() {

    const router = useRouter();
    return (
        <Container sx={{ py: 8 }} maxWidth="md">
            {/* End hero unit */}
            <Grid container spacing={4}>
                {cards.map((card) => (
                    <Grid item key={card} xs={12} sm={6} md={4}>
                        <Card
                            sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}
                        >
                            <CardMedia
                                component="div"
                                sx={{
                                    // 16:9
                                    pt: '56.25%',
                                }}
                                /* image="https://source.unsplash.com/random?wallpapers" */
                                image="https://img.freepik.com/foto-gratis/concepto-programacion-navegacion-tecnologia-diseno-web_53876-163260.jpg?w=740&t=st=1704445110~exp=1704445710~hmac=2270d59fc77e8964df8ef4f171066dbfbfe649179ad9dbf50cd57a05c9a1ff6c"
                            />
                            <CardContent sx={{ flexGrow: 1 }}>
                                <Typography gutterBottom variant="h5" component="h2">
                                    Blog
                                </Typography>
                                <Typography>
                                    This is an ideal page to upload products for a store.
                                </Typography>
                            </CardContent>
                            <CardActions>
                                <Button size="small" onClick={() => router.push('https://mui.com/material-ui/getting-started/templates/blog/')}>View Demo</Button>
                                <Button size="small" onClick={() => router.push('https://mui.com/material-ui/getting-started/templates/checkout/')}>Pay</Button>
                            </CardActions>
                        </Card>
                    </Grid>
                ))}
            </Grid>
        </Container>

    )
}
