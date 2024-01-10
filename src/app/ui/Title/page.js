'use client'
import { Container, Typography } from '@mui/material';

export default function page() {
    return (
        <Container disableGutters maxWidth="sm" component="main" sx={{ pt: 8, pb: 6 }}>
            <Typography
                component="h1"
                variant="h2"
                align="center"
                color="text.primary"
                gutterBottom
            >
                Page models
            </Typography>
            <Typography variant="h5" align="center" color="text.secondary" component="p">
                Dare to create personal interfaces. Adapt your best idea with the latest technologies.. It&apos;s built with default MUI components with little
                customization.
            </Typography>
        </Container>
    )
}
