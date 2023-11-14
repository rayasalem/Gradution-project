import React, { useState } from 'react';
import { TextField, Button, Typography, Box,Container } from '@mui/material';
import { sendCode } from '../../api/user';
import {  useNavigate } from 'react-router-dom';
import Joi from 'joi';
import './index.css'
const ForgotPasswordPage = () => {
  const [email, setEmail] = useState('');
  const [errors, setErrors] = useState({email: "",});
  const navigate = useNavigate();
  const ForgotPasswordSchema = Joi.object().required().keys({
    email: Joi.string()
      .email({
        minDomainSegments: 2,
        tlds: { allow: ['com', 'net'] } 
      })
      .required()
  });
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const validationResult = ForgotPasswordSchema.validate({ 
        email,
      });
  
      if (validationResult.error) {
        validationResult.error.details.forEach((detail) => {
          setErrors((prevErrors) => ({
            ...prevErrors,
            [detail.path[0]]: detail.message,
          }));
        });
        return;
      }
    try {
      await sendCode(email);
      setErrors({
        email: ""
      });
      navigate('/reset-password', { state: { email } });
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <Container maxWidth="sm" sx={{minHeight: '100vh',paddingTop:'40px',display:'flex',justifyContent:'center',alignItems:'center'}}>
    <form onSubmit={handleSubmit} className='FormSignIn'>
      <Box display="flex" flexDirection="column" alignItems="center" gap={2} >
        <Typography variant="h3" sx={{ marginTop: '4px' }}>
          Forgot Password
        </Typography>

        <TextField
          type="email"
          label="Email"
          value={email}
          sx={{ marginTop: '50px', color: 'white' }}
          onChange={(e) => {
            setEmail(e.target.value);
            setErrors((prevErrors) => ({
              ...prevErrors,
              email: "",
            }));
          }}
        />
          {errors.email && (
          <Typography variant="body2" color="error" sx={{ width: '350px' }}>
            {errors.email}
          </Typography>
        )}
        <Button
          type="submit"
          variant="contained"
          color="primary"
          sx={{ backgroundColor: 'black', size: '50%', marginTop: '30px' }}
        >
          Send Code
        </Button>
      </Box>
    </form>
    </Container>
  );
};

export default ForgotPasswordPage;