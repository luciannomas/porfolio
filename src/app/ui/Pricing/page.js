import React from 'react'
import { Box, Button, Card, CardActions, CardContent, CardHeader, Container, Grid, Typography } from '@mui/material';
import  StarIcon  from '@mui/icons-material/StarBorder';

const tiers = [
    {
        title: 'Static desing',
        price: '50',
        description: [
            '10 users included',
            '2 GB of storage',
            'Help center access',
            'Email support',
        ],
        buttonText: 'Get started',
        buttonVariant: 'outlined',
    },
    {
        title: 'Pro desing ',
        subheader: 'Most popular',
        price: '100',
        description: [
            '20 users included',
            '10 GB of storage',
            'Help center access',
            'Priority email support',
        ],
        buttonText: 'Get started',
        buttonVariant: 'outlined', //contained
    },
    {
        title: 'Enterprise',
        price: '500',
        description: [
            '50 users included',
            '30 GB of storage',
            'Help center access',
            'Phone & email support',
        ],
        buttonText: 'Get started',
        buttonVariant: 'outlined',
    },
];

export default function page() {
    return (
        <Container maxWidth="md" component="main" style={{ marginTop: "30px" }}>
            <Grid container spacing={5} alignItems="flex-end">
                {tiers.map((tier) => (
                    // Enterprise card is full width at sm breakpoint
                    <Grid
                        item
                        key={tier.title}
                        xs={12}
                        sm={tier.title === 'Enterprise' ? 12 : 6}
                        md={4}
                    >
                        <Card>
                            <CardHeader
                                title={tier.title}
                                subheader={tier.subheader}
                                titleTypographyProps={{ align: 'center' }}
                                action={tier.title === 'Pro' ? <StarIcon /> : null}
                                subheaderTypographyProps={{
                                    align: 'center',
                                }}
                                sx={{
                                    backgroundColor: (theme) =>
                                        theme.palette.mode === 'light'
                                            ? theme.palette.grey[200]
                                            : theme.palette.grey[700],
                                }}
                            />
                            <CardContent>
                                <Box
                                    sx={{
                                        display: 'flex',
                                        justifyContent: 'center',
                                        alignItems: 'baseline',
                                        mb: 2,
                                    }}
                                >
                                    <Typography component="h2" variant="h3" color="text.primary">
                                        ${tier.price}
                                    </Typography>
                                    <Typography variant="h6" color="text.secondary">
                                        /Usd
                                    </Typography>
                                </Box>
                                <ul>
                                    {tier.description.map((line) => (
                                        <Typography
                                            component="li"
                                            variant="subtitle1"
                                            align="center"
                                            key={line}
                                        >
                                            {line}
                                        </Typography>
                                    ))}
                                </ul>
                            </CardContent>
                            <CardActions>
                                <Button fullWidth variant={tier.buttonVariant}>
                                    {tier.buttonText}
                                </Button>
                            </CardActions>
                        </Card>
                    </Grid>
                ))}
            </Grid>
        </Container>
    )
}
