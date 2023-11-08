import React from 'react';
import Typography from '@mui/material/Typography';
import { Button } from '@mui/material';
import Link from '@mui/material/Link';

const PageNotFound: React.FC = () => {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', minHeight: 'calc(100vh - 64px)' }}>
      <Typography variant="h3" color="primary" gutterBottom>
        Oops! Page Not Found
      </Typography>
      <Typography variant="body1" color="textSecondary" style={{ textAlign: 'center', marginBottom: '20px' }}>
        The page you are looking for doesn't seem to exist. It may have been moved or removed.
      </Typography>
      <img src="/images/error-404.png" alt="404 Error" style={{ width: '700px', height: '350px', marginBottom: '20px' }} />
      <Link href="/">
        <Button variant="contained" color="primary">
          Go Home
        </Button>
      </Link>
    </div>
  );
}

export default PageNotFound;
