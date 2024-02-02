import React, { useState, useEffect } from 'react';
import { TextField, Button, Typography, Box ,Container } from '@mui/material';
import { forgetPassword } from '../../api/user';
import {  useLocation, useNavigate } from 'react-router-dom';
import Joi from 'joi';
const ResetPasswordPage: React.FC = () => {
  const [email, setEmail] = useState('');
  const [code, setCode] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [errors, setErrors] = useState({
    newPassword: "",
  });
  const ResetPasswordSchema = Joi.object().required().keys({
    newPassword: Joi.string()
      .min(8)
      .regex(/^(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*()_+])[A-Za-z0-9!@#$%^&*()_+]+$/)
      .required().messages({
        'string.pattern.base': 'Password must contain at least one lowercase letter, one uppercase letter, and one special character.',
      })
  });
  const navigate = useNavigate();
  
  const location = useLocation();

  useEffect(() => {
    if (location.state && location.state.email) {
      setEmail(location.state.email);
    }
  }, [location.state]);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const validationResult = ResetPasswordSchema.validate({
        newPassword
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
      await forgetPassword(email, code, newPassword);
      navigate('/signin');
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <Container maxWidth="sm" sx={{minHeight: '100vh',paddingTop:'40px',display:'flex',justifyContent:'center',alignItems:'center'}}>
          <Box
        component="form"
        onSubmit={handleSubmit}
        display="flex"
        flexDirection="column"
        alignItems="center"
        gap={2}
        bgcolor="rgb(111, 143, 111)"
        p={4}
        borderRadius={3}
        sx={{ width: '40vw' , height: 'auto',
      }}
      >
        <Typography variant="h5" sx={{ color: 'white', marginTop: '1rem' }}>
         Make new  Password!
        </Typography>
        <TextField
          type="text"
          label="Code"
          value={code}
          onChange={(e) => setCode(e.target.value)}
          sx={{
            width: '60%',
          }}
          required
        />
        <TextField
          type="password"
          label="New Password"
          value={newPassword}
          onChange={(e) => {
            setNewPassword(e.target.value);
            setErrors((prevErrors) => ({
              ...prevErrors,
              newPassword: "", 
            }));
          }}
          required
          sx={{
            width: '60%',
          }}
        />
        {errors.newPassword && (
          <Typography variant="body2" color="error" sx={{ width: '350px' }}>
            {errors.newPassword}
          </Typography>
        )}
        <Button
          type="submit"
          variant="contained"
          color="primary"
          sx={{
            bgcolor: 'white',
            color:'black',
            width: '50%',
            marginTop: '2rem',
            '&:hover': {
              bgcolor: 'green',
            },
          }}
        >
          Reset Password
        </Button>
        <Typography variant="body2" sx={{ color: 'white', marginTop: '1rem' }}>
          Don't forget to reset your password!
        </Typography>
      </Box>
    </Container>
  );
};

export default ResetPasswordPage;