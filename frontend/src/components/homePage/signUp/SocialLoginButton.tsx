import React from 'react';
import { Button, Typography } from '@mui/material';
import FacebookIcon from '@mui/icons-material/Facebook';
import GoogleIcon from '@mui/icons-material/Google';
import { Link } from 'react-router-dom';

const Social = () => {
  return (
    <div>
      <Typography variant="body1" sx={{ fontFamily: 'cursive', marginBottom: '15px', fontWeight: 'bold' }}>
        or with social media:
      </Typography>
      <hr/>
      <Link to="https://www.facebook.com/login.php">
        <Button
          variant="contained"
          color="primary"
          sx={{ fontFamily: 'cursive', marginTop: '10px', width: '100%', background: 'blue', color: 'white' }}
        >
             Continue with Facebook
          <FacebookIcon />
        </Button>
      </Link>
      <Link to="https://accounts.google.com" style={{ textDecoration: 'none' }} >
        <Button
          variant="contained"
          color="primary"
          sx={{ display:'block',fontFamily: 'cursive', marginTop: '10px', width: '100%', background: 'red', color: 'white' }}
        >
          Continue with Google
          <GoogleIcon />

        </Button>
      </Link>
    </div>
  );
};

export default Social;