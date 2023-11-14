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
    <form onSubmit={handleSubmit} className='FormSignIn'>
      <Box display="flex" flexDirection="column" alignItems="center" gap={2}>
        <TextField
          type="text"
          label="Code"
          value={code}
          onChange={(e) => setCode(e.target.value)}
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
          sx={{ backgroundColor: 'black', size: '50%', marginTop: '40px' }}
        >
          Reset Password
        </Button>
      </Box>
    </form>
    </Container>
  );
};

export default ResetPasswordPage;