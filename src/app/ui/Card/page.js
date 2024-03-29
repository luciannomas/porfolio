'use client'
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import CardActions from '@mui/material/CardActions';
import Button from '@mui/material/Button';

import { useRouter } from "next/navigation";
import info from '../../mock/info'

const cards = [1, 2, 3, 4, 5, 6];
const aux = [{ id: 1, image: "https://images04.nicepage.com/feature/461183/es/website-blog.jpg", description: "A sophisticated blog page layout. Markdown support is courtesy of markdown-to-jsx.", title: "Blog", demo: "https://mui.com/material-ui/getting-started/templates/blog/" },
{ id: 2, image: "https://t3.ftcdn.net/jpg/03/93/37/24/360_F_393372407_u34qDqrJuvMZICQC0oKnKgEUi8XqVPJG.jpg", description: "Contains a taskbar and a mini variant drawer. The chart is courtesy of Recharts.", title: "Dashboard", demo: "https://mui.com/material-ui/getting-started/templates/dashboard/" },
{ id: 3, image: "https://qph.cf2.quoracdn.net/main-qimg-fe31c30b592584b3d038aa039dbb4abf-pjlq", description: "A responsive album / gallery page layout with a hero unit and footer.", title: "Album", demo: "https://github.com/mui/material-ui/tree/v5.15.3/docs/data/material/getting-started/templates/album" },
{ id: 4, image: "https://as2.ftcdn.net/v2/jpg/02/00/30/19/1000_F_200301931_yNJHwvikMdbhLacqM5sAPMpOAaBOKYo8.jpg", description: "Quickly build an effective pricing table for your potential customers.", title: "Pricing", demo: "https://mui.com/material-ui/getting-started/templates/pricing/" },
{ id: 5, image: "https://repository-images.githubusercontent.com/456963513/82528385-a73f-488f-9003-513321283a6b", description: "E-commerce site has a user-friendly design, making shopping easy with clear product images and descriptions, ensuring a seamless and secure online experience for customers.", title: "eccomerce", demo: "https://bazaar.ui-lib.com/market-2" },
{ id: 6, image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT2rcxn9vBCLBkI-rxGo44sCh1zjRfq6XcYeg&usqp=CAU", description: "The hotel site features a user-friendly interface, highlighting room details, amenities, and booking options for a seamless and engaging guest experience.", title: "Hostel", demo: "https://mui.com/store/previews/onepirate/" },
{ id: 7, image: "https://www.hostinger.es/tutoriales/wp-content/uploads/sites/7/2023/04/image-13.webp", description: "The portfolio page has a clean design, displaying a curated selection of work with brief project descriptions and easy navigation, offering a concise yet informative overview of the creator's skills", title: "Porfolios", demo: "https://mui.com/store/previews/the-front-landing-page/" },
{ id: 8, image: "https://www.staffdigital.pe/blog/wp-content/uploads/dise%C3%B1ar-p%C3%A1gina-de-contacto-1-1024x706.jpg", description: "The contact page design features a clean and user-friendly layout, seamlessly integrating essential contact information and a well-designed form for convenient communication", title: "Contacto", demo: "https://mui.com/store/previews/the-front-landing-page/" }];

export default function MediaCard() {
    
    const router = useRouter();
    return (
        <Container sx={{ py: 8 }} maxWidth="md">
            {/* End hero unit */}
            <Grid container spacing={4}>
                {info.map((e) => (
                    <Grid item key={e.id} xs={12} sm={6} md={4}>
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
                                image={e.image}
                            />
                            <CardContent sx={{ flexGrow: 1 }}>
                                <Typography gutterBottom variant="h5" component="h2">
                                    {e.title}
                                </Typography>
                                <Typography>
                                    {e.description}
                                </Typography>
                            </CardContent>
                            <CardActions>
                                <Button size="small" onClick={() => router.push(e.demo)}>View Demo</Button>
                                <Button size="small" onClick={() => router.push('https://mui.com/material-ui/getting-started/templates/checkout/')}>Pay</Button>
                            </CardActions>
                        </Card>
                    </Grid>
                ))}
            </Grid>
        </Container>

    )
}
