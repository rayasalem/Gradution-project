import React from 'react';
import { Button,Typography,Container, Grid, Box} from '@mui/material';

const HeroSection: React.FC = () => {
  return (
       <Box
      sx={{
        backgroundImage: `url('../../images/background.png')`,
        color: 'white',
        minHeight: 'calc(100vh )',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
     <Container>
      <Grid container >
        <Grid item xs={12} sm={6} >
          <Typography variant="h3" component="div" >
          Welcome to <span style={{ color: '#3CB371' }}>DevLoom</span>: Your Path to Coding Mastery!      
              </Typography>
          <Button variant="contained"  
          style={{ backgroundColor: '#3CB371', color: '#ffffff' }}
           size="large" sx={{ mt: 3 }}>
            Get Started
          </Button>
        </Grid>
        <Grid item xs={12} sm={6} sx={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)' }}>
          <div><img src="./images/header2.png" alt="Header Image" /></div>
          <div><img src="./images/header2.png" alt="Header Image" /></div>
        </Grid>
      </Grid>
    </Container>
    </Box>
  );
};

export default HeroSection;
