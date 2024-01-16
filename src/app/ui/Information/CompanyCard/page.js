'use client'

import { Avatar, Box, Card, CardContent, Divider, Stack, SvgIcon, Typography } from '@mui/material';
import TelegramIcon from '@mui/icons-material/Telegram';

export default function CompanyCard({company}) {
    const {downloads} = company ;
    console.log(downloads)

    return (
        <Card
            sx={{
                display: 'flex',
                flexDirection: 'column',
                height: '100%',
                background: '#f1f1f1'

            }}
        >
            <CardContent>
                <Box
                    sx={{
                        display: 'flex',
                        justifyContent: 'center',
                        pb: 3
                    }}
                >
                    <Avatar
                        src="/assets/logos/logo-lyft.png"
                        variant="square"
                    />
                </Box>
                <Typography
                    align="center"
                    gutterBottom
                    variant="h5"
                >
                     {company?.title}
                </Typography>
                <Typography
                    align="center"
                    variant="body1"
                >
                    {company?.description}
                </Typography>
            </CardContent>
            <Box sx={{ flexGrow: 1 }} />
            <Divider />
            <Stack
                alignItems="center"
                direction="row"
                justifyContent="space-between"
                spacing={2}
                sx={{ p: 2 }}
            >
                <Stack
                    alignItems="center"
                    direction="row"
                    spacing={1}
                >
                    <SvgIcon
                        color="action"
                        fontSize="small"
                    >
                        <TelegramIcon />
                    </SvgIcon>
                    <Typography
                        color="text.secondary"
                        display="inline"
                        variant="body2"
                    >
                        Updated 2hr ago
                    </Typography>
                </Stack>
                <Stack
                    alignItems="center"
                    direction="row"
                    spacing={1}
                >
                    <SvgIcon
                        color="action"
                        fontSize="small"
                    >
                        <TelegramIcon />
                    </SvgIcon>
                    <Typography
                        color="text.secondary"
                        display="inline"
                        variant="body2"
                    >
                        {downloads} Downloads
                    </Typography>
                </Stack>
            </Stack>
        </Card>
    )
}
