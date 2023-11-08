import React from 'react';
import { LinkedIn, Facebook, Twitter, Instagram, YouTube } from '@mui/icons-material';
import Link from '@mui/material/Link';
import { Grid } from '@mui/material';
import './media.css';
const MediaSection = () => {
  return (
    <div style={{ backgroundColor: '#1f1e28', padding: '40px', textAlign: 'center' }}>
      <Grid container spacing={2} justifyContent="center">
        <Grid item xs={12} sm={6} md={3}>
          <Link href="https://www.linkedin.com/" target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none', color: '#1565c0' }}>
            <LinkedIn className="rotateOnHover" sx={{ fontSize: "40px" }} />
            <span style={{ color: '#fff', fontSize: '18px' }}>Follow us on LinkedIn</span>
          </Link>
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <Link href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none', color: '#3f51b5' }}>
            <Facebook className="rotateOnHover" sx={{ fontSize: "40px" }} />
            <span style={{ color: '#fff', fontSize: '18px' }}>Check out our Facebook</span>
          </Link>
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <Link href="https://twitter.com/" target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none', color: '#2196f3' }}>
            <Twitter className="rotateOnHover" sx={{ fontSize: "40px" }} />
            <span style={{ color: '#fff', fontSize: '18px' }}>See what we tweet about</span>
          </Link>
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <Link href="https://www.youtube.com/" target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none', color: 'red' }}>
            <YouTube className="rotateOnHover" sx={{ fontSize: "40px" }} />
            <span style={{ color: '#fff', fontSize: '18px' }}>Watch our YouTube</span>
          </Link>
        </Grid>
      </Grid>
    </div>
  );
}

export default MediaSection;
