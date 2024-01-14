'use client'
import { AppBar, Toolbar, Typography } from '@mui/material';
import Link from 'next/link';

//icon
import AccessTimeFilledIcon from '@mui/icons-material/AccessTimeFilled';

import { useRouter } from "next/navigation";

export default function Navbar() {

    const router = useRouter();
    return (
        <AppBar
            position="static"
            color="default"
            elevation={0}
            sx={{ borderBottom: (theme) => `1px solid ${theme.palette.divider}` }}
        >
            <Toolbar sx={{ flexWrap: 'wrap' }}>
                <Typography variant="h6" color="inherit" noWrap sx={{ flexGrow: 1 }}>
                    <Link href='/' style={{color:'black'}}>
                        <AccessTimeFilledIcon />
                    </Link>
                </Typography>

                <nav style={{ display: 'flex', gap: '25px' }}>
                    {/* <Link
                        variant="button"
                        color="text.primary"
                        href="#"
                        sx={{ my: 1, mx: 1.5 }}
                    >
                        Tecnology
                    </Link> */}
                    <Link
                        /* variant="button"
                        color="text.primary" */
                        href="/contact"
                        /* sx={{ my: 1, mx: 1.5 }} */
                        style={{ color: 'black', fontFamily: 'sans-serif', fontSize: '0.875rem' }}
                    >
                        ENTERPRISE
                    </Link>
                    <Link
                        style={{ color: 'black', fontFamily: 'sans-serif', fontSize: '0.875rem' }}
                        href="/contact"
                    >
                        CONTACT
                    </Link>
                </nav>
                {/* <Button href="#" variant="outlined" sx={{ my: 1, mx: 1.5 }}>
                        Login
                     </Button> */}
            </Toolbar>
        </AppBar>
    )
}
