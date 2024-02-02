import React, { useEffect, useState } from 'react';
import {  createUserByAdmin } from '../../../api/user';
import { useNavigate, useParams } from 'react-router';
import { TextField, Button, Typography, Container, Grid } from '@mui/material';
import Joi from 'joi';
interface User {
    id: string;
}

const CreateUser: React.FC = () => {
    const [errors, setErrors] = useState({
        newPassword: "",
      });
    const [email, setemail] = useState<string>('');
    const [password, setPassword] = useState<string>('');
    const [username, setusername] = useState<string>('');
    const [successMessage, setSuccessMessage] = useState('');
  

    const ResetPasswordSchema = Joi.object().required().keys({
        newPassword: Joi.string()
          .min(8)
          .regex(/^(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*()_+])[A-Za-z0-9!@#$%^&*()_+]+$/)
          .required().messages({
            'string.pattern.base': 'Password must contain at least one lowercase letter, one uppercase letter, and one special character.',
          })
      });
    const handleSubmit = async () => {
        const validationResult = ResetPasswordSchema.validate({
            password
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
            const res=await createUserByAdmin(username,email,password)
            setSuccessMessage('succefully created')
        } catch (err) {
            console.log('Error create user:', err);
        }
    };
   

    return (
        <Container style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            width: '40%',
            margin: '1% auto -2%',
            backgroundColor: '#9e9e9e',
            boxShadow: '0px 0px 10px black',
            padding: '3%',
            marginTop:'120px'
        }}>
            <Typography variant="h4" align="center" gutterBottom>
                Create new User
            </Typography>
            <div  >
                <Grid container spacing={2}>
                <Grid item xs={12}>
                        <TextField
                            type="text"
                            label="username"
                            onChange={(e) => {setusername(e.target.value)
                                 }}
                            fullWidth
                            className="input-field"
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <TextField
                            type="email"
                            label="email"
                            onChange={(e) => {setemail(e.target.value)
                                 }}
                            fullWidth
                            className="input-field"
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <TextField
                            type="password"
                            label="password"
                            onChange={(e) => {setPassword(e.target.value);
                                setErrors((prevErrors) => ({
                                    ...prevErrors,
                                    newPassword: "", 
                                  }));
                                }}
                            fullWidth
                            className="input-field"
                        />
                        {errors.newPassword && (
          <Typography variant="body2" color="error" sx={{ width: '350px' }}>
            {errors.newPassword}
          </Typography>
        )}
                         {successMessage && (
                       <Typography variant="body2"sx={{ width: '210px',padding:'5px',color:'green' }}>
                        {successMessage}
                      </Typography>
                          )}
                    </Grid>
                    
                    <Grid item xs={12}>
                        <Button type="submit" variant="contained" color="primary" style={{
                            marginTop: '10px'
                        }} onClick={handleSubmit}>
                            Create
                        </Button>
                    </Grid>
                </Grid>
            </div>
        </Container>
    );
};


export default CreateUser;