'use client'

import Card from "@mui/material/Card";
import Grid from "@mui/material/Grid";
import { Box, Typography } from '@mui/material';


export default function page({ image }) {
    const name = 'felpeee';
    const position = {}; 
    position.label = 'dadsadasdad ada da da';
    const description = ' dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd';

    return (
        <div>
            <Card sx={{ mt: 3 }}>
                <Grid container>
                    <Grid item xs={12} md={6} lg={4} sx={{ mt: -6 }}>
                        <Box width="100%">
                            <Box
                                component="img"
                                src='https://www.america-retail.com/static//2021/03/Robot_Bluecaribu-1.jpg'
                                alt={name}
                                width="100%"
                                borderRadius="md"
                                shadow="lg"
                            />
                        </Box>
                    </Grid>
                    <Grid item xs={12} md={6} lg={8} sx={{ my: "auto" }}>
                        <Box pt={{ xs: 1, lg: 2.5 }} pb={2.5} pr={4} pl={{ xs: 4, lg: 1 }} lineHeight={1}>
                            <Typography variant="h5">{name}</Typography>
                            <Typography variant="h6" color={position.color} mb={1}>
                                {position.label}
                            </Typography>
                            <Typography variant="body2" color="text">
                                {description}
                            </Typography>
                        </Box>
                    </Grid>
                </Grid>
            </Card>
        </div>
    )
}
