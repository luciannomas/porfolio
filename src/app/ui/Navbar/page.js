'use client'
import { AppBar, Toolbar, Typography, Link } from '@mui/material';

//icon
import AccessTimeFilledIcon from '@mui/icons-material/AccessTimeFilled';

export default function Navbar() {
    return (
        <AppBar
            position="static"
            color="default"
            elevation={0}
            sx={{ borderBottom: (theme) => `1px solid ${theme.palette.divider}` }}
        >
            <Toolbar sx={{ flexWrap: 'wrap' }}>
                <Typography variant="h6" color="inherit" noWrap sx={{ flexGrow: 1 }}>
                    <AccessTimeFilledIcon />
                </Typography>

                <nav>
                    <Link
                        variant="button"
                        color="text.primary"
                        href="#"
                        sx={{ my: 1, mx: 1.5 }}
                    >
                        Tecnology
                    </Link>
                    <Link
                        variant="button"
                        color="text.primary"
                        href="#"
                        sx={{ my: 1, mx: 1.5 }}
                    >
                        Enterprise
                    </Link>
                    <Link
                        variant="button"
                        color="text.primary"
                        href="#"
                        sx={{ my: 1, mx: 1.5 }}
                    >
                        Support
                    </Link>
                </nav>
                {/* <Button href="#" variant="outlined" sx={{ my: 1, mx: 1.5 }}>
                        Login
                     </Button> */}
            </Toolbar>
        </AppBar>
    )
}
