import React from 'react'
import Layout from '../ui/Layout/page';

import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import { Box, Typography } from '@mui/material';
import Teams from '../ui/Card/Team/page'

import team1 from '../../../public/assets/teams/bruce-mars.jpg'
import team2 from '../../../public/assets/teams/ivana-square.jpg';
import team3 from '../../../public/assets/teams/ivana-squares.jpg';
import team4 from '../../../public/assets/teams/team-5.jpg';


export default function pages() {
  return (
    <Layout>
      <Box
        component="section"
        variant="gradient"
        backgroundColor="dark"
        position="relative"
        py={6}
        px={{ xs: 2, lg: 0 }}
        //mx={-2}
        > {/* {{ padding: '120px'}} agregado */}
        <Container  style ={{ padding: '120px'}} sx={{ background: 'linear-gradient(195deg, #42424a, #191919)', color: '#344767', opacity: 1 }}>
          <Grid container>
            <Grid item xs={12} md={8} sx={{ mb: 6 }}>
              <Typography variant="h3" color="white">
                The Executive Team
              </Typography>
              <Typography variant="body2" color="white" opacity={0.8}>
                There&apos;s nothing I really wanted to do in life that I wasn&apos;t able to get good
                at. That&apos;s my skill.
              </Typography>
            </Grid>
          </Grid>
          <Grid container spacing={3}>
            <Grid item xs={12} lg={6}>
              <Box mb={1}>
                {/* <HorizontalTeamCard
                  image={team1}
                  name="Emma Roberts"
                  position={{ color: "info", label: "UI Designer" }}
                  description="Artist is a term applied to a person who engages in an activity deemed to be an art."
                /> */}
                <Teams image={team1} />
              </Box>
            </Grid>
            <Grid item xs={12} lg={6}>
              <Box mb={1}>
                {/* <HorizontalTeamCard
                  image={team2}
                  name="William Pearce"
                  position={{ color: "info", label: "Boss" }}
                  description="Artist is a term applied to a person who engages in an activity deemed to be an art."
                /> */}
                 <Teams image={team2} />
              </Box>
            </Grid>
            <Grid item xs={12} lg={6}>
              <Box mb={{ xs: 1, lg: 0 }}>
                {/* <HorizontalTeamCard
                  image={team3}
                  name="Ivana Flow"
                  position={{ color: "info", label: "Athlete" }}
                  description="Artist is a term applied to a person who engages in an activity deemed to be an art."
                /> */}
                 <Teams image={team3} />
              </Box>
            </Grid>
            <Grid item xs={12} lg={6}> 
              <Box mb={{ xs: 1, lg: 0 }}>
                {/* <HorizontalTeamCard
                  image={team4}
                  name="Marquez Garcia"
                  position={{ color: "info", label: "JS Developer" }}
                  description="Artist is a term applied to a person who engages in an activity deemed to be an art."
                /> */}
                 <Teams image={team4} />
              </Box>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </Layout>
  )
}
