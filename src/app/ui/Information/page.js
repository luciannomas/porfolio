'use client'
import { Container } from '@mui/material';
import Grid from '@mui/material/Unstable_Grid2';
import CompanyCard from './CompanyCard/page'
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

const companies = [
  {
    id: '2569ce0d517a7f06d3ea1f24',
    createdAt: '27/03/2019',
    description: 'Dropbox is a file hosting service that offers cloud storage, file synchronization, a personal cloud.',
    logo: '/assets/logos/logo-dropbox.png',
    title: 'Dropbox',
    downloads: '594'
  },
  {
    id: 'ed2b900870ceba72d203ec15',
    createdAt: '31/03/2019',
    description: 'Medium is an online publishing platform developed by Evan Williams, and launched in August 2012.',
    logo: '/assets/logos/logo-medium.png',
    title: 'Medium Corporation',
    downloads: '625'
  },
  {
    id: 'a033e38768c82fca90df3db7',
    createdAt: '03/04/2019',
    description: 'Slack is a cloud-based set of team collaboration tools and services, founded by Stewart Butterfield.',
    logo: '/assets/logos/logo-slack.png',
    title: 'Slack',
    downloads: '857'
  },
  {
    id: '1efecb2bf6a51def9869ab0f',
    createdAt: '04/04/2019',
    description: 'Lyft is an on-demand transportation company based in San Francisco, California.',
    logo: '/assets/logos/logo-lyft.png',
    title: 'Lyft',
    downloads: '406'
  },
  {
    id: '1ed68149f65fbc6089b5fd07',
    createdAt: '04/04/2019',
    description: 'GitHub is a web-based hosting service for version control of code using Git.',
    logo: '/assets/logos/logo-github.png',
    title: 'GitHub',
    downloads: '835'
  },
  {
    id: '5dab321376eff6177407e887',
    createdAt: '04/04/2019',
    description: 'Squarespace provides software as a service for website building and hosting. Headquartered in NYC.',
    logo: '/assets/logos/logo-squarespace.png',
    title: 'Squarespace',
    downloads: '835'
  }
];


export default function ok() {
  return (
    <Container>

      <Box
        sx={{
          bgcolor: 'background.paper',
          pt: 8,
          pb: 6,
        }}
      >
        <Container maxWidth="sm">
          <Typography
            component="h1"
            variant="h3"
            align="center"
            color="text.primary"
            gutterBottom
          >
            ShuppTime: Leading Web Development with React/Next.js and MongoDB
          </Typography>
          <Typography variant="h7" align="center" color="text.secondary" paragraph>
            In the dynamic field of web development, ShuppTime stands out, excelling in crafting diverse web platforms using cutting-edge technologies like React/Next.js and MongoDB.
            ShuppTime's expertise in React and Next.js, combined with a seasoned team, ensures seamless and responsive web applications adaptable to various devices.
            The strategic use of MongoDB underscores ShuppTime's commitment to scalability and data efficiency, empowering web applications to excel in functionality.
            ShuppTime's holistic approach to development, collaborating closely with clients from conceptualization to deployment, positions it as a reliable partner for businesses seeking modern digital solutions.
            Beyond technical excellence, ShuppTime remains dedicated to staying abreast of emerging technologies, ensuring continued leadership in innovation.

          </Typography>

        </Container>
      </Box>

      <Container sx={{ width: '80%' }}>
      <Grid
        container
        spacing={3}
        
      >
        {companies.map((company) => (
          <Grid
            xs={12}
            md={6}
            lg={4}
            key={company.id}
           // sx={{ background: "red"}}
          >
            <CompanyCard company={company} />
          </Grid>
        ))}
      </Grid>
      </Container>
      {/* <Stack
        sx={{ pt: 4 }}
        direction="row"
        spacing={2}
        justifyContent="center"
      >
        <Button variant="contained">Contact us</Button>
        <Button variant="outlined">recommendations</Button>
      </Stack> */}

    </Container>
  )
}
