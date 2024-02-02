import React, { useState } from 'react';
import { TextField, Button, Box, Typography } from '@mui/material';
import { createUser } from '../../../api/user';
import Joi from 'joi';
import { useNavigate } from 'react-router-dom';
import './index.css';
import { useAuth } from '../../AuthContext';

const SignupForm: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [userName, setUserName] = useState('');
  const [dateOfBirth, setDateOfBirth] = useState('');
  const [error, setError] = useState<string | null>(null);
  const [errors, setErrors] = useState({
    email: "",
    username: "",
    password: "",
    dateOfBirth: "",
  });
  const navigate = useNavigate();
  const {  login } = useAuth();
  const signupSchema = Joi.object().required().keys({
    username: Joi.string().min(3).max(15).required().messages({
      'string.pattern.base': 'Username must be a string and at least 3 characters long',
    }),
    email: Joi.string()
      .email({
        minDomainSegments: 2,
        tlds: { allow: ['com', 'net'] } 
      })
      .required(),
    password: Joi.string()
      .min(8)
      .regex(/^(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*()_+])[A-Za-z0-9!@#$%^&*()_+]+$/)
      .required().messages({
        'string.pattern.base': 'Password must contain at least one lowercase letter, one uppercase letter, and one special character.',
      }),
    dateOfBirth: Joi.date().max('now').required(),
  });

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const validationResult = signupSchema.validate({
      username: userName,
      email,
      password,
      dateOfBirth,
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
      const token = await createUser({
        username: userName,
        email,
        password,
        dateOfBirth,
      });

      if (token !== undefined) {
        console.log('Successfully created user!');
        localStorage.setItem('token', token);
  
        setErrors({
          email: "",
          username: "",
          password: "",
          dateOfBirth: "",
        });
        setError('');
        login();
        navigate('/VerifyEmailPage');
      } else {
        console.error('Token is undefined.');
      }
    } catch (error: any) {
        console.error('create user error:', error);
        setError(error.message);    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <Box display="flex" flexDirection="column" alignItems="center" gap={2}>
        <Typography variant="h4" sx={{ fontFamily: 'cursive', marginBottom: 2, fontWeight: 'bold' }}>
          Sign Up!
        </Typography>
        <TextField
          type="text"
          label="userName"
          value={userName}
          onChange={(e) => {
            setUserName(e.target.value);
            setErrors((prevErrors) => ({
              ...prevErrors,
              username: "",
            }));
          }}
        />
        {errors.username && (
          <Typography variant="body2" color="error" sx={{ width: '350px' }}>
            {errors.username}
          </Typography>
        )}
        <TextField
          type="email"
          label="Email"
          value={email}
          onChange={(e) => {
            setEmail(e.target.value);
            setErrors((prevErrors) => ({
              ...prevErrors,
              email: "",
            }));
            setError('');
          }}
          className="input-field"
        />
        {errors.email && (
          <Typography variant="body2" color="error" sx={{ width: '350px' }}>
            {errors.email}
          </Typography>
        )}
        {error && (
          <Typography variant="body2" color="error" sx={{ width: '350px' }}>
            {error}
          </Typography>
        )}
       <TextField
          type="password"
          label="Password"
          value={password}
          onChange={(e) => {
            setPassword(e.target.value);
            setErrors((prevErrors) => ({
              ...prevErrors,
              password: "", 
            }));
          }}
        />
        {errors.password && (
          <Typography variant="body2" color="error" sx={{ width: '350px' }}>
            {errors.password}
          </Typography>
        )}
        <TextField
          sx={{ width: '80%' }}
          type="Date"
          value={dateOfBirth}
          onChange={(e) => {
            setDateOfBirth(e.target.value);
            setErrors((prevErrors) => ({
              ...prevErrors,
              dateOfBirth: "", 
            }));
          }}
        />
        {errors.dateOfBirth && (
          <Typography variant="body2" color="error" sx={{ width: '350px' }}>
            {errors.dateOfBirth}
          </Typography>
        )}
        <Button
          type="submit"
          variant="contained"
          color="primary"
          sx={{ fontFamily: 'cursive', marginTop: '20px', width: '50%', background: 'black', color: 'white' }}
        >
          Sign Up
        </Button>
      </Box>
    </form>
  );
};

export default SignupForm;
