import React from 'react';
import { Typography, Container, Grid, Box } from '@mui/material';
import SignupForm from './Signup';
interface SignupFormProps {
  setAuthenticated: React.Dispatch<React.SetStateAction<boolean>>;
}
const SignupSection: React.FC<SignupFormProps> = ({ setAuthenticated }) => {
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
            <SignupForm   setAuthenticated={setAuthenticated}/>
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