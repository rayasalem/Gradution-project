import React, { useState } from 'react';
import { TextField, Button, Typography, Box, Container } from '@mui/material';
import { sendCode } from '../../api/user';
import { useNavigate } from 'react-router-dom';

const ForgotPasswordPage = () => {
  const [email, setEmail] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      await sendCode(email);
      navigate('/reset-password', { state: { email } });
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <Container
      maxWidth="sm"
      sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        minHeight: '100vh', 
      }}
    >
      <Box
        component="form"
        onSubmit={handleSubmit}
        sx={{
          border: '1px solid black',
          backgroundColor: 'rgb(111, 143, 111)',
          borderRadius: '3%',
          padding: '2rem',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          fontWeight: 'bold',
          fontFamily: 'Arial, Helvetica, sans-serif',
          transform: 'scale(1.1)',
          height: 'auto',
          width:'22vw'
        }}
      >
        <Typography variant="h3" sx={{ marginTop: '1px', fontSize: 'medium', color: 'white' }}>
          Enter your email!
        </Typography>

        <TextField
          type="email"
          label="Email"
          value={email}
          required
          sx={{ marginTop: '2rem', width: '80%' }}
          onChange={(e) => setEmail(e.target.value)}
        />

        <Button
          type="submit"
          variant="contained"
          color="primary"
          sx={{ width: '50%', marginTop: '2rem', backgroundColor: 'white', color: 'black' }}
        >
          Send Code
        </Button>
        <Typography variant="body2" sx={{ color: 'white', marginTop: '1rem' }}>
          keep your code ,dont share it with any one!
          </Typography>
      </Box>
    </Container>
  );
};

export default ForgotPasswordPage;