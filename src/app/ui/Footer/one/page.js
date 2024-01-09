import * as React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';
import Container from '@mui/material/Container';
import useMediaQuery from "@mui/material/useMediaQuery";
import { useTheme } from '@mui/material/styles';

//icons
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import { FormControl, InputLabel, MenuItem, Select } from '@mui/material';

function Copyright(props) {
  return (
    <Typography variant="body2" color="text.secondary" align="center" {...props}>
      {'Copyright © '}
      <Link color="inherit" href="https://mui.com/">
        Your Website
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const insta = 'https://www.instagram.com/'


function PricingContent() {
  // const classes = useStyles();
  const theme = useTheme();
  const matches = useMediaQuery('(max-width:600px)');

  const [age, setAge] = React.useState('');
  const [dir, setDir] =  React.useState('https://api.whatsapp.com/send?phone=541168640728&text=Hola!%20Quiero%20m%C3%A1s%20informaci%C3%B3n%20sobre%20');
  let cont = 0 ;

  const handleChange = (event) => {
    const val =  event.target.value;
    
    let dirAux = 'https://api.whatsapp.com/send?phone=5411369367508&text=Hola!%20Quiero%20m%C3%A1s%20informaci%C3%B3n%20sobre%20'; 
    let res = dirAux + 'el%20precio%20de%20X%20' + val + '%20Semillas%20';
    setDir(res)
 
  };

  return (
    <React.Fragment>
      {/* Footer */}
      <Container
        maxWidth="md"
        component="footer"
        sx={{
          /* borderTop: (theme) => `1px solid ${theme.palette.divider}` ,*/
          mt: '35px',
          py: [3, 6],
        }}
      >
        {
            !matches ? (
                <Box style={{ marginLeft: 410 }}>
                    <Link href={insta}>
                        <InstagramIcon />
                    </Link>
                    <Link href={dir} style={{ marginLeft: 20 }}>
                        <WhatsAppIcon />
                    </Link>
                </Box>
            ) : (
                <Box sx={{textAlign: 'center'}}>
                    {/*  Powered by{' '}
                    <span className={styles.logo}>
                        <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
                    </span> */}
                    <Link href={insta} style={{ marginRight: '10px' }}>
                        <InstagramIcon />
                    </Link>
                    <Link href={dir} style={{ marginRight: '10px' }} >
                        <WhatsAppIcon />
                    </Link>
                </Box>
            )
        }
       
      </Container>
      {/* End footer */}
    </React.Fragment>
  );
}



export default function Pricing() {
  return <PricingContent />;
}