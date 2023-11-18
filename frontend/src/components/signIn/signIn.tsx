import React, { useState, ChangeEvent, FormEvent } from 'react';
import { TextField, Button, Box, Typography } from '@mui/material';
import { Link } from 'react-router-dom';
import Joi from 'joi';
// import Social from '../homepage/signUP/SocialLoginButton';
import { signIn } from '../../api/user';
import { useAuth } from '../AuthContext';

const Signin: React.FC = () => {
const [email, setEmail] = useState('');
const [password, setPassword] = useState('');
const [errors, setErrors] = useState({
    email: "",
    password: "",
  });
  const { login } = useAuth();

  const signInSchema = Joi.object().required().keys({
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
      })
  });
  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const validationResult = signInSchema.validate({
        email,
        password,
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
      const token = await signIn(email, password);
      console.log('Successfully signed in!');
      login();
      setErrors({
        email: "",
        password: "",
      });
    } catch (error) {
      console.error('Error:', error);
    }
  };

  const handleSocialLogin = (accessToken: string, provider: string) => {
    console.log(`Logged in with ${provider} using access token: ${accessToken}`);
  };

  return (
    <form onSubmit={handleSubmit} style={{
      border: '1px solid white',
      borderRadius: '3%',
      backgroundColor: 'rgb(111, 143, 111)',
      width: '40vw',
      height: '90vh',
      marginRight: 0,
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      fontWeight: 'bold',
    }}>
      <Box
        display="flex"
        flexDirection="column"
        alignItems="center"
        gap={2}
        sx={{
          color: 'black',
          display: 'flex',
          justifySelf: 'end',
          right: 0,
        }}
      >
        <Typography variant="h4" sx={{ marginBottom: 2, fontWeight: 'bold', fontFamily: 'cursive' }}>
          Sign In!
        </Typography>

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
          }}
          sx={{ backgroundColor: 'white', borderRadius: '3px' }}
        />
         {errors.email && (
          <Typography variant="body2" color="error" sx={{ width: '350px' }}>
            {errors.email}
          </Typography>
        )}
        <TextField
          type="password"
          label="Password"
          value={password}
          sx={{ backgroundColor: 'white', borderRadius: '3px' }}
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
        <Button
          type="submit"
          variant="contained"
          color="primary"
          sx={{
            fontFamily: 'cursive',
            marginTop: '25px',
            width: '50%',
            color: 'black',
            backgroundColor: 'white',
          }}
        >
          Sign In
        </Button>

        <Typography variant="body2" sx={{ marginTop: '10px', cursor: 'pointer', textDecoration: 'underline' }}>
          <Link to="/forgot-password">Forgot Password?</Link>
        </Typography>
        {/* <Social  /> */}
      </Box>
    </form>
  );
};

export default Signin;