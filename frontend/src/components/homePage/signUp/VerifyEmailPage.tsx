import React from 'react';
import { Container, Typography, Button, IconButton } from '@mui/material';
import CheckIcon from '@mui/icons-material/Check';

const VerifyEmailPage: React.FC = () => {
  return (
    <Container maxWidth="sm" sx={{minHeight: '100vh',paddingTop:'20px',display:'flex',justifyContent:'center',alignItems:'center'}}>
      <div
        style={{
          minHeight:'450px',
          padding: '20px',
          border: '1px solid #ccc',
          borderRadius: '5px',
          margin: '0 auto',
          position: 'relative',
        }}
      >
        <img src="/images/email.png" alt="Verification Image" style={{ width: '100%' }} />
        <Typography variant="h4" component="h1" gutterBottom>
          Please Verify Email
        </Typography>
        <Typography variant="body1">
            <CheckIcon sx={{color:'#1976d2' , paddingRight:'5px'}}></CheckIcon>
         We've just sent you an email. Please check your inbox to view the message and join us.
        </Typography>
        <Typography sx={{paddingTop:'10px',color:'#6c757d'}} variant="body2">
          If the email doesn’t show up soon, check your spam folder.
        </Typography>
      </div>
    </Container>
  );
};

export default VerifyEmailPage;
