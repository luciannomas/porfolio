import { Container, Grid, Link, Typography } from '@mui/material'
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import InstagramIcon from '@mui/icons-material/Instagram';
import TelegramIcon from '@mui/icons-material/Telegram';
import EmailIcon from '@mui/icons-material/Email';

const footers = [
    {
        title: 'Company',
        description: ['Team', 'History', 'Locations'],
    },
    {
        title: 'Contact us',
        description: [
            'Instagram', 'Whatsapp', 'Email', 'Telegram'
        ],
    },
    /*   {
          title: 'Resources',
          description: ['Resource', 'Resource name', 'Another resource', 'Final resource'],
      },
      {
          title: 'Legal',
          description: ['Privacy policy', 'Terms of use'],
      }, */
];

const num = 'https://api.whatsapp.com/send?phone=541136936750&text=Hola!%20Quiero%20m%C3%A1s%20informaci%C3%B3n%20sobre%20';
const insta = 'https://www.instagram.com/';

function Copyright(props) {
    return (
        <Typography variant="body2" color="text.secondary" align="center" {...props}>
            {'All rights reserved © '}
            <Link color="inherit" href="/">
                ShuupTime
            </Link>{' '}
            {new Date().getFullYear()}
            {'.'}
        </Typography>
    );
}

export default function page() {
    return (
        <Container
            maxWidth="md"
            component="footer"
            sx={{
                borderTop: (theme) => `1px solid ${theme.palette.divider}`,
                mt: 8,
                py: [3, 6],
            }}
        >
            <Grid container spacing={4} justifyContent="space-evenly">
                {footers.map((footer) => (
                    <Grid item xs={6} sm={3} key={footer.title}>
                        <Typography variant="h6" color="text.primary" gutterBottom>
                            {footer.title}
                        </Typography>
                        <ul>
                            {footer.description.map((item) => (
                                item === 'Instagram' ?
                                    <li key={item} style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginRight: '89px' }}>
                                        <InstagramIcon />
                                        <Link href={insta} variant="subtitle1" color="text.secondary">
                                            {item}
                                        </Link>
                                    </li>
                                    : (item === 'Whatsapp') ?
                                        <li key={item} style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginRight: '89px' }}>
                                            <WhatsAppIcon />
                                            <Link href={num} variant="subtitle1" color="text.secondary">
                                                {item}
                                            </Link>
                                        </li>
                                        : (item === 'Telegram') ?
                                            <li key={item} style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginRight: '95px' }}>
                                                <TelegramIcon />
                                                <Link href="#" variant="subtitle1" color="text.secondary">
                                                    {item}
                                                </Link>
                                            </li>
                                            : (item === 'Email') ?
                                                <li key={item} style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginRight: '121px' }}>
                                                    <EmailIcon />
                                                    <Link href="#" variant="subtitle1" color="text.secondary">
                                                        {item}
                                                    </Link>
                                                </li>
                                                :
                                                <li key={item}>
                                                    <Link href="#" variant="subtitle1" color="text.secondary">
                                                        {item}
                                                    </Link>
                                                </li>
                            ))}
                        </ul>
                    </Grid>
                ))}
            </Grid>
            <Copyright sx={{ mt: 5 }} />
        </Container>
    )
}
