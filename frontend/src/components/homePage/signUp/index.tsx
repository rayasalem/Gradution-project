import React from 'react';
import { Typography, Container, Grid, Box } from '@mui/material';
import SignupForm from './Signup';

const SignupSection: React.FC = () => {
  return (
    <Box
      sx={{
        fontFamily: 'cursive',
        color: 'white',
        minHeight: 'calc(100vh)',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor:'white',
        width: '100%',
      }}
    >
      <Container>
        <Grid container sx={{color:"black"}}>
          <Grid item xs={12} sm={6} sx={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)' }}>
            <SignupForm />
          </Grid>
          <Grid item xs={12} sm={6}>
            <Typography variant="h4" component="div" sx={{fontFamily: 'cursive',marginTop:"80px"}}>
              Register Now to DevLoom!
            </Typography>
            <Typography variant="h6" component="div"  sx={{fontFamily: 'cursive',display :"flex", justifyContent:"left",alignItems:"center",marginTop:"50px"}}>
            Hi, sign up and provide the following information to create your account.

            </Typography>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default SignupSection;