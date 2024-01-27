import React from 'react';
import { Button, Typography, Container, Grid, Box} from '@mui/material';
import SignIn from './signIn';

const SigninSection: React.FC = () => {
  return (
    <Box
      sx={{
        minHeight: 'calc(100vh)',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        color:'white',
        width:'100%',
      }}
    >
      <Container>
        <Grid container  >
          <Grid item xs={12} sm={6} sx={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)' }}>
            <SignIn />
          </Grid>
          <Grid item xs={12} sm={6}>
            <Typography variant="h4" component="div" sx={{marginTop:"80px",fontFamily:'cursive',color:'black'}}>
              LogIn Now to DevLoom!
            </Typography>
            <Typography variant="h6" component="div"  sx={{fontFamily:'cursive',display :"flex",color:'black', justifyContent:"left",alignItems:"center",marginTop:"50px"}}>
            Hi, sign in and provide the following information to Enter your account.

            </Typography>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default SigninSection;